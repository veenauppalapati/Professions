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
        // we are using db to get access to the models
        // name of the model we are going to use
        // method we are going to use in this case find all 
        // leave the object empty cuze we are not looking for anything specific 
        db.Profession.findAll({})
        //once it finsishes its task of finding all data
        // we will store that data into dbPost
        .then(function(dbPost){

        })
        
    });
};

//example to refer to
  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });