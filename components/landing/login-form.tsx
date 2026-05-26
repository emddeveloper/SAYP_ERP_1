"use client"

import { useState } from "react"
import { MailIcon, LockIcon, EyeIcon, ArrowForwardIcon, SpinnerIcon } from "./icons"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <form className="w-full space-y-6" onSubmit={handleSubmit} id="loginForm">
      <div className="space-y-2">
        <label
          className="block ml-1 text-xs font-medium text-on-surface-variant"
          htmlFor="email"
        >
          Work Email
        </label>
        <div className="group relative rounded-lg transition-all duration-300 focus-within:shadow-[0_0_15px_rgba(74,225,118,0.2)] focus-within:border-primary">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
            <MailIcon />
          </span>
          <input
            className="w-full bg-surface-container-low border border-outline-variant/30 text-on-surface rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-all text-base placeholder:text-on-surface-variant/40"
            id="email"
            name="email"
            placeholder="name@company.com"
            required
            type="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center ml-1">
          <label
            className="text-xs font-medium text-on-surface-variant"
            htmlFor="password"
          >
            Password
          </label>
          <a
            href="#"
            className="text-xs font-medium text-primary hover:text-primary-fixed transition-colors"
          >
            Forgot Password?
          </a>
        </div>
        <div className="group relative rounded-lg transition-all duration-300 focus-within:shadow-[0_0_15px_rgba(74,225,118,0.2)] focus-within:border-primary">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
            <LockIcon />
          </span>
          <input
            className="w-full bg-surface-container-low border border-outline-variant/30 text-on-surface rounded-lg py-4 pl-12 pr-12 focus:outline-none focus:border-primary transition-all text-base placeholder:text-on-surface-variant/40"
            id="password"
            name="password"
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            required
            type={showPassword ? "text" : "password"}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <EyeIcon />
          </button>
        </div>
      </div>

      <div className="flex items-center ml-1">
        <input
          className="h-4 w-4 rounded border-outline-variant/50 bg-surface-container-low accent-primary"
          id="remember"
          type="checkbox"
        />
        <label
          className="ml-2 text-xs font-medium text-on-surface-variant cursor-pointer select-none"
          htmlFor="remember"
        >
          Remember this device
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] text-on-primary text-2xl font-semibold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
      >
        {loading ? (
          <SpinnerIcon />
        ) : (
          <>
            <span>Login</span>
            <span className="group-hover:translate-x-1 transition-transform">
              <ArrowForwardIcon />
            </span>
          </>
        )}
      </button>
    </form>
  )
}
