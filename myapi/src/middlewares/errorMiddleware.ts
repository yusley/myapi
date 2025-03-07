import { Request,Response, NextFunction } from "express"
import { BaseError, Conflict } from "../utils/errors"
import { number, ZodError } from "zod";
import { JsonWebTokenError } from "jsonwebtoken";
import { Prisma } from "@prisma/client";
import prismaClient from "../prisma";


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

    if (err instanceof JsonWebTokenError){
        res.status(401).send({
            success: false,
            message: 'Format token invalid',
            details: err.message
        })
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError){
        let code = parseInt(err.code as string)
        res.status(401).send({
            success: false,
            message: 'Request error',
            details: err.message
        })
    }
    
    res.send({
        success: false,
        message: err,
    });
};