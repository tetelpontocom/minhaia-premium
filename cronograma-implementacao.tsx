import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CronogramaImplementacao() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8">
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                Visão Geral
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                Estratégia Digital
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                Segmentação
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                Inteligência Artificial
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                Identidade Visual
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                Conteúdo
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                Equipe
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
                Cronograma
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Timeline */}
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-900 mb-2">CRONOGRAMA</h1>
              <h2 className="text-4xl font-bold text-blue-900">DE IMPLEMENTAÇÃO</h2>
            </div>

            {/* Timeline Visual */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-16 left-16 right-16 h-1 bg-blue-900"></div>

              {/* Phase Circles and Content */}
              <div className="flex justify-between items-start relative">
                {/* Phase 1 */}
                <div className="flex flex-col items-center text-center max-w-xs">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 relative z-10">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Etapa 1</h3>
                  <p className="text-sm text-blue-700 mb-4">(0-3 meses)</p>
                  <ul className="text-xs text-left space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">▶</span>
                      Diagnóstico da comunicação
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">▶</span>
                      Implantação das ferramentas digitais e IA
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">▶</span>
                      Redesign do site e redes sociais
                    </li>
                  </ul>
                </div>

                {/* Phase 2 */}
                <div className="flex flex-col items-center text-center max-w-xs">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Etapa 2</h3>
                  <p className="text-sm text-blue-700 mb-4">(4-6 meses)</p>
                  <ul className="text-xs text-left space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">●</span>
                      Conteúdo segmentado por faixa etária
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">●</span>
                      Treinamento da equipe local
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">●</span>
                      Início da coleta de dados e BI
                    </li>
                  </ul>
                </div>

                {/* Phase 3 */}
                <div className="flex flex-col items-center text-center max-w-xs">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Etapa 3</h3>
                  <p className="text-sm text-blue-700 mb-4">(7-12 meses)</p>
                  <ul className="text-xs text-left space-y-1">
                    <li className="flex items-start">
                      <span className="text-blue-900 mr-2">●</span>
                      Otimização das ações com base em dados
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-900 mr-2">●</span>
                      Consolidação da imagem do prefeito como líder de transformação
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-900 mr-2">●</span>
                      Desenvolvimento da pré-campanha eleitoral indireta
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Phase Details */}
          <div className="space-y-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              Este projeto será implementado em fases estratégicas ao longo de 36 meses:
            </p>

            {/* Phase 1 Details */}
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Fase 1: Fundação (6 meses)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Estabelecimento da base tecnológica, identidade visual e primeiros assistentes virtuais
              </p>
            </div>

            {/* Phase 2 Details */}
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Fase 2: Expansão (12 meses)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Implementação completa da IA, segmentação avançada e otimização baseada em dados
              </p>
            </div>

            {/* Phase 3 Details */}
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Fase 3: Consolidação (18 meses)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Refinamento contínuo, expansão de funcionalidades e estabelecimento como referência
              </p>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mt-8">
              Essa abordagem faseada garante que cada etapa seja sólida e adaptável aos aprendizados, culminando com uma
              comunicação pública moderna e eficiente.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div>© 2025 Transformação Digital para Comunicação Pública - Prefeitura de Barra de São Miguel</div>
            <div className="flex items-center space-x-4">
              <span>Navegação:</span>
              <span>← Slides anterior/próximo</span>
              <span>Espaço: Próximo slide</span>
              <span>Home/End</span>
              <div className="flex items-center">
                <span className="mr-2">🔧 Made with Manus</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Navigation Arrows */}
      <div className="fixed bottom-8 right-8 flex space-x-2">
        <Button variant="outline" size="icon" className="bg-white shadow-lg">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="bg-white shadow-lg">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
