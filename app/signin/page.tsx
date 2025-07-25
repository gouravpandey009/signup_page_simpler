"use client"

import { Navigation } from "@/components/navigation"
import { SignInForm } from "@/components/signin-form"
import { ParticleBackground } from "@/components/particle-background"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <Navigation />

      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Welcome Back
            </h1>
            <p className="text-gray-300 text-lg">Sign in to continue your extraordinary journey</p>
          </div>

          <SignInForm />

          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Create one here
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
