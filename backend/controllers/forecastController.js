import { Forecast } from "../models/forecastsModel.js";



const forecastsArr = ["Rain", "Clear", "Wind", "Sunny", "Cloudy"];

export const getForecasts = (req, res) => {
  Forecast.findAll()
  .then(forecasts => {
    res.status(200).send(forecasts)
  }) 
  .catch(err => {
    console.log(err)
  })
};

export const getForecastById = (req, res) => {
  const id = parseInt(req.params.id);
  Forecast.findByPk(id)
  .then(forecast => {
    res.status(200).send(forecast || `Forecast with the id of ${id} not found`)
  })
  .catch(err => {
    console.log(err)
  })

};

export const addForecast = (req, res) => {
  Forecast.create({
    location: req.body.location,
    temp: req.body.temp
  }) 
  .then(() => {
    res.status(201).send({message : "Created"})
  }) 
  .catch(err => {
    console.log(err)
  })
};

export const getForecastByLocation = (req, res) => {
  const location = req.params.location;
  res.status(200).send({
    location: forecastsArr[forecastsArr.indexOf(location)] || "Forecast not found",
  });
};

export const deleteForecast = (req, res) => {
  const id = parseInt(req.params.id);
  Forecast.destroy({
    where: {id: req.params.id }
  })
  .then(() => {
    res.status(201).send({message : "Deleted"})
  }) 
  .catch(err => {
    console.log(err)
  })
};
