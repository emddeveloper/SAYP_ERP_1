import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analytics | SOLAR CRM",
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-on-surface">Analytics</h1>
        <p className="mt-1 text-sm text-on-surface-variant">
          Insights and performance metrics for your solar business.
        </p>
      </div>
      <div className="rounded-xl border border-outline-variant/20 bg-surface/70 p-8 backdrop-blur-xl text-center">
        <p className="text-on-surface-variant">Analytics charts will appear here.</p>
      </div>
    </div>
  )
}
