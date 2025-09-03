export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      {/* Header */}
      <header className="w-full py-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          🎉 Seja bem-vindo(a) ao <span className="text-blue-400">Minha IA</span>!
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Sua jornada para dominar a Inteligência Artificial começa agora.
        </p>
      </header>

      {/* Confirmação */}
      <main className="max-w-2xl space-y-6">
        <p className="text-lg md:text-xl text-gray-300">Sua inscrição foi confirmada com sucesso!</p>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg space-y-4">
          <p className="text-gray-200 text-base">📩 Em poucos minutos você receberá um e-mail com:</p>
          <ul className="text-gray-300 text-sm md:text-base space-y-2 text-left">
            <li>✅ Confirmação da sua compra</li>
            <li>✅ Link para acesso à plataforma</li>
            <li>✅ Dicas exclusivas para aproveitar ao máximo sua IA</li>
          </ul>
        </div>

        <p className="text-gray-400 text-sm">Não recebeu o e-mail? Verifique sua caixa de spam ou promoções.</p>
      </main>

      {/* Direcionamento para Comunidade */}
      <section className="mt-10 max-w-xl text-center space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">Faça parte da nossa Comunidade Exclusiva</h2>
        <p className="text-gray-300 text-sm md:text-base">
          Conecte-se com outros alunos, tire dúvidas e compartilhe suas conquistas.
        </p>
        <a
          href="https://chat.whatsapp.com/Fp0js4GTpZuAJeRJ7AXBiN?mode=ems_copy_h_c"
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
          rel="noreferrer"
        >
          Entrar na Comunidade do WhatsApp →
        </a>
      </section>

      {/* Oferta diferenciada */}
      <section className="mt-12 max-w-xl text-center space-y-6">
        {/* Caso Premium */}
        <div className="bg-blue-900/30 border border-blue-600 rounded-2xl p-6 shadow-md">
          <h3 className="text-lg md:text-xl font-semibold text-blue-300">
            👑 Você que adquiriu o <span className="text-white">Pacote Premium</span>:
          </h3>
          <p className="text-gray-300 text-sm md:text-base mt-2">
            Parabéns! 🎉 Agora você tem acesso a benefícios exclusivos, recursos avançados e suporte prioritário.
            Aproveite ao máximo essa experiência diferenciada.
          </p>
        </div>

        {/* Caso não Premium */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-md space-y-4">
          <h3 className="text-lg md:text-xl font-semibold text-white">Ainda não tem o Pacote Premium?</h3>
          <p className="text-gray-300 text-sm md:text-base">
            Desbloqueie recursos avançados, receba suporte prioritário e acelere seus resultados com a versão completa.
          </p>
          <a
            href="https://pay.kiwify.com.br/ypflx1p"
            target="_blank"
            className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
            rel="noreferrer"
          >
            Quero o Pacote Premium →
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="mt-12 text-xs text-gray-500">&copy; 2025 Minha IA - Todos os direitos reservados.</footer>
    </div>
  )
}
