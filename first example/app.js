"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App(name) {
        this.name = "anil";
        this.name = name;
    }
    App.prototype.getName = function () {
        return this.name;
    };
    return App;
}());
var a1 = new App("petter");
console.log(a1.getName());
