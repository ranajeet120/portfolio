import { useState, useEffect, useRef, type RefObject } from "react";

type UseInViewReturn<T extends HTMLElement> = [RefObject<T | null>, boolean];

function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.12,
): UseInViewReturn<T> {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    const currentRef = ref.current;

    if (currentRef) observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, visible];
}

export default useInView;
