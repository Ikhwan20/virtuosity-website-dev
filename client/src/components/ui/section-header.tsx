import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function SectionHeader({ 
  title, 
  description, 
  className,
  ...props 
}: SectionHeaderProps) {
  return (
    <div 
      className={cn("text-center mb-16", className)} 
      {...props}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">{description}</p>
      )}
    </div>
  );
}
