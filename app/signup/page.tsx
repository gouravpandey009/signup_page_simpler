"use client"

import { Navigation } from "@/components/navigation"
import { SignUpForm } from "@/components/signup-form"
import { ParticleBackground } from "@/components/particle-background"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <Navigation />

      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Join the Future
            </h1>
            <p className="text-gray-300 text-lg">Create your account and start building extraordinary experiences</p>
          </div>

          <SignUpForm />

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Sign in here
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
