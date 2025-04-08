import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

interface Album {
  id: number
  title: string
  artist: string
  year: string
}

export function AlbumGrid() {
  const albums: Album[] = [
    { id: 1, title: "After Hours", artist: "The Weeknd", year: "2020" },
    { id: 2, title: "Harry's House", artist: "Harry Styles", year: "2022" },
    { id: 3, title: "Gemini Rights", artist: "Steve Lacy", year: "2022" },
    { id: 4, title: "Dreamland", artist: "Glass Animals", year: "2020" },
    { id: 5, title: "Un Verano Sin Ti", artist: "Bad Bunny", year: "2022" },
    { id: 6, title: "RENAISSANCE", artist: "Beyoncé", year: "2022" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {albums.map((album) => (
        <Card key={album.id} className="group overflow-hidden bg-zinc-800/50 transition-all hover:bg-zinc-700/50">
          <CardContent className="p-3">
            <div className="relative mb-3 overflow-hidden rounded-md">
              <img
                src={`/placeholder.svg?height=200&width=200&text=${album.title}`}
                alt={`${album.title} cover`}
                className="aspect-square w-full object-cover transition-all group-hover:opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-black shadow-lg">
                  <Play className="h-6 w-6 fill-black pl-1" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="line-clamp-1 font-medium">{album.title}</h3>
              <p className="line-clamp-1 text-sm text-zinc-400">{album.artist}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

