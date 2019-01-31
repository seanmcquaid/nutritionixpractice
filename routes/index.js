var express = require('express');
var router = express.Router();

const config = require("../config");

const request = require("request");

const apiBaseUrl = "https://trackapi.nutritionix.com/";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nutritionix Practice' });
});

router.post("/search/food", (req,res,next)=>{
  const foodName = req.body.foodName;
  // res.json(foodName);
  const searchUrl = `${apiBaseUrl}/v2/natural/nutrients/`;
  const header = {"content-Type": "application/json", "x-app-id" :`${config.apiAppId}`, "x-app-key":`${config.apiKey}`, "x-remote-user-id":`${config.activeUser}`}
  request.post(searchUrl, {headers: header},(error,res,body)=>{
  console.log(body)
  });
});

module.exports = router;
