import { Link } from 'react-router-dom'
import aboutData from '../data/about.json'

export function AboutPage() {
  return (
    <section className="viral-section">
      <div className="section-inner" style={{ paddingTop: '48px' }}>
        <h1 className="section-title reveal">{aboutData.meta.title}</h1>
        <p className="section-desc reveal">{aboutData.meta.description}</p>
        <div className="viral-grid reveal">
          {aboutData.cards.map((card) => (
            <div className={`viral-card ${card.variant}`} key={card.title}>
              <div className="viral-icon">{card.icon}</div>
              <div className="viral-title">{card.title}</div>
              <div className="viral-text">{card.text}</div>
              <a href={card.shareUrl} target="_blank" rel="noreferrer" className="viral-share-btn">
                {card.shareLabel}
              </a>
            </div>
          ))}
        </div>

        <p style={{ marginTop: '32px', textAlign: 'center' }} className="reveal">
          <Link to="/" className="btn-outline">
            ← Back to home
          </Link>
        </p>
      </div>
    </section>
  )
}
