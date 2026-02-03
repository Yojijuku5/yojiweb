import { NextRequest, NextResponse } from 'next/server'

export const config = {
    matcher: ["/((?!_next|favicon.ico).*)"],
}

export default function proxy(req: NextRequest) {
    //const url = req.nextUrl
    const hostName = req.headers.get("host") || ""
    //let hostName = req.headers.get("host") || ""
    const rootDomain = "yojiweb.com"

    //let subDomain = ""
    if (!hostName.endsWith(`.${rootDomain}`)) {
        return NextResponse.next()
        //subDomain = hostName.replace(`.${rootDomain}`, "").split(".")[0]
    }

    const subDomain = hostName.replace(`.${rootDomain}`, "").split(".")[0]

    if (!subDomain || subDomain === 'www') {
        return NextResponse.next()
    }

    const url = req.nextUrl
    url.pathname = "/tatsujinradio"
    return NextResponse.rewrite(url)

    //url.pathname = `/app/${subDomain}${url.pathname}`
    //return NextResponse.rewrite(url)
}

/*
export function proxy(req: NextRequest) {
    const host = req.headers.get("host") || ""

    const subdomain = host.split(".")[0]

    if (subdomain == "tatsujinradio") {
        return NextResponse.rewrite(new URL("/tatsujinradio", req.url))
    }

    return NextResponse.next()
}
*/