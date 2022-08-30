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

app.use("/api/forecasts", router);
app.get("/api", (req, res) => {
  res.send("Welcome to my Weather API!");
});
app.get("*", (req, res) =>
  res.status(404).send("There is no content at this route.")
);

app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default app;