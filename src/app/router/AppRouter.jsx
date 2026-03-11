import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../../pages/dashboard/DashboardPage';
import { InventoryPage } from '../../pages/inventory/InventoryPage';
import { ChatPage } from '../../pages/chat/ChatPage';
import { AIOperationsPage } from '../../pages/ai-operations/AIOperationsPage';
import { appRoutes } from '../../config/routes';

export function AppRouter() {
  return (
    <Routes>
      <Route path={appRoutes.dashboard} element={<DashboardPage />} />
      <Route path={appRoutes.inventory} element={<InventoryPage />} />
      <Route path={appRoutes.chat} element={<ChatPage />} />
      <Route path={appRoutes.aiOperations} element={<AIOperationsPage />} />
      <Route path="*" element={<Navigate to={appRoutes.dashboard} replace />} />
    </Routes>
  );
}
