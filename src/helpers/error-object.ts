import { Request } from "express";
import { THttpError } from "../types/types";
import responseMessage from "../constants/responseMessage";
import config from "../config/config";
import { EApplicationEnvironment } from "../constants/application";

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (err: Error | unknown, req: Request, errorStatusCode: number = 500): THttpError=> {
  const errorObject: THttpError = {
    success: false,
    statusCode: errorStatusCode,
    request : {
      ip: req.ip || null,
      method: req.method,
      url: req.originalUrl
    },
    message: err instanceof Error ? err.message || responseMessage.SWR : `Something went wrong`,
    data: null,
    trace: err instanceof Error ? {Error: err.stack} : null
  }

  console.log(`Controller Error`, {
    meta: errorObject
  })

  if(config.ENV === EApplicationEnvironment.PRODUCTION){
    delete errorObject.request.ip;
    delete errorObject.trace;
  }

  return errorObject;
}