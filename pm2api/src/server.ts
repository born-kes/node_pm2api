import * as Hapi from '@hapi/hapi';
import configResolver from './config';
import routes from './routes';

import { IConfig } from './interfaces/IConfig';
import { swagger } from './plugins/swagger';
import { openAiApi } from './plugins/openAiApi';
import { OpenAI } from 'openai';

declare module '@hapi/hapi' {
  interface ServerApplicationState {
    config: IConfig;
    openAiApi: OpenAI;
  }
}
const { application }: IConfig = configResolver();

const Server = async (): Promise<Hapi.Server> => {
  const server = new Hapi.Server({
    port: process.env.PORT || application.port,
    host: process.env.HOST || application.host,
    routes: {
      validate: {
        failAction: (request, h, err) => {
          throw err;
        },
      },
      cors: true,
    },
  });
  await swagger(server);
  await openAiApi(server);
  routes(server);

  return server;
};

export default Server;
