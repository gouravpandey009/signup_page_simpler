import { Plus, Settings, Download, Share } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuickActions() {
  const actions = [
    {
      title: "New Project",
      description: "Create a new project",
      icon: Plus,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Settings",
      description: "Manage your account",
      icon: Settings,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Export Data",
      description: "Download your data",
      icon: Download,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Share Profile",
      description: "Share your profile",
      icon: Share,
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            className="h-auto p-4 flex flex-col items-center space-y-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div
              className={`w-10 h-10 bg-gradient-to-r ${action.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
            >
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-center">
              <p className="text-white text-sm font-medium">{action.title}</p>
              <p className="text-gray-400 text-xs">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}
