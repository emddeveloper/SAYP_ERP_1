"use client"

import { useState } from "react"
import { MailIcon, LockIcon, EyeIcon } from "./icons"

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => e.preventDefault()}
      id="signup"
    >
      <div className="space-y-2">
        <label className="block ml-1 text-xs font-medium text-on-surface-variant">
          Full Name
        </label>
        <input
          className="w-full bg-surface-container border-0 border-b border-outline-variant/50 px-4 py-3 rounded-t-lg text-on-surface placeholder:text-outline-variant/70 focus:outline-none focus:border-b-primary focus:shadow-[0_4px_12px_-2px_rgba(74,225,118,0.2)] transition-all duration-200 text-base"
          placeholder="John Doe"
          type="text"
        />
      </div>

      <div className="space-y-2">
        <label className="block ml-1 text-xs font-medium text-on-surface-variant">
          Work Email
        </label>
        <div className="group relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">
            <MailIcon />
          </span>
          <input
            className="w-full bg-surface-container border-0 border-b border-outline-variant/50 pl-11 pr-4 py-3 rounded-t-lg text-on-surface placeholder:text-outline-variant/70 focus:outline-none focus:border-b-primary focus:shadow-[0_4px_12px_-2px_rgba(74,225,118,0.2)] transition-all duration-200 text-base"
            placeholder="name@company.com"
            type="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block ml-1 text-xs font-medium text-on-surface-variant">
          Password
        </label>
        <div className="group relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">
            <LockIcon />
          </span>
          <input
            className="w-full bg-surface-container border-0 border-b border-outline-variant/50 pl-11 pr-12 py-3 rounded-t-lg text-on-surface placeholder:text-outline-variant/70 focus:outline-none focus:border-b-primary focus:shadow-[0_4px_12px_-2px_rgba(74,225,118,0.2)] transition-all duration-200 text-base"
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            type={showPassword ? "text" : "password"}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors"
          >
            <EyeIcon />
          </button>
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-primary text-on-primary py-4 rounded-lg text-sm font-bold shadow-[0_0_20px_rgba(74,225,118,0.4)] hover:brightness-110 active:scale-[0.98] transition-all duration-200"
        >
          Create Account
        </button>
      </div>
    </form>
  )
}
