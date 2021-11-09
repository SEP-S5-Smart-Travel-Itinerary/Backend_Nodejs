const router = require('express').Router();
const bodyParser = require("body-parser");
const ItinController=require("../controller/itinerary_controller");
router.use(bodyParser.json());

router.get('/', (req,res)=>{
    res.json({message:"itinerary router"})
} );


// Create new itinerary
router.post('/createitin', ItinController.CreateItinerary);
// Add members to travel plan
router.post('/addmembers', ItinController.AddMembers);
// Get all itinerary details
router.post('/getallitin', ItinController.GetAllItin);
// Delete Itinerary
router.post('/deleteitin', ItinController.DeleteItinerary);
// Add location to travel plan
router.post('/addlocation', ItinController.AddLocationNew);
// Remove location from travel plan
router.post('/removelocation', ItinController.RemoveLocation);
// Change location from travel plan
router.post('/changelocation', ItinController.ChangeLocation);
// Change plan Name
router.post('/changeplanname', ItinController.ChangePlanName);
// Edit Travel Budget
router.post('/editbudget', ItinController.EditTravelBudget);

// Add travel media to travel plan
router.post('/addtravelmedia', ItinController.AddTravelMedia);
// get travel media
router.post('/gettravelmedia', ItinController.GetTravelModes);
// Change travel media of travel plan
router.post('/changetravelmedia', ItinController.ChangeTravelMedia);
// get all details of a plan
router.post('/alldetails', ItinController.getDetailsOfaPlan);
// change plan Dates
router.post('/changedates', ItinController.EditPlanDtaes);
// get plan Locations
router.post('/planlocations', ItinController.GetPlanLocationsNew);
// search members
router.post('/searchmembers', ItinController.SearchMember);
// remove media
router.post('/removemedia', ItinController.Removemedia);

module.exports=router;