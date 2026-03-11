import { NavLink } from 'react-router-dom';
import { appRoutes } from '../../config/routes';

const links = [
  { to: appRoutes.dashboard, label: 'Conversations', end: true },
  { to: appRoutes.inventory, label: 'Inventory & Orders' },
  { to: appRoutes.chat, label: 'AI Chat' },
  { to: appRoutes.aiOperations, label: 'AI Operations' }
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">ConversoAI</div>
      <nav className="sidebar-nav">
        {links.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} className="sidebar-link">
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
