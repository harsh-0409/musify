"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Home, Search, Library, PlusCircle, Heart, Download, User } from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

export function Sidebar() {
  const pathname = usePathname()

  const mainNavItems: NavItem[] = [
    {
      title: "Home",
      href: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Search",
      href: "/search",
      icon: <Search className="h-5 w-5" />,
    },
    {
      title: "Your Library",
      href: "/library",
      icon: <Library className="h-5 w-5" />,
    },
  ]

  const userNavItems: NavItem[] = [
    {
      title: "Create Playlist",
      href: "/create-playlist",
      icon: <PlusCircle className="h-5 w-5" />,
    },
    {
      title: "Liked Songs",
      href: "/liked-songs",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      title: "Downloaded",
      href: "/downloaded",
      icon: <Download className="h-5 w-5" />,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: <User className="h-5 w-5" />,
    },
  ]

  const playlists = [
    "Chill Vibes",
    "Workout Mix",
    "Study Session",
    "Road Trip",
    "Party Anthems",
    "Acoustic Covers",
    "90s Throwbacks",
    "Morning Coffee",
  ]

  return (
    <div className="hidden md:flex h-screen w-64 flex-col bg-zinc-900 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Musify</h1>
      </div>
      <nav className="flex-1">
        <div className="px-3 py-2">
          {mainNavItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 text-zinc-400 hover:text-white",
                  pathname === item.href && "text-white",
                )}
              >
                {item.icon}
                {item.title}
              </Button>
            </Link>
          ))}
        </div>
        <div className="px-3 py-2">
          {userNavItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 text-zinc-400 hover:text-white",
                  pathname === item.href && "text-white",
                )}
              >
                {item.icon}
                {item.title}
              </Button>
            </Link>
          ))}
        </div>
        <div className="px-6 py-2">
          <h3 className="mb-2 text-sm font-semibold text-zinc-500">YOUR PLAYLISTS</h3>
          <ScrollArea className="h-[200px]">
            <div className="space-y-1">
              {playlists.map((playlist, i) => (
                <Link key={i} href={`/playlist/${i}`}>
                  <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white">
                    {playlist}
                  </Button>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </nav>
    </div>
  )
}

