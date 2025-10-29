import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const _inter = Inter({ subsets: ["latin", "cyrillic"] })
const _playfair = Playfair_Display({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Midas Touch — Финансовый консалтинг для бизнеса",
  description:
    "Экспертный финансовый консалтинг для владельцев бизнеса на маркетплейсах. Стратегическое планирование, автоматизация процессов и рост прибыли.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans antialiased dark`}>
        {children}
      </body>
    </html>
  )
}
