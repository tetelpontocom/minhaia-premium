"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, BookOpen, Folder, Shield } from "lucide-react"

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, unknown>) => void
  }
}

export default function MinhaIAPremium() {
  // Função principal do checkout Premium
  const handleCheckout = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout")
    }
    window.location.href = "https://pay.kiwify.com.br/ypflx1p"
  }

  // Função para quem clicar no link do Ecossistema
  const handleLeadClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead")
    }
    window.location.href = "https://tetel.online/pravoce"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 to-black text-white">
      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center py-10 px-4">
        <div className="inline-flex items-center gap-2 bg-purple-900 text-purple-100 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>Upgrade Exclusivo</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Descubra o <span className="text-yellow-400">Pacote Premium</span> do Minha IA
        </h1>

        <p className="text-base sm:text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
          Seu acesso ao <strong>Minha IA</strong> já está ativo. Agora você pode desbloquear recursos exclusivos que vão
          facilitar sua rotina e multiplicar seus resultados.
        </p>

        <Button
          onClick={handleCheckout}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 text-base sm:text-lg rounded-lg shadow-lg transition-all duration-200 active:scale-95 mb-4 whitespace-normal min-h-[56px]"
        >
          ✅ Sim! Quero o Pacote Premium
        </Button>

        <button
          onClick={handleLeadClick}
          className="text-sm text-purple-200 hover:text-white underline transition-colors"
        >
          Prefiro explorar o Ecossistema Tetel primeiro
        </button>
      </section>

      {/* Benefícios */}
      <section className="max-w-3xl mx-auto px-4 mb-10">
        <Card className="bg-purple-800/40 backdrop-blur border border-purple-600">
          <CardContent className="p-6 sm:p-8">
            <ul className="space-y-4 text-left">
              <li className="flex items-start gap-3">
                <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-purple-100">
                  <strong>Pacote exclusivo de Subagentes Premium</strong> para produtividade, vendas e conteúdo
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-purple-100">
                  <strong>Guia prático exclusivo</strong> com estratégias para aplicar seus Agentes IA no dia a dia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Folder className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-purple-100">
                  <strong>Modelos prontos</strong> para Instagram, eBooks, estratégias e apresentações
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Prova social */}
      <section className="max-w-3xl mx-auto px-4 mb-10">
        <Card className="bg-white/10 border border-purple-600">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">O que dizem nossos clientes</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-yellow-400 pl-4 text-purple-100 italic">
                "Achei que o Essencial já era bom, mas o Premium me deu muito mais clareza e produtividade."
              </blockquote>
              <blockquote className="border-l-4 border-yellow-400 pl-4 text-purple-100 italic">
                "Os modelos prontos economizaram horas do meu trabalho."
              </blockquote>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Garantia */}
      <section className="max-w-3xl mx-auto px-4 mb-10">
        <Card className="bg-green-100 text-green-700 border border-green-300">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-xl font-bold mb-2">Garantia Simbólica</h2>
            <p className="text-sm sm:text-base">
              Se você não gostar, pode cancelar a qualquer momento. Seu risco é zero.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Preço + CTA final */}
      <section className="max-w-3xl mx-auto text-center py-10 px-4">
        <p className="text-lg sm:text-xl text-purple-100 mb-6">
          Tudo isso por apenas <span className="text-green-400 font-bold">R$47 a mais</span>! <br />
          Pagamento único, sem mensalidades.
        </p>
        <Button
          onClick={handleCheckout}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 text-base sm:text-lg rounded-lg shadow-lg transition-all duration-200 active:scale-95 whitespace-normal min-h-[56px]"
        >
          🚀 Quero o Pacote Premium por R$47
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800 py-6 text-center px-4 text-purple-300 text-xs">
        © 2025 Minha IA - Todos os direitos reservados
      </footer>
    </div>
  )
}
