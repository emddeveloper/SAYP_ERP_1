"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { DASHBOARD_NAV, APP_NAME } from "@/constants"
import { cn } from "@/libs/utils"
import { NAV_ICON_MAP } from "./nav-icons"

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center gap-3 border-b border-outline-variant/20 px-4">
        <span className="text-lg font-bold tracking-tight text-primary">
          {APP_NAME}
        </span>
      </div>

      <nav className="flex-1 space-y-1 overflow-auto p-3">
        {DASHBOARD_NAV.map((item) => {
          const Icon = item.icon ? NAV_ICON_MAP[item.icon] : null
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/15 text-primary"
                  : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              )}
            >
              {Icon && <Icon />}
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-outline-variant/20 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
            JD
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-medium text-on-surface">
              John Doe
            </p>
            <p className="truncate text-xs text-on-surface-variant">
              admin@solarcrm.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
