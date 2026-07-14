import { useEffect, useRef, useState } from "react";

/**
 * useReveal
 * Attaches an IntersectionObserver to a ref and flips `visible` to true
 * the first time the element enters the viewport. Respects users who
 * have already seen the element (fires once) and is cheap enough to
 * use on many elements on one page.
 */
export default function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the user has no JS-observable node (SSR) or already visible, bail.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
