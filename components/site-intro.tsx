
'use client'

import { useEffect, useRef, useState } from 'react'

const VIDEO = '/Mahek_Overseas_Brand_Intro_Reel_1080x1920_v2.mp4'
const LOGO = '/images/mahek-logo-full.jpg'

export function SiteIntro() {
  const [stage, setStage] = useState<'video' | 'logo' | 'done'>('video')
  const [visible, setVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    try {
      if (sessionStorage.getItem('mahek-intro-seen') === 'yes') {
        setStage('done')
        return
      }
    } catch {}

    setVisible(true)
  }, [])

  useEffect(() => {
    if (stage !== 'logo') return

    const timer = window.setTimeout(() => {
      finishIntro()
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [stage])

  function finishIntro() {
    try {
      sessionStorage.setItem('mahek-intro-seen', 'yes')
    } catch {}

    setVisible(false)
    window.setTimeout(() => setStage('done'), 450)
  }

  if (!visible || stage === 'done') return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#062d27] transition-opacity duration-500"
      role="dialog"
      aria-label="Mahek Overseas introduction"
    >
      {stage === 'video' && (
        <>
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            src={VIDEO}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => setStage('logo')}
            onError={() => setStage('logo')}
          />

          <button
            type="button"
            onClick={finishIntro}
            className="absolute right-5 top-5 rounded-full border border-[#d4b15b] px-5 py-2 text-sm text-white hover:bg-white/10"
          >
            Skip Intro
          </button>
        </>
      )}

      {stage === 'logo' && (
        <div className="flex h-full w-full animate-in fade-in items-center justify-center p-8">
          <img
            src={LOGO}
            alt="Mahek Overseas — Global Recruitment Solutions"
            className="max-h-[70vh] w-auto max-w-[85vw] object-contain"
          />
        </div>
      )}
    </div>
  )
}
