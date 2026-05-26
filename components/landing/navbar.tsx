import Link from "next/link"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between bg-surface/80 backdrop-blur-xl border-b border-outline-variant/50 px-4 md:px-12 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold tracking-tight text-primary">
          SOLAR CRM
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
        >
          Log In
        </Link>
        <Link
          href="#signup"
          className="bg-primary text-on-primary px-6 py-2 rounded-lg text-sm font-bold hover:opacity-80 transition-all duration-200 shadow-sm"
        >
          Sign Up
        </Link>
      </div>
    </header>
  )
}
