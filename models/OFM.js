const db= require("../db")
module.exports= class OF{

constructor(IDOFabrication,OFAbrication){
    this.IDOFabrication=IDOFabrication;
    this.OFAbrication=OFAbrication;
  };
async save(){
    let sql = 'INSERT INTO ofabrication (IDOFabrication,OFAbrication) VALUES (? , ?)';
    try {
        let conn = await db.getConnection();
        await conn.execute(sql,  [this.IDOFabrication,this.OFAbrication]);
        await conn.release();
    } catch (err) {
        console.log("erreur post",err);
    }



};
 static async updateOne(){

    let sql = 'UPDATE ofabrication SET OFAbrication = ?  WHERE ofabrication.IDOFabrication = ?';
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
}


};
