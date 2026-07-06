import { Link } from 'react-router-dom'
import privacyData from '../data/privacyPolicy.json'

export function PrivacyPolicyPage() {
  return (
    <section className="viral-section">
      <div className="section-inner" style={{ paddingTop: '48px' }}>
        <h1 className="section-title reveal">{privacyData.meta.title}</h1>

        <p className="section-desc reveal">
          {privacyData.meta.description}
        </p>

        <div className="viral-grid reveal">
          {privacyData.cards.map((card) => (
            <div className={`viral-card ${card.variant}`} key={card.title}>
              <div className="viral-icon">{card.icon}</div>
              <div className="viral-title">{card.title}</div>
              <div className="viral-text">{card.text}</div>
            </div>
          ))}
        </div>

        <p
          style={{ marginTop: '32px', textAlign: 'center' }}
          className="reveal"
        >
          <Link to="/" className="btn-outline">
            ← Back to home
          </Link>
        </p>
      </div>
    </section>
  )
}