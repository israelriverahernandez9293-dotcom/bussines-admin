import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';

const defaultConversationId = '1294';

const recentChats = ['Juan Pérez', 'María García', 'Carlos Ruíz'];

export function ChatPage() {
  const { conversationId } = useParams();
  const activeConversationId = useMemo(() => conversationId ?? defaultConversationId, [conversationId]);

  return (
    <DashboardLayout title={`Chat con Cliente #${activeConversationId}`}>
      <div className="grid-3">
        <Card title="Recientes">
          {recentChats.map((name) => (
            <div key={name} className="row-item">{name}</div>
          ))}
        </Card>
        <Card title="Conversación Activa">
          <div className="bubble left">Hola, me gustaría saber si tienen stock de la Laptop Pro X15.</div>
          <div className="bubble right">Sí, tenemos disponibilidad y envío a CDMX.</div>
          <div className="bubble left">Perfecto, ¿pueden incluir factura?</div>
        </Card>
        <Card title="Herramientas IA" subtitle="Flujo preparado para backend de IA">
          <button>Extraer Entidades</button>
          <button>Resumir Selección</button>
          <button className="primary">Generar Comando</button>
        </Card>
      </div>
    </DashboardLayout>
  );
}
