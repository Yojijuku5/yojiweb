import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3 = new S3Client({
	region: "auto",
	endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
	credentials: {
		accessKeyId: process.env.R2_ACCESS_KEY!,
		secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
	},
	forcePathStyle: true,
})

export async function GET() {
	const jsonPath = path.join(process.cwd(), "/data/tracks.json")
	const raw = fs.readFileSync(jsonPath, "utf-8")
	const tracks = JSON.parse(raw)

	const result = await Promise.all(
		tracks.map(async (track: any) => {
			const command = new GetObjectCommand({
				Bucket: process.env.R2_BUCKET_NAME,
				Key: track.src,
			})

			const signedUrl = await getSignedUrl(s3, command, {
				expiresIn: 60 * 60,
			})

			return {
				src: signedUrl,
				duration: track.duration,
				title: track.title,
				subtitle: track.subtitle,
				artist: track.artist,
				singer: track.singer,
				lyrics: track.lyrics,
				bpm: track.bpm,
				releaseDate: track.release,
				firstGame: track.firstGame,
			}
		})
	)

	return NextResponse.json(result)
}