"use client"

import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    "Visão Geral",
    "Estratégia Digital",
    "Segmentação",
    "Inteligência Artificial",
    "Identidade Visual",
    "Conteúdo",
    "Equipe",
    "Cronograma",
  ]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-1 py-4 overflow-x-auto">
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={
                activeTab === tab
                  ? "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full whitespace-nowrap"
                  : "text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-6 py-2 rounded-full whitespace-nowrap"
              }
              variant={activeTab === tab ? "default" : "ghost"}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
