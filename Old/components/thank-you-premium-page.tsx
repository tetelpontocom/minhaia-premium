export default function ThankYouPremiumPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      {/* Header */}
      <header className="w-full py-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          🎉 Bem-vindo(a) ao <span className="text-blue-400">Minha IA Premium</span>!
        </h1>
        <p className="text-green-400 mt-2 text-base md:text-lg font-semibold">
          🚀 Você agora faz parte do grupo seleto de membros Premium.
        </p>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-2xl space-y-6">
        <p className="text-lg md:text-xl text-gray-300">✅ Sua inscrição foi confirmada com sucesso!</p>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg space-y-4">
          <p className="text-gray-200 text-base">📩 Em poucos minutos você receberá um e-mail com:</p>
          <ul className="text-gray-300 text-sm md:text-base space-y-2 text-left">
            <li>✔️ Confirmação da sua compra Premium</li>
            <li>✔️ Link exclusivo de acesso à plataforma</li>
            <li>✔️ Conteúdos e dicas avançadas para dominar sua IA</li>
          </ul>
        </div>

        <p className="text-gray-400 text-sm">Não recebeu o e-mail? Verifique sua caixa de spam ou promoções.</p>
      </main>

      {/* Comunidade Premium */}
      <section className="mt-10 max-w-xl text-center space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">Faça parte da Comunidade Premium no WhatsApp</h2>
        <p className="text-gray-300 text-sm md:text-base">
          Conecte-se com outros membros Premium e tenha acesso a conteúdos e suporte exclusivos.
        </p>
        <a
          href="https://chat.whatsapp.com/Fp0js4GTpZuAJeRJ7AXBiN?mode=ems_copy_h_c"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
        >
          👉 Entrar na Comunidade Premium
        </a>
      </section>

      {/* Saída estratégica */}
      <section className="mt-12 max-w-xl text-center space-y-3">
        <p className="text-gray-400 text-sm md:text-base">Deseja conhecer mais sobre o nosso universo?</p>
        <a
          href="https://tetel.online/pravoce"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
        >
          🌐 Explorar o Ecossistema Tetel
        </a>
      </section>

      {/* Rodapé */}
      <footer className="mt-12 text-xs text-gray-500">&copy; 2025 Minha IA - Todos os direitos reservados.</footer>
    </div>
  )
}
