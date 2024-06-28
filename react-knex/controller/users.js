const userService = require('../service/users');
const db = require('../db/db');

class UsersController {
    async selectUsers(req, res) {
        try {
            const userID = req.params.id;
            const data = await userService.selectUsers(userID);
            res.set('Access-Control-Allow-Origin', '*');
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    }

    async getUsers(req, res) {
        try {
            const data = await userService.getUsers();
            res.set('Access-Control-Allow-Origin', '*');
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    }

    async createUsers(req, res) {
        try {
            const first_name = req.body.first_name;
            const last_name = req.body.last_name;
            const email = req.body.email;
            const password = req.body.password;

            const id = await userService.createUsers(first_name, last_name, email, password);
            res.set('Access-Control-Allow-Origin', '*');
            res.json({ id });
        } catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    }

    async updateUsers(req, res) {
        try {
            const userID = req.params.id;
            const first_name = req.body.first_name;
            const last_name = req.body.last_name;
            const email = req.body.email;
            const password = req.body.password;

            await userService.updateUsers(userID, first_name, last_name, email, password);
            res.set('Access-Control-Allow-Origin', '*');
            res.send("Update");
        } catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    }

    async deleteUsers(req, res) {
        try {
            const data = await userService.deleteUsers(req.body);
            res.set('Access-Control-Allow-Origin', '*');
            res.status(201).json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = new UsersController();