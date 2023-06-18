import { Request } from '@hapi/hapi';

export interface IRequest extends Request {
  query: any;
  payload: any;
}
