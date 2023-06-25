import { OpenAiController } from '../openAiController';
import { OpenAI } from 'openai';
import { IRequest } from '../../../interfaces/IRequest';

class GptController extends OpenAiController {
  public async getGptResponse(request: IRequest) {
    try {
      const model = this.gptModels[0];
      const params = this.getPayload(request);
      const options: OpenAI.Chat.ChatCompletionCreateParams = {
        messages: params.messages || [{ role: 'user', content: 'count to 3' }],
        model: params.model || model,
      };

      const chatCompletion =
        await this.openAiApi.chat.completions.create(options);

      return chatCompletion;
    } catch (error) {
      throw error;
    }
  }
}

export { GptController };
