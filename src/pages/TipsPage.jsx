import { Link } from 'react-router-dom'
import tipsData from '../data/tips.json'

export function TipsPage() {
  return (
    <section className="tips-section">
      <div className="section-inner" style={{ paddingTop: '48px' }}>
        <h1 className="section-title reveal">{tipsData.meta.title}</h1>
        <p className="section-desc reveal">{tipsData.meta.description}</p>

        <div className="tips-grid">
          {tipsData.items.map((item) => (
            <div className="tip-card reveal" key={item.title}>
              <div className="tip-icon">{item.icon}</div>
              <div className="tip-title">{item.title}</div>
              <div className="tip-text">{item.text}</div>
              <span className={`tip-badge ${item.badge}`}>{item.badge === 'do' ? '✓ DO THIS' : '✗ AVOID THIS'}</span>
            </div>
          ))}
        </div>

        <p style={{ marginTop: '32px', textAlign: 'center' }} className="reveal">
          <Link to="/" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
            ← Back to home
          </Link>
        </p>
      </div>
    </section>
  )
}
