import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import ProductCard from '../components/ProductCard.jsx'
import { getProducts, subscribeNewsletter } from '../utils/api.js'
import './Home.css'

// Static fallback products — replace with API data when backend is ready
const FALLBACK_PRODUCTS = [
  { id: 1, name: 'Chàm Indigo',  material: 'Hand-dyed silk, Bắc Ninh',    price: '₫ 1,200,000', image: 'https://placehold.co/600x800/2c1810/d4956a?text=.' },
  { id: 2, name: 'Ngọc Bích',   material: 'Linen & raw silk blend',        price: '₫ 980,000',   image: 'https://placehold.co/600x800/1c2818/8aac7a?text=.' },
  { id: 3, name: 'Hoa Hồng',    material: 'Pure Mã Châu silk',             price: '₫ 1,450,000', image: 'https://placehold.co/600x800/201018/c47a9a?text=.' },
  { id: 4, name: 'Đêm Đen',     material: 'Woven charcoal silk, Vạn Phúc', price: '₫ 1,100,000', image: 'https://placehold.co/600x800/181818/888888?text=.' },
  { id: 5, name: 'Vàng Lúa',    material: 'Golden silk, hand-embroidered', price: '₫ 1,680,000', image: 'https://placehold.co/600x800/281c10/c49a5a?text=.' },
  { id: 6, name: 'Biển Xanh',   material: 'Silk chiffon, coastal dye',     price: '₫ 890,000',   image: 'https://placehold.co/600x800/10181c/5a8aa4?text=.' },
]

export default function Home() {
  useReveal()

  const [products, setProducts] = useState(FALLBACK_PRODUCTS)
  const [email, setEmail] = useState('')
  const [subMsg, setSubMsg] = useState('New arrivals. Artisan stories. No noise.')

  // FUTURE: uncomment to load from backend
  // useEffect(() => {
  //   getProducts().then(setProducts).catch(() => setProducts(FALLBACK_PRODUCTS))
  // }, [])

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      setSubMsg('Please enter a valid email.')
      return
    }
    // FUTURE: await subscribeNewsletter(email)
    setEmail('')
    setSubMsg('Cảm ơn bạn — welcome to Roscarf.')
  }

  return (
    <main>

      {/* ── HERO ─────────────────────────────────────── */}
      <section id="hero">
        <div className="hero-pattern" />
        <div className="hero-bg-text">LỤA</div>
        <div className="hero-content">
          <p className="hero-viet-label">Hà Nội · Lụa Việt · Tơ Tằm</p>
          <h1 className="hero-title">ROSCARF</h1>
          <p className="hero-tagline">Woven from memory.</p>
          <a href="#collection" className="btn-cta">Discover</a>
        </div>
        <div className="hero-scroll-hint">scroll</div>
      </section>

      {/* ── OUR STORY ────────────────────────────────── */}
      <section id="story">
        <div className="story-grid">
          <div className="story-left reveal">
            <p className="story-label">Our Story — Câu Chuyện</p>
            <div className="border-motif"><span /><i>truyền thống</i><span /></div>
            <h2 className="story-heading">CRAFT<br/>REBORN</h2>
            <div className="story-body">
              <p>For centuries, the weavers of Hội An and Hà Nội have held secrets passed between hands — the weight of silk thread, the rhythm of the loom, the patience of dye meeting cloth.</p>
              <p>Roscarf was born from a refusal to let that disappear. We work directly with third-generation artisans across Vietnam to create scarves that carry both history and now.</p>
              <p>Every piece is a slow thing. Intentional. Real.</p>
            </div>
            <span className="story-viet-word">LỤA</span>
          </div>
          <div className="story-right reveal reveal-delay-2">
            <div className="story-img-wrap">
              <img src="https://placehold.co/600x800/1a1008/c4a882?text=." alt="Vietnamese silk craft" />
            </div>
            <p className="story-img-caption">Artisan — Hội An, Quảng Nam</p>
          </div>
        </div>
      </section>

      {/* ── COLLECTION ───────────────────────────────── */}
      <section id="collection">
        <div className="section-header reveal">
          <div>
            <p className="section-label">Collection — Bộ Sưu Tập</p>
            <h2 className="section-heading">THE<br/>SCARVES</h2>
          </div>
          <a href="#" className="section-link">View All →</a>
        </div>
        <div className="product-grid">
          {products.map((p, i) => (
            <ProductCard key={p.id} {...p} delay={(i % 3) + 1} />
          ))}
        </div>
      </section>

      {/* ── CRAFT DETAIL ─────────────────────────────── */}
      <section id="craft">
        <div className="craft-inner">
          <div className="craft-img-col reveal">
            <img src="https://placehold.co/900x1100/1a1008/c4a882?text=." alt="Vạn Phúc silk weaving" />
          </div>
          <div className="craft-text-col">
            <p className="craft-viet reveal">Làng nghề · Vạn Phúc</p>
            <h2 className="craft-heading reveal reveal-delay-1">THE SILK<br/>OF VẠN<br/>PHÚC</h2>
            <p className="craft-body reveal reveal-delay-2">
              A village outside Hà Nội has been weaving for over a thousand years. The looms haven't changed. The hands have. We source exclusively from master weavers who still work by daylight.
            </p>
            <div className="craft-stat reveal reveal-delay-3">
              <div className="craft-stat-item"><p className="craft-stat-num">1200</p><p className="craft-stat-label">Years of craft</p></div>
              <div className="craft-stat-item"><p className="craft-stat-num">12</p><p className="craft-stat-label">Artisan families</p></div>
              <div className="craft-stat-item"><p className="craft-stat-num">100%</p><p className="craft-stat-label">Handwoven</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────── */}
      <section id="contact">
        <div className="newsletter-inner">
          <p className="newsletter-label reveal">Newsletter — Đăng Ký</p>
          <h2 className="newsletter-heading reveal reveal-delay-1">STAY<br/>CLOSE.</h2>
          <div className="newsletter-form reveal reveal-delay-2">
            <input
              className="newsletter-input"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
            />
            <button className="newsletter-btn" onClick={handleSubscribe}>
              Subscribe
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M1 6H17M12 1L17 6L12 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <p className="newsletter-note reveal reveal-delay-3">{subMsg}</p>
        </div>
      </section>

    </main>
  )
}
