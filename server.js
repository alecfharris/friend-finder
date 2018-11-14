// Dependencies
var express = require('express');
var path = require('path');

// Set up Express app
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up Routes
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);
// htmlRoutes(app);
// apiRoutes(app);

// Sets up server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


