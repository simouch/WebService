const db =require("../db")



module.exports = class Soc{
    constructor(IDSociete, NomSociete,License,Logo,Adresse,PiedPage,EntetPage,Etat,MF) {
        this.IDSociete = IDSociete;
         this.NomSociete = NomSociete;
         this.License=License;
         this.Logo=Logo;
         this.Adresse=Adresse;
        this.PiedPage=PiedPage;
        this.EntetPage=EntetPage;
        this.Etat=Etat;
        this.MF =MF ;
       }

       save() {
        return db.execute(
          'INSERT INTO societe (IDSociete, NomSociete ,License,Logo,Adresse,Adresse,PiedPage,EntetPage,Etat,MF) VALUES (?, ?, ?, ?, ?, ? ,? ,? ,?)',
          [this.IDSociete, this.NomSociete,this.License ,this.Logo,this.Adresse, this.PiedPage ,this.Etat,this.MF]
        );
      }

}