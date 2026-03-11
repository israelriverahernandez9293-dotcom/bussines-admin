import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';
import { StatGrid } from '../../components/common/StatGrid';

const stats = [
  { label: 'Conversaciones Hoy', value: '248', hint: '+12%' },
  { label: 'Usuarios Activos', value: '1,024', hint: '+5%' },
  { label: 'Tiempo de Respuesta', value: '4m 20s', hint: '-30s' },
  { label: 'Tasa de Resolución', value: '94.2%', hint: '+2.1%' }
];

const inbox = [
  'Elena Rodríguez · pedido #4592',
  'Marcos T. · confirmación de inventario',
  'Lucía Fernández · validación IA falló',
  'Roberto Gómez · soporte #120'
];

export function DashboardPage() {
  return (
    <DashboardLayout title="Conversaciones Dashboard">
      <StatGrid stats={stats} />
      <div className="grid-2">
        <Card title="Inbox de Mensajes" subtitle="Gestiona interacciones recientes">
          {inbox.map((item) => (
            <div key={item} className="row-item">{item}</div>
          ))}
        </Card>
        <Card title="Atención Urgente" subtitle="Conversaciones sin respuesta">
          <p>3 conversaciones superan el SLA y requieren acción inmediata.</p>
          <button>Ver todas las alertas</button>
        </Card>
      </div>
      <Card title="Actividad en Tiempo Real" subtitle="Volumen de mensajes por hora" className="chart-placeholder">
        <div className="chart-box">08:00 ─── 20:00</div>
      </Card>
    </DashboardLayout>
  );
}
