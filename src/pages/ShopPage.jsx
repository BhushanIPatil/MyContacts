import { Link } from 'react-router-dom'
import productsData from '../data/products.json'

export function ShopPage() {
  return (
    <section className="products-section">
      <div className="section-inner" style={{ paddingTop: '48px' }}>
        <h1 className="section-title reveal">{productsData.meta.title}</h1>
        <p className="section-desc reveal">{productsData.meta.description}</p>

        <div className="products-grid">
          {productsData.items.map((item) => (
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

        <p className="affiliate-note" dangerouslySetInnerHTML={{ __html: productsData.affiliateNoteHtml }} />

        <p style={{ marginTop: '24px', textAlign: 'center' }} className="reveal">
          <Link to="/" className="btn-outline">
            ← Back to home
          </Link>
        </p>
      </div>
    </section>
  )
}
