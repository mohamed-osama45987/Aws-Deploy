import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

//@ts-ignore
export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.databaseport,
  dialect: "postgres",
  storage: ":memory:",
});
      