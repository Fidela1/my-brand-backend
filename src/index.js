import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './documentation';

dotenv.config({ path: "./.env" });
mongoose
  .connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })

  const app = express();

  
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