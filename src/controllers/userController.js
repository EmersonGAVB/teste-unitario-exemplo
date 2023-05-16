require('dotenv/config')
const user = require('../models/userModel')
const validCpf = require('../../util/formatCpf')

const allUsers = async (req, res) => {
  try {
    const allUsers = await user.getAllUsers()
    
    return res.json(allUsers)
  } catch (error) {
    // console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const userByName = async (req, res) => {
  try {
    const userByName = await user.getUserByName(req.params.name)
    return res.json(userByName)
  } catch (error) {
    // console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const userByCpf = async (req, res) => {
  try {
    const newCpf = validCpf.inputPointCpf(req.params.cpf)
  
    if (!newCpf.statusCode) {
      const userByCpf = await user.getUserByCpf(newCpf)
      return res.json(userByCpf)
    }
    
    return res.status(200).json(newCpf.messase) 
  } catch (error) {
    // console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }  
}

const usersByOn = async (req, res) => {
  try {
    const usersByOn = await user.getUsersByOn(req.params.active)
    return res.json(usersByOn)
  } catch (error) {
    throw new Error(error.messase)
  }
}

module.exports = {
  allUsers,
  userByName,
  userByCpf,
  usersByOn
}