'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function DottedSurface() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const SEPARATION = 140
    const AMOUNTX = 45
    const AMOUNTY = 75

    const width = container.offsetWidth
    const height = container.offsetHeight

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(72, width / height, 1, 10000)
    camera.position.set(0, 280, 1550)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    const positions: number[] = []
    const colors: number[] = []

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions.push(
          ix * SEPARATION - (AMOUNTX * SEPARATION) / 2,
          0,
          iy * SEPARATION - (AMOUNTY * SEPARATION) / 2,
        )
        // petrol: rgb(14, 92, 85) normalised to 0–1
        colors.push(14 / 255, 92 / 255, 85 / 255)
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 8,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    let count = 0
    let animId: number
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const animate = () => {
      animId = requestAnimationFrame(animate)

      const pos = geometry.attributes.position.array as Float32Array
      let i = 0
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          pos[i * 3 + 1] =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50
          i++
        }
      }
      geometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
      if (!reducedMotion) count += 0.04
    }

    const ro = new ResizeObserver(() => {
      const w = container.offsetWidth
      const h = container.offsetHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    })
    ro.observe(container)

    animate()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="dotted-surface"
      aria-hidden="true"
    />
  )
}
