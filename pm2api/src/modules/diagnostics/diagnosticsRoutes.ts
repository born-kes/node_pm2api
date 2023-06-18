import { Server } from '@hapi/hapi';
import { DiagnosticsController } from './diagnosticsController';

export const DiagnosticsRoutes = (server: Server) => {
  const diagnosticsController = new DiagnosticsController(server);

  server.bind(diagnosticsController);
  server.route({
    method: 'GET',
    path: '/diagnostics/check',
    options: {
      handler: diagnosticsController.check,
      auth: false,
      tags: ['api', 'diagnostics'],
      description: 'Check diagnostics.',
      notes: 'Zwraca status czy serwer działa poprawnie i odpowiada.',
    },
  });
};
