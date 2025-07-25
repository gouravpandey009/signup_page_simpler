import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      company: "TechCorp",
      content:
        "SimplerTech has revolutionized our development workflow. The authentication system is incredibly robust and the UI components are absolutely stunning.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Full Stack Engineer",
      company: "StartupXYZ",
      content:
        "The best development platform I've ever used. The responsive design and modern architecture make building applications a joy.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateLab",
      content:
        "Our team's productivity has increased by 300% since switching to SimplerTech. The user experience is unmatched.",
      rating: 5,
      avatar: "ER",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Developers Are Saying</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied developers who have transformed their workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-50" />

              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
