const express = require('express')
const model = express();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        required: true,
    },

    laptops: {
        laptops: [{ laptopId: ObjectId, laptopCount: Number }],
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    },
    bill: {
        type: Number,
    }
})

laptopSchema.statics.placeOrder = (data, cb) => {
    let newOrder = new Order({
        userId: data.userId,
        laptops: data.laptops,
        mobile: data.mobile,
        address: data.address,
        returndDate: data.returnDate,
        bill: data.bill
    })

    newOrder.save().then(result=>{
        cb(null,result);
    }).catch(err=>{
        cb(err,null);
    })
}
module.exports = Order = mongoose.model('order', orderSchema);