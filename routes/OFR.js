const express=require("express")

const router =express.Router()
const OFCntr = require("../controllers/OFCntr")
router.get('/',OFCntr.getOF)
router.post('/add',OFCntr.post)
router.get('/:IDOFabrication',OFCntr.getBYID)
router.put('/:IDOFabrication',OFCntr.update)
router.delete('/:IDOFabrication',OFCntr.delete)

module.exports = router