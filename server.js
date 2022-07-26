const express = require("express")

const bodyParser =require("body-parser")


const db= require("./db")


const app= express()
PORT=4000
const OFR =require("./routes/OFR")



app.use(bodyParser.urlencoded({extended:false}))
app.use('/of',OFR)

app.listen(PORT,()=>{
console.log(`listening in ${PORT}...`);

})

