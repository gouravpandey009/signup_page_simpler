import { TrendingUp, Users, Activity, Award } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Total Projects",
      value: "12",
      change: "+2 this month",
      icon: Activity,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Active Users",
      value: "1,234",
      change: "+12% from last month",
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Performance Score",
      value: "98.5%",
      change: "+0.5% improvement",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Achievements",
      value: "24",
      change: "+3 new badges",
      icon: Award,
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
            >
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.title}</p>
            <p className="text-green-400 text-xs">{stat.change}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
