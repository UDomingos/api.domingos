const knex=require("knex");
const config = require("../knexfile");
const enviromment = process.env.DB_ENV || "development"
 module.exports = knex(config[development]);