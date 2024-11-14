import { cn } from "@/lib/utils";
import { IconComponents, IconSparkles, TablerIcon } from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto ",
        className
      )}
    >
      {/* Items will be passed directly in this order */}
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  content,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: TablerIcon;
  content?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-[28px] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-[#2a2d2f] border-neutral-700 border-2 dark:border-neutral-700  justify-between flex flex-col space-y-2",
        className
      )}
    >
      {header}

      <div className="pl-2 flex items-center gap-2">
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {icon &&
            React.createElement(icon, { className: "h-8 w-8 text-[#14b8a6] font-normal" })}
        </motion.div>
        <p className="text-neutral-300 text-2xl">{title}</p>
      </div>
    </div>
  );
};
