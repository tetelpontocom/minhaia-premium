import { Button } from "@/components/ui/button"

export default function DownsellPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        {/* Headline */}
        <h1 className="text-4xl font-extrabold mb-6">
          ⚡ Última Chance: Comece sua Jornada com IA por um Valor Simbólico!
        </h1>

        {/* Storytelling / Contexto */}
        <p className="text-xl mb-6 leading-relaxed">
          Você chegou até aqui porque quer transformar sua relação com a tecnologia. Talvez o pacote completo ainda não
          seja para você, e tudo bem. Por isso criamos uma opção essencial para você{" "}
          <strong>não sair de mãos vazias</strong>.
        </p>

        {/* Benefícios da versão enxuta */}
        <div className="grid gap-4 text-left bg-gray-800/60 p-6 rounded-2xl shadow-lg mb-8">
          <p>
            📘 <strong>Minha IA Essencial</strong>: conteúdo principal do método para começar na prática
          </p>
          <p>
            🎯 <strong>Foco no essencial</strong>: direto ao ponto, sem enrolação e pronto para aplicar
          </p>
          <p>
            🚀 <strong>Acesso imediato</strong>: nada de esperar, você começa hoje mesmo
          </p>
        </div>

        {/* Prova Social */}
        <div className="bg-gray-800/40 border border-gray-700 p-4 rounded-xl text-sm italic mb-8">
          <p>
            "Achei que não daria conta, mas comecei com a versão essencial e foi o que me abriu portas. Hoje, já uso IA
            para economizar tempo e ganhar dinheiro!" – <strong>Larissa M.</strong>
          </p>
        </div>

        {/* Oferta e Urgência */}
        <p className="text-2xl font-bold mb-4">
          Leve agora por apenas <span className="text-green-400">R$19</span>.
        </p>
        <p className="text-red-400 font-semibold mb-8">
          ⚠️ Oferta exclusiva e disponível somente nesta página. Depois, não estará mais ativa.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition transform hover:scale-105"
          >
            <a href="https://pay.kiwify.com.br/MPQ4uTa">✅ Sim! Quero começar com o Minha IA Essencial</a>
          </Button>
          <a
            href="https://tetel.online/pravoce"
            className="text-blue-400 underline mt-4 sm:mt-0 self-center hover:text-blue-300 transition-colors font-semibold"
          >
            🌐 Prefiro conhecer o Ecossistema Tetel
          </a>
        </div>
      </div>
    </section>
  )
}
