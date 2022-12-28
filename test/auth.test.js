import supertest from 'supertest'
import users from '../src/routes/usersRoutes/users';
import jest from '@jest/globals'

describe("POST/users", () => {

    describe("given a username and password" , () =>{
    test('Respond with a 200 status code', async () => {
       const response = await request(users).post("/signup").send({
        name:"name",
        password:"password"
       }) 
       expect(response.statusCode.toBe(200))
    })
    describe("when the username and password is missing")
})
})
