import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../index";
import {expect, jest, test} from '@jest/globals';
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

describe("blog tests", () => {
  const blogData = {
    title:"first",
    description:"new"
  }
  describe("GET /api/v1/blogs", () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).get("/api/v1/blogs")
      expect(response.statusCode).toBe(200)
    })
  })
  describe("POST /api/v1/blogs", () => {
    it('should respond with a 201 status code', async () => {
      const response = await request(app).post("/api/v1/blogs")
        .send(blogData)
       .set("Authorization",'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc5MDFhZTQ1NzI2MDM5YTE1ZjNkMCIsImlhdCI6MTY3NDAyMjk0MywiZXhwIjoxNjgxNzk4OTQzfQ.dRosGUx43UTLvTbiutaSoERICFAiDZakVj-hb1RAK1U')

      expect(response.body.statusCode).toBe(201)
    })
  })
 
  describe("GET /api/v1/blogs/:id", () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app).get("/api/v1/blogs/63be84689470c211f8f93d46")
      expect(response.statusCode).toBe(200)
    })
  }) 
  describe("UPDATE /api/v1/blogs/:id", () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app).patch("/api/v1/blogs/63be84689470c211f8f93d46")
      .send(blogData)
      .set("Authorization",'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc5MDFhZTQ1NzI2MDM5YTE1ZjNkMCIsImlhdCI6MTY3NDAyMjk0MywiZXhwIjoxNjgxNzk4OTQzfQ.dRosGUx43UTLvTbiutaSoERICFAiDZakVj-hb1RAK1U')
      expect(response.statusCode).toBe(200)
      
    })
  }) 
  describe("DELETE /api/v1/blogs/:id", () => {
    it("should respond with a 200 status code", async () => {
      const response = await request(app).delete("/api/v1/blogs/63be8570b626c427b4ca319c")
      .set("Authorization",'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc5MDFhZTQ1NzI2MDM5YTE1ZjNkMCIsImlhdCI6MTY3NDAyMjk0MywiZXhwIjoxNjgxNzk4OTQzfQ.dRosGUx43UTLvTbiutaSoERICFAiDZakVj-hb1RAK1U')
      expect(response.statusCode).toBe(200);
    })
  })
  
})
