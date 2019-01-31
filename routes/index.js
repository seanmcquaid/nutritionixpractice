var express = require('express');
var router = express.Router();

const request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nutritionix Practice' });
});

router.post("/search/food", (req,res,next)=>{
  const foodName = req.body.foodName;
});

module.exports = router;
