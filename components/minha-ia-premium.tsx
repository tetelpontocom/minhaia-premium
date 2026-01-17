"use client"
import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Sparkles, Timer } from "lucide-react"

const KIWI_PREMIUM = "https://pay.kiwify.com.br/ypflx1p"

function trackFBEvent(eventName: string, payload?: Record<string, any>) {
  if (eventName === "Purchase") return
  try {
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", eventName, payload || {})
    }
  } catch {}
}

function fmt(t: number) {
  const m = Math.floor(t / 60)
  const s = t % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

export default function MinhaIAPremium() {
  const ctaRef = useRef<HTMLButtonElement | null>(null)
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60)
  const [ctaClicks, setCtaClicks] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => {
      trackFBEvent("ViewContent", {
        content_name: "LP Minha IA - Premium",
        content_category: "landing",
        currency: "BRL",
      })
    }, 600)

    const el = ctaRef.current
    let io: IntersectionObserver | null = null
    if (el && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              trackFBEvent("ViewContent", {
                content_name: "CTA Visible - Premium",
              })
            }
          })
        },
        { threshold: 0.35 },
      )
      io.observe(el)
    }

    return () => {
      clearTimeout(t)
      if (io && el) io.unobserve(el)
    }
  }, [])

  useEffect(() => {
    const id = setInterval(() => setTimeLeft((p) => (p > 0 ? p - 1 : 0)), 1000)
    return () => clearInterval(id)
  }, [])

  const scarcityCopy = useMemo(() => {
    if (timeLeft === 0) return "Condição especial encerrando."
    if (timeLeft < 60) return "Últimos instantes da condição especial."
    if (timeLeft < 5 * 60) return "Condição ativa por tempo limitado."
    return "Condição especial ativa."
  }, [timeLeft])

  const handleBuy = (label = "Minha IA - Premium", value = 97) => {
    setCtaClicks((n) => n + 1)
    trackFBEvent("InitiateCheckout", {
      content_name: label,
      value,
      currency: "BRL",
      click_index: ctaClicks + 1,
    })
    setTimeout(() => {
      window.open(KIWI_PREMIUM, "_blank")
    }, 200)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-800 text-white">
      {/* HEADER */}
      <header className="w-full border-b border-zinc-800/70 sticky top-0 backdrop-blur bg-zinc-900/70 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="Minha IA" className="w-10 h-10 rounded" />
            <div>
              <div className="text-sm font-semibold">Minha IA</div>
              <div className="text-[11px] text-zinc-400">Plano Premium</div>
            </div>
          </div>
          <a
            href="https://minhaia.tetel.online"
            className="text-xs sm:text-sm text-zinc-300 hover:text-white underline"
          >
            Ver versão completa
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-12 pb-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100/10 text-amber-300 border border-amber-300/30 px-3 py-1.5 rounded-full text-[12px] mb-4">
              <Sparkles className="w-4 h-4" />
              Recursos avançados e acesso imediato
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Desbloqueie o <span className="text-yellow-400">Premium</span> e avance com
              <br className="hidden sm:block" />
              mais autonomia e velocidade
            </h1>

            <p className="text-zinc-300 mt-4 text-sm md:text-base">
              Tenha subagentes, modelos prontos, guias práticos e rotinas que organizam seu uso da IA e ajudam você a ir
              mais rápido, com mais clareza.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button
                ref={ctaRef}
                onClick={() => handleBuy("Minha IA - Premium (Hero)", 97)}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl shadow-lg"
              >
                Garantir Premium agora
              </Button>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Timer className="w-4 h-4" />
                <span className="font-semibold text-amber-300">{fmt(timeLeft)}</span>
                <span className="hidden sm:inline">• {scarcityCopy}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO EXTRA OPCIONAL */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl border border-orange-300/50 bg-gradient-to-br from-orange-50/10 to-yellow-50/10 p-6">
            <h2 className="text-lg font-semibold text-orange-300 text-center mb-5">
              Extra opcional para quem quer aplicar ideias com mais rapidez
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <img
                  src="/images/capa-faca-caixa-agora-potencializada.png"
                  alt="Ebook Faça Caixa Agora"
                  className="w-36 rounded-xl shadow border border-orange-200/50"
                />
                <img
                  src="/images/miniatura-sites-1.jpg"
                  alt="Curso Geladinho Gourmet"
                  className="w-36 rounded-xl shadow border border-pink-200/50"
                />
              </div>

              <div className="space-y-3 text-sm text-zinc-200">
                <p>
                  Durante o checkout, você pode adicionar o <b>Ebook "Faça Caixa Agora"</b>, com ideias práticas que
                  podem ser colocadas em ação com o apoio da Minha IA Premium.
                </p>
                <p>
                  Ao escolher essa opção, você recebe gratuitamente o<b> Curso Geladinho Gourmet</b>, como material
                  complementar.
                </p>
                <p className="text-xs text-orange-300/80 italic">
                  *Complemento opcional apresentado durante o checkout.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA + CTA FINAL */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Garantia simbólica</h3>
            <p className="text-zinc-300 text-sm">
              Teste com tranquilidade. Se não fizer sentido para você, é só cancelar.
            </p>
          </div>

          <div className="mt-6">
            <Button
              onClick={() => handleBuy("Minha IA - Premium (Final CTA)", 97)}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl"
            >
              Garantir Premium agora
            </Button>
            <div className="mt-3 text-xs text-zinc-400">{scarcityCopy}</div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-zinc-400 border-t border-zinc-800">
        © 2025 Minha IA — Premium. Todos os direitos reservados.
      </footer>
    </div>
  )
}
