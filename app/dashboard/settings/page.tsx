import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Settings | SOLAR CRM",
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-on-surface">Settings</h1>
        <p className="mt-1 text-sm text-on-surface-variant">
          Configure your account and preferences.
        </p>
      </div>
      <div className="rounded-xl border border-outline-variant/20 bg-surface/70 p-8 backdrop-blur-xl text-center">
        <p className="text-on-surface-variant">Settings panel will appear here.</p>
      </div>
    </div>
  )
}
