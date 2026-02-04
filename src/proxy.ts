import { NextRequest, NextResponse } from 'next/server'

export const config = {
    matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
}

export default function proxy(req: NextRequest) {
    const hostname = req.headers.get("host")

    const currentHost = hostname.split(".")[0]

    console.log(JSON.stringify({
        hostname,
        baseDomain: process.env.BASE_DOMAIN,
        currentHost,
        env: process.env.NODE_ENV,
    }))

    if (!currentHost) {
        return NextResponse.next()
    }

    if (currentHost === "tatsujinradio") {
        return NextResponse.rewrite(new URL(`/tatsujinradio`, req.url))
    }

    return NextResponse.next()
}