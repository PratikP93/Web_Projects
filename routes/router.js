const express = require('express')
const router = express.Router();

const contacts = require('./model/contact')

//list
router.get('/contacts',(req,res,next)=>{
contacts.find(function(err,contact){
    res.json(contacts)
})
})


//addcontact
router.get('/addcontact',(req,res,next)=>{
let newContact = new contacts ({
fname  : req.body.fname,
lname : req.body.lname,
number : req.body.number


});

newContact.save((err,contact)=>{
if(err){
    res.json({msg:"failed the contact add"})
}else{
    res.json({msg:"contact added successfully"})
}




});


})


router.delete('/contact.:id',(req,res,next)=>{
contacts.remove({_id:req.param.id},function(err,result){

    if(err){
        res.json(err)
    }else{

        res.json(result)
    }


})




})

module.exports=router