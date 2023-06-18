import { Server } from '@hapi/hapi';
import { DiagnosticsRoutes } from './modules/diagnostics/diagnosticsRoutes';

export default (server: Server) => {
  DiagnosticsRoutes(server);
};
