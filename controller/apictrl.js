var Amadeus = require('amadeus'); 
require("dotenv").config();
const axios = require('axios').default;
const{getFlightOffersService,getDetailsOfSpecificLocationService,AutoCompleteService,getAccomodationsService,getLocationsService,getFlightRatesService,getSafetyService,getCurrentWeatherService} = require("../service/apiServices");

var amadeus = new Amadeus({ 
    clientId: process.env["AMADEUS_CLIENT_ID"], 
    clientSecret: process.env["AMADEUS_CLIENT_SECRET"] 
  });


module.exports = {

  getFlightOffers: (req, res) => {
    const body = req.body;
    getFlightOffersService(
      body.origin,
      body.destination,
      body.date,
      body.adults,
      (err, result) => {
        if (err) {
          res.json({
            sucess: false,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: true,
            data: result,
          });
        }
      }
    );

  },

  getFlightRates: (req, res) => {
    const body = req.body;
    getFlightRatesService(
      body.origin,
      body.destination,
      (err, result) => {
        if (err) {
          res.json({
            sucess: false,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: true,
            data: result,
          });
        }
      }
    );

  },

  getSafety: (req, res) => {
    const body = req.body;
    getSafetyService(
      body.latitude,
      body.longitude,
      (err, result) => {
        if (err) {
          res.json({
            sucess: false,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: true,
            data: result,
          });
        }
      }
    );

  },

  getCurrentWeather: (req, res) => {
    const body = req.body;
    getCurrentWeatherService(
      body.latitude,
      body.longitude,
      (err, result) => {
        if (err) {
          res.json({
            sucess: false,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: true,
            data: result,
          });
        }
      }
    );

  },

  getLocations: (req, res) => {
    const body = req.body;
    getLocationsService(
      body.place,
      (err, result) => {
        if (err) {
          res.json({
            sucess: false,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: true,
            data: result,
          });
        }
      }
    );

  },

  getAccomodations: (req, res) => {
    const body = req.body;
    getAccomodationsService(
      body.place,
      (err, result) => {
        if (err) {
          res.json({
            sucess: false,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: true,
            data: result,
          });
        }
      }
    );

  },

  AutoComplete: (req, res) => {
    const body = req.body;
    AutoCompleteService(
      body.place,
      (err, result) => {
        if (err) {
          res.json({
            sucess: false,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: true,
            data: result,
          });
        }
      }
    );

  },

  getDetailsOdSpecificLocation: (req, res) => {
    const body = req.body;
    getDetailsOfSpecificLocationService(
      body.place_id,
      (err, result) => {
        if (err) {
          res.json({
            sucess: false,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: true,
            data: result,
          });
        }
      }
    );

  },

    };