import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SimplerTech - Modern Web Development",
  description:
    "Experience the future of web development with our modern, responsive, and beautifully designed platform.",
  keywords: "web development, react, nextjs, modern design, responsive",
  authors: [{ name: "SimplerTech Team" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
