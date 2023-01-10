import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../index";
dotenv.config({ path: "../.env" });
/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect("mongodb://localhost:27017/brandtestdb", { useNewUrlParser: true });
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});
describe("comment tests", () => {
    const commentData = {
      name:"first",
      comment:"new"
    }
    describe("POST /api/v1/blogs/:id/comments", () => {
      it('should respond with a 201 status code', async () => {
        const response = await request(app).post("/api/v1/blogs/63bc67e4ef36312c68c66050/comments")
          .send(commentData)
        expect(response.body.statusCode).toBe(201)
      })
    })
    describe("GET /api/v1/blogs/:id/comments", () => {
        it('should respond with a 200 status code', async () => {
          const response = await request(app).get("/api/v1/blogs/63bc67e4ef36312c68c66050/comments")
          expect(response.statusCode).toBe(200)
        })
      }) 
  })