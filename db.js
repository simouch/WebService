const mysql= require("mysql2")

const db =mysql.createPool({

host:"192.168.1.250",
user: "diva",
password: "diva",
port :3308,
database:"djo"


})


module.exports= db.promise();