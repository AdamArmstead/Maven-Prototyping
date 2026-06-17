'use client'

import { useEffect, useRef } from 'react'

export default function DottedSurface() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const SPACING = 26
    const DOT_MAX = 2.2
    const DOT_MIN = 0.4
    const WAVE_SPEED = 0.45
    const WAVELENGTH = 130

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animId: number
    let time = 0

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const cols = Math.ceil(w / SPACING) + 1
      const rows = Math.ceil(h / SPACING) + 1
      const cx = w * 0.38
      const cy = h * 0.5
      const maxDist = Math.sqrt(w * w + h * h) * 0.52

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * SPACING
          const y = j * SPACING

          const wave =
            Math.sin(x / WAVELENGTH + time) *
            Math.cos(y / WAVELENGTH + time * 0.6) *
            Math.sin((x + y) / (WAVELENGTH * 1.4) + time * 0.4)

          const t = (wave + 1) / 2

          const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
          const fade = Math.max(0, 1 - dist / maxDist)
          if (fade < 0.01) continue

          const radius = (DOT_MIN + t * (DOT_MAX - DOT_MIN)) * fade
          const opacity = (0.12 + t * 0.48) * fade

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(14,92,85,${opacity.toFixed(3)})`
          ctx.fill()
        }
      }

      if (!reducedMotion) {
        time += WAVE_SPEED * 0.018
        animId = requestAnimationFrame(draw)
      }
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <div className="dotted-surface" aria-hidden="true">
      <canvas ref={canvasRef} className="dotted-surface-canvas" />
    </div>
  )
}
