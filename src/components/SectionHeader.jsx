export default function SectionHeader({ id, label, children }) {
  return (
    <div className="wrap section-header">
      <div className="meta">
        <div className="id">{id}</div>
        <div className="desc">{label}</div>
      </div>
      <h2>{children}</h2>
    </div>
  );
}
