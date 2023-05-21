import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema = Joi.object({
  email: Joi.string().email().required(),
  cryptocurrency: Joi.string().valid("BTC").required(),
});

const validateCryptoData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = schema.validate(req.body);
  if (error) {
    throw new Error(error.details[0].message);
  }

  next();
};

export default validateCryptoData;
