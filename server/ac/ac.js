"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var url = "mongodb://ssiOffline:5510ff1in3@dev0-shard-00-00.aar2e.mongodb.net:27017/test?ssl=true&replicaSet=dev0-shard-0&authSource=admin&retryWrites=true&w=majority";
var collectionName = "geoCountCanada_20210526";
var dbName = "b2b";
var acModule = express.Router().get("/", function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db(dbName);
            db.collection(collectionName).find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
exports["default"] = acModule;
