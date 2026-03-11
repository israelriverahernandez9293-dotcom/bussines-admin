import { httpClient } from './api/httpClient';

export const conversationsService = {
  async listInbox() {
    return httpClient.get('/conversations');
  },
  async getConversationDetail(conversationId) {
    return httpClient.get(`/conversations/${conversationId}`);
  }
};
