import React, { ReactNode } from "react";
import { AnimatedContainer } from "./animated-container";

interface AnimatedGridProps {
  children: ReactNode[];
  animation?: "appear" | "rise" | "expand" | "none";
  baseDelay?: number;
  className?: string;
  itemClassName?: string;
  cols?: number;
  staggerDelay?: "row" | "column" | "diagonal" | "linear";
}

export function AnimatedGrid({
  children,
  animation = "rise",
  baseDelay = 0,
  className = "",
  itemClassName = "",
  cols = 3,
  staggerDelay = "linear",
}: AnimatedGridProps) {
  // Calculate stagger index based on the selected pattern
  const getStaggerIndex = (index: number) => {
    if (staggerDelay === "linear") {
      return index + 1; // Simple linear delay
    }
    
    if (staggerDelay === "row") {
      // Elements in the same row have the same delay
      return Math.floor(index / cols) + 1;
    }
    
    if (staggerDelay === "column") {
      // Elements in the same column have the same delay
      return (index % cols) + 1;
    }
    
    if (staggerDelay === "diagonal") {
      // Diagonal wave pattern - sum of row and column indices
      const row = Math.floor(index / cols);
      const col = index % cols;
      return row + col + 1;
    }
    
    return index + 1; // Default to linear
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimatedContainer
          animation={animation}
          delay={baseDelay}
          staggerIndex={getStaggerIndex(index)}
          className={itemClassName}
        >
          {child}
        </AnimatedContainer>
      ))}
    </div>
  );
}