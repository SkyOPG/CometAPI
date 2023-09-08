var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongo from 'mongoose';
import conf from '../config/conf.js';
const options = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
export const initDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongo.connect(conf.url, options).then(a => {
        console.log("Database is ready!");
    }).catch(e => {
        console.log("an error just occured while settin up the database: " + e.stack);
    });
});
