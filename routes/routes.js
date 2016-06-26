"use strict";

var fs = require("fs");
var webshot = require('webshot');


var appRouter = function(app) {

    app.get("/screenshot", function(req, res) {

        var website = req.query.website;
        var filename = req.query.filename;

        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Disposition': 'attachment; filename=' + filename + '.png'
        });

        var renderStream = webshot(website);

        renderStream.on('data', function(data) {
            res.write(data.toString('binary'), 'binary');
        });

        renderStream.on('end', function(data) {
            res.end();
        });

    });

}

module.exports = appRouter;