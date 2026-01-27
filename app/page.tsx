"use client"

export default function UpsellPremium() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* CABECALHO CONVERSACIONAL */}
      <section className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Perfeito! Para você que já entendeu a base da Minha IA, o Premium é o próximo passo natural.
          </h1>

          <p className="text-zinc-300 max-w-2xl mx-auto">
            Use a Minha IA com mais autonomia, organizacao e profundidade, no seu ritmo.
          </p>
        </div>
      </section>

      {/* POR QUE ISSO EXISTE */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-zinc-300">
            O Premium existe para quem ja percebeu o valor da Minha IA e quer avancar com mais
            estrutura, clareza e controle sobre o proprio uso.
          </p>
        </div>
      </section>

      {/* O QUE MUDA PARA VOCE */}
      <section className="py-14 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="grid gap-4 md:grid-cols-3 text-center">
            <li className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-zinc-200">
              Mais autonomia para conduzir conversas e decisoes
            </li>
            <li className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-zinc-200">
              Organizacao mais profunda das ideias e processos
            </li>
            <li className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-zinc-200">
              Uso continuo com mais clareza e fluidez
            </li>
          </ul>
        </div>
      </section>

      {/* CONTINUIDADE / CONFIANCA */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-zinc-300">
            Nada muda na essencia.  
            O Premium apenas amplia o que voce ja comecou — sem pressa, sem pressao,
            respeitando o seu ritmo.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <a
            href="https://wa.me/5582999176900?text=Oi%20%F0%9F%91%8B%20Quero%20entender%20melhor%20o%20Upgrade%20para%20Minha%20IA%20Premium."
            className="inline-flex items-center justify-center rounded-lg bg-zinc-100 text-black px-6 py-3 font-semibold hover:bg-zinc-200"
          >
            Quero seguir para o Premium com tranquilidade
          </a>

          <div className="mt-4 text-xs text-zinc-500">
            Sem urgencia • Sem pressao • Conversa assistida
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-zinc-400">
        2026 Minha IA — by TetelPontocom
      </footer>
    </div>
  )
}
