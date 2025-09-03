import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Minha IA Premium - Pacote Avançado com ChatGPT",
  description:
    "Descubra o Pacote Premium do Minha IA. Desbloqueie recursos exclusivos com subagentes premium, guias práticos e modelos prontos para multiplicar seus resultados.",
  icons: {
    icon: "/favicon.ico",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
