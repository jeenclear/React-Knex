const db = require('../db/db');

class UsersService {
    async selectUsers(id) {
      const data = await db('users')
      .select('*')
      .where("id", id)
      .first();

      return data;
    }

    async getUsers() {
      const data = await db('users')
      .select('*');

      return data;
    }

    async createUsers(first_name, last_name, email, password) {
      const [id] = await db('users')
      .insert({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,  
      })
      .returning('id');

      return id;
    }
    
    async updateUsers(id, first_name, last_name, email, password) {
      await db('users')
      .update({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
      })
      .where("id", id);
    }

    async deleteUsers(id) {
      await db('users')
      .where({ id: id })
      .del();
    }
}

module.exports = new UsersService();