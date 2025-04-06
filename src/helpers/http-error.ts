import { NextFunction, Request } from "express";
import errorObject from "./error-object";

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (next: NextFunction,  err: Error | unknown, req: Request, errorStatusCode: number = 500): void => {
  const errorObj = errorObject(err, req, errorStatusCode);
  return next(errorObj)
}