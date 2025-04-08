import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function FeaturedContent() {
  return (
    <div className="mb-8">
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/80 to-emerald-700/80" />
        <img
          src="/placeholder.svg?height=400&width=1200"
          alt="Featured artist"
          className="h-[300px] w-full object-cover object-center opacity-50 md:h-[400px]"
        />
        <div className="absolute bottom-0 left-0 p-6 md:p-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-200">Featured Artist</p>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">The Weeknd</h2>
          <p className="mb-6 max-w-md text-sm text-zinc-200 md:text-base">
            Experience the latest album from The Weeknd, featuring chart-topping hits and collaborations with today's
            biggest artists.
          </p>
          <div className="flex gap-4">
            <Button className="gap-2 bg-white text-black hover:bg-zinc-200">
              <Play className="h-4 w-4 fill-black" />
              Play
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              View Artist
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

