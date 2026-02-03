import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
	//const audioDir = path.join(process.cwd(), "/public/audio")
	const jsonPath = path.join(process.cwd(), "/data/tracks.json")

	const raw = fs.readFileSync(jsonPath, "utf-8")

	const tracks = JSON.parse(raw)

	const result = tracks.map((track: any) => ({
		src: `/audio/${track.src}`,
		title: track.title,
		artist: track.artist,
		bpm: track.bpm,
		releaseDate: track.release,
	}))

	return NextResponse.json(result)
}