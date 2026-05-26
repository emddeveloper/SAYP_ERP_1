import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(_request: NextRequest) {
  // TODO: Implement authentication check
  // Example:
  // const session = _request.cookies.get("session")
  // if (!session) {
  //   return NextResponse.redirect(new URL("/login", _request.url))
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
