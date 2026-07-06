import { useEffect, useState, useCallback } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import siteLogo from '../logo/CivicSense_logo.png'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaXTwitter
} from "react-icons/fa6";

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
          <span
            className="section-tag"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            🤝 Get Involved
          </span>

          <h2 className="section-title reveal">
            Be Part of the Civic Awareness Movement
          </h2>

          <p
            className="reveal"
            style={{
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '32px',
              fontSize: '1.05rem',
              maxWidth: '700px',
              marginInline: 'auto'
            }}
          >
            Share your knowledge, promote your organization, or get in touch with us.
            Every contribution helps build a more informed and responsible community.
          </p>

          <div
            className="reveal"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}
          >
            <Link to="/submit-your-article" className="btn-outline">
              📝 Submit an Article
            </Link>

            <Link to="/advertise" className="btn-outline">
              📢 Advertise
            </Link>

            <Link to="/contact" className="btn-outline">
              📩 Contact Us
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo footer-logo-link" onClick={closeMenu}>
              <img src={siteLogo} alt="CivicSense" className="nav-logo-img footer-logo-img" width="160" height="42" decoding="async" />
            </Link>
            <p className="footer-desc">
              The internet&apos;s most entertaining civic awareness platform. Learn practical civic habits, discover helpful tips, and be the change your community needs.
            </p>
            <div className="footer-social">
              {/* <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="X (Twitter)"
                aria-label="X"
              >
                <span
                  style={{
                    background: "#fff",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <FaXTwitter color="#000000" />
                </span>
              </a> */}

              <a
                href="https://www.instagram.com/civicsensebasic?igsh=MW94OWlua3dxN3Ftdg=="
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="Instagram"
                aria-label="Instagram"
              >
                <span
                  style={{
                    background: "#fff",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <FaInstagram color="#E4405F" />
                </span>
              </a>

              {/* <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="Facebook"
                aria-label="Facebook"
              >
                <span
                  style={{
                    background: "#fff",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <FaFacebookF color="#1877F2" />
                </span>
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="YouTube"
                aria-label="YouTube"
              >
                <span
                  style={{
                    background: "#fff",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <FaYoutube color="#FF0000" />
                </span>
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <span
                  style={{
                    background: "#fff",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <FaWhatsapp color="#25D366" />
                </span>
              </a> */}
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
                <Link to="/shop">Civic Shop</Link>
              </li>
            </ul>
          </div>
          {/* <div className="footer-col">
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
          </div> */}
          <div className="footer-col">
            <h4>Legal Info</h4>
            <ul>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-use">Terms of Use</a>
              </li>
              <li>
                <a href="/affiliate-disclosure">Affiliate Disclosure</a>
              </li>
              <li>
                <a href="/disclaimer">Disclaimer</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/submit-your-article">Write for Us</a>
              </li>
              <li>
                <a href="/advertise">Advertise</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <p>© 2026 CivicSense. Made with 🧡 for better communities.</p>
        </div>
        <div className="disclaimer">
          <strong>Disclaimer:</strong> CivicSense is an informational and awareness website focused on everyday civic habits and responsible living. The content provided is for general educational purposes only and should not be considered professional, legal, or official advice. While we aim to share helpful and accurate information, practices and guidelines may vary by location. Always use your own judgment and consult relevant authorities when necessary. Some links on this site may be affiliate links, which means we may earn a small commission at no additional cost to you. This does not affect our editorial independence.
        </div>
      </footer>
    </>
  )
}
