const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")
const memesController= require("../controllers/memesController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/districtsInState/:districtsId", CowinController.getDistricts)
router.post("/cowin/getOtp", CowinController.getOtp)



router.get("/getSortedCities", weatherController.getSortedCities)
router.get("/getMemes", memesController.getMemes)
router.post("/postMeme", memesController.postMeme)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;