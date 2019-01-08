const mongoose = require('mongoose')


const contactschema= mongoose.Schema({
fname:{
    type : String,
required : true
},
lname:{
    type : String,
    required : true
},
number:{
    type : String,
required : true
}





})


const Contact = module.exports = mongoose.model('contact',contactschema)