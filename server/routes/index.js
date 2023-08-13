var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TAL', url:"" });
});

router.get("/feedback", (req, res, next)=>{
  res.render("feedback", {title:"TAL", url:"/feedback"})
})

router.get("/login", (req, res, next)=>{
  res.render("login", {title:"TAL", url:"/login"})
})

router.get("/singup", (req, res, next)=>{
  res.render("singup", {title:"TAL", url:"/singup"})
})

module.exports = router;