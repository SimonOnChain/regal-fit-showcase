import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useInView = (options: UseInViewOptions = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        
        if (inView && (!triggerOnce || !hasTriggered)) {
          setIsInView(true);
          setHasTriggered(true);
        } else if (!triggerOnce && !inView) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { ref, isInView };
};

// Reusable animated components
export const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = "fade-slide-in",
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  animation?: string;
  delay?: number;
}) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? animation : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const AnimatedCard = ({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`${className} scale-hover gold-glow-hover transition-all duration-300 ${
        isInView ? 'animate-slide-up opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};