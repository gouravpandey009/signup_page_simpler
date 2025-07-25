"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto text-center">
        {/* Announcement Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-pulse">
          <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
          <span className="text-sm text-gray-300">New: Enhanced Authentication System</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Build the Future
          </span>
          <br />
          <span className="text-white">with SimplerTech</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience the next generation of web development with our cutting-edge platform. Create, authenticate, and
          deploy with unprecedented ease.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 group"
            >
              Start Building Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/signin">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm hover:border-white/40 transition-all duration-300 bg-transparent"
            >
              Sign In
            </Button>
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Built with Next.js 15 and optimized for maximum performance</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure Authentication</h3>
            <p className="text-gray-400">Advanced security with real-time validation and protection</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Modern Design</h3>
            <p className="text-gray-400">Beautiful UI with smooth animations and responsive layouts</p>
          </div>
        </div>
      </div>
    </section>
  )
}
