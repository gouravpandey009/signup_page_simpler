"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
  const [counts, setCounts] = useState({
    users: 0,
    projects: 0,
    deployments: 0,
    uptime: 0,
  })
  const [mounted, setMounted] = useState(false)

  const finalCounts = {
    users: 10000,
    projects: 25000,
    deployments: 100000,
    uptime: 99.9,
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounts({
        users: Math.floor(finalCounts.users * progress),
        projects: Math.floor(finalCounts.projects * progress),
        deployments: Math.floor(finalCounts.deployments * progress),
        uptime: Math.floor(finalCounts.uptime * progress * 10) / 10,
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts(finalCounts)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [mounted])

  const stats = [
    {
      label: "Active Users",
      value: counts.users.toLocaleString(),
      suffix: "+",
      gradient: "from-blue-400 to-purple-400",
    },
    {
      label: "Projects Built",
      value: counts.projects.toLocaleString(),
      suffix: "+",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      label: "Deployments",
      value: counts.deployments.toLocaleString(),
      suffix: "+",
      gradient: "from-pink-400 to-red-400",
    },
    {
      label: "Uptime",
      value: counts.uptime.toString(),
      suffix: "%",
      gradient: "from-green-400 to-emerald-400",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}
              >
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
