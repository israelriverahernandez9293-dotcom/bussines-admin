export function Topbar({ title }) {
  return (
    <header className="topbar">
      <h1>{title}</h1>
      <div className="topbar-actions">
        <input type="search" placeholder="Search everything..." aria-label="search" />
      </div>
    </header>
  );
}
