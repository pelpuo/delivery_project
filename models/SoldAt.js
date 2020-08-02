const mongoose = require("mongoose")

const soldAtsSchema = new mongoose.Schema({

    store_id:{
        type: String,
        required:true,
        min: 6,
        max:255
    },
    item_id:{
        type: String,
        required:true,
        min: 6,
        max:255
    },
    price:{
        type: Number,
        required:true
    }

})

module.exports = mongoose.model("SoldAt", soldAtsSchema);