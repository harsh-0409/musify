"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Heart } from "lucide-react"

interface Track {
  id: number
  title: string
  artist: string
  album: string
  duration: string
  plays: string
}

export function TrackList() {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null)

  const tracks: Track[] = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20", plays: "1.2B" },
    { id: 2, title: "As It Was", artist: "Harry Styles", album: "Harry's House", duration: "2:47", plays: "950M" },
    { id: 3, title: "Bad Habit", artist: "Steve Lacy", album: "Gemini Rights", duration: "3:52", plays: "780M" },
    { id: 4, title: "Heat Waves", artist: "Glass Animals", album: "Dreamland", duration: "3:59", plays: "1.1B" },
    {
      id: 5,
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      album: "F*CK LOVE 3+",
      duration: "2:21",
      plays: "890M",
    },
  ]

  return (
    <div className="rounded-md border border-zinc-800">
      <div className="grid grid-cols-12 gap-4 border-b border-zinc-800 p-4 text-sm font-medium text-zinc-500">
        <div className="col-span-1">#</div>
        <div className="col-span-5">TITLE</div>
        <div className="col-span-3 hidden md:block">ALBUM</div>
        <div className="col-span-2 text-right md:text-left">PLAYS</div>
        <div className="col-span-1 text-right">⏱️</div>
      </div>
      {tracks.map((track) => (
        <div
          key={track.id}
          className="grid grid-cols-12 gap-4 border-b border-zinc-800 p-4 text-sm hover:bg-zinc-800/50"
          onMouseEnter={() => setHoveredTrack(track.id)}
          onMouseLeave={() => setHoveredTrack(null)}
        >
          <div className="col-span-1 flex items-center">
            {hoveredTrack === track.id ? (
              <Button variant="ghost" size="icon" className="h-6 w-6 text-white">
                <Play className="h-4 w-4 fill-white" />
              </Button>
            ) : (
              <span className="text-zinc-400">{track.id}</span>
            )}
          </div>
          <div className="col-span-5 flex items-center gap-3">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt={`${track.album} cover`}
              className="h-10 w-10 rounded object-cover"
            />
            <div>
              <div className="font-medium">{track.title}</div>
              <div className="text-xs text-zinc-400">{track.artist}</div>
            </div>
          </div>
          <div className="col-span-3 hidden items-center text-zinc-400 md:flex">{track.album}</div>
          <div className="col-span-2 flex items-center justify-end text-zinc-400 md:justify-start">{track.plays}</div>
          <div className="col-span-1 flex items-center justify-end gap-2 text-zinc-400">
            <span>{track.duration}</span>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

