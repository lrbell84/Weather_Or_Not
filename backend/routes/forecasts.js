import Router from "express";
import bodyParser from "body-parser";
import {
  addForecast,
  deleteForecast,
  getForecastById,
  getForecastByLocation,
  getForecasts,
} from "../controllers/forecastController.js";

const router = Router();

router.get("/", (req, res) => getForecasts(req, res));

router.get("/:id", (req, res) => getForecastById(req, res));

router.post("/", (req, res) => addForecast(req, res));

router.delete("/:id", (req, res) => deleteForecast(req, res));

router.get("/location/:location", (req, res) => getForecastByLocation(req, res));

export default router;
