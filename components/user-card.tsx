import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Mail, User, MapPin, Calendar } from "lucide-react"

interface UserCardProps {
  name: string
  email: string
}

export function UserCard({ name, email }: UserCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  // Use static data to prevent hydration mismatch
  const staticLocation = "Global"
  const staticJoinDate = "2024"

  return (
    <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-lg border border-white/20 hover:border-blue-400/50 overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardContent className="p-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Enhanced Avatar */}
          <div className="relative">
            <Avatar className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-white/20 group-hover:ring-blue-400/50 transition-all duration-300">
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xl">
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
            {/* Online indicator */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced User Info */}
          <div className="space-y-3 w-full">
            <div className="flex items-center justify-center space-x-2">
              <User className="w-4 h-4 text-blue-400" />
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{name}</h3>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4 text-gray-400" />
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors">{email}</p>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <p className="text-sm text-gray-400">{staticLocation}</p>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <p className="text-sm text-gray-400">Joined {staticJoinDate}</p>
            </div>
          </div>

          {/* Enhanced decorative elements */}
          <div className="w-full space-y-2">
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>

            {/* Skills/Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-400/30">
                Developer
              </span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30">
                Designer
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
