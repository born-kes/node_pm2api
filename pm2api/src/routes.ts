import { Server } from '@hapi/hapi';
import { DiagnosticsRoutes } from './modules/diagnostics/diagnosticsRoutes';
import { openAiRoutes } from './modules/openAi/routes';

export default (server: Server) => {
  DiagnosticsRoutes(server);
  openAiRoutes(server);
};
