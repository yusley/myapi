import { Request,Response, NextFunction } from "express"
import { BaseError, Conflict } from "./errors"
import { ZodError } from "zod";


export const errorHandle = (err: BaseError, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    if (err instanceof ZodError) {
        res.status(400).send({
            success: false,
            message: "Erro de validação",
            details: err.errors
        });
    }
    
    if (err instanceof BaseError){
        res.status(err.status).send({
            success: false,
            message: err.message,
        })
    }

    if (err instanceof Conflict){
        res.status(409).send({
            success: false,
            message: err.message,
        })
    }
    
    res.status(err.status).send({
        success: false,
        message: err,
    });
};