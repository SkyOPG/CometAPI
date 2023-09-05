import type { NextFunction, Request, Response } from 'express';

export const economy = (req: Request, res: Response, next: NextFunction) => {
    const type = req.query.type;
    switch(type){
        case "get": {
            const data = req.query.data;
            switch(data){
                case "bal": {
                    res.send({ message: "done", code: 200, response: "80" })
                } break;
                default: {
                    res.send({ message: "Error, no data provided", code: 400, response: {} })
                }
            }
        } break;
        default: {
            res.send({ message: "Error, no available method or type given", code: 400, response: {} })
        }
    }
}