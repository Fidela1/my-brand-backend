import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './documentation';

dotenv.config({ path: "./.env" });
mongoose
  .connect(process.env.DATABASE_TEST_URL, { useNewUrlParser: true })
.then (() =>{
  console.log('mongodb started .....')
})
  const app = express();
  app.use(cors());
  
    app.use(express.json());
    app.use((req, res, next) => {
      req.requestTime = new Date().toISOString();
      console.log(req.headers)
      next();
    });    
    app.use("/api/v1", routes);
    app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument, {
        swaggerOptions: {
          docExpansion: 'none',
          persistAuthorization: true,
        },
      })
    );
    


export default app;