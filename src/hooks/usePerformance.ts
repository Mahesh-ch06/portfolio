import { useState, useEffect, useRef, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '50px 0px -50px 0px', triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  const cleanup = useCallback(() => {
    if (observer.current) {
      observer.current.disconnect();
      observer.current = null;
    }
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create observer only once
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        ([entry]) => {
          const isIntersecting = entry.isIntersecting;
          setIsVisible(isIntersecting);

          if (isIntersecting && !hasBeenVisible) {
            setHasBeenVisible(true);
            if (triggerOnce) {
              cleanup();
            }
          }
        },
        {
          threshold,
          rootMargin,
        }
      );
    }

    observer.current.observe(element);

    return cleanup;
  }, [threshold, rootMargin, triggerOnce, hasBeenVisible, cleanup]);

  return {
    elementRef,
    isVisible: triggerOnce ? hasBeenVisible : isVisible,
    hasBeenVisible,
  };
};

// Debounced scroll hook for performance
export const useOptimizedScroll = (callback: () => void, delay: number = 16) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(callback, delay);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [callback, delay]);
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    renderCount: 0,
    lastRenderTime: 0,
  });

  useEffect(() => {
    const startTime = performance.now();
    
    setMetrics(prev => ({
      renderCount: prev.renderCount + 1,
      lastRenderTime: startTime,
    }));

    // Log slow renders in development
    if (process.env.NODE_ENV === 'development') {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      if (renderTime > 16) { // 16ms = 60fps threshold
        console.warn(`Slow render detected: ${renderTime.toFixed(2)}ms`);
      }
    }
  });

  return metrics;
};

// Throttled resize hook
export const useThrottledResize = (callback: () => void, delay: number = 100) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(callback, delay);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [callback, delay]);
};
