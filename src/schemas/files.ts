import mongo from 'mongoose';
const { model, Schema } = mongo;

let fileSchema = new Schema({
    Filename: String,
    Owner: String,
    Views: Number,
    Forks: Number,
    FileData: {
        isPrivate: Boolean,
        Code: String
    }
})

export const file = model('files', fileSchema);