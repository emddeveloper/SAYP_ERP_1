import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Customers | SOLAR CRM",
}

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-on-surface">Customers</h1>
          <p className="mt-1 text-sm text-on-surface-variant">
            View and manage your customer relationships.
          </p>
        </div>
        <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-on-primary hover:brightness-110 transition-all">
          Add Customer
        </button>
      </div>
      <div className="rounded-xl border border-outline-variant/20 bg-surface/70 p-8 backdrop-blur-xl text-center">
        <p className="text-on-surface-variant">Customer list will appear here.</p>
      </div>
    </div>
  )
}
