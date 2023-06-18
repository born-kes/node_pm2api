import { ResponseToolkit } from '@hapi/hapi';
import { BaseController } from '../../interfaces/baseController';
import { IRequest } from '../../interfaces/IRequest';

class DiagnosticsController extends BaseController {
  public async check(_: IRequest, h: ResponseToolkit) {
    try {
      return h.response({ success: true }) || { success: true };
    } catch (error) {
      throw error;
    }
  }
}

export { DiagnosticsController };
