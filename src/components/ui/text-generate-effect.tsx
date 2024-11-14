"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  isTitle = true, // Flag to determine title or text
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  isTitle?: boolean; // Flag to differentiate title and text styling
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 2,
        delay: stagger(0.4),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isLastWord = idx === wordsArray.length - 1;
          return (
            <motion.span
              key={word + idx}
              className={cn(
                "font-bold opacity-0",
                isTitle ? "text-[5rem]" : "font-normal !text-2xl !text-neutral-300 leading-relaxed", 
                isLastWord ? "text-[#14b8a6]" : "text-neutral-500" 
              )}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        {/* Render the words with dynamic styles */}
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
