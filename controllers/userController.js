// userController.js

const userModel = require('../models/userModel');

module.exports = {
  createUser: async (req, res) => {
    try {
      const { username, email, age } = req.body;
      const userId = await userModel.createUser({ 
          username: username, 
          email: email,
          age: age, 
        });
      res.status(201).json({ userId });
    } catch (error) {
      res.status(500).json({ error: 'Unable to create user' });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers()
      if (users) {
        res.json(users)
      } else {
        res.status(404).json({error: 'Users not found'})
      }
    } catch (error) {
      res.status(500).json({error: 'Unable to fetch users'})
    }
  },

  getUserById: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await userModel.getUserById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch user' });
    }
  },
  
  updateUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const updatedData = req.body; // Assuming you send the updated data in the request body
      await userModel.updateUser(userId, updatedData);
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Unable to update user' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { userId } = req.params;
      await userModel.deleteUser(userId);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Unable to delete user' });
    }
  },
  
};
