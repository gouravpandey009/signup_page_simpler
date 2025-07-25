"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, LogIn, XCircle, Sparkles } from "lucide-react"

interface FormData {
  email: string
  password: string
}

interface FormErrors {
  email?: string
  password?: string
  general?: string
}

export function SignInForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return "Email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return "Please enter a valid email address"
    return undefined
  }

  const validatePassword = (password: string): string | undefined => {
    if (!password) return "Password is required"
    return undefined
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
    if (errors.general) {
      setErrors((prev) => ({ ...prev, general: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: FormErrors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
    }

    Object.keys(newErrors).forEach((key) => {
      if (newErrors[key as keyof FormErrors] === undefined) {
        delete newErrors[key as keyof FormErrors]
      }
    })

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Check if user exists in localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const user = users.find((u: any) => u.email === formData.email && u.password === formData.password)

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user))
        router.push("/dashboard")
      } else {
        setErrors({ general: "Invalid email or password. Please try again." })
      }

      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-center text-white text-2xl font-bold">Sign In to Your Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* General Error */}
          {errors.general && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <div className="flex items-center space-x-2 text-red-400">
                <XCircle className="w-4 h-4" />
                <span className="text-sm">{errors.general}</span>
              </div>
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20 ${
                errors.email ? "border-red-500 focus:border-red-500" : ""
              }`}
            />
            {errors.email && (
              <div className="flex items-center space-x-1 text-red-400 text-sm">
                <XCircle className="w-4 h-4" />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password *
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20 pr-10 ${
                  errors.password ? "border-red-500 focus:border-red-500" : ""
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <div className="flex items-center space-x-1 text-red-400 text-sm">
                <XCircle className="w-4 h-4" />
                <span>{errors.password}</span>
              </div>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Forgot your password?
            </a>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Signing In...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </div>
            )}
          </Button>
        </form>

        {/* Demo Account Info */}
        <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <h4 className="text-blue-400 font-medium mb-2 flex items-center">
            <Sparkles className="w-4 h-4 mr-2" />
            Demo Account
          </h4>
          <p className="text-gray-300 text-sm mb-2">
            Don't have an account? Create one by signing up, then use those credentials to sign in!
          </p>
          <p className="text-gray-400 text-xs">Your account data is stored locally in your browser for this demo.</p>
        </div>
      </CardContent>
    </Card>
  )
}
