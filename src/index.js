import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes";
dotenv.config({ path: "./.env" });
const port = process.env.PORT;
mongoose
  .connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
  .then(() => {
    
   
    
  });
  const app = express();

  
    app.use(express.json());
    app.use(express.urlencoded({
      extended: false
    }));
    app.use((req, res, next) => {
      req.requestTime = new Date().toISOString();
      console.log(req.headers)
      next();
    });    
    app.use("/api/v1", routes);


export default app;