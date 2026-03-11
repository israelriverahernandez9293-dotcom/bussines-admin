import { Sidebar } from '../components/navigation/Sidebar';
import { Topbar } from '../components/navigation/Topbar';

export function DashboardLayout({ title, children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Topbar title={title} />
        <section className="page-content">{children}</section>
      </main>
    </div>
  );
}
