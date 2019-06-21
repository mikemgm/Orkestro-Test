const mongoose = require("mongoose");
const OrderSchema = require("../schema/order_schema");

const OrderModel = mongoose.model("order", OrderSchema);


module.exports = OrderModel;