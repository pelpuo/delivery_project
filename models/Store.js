const mongoose = require("mongoose")

const storeSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        min: 6,
        max:255
    },
    location:{
        type: String,
        required:true,
        max:255
    },
    latitude:{
        type: Number,
        required:true
    },
    longitude:{
        type: Number,
        required:true
    },
    image_url:{
        type: String,
        required:true
    },
    opening_time:{
        type: Date,
        required:true
    },
    closing_time:{
        type: Date,
        required:true
    },
    working_days:{
        type: Array,
        default: Date.now
    }

})

module.exports = mongoose.model("Store", storeSchema);