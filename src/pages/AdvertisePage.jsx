import { Link } from 'react-router-dom'

export function AdvertisePage() {
  return (
    <section className="viral-section">
      <div className="section-inner" style={{ paddingTop: '48px' }}>
        <h1 className="section-title reveal">
          Advertise With Us
        </h1>

        <p className="section-desc reveal">
          Reach an audience interested in civic awareness, community development, and responsible living. If you'd like to advertise your business, product, or service on Civic Awareness, please complete the form below.
        </p>

        <div className="google-form reveal">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_QXu5AmrmMgzry1BQV6vi3_TXUlJYciGv38AWLUtHr93BDg/viewform?embedded=true" width="640" height="1144" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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