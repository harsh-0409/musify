import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrackList } from "@/components/track-list"
import { AlbumGrid } from "@/components/album-grid"

export function RecommendedTracks() {
  return (
    <div className="space-y-8">
      <Tabs defaultValue="foryou" className="w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Recommended</h2>
          <TabsList className="bg-zinc-800">
            <TabsTrigger value="foryou">For You</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="new">New Releases</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="foryou" className="mt-6">
          <TrackList />
        </TabsContent>
        <TabsContent value="trending" className="mt-6">
          <TrackList />
        </TabsContent>
        <TabsContent value="new" className="mt-6">
          <TrackList />
        </TabsContent>
      </Tabs>

      <div>
        <h2 className="mb-6 text-2xl font-bold">Popular Albums</h2>
        <AlbumGrid />
      </div>

      <div>
        <h2 className="mb-6 text-2xl font-bold">Genres</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {[
            "Pop",
            "Hip-Hop",
            "Rock",
            "Electronic",
            "R&B",
            "Jazz",
            "Classical",
            "Country",
            "Latin",
            "K-Pop",
            "Indie",
            "Metal",
          ].map((genre) => (
            <Card key={genre} className="overflow-hidden bg-zinc-800 transition-all hover:bg-zinc-700">
              <CardContent className="p-0">
                <Button variant="ghost" className="h-full w-full p-6 text-center">
                  <span className="text-lg font-medium">{genre}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

