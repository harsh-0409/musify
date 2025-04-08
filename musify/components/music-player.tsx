"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, Heart, ListMusic } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState([70])
  const [progress, setProgress] = useState([30])
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-zinc-900 p-3">
      <div className="flex items-center justify-between">
        <div className="flex w-1/4 min-w-[180px] items-center gap-3">
          <img
            src="/placeholder.svg?height=56&width=56"
            alt="Album cover"
            className="h-14 w-14 rounded-md object-cover"
          />
          <div className="overflow-hidden">
            <h4 className="truncate text-sm font-medium">Midnight City</h4>
            <p className="truncate text-xs text-zinc-400">M83</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-400 hover:text-white"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-5 w-5 ${isLiked ? "fill-rose-500 text-rose-500" : ""}`} />
          </Button>
        </div>

        <div className="flex w-2/4 flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <Shuffle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white text-black hover:bg-zinc-200 hover:scale-105 transition-all"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <Repeat className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex w-full max-w-md items-center gap-2">
            <span className="text-xs text-zinc-400">2:10</span>
            <Slider value={progress} onValueChange={setProgress} max={100} step={1} className="cursor-pointer" />
            <span className="text-xs text-zinc-400">3:45</span>
          </div>
        </div>

        <div className="flex w-1/4 items-center justify-end gap-3">
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
            <ListMusic className="h-5 w-5" />
          </Button>
          <div className="flex w-32 items-center gap-2">
            <Volume2 className="h-4 w-4 text-zinc-400" />
            <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

