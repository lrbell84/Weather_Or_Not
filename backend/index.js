import express from "express";
import router from "./routes/forecasts.js";
import bodyParser from "body-parser";
import { sequelize } from "./db/index.js";

const app = express();
const port = process.env.PORT || 3002;

sequelize.sync()
.then((result =>{
  console.log(result)
}))
.catch(err => {
  console.log(err)
});

app.use(bodyParser.json());