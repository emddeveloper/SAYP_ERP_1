import { StarIcon, AnalyticsIcon, LeafIcon } from "./icons"

export function ValueProps() {
  return (
    <div className="hidden flex-1 flex-col items-start justify-center space-y-6 pl-10 md:flex lg:space-y-10 lg:pl-16 xl:pl-24">
      <div className="space-y-2 max-w-lg">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
          <StarIcon />
          ENTERPRISE GRADE
        </span>
        <h2 className="text-3xl font-bold leading-tight text-white lg:text-4xl xl:text-5xl">
          Scale your solar empire with precision.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:gap-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-container-high border border-outline-variant/30 text-primary">
            <AnalyticsIcon />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-on-surface lg:text-2xl">
              Predictive Lead Scoring
            </h3>
            <p className="text-sm text-on-surface-variant lg:text-base">
              Identify high-intent customers before the first contact.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-container-high border border-outline-variant/30 text-primary">
            <LeafIcon />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-on-surface lg:text-2xl">
              PV Module Integration
            </h3>
            <p className="text-sm text-on-surface-variant lg:text-base">
              Direct sync with top industry hardware providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
