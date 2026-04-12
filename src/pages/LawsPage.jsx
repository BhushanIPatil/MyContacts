import { Link } from 'react-router-dom'
import lawsData from '../data/laws.json'
import { LawCard } from '../components/LawCard'
import { AdSenseIns } from '../components/AdSenseIns'

export function LawsPage() {
  return (
    <section>
      <div className="section-inner" style={{ paddingTop: '48px' }}>
        <div className="reveal">
          <span className="section-tag">{lawsData.meta.tag}</span>
          <h1 className="section-title">{lawsData.meta.title}</h1>
          <p className="section-desc" dangerouslySetInnerHTML={{ __html: lawsData.meta.descriptionHtml }} />
        </div>

        <div className="laws-grid">
          {lawsData.items.map((item) => (
            <LawCard key={item.title} item={item} reveal />
          ))}
        </div>

        <div style={{ marginTop: '48px' }}>
          <div className="ad-slot" style={{ maxWidth: '970px', margin: '0 auto', minHeight: '90px' }}>
            <div className="ad-slot-label">Advertisement</div>
            <AdSenseIns style={{ display: 'block', width: '100%', minHeight: '250px' }} />
          </div>
        </div>

        <p style={{ marginTop: '24px', textAlign: 'center' }} className="reveal">
          <Link to="/" className="btn-outline">
            ← Back to home
          </Link>
        </p>
      </div>
    </section>
  )
}
