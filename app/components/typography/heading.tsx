import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        "text-2xl sm:text-4xl font-light text-neutral-100 tracking-tight mb-6",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
