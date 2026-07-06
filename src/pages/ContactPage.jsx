import { Link } from 'react-router-dom'

export function ContactPage() {
  return (
    <section className="viral-section">
      <div className="section-inner" style={{ paddingTop: '48px' }}>
        <h1 className="section-title reveal">
          Contact Us
        </h1>

        <p className="section-desc reveal">
          Have a question, suggestion, or found an issue on our website? We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.
        </p>

        <div className="google-form reveal">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQQSsPEVVdzqnsi6Nwt1E8rs29QTsVNkbge-JopxhfKk2T6Q/viewform?embedded=true" width="640" height="855" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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