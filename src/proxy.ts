import { NextRequest, NextResponse } from 'next/server'

export const config = {
    matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
}

export default function proxy(req: NextRequest) {
    const hostname = req.headers.get("host")

    let currentHost
    if (process.env.NODE_ENV === "production") {
        const baseDomain = process.env.BASE_DOMAIN
        currentHost = hostname?.replace(`.${baseDomain}`, "")
    }
    else {
        currentHost = hostname?.replace(`.localhost:3000`, "")
    }

    if (!currentHost) {
        return NextResponse.next()
    }

    if (currentHost === "tatsujinradio") {
        return NextResponse.rewrite(new URL(`/tatsujinradio`, req.url))
    }
    else {
        return NextResponse.next()
    }

    /*
    const hostName = req.headers.get("host") || ""
    const rootDomain = "yojiweb.com"

    if (!hostName.endsWith(`.${rootDomain}`)) {
        return NextResponse.next()
    }

    const subDomain = hostName.replace(`.${rootDomain}`, "").split(".")[0]

    if (!subDomain || subDomain === 'www') {
        return NextResponse.next()
    }

    const url = req.nextUrl
    url.pathname = "/tatsujinradio"
    return NextResponse.rewrite(url)
    */
}