"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.fetchData = exports.printFormat = exports.format = exports.addString = void 0;
// if you dont name the type of the function parameters, they will be 'any' type
function addNumbers(a, b) {
    return a + b;
}
exports.default = addNumbers;
var addString = function (str1, str2) {
    if (str2 === void 0) { str2 = ''; }
    return "".concat(str1, " ").concat(str2);
};
exports.addString = addString;
// untion type
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// void function
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// Promise function
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
// rest params
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(' '));
}
// undefined if no user param is added which is, in turn, converted to 'first'/'last'
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'first', " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : 'last');
}
exports.getName = getName;
