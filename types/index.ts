export interface NavItem {
  label: string
  href: string
  icon?: string
}

export interface User {
  id: string
  name: string
  email: string
  companyId: string
  role: "admin" | "manager" | "viewer"
}

export interface DashboardStats {
  totalProjects: number
  activeProjects: number
  totalCustomers: number
  monthlyRevenue: number
}
