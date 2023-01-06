
import request from "supertest";
import app from "../index";

describe("POST/ blogs" , () => {

    describe("given a username and password", () => {

        test('should respond with a 200 status code', async () => { 
           const response = await request(app).post("/api/v1/users/signup")
           .send({
            name:"fidelartdxgfchv",
            email:"ertysdfgbgbjnnc@gmail.com",
            password:"pass2345vb"
           })
           expect(response.statusCode).toBe(201)
         })
    })

    describe("when the username and password is missing", () => {

    })
})