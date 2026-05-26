"use client"

import { useEffect, useRef } from "react"

export function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const styleEl = document.createElement("style")
    styleEl.textContent = `
      @keyframes float-particle-1 { from { transform: translate(0, 0); opacity: 0.2; } to { transform: translate(20px, -30px); opacity: 0.5; } }
      @keyframes float-particle-2 { from { transform: translate(0, 0); opacity: 0.15; } to { transform: translate(-25px, -15px); opacity: 0.45); } }
      @keyframes float-particle-3 { from { transform: translate(0, 0); opacity: 0.25; } to { transform: translate(15px, -20px); opacity: 0.55); } }
    `
    document.head.appendChild(styleEl)

    const particles = Array.from({ length: 15 }, (_, i) => {
      const el = document.createElement("div")
      const size = Math.random() * 40 + 10
      el.className =
        "absolute bg-primary/20 rounded-full blur-xl pointer-events-none"
      el.style.width = `${size}px`
      el.style.height = `${size}px`
      el.style.left = `${Math.random() * 100}%`
      el.style.top = `${Math.random() * 100}%`
      el.style.animation = `float-particle-${(i % 3) + 1} ${Math.random() * 10 + 5}s infinite alternate ease-in-out`
      el.style.animationDelay = `${Math.random() * 5}s`
      return el
    })

    for (const p of particles) {
      container.appendChild(p)
    }

    return () => {
      for (const p of particles) {
        p.remove()
      }
      styleEl.remove()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 -z-10"
      aria-hidden="true"
    />
  )
}
