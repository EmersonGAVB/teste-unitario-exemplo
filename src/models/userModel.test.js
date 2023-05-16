const userModel = require('../models/userModel');

describe('UserModel', () => {
  test('should return all users', async () => {
    // Mock os usuários
    const mockUsers = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' },
    ];

    // Mock a função getAllUsers para retornar os usuários
    userModel.getAllUsers = jest.fn().mockResolvedValue(mockUsers);

    // Chamar a função getAllUsers e verificar o resultado
    const result = await userModel.getAllUsers();
    expect(result).toEqual(mockUsers);
    expect(userModel.getAllUsers).toHaveBeenCalledTimes(1);
  });

  test('should return user by ID', async () => {
    // Mock o usuário
    const mockUser = { id: 1, name: 'John' };

    // Mock a função getUserById para retornar o usuário
    userModel.getUserById = jest.fn().mockResolvedValue(mockUser);

  });

  
});
