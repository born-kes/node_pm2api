import { Server } from '@hapi/hapi';

abstract class BaseService {
  protected server: Server;

  constructor(server: Server) {
    this.server = server;
  }
}

export { BaseService };
