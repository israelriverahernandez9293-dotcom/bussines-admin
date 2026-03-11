export function Card({ title, subtitle, children, className = '' }) {
  return (
    <article className={`card ${className}`.trim()}>
      {(title || subtitle) && (
        <header className="card-header">
          {title && <h3>{title}</h3>}
          {subtitle && <p>{subtitle}</p>}
        </header>
      )}
      {children}
    </article>
  );
}
