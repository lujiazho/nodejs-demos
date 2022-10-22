import Sequelize from "sequelize";

const user = 'postgres'
const host = 'postgres'
const database = 'projectsdb'
const password = '1'
const port = '5432'

export const sequelize = new Sequelize(
  database, // db name,
  user, // username
  password, // password
  {
    host,
    port,
    dialect: "postgres",
  }
);
