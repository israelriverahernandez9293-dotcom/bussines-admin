import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './styles.css';

const stats = [
  ['Conversaciones Hoy', '248'],
  ['Usuarios Activos', '1,024'],
  ['Tiempo de Respuesta', '4m 20s'],
  ['Tasa de Resolución', '94.2%']
];

function Layout({ title, children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="logo">ConversoAI</div>
        <nav>
          <NavLink to="/" end>Conversations</NavLink>
          <NavLink to="/inventory">Inventory & Orders</NavLink>
          <NavLink to="/chat">AI Operations</NavLink>
          <NavLink to="/commands">Generador IA</NavLink>
        </nav>
      </aside>
      <main>
        <header className="topbar">
          <h1>{title}</h1>
          <input placeholder="Search everything..." />
        </header>
        <section className="page-content">{children}</section>
      </main>
    </div>
  );
}

function Dashboard() {
  return (
    <Layout title="Conversaciones Dashboard">
      <div className="stats-grid">{stats.map(([k, v]) => <article key={k}><small>{k}</small><strong>{v}</strong></article>)}</div>
      <div className="two-col">
        <section className="card">
          <h2>Inbox de Mensajes</h2>
          {['Elena Rodríguez','Marcos T.','Lucía Fernández','Roberto Gómez'].map((n)=> <div key={n} className="row">{n}</div>)}
        </section>
        <section className="card">
          <h2>Atención Urgente</h2>
          <p>Conversaciones sin respuesta que superan el SLA.</p>
          <button>Ver todas las alertas</button>
        </section>
      </div>
      <section className="card chart">
        <h2>Actividad en Tiempo Real</h2>
      </section>
    </Layout>
  );
}

function Inventory() {
  return (
    <Layout title="Inventario y Pedidos">
      <div className="stats-grid">{['Total Inventario 1,284','Pedidos Hoy 48','Stock Crítico 5','Ingresos $3,420.50'].map((s)=> <article key={s}><strong>{s}</strong></article>)}</div>
      <section className="products">
        {['Café Espresso Premium','$4.50','Croissant de Mantequilla','$2.75','Tarta de Arándanos','$5.20','Jugo de Naranja','$3.50','Sándwich de Pavo','$8.90','Té Matcha Orgánico','$4.80'].map((p,i)=><div className="product" key={i}>{p}</div>)}
      </section>
    </Layout>
  );
}

function Chat() {
  return (
    <Layout title="Chat con Cliente #1294">
      <div className="three-col">
        <section className="card"><h3>Recientes</h3>{['Juan Pérez','María García','Carlos Ruíz'].map(n=><div className="row" key={n}>{n}</div>)}</section>
        <section className="card"><h3>Conversación</h3><div className="bubble left">Hola, me gustaría saber si tienen stock de la Laptop Pro X15.</div><div className="bubble right">Sí, está disponible.</div></section>
        <section className="card"><h3>Herramientas IA</h3><button>Extraer Entidades</button><button>Resumir Selección</button><button className="primary">Generar Comando</button></section>
      </div>
    </Layout>
  );
}

function Commands() {
  return (
    <Layout title="Generador de Comandos IA">
      <div className="three-col">
        <section className="card"><h3>Interpretación de Fuente</h3><p>Entidades extraídas del historial seleccionado.</p></section>
        <section className="card dark"><h3>Comando de Sistema</h3><pre>{`{
  "action": "CREATE_ORDER",
  "items": [{"sku": "PIZ-PEP-LRG", "qty": 2}],
  "total": 45.50
}`}</pre></section>
        <section className="card"><h3>Configuración de Ejecución</h3><p>Umbral de confianza: 85%</p><ul><li>Ignorar alertas de stock bajo</li><li>Notificar vía SMS/Email</li><li>Archivar chat tras éxito</li></ul></section>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/commands" element={<Commands />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
