import express from "express";
import cors from "cors";
import getItems from "./controllers/getItems.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/items', getItems);


export default app;