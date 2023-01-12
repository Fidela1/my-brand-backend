
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

describe("user tests", () => {
  const userData = {
    name: "fidela",
    email: "fidela123@gmail.com",
    password: "pass123"
  }

  describe("POST /api/v1/users/signup", () => {
    it('should respond with a 201 status code', async () => {
      const response = await request(app).post("/api/v1/users/signup")
        .send(userData)
        console.log(response.body.data.user)
      expect(response.body.statusCode).toBe(201)
    })
  })
  describe("POST /api/v1/users/login", () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).post("/api/v1/users/login")
        .send(userData)
      expect(response.statusCode).toBe(200)
    })
  })
  describe("GET /api/v1/users", () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).get("/api/v1/users")
      expect(response.statusCode).toBe(200)
    })
  })
  describe("DELETE /api/v1/users", () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).delete("/api/v1/users")
      expect(response.statusCode).toBe(200)
    })
  })
  
})