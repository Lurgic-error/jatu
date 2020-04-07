const mongoose= require("mongoose")
const schema= mongoose.Schema

const company=new schema({
    name:{
        type:String,
        required:true

    }
})

module.exports=mongoose.model('Company',company)