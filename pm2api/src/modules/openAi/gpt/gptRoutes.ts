import Joi from 'joi';
import { Server } from '@hapi/hapi';
import { GptController } from './gptController';

export const GptRoutes = (server: Server) => {
  const gptController = new GptController(server);
  const schemaParams = gptController.getSchemaParams();

  server.bind(gptController);
  server.route({
    method: 'POST',
    path: '/openAi/gpt',
    options: {
      handler: gptController.getGptResponse,
      validate: {
        query: Joi.object(schemaParams),
        payload: Joi.object({
          messages: Joi.array()
            .items(
              Joi.object({
                role: Joi.string()
                  .valid(...gptController.getRoles())
                  .required(),
                content: Joi.string().required(),
              }),
            )
            .required(),
        }),
      },
      tags: ['api', 'openAi', 'gpt'],
      description: 'GPT API',
      notes: 'End-point for GPT-3 API',
    },
  });
};
