
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

describe("user tests", () => {
  const userData = {
    name: "fvf1bg2wr2e1de3ryre",
    email: "fida13ewr2eeddedydyr45re@gmail.com",
    password: "pacvbnss1"
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