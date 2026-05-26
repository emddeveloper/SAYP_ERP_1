import type { Metadata } from "next"
import { StatsCard } from "@/components/dashboard/stats-card"

export const metadata: Metadata = {
  title: "Dashboard | SOLAR CRM",
}

const recentProjects = [
  { name: "Sunrise Solar Farm", status: "In Progress", value: "$245,000" },
  { name: "Green Valley Residential", status: "Quote Sent", value: "$82,500" },
  { name: "Metro Commercial Complex", status: "Site Survey", value: "$510,000" },
  { name: "Lakeview Community Solar", status: "Completed", value: "$178,000" },
  { name: "Highway 101 Rest Stop", status: "In Progress", value: "$93,200" },
]

const statusStyles: Record<string, string> = {
  "In Progress": "bg-primary/10 text-primary",
  "Quote Sent": "bg-blue-400/10 text-blue-400",
  "Site Survey": "bg-amber-400/10 text-amber-400",
  Completed: "bg-green-400/10 text-green-400",
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-on-surface">Dashboard</h1>
        <p className="mt-1 text-sm text-on-surface-variant">
          Welcome back, John. Here&apos;s what&apos;s happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard label="Total Projects" value={47} change="12% from last month" trend="up" />
        <StatsCard label="Active Customers" value={128} change="8% from last month" trend="up" />
        <StatsCard label="Monthly Revenue" value="$342K" change="22% from last month" trend="up" />
        <StatsCard label="Pending Quotes" value={14} change="3% from last month" trend="down" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-outline-variant/20 bg-surface/70 p-6 backdrop-blur-xl shadow-[0_4px_16px_0_rgba(0,0,0,0.2)]">
          <h2 className="text-lg font-semibold text-on-surface">Revenue Overview</h2>
          <p className="mt-1 text-sm text-on-surface-variant">Monthly revenue trend</p>
          <div className="mt-6 h-48 flex items-end justify-between gap-2 px-2">
            {[40, 55, 35, 60, 45, 70, 55, 80, 50, 72, 85, 92].map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t bg-primary/60 hover:bg-primary transition-colors"
                  style={{ height: `${h}%` }}
                />
                <span className="text-xs text-on-surface-variant">
                  {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-outline-variant/20 bg-surface/70 p-6 backdrop-blur-xl shadow-[0_4px_16px_0_rgba(0,0,0,0.2)]">
          <h2 className="text-lg font-semibold text-on-surface">Project Pipeline</h2>
          <p className="mt-1 text-sm text-on-surface-variant">By status</p>
          <div className="mt-6 space-y-4">
            {[
              { label: "In Progress", count: 12, color: "bg-primary" },
              { label: "Quote Sent", count: 8, color: "bg-blue-400" },
              { label: "Site Survey", count: 5, color: "bg-amber-400" },
              { label: "Completed", count: 22, color: "bg-green-400" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-on-surface-variant">{item.label}</span>
                  <span className="font-medium text-on-surface">{item.count}</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-surface-container-high">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${(item.count / 47) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Projects Table */}
      <div className="rounded-xl border border-outline-variant/20 bg-surface/70 backdrop-blur-xl shadow-[0_4px_16px_0_rgba(0,0,0,0.2)] overflow-hidden">
        <div className="border-b border-outline-variant/20 px-6 py-4">
          <h2 className="text-lg font-semibold text-on-surface">Recent Projects</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant/20 bg-surface-container-high/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {recentProjects.map((project) => (
                <tr
                  key={project.name}
                  className="hover:bg-surface-container-high/50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-on-surface">
                    {project.name}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        statusStyles[project.status] ?? "bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-on-surface">
                    {project.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
