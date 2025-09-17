"use client"

import { Button } from "@/components/ui/button"

export default function UpsellPage() {
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
            onClick={() => window.open("https://pay.kiwify.com.br/ypflx1p", "_blank")}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition"
          >
            ✅ Sim! Quero o Pacote Premium
          </Button>
          <a
            href="https://tetel.online/pravoce"
            className="text-purple-300 underline mt-4 sm:mt-0 hover:text-purple-200 transition-colors"
          >
            🌍 Prefiro explorar o Ecossistema Tetel primeiro
          </a>
        </div>
      </div>
    </section>
  )
}
