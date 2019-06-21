const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const OrderSchema = new Schema( {
    // id: {
    //     type: String,
    //     required: true
    // }, 
    status: {
        type: String,
        enum: ["Pending", "In Transit", "Delivered", "Rejected"],
    },
    pickUpTime: {
        type: String,
        required: true 
    },
    pickUpAddress: {
        type: String, 
        required: true
    },
    dropOffAddress: {
        type: String,
        required: true
    }

});

module.exports = OrderSchema; 