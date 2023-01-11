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
        const response = await request(app).post("/api/v1/blogs/63be84689470c211f8f93d46/likes")
        .send(likeData)
        expect(response.body.statusCode).toBe(200)

      })
    })
    describe("GET /api/v1/blogs/:id/likes", () => {
        it('should respond with a 200 status code', async () => {
          const response = await request(app).get("/api/v1/blogs/63be84689470c211f8f93d46/likes")
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
        const response = await request(app).post("/api/v1/blogs/63bc67e4ef36312c68c66050/messages")
        .send(messageData)
        expect(response.body.statusCode).toBe(201)

      })
    })
    describe("GET /api/v1/blogs/:id/messages", () => {
        it('should respond with a 200 status code', async () => {
          const response = await request(app).get("/api/v1/blogs/63bc67e4ef36312c68c66050/messages")
          expect(response.statusCode).toBe(200)
        })
      }) 

})