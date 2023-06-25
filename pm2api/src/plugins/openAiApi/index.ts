import { Server } from '@hapi/hapi';
import { OpenAI } from 'openai';
import configResolver from '../../config';

export const openAiApi = async (server: Server) => {
  const {
    application: {
      ai: { openAI },
    },
  } = configResolver();

  if (
    openAI.organizationKey.indexOf('@@') !== -1 ||
    openAI.apiKey.indexOf('@@') !== -1 ||
    openAI.apiKey.length <= 3
  ) {
    // config.json którego używasz musi mieć podane klucze OPEN AI
    console.error('Config invalid openAIKey');
  }

  server.app.openAiApi = new OpenAI(openAI);
};
