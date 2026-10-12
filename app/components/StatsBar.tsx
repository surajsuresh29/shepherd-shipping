"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Building2, MapPin } from "lucide-react";

function HourglassIcon({
  className,
  strokeWidth = 1.8,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 22h14M5 2h14M17 2c0 4-5 5-5 10s5 6 5 10M7 2c0 4 5 5 5 10s-5 6-5 10" />
    </svg>
  );
}

function CrateIcon({
  className,
  strokeWidth = 1.8,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 8L12 3 3 8l9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8M12 13v8" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Stat {
  target: number;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const stats: Stat[] = [
  { target: 21, label: "Years experience in transportation", icon: HourglassIcon },
  { target: 2004, label: "Established in Dubai, U.A.E.", icon: Building2 },
  { target: 4, label: "Core services: air, sea, customs, 3PL", icon: CrateIcon },
  { target: 8, label: "Offices across UAE, HK & US", icon: MapPin },
];

/* ------------------------------------------------------------------ */
/*  Ease-out-expo helper                                               */
/* ------------------------------------------------------------------ */

/** Returns a value from 0 → 1 with a fast start that decelerates. */
function easeOutExpo(t: number): number {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/* ------------------------------------------------------------------ */
/*  Count-up hook                                                      */
/* ------------------------------------------------------------------ */

function useCountUp(target: number, running: boolean, duration = 1300) {
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

/* ------------------------------------------------------------------ */
/*  Individual stat cell                                               */
/* ------------------------------------------------------------------ */

function StatCell({
  stat,
  index,
  animate,
}: {
  stat: Stat;
  index: number;
  animate: boolean;
}) {
  const value = useCountUp(stat.target, animate);
  const Icon = stat.icon;

  return (
    <div
      className="flex items-center gap-4 py-6 first:pt-0 last:pb-0 md:py-0 md:px-8 md:first:pl-0 md:last:pr-0 flex-1"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Icon badge */}
      <div className="flex-none w-14 h-14 rounded-2xl bg-[#51B0B7]/10 border border-[#51B0B7]/30 flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#51B0B7]" strokeWidth={1.8} />
      </div>

      {/* Number + label */}
      <div>
        <div
          className="cursor-text text-white text-4xl lg:text-5xl font-bold tracking-tight leading-none"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {value}
        </div>
        <div className="cursor-text text-white text-[13px] mt-1.5 font-medium leading-snug max-w-[200px]">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

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
    /* Skip observer if already animated (reduced-motion path) */
    if (animate) return;

    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.35,
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [animate, onIntersect]);

  return (
    <div
      ref={sectionRef}
      className="bg-primary border-t-[3px] border-[#51B0B7]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 2px, transparent 2px 26px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center divide-y divide-white/10 md:divide-y-0 md:divide-x md:divide-white/15">
        {stats.map((stat, index) => (
          <StatCell
            key={stat.target}
            stat={stat}
            index={index}
            animate={animate}
          />
        ))}
      </div>
    </div>
  );
}
