import type { NextFunction, Request, Response } from 'express';

export const about = (_req: Request, res: Response, _next: NextFunction) => {
    res.send({ 
        message: "Api was made by sky with the help of Un1que" 
    });
}