"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  onComplete?: () => void;
}

export default function AnimatedText({
  text,
  className,
  delay = 0,
  onComplete,
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Handle initial delay before starting
  useEffect(() => {
    if (delay > 0 && !hasStarted) {
      const timeout = setTimeout(() => {
        setHasStarted(true);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setHasStarted(true);
    }
  }, [delay, hasStarted]);

  // Handle typing animation
  useEffect(() => {
    if (!hasStarted) return;

    if (currentIndex >= text.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, 50); // Adjust typing speed here

    return () => clearTimeout(timeout);
  }, [currentIndex, text, hasStarted, onComplete]);

  return (
    <span className={cn("relative", className)}>
      {displayedText}
      {!isComplete && hasStarted && (
        <span className="inline-block w-[2px] h-[1em] bg-[#0ff4c6] ml-1 animate-blink" />
      )}
    </span>
  );
}
