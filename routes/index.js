const express = require("express"); 
const router = express.Router(); 
const orderRoutes = require("./order_routes.js");


router.use("/", orderRoutes);



module.exports = router;