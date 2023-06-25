export type Role = 'user' | 'assistant' | 'system';
export type GptModel = 'gpt-3.5-turbo' | 'gpt-3.5-turbo-16k' | 'gpt-4';

export const roles: Role[] = ['user', 'assistant', 'system'];
export const gptModels: GptModel[] = [
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-16k',
  'gpt-4',
];
