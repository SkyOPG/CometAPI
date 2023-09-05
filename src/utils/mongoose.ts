import mongo from 'mongoose';
import { ConnectOptions } from 'mongoose';
import conf from '../config/conf.js';

const options = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
} as ConnectOptions;

export const initDB = async (): Promise<void> => {
    await mongo.connect(conf.url, options).then(a => {
        console.log("Database is ready!");
    }).catch(e => {
        console.log("an error just occured while settin up the database: "+e.stack);
    });
}