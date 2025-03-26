import { HTMLAttributes, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatsCardProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
}

export function StatsCard({ 
  value, 
  label, 
  className,
  ...props 
}: StatsCardProps) {
  const [displayValue, setDisplayValue] = useState<string | number>(
    typeof value === 'number' ? 0 : value
  );
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Function to check if element is in viewport
  const isInViewport = () => {
    const element = elementRef.current;
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Create counter animation with easing
  useEffect(() => {
    const handleScroll = () => {
      if (isInViewport() && !isVisible) {
        setIsVisible(true);
        
        if (typeof value === 'number') {
          let start = 0;
          const duration = 1500; // ms
          const framesCount = 60;
          const increment = value / framesCount;
          const frameDuration = duration / framesCount;
          let frame = 0;
          
          // Easing function - ease out cubic
          const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
          
          const timer = setInterval(() => {
            frame++;
            const progress = frame / framesCount;
            const easedProgress = easeOutCubic(progress);
            
            const currentValue = Math.round(easedProgress * value);
            
            if (frame >= framesCount) {
              clearInterval(timer);
              setDisplayValue(value);
            } else {
              setDisplayValue(currentValue);
            }
          }, frameDuration);
          
          return () => clearInterval(timer);
        }
      }
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [value, isVisible]);

  return (
    <div 
      ref={elementRef}
      className={cn("text-center p-4 bg-neutral-100 rounded-lg", className)} 
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-4xl font-montserrat font-bold text-primary mb-2">
          {displayValue}
        </h3>
        <p className="text-sm text-neutral-600">{label}</p>
      </motion.div>
    </div>
  );
}
