import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
	const jsonPath = path.join(process.cwd(), "/data/tracks.json")
	const raw = fs.readFileSync(jsonPath, "utf-8")
	const tracks = JSON.parse(raw)

	const result = tracks.map((track: any) => ({
		src: `/api/audio/${track.src}`,
		duration: track.duration,
		title: track.title,
		subtitle: track.subtitle,
		artist: track.artist,
		bpm: track.bpm,
		releaseDate: track.release,
		firstGame: track.firstGame,
	}))

	return NextResponse.json(result)
}