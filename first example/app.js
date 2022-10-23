"use strict";
exports.__esModule = true;
var userUtils;
(function (userUtils) {
    var User = /** @class */ (function () {
        function User() {
        }
        User.prototype.getName = function () {
            return "anil sidhu";
        };
        return User;
    }());
    userUtils.User = User;
})(userUtils || (userUtils = {}));
var u1 = new userUtils.User();
console.log(u1.getName);
