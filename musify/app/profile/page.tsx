import { Sidebar } from "@/components/sidebar"
import { MusicPlayer } from "@/components/music-player"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlaylistGrid } from "@/components/playlist-grid"
import { TrackList } from "@/components/track-list"
import { Settings, Edit } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto pb-24">
        <div>
          <div className="bg-gradient-to-b from-zinc-800 to-black p-6 md:p-10">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <Avatar className="h-32 w-32 border-4 border-emerald-500 md:h-48 md:w-48">
                <AvatarImage src="/placeholder.svg?height=200&width=200&text=User" alt="User" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium uppercase">Profile</p>
                <h1 className="mt-2 text-3xl font-bold md:text-5xl">Username</h1>
                <div className="mt-4 flex items-center gap-4 text-sm text-zinc-300">
                  <span>
                    <strong>45</strong> Playlists
                  </span>
                  <span>•</span>
                  <span>
                    <strong>128</strong> Following
                  </span>
                  <span>•</span>
                  <span>
                    <strong>256</strong> Followers
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <Button variant="outline" className="gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="p-6">
            <Tabs defaultValue="playlists" className="w-full">
              <TabsList className="mb-6 bg-zinc-800">
                <TabsTrigger value="playlists">Your Playlists</TabsTrigger>
                <TabsTrigger value="liked">Liked Songs</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
                <TabsTrigger value="followers">Followers</TabsTrigger>
              </TabsList>

              <TabsContent value="playlists">
                <PlaylistGrid />
              </TabsContent>

              <TabsContent value="liked">
                <TrackList />
              </TabsContent>

              <TabsContent value="following">
                <div className="rounded-lg border border-zinc-800 p-8 text-center">
                  <h3 className="mb-2 text-xl font-medium">Artists & Friends You Follow</h3>
                  <p className="text-zinc-400">
                    Follow your favorite artists and friends to stay updated on their activity.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="followers">
                <div className="rounded-lg border border-zinc-800 p-8 text-center">
                  <h3 className="mb-2 text-xl font-medium">Your Followers</h3>
                  <p className="text-zinc-400">People who follow your profile and playlists.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <MusicPlayer />
    </div>
  )
}

