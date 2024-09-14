import express from "express";
import path from "path";
import mongoose from "mongoose";
import morgan from 'morgan';
import { Request, Response } from "express";
import userRoutes from './routes/users';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import recipesRoutes from "./routes/recipes";
require("dotenv/config");

const app = express();

app.use(express.json()); // to manage json format
app.use(express.static(path.join(__dirname, "../public"))); // to serve static files in the public folder
app.use(morgan('dev'));

app.use(cors({
    origin : process.env.FRONTEND_ORIGIN, 
    credentials : true
})); // to prevent cors error
app.use(cookieParser()); // to manage cookies

// routes ---
app.use('/api/users', userRoutes);
app.use('/api/recipes', recipesRoutes);
// routes end ---
mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log('Views directory:', path.join(__dirname, 'views'));
    console.log('Connected to database "burma-tasty-house"..');
    app.listen(process.env.PORT, () => {

        console.log("App is running on port : " + process.env.PORT);
    });
});
