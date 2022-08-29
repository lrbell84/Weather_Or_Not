import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const Forecast = sequelize.define("forecasts", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    location: {
        type: Sequelize.STRING,
        allowNull: false
    },

    temp: {
        type: Sequelize.STRING,
        allowNull: false
    }

})