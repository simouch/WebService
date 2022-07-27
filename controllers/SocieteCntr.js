const societeM =require("../models/SocieteM")

exports.post = (req, res) => {
    const IDSociete =req.body.IDSociete;
    const NomSociete=req.body.NomSociete;
    const License =req.body.License;
    const Logo=req.body.Logo;
    const Adresse=req.body.Adresse;
    const PiedPage=req.body.PiedPage;
    const EntetPage=req.body.EntetPage;
    const Etat=req.body.Etat;
    const MF=req.body.MF;
    const Soc  = new societeM (
        IDSociete,
        NomSociete,
        License,
        Logo,
        Adresse,
        PiedPage,
        EntetPage,
        Etat,
        MF

      );
  
      Soc.save()
      
        .then(() => {
        res.json({state: 'ok', msg: 'societe ajouté ajouté'})
       
        console.log("of ajouté",Soc)
      })
      .catch(err => console.log(err));
  };
 