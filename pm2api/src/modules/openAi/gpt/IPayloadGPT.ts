import Joi from 'joi';
import { OpenAI } from 'openai';
import { GptModel, gptModels } from '../types';

export interface IPayloadGPT {
  model?: 'gpt-3.5-turbo' | string;
  prompt?: string;
  systemRole?: string;
  messages?: OpenAI.Chat.ChatCompletionCreateParams['messages'];
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
  n?: number;
  stop?: string[];
}

export interface IPayloadGPTSchemaParams {
  model?: Joi.StringSchema<string | GptModel>;
  maxTokens?: Joi.NumberSchema<number>;
  temperature?: Joi.NumberSchema<number>;
  topP?: Joi.NumberSchema<number>;
  presencePenalty?: Joi.NumberSchema<number>;
  frequencyPenalty?: Joi.NumberSchema<number>;
}

interface MiniMaxDefaultNumber {
  min: number;
  max: number;
  default: number;
}

export interface IParamsConfig {
  maxTokens: MiniMaxDefaultNumber;
  temperature: MiniMaxDefaultNumber;
  topP: MiniMaxDefaultNumber;
  frequencyPenalty: MiniMaxDefaultNumber;
  presencePenalty: MiniMaxDefaultNumber;
}

const config: IParamsConfig = {
  maxTokens: { min: 1, max: 2048, default: 2048 },
  temperature: { min: 0.0, max: 1.0, default: 0.7 },
  topP: { min: 0.0, max: 1.0, default: 1.0 },
  frequencyPenalty: { min: 0.0, max: 1.0, default: 0 },
  presencePenalty: { min: 0.0, max: 1.0, default: 0 },
};

export const GPTModelParams: IPayloadGPTSchemaParams = {
  model: Joi.string()
    .valid(...gptModels)
    .required()
    .description('Prompt for text generation'),
  maxTokens: Joi.number()
    .integer()
    .min(config.maxTokens.min)
    .max(config.maxTokens.max)
    .default(config.maxTokens.default)
    .description('The maximum number of tokens to generate in the response'),
  temperature: Joi.number()
    .optional()
    .min(config.temperature.min)
    .max(config.temperature.max)
    .default(config.temperature.default)
    .description(
      'Controls the creativity of the generated response. Lower values are more predictable.',
    ),
  topP: Joi.number()
    .optional()
    .min(config.topP.min)
    .max(config.topP.max)
    .default(config.topP.default)
    .description(
      'Controls diversity of the generated response. Lower values generate more common sequences.',
    ),
  frequencyPenalty: Joi.number()
    .min(config.frequencyPenalty.min)
    .max(config.frequencyPenalty.max)
    .default(config.frequencyPenalty.default)
    .description(
      'Applies penalty to already generated tokens. Helps to avoid repetition.',
    ),
  presencePenalty: Joi.number()
    .min(config.presencePenalty.min)
    .max(config.presencePenalty.max)
    .default(config.presencePenalty.default)
    .description(
      'Applies penalty to tokens that are already present in the prompt. Helps to keep coherence with the prompt.',
    ),
};

interface IChoicesSchema {
  text: string | Joi.StringSchema;
  index: number | Joi.NumberSchema;
  logprobs: any[] | Joi.ArraySchema | null;
  finish_reason: string | Joi.StringSchema;
}

export interface IPayloadGPTSchemaResponse {
  id: Joi.StringSchema<string> | string;
  object: Joi.StringSchema<string> | string;
  created: Joi.NumberSchema<number> | number;
  model: Joi.StringSchema<string> | string;
  choices: Joi.ArraySchema<object> | [IChoicesSchema];
  // {
  //   text: Joi.StringSchema<string> | string;
  //   index: Joi.NumberSchema<number> | number;
  //   logprobs: Joi.ArraySchema | Joi.NullableType<any> | null;
  //   finish_reason: Joi.StringSchema<string> | string;
  // }
  usage: {
    prompt_tokens: Joi.NumberSchema<number> | number;
    completion_tokens: Joi.NumberSchema<number> | number;
    total_tokens: Joi.NumberSchema<number> | number;
  };
}

export const IPayloadGPTSchemaResponse: IPayloadGPTSchemaResponse = {
  id: Joi.string(),
  object: Joi.string(),
  created: Joi.number(),
  model: Joi.string(),
  choices: Joi.array().items(
    Joi.object({
      text: Joi.string(),
      index: Joi.number(),
      logprobs: Joi.any(),
      finish_reason: Joi.string(),
    }),
  ),
  usage: {
    prompt_tokens: Joi.number(),
    completion_tokens: Joi.number(),
    total_tokens: Joi.number(),
  },
};
