import type { NavItem } from "@/types"

export const APP_NAME = "SOLAR CRM"

export const DASHBOARD_NAV: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "dashboard" },
  { label: "Projects", href: "/dashboard/projects", icon: "projects" },
  { label: "Customers", href: "/dashboard/customers", icon: "customers" },
  { label: "Analytics", href: "/dashboard/analytics", icon: "analytics" },
  { label: "Settings", href: "/dashboard/settings", icon: "settings" },
]
