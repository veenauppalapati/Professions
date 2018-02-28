// Requiring our User model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    //GET ROUTE
    //=========================================
    // get request 
    // listen to it via /professions
    // request coming from the client is stored in the parameter req
    // parameter res is there so we can send back a response to the client 
    app.get('/professions', function(req, res){
        // what is the purpose of this get request?
        // the purpose of it is to grab data from the database 
        // how do we grab data from database
        // we have to make a query to database
        // how do we make a query to database
        // we are using sequelize so we are going to make a query using sequelize documentation
        // for the purpose of finding id and occupation, we are going to use findAll method
        

    });
};