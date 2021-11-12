import express from "express";
import cors from "cors";
import getItems from "./controllers/getItems.js";
import getItem from "./controllers/getItem.js";
import signUp from './controllers/signUp.js'

const app = express();
app.use(express.json());
app.use(cors());

app.get('/items', getItems);
app.get('/item/:id', getItem);
app.post('/sign-up', signUp);


export default app;

