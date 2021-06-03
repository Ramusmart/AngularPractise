"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var vm_1 = require("./vm/vm");
var ac_1 = require("./ac/ac");
var app = express();
app.use(cors());
app.use("/ac", ac_1["default"]);
app.use("/vm", vm_1["default"]);
var port = process.env.PORT || 8090;
app.listen(port, function () {
    console.log("server started... ");
});
