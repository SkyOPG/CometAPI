import type { fileSchema } from "../utils/index.js";
import type { NextFunction, Request, Response } from 'express';
import * as schemas from '../schemas/index.js';

export const file = async (req: Request, res: Response, _next: NextFunction) => {
    const filename: string = req.query.filename as string;
    if(filename === undefined)
        return res.send({ 
            message: "Error, make sure you put a file name" 
        }) as Response;
    const data = await schemas.file.findOne({ Filename: filename });
    if(!data)
        res.status(404).send({ 
            error: "no filefound with given name" 
        }) as Response;
    console.log(data);
    res.status(200).send({ 
        code: ((data as unknown) as fileSchema).FileData.Code, 
        filename: ((data as unknown) as fileSchema).Filename 
    }) as Response;
}