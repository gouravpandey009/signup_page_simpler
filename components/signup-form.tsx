"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, CheckCircle, XCircle, Sparkles } from "lucide-react"

interface FormData {
  fullName: string
  email: string
  password: string
}

interface FormErrors {
  fullName?: string
  email?: string
  password?: string
}

export function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()

  // Enhanced validation functions
  const validateFullName = (name: string): string | undefined => {
    if (!name.trim()) return "Full name is required"
    if (name.trim().length < 2) return "Full name must be at least 2 characters"
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return "Full name can only contain letters and spaces"
    return undefined
  }

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return "Email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return "Please enter a valid email address"

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    if (users.find((user: any) => user.email === email)) {
      return "An account with this email already exists"
    }

    return undefined
  }

  const validatePassword = (password: string): string | undefined => {
    if (!password) return "Password is required"
    if (password.length < 8) return "Password must be at least 8 characters"
    if (!/(?=.*[a-z])/.test(password)) return "Password must contain at least one lowercase letter"
    if (!/(?=.*[A-Z])/.test(password)) return "Password must contain at least one uppercase letter"
    if (!/(?=.*\d)/.test(password)) return "Password must contain at least one number"
    return undefined
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: FormErrors = {
      fullName: validateFullName(formData.fullName),
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
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Save user to localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const newUser = {
        id: Date.now(),
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password, // In real app, this should be hashed
        joinDate: new Date().toISOString(),
      }

      users.push(newUser)
      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("currentUser", JSON.stringify(newUser))

      setIsSubmitting(false)
      setIsSuccess(true)

      // Redirect to dashboard after success
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    }
  }

  const getPasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/(?=.*[a-z])/.test(password)) strength++
    if (/(?=.*[A-Z])/.test(password)) strength++
    if (/(?=.*\d)/.test(password)) strength++
    if (/(?=.*[!@#$%^&*])/.test(password)) strength++
    return strength
  }

  const passwordStrength = getPasswordStrength(formData.password)

  if (isSuccess) {
    return (
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="relative">
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto animate-bounce" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-white">Welcome to SimplerTech!</h3>
            <p className="text-gray-300">Your account has been created successfully. Redirecting to dashboard...</p>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-center text-white text-2xl font-bold">Create Your Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Field */}
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
              Full Name *
            </label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className={`bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20 ${
                errors.fullName ? "border-red-500 focus:border-red-500" : ""
              }`}
            />
            {errors.fullName && (
              <div className="flex items-center space-x-1 text-red-400 text-sm">
                <XCircle className="w-4 h-4" />
                <span>{errors.fullName}</span>
              </div>
            )}
          </div>

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

            {/* Enhanced Password Strength Indicator */}
            {formData.password && (
              <div className="space-y-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-2 flex-1 rounded transition-all duration-300 ${
                        passwordStrength >= level
                          ? passwordStrength <= 2
                            ? "bg-red-500 shadow-red-500/50 shadow-sm"
                            : passwordStrength === 3
                              ? "bg-yellow-500 shadow-yellow-500/50 shadow-sm"
                              : "bg-green-500 shadow-green-500/50 shadow-sm"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-400">
                  Password strength: {passwordStrength <= 2 ? "Weak" : passwordStrength === 3 ? "Medium" : "Strong"}
                </p>
              </div>
            )}

            {errors.password && (
              <div className="flex items-center space-x-1 text-red-400 text-sm">
                <XCircle className="w-4 h-4" />
                <span>{errors.password}</span>
              </div>
            )}
          </div>

          {/* Enhanced Password Requirements */}
          <div className="text-xs text-gray-400 space-y-1 bg-white/5 p-3 rounded-lg border border-white/10">
            <p className="font-medium text-gray-300">Password requirements:</p>
            <ul className="space-y-1 ml-2">
              <li
                className={`flex items-center space-x-2 transition-colors ${formData.password.length >= 8 ? "text-green-400" : ""}`}
              >
                <span className="w-1 h-1 bg-current rounded-full"></span>
                <span>At least 8 characters</span>
              </li>
              <li
                className={`flex items-center space-x-2 transition-colors ${/(?=.*[a-z])/.test(formData.password) ? "text-green-400" : ""}`}
              >
                <span className="w-1 h-1 bg-current rounded-full"></span>
                <span>One lowercase letter</span>
              </li>
              <li
                className={`flex items-center space-x-2 transition-colors ${/(?=.*[A-Z])/.test(formData.password) ? "text-green-400" : ""}`}
              >
                <span className="w-1 h-1 bg-current rounded-full"></span>
                <span>One uppercase letter</span>
              </li>
              <li
                className={`flex items-center space-x-2 transition-colors ${/(?=.*\d)/.test(formData.password) ? "text-green-400" : ""}`}
              >
                <span className="w-1 h-1 bg-current rounded-full"></span>
                <span>One number</span>
              </li>
            </ul>
          </div>

          {/* Enhanced Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Creating Your Account...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Create Account</span>
              </div>
            )}
          </Button>
        </form>

        {/* Enhanced Terms and Privacy */}
        <p className="text-xs text-gray-400 text-center mt-6 bg-white/5 p-3 rounded-lg border border-white/10">
          By creating an account, you agree to our{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
            Privacy Policy
          </a>
        </p>
      </CardContent>
    </Card>
  )
}
