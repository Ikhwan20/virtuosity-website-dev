import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface StatsCardProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
}

export function StatsCard({ 
  value, 
  label, 
  className,
  ...props 
}: StatsCardProps) {
  return (
    <div 
      className={cn("text-center p-4 bg-neutral-100 rounded-lg", className)} 
      {...props}
    >
      <h3 className="text-4xl font-montserrat font-bold text-primary mb-2">{value}</h3>
      <p className="text-sm text-neutral-600">{label}</p>
    </div>
  );
}
