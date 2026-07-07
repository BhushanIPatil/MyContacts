import { Link } from "react-router-dom";
import quotesData from "../data/quotes.json";

export function Quotes() {
  return (
    <section className="tips-section">
      <div className="section-inner" style={{ paddingTop: "48px" }}>
        <span
          className="section-tag reveal"
          style={{ color: "var(--saffron-light)" }}
        >
          {quotesData.meta.tag}
        </span>

        <h1 className="section-title reveal">
          {quotesData.meta.title}
        </h1>

        <p className="section-desc reveal">
          {quotesData.meta.description}
        </p>

        <div className="tips-grid">
          {quotesData.items.map((quote) => (
            <div
              className="tip-card reveal"
              key={quote.text}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "15px"
                }}
              >
                💬
              </div>

              <div
                style={{
                  color: "#fff",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  fontSize: "1rem"
                }}
              >
                "{quote.text}"
              </div>

              <div
                style={{
                  marginTop: "20px",
                  color: "#FFB347",
                  fontWeight: 700
                }}
              >
                — {quote.author}
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 40, textAlign: "center" }}>
          <Link to="/" className="btn-outline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </section>
  );
}