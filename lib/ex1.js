"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var a = 'uno dos tres';
var b = process.env.WEB_PORT;
var arg = process.argv[2];
console.log("@@ ".concat(a, "\n").concat(b, "\n").concat(arg, "\n").concat(__dirname, "\n").concat(__filename));
