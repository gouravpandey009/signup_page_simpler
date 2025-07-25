"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogOut } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    const currentUser = localStorage.getItem("currentUser")
    if (currentUser) {
      setUser(JSON.parse(currentUser))
    }
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    return pathname === href
  }

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    setUser(null)
    router.push("/")
  }

  // Prevent hydration mismatch by not rendering user-dependent content until mounted
  if (!mounted) {
    return (
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SimplerTech
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative ${
                    isActive(item.href) ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  )}
                </Link>
              ))}

              {/* Loading state for auth buttons */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-10 bg-white/10 rounded animate-pulse"></div>
                <div className="w-20 h-10 bg-white/10 rounded animate-pulse"></div>
              </div>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">ST</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SimplerTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative ${
                  isActive(item.href) ? "text-blue-400" : "text-gray-300"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                )}
              </Link>
            ))}

            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button variant="ghost" className="text-white hover:text-blue-400 hover:bg-white/10">
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="text-white hover:text-red-400 hover:bg-white/10"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/signin">
                  <Button variant="ghost" className="text-white hover:text-blue-400 hover:bg-white/10">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 px-2 py-1 ${
                    isActive(item.href) ? "text-blue-400" : "text-gray-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {user ? (
                <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                  <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-white hover:text-blue-400 hover:bg-white/10"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      handleLogout()
                      setIsOpen(false)
                    }}
                    variant="ghost"
                    className="w-full justify-start text-white hover:text-red-400 hover:bg-white/10"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                  <Link href="/signin" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full text-white hover:text-blue-400 hover:bg-white/10">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
