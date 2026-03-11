import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';
import { StatGrid } from '../../components/common/StatGrid';

const stats = [
  { label: 'Total Inventario', value: '1,284', hint: '+2.5%' },
  { label: 'Pedidos Hoy', value: '48', hint: '+8%' },
  { label: 'Stock Crítico', value: '5', hint: 'requiere atención' },
  { label: 'Ingresos Estimados', value: '$3,420.50', hint: 'basado en pedidos activos' }
];

const products = [
  'Café Espresso Premium · 45 unidades',
  'Croissant de Mantequilla · 8 unidades',
  'Tarta de Arándanos · 12 unidades',
  'Jugo de Naranja Natural · 0 unidades',
  'Sándwich de Pavo · 24 unidades',
  'Té Matcha Orgánico · 15 unidades'
];

export function InventoryPage() {
  return (
    <DashboardLayout title="Inventario y Pedidos">
      <StatGrid stats={stats} />
      <Card title="Inventario de Productos" subtitle="Preparado para sincronizar con backend">
        <div className="product-grid">
          {products.map((product) => (
            <div key={product} className="product-item">{product}</div>
          ))}
        </div>
      </Card>
    </DashboardLayout>
  );
}
