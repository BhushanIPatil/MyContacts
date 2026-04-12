export function LawCard({ item, reveal }) {
  return (
    <div className={`law-card ${item.variant}${reveal ? ' reveal' : ''}`}>
      <span className="law-emoji">{item.emoji}</span>
      <span className={`law-tag${item.tagGreen ? ' g' : ''}`}>{item.tag}</span>
      <div className="law-title">{item.title}</div>
      <div className="law-desc">{item.description}</div>
      <div className="law-funny">{item.funny}</div>
      <div className="law-footer">
        <span className="law-source">{item.source}</span>
      </div>
    </div>
  )
}
