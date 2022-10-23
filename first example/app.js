"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App(name) {
        this.name = name;
    }
    App.prototype.getName = function () {
        console.log(this.name);
    };
    return App;
}());
var a1 = new App("anil");
a1.getName();
