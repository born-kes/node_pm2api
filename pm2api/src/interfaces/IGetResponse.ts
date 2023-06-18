import Joi from 'joi';

export default interface IGetResponse {
  status: number;
  data?: string;
  error?: Joi.ValidationError;
}
