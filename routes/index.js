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
  // console.log(foodName);
  // res.json(foodName);
  const searchUrl = `${apiBaseUrl}/v2/natural/nutrients/`;
  const headers = {
    "content-Type": "application/json", 
    "x-app-id" :`${config.apiAppId}`, 
    "x-app-key":`${config.apiKey}`, 
    "x-remote-user-id":`${config.activeUser}`
  };

  const options = {"query": `${foodName}`}
// console.log(headers);
  request.post({url: searchUrl, headers: headers, body: JSON.stringify(options)},(error,res,body)=>{
    const parsedData = JSON.parse(body);
    console.log(parsedData);
    // create table to store database info 
  });
});

module.exports = router;
