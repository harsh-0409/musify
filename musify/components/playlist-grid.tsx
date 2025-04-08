import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

interface Playlist {
  id: number
  title: string
  description: string
  trackCount: number
}

export function PlaylistGrid() {
  const playlists: Playlist[] = [
    { id: 1, title: "Chill Vibes", description: "Relaxing tunes for your downtime", trackCount: 45 },
    { id: 2, title: "Workout Mix", description: "High energy tracks to keep you moving", trackCount: 32 },
    { id: 3, title: "Study Session", description: "Focus-enhancing instrumentals", trackCount: 28 },
    { id: 4, title: "Road Trip", description: "The perfect soundtrack for the open road", trackCount: 53 },
    { id: 5, title: "Party Anthems", description: "Get the party started with these hits", trackCount: 41 },
    { id: 6, title: "Acoustic Covers", description: "Stripped down versions of popular songs", trackCount: 37 },
    { id: 7, title: "90s Throwbacks", description: "Nostalgic hits from the 90s", trackCount: 64 },
    { id: 8, title: "Morning Coffee", description: "Gentle tunes to start your day", trackCount: 29 },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {playlists.map((playlist) => (
        <Card key={playlist.id} className="group overflow-hidden bg-zinc-800/50 transition-all hover:bg-zinc-700/50">
          <CardContent className="p-3">
            <div className="relative mb-3 overflow-hidden rounded-md">
              <img
                src={`/placeholder.svg?height=200&width=200&text=${playlist.title}`}
                alt={`${playlist.title} playlist`}
                className="aspect-square w-full object-cover transition-all group-hover:opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-black shadow-lg">
                  <Play className="h-6 w-6 fill-black pl-1" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="line-clamp-1 font-medium">{playlist.title}</h3>
              <p className="line-clamp-2 text-xs text-zinc-400">{playlist.description}</p>
              <p className="mt-1 text-xs text-zinc-500">{playlist.trackCount} songs</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

