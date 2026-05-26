"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white dark:bg-black">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{error.message}</p>
        <button
          onClick={reset}
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white dark:bg-zinc-100 dark:text-black"
        >
          Try again
        </button>
      </body>
    </html>
  )
}
