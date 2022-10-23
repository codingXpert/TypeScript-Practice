"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App() {
        this.name = "anil";
        console.log("constructor called");
    }
    App.prototype.getName = function () {
        console.log(this.name);
    };
    return App;
}());
var a1 = new App;
a1.getName();
