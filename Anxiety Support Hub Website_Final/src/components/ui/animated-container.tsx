import React, { useState, useEffect, ReactNode } from "react";

type AnimationType = "appear" | "rise" | "expand" | "none";

interface AnimatedContainerProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  staggerIndex?: number; 
  className?: string;
  once?: boolean;
  threshold?: number;
}

export function AnimatedContainer({
  children,
  animation = "appear",
  delay = 0,
  staggerIndex,
  className = "",
  once = true,
  threshold = 0.1
}: AnimatedContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Handle the animation based on visibility
  useEffect(() => {
    if (animation === "none") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!once || (once && !hasAnimated)) {
              setIsVisible(true);
              setHasAnimated(true);
            }
            if (once) observer.disconnect();
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, once, hasAnimated, threshold]);

  // Determine the animation class
  const animationClass = animation === "none" 
    ? "" 
    : `animate-${animation}`;

  // Determine the delay class
  let delayClass = "";
  if (staggerIndex !== undefined) {
    delayClass = `stagger-${Math.min(Math.max(staggerIndex, 1), 12)}`;
  } else if (delay > 0) {
    // Convert delay to the nearest predefined delay class
    const delayValues = [100, 200, 300, 400, 500];
    const closestDelay = delayValues.reduce((prev, curr) => 
      Math.abs(curr - delay) < Math.abs(prev - delay) ? curr : prev
    );
    delayClass = `delay-${closestDelay}`;
  }

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"} ${isVisible ? delayClass : ""}`}
      style={{ willChange: "opacity, transform", height: "100%", width: "100%" }}
    >
      {children}
    </div>
  );
}