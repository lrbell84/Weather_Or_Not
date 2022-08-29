import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("forecasts_db", "root", "password", {
    dialect: "mysql",
    host: "localhost"
});