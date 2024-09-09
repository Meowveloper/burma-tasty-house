import express from "express";
import path from "path";
import mongoose from "mongoose";
require("dotenv/config");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log('Connected to database "burma-tasty-house"..');
    app.listen(process.env.PORT, () => {

        console.log("App is running on port : " + process.env.PORT);
    });
});
