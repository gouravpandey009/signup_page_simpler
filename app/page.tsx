import { Navigation } from "@/components/navigation"
import { UserCard } from "@/components/user-card"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import Link from "next/link"

export default function HomePage() {
  const sampleUsers = [
    { name: "Alex Johnson", email: "alex.johnson@example.com" },
    { name: "Sarah Chen", email: "sarah.chen@example.com" },
    { name: "Michael Rodriguez", email: "michael.rodriguez@example.com" },
    { name: "Emily Davis", email: "emily.davis@example.com" },
    { name: "David Kim", email: "david.kim@example.com" },
    { name: "Lisa Thompson", email: "lisa.thompson@example.com" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />

        {/* Enhanced User Cards Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Meet Our Amazing Community
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of developers who are already building extraordinary experiences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {sampleUsers.map((user, index) => (
                <div
                  key={index}
                  className="transform hover:scale-105 transition-all duration-500"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <UserCard name={user.name} email={user.email} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our platform today and experience the future of web development
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/signin">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-transparent"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
