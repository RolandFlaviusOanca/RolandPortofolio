"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  texts: string[]; // Multiple texts
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  texts, // array of text paragraphs
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Track which text is currently being animated

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);  // Start animations when the element is in view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    // Trigger the next paragraph animation after the current one is done
    if (currentIndex < texts.length - 1 && isInView) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, (texts[currentIndex].length * delayMultiple + duration) * 1000); // Wait until current text is done

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [currentIndex, texts, isInView, duration, delayMultiple]);

  return (
    <div ref={ref} className="flex flex-col ">
      {texts.map((text, index) => (
        <div key={index} className="flex ">
          <AnimatePresence>
            {isInView && index <= currentIndex &&
              text.split("").map((char, i) => (
                <motion.h1
                  key={i}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={framerProps}
                  transition={{ duration, delay: i * delayMultiple }}
                  className={cn("drop-shadow-sm", className)}
                >
                  {char === " " ? <span>&nbsp;</span> : char}
                </motion.h1>
              ))}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
