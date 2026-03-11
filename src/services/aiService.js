import { httpClient } from './api/httpClient';

export const aiService = {
  async extractEntities(payload) {
    return httpClient.post('/ai/extract-entities', payload);
  },
  async createCommand(payload) {
    return httpClient.post('/ai/create-command', payload);
  }
};
