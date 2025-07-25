import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <Navigation />

      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About SimplerTech
          </h1>

          <div className="prose prose-lg mx-auto text-gray-300">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
              <p className="text-xl leading-relaxed mb-6 text-white">
                We are passionate developers creating extraordinary web experiences with modern technologies.
              </p>
              <p className="leading-relaxed">
                SimplerTech represents the future of web development - where beautiful design meets powerful
                functionality, and where developers can focus on building amazing experiences rather than wrestling with
                complex infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Mission
                </h3>
                <p className="text-gray-300">
                  To deliver exceptional web solutions that combine beautiful design with powerful functionality, making
                  modern development accessible to everyone.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Vision
                </h3>
                <p className="text-gray-300">
                  To be the leading force in modern web development, setting new standards for user experience and
                  developer productivity.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-white text-center">Why Choose SimplerTech?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Performance First</h4>
                  <p className="text-gray-400 text-sm">Built for speed and optimized for the best user experience</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Beautiful Design</h4>
                  <p className="text-gray-400 text-sm">Modern, responsive, and accessible design principles</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Security Focused</h4>
                  <p className="text-gray-400 text-sm">Advanced security features and best practices built-in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
