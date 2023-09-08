var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as schemas from '../schemas/index.js';
export const file = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    if (filename === undefined)
        return res.send({
            message: "Error, make sure you put a file name"
        });
    const data = yield schemas.file.findOne({ Filename: filename });
    if (!data)
        res.status(404).send({
            error: "no filefound with given name"
        });
    console.log(data);
    res.status(200).send({
        code: data.FileData.Code,
        filename: data.Filename
    });
});
