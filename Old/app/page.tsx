"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Sparkles, CheckCircle2 } from "lucide-react"
import { useEffect } from "react"

export default function MinhaIAPremium() {
  useEffect(() => {
    // Meta Pixel base
    if (typeof window !== "undefined" && !window.fbq) {
      !((f, b, e, v, n, t, s) => {
        if (f.fbq) return
        n = f.fbq = () => {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        }
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = !0
        n.version = "2.0"
        n.queue = []
        t = b.createElement(e)
        t.async = !0
        t.src = v
        s = b.getElementsByTagName(e)[0]
        s.parentNode.insertBefore(t, s)
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")

      window.fbq("init", "1305167264321996")
      window.fbq("track", "PageView")
      window.fbq("track", "ViewContent", { content_name: "Minha IA Premium" })
    }
  }, [])

  const handleCheckout = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout", { content_name: "Minha IA Premium" })
    }
    window.location.href = "https://pay.kiwify.com.br/ypflx1p"
  }

  const handleLeadClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", { content_name: "Saída Ecossistema Tetel - Premium" })
    }
    window.location.href = "https://tetel.online/pravoce"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-purple-900 to-black text-white">
      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center py-16 px-4">
        <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Acesso Premium Exclusivo</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          ✨ Descubra o Pacote <span className="text-yellow-300">Premium</span> do Minha IA
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
          Seu acesso ao <strong>Minha IA</strong> já está ativo. Agora você pode desbloquear recursos exclusivos que vão
          facilitar sua rotina e multiplicar seus resultados:
        </p>
      </section>

      {/* Benefícios */}
      <section className="max-w-3xl mx-auto px-4 mb-12">
        <Card className="bg-purple-950/50 border border-purple-700 backdrop-blur-lg">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-yellow-300" />
              <p>
                <strong>Pacote exclusivo de Subagentes Premium</strong> para produtividade, vendas e conteúdo.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-400" />
              <p>
                <strong>Guia prático exclusivo</strong> com estratégias para aplicar seus Agentes IA no dia a dia.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-yellow-300" />
              <p>
                <strong>Modelos prontos</strong> para Instagram, eBooks, estratégias e apresentações.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Preço e CTA */}
      <section className="max-w-3xl mx-auto text-center px-4 mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Tudo isso por apenas <span className="text-green-400">R$47</span> a mais!
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8">Pagamento único, sem mensalidades.</p>

        <Button
          onClick={handleCheckout}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 active:scale-95 text-lg w-full sm:w-auto"
        >
          ✅ Sim! Quero o Pacote Premium
        </Button>

        <div className="mt-6">
          <button onClick={handleLeadClick} className="text-sm text-gray-400 hover:text-gray-200 underline">
            Prefiro explorar o Ecossistema Tetel primeiro
          </button>
        </div>
      </section>

      {/* Extras */}
      <section className="max-w-3xl mx-auto px-4 mb-12">
        <Card className="bg-purple-950/40 border border-purple-700 shadow-lg">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Por que o Premium vale a pena</h2>
            <p className="text-gray-300 mb-4">
              Você economiza tempo, evita bloqueios criativos e ganha acesso vitalício a tudo o que já foi criado e o
              que ainda virá.
            </p>
            <p className="text-gray-400 text-sm">
              É o passo natural para quem quer dominar sua IA pessoal de forma completa e profissional.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Final */}
      <section className="text-center py-12">
        <Button
          onClick={handleCheckout}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 active:scale-95 text-lg"
        >
          🚀 Quero o Pacote Premium agora
        </Button>
      </section>

      <footer className="text-center text-gray-400 text-sm py-6 border-t border-purple-800">
        © 2025 Minha IA — Todos os direitos reservados
      </footer>
    </div>
  )
}
