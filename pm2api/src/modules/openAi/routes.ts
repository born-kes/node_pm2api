import { Server } from '@hapi/hapi';
import { ModelListRoutes } from './models/modelListRoutes';
import { GptRoutes } from './gpt/gptRoutes';

export const openAiRoutes = (server: Server) => {
  ModelListRoutes(server);
  GptRoutes(server);
};
