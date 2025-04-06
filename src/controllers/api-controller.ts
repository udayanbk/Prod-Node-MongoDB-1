import { NextFunction, Request, Response,  } from "express";
import httpResponse from "../helpers/http-response";
import responseMessage from "../constants/responseMessage";
import httpError from "../helpers/http-error";

export const selfCall =  function (req: Request, res: Response, next: NextFunction) {
  try {
    httpResponse(req, res, 200, responseMessage.SUCCESS)
  }
  catch (err) {
    httpError(next, err, req, 500)
  }
}