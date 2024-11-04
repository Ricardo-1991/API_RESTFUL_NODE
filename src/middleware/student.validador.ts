import { ZodSchema } from "zod";
import { StudentDto } from "../dtos/userDto";
import { NextFunction, Request, Response } from "express";

import { ZodError } from "zod";

export interface CustomError extends Error {
    status?: number;
    data?: ZodError['issues']; 
}

export const studentValidator = (schema: ZodSchema<StudentDto>) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const result = schema.safeParse(req.body);
  
      if (!result.success) {
        const error = new Error("Validação falhou.") as CustomError;
        error.status = 422; 
        error.data = result.error.errors; 
  
        return next(error); 
      }
      next();
    };
  };
  