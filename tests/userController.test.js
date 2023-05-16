const userModel = require('../../unitario/src/models/userModel')
const userController = require('../../unitario/src/controllers/userController')
const { describe, test, expect } = require('@jest/globals')

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});


describe('UserController', () => {
  test("should return all users", async() => {
    const mockUsers = [{ name: 'John', email: 'john@example.com' }, { name:'mary', email:'mary@example.com'}]
    
    jest.spyOn(userModel, 'getAllUsers').mockReturnValue(mockUsers)

    const req = {}
    const res = { json: jest.fn((result) => {
      expect(result).toEqual(mockUsers)
      expect(userModel.getAllUsers).toHaveBeenCalledTimes(1)
      expect(res.json).toHaveBeenCalledWith(mockUsers)
    }) }

    await userController.allUsers(req, res)
  })

  test("should return 500 status code and error message in case fail when call getAllUsers", async() => {
    const mockError = 'Internal server error'
    
    jest.spyOn(userModel, 'getAllUsers').mockRejectedValue(mockError)

    const req = {}
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }

    await userController.allUsers(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
      message: mockError
    })
    expect(userModel.getAllUsers).toHaveBeenCalledTimes(1)
  })

  test("Should return a user's informations when call getUserByName", async() => {
    const mockUser = { users_id: 1, name: 'John', email: 'john@example.com' }

    jest.spyOn(userModel, 'getUserByName').mockReturnValue(mockUser)

    const req = { name: 'John' }
    const res = { json: jest.fn((result) => {
      expect(result).toEqual(mockUser)
      expect(userModel.getUserByName).toHaveBeenCalledTimes(1)
      expect(res.json).toHaveBeenCalledWith(mockUser)
    }) }
  })

  test("Should return 500 status code and error message in case fail when call getUserByName", async() => {
    const mockError = 'Internal server error'
    
    jest.spyOn(userModel, 'getAllUsers').mockRejectedValue(mockError)

    const req = {}
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }

    await userController.allUsers(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
      message: mockError
    })
    expect(userModel.getAllUsers).toHaveBeenCalledTimes(1)
  })

  test("Should return a user's informations when call userByCpf", async() => {
    const mockUser = { users_id: 1, email: 'john@example.com', ativo: 'on', cpf: '123.456.789-00', name: 'John', }

    jest.spyOn(userModel, 'getUserByCpf').mockReturnValue(mockUser)

    const req = { cpf: '123.456.789-00' }
    const res = { json: jest.fn((result) => {
      expect(result).toEqual(mockUser)
      expect(userModel.getUserByCpf).toHaveBeenCalledTimes(1)
      expect(res.json).toHaveBeenCalledWith(mockUser)
    }) }
  })

})