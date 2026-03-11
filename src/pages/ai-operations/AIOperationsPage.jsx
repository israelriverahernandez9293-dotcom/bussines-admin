import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';

const generatedCommand = `{
  "action": "CREATE_ORDER",
  "payload": {
    "customer": { "id": "cust_99210" },
    "items": [{ "sku": "PIZ-PEP-LRG", "qty": 2 }],
    "total": 45.50
  }
}`;

export function AIOperationsPage() {
  return (
    <DashboardLayout title="Generador de Comandos IA">
      <div className="grid-3">
        <Card title="Interpretación de Fuente" subtitle="Entidades extraídas del chat seleccionado">
          <ul>
            <li>Cliente: Marcos Rodríguez</li>
            <li>Producto: Pizza Pepperoni grande x2</li>
            <li>Dirección: Calle Falsa 123</li>
          </ul>
        </Card>

        <Card title="Comando de Sistema" className="dark-card">
          <pre>{generatedCommand}</pre>
        </Card>

        <Card title="Configuración de Ejecución">
          <p>Umbral de confianza: 85%</p>
          <label><input type="checkbox" defaultChecked /> Ignorar alertas de stock bajo</label>
          <label><input type="checkbox" /> Notificar cliente vía SMS/Email</label>
          <label><input type="checkbox" defaultChecked /> Archivar chat tras éxito</label>
          <button className="primary">Ejecutar comando</button>
        </Card>
      </div>
    </DashboardLayout>
  );
}
