import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
