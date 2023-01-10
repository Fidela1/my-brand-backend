import AppError from "../../utils/appError";


describe("App error", () => {
    test('should respond with a 200 status code', async () => {
      const response = new AppError('please provide email and password!', 400)
      expect(response).toBe("[Error: please provide email and password!]")
    })
  })