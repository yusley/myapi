import { Request, Response, NextFunction } from 'express';

export class BaseError extends Error{
    status: number
    constructor(message: string, status: number) {
        super(message)
        this.status = status
        Object.setPrototypeOf(this, BaseError.prototype)
    }
}


export class NotFoundError extends BaseError{
    constructor(message: string){
        super(message,404)
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }
}

export class Conflict extends BaseError{
    constructor(message: string){
        super(message,409)
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }
}

export class ValidationErrro extends BaseError{
    errorData: Record<string,string>[]
    constructor (data: Record<string,string>[]) {
        super("Validation Error", 400)
        this.errorData = data
        Object.setPrototypeOf(this, ValidationErrro.prototype)
    }
}