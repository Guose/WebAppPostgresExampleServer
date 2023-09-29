const knex = require('knex'); // Import Knex.js
const knexConfig = require('../knexfile'); // Import your Knex.js configuration

// Check if the configuration has been defined
if (!knexConfig || !knexConfig.development) {
  throw new Error('Knex configuration is missing or incorrect.');
}

// Create a Knex instance based on your configuration
const db = knex(knexConfig.development);

class UserModel {
  // Create new user in the database
  async createUser(userData) {
    try {
      const [userId] = await db('Users').insert(userData, 'id')
      return userId
    } catch (error) {
      console.error('Error creating user:', error);
      throw error
    }
  }

  // Retrieve a user by ID
  async getUserById(userId) {
    try {
      const user = await db('Users').where({id: userId}).first()
      return user
    } catch (error) {
      throw error
    }
  }
  
  // Retrieve all users
  async getAllUsers() {
    try {
      const users = await db('Users');
      return users;
    } catch (error) {
      console.error('Error fetching all users:', error);
      throw error;
    }
  }

  // Update user information
  async updateUser(userId, updatedData) {
    try {
      await db('Users').where({ id: userId }).update(updatedData);
    } catch (error) {
      throw error;
    }
  }

  // Delete a user by ID
  async deleteUser(userId) {
    try {
      await db('Users').where({ id: userId }).del();
    } catch (error) {
      throw error;
    }
  }

}

module.exports = new UserModel();
