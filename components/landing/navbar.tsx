import Link from "next/link"

export function Navbar() {
  return (
    <header className="z-40 flex h-14 w-full shrink-0 items-center justify-between border-b border-outline-variant/50 bg-surface/80 px-3 shadow-sm backdrop-blur-xl sm:px-4 md:h-20 md:px-12">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold tracking-tight text-primary sm:text-xl md:text-2xl">
          SOLAR CRM
        </span>
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <Link
          href="/login"
          className="text-xs font-medium text-on-surface-variant transition-colors duration-200 hover:text-primary sm:text-sm"
        >
          Log In
        </Link>
        <Link
          href="#signup"
          className="rounded-lg bg-primary px-4 py-1.5 text-xs font-bold text-on-primary shadow-sm transition-all duration-200 hover:opacity-80 sm:px-5 sm:py-2 sm:text-sm md:px-6"
        >
          Sign Up
        </Link>
      </div>
    </header>
  )
}
