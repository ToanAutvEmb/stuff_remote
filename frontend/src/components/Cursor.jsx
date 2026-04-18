import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!hasPointer) return

    const cursor = cursorRef.current
    const ring = ringRef.current
    cursor.style.display = 'block'
    ring.style.display = 'block'

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
      // Detect dark sections for cursor color swap
      const el = document.elementFromPoint(mx, my)
      const isDark = !!el?.closest('#hero, #collection, #craft, footer')
      cursor.classList.toggle('on-dark', isDark)
      ring.classList.toggle('on-dark', isDark)
    }

    const animate = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    animate()

    const hoverEls = document.querySelectorAll('a, button, .product-card')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px'; cursor.style.height = '20px'
        ring.style.width = '56px'; ring.style.height = '56px'
      })
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '10px'; cursor.style.height = '10px'
        ring.style.width = '36px'; ring.style.height = '36px'
      })
    })

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
