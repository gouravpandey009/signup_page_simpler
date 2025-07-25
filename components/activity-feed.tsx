import { Clock, GitCommit, CommandIcon as Deploy, User } from "lucide-react"

export function ActivityFeed() {
  const activities = [
    {
      type: "commit",
      title: "Pushed new changes to main branch",
      time: "2 minutes ago",
      icon: GitCommit,
      color: "text-blue-400",
    },
    {
      type: "deploy",
      title: "Successfully deployed to production",
      time: "1 hour ago",
      icon: Deploy,
      color: "text-green-400",
    },
    {
      type: "user",
      title: "New user registered",
      time: "3 hours ago",
      icon: User,
      color: "text-purple-400",
    },
    {
      type: "commit",
      title: "Updated authentication system",
      time: "1 day ago",
      icon: GitCommit,
      color: "text-blue-400",
    },
  ]

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
        <Clock className="w-5 h-5 mr-2" />
        Recent Activity
      </h3>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ${activity.color}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm">{activity.title}</p>
              <p className="text-gray-400 text-xs">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
