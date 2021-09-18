const router = require('express').Router();
const {getFlightOffers,getDetailsOdSpecificLocation,AutoComplete,getLocations,getFlightRates,getSafety,getCurrentWeather,getAccomodations}=require("../controller/apictrl");
//const{getAnotherRecommend}=require("../controller/apictrl");

router.post('/flightofffers',getFlightOffers);
router.post('/flightrates',getFlightRates);
//router.post('/anotherrecommend',getAnotherRecommend);
router.post('/safety',getSafety);

router.post('/weather',getCurrentWeather);


router.post('/locations',getLocations);
router.post('/accomodations',getAccomodations);
router.post('/auto',AutoComplete);
router.post('/details',getDetailsOdSpecificLocation);


module.exports=router;