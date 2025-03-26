import { MouseEvent, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CaseStudyTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  label: string;
  isActive: boolean;
  onClick?: (id: string) => void;
}

export function CaseStudyTab({ 
  id, 
  label, 
  isActive, 
  className,
  onClick,
  ...props 
}: CaseStudyTabProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick && onClick(id);
  };

  return (
    <button
      className={cn(
        "text-lg py-2 px-6 font-medium border-b-2",
        isActive ? "border-primary text-primary" : "border-transparent text-neutral-600 hover:text-neutral-900",
        className
      )}
      onClick={handleClick}
      data-target={id}
      {...props}
    >
      {label}
    </button>
  );
}
