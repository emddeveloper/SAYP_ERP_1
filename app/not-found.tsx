import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-zinc-600 dark:text-zinc-400">Page not found</p>
      <Link
        href="/"
        className="text-blue-600 hover:underline dark:text-blue-400"
      >
        Go back home
      </Link>
    </div>
  )
}
