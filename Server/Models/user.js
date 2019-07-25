const express = require('express')
const model = express();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength:5,
        maxlength: 50
    },

    email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:250,
        unique:true
    },

    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024
    }

})


userSchema.statics.insertUser = (data, cb) => {

    let newUser = new User({
        name:data.name,
        email:data.email,
        password:data.password
    })
    newUser.save().then(result =>{
        cb(null, result);
    }).catch(err =>{
        cb(err, null);
    })
}

userSchema.statics.showUsers=(cb)=>{
    User.find().then(result=>{
        cb(null,result);
    }).catch(err=>{
        cb(err,null);
    })
}

userSchema.statics.showUserById=(id,cb)=>{
    User.findById(id).then(result=>{
        cb(null,result);
    }).catch(err=>{
        cb(err,null);
    })
}

userSchema.statics.editUser=(id,data,cb)=>{
    let _id=new ObjectId(id);
    
    User.findOneAndUpdate({_id:_id},data,{new:true},(err,result)=>{
        if(result) cb(null,result);
        else cb(err,null);
    })
}

userSchema.statics.deleteUser=(id,cb)=>{
    let _id=new ObjectId(id);
    User.deleteOne({_id:_id}).then(result=>{
        cb(null,result);
    }).catch(err=>{
        cb(err,null);
    })
}

module.exports =  User =mongoose.model('user',userSchema);