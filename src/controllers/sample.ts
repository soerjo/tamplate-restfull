import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'Sample Controller';

export const sampleHealtCheck = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, `sample health check route called`);

  return res.status(200).send({
    message: 'ping!'
  });
};

export const samplePostCheck = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, `sample Post check route called`);

  return res.status(200).send({
    message: 'ping!',
    data: req.body
  });
};
