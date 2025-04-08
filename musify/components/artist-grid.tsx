import { Card, CardContent } from "@/components/ui/card"

interface Artist {
  id: number
  name: string
  genre: string
}

export function ArtistGrid() {
  const artists: Artist[] = [
    { id: 1, name: "The Weeknd", genre: "R&B, Pop" },
    { id: 2, name: "Harry Styles", genre: "Pop, Rock" },
    { id: 3, name: "Steve Lacy", genre: "R&B, Soul" },
    { id: 4, name: "Glass Animals", genre: "Indie, Electronic" },
    { id: 5, name: "Bad Bunny", genre: "Reggaeton, Latin" },
    { id: 6, name: "Beyoncé", genre: "R&B, Pop" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {artists.map((artist) => (
        <Card key={artist.id} className="overflow-hidden bg-zinc-800/50 transition-all hover:bg-zinc-700/50">
          <CardContent className="p-3">
            <div className="mb-3 overflow-hidden rounded-full">
              <img
                src={`/placeholder.svg?height=200&width=200&text=${artist.name}`}
                alt={`${artist.name}`}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="font-medium">{artist.name}</h3>
              <p className="text-sm text-zinc-400">{artist.genre}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

