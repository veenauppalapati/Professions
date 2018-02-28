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
        // for the purpose of finding id and occupation, we are going to use findAll method
        //Example
        Model.findAll({
            attributes: ['foo', 'bar']
          });
        
    });
};