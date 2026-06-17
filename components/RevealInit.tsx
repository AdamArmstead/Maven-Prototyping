'use client'

import { useEffect } from 'react'

export default function RevealInit() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.rev').forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = Math.min((i % 6) * 60, 300) + 'ms'
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])

  return null
}
