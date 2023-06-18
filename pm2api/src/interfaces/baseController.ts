import { Server } from '@hapi/hapi';

abstract class BaseController {
  protected server: Server;

  constructor(server: Server) {
    this.server = server;
  }
}

export { BaseController };
