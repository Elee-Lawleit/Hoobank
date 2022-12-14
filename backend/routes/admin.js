
const express = require("express");
const {createAdmin, getAllAdmins}  = require("../controllers/admin/index");

const router = express.Router();


// localhost:3000/admin/
router.get("/", async(req, res, next)=>{
    const result = await getAllAdmins();

    if (result) {
        return res.send({ success: true, result: result });
    }
    res.send({ success: false, result: {} })
})

router.post("/addAdmin", async(req, res, next)=>{
    const {name} = req.body;

    const result = await createAdmin(name);

    if(result){
        return res.send({success: true, result: result});
    }
    res.send({success: false, result: {}})

})

module.exports =  router;


// MODEL - VIEW - CONTROLLER