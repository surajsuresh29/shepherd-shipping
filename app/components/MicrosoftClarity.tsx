"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

export default function MicrosoftClarity() {
  const pathname = usePathname();
  const rawId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  const projectId = rawId?.trim();

  // Shared layout stop-signal: proactively stop tracking if route enters /outstatic
  useEffect(() => {
    if (pathname && pathname.startsWith("/outstatic")) {
      const win = window as unknown as { clarity?: (...args: unknown[]) => void };
      if (typeof win.clarity === "function") {
        win.clarity("stop");
      }
    }
  }, [pathname]);

  // Guard Clause: skip if not configured, set to placeholder, or on Outstatic routes
  if (
    !projectId ||
    projectId === "" ||
    projectId === "YOUR_CLARITY_PROJECT_ID" ||
    (pathname && pathname.startsWith("/outstatic"))
  ) {
    return null;
  }

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
              if (window.location.pathname.startsWith('/outstatic')) return;
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${projectId}");
        `,
      }}
    />
  );
}
