import { OpenAiController } from '../openAiController';

class ModelListController extends OpenAiController {
  public async getModelList() {
    try {
      const { data } = await this.openAiApi.models.list();
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export { ModelListController };
