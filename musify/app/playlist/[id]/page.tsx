import { Sidebar } from "@/components/sidebar"
import { MusicPlayer } from "@/components/music-player"
import { Button } from "@/components/ui/button"
import { Play, Heart, Download, MoreHorizontal } from "lucide-react"
import { TrackList } from "@/components/track-list"

export default function PlaylistPage({ params }: { params: { id: string } }) {
  // This would normally fetch the playlist data based on the ID
  const playlistId = params.id

  const playlist = {
    id: playlistId,
    title: "Chill Vibes",
    description: "Relaxing tunes for your downtime",
    trackCount: 45,
    duration: "2 hr 35 min",
    createdBy: "Musify",
    followers: "245,678",
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto pb-24">
        <div>
          <div className="bg-gradient-to-b from-emerald-800 to-black p-6 md:p-10">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <img
                src={`/placeholder.svg?height=250&width=250&text=${playlist.title}`}
                alt={`${playlist.title} playlist`}
                className="h-48 w-48 rounded-md shadow-lg md:h-64 md:w-64"
              />
              <div>
                <p className="text-sm font-medium uppercase">Playlist</p>
                <h1 className="mt-2 text-3xl font-bold md:text-5xl">{playlist.title}</h1>
                <p className="mt-2 text-zinc-300">{playlist.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-zinc-300">
                  <span className="font-medium text-white">{playlist.createdBy}</span>
                  <span>•</span>
                  <span>{playlist.followers} followers</span>
                  <span>•</span>
                  <span>{playlist.trackCount} songs,</span>
                  <span>{playlist.duration}</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <Button className="gap-2 bg-emerald-500 text-black hover:bg-emerald-600">
                <Play className="h-5 w-5 fill-black" />
                Play
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Download className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="p-6">
            <TrackList />
          </div>
        </div>
      </main>
      <MusicPlayer />
    </div>
  )
}

