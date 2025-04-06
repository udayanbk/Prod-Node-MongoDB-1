import { Request, Response } from "express";
import { THttpResponse } from "../types/types";
import config from "../config/config";
import { EApplicationEnvironment } from "../constants/application";
import logger from "./logger";

export default (req: Request, res: Response, respStatusCode: number, respMessage: string, data: unknown = null): void => {
  const response: THttpResponse = {
    success: true,
    statusCode: 200,
    request: {
      ip: req.ip || null,
      url: req.originalUrl,
      method: req.method
    },
    message: respMessage,
    data: data
  }

  // console.info('Controller Response', {
  //   meta: response
  // });

  logger.info('Controller Response', {
    meta: response
  });

  if(config.ENV === EApplicationEnvironment.PRODUCTION){
    delete response.request.ip
  }

  res.status(respStatusCode).json(response);
}