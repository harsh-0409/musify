import { MusicPlayer } from "@/components/music-player"
import { Sidebar } from "@/components/sidebar"
import { FeaturedContent } from "@/components/featured-content"
import { RecommendedTracks } from "@/components/recommended-tracks"
import { SearchBar } from "@/components/search-bar"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto pb-24">
        <div className="container mx-auto px-4 py-6">
          <SearchBar />
          <FeaturedContent />
          <RecommendedTracks />
        </div>
      </main>
      <MusicPlayer />
    </div>
  )
}

