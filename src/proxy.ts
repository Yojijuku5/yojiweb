import { NextRequest, NextResponse } from 'next/server'

export function proxy(req: NextRequest) {
    const host = req.headers.get("host") || ""

    const subdomain = host.split(".")[0]

    if (subdomain == "tatsujinradio") {
        return NextResponse.rewrite(new URL("/tatsujinradio", req.url))
    }

    return NextResponse.next()
}