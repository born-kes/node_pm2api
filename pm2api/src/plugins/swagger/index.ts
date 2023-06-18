import { Server } from '@hapi/hapi';
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import configResolver from '../../config';

const Config = configResolver();
const { host, port } = Config.application;

const swaggerOptions = {
  schemes: process.env.NODE_ENV !== 'production' ? ['http'] : ['https'],
  host: `${host}:${port}`,
  expanded: 'none',
  info: {
    title: 'node + pm2 API Documentation',
    version: '1.0.0',
  },
};

export const swagger = async (server: Server) => {
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);
};
