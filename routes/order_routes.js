const express = require("express"); 
const router = express.Router(); 
const OrderController = require("./../controllers/order_controller")


// router.get("/", (req, res) => res.send("works") );
router.get("/", OrderController.index );
router.post("/", OrderController.create);
router.get("/new", OrderController.newOrder);
router.get("/:id", OrderController.show);


module.exports = router;