"use strict";
exports.__esModule = true;
// export{}; // export is used to solve duplicate identifier issue
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
var teacher = new Teacher_1["default"]();
console.log(teacher.data);
var student = new Student_1["default"]();
console.log(student.data);
