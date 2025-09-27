// A lightweight hook to compute scroll progress for a given element
// or for the whole page when no ref is provided.
import { useEffect, useRef, useState } from "react";

export function useScrollProgress(elementRef) {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const computeElementProgress = (element) => {
      const rect = element.getBoundingClientRect();
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;

      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      if (elementTop > windowHeight) {
        return 0;
      }
      if (elementBottom < 0) {
        return 100;
      }

      const totalScrollable = elementHeight + windowHeight;
      const scrolled = windowHeight - elementTop;
      const pct = (scrolled / totalScrollable) * 100;
      return Math.max(0, Math.min(100, pct));
    };

    const computePageProgress = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || 0;
      const maxScroll =
        (document.documentElement.scrollHeight || 0) - window.innerHeight;
      const pct = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      return Math.max(0, Math.min(100, pct));
    };

    const update = () => {
      ticking.current = false;
      const el = elementRef && elementRef.current;
      const next = el ? computeElementProgress(el) : computePageProgress();
      setProgress(next);
    };

    const onScrollOrResize = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };

    // Initial measure
    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [elementRef]);

  return progress;
}
