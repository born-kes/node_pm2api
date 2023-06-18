import Joi from 'joi';
import IGetResponse from '../../interfaces/IGetResponse';

export const responseStatus200 = (validate) => {
  return Joi.object({
    status: Joi.number(),
    data: Joi.object(validate),
  }).label('Result');
};

export const setResponse = (h, validate, data) => {
  const { error } = Joi.object(validate).validate(data);

  if (error) {
    const errorResponse: IGetResponse = { status: 500, error };
    return h.response(errorResponse).code(500);
  } else {
    const successResponse: IGetResponse = { status: 200, data: data };
    return h.response(successResponse).code(200);
  }
};
