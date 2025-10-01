declare global {
  interface Window {
    fbq: (action: string, event: string, parameters?: any) => void
    gtag: (command: string, targetId: string, config?: any) => void
    dataLayer: any[]
  }
}

export {}
