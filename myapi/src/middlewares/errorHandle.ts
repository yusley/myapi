import { Request,Response, NextFunction } from "express"
import { BaseError } from "./errors"
import { ZodError } from "zod";


export const errorHandle = (err: BaseError, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof ZodError) {
        res.status(400).send({
            success: false,
            message: "Erro de validação",
            details: err.errors
        });
    }
    
    if (err.status){
        res.status(err.status).send({
            success: false,
            message: err.message,
        })
    }
    
    res.status(500).send({
        success: false,
        message: err,
    });
};