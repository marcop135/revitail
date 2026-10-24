import { useEffect, useState } from 'react';

// True while the element is on screen, so a looping or one-shot animation
// starts when the reader arrives and stops burning frames once they scroll past.
export function useOnScreen(ref, threshold = 0.3) {
  const [onScreen, setOnScreen] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) {
      setOnScreen(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return onScreen;
}
