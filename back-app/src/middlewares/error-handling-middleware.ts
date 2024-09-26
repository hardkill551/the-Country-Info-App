import { Request, Response } from 'express';
import httpStatus from 'http-status';

export function handleApplicationErrors(
  err: Error,
  _req: Request,
  res: Response
) {
  const errorMessage = err.message || ''; 
  
  if (errorMessage.includes('Failed to fetch countries')) {
    return res.status(httpStatus.BAD_REQUEST).send({
      error: 'BadRequestError',
      message: 'Failed to fetch countries from external API',
    });
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: 'InternalServerError',
    message: 'Internal Server Error',
  });
}
