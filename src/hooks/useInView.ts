import { useState, useEffect, RefObject } from "react";

export default function useInView(ref: RefObject<HTMLElement>, threshold: number = 0.15): boolean {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}