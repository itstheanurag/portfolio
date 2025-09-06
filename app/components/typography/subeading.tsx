import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SubheadingProps {
  children: ReactNode;
  className?: string;
}

const Subheading: React.FC<SubheadingProps> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "text-xl sm:text-3xl font-light text-neutral-100 tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Subheading;
