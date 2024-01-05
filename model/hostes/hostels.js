const mongoose=require('../../config/db/db')


const sizes=new mongoose.Schema({
    size:{type:String,required:true},
    area:{type:Number,required:true},
    number:{type:Number,required:true},
    image:{type:String,required:true},
    rent:{type:Number,required:true}
})

const hostelType=new mongoose.Schema({
    type:{type:String,required:true},
    number:{type:Number,required:true},
    image:{type:String,required:true},
    size:[sizes]
})

const hostel=new  mongoose.Schema({
    name:{type:String,required:true},
    location:{type:String,required:true},
    landlordId:{type:String,required:true},
    waterSelfPay:{type:Boolean,required:true},
    electricitySelfPay:{type:Boolean,required:true},
    garbageSelfPay:{type:Boolean,required:true},
    beddingProvided:{type:Boolean,required:true},
    waterSources:[
        {
            source:{type:String,require:true}
        }
    ],
    internet:{type:Boolean,require:true},
    internetInRent:{type:Boolean,require:true},
    internetBill:{type:Number,required:true,default:0},
    hostels:[hostelType]
})

module.exports=mongoose.model('hostels',hostel);