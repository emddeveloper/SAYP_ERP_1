export function Footer() {
  return (
    <footer className="flex h-24 w-full flex-col md:flex-row items-center justify-between gap-6 bg-surface border-t border-outline-variant/30 px-4 md:px-12">
      <div className="text-sm font-bold text-on-surface">SOLAR CRM</div>
      <div className="flex flex-wrap justify-center gap-6">
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
      <div className="text-xs text-on-surface-variant">
        &copy; 2024 SOLAR CRM. All rights reserved.
      </div>
    </footer>
  )
}
