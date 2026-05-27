export function Footer() {
  return (
    <footer className="flex h-16 w-full shrink-0 items-center justify-between gap-3 border-t border-outline-variant/30 bg-surface px-3 sm:px-4 md:h-24 md:px-12">
      <div className="text-xs font-bold text-on-surface sm:text-sm">SOLAR CRM</div>
      <div className="hidden flex-wrap justify-center gap-6 md:flex">
        <a
          href="#"
          className="text-xs text-on-surface-variant hover:text-on-surface transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-xs text-on-surface-variant hover:text-on-surface transition-colors"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="text-xs text-on-surface-variant hover:text-on-surface transition-colors"
        >
          Security
        </a>
        <a
          href="#"
          className="text-xs text-on-surface-variant hover:text-on-surface transition-colors"
        >
          Help Center
        </a>
      </div>
      <div className="text-[10px] text-on-surface-variant sm:text-xs">
        &copy; 2024 SOLAR CRM. All rights reserved.
      </div>
    </footer>
  )
}
