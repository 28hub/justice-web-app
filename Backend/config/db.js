// Importing Modules
const mongoose = require("mongoose");

const mongoDB_URL = "mongodb+srv://Jakariya:2741react1128@cluster0.6barff7.mongodb.net/legal_assist?retryWrites=true&w=majority";


// Creating Connection from MongoDB

const Connection = mongoose.connect(mongoDB_URL);

// Exporting Custom Module
module.exports = { Connection };