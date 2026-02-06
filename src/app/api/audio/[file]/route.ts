import { NextResponse } from 'next/server'

export async function GET(
    _req: Request,
    context: { params: Promise<{ file: string }> }
) {
    const { file } = await context.params

    const audioUrl = `https://yojiweb.com/audio/${file}`

    const res = await fetch(audioUrl)

    if (!res.ok) {
        return new NextResponse("Audio not found", { status: 404 })
    }

    return new NextResponse(res.body, {
        headers: {
            "Content-Type": res.headers.get("content-type") ?? "audio/mpeg",
            "Cache-Control": "public, max-age=31536000, immutable",
        }
    })
}