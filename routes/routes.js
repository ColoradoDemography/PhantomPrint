"use strict";

var fs = require("fs");
var webshot = require('webshot');


var appRouter = function(app) {

    app.get("/screenshot", function(req, res) {

        var website = req.query.website || 'google.com';
        var filename = req.query.filename || 'file';
        var timer = req.query.timer || 5000; //5 sec default

        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Disposition': 'attachment; filename=' + filename + '.png'
        });

        var renderStream = webshot(website, {renderDelay: timer});

        renderStream.on('data', function(data) {
            res.write(data.toString('binary'), 'binary');
        });

        renderStream.on('end', function(data) {
            res.end();
        });

    });

}

module.exports = appRouter;