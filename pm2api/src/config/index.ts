import { IConfig } from '../interfaces/IConfig';
import * as nconf from 'nconf';
import * as path from 'path';

const config = new nconf.Provider({
  env: true,
  argv: true,
  store: {
    type: 'file',
    file: path.join(
      __dirname,
      `./config.${process.env.NODE_ENV || 'dev'}.json`,
    ),
  },
});

export default (branch?: string): IConfig => {
  return config.get(branch);
};
