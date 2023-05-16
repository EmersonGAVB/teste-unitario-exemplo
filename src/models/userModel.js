// userModel.js

let users = [
    { id: 1, name: 'John', email: 'john@example.com', cpf: '123.456.789-00', active: true },
    { id: 2, name: 'Jane', email: 'jane@example.com', cpf: '987.654.321-00', active: false },
  ];
  
  async function getAllUsers() {
    try {
      return users;
    } catch (error) {
      throw new Error('Failed to fetch all users');
    }
  }
  
  async function getUserByName(name) {
    try {
      const user = users.find((user) => user.name === name);
      return user;
    } catch (error) {
      throw new Error('Failed to fetch user by name');
    }
  }
  
  async function getUserByCpf(cpf) {
    try {
      const user = users.find((user) => user.cpf === cpf);
      return user;
    } catch (error) {
      throw new Error('Failed to fetch user by CPF');
    }
  }
  
  async function getUsersByOn(active) {
    try {
      const filteredUsers = users.filter((user) => user.active === active);
      return filteredUsers;
    } catch (error) {
      throw new Error('Failed to fetch users by "active" status');
    }
  }
  
  
  module.exports = {
    getAllUsers,
    getUserByName,
    getUserByCpf,
    getUsersByOn
  };
  