import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
// import conn from "./conn/conn"




const app = express();

app.use(cors())
dotenv.config()

app.use("/", (req, res) => {
    res.send("Hello")
})

app.listen(8000, () => {console.log("app is running on port 8000")})