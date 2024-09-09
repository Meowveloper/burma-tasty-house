import express from "express";
import path from "path";
import mongoose from "mongoose";
import { Request, Response } from "express";
import expressLayouts from 'ejs-locals';
require("dotenv/config");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));


app.engine('ejs', expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req : Request, res : Response) => {
    res.render('index', { title : null });
})
mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log('Views directory:', path.join(__dirname, 'views'));
    console.log('Connected to database "burma-tasty-house"..');
    app.listen(process.env.PORT, () => {

        console.log("App is running on port : " + process.env.PORT);
    });
});
