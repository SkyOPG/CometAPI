import type { NextFunction, Request, Response } from 'express';

export const main = (req: Request, res: Response, next: NextFunction) => {
    res.send({ 
        message: "Welcome to the comet api!" 
    });
}