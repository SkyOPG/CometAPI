import mongo from 'mongoose';
import { ConnectOptions } from 'mongoose';

const options = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
} as ConnectOptions;

export const initDB = async (): Promise<void> => {
    await mongo.connect("mongodb+srv://SkyOPG:EabVEDQlrTxIbwoi@skydb.rmbte6x.mongodb.net/?retryWrites=true&w=majority", options).then(a => {
        console.log("Database is ready!");
    }).catch(e => {
        console.log("an error just occured while settin up the database: "+e.stack);
    });
}