// Dependencies
var express = require('express');
var path = require('path');

// Set up Express app
var app = express();

// Set up routes
module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
      console.log(path.dirname('/app/public/home.html'));
      
      app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
}
