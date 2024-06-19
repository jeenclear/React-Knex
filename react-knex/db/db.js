const knex = require('knex');
const knexfile = require('./knexfile');

// Knex devlopment migration
const environment = process.env.NODE_ENV || "development";
const db = knex(knexfile[environment]);
module.exports = db;

