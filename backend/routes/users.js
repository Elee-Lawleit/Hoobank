var express = require('express');
var router = express.Router();
var sql = require("mysql2")
const {addUser, loginUser} = require("../controllers/user/index");




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/add-user", (req, res,next)=>{
  res.send('add user working');
})

router.post("/add-user", async(req, res, next)=>{
  //perform database things here
  const { email, password, name, address, phone, branch } = req.body;
  const result = await addUser(email, password, name, address, phone, branch );
  if (result) {
    return res.send({ success: true });
  }
  res.send({ success: false })
})

router.post("/login-user", async(req, res, next)=>{
  //perform database things here
  const { email, password } = req.body;
  const result = await loginUser(email, password);
  if (result) {
    req.session.user = result;
    return res.status(200).send({ success: true })
  }
  return res.status(500).send({ success: false })
})

module.exports = router;
