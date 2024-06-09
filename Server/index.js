import express from "express";
import cors from 'cors';
import { adminRouter } from "./Routes/AdminRoute.js";

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors({
    origin: ["http://localhost:5173/"],
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
}));
app.use(express.json());
app.use('/auth', adminRouter);

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});
