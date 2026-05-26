"use client"

import { MenuIcon } from "./nav-icons"

interface TopBarProps {
  onMenuClick: () => void
}

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-outline-variant/20 bg-surface/80 backdrop-blur-xl px-4 md:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors md:hidden"
          aria-label="Open navigation menu"
        >
          <MenuIcon />
        </button>
        <span className="text-lg font-bold tracking-tight text-primary md:hidden">
          SOLAR CRM
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
          JD
        </div>
      </div>
    </header>
  )
}
