const OrderModel = require("../database/models/order_model");

function newOrder(req, res) {
    res.render("orders/newOrder");
}

async function create(req, res) {
    let { id, status, pickUpTime, pickUpAddress, dropOffAddress } = req.body;
    let order = await OrderModel.create( { id, status, pickUpTime, pickUpAddress, dropOffAddress })
        .catch(err => res.status(500).send(err));

        res.redirect(`/orders/${order._id}`);
        
}

async function index(req, res) {
    let orders = await OrderModel.find();
    res.render("/", orders); 
}


async function show(req, res) {
    let { id } = req.params;
    let order = await OrderModel.findById(id);

    res.render("orders/show", {order}); 
}


function edit(req, res) {
}
function update(req, res) {
}
function destroy(req, res) {
} 


module.exports = {
    newOrder, 
    create, 
    index, 
    edit, 
    update, 
    show,
    destroy
}