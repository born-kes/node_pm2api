import { Server } from '@hapi/hapi';
import { ModelListController } from './modelListController';

const ModelListRoutes = (server: Server) => {
  const modelListController = new ModelListController(server);

  server.bind(modelListController);
  server.route({
    method: 'GET',
    path: '/openAi/models',
    options: {
      handler: modelListController.getModelList,
      validate: {},
      tags: ['api', 'openAi'],
      notes: 'Zwraca listę dostępnych modeli',
      description: 'Endpoint dedicated model davinci',
      response: {
        status: {
          200: undefined,
          400: undefined,
          500: undefined,
        },
      },
    },
  });
};
export { ModelListRoutes };
