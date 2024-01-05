const mongoose=require('../../../config/db/db')

const tenants=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    idNumber:{type:String,required:true},
    email:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    tenantId:{type:Number,required:true},
    studentState:{type:Boolean,required:true},
    emergencyContact:{
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        email:{type:String,required:true},
        phoneNumber:{type:String,required:true},
    },
    password:{type:String,required:true}
})

module.exports=mongoose.model('tenants',tenants)