'use client'

import { useEffect, useRef, useState } from 'react'

//if used elsewhere, move to separate file
type Track = {
    src: string,
    title: string,
    artist: string,
    bpm: string,
    releaseDate: Date,
    firstGame: string,
}

export default function Player() {
    const [tracks, setTracks] = useState<Track[]>([])

    const audioRef = useRef<HTMLAudioElement | null>(null)

    const [currentTrack, setCurrentTrack] = useState<Track | null>(null)

    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0

    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({})

    //true = Pause (playing), false = Play (paused)
    const [isPlaying, setIsPlaying] = useState(false)

    const [history, setHistory] = useState<Track[]>([])
    const [historyIndex, setHistoryIndex] = useState(-1)

    const navigatingRef = useRef(false)
    const userInteractionRef = useRef(false)

    const markUserInteraction = () => {
        userInteractionRef.current = true
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)

        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }

    const groupTracks = tracks.reduce<Record<string, Track[]>>((acc, track) => {
        if (!acc[track.firstGame]) acc[track.firstGame] = []
        acc[track.firstGame].push(track)

        return acc
    }, {})

    const toggleGroup = (firstGame: string) => {
        setOpenGroups(prev => ({
            ...prev,
            [firstGame]: !prev[firstGame],
        }))
    }

    const playRandomTrack = (exclude?: Track) => {
        let next = exclude

        while (tracks.length > 1 && next === exclude) {
            next = tracks[Math.floor(Math.random() * tracks.length)]
        }

        return next!
    }

    const nextTrack = () => {
        userInteractionRef.current = true

        if (historyIndex < history.length - 1) {
            navigatingRef.current = true
            setHistoryIndex((i) => i + 1)
            setCurrentTrack(history[historyIndex + 1])
            return
        }

        setCurrentTrack(playRandomTrack(currentTrack))
    }

    const prevTrack = () => {
        userInteractionRef.current = true

        const audio = audioRef.current
        if (!audio) return

        if (audio.currentTime > 3 || history.length === 0) {
            audio.currentTime = 0
            return
        }

        if (historyIndex > 0) {
            navigatingRef.current = true
            setHistoryIndex((i) => i - 1)
            setCurrentTrack(history[historyIndex - 1])
        }
        else {
            audio.currentTime = 0
        }
    }

    const pauseTrack = () => {
        userInteractionRef.current = true

        const audio = audioRef.current
        if (!audio) return

        if (audio.paused) {
            audio.play()
            setIsPlaying(!isPlaying)
            return
        }
        else {
            audio.pause()
            setIsPlaying(!isPlaying)
        }
    }

    const seek = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const percent = (e.clientX - rect.left) / rect.width

        if (audioRef.current && duration) {
            audioRef.current.currentTime = percent * duration
        }
    }

    //fetching audio tracks
    useEffect(() => {
        fetch("/api/tracks")
            .then((res) => res.json())
            .then((data: Track[]) => {
                setCurrentTrack(data[Math.floor(Math.random() * data.length)])
                setTracks(data)
            })
    }, [])

    //setting track history
    useEffect(() => {
        if (!currentTrack) return

        if (navigatingRef.current) {
            navigatingRef.current = false
            return
        }

        setHistory((h) => {
            const next = h.slice(0, historyIndex + 1)
            next.push(currentTrack)
            return next
        })

        setHistoryIndex((i) => i + 1)
    }, [currentTrack])

    //autoplay functions
    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        if (!userInteractionRef.current) return

        audio.currentTime = 0

        const playPromise = audio.play()

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                //ignore autoplay blocking errors
            })
        }
    }, [currentTrack])

    return (
        <section>
            <div className="flex flex-row">
                <div className="bg-gray-800 rounded-xl p-5">
                    <p className="mb-4">Now Playing: {currentTrack?.title} - {currentTrack?.artist}</p>
                    <div className="mb-4">
                        <audio
                            ref={audioRef}
                            src={currentTrack?.src}
                            onPlay={() => { userInteractionRef.current = true }}
                            onEnded={() => { nextTrack() }}
                            onLoadedMetadata={(e) => {
                                setDuration(e.currentTarget.duration)
                            }}
                            onTimeUpdate={(e) => {
                                setCurrentTime(e.currentTarget.currentTime)
                            }}
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                        <div className="w-full h-1 bg-gray-300 rounded overflow-hidden" onClick={seek}>
                            <div
                                className="h-full bg-yellow-400 transition-[width] duration-100"
                                style={{ width: `${progress}%` }}
                            />
                            p</div>
                    </div>

                    <div className="flex flex-row">
                        <div>
                            <button className="w-32 h-16 basis-xs mb-4 bg-blue-500 rounded" onClick={() => { markUserInteraction(); prevTrack() }}>Back</button>
                        </div>
                        <div className="w-8"></div>
                        <div>
                            <button className="w-32 h-16 basis-xs mb-4 bg-blue-500 rounded" onClick={() => { markUserInteraction(); pauseTrack() }}>{ isPlaying? "Pause" : "Play" }</button>
                        </div>
                        <div className="w-8"></div>
                        <div>
                            <button className="w-32 h-16 basis-xs mb-4 bg-blue-500 rounded" onClick={() => { markUserInteraction(); nextTrack() }}>Next</button>
                        </div>
                    </div>
                </div>

                <div className="mx-10">
                </div>

                <div className="bg-gray-800 rounded-xl p-5">
                    <p className="mb-2">Tracklist: </p>

                    {Object.entries(groupTracks).map(([firstGame, groupTracks]) => (
                        <div key={firstGame} className="mb-4">
                            <button
                                className="w-full text-left font-semibold px-2 py-1 rounded bg-gray-700 hover:bg-gray-600"
                                onClick={() => toggleGroup(firstGame)}
                            >
                                {firstGame} {openGroups[firstGame] ? "▾" : "▸"}
                            </button>

                            {openGroups[firstGame] && (
                                <ol className="mt-1 space-y-1">
                                    {groupTracks.map(track => {
                                        const isActive = track === currentTrack

                                        return (
                                            <li key={track.src}>
                                                <button
                                                    className={`w-full text-left px-2 py-1 rounded ${isActive ? "bg-yellow-400 text-black font-semibold" : "hover:bg-gray-200"}`}
                                                    onClick={() => {
                                                        markUserInteraction()
                                                        navigatingRef.current = false
                                                        setCurrentTrack(track)
                                                        setIsPlaying(true)
                                                    }}
                                                >
                                                    {track.title} - {track.artist}
                                                </button>
                                            </li>
                                        )
                                    }) }
                                </ol>
                            )}
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}