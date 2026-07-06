import { Link } from 'react-router-dom'
import disclaimerData from '../data/disclaimer.json'

export function DisclaimerPage() {
  return (
    <section className="viral-section">
      <div className="section-inner" style={{ paddingTop: '48px' }}>
        <h1 className="section-title reveal">{disclaimerData.meta.title}</h1>

        <p className="section-desc reveal">
          {disclaimerData.meta.description}
        </p>

        <div className="viral-grid reveal">
          {disclaimerData.cards.map((card) => (
            <div className={`viral-card ${card.variant}`} key={card.title}>
              <div className="viral-icon">{card.icon}</div>
              <div className="viral-title">{card.title}</div>
              <div className="viral-text">{card.text}</div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: '32px', textAlign: 'center' }} className="reveal">
          <Link to="/" className="btn-outline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </section>
  )
}