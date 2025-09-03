"use client"

import { Button } from "@/components/ui/button"

export default function UpsellPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        {/* Headline */}
        <h1 className="text-4xl font-extrabold mb-6">
          🚀 Upgrade Exclusivo: Potencialize seu <span className="text-purple-300">Agente IA</span> com o{" "}
          <span className="text-purple-300">Pacote Avançado</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl mb-8">
          Você já ativou seu <strong>Agente IA Inicial</strong> no <strong>Minha IA</strong> por apenas R$27… Mas agora
          você pode desbloquear <span className="underline">funções avançadas</span> para resultados ainda mais
          poderosos:
        </p>

        {/* Benefícios extras */}
        <div className="grid gap-6 text-left bg-purple-950/40 p-6 rounded-2xl shadow-lg mb-10">
          <p>
            ✨ <strong>Pacote exclusivo de Subagentes Premium</strong> para produtividade, vendas e conteúdo
          </p>
          <p>
            🎥 <strong>Minicurso em vídeo</strong> mostrando como usar e personalizar seus Agentes IA
          </p>
          <p>
            📂 <strong>Modelos prontos</strong> para Instagram, eBooks, estratégias e apresentações
          </p>
        </div>

        {/* Chamada */}
        <p className="text-2xl font-bold mb-6">
          Tudo isso por apenas <span className="text-green-400">R$47</span> a mais! 👉 Um único pagamento, sem
          mensalidades.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.open("https://pay.kiwify.com.br/ypflx1p", "_blank")}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition"
          >
            ✅ Sim! Quero desbloquear agora
          </Button>
          <a
            href="https://minhaiaobrigado.tetel.online"
            className="text-gray-400 underline mt-4 sm:mt-0 hover:text-gray-300 transition-colors"
          >
            Não, prefiro manter apenas o básico
          </a>
        </div>
      </div>
    </section>
  )
}
