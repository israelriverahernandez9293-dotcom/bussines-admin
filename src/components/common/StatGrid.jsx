export function StatGrid({ stats }) {
  return (
    <section className="stats-grid">
      {stats.map((stat) => (
        <article key={stat.label} className="stat-item">
          <small>{stat.label}</small>
          <strong>{stat.value}</strong>
          {stat.hint && <span>{stat.hint}</span>}
        </article>
      ))}
    </section>
  );
}
