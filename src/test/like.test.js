import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../index";
dotenv.config({ path: "../.env" });
/* Connecting to the database before each test. */
jest.setTimeout(200000);
beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE_TEST_URL, { useNewUrlParser: true });
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});
describe("like tests", () => {
    const likeData = {
        name:"first",
      }
    describe("POST /api/v1/blogs/:id/likes", () => {
      it('should respond with a 201 status code', async () => {
        const response = await request(app).post("/api/v1/blogs/63c79a9151a613066c95744c/likes")
        .send(likeData)
        expect(response.body.statusCode).toBe(200)

      })
    })
    describe("GET /api/v1/blogs/:id/likes", () => {
        it('should respond with a 200 status code', async () => {
          const response = await request(app).get("/api/v1/blogs/63c79a9151a613066c95744c/likes")
          expect(response.statusCode).toBe(200)
        })
      }) 
})
describe("like tests", () => {
    const messageData = {
        name:"first",
        message:"thanks"
      }
    describe("POST /api/v1/blogs/:id/messages", () => {
      it('should respond with a 201 status code', async () => {
        const response = await request(app).post("/api/v1/blogs/63c79a9151a613066c95744c/messages")
        .send(messageData)
        expect(response.body.statusCode).toBe(201)

      })
    })
    describe("GET /api/v1/blogs/:id/messages", () => {
        it('should respond with a 200 status code', async () => {
          const response = await request(app).get("/api/v1/blogs/63c79a9151a613066c95744c/messages")
          expect(response.statusCode).toBe(200)
        })
      }) 

})