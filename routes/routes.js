"use strict";

var fs = require("fs");
var webshot = require('webshot');


var appRouter = function(app) {

    app.get("/screenshot", function(req, res) {
  
      var website = req.query.website;
      var filename = req.query.filename;
      
      webshot(website, 'temp/' + filename + '.png', function(err) {
        res.end('Saved ' + website + ' as ' + filename + '.png');        
      });
      
    });

}

module.exports = appRouter;