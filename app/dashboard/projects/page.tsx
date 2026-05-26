import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | SOLAR CRM",
}

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-on-surface">Projects</h1>
          <p className="mt-1 text-sm text-on-surface-variant">
            Manage your solar installation projects.
          </p>
        </div>
        <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-on-primary hover:brightness-110 transition-all">
          New Project
        </button>
      </div>
      <div className="rounded-xl border border-outline-variant/20 bg-surface/70 p-8 backdrop-blur-xl text-center">
        <p className="text-on-surface-variant">Project list will appear here.</p>
      </div>
    </div>
  )
}
