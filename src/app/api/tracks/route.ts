import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
	const jsonPath = path.join(process.cwd(), "https://yojiweb.com/data/tracks.json")

	const raw = fs.readFileSync(jsonPath, "utf-8")

	const tracks = JSON.parse(raw)

	const result = tracks.map((track: any) => ({
		src: `https://yojiweb.com/public/audio/${track.src}`,
		title: track.title,
		artist: track.artist,
		bpm: track.bpm,
		releaseDate: track.release,
	}))

	return NextResponse.json(result)
}