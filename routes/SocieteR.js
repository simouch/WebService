const express=require("express")

const router =express.Router()
const societeC = require("../controllers/SocieteCntr")

router.post('/addS',societeC.post)


module.exports = router