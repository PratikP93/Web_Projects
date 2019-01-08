//importing modules

var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');
var app = express();
var port = 3000;
const route = require('./routes/router');

app.get("/",(req,res)=>{
res.send("Response is sent from Express");
})


//establish connection
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connecting
mongoose.connection.on('connected',()=>{
console.log("connected to DB");
})


mongoose.connection.on('err',(err)=>{
if(err){

    console.log("error found"+err);
    
}
})
//routes
app.use('/api',route);


//middleware 
app.use(cors());

//parser
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')))

//listening port no
app.listen(port,()=>{
console.log("port 3000 pinged::::::");
})