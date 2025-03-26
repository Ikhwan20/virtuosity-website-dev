import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CaseStudyTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  label: string;
  isActive: boolean;
}

export function CaseStudyTab({ 
  id, 
  label, 
  isActive, 
  className,
  onClick,
  ...props 
}: CaseStudyTabProps) {
  return (
    <button
      className={cn(
        "text-lg py-2 px-6 font-medium border-b-2",
        isActive ? "border-primary text-primary" : "border-transparent text-neutral-600 hover:text-neutral-900",
        className
      )}
      onClick={() => onClick && onClick(id)}
      data-target={id}
      {...props}
    >
      {label}
    </button>
  );
}
