import { Link } from 'react-router-dom'
import homeData from '../data/home.json'
import lawsData from '../data/laws.json'
import tipsData from '../data/tips.json'
import productsData from '../data/products.json'
import aboutData from '../data/about.json'
import dykData from '../data/didYouKnow.json'
import { AdSenseIns } from '../components/AdSenseIns'
import { LawCard } from '../components/LawCard'

export function Home() {
  const p = homeData.previews
  const lawsPreview = lawsData.items.slice(0, p.laws)
  const tipsPreview = tipsData.items.slice(0, p.tips)
  const productsPreview = productsData.items.slice(0, p.products)
  const aboutPreview = aboutData.cards.slice(0, p.aboutCards)
  const dykPreview = dykData.items.slice(0, p.didYouKnow)

  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div>
          <div className="hero-badge">
            <span className="dot" /> {homeData.hero.badge}
          </div>
          <h1 dangerouslySetInnerHTML={{ __html: homeData.hero.titleHtml }} />
          <p className="hero-sub">{homeData.hero.subtitle}</p>
          <div className="hero-btns">
            <Link to={homeData.hero.primaryCta.to} className="btn-primary">
              {homeData.hero.primaryCta.label}
            </Link>
            <Link to={homeData.hero.secondaryCta.to} className="btn-outline">
              {homeData.hero.secondaryCta.label}
            </Link>
          </div>
          <div className="hero-stats">
            {homeData.hero.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* <div className="banner-ad" style={{ paddingTop: '40px' }}>
        <div className="ad-slot" style={{ minHeight: '90px', maxWidth: '728px', margin: '0 auto' }}>
          <div className="ad-slot-label">Advertisement</div>
          <AdSenseIns style={{ display: 'block', width: '100%', minHeight: '90px' }} fullWidth />
        </div>
      </div> */}

      <section id="laws">
        <div className="section-inner">
          <div className="reveal">
            <span className="section-tag">{lawsData.meta.tag}</span>
            <h2 className="section-title">{lawsData.meta.title}</h2>
            <p className="section-desc" dangerouslySetInnerHTML={{ __html: lawsData.meta.descriptionHtml }} />
          </div>

          <div className="laws-grid">
            {lawsPreview.map((item) => (
              <LawCard key={item.title} item={item} reveal />
            ))}
          </div>

          <div className="section-explore-wrap reveal">
            <Link to="/laws" className="btn-primary">
              Explore more →
            </Link>
          </div>

          {/* <div style={{ marginTop: '48px' }}>
            <div className="ad-slot" style={{ maxWidth: '970px', margin: '0 auto', minHeight: '90px' }}>
              <div className="ad-slot-label">Advertisement</div>
              <AdSenseIns style={{ display: 'block', width: '100%', minHeight: '250px' }} />
            </div>
          </div> */}
        </div>
      </section>

      <div className="divider" />

      <section className="dyk-section">
        <div className="section-inner">
          <span className="section-tag reveal">{homeData.didYouKnowSection.tag}</span>
          <h2 className="section-title reveal">{homeData.didYouKnowSection.title}</h2>
          <div className="dyk-strip reveal">
            <div className="dyk-sidebar">Did You Know</div>
            <div className="dyk-items">
              {dykPreview.map((item) => (
                <div className="dyk-item" key={item.num}>
                  <div className="dyk-num">{item.num}</div>
                  <div className="dyk-text" dangerouslySetInnerHTML={{ __html: item.html }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tips" className="tips-section">
        <div className="section-inner">
          <span className="section-tag" style={{ color: 'var(--saffron-light)' }}>
            {tipsData.meta.tag}
          </span>
          <h2 className="section-title reveal">{tipsData.meta.title}</h2>
          <p className="section-desc reveal">{tipsData.meta.description}</p>

          <div className="tips-grid">
            {tipsPreview.map((item) => (
              <div className="tip-card reveal" key={item.title}>
                <div className="tip-icon">{item.icon}</div>
                <div className="tip-title">{item.title}</div>
                <div className="tip-text">{item.text}</div>
                <span className={`tip-badge ${item.badge}`}>{item.badge === 'do' ? '✓ DO THIS' : '✗ AVOID THIS'}</span>
              </div>
            ))}
          </div>

          <div className="section-explore-wrap reveal">
            <Link to="/tips" className="btn-primary">
              Explore more →
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="viral-section">
        <div className="section-inner">
          <span className="section-tag reveal">{aboutData.meta.tag}</span>
          <h2 className="section-title reveal">{aboutData.meta.title}</h2>
          <p className="section-desc reveal">{aboutData.meta.description}</p>
          <div className="viral-grid reveal">
            {aboutPreview.map((card) => (
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

          <div className="section-explore-wrap reveal">
            <Link to="/about" className="btn-primary">
              Explore more →
            </Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section id="quiz" className="quiz-section">
        <div className="section-inner">
          <h2 className="section-title reveal" style={{ color: 'white' }}>
            {homeData.quizTeaser.title}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }} className="reveal">
            {homeData.quizTeaser.description}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '28px', maxWidth: '560px', lineHeight: 1.6 }} className="reveal">
            {homeData.quizTeaser.body}
          </p>
          <div className="section-explore-wrap reveal">
            <Link to={homeData.quizTeaser.exploreTo} className="btn-primary">
              {homeData.quizTeaser.exploreLabel}
            </Link>
          </div>
        </div>
      </section>

      <section id="shop" className="products-section">
        <div className="section-inner">
          <span className="section-tag reveal">{productsData.meta.tag}</span>
          <h2 className="section-title reveal">{productsData.meta.title}</h2>
          <p className="section-desc reveal">{productsData.meta.description}</p>

          <div className="products-grid">
            {productsPreview.map((item) => (
              <div className="product-card reveal" key={item.name}>
                <div className={`product-img ${item.imgBg}`}>
                  {item.emoji}
                  {item.badge ? <span className="product-badge-new">{item.badge}</span> : null}
                </div>
                <div className="product-body">
                  <div className="product-category">{item.category}</div>
                  <div className="product-name">{item.name}</div>
                  <div className="product-desc">{item.description}</div>
                  <div className="product-footer">
                    <div className="product-price">
                      <span className="old">{item.oldPrice}</span> {item.price}
                    </div>
                    <a href={item.buyUrl} target="_blank" rel="noopener nofollow" className="btn-buy">
                      Buy Now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-explore-wrap reveal">
            <Link to="/shop" className="btn-primary">
              Explore more →
            </Link>
          </div>
        </div>
      </section>

      {/* <div className="banner-ad">
        <div className="ad-slot" style={{ maxWidth: '970px', margin: '0 auto', minHeight: '250px' }}>
          <div className="ad-slot-label">Advertisement</div>
          <AdSenseIns style={{ display: 'block', width: '100%', minHeight: '250px' }} />
        </div>
      </div> */}
    </>
  )
}
