"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function UpsellPage() {
  useEffect(() => {
    // Track page view with additional context
    if (typeof window !== "undefined") {
      // Facebook Pixel - ViewContent event
      if (window.fbq) {
        window.fbq("track", "ViewContent", {
          content_name: "Minha IA Premium Upsell Page",
          content_category: "Digital Product",
          content_type: "product",
          value: 47,
          currency: "BRL",
        })
      }

      // Google Analytics - page view with custom parameters
      if (window.gtag) {
        window.gtag("event", "page_view", {
          page_title: "Minha IA Premium Upsell",
          page_location: window.location.href,
          content_group1: "Upsell Pages",
        })
      }
    }
  }, [])

  const handlePurchaseClick = () => {
    // Track Facebook Pixel events
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout", {
        content_name: "Minha IA Premium",
        content_category: "Digital Product",
        value: 47,
        currency: "BRL",
      })

      window.fbq("track", "AddToCart", {
        content_name: "Minha IA Premium",
        content_category: "Digital Product",
        content_type: "product",
        value: 47,
        currency: "BRL",
      })
    }

    // Track Google Analytics events
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "begin_checkout", {
        currency: "BRL",
        value: 47,
        items: [
          {
            item_id: "minha-ia-premium",
            item_name: "Minha IA Premium",
            category: "Digital Product",
            quantity: 1,
            price: 47,
          },
        ],
      })

      window.gtag("event", "add_to_cart", {
        currency: "BRL",
        value: 47,
        items: [
          {
            item_id: "minha-ia-premium",
            item_name: "Minha IA Premium",
            category: "Digital Product",
            quantity: 1,
            price: 47,
          },
        ],
      })
    }

    // Open purchase link
    window.open("https://pay.kiwify.com.br/ypflx1p", "_blank")
  }

  const handleEcosystemClick = () => {
    // Track exit intent
    if (typeof window !== "undefined") {
      if (window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Ecosystem Tetel Interest",
          content_category: "Exit Intent",
        })
      }

      if (window.gtag) {
        window.gtag("event", "click", {
          event_category: "Exit Intent",
          event_label: "Ecosystem Tetel",
        })
      }
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          ✨ Descubra o Pacote Premium <br />
          <span className="text-purple-300">do Minha IA</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl mb-8">
          Seu acesso ao <strong>Minha IA</strong> já está ativo. Agora você pode desbloquear recursos exclusivos que vão
          facilitar sua rotina e multiplicar seus resultados:
        </p>

        {/* Benefícios extras */}
        <div className="grid gap-6 text-left bg-purple-950/40 p-6 rounded-2xl shadow-lg mb-10">
          <p>
            ✨ <strong>Pacote exclusivo de Subagentes Premium</strong> para produtividade, vendas e conteúdo
          </p>
          <p>
            📘 <strong>Guia prático exclusivo</strong> com estratégias para aplicar seus Agentes IA no dia a dia
          </p>
          <p>
            📂 <strong>Modelos prontos</strong> para Instagram, eBooks, estratégias e apresentações
          </p>
        </div>

        {/* Chamada */}
        <p className="text-2xl font-bold mb-6">
          Tudo isso por apenas <span className="text-green-400">R$47</span> a mais! 👉 Pagamento único, sem
          mensalidades.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handlePurchaseClick}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition"
          >
            ✅ Sim! Quero o Pacote Premium
          </Button>
          <a
            href="https://tetel.online/pravoce"
            onClick={handleEcosystemClick}
            className="text-purple-300 underline mt-4 sm:mt-0 hover:text-purple-200 transition-colors"
          >
            🌍 Prefiro explorar o Ecossistema Tetel primeiro
          </a>
        </div>
      </div>
    </section>
  )
}
