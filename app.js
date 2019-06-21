const express = require("express");
const exphbs = require("express-handlebars"); 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const app = express(); 
const port = 3000; 


mongoose.connect("mongodb://127.0.0.1/orkestro_orders", { useNewUrlParser: true });
mongoose.Promise = global.Promise; 
mongoose.connection.on("error", err => console.log(err));

app.engine("handlebars", exphbs({ defaultLayout: "main" })); 
app.set("view engine", "handlebars"); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.use(require("./routes"));

app.listen(port, () => console.log(`Server is running on port ${port}`)); 
