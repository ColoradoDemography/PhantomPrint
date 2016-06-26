"use strict";

var fs = require("fs");
var webshot = require('webshot');


var appRouter = function(app) {

    app.get("/place", function(req, res) {
      
      webshot('google.com', 'temp/google.png', function(err) {
        // screenshot now saved to google.png
      });
      
      res.end('saved!');
    });

}

module.exports = appRouter;