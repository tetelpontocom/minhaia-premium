"use client"

import { useEffect, useState } from "react"

export default function PixelHelper() {
  const [pixelStatus, setPixelStatus] = useState<{
    facebook: boolean
    google: boolean
  }>({ facebook: false, google: false })

  useEffect(() => {
    // Check if pixels are loaded (only in development)
    if (process.env.NODE_ENV === "development") {
      const checkPixels = () => {
        setPixelStatus({
          facebook: typeof window.fbq !== "undefined",
          google: typeof window.gtag !== "undefined",
        })
      }

      const timer = setTimeout(checkPixels, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg text-xs z-50">
      <div className="font-bold mb-1">Pixel Status:</div>
      <div className={pixelStatus.facebook ? "text-green-400" : "text-red-400"}>
        Facebook: {pixelStatus.facebook ? "✅ Loaded" : "❌ Not Loaded"}
      </div>
      <div className={pixelStatus.google ? "text-green-400" : "text-red-400"}>
        Google: {pixelStatus.google ? "✅ Loaded" : "❌ Not Loaded"}
      </div>
    </div>
  )
}
