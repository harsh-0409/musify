import { SearchBar } from "@/components/search-bar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrackList } from "@/components/track-list"
import { AlbumGrid } from "@/components/album-grid"
import { ArtistGrid } from "@/components/artist-grid"
import { Sidebar } from "@/components/sidebar"
import { MusicPlayer } from "@/components/music-player"

export default function SearchPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto pb-24">
        <div className="container mx-auto px-4 py-6">
          <SearchBar />

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 bg-zinc-800">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="songs">Songs</TabsTrigger>
              <TabsTrigger value="artists">Artists</TabsTrigger>
              <TabsTrigger value="albums">Albums</TabsTrigger>
              <TabsTrigger value="playlists">Playlists</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div>
                <h2 className="mb-4 text-xl font-bold">Top Results</h2>
                <TrackList />
              </div>
              <div>
                <h2 className="mb-4 text-xl font-bold">Artists</h2>
                <ArtistGrid />
              </div>
              <div>
                <h2 className="mb-4 text-xl font-bold">Albums</h2>
                <AlbumGrid />
              </div>
            </TabsContent>

            <TabsContent value="songs">
              <h2 className="mb-4 text-xl font-bold">Songs</h2>
              <TrackList />
            </TabsContent>

            <TabsContent value="artists">
              <h2 className="mb-4 text-xl font-bold">Artists</h2>
              <ArtistGrid />
            </TabsContent>

            <TabsContent value="albums">
              <h2 className="mb-4 text-xl font-bold">Albums</h2>
              <AlbumGrid />
            </TabsContent>

            <TabsContent value="playlists">
              <h2 className="mb-4 text-xl font-bold">Playlists</h2>
              <AlbumGrid />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <MusicPlayer />
    </div>
  )
}

