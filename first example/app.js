"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("Test function working");
    };
    return App;
}());
var a1 = new App();
a1.test();
//to run this app.ts file we need to type the following command in the terminal
//tsc .\app.ts
