import { Code, Palette, Smartphone, Globe, Lock, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Code,
      title: "Modern Development",
      description: "Built with Next.js 15, React 19, and TypeScript for maximum performance and developer experience.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Stunning UI components with smooth animations, gradients, and modern design principles.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "Fully Responsive",
      description: "Perfect experience across all devices - desktop, tablet, and mobile with adaptive layouts.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Global Ready",
      description: "Internationalization support, SEO optimized, and ready for worldwide deployment.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Lock,
      title: "Secure Authentication",
      description: "Advanced security features with real-time validation and secure user management.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Optimized for speed with lazy loading, code splitting, and advanced caching strategies.",
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Powerful Features for Modern Development</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to build extraordinary web applications with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>

              {/* Decorative element */}
              <div
                className={`w-full h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
