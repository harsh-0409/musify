import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar } from "@/components/sidebar"
import { MusicPlayer } from "@/components/music-player"
import { PlaylistGrid } from "@/components/playlist-grid"
import { AlbumGrid } from "@/components/album-grid"
import { ArtistGrid } from "@/components/artist-grid"

export default function LibraryPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto pb-24">
        <div className="container mx-auto px-4 py-6">
          <h1 className="mb-6 text-3xl font-bold">Your Library</h1>

          <Tabs defaultValue="playlists" className="w-full">
            <TabsList className="mb-6 bg-zinc-800">
              <TabsTrigger value="playlists">Playlists</TabsTrigger>
              <TabsTrigger value="albums">Albums</TabsTrigger>
              <TabsTrigger value="artists">Artists</TabsTrigger>
              <TabsTrigger value="downloaded">Downloaded</TabsTrigger>
            </TabsList>

            <TabsContent value="playlists">
              <PlaylistGrid />
            </TabsContent>

            <TabsContent value="albums">
              <AlbumGrid />
            </TabsContent>

            <TabsContent value="artists">
              <ArtistGrid />
            </TabsContent>

            <TabsContent value="downloaded">
              <div className="rounded-lg border border-zinc-800 p-8 text-center">
                <h3 className="mb-2 text-xl font-medium">No downloaded music</h3>
                <p className="text-zinc-400">Download songs, albums, or playlists to listen offline.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <MusicPlayer />
    </div>
  )
}

