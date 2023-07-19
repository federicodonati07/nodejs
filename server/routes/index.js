var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TAL' });
});

router.get("/feedback", (req, res, next)=>{
  res.json({callback_data: "/feedback"})
  res.render("feedback", {title:"TAL-FEEDBACK", name: null, surname: null, class: null})
})

router.get("/login", (req, res, next)=>{
  res.render("login", {title:"TAL-LOGIN", name: null, surname: null, class: null})
})

module.exports = router;