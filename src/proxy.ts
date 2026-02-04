import { NextRequest, NextResponse } from 'next/server'

export const config = {
    matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
}

export default function proxy(req: NextRequest) {
    const hostname = req.headers.get("host")

    const currentHost = hostname.split(".")[0]

    console.log(JSON.stringify({
        hostname,
        currentHost,
    }))

    if (!currentHost) {
        return NextResponse.next()
    }

    if (currentHost === "tatsujinradio") {
        return NextResponse.rewrite(new URL(`/tatsujinradio`, req.url))
    }

    return NextResponse.next()
}