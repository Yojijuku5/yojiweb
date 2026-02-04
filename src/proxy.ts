import { NextRequest, NextResponse } from 'next/server'

export const config = {
    matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
}

export default function proxy(req: NextRequest) {
    const hostname = req.headers.get("host")

    console.log("RAW HOST HEADER:", hostname)

    let currentHost
    if (process.env.NODE_ENV === "production") {
        const baseDomain = process.env.BASE_DOMAIN
        currentHost = hostname?.replace(`.${baseDomain}`, "")
    }
    else {
        currentHost = hostname?.replace(`.localhost:3000`, "")
    }

    console.log("PARSED currentHost:", currentHost)

    if (!currentHost) {
        console.log("No currentHost, skipping rewrite")
        return NextResponse.next()
    }

    if (currentHost === "tatsujinradio") {
        console.log("Rewriting to /tatsujinradio")
        return NextResponse.rewrite(new URL(`/tatsujinradio`, req.url))
    }

    console.log("No rewrite matched, continuing")
    return NextResponse.next()
}