"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { DashboardStats } from "@/components/dashboard-stats"
import { ActivityFeed } from "@/components/activity-feed"
import { QuickActions } from "@/components/quick-actions"
import { ParticleBackground } from "@/components/particle-background"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    const currentUser = localStorage.getItem("currentUser")
    if (!currentUser) {
      router.push("/signin")
      return
    }
    setUser(JSON.parse(currentUser))
  }, [router])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <Navigation />

      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {user.fullName}!
            </span>
          </h1>
          <p className="text-gray-300 text-lg">Here's what's happening with your account today.</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <DashboardStats />
            <ActivityFeed />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <QuickActions />

            {/* User Profile Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Your Profile</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {user.fullName
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{user.fullName}</p>
                    <p className="text-gray-400 text-sm">{user.email}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-400 text-sm">Member since</p>
                  <p className="text-white">{new Date(user.joinDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
