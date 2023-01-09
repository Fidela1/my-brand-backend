import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../index";
dotenv.config({ path: "../.env" });
/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("blog tests", () => {
  const blogData = {
    title:"first",
    description:"new"
  }
  describe("GET /api/v1/blogs", () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).get("/api/v1/blogs")
      .set("Authorization",'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWVhNjBmOTkzM2JhMmRiYzJhNTU1NCIsImlhdCI6MTY3MjM5MDE2NCwiZXhwIjoxNjgwMTY2MTY0fQ.xHhCKT2oNx_dNeVU8rOZrVZpwBlZ9VGqrg2pNhtptJo')
      expect(response.statusCode).toBe(200)
    })
  })
  describe("POST /api/v1/blogs", () => {
    it('should respond with a 201 status code', async () => {
      const response = await request(app).post("/api/v1/blogs")
        .send(blogData)
      expect(response.body.statusCode).toBe(201)
    })
  })
 
  describe("GET /api/v1/blogs/:id", () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app).get("/api/v1/blogs/63bbefb6bd4bcf1a64b9f576")
        .send(blogData)
      expect(response.statusCode).toBe(200)
    })
  }) 
})