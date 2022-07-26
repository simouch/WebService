const OF = require("../models/OFM")


exports.getOF=(req,res)=>{

OF.getALL()
.then(([rows,fielData]) => {
    console.log(rows);
    res.json(rows)

}).catch((err) => {
   console.log(err); 
});
};
exports.post = (req, res) => {
    const IDOFabrication =req.body.IDOFabrication;
    const OFAbrication=req.body.OFAbrication;
    const  OFab = new OF (
        IDOFabrication,
        OFAbrication
      );
  
      OFab.save()

 
      .then(() => {
        res.json({state: 'ok', msg: 'of ajouté'})
       
        console.log("of ajouté",OFab)
      })
      .catch(err => console.log(err));
  };
 

exports.getBYID=(req,res)=>{
    const OFID =  req.params.IDOFabrication
    OF.findById(OFID).then(([OF]) => {
        res.json(OF)
        console.log(OF);
    }).catch((err) => {
        console.log(err);
    });
};
exports.update=(req,res)=>{
    const IDOF= parseInt(req.params.IDOFabrication)
    const OFAbrication =req.body.OFAbrication
  
    OF.updateOne(IDOF,OFAbrication)
    .then(() => {
        res.json({state: 'ok', msg: 'of modifié',data:OF})
       
        console.log("of modifié")
      })
      .catch(err => console.log(err));

};
exports.delete =(req,res)=>{
    const OFID =  req.params.IDOFabrication
    OF.deleteOF(OFID).then(() => {
      
        console.log(OF);
        res.json({state: 'ok', msg: 'of supprimé'})
    }).catch((err) => {
        console.log(err);
    });
}
