import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  // {force: false} means do not drop table if exists else create new one (database must exist first)
  console.log("connect database and sync all tables");
  await sequelize.sync({force: false});
  console.log("Trying to listen to port");
  app.listen(4000);
  console.log("Server on port 4000");
}

main();
