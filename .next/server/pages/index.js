"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/dtjones/VSCode/solo-scratch/pages/index.js";

function Index({
  posts
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: posts.map(({
      message,
      created_at,
      created_by
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: created_at
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: created_by
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
async function getStaticProps() {
  const res = await fetch(`http://codesmith-chat-server.herokuapp.com:80/catpics`);
  const posts = await res.json();
  return {
    props: {
      posts
    }
  };
}

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQTtBQUFGLENBQWYsRUFBMEI7QUFDdkMsc0JBQ0U7QUFBQSxjQUNHQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxDQUFDO0FBQUVDLE1BQUFBLE9BQUY7QUFBV0MsTUFBQUEsVUFBWDtBQUF1QkMsTUFBQUE7QUFBdkIsS0FBRCxrQkFDVDtBQUFBLDhCQUNFO0FBQUEsa0JBQU1GO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBTUM7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFBLGtCQUFNQztBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEO0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUNwQix1REFEb0IsQ0FBdkI7QUFHQSxRQUFNUCxLQUFLLEdBQUcsTUFBTU0sR0FBRyxDQUFDRSxJQUFKLEVBQXBCO0FBQ0EsU0FBTztBQUNMQyxJQUFBQSxLQUFLLEVBQUU7QUFBRVQsTUFBQUE7QUFBRjtBQURGLEdBQVA7QUFHRDs7Ozs7Ozs7OztBQ3RCRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbG8tc2NyYXRjaC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3NvbG8tc2NyYXRjaC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgcG9zdHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cG9zdHMubWFwKCh7IG1lc3NhZ2UsIGNyZWF0ZWRfYXQsIGNyZWF0ZWRfYnkgfSkgPT4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgPGRpdj57Y3JlYXRlZF9hdH08L2Rpdj5cbiAgICAgICAgICA8ZGl2PntjcmVhdGVkX2J5fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vY29kZXNtaXRoLWNoYXQtc2VydmVyLmhlcm9rdWFwcC5jb206ODAvY2F0cGljc2BcbiAgKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHBvc3RzIH0sXG4gIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkluZGV4IiwicG9zdHMiLCJtYXAiLCJtZXNzYWdlIiwiY3JlYXRlZF9hdCIsImNyZWF0ZWRfYnkiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==