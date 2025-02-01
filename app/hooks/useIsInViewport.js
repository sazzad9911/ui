// useIsInViewport.js
import { useState, useEffect, useRef } from 'react';

export default function useIsInViewport(options) {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isInViewport];
}
