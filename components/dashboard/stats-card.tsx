import { cn } from "@/libs/utils"

interface StatsCardProps {
  label: string
  value: string | number
  change?: string
  trend?: "up" | "down"
  className?: string
}

export function StatsCard({
  label,
  value,
  change,
  trend,
  className,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-outline-variant/20 bg-surface/70 p-6 backdrop-blur-xl shadow-[0_4px_16px_0_rgba(0,0,0,0.2)]",
        className
      )}
    >
      <p className="text-sm font-medium text-on-surface-variant">{label}</p>
      <p className="mt-2 text-3xl font-bold text-on-surface">{value}</p>
      {change && (
        <p
          className={cn(
            "mt-2 text-sm font-medium",
            trend === "up" ? "text-primary" : "text-red-400"
          )}
        >
          {trend === "up" ? "↑" : "↓"} {change}
        </p>
      )}
    </div>
  )
}
