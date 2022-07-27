const db= require("../db")
module.exports= class OF{

constructor(IDOFabrication,OFAbrication,IDArticle,IDAr_Couleur){
    this.IDOFabrication=IDOFabrication;
    this.OFAbrication=OFAbrication;
    this.IDArticle =IDArticle;
    this.IDAr_Couleur=IDAr_Couleur ;
  };
async save(){
    let sql = 'INSERT INTO ofabrication (IDOFabrication,OFAbrication,IDArticle,IDAr_Couleur) VALUES (? , ?, ?, ?)';
    try {
        let conn = await db.getConnection();
        await conn.execute(sql,  [this.IDOFabrication,this.OFAbrication,this.IDArticle,this.IDAr_Couleur]);
        await conn.release();
    } catch (err) {
        console.log("erreur post",err);
    }



};
 static async updateOne(){
    let sql = 'UPDATE ofabrication SET OFAbrication = ?  WHERE IDOFabrication = ?';
    try {
        let conn = await db.getConnection();
        await conn.execute(sql, [this.OFAbrication,this.IDOFabrication]);
        await conn.release();
    } catch (err) {
        console.log("erreur update",err);
    }
};
static getALL(){
    return db.execute('SELECT * FROM ofabrication')
};
static findById(IDOFabrication) {
    return db.execute('SELECT * FROM ofabrication WHERE ofabrication.IDOFabrication = ?', [IDOFabrication]);
  };
static deleteOF(IDOFabrication){
    return db.execute('DELETE FROM ofabrication WHERE ofabrication.IDOFabrication=?',[IDOFabrication])
};
// static async addArticle(IDArticle){
//     let sql = 'INSERT INTO article (IDOFabrication,OFAbrication) VALUES (? , ?)';
//     try {
//         let conn = await db.getConnection();
//         await conn.execute(sql,  [this.IDOFabrication,this.OFAbrication]);
//         await conn.release();
//     } catch (err) {
//         console.log("erreur post",err);
//     }
// }

};
