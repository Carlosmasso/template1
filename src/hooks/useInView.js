import { useRef, useEffect, useState } from "react";

export default function useInView(options = {}) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.18, ...options }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, options.root, options.rootMargin, options.threshold]);

  return [ref, inView];
}
