import { useState, useEffect } from 'react'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo">ROSCARF</a>
        <ul className="nav-links">
          <li><a href="#story">Story</a></li>
          <li><a href="#collection">Collection</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <a href="#story" onClick={closeMenu}>Story</a>
        <a href="#collection" onClick={closeMenu}>Collection</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </>
  )
}
