import { useEffect, useState, useCallback } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import siteLogo from '../logo/CivicSense_logo.png'

const PAGE_TITLES = {
  '/': 'Civic Awareness & Smart Living Guide',
  '/laws': 'Civic Awareness',
  '/tips': 'Civic Tips',
  '/quiz': 'Quiz',
  '/shop': 'Shop',
  '/about': 'About',
}

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [nlEmail, setNlEmail] = useState('')
  const [nlMsg, setNlMsg] = useState({ text: '', color: '' })
  const location = useLocation()

  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] ?? PAGE_TITLES['/']
  }, [location.pathname])

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    reveals.forEach((r) => observer.observe(r))
    return () => observer.disconnect()
  }, [location.pathname])

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const subscribe = useCallback(() => {
    if (!nlEmail || !nlEmail.includes('@')) {
      setNlMsg({ text: '⚠️ Please enter a valid email.', color: 'rgba(255,200,100,0.9)' })
      return
    }
    setNlMsg({ text: "🎉 You're subscribed! Welcome to the Civic Movement.", color: 'white' })
    setNlEmail('')
  }, [nlEmail])

  return (
    <>
      <nav>
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={siteLogo} alt="CivicSense" className="nav-logo-img" width="180" height="48" decoding="async" />
          Civic<span>Sense</span>
        </Link>
        <ul className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
          <li>
            <NavLink to="/laws" onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active' : ''}>
              Civic Awareness
            </NavLink>
          </li>
          <li>
            <NavLink to="/tips" onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active' : ''}>
              Civic Tips
            </NavLink>
          </li>
          <li>
            <NavLink to="/quiz" onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active' : ''}>
              Quiz
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active' : ''}>
              Shop
              </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
        </ul>
        <NavLink
          to="/quiz"
          onClick={closeMenu}
          className={({ isActive }) => `nav-cta ${isActive ? 'active' : ''}`}
        >
          Take the Quiz
        </NavLink>
        <div
          className="hamburger"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        >
          <span />
          <span />
          <span />
        </div>
      </nav>

      <Outlet />

      <section className="newsletter-section">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <span className="section-tag" style={{ color: 'rgba(255,255,255,0.7)' }}>
            📬 Stay Updated
          </span>
          <h2 className="section-title reveal">Get Weekly Civic Facts in Your Inbox</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', fontSize: '1.05rem' }} className="reveal">
            New laws, funny rules, civic tips and exclusive deals — delivered free every week.
          </p>
          <div className="newsletter-form reveal">
            <input
              className="newsletter-input"
              type="email"
              placeholder="your@email.com"
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
            />
            <button type="button" className="btn-subscribe" onClick={subscribe}>
              Subscribe Free 🚀
            </button>
          </div>
          <p className="newsletter-note reveal">No spam. Unsubscribe anytime. Join 12,000+ civic-minded Indians.</p>
          <div style={{ marginTop: '12px', fontWeight: 700, fontSize: '1rem', color: nlMsg.color }}>{nlMsg.text}</div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo footer-logo-link" onClick={closeMenu}>
              <img src={siteLogo} alt="CivicSense" className="nav-logo-img footer-logo-img" width="160" height="42" decoding="async" />
            </Link>
            <p className="footer-desc">India&apos;s most entertaining civic awareness platform. Know your laws, own your streets, and be the change this country needs.</p>
            <div className="footer-social">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="social-btn" title="Twitter">
                𝕏
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="social-btn" title="Instagram">
                📸
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="social-btn" title="Facebook">
                f
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="social-btn" title="YouTube">
                ▶
              </a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="social-btn" title="WhatsApp">
                💬
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link to="/laws">Civic Awareness</Link>
              </li>
              <li>
                <Link to="/tips">Civic Tips</Link>
              </li>
              <li>
                <Link to="/quiz">Quiz</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/shop">Civic Shop</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal Info</h4>
            <ul>
              <li>
                <Link to="/laws">RTI Guide</Link>
              </li>
              <li>
                <Link to="/laws">Traffic Laws</Link>
              </li>
              <li>
                <Link to="/laws">Environmental Laws</Link>
              </li>
              <li>
                <Link to="/laws">Consumer Rights</Link>
              </li>
              <li>
                <Link to="/laws">Noise Rules</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Write for Us</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
              <li>
                <a href="mailto:hello@civicsense.com">hello@civicsense.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 CivicSense. Made with 🧡 for Bharat.</p>
          <div className="legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Affiliate Disclosure</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
        <div className="disclaimer">
          <strong>Disclaimer:</strong> CivicSense is an informational and awareness website focused on everyday civic habits and responsible living. The content provided is for general educational purposes only and should not be considered professional, legal, or official advice. While we aim to share helpful and accurate information, practices and guidelines may vary by location. Always use your own judgment and consult relevant authorities when necessary. Some links on this site may be affiliate links, which means we may earn a small commission at no additional cost to you. This does not affect our editorial independence.
        </div>
      </footer>
    </>
  )
}
