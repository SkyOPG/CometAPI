import express from "express";
import { initDB } from './utils/index.js';
import * as routes from './routes/index.js';
const app = express();
const port = 3000;
initDB();
app.get("/", routes.main);
app.get("/about", routes.about);
app.get("/file", routes.file);
app.get("/economy");
app.listen(port, () => console.log("Server running"));
