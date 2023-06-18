import ServerInstance from './server';

const listen = async () => {
  try {
    const server = await ServerInstance();
    await server.start();

    console.log('Server running at:', server.info.uri + '/documentation');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

listen();
