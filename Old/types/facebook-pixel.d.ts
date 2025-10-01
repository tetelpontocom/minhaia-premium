declare global {
  interface Window {
    fbq: (action: string, event: string, parameters?: any) => void
  }
}

export {}
