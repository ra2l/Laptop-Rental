const express = require('express')
const model = express();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

const laptopSchema=new mongoose.Schema({
    Brand: String,
    Model: String,
    Screen: String,
    Processor: String,
    Ram: String,
    SSD: String,
    HDD: String,
    GPU: String,
    stock: Number,
    isBooked: Boolean,
    isRented: Boolean,
    rentPerDay: Number,
    totalIncome: {
        type:Number,
        default:0,
    },
    rentedAmount: {
        type:Number,
        default:0
    },
    isAvailable: {
        type:Boolean,
        default: true
    }
});


laptopSchema.statics.insertLaptop = (data, cb) => {
    let newLaptop = new Laptop({
        Brand:data.Brand,
        Model:data.Model,
        Screen:data.Screen,
        Processor:data.Processor,
        Ram:data.Ram,
        SSD:data.SSD,
        HDD:data.HDD,
        GPU:data.GPU,
        stock:data.stock,
        isBooked:data.isBooked,
        isRented:data.isRented,
        rentPerDay:data.rentPerDay,
        totalincome:data.totalincome
    })
    newLaptop.save().then(result =>{
        cb(null, result);
    }).catch(err =>{
        cb(err, null);
    })
}

laptopSchema.statics.showLaptops=(cb)=>{
    Laptop.find().then(result=>{
        cb(null,result);
    }).catch(err=>{
        cb(err,null);
    })
}

laptopSchema.statics.showLaptopById=(id,cb)=>{
    Laptop.findById(id).then(result=>{
        cb(null,result);
    }).catch(err=>{
        cb(err,null);
    })
}

laptopSchema.statics.editLaptop=(id,data,cb)=>{
    let _id=new ObjectId(id);
    
    Laptop.findOneAndUpdate({_id:_id},data,{new:true},(err,result)=>{
        if(result) cb(null,result);
        else cb(err,null);
    })
}

laptopSchema.statics.deleteLaptop=(id,cb)=>{
    let _id=new ObjectId(id);
    Laptop.deleteOne({_id:_id}).then(result=>{
        cb(null,result);
    }).catch(err=>{
        cb(err,null);
    })
}

laptopSchema.statics.filteredLaptops=(data,cb)=>{
    Laptop.find(data).then(result=>{
        cb(null,result);
    }).catch(err=>{
        cb(err,null);
    })
}

laptopSchema.statics.makeRent=(id,data,cb)=>{
    let _id=new ObjectId(id);

    
    Laptop.findById(id).then(res=>{
       //console.log(result);
        if(data.lapCount>res.stock){
            cb({msg:"Stock not available"},null);
            return;
        }
        Laptop.findOneAndUpdate({_id:_id},
                                {
                                stock:res.stock-data.lapCount,
                                rentedAmount:res.rentedAmount+parseInt(data.lapCount),
                                totalIncome:res.totalIncome+data.lapCount*res.rentPerDay*data.rentDayCount},
                                
                                {new:true},(err,result)=>{
            if(result) cb(null,result);
            else cb(err,null);
        })

    }).catch(err=>{

        console.log(err);
    })
    
}


module.exports =  Laptop =mongoose.model('laptops',laptopSchema);
