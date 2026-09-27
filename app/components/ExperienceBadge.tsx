"use client";

import { useEffect, useRef, useState, useCallback } from "react";

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(target: number, running: boolean, duration = 1500) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!running) return;

    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);

      setDisplay(Math.round(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [running, target, duration]);

  return display;
}

export default function ExperienceBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  
  const value = useCountUp(21, animate);

  /* Check reduced-motion preference once */
  const prefersReducedMotion = useRef(false);
  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* If reduced motion is preferred, show final values immediately */
    if (prefersReducedMotion.current) {
      setAnimate(true);
    }
  }, []);

  /* Intersection Observer — fires once, then disconnects */
  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setAnimate(true);
        observer.disconnect();
      }
    },
    []
  );

  useEffect(() => {
    if (animate) return;
    const el = badgeRef.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.5,
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [animate, onIntersect]);

  return (
    <div 
      ref={badgeRef}
      className="absolute -bottom-4 -left-2 md:bottom-6 md:left-6 bg-secondary/95 backdrop-blur-[8px] text-white px-5 py-4 rounded-xl shadow-lg flex items-center gap-2"
    >
      <span 
        className="text-4xl md:text-5xl font-black tracking-tighter"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {value}
      </span>
      <span className="text-xs leading-tight font-semibold max-w-[120px] tracking-tight">
        Years experience in transportation
      </span>
    </div>
  );
}
