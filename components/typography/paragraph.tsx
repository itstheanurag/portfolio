import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "text-lg text-neutral-400 leading-relaxed line-clamp-3",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Paragraph;
