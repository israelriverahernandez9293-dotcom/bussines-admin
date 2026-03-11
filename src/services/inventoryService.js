import { httpClient } from './api/httpClient';

export const inventoryService = {
  async listProducts() {
    return httpClient.get('/inventory/products');
  },
  async listOrders() {
    return httpClient.get('/orders');
  }
};
