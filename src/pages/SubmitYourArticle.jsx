import { Link } from "react-router-dom";

export function SubmitYourArticle() {
  return (
    <section className="viral-section">
      <div
        className="section-inner"
        style={{ paddingTop: "48px", maxWidth: "900px" }}
      >
        <h1 className="section-title reveal">
          Submit Your Article
        </h1>

        <p className="section-desc reveal">
          We'd love to hear your feedback, suggestions, or questions.
          Please fill out the form below.
        </p>

        <div className="google-form reveal">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfR5mKA80kW767U9XMwvfzTDQjfX_QDZFoVwgxitdWvssv-xg/viewform?embedded=true" width="640" height="1291" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>

        <p style={{ marginTop: "32px", textAlign: "center" }}>
          <Link to="/" className="btn-outline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </section>
  );
}