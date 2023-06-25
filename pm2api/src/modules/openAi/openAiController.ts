import { BaseController } from '../../interfaces/baseController';
import { Server } from '@hapi/hapi';
import { OpenAI } from 'openai';
import { GPTModelParams, IPayloadGPTSchemaParams } from './gpt/IPayloadGPT';
import { IRequest } from '../../interfaces/IRequest';
import { GptModel, gptModels, Role, roles } from './types';

class OpenAiController extends BaseController {
  protected openAiApi: OpenAI;
  protected gptModels: GptModel[] = gptModels;
  protected roles: Role[] = roles;

  constructor(server: Server) {
    super(server);
    this.openAiApi = this.server.app.openAiApi;
  }

  getModelsGPT(): string[] {
    return [...this.gptModels];
  }

  getRoles(): string[] {
    return [...this.roles];
  }

  getSchemaParams(): IPayloadGPTSchemaParams {
    return GPTModelParams;
  }

  getPayload(request: IRequest): any /*IPayloadGPTSchemaParams*/ {
    return /* <IPayloadGPTSchemaParams>*/ {
      ...request?.query,
      ...request?.payload,
    };
  }
}

export { OpenAiController };
