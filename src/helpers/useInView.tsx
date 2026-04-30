// import { useState, useEffect, useRef } from "react";

// function useInView(threshold = 0.12) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setVisible(true);
//           obs.disconnect();
//         }
//       },
//       { threshold },
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);
//   return [ref, visible];
// }

// export default useInView;

import { useState, useEffect, useRef, RefObject } from "react";

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
