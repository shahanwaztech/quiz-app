"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/result.tsx":
/*!***********************************!*\
  !*** ./src/components/result.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Result = (props)=>{\n    const correctAnswers = props.userAnswer.filter((answer)=>answer).length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Results:\"\n            }, void 0, false, {\n                fileName: \"E:\\\\quiz-app\\\\src\\\\components\\\\result.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"You Answered \",\n                    correctAnswers,\n                    \" out of \",\n                    props.questions.length,\n                    \" questions\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: props.resetQuiz,\n                        children: \"Click here to Retry\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\quiz-app\\\\src\\\\components\\\\result.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\quiz-app\\\\src\\\\components\\\\result.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: props.questions.map((q, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\".concat(props.userAnswer[index], \" ? text-red-500\"),\n                        children: [\n                            \"Q\",\n                            index + 1,\n                            \"  \",\n                            q.questions\n                        ]\n                    }, index, true, {\n                        fileName: \"E:\\\\quiz-app\\\\src\\\\components\\\\result.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\quiz-app\\\\src\\\\components\\\\result.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\quiz-app\\\\src\\\\components\\\\result.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Result;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Result);\nvar _c;\n$RefreshReg$(_c, \"Result\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jlc3VsdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFRMUIsTUFBTUMsU0FBOEIsQ0FBQ0M7SUFFakMsTUFBTUMsaUJBQWlCRCxNQUFNRSxVQUFVLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxTQUFnQkEsUUFBUUMsTUFBTTtJQUU5RSxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7b0JBQUU7b0JBQWNQO29CQUFlO29CQUFTRCxNQUFNUyxTQUFTLENBQUNKLE1BQU07b0JBQUM7a0NBQzVELDhEQUFDSzt3QkFBS0MsU0FBU1gsTUFBTVksU0FBUztrQ0FBRTs7Ozs7Ozs7Ozs7OzBCQUVwQyw4REFBQ047MEJBQ0lOLE1BQU1TLFNBQVMsQ0FBQ0ksR0FBRyxDQUFDLENBQUNDLEdBQU1DLHNCQUN4Qiw4REFBQ1A7d0JBQWNRLFdBQVcsR0FBMkIsT0FBeEJoQixNQUFNRSxVQUFVLENBQUNhLE1BQU0sRUFBQzs7NEJBQWtCOzRCQUFFQSxRQUFROzRCQUFFOzRCQUFHRCxFQUFFTCxTQUFTOzt1QkFBekZNOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzVCO0tBakJNaEI7QUFtQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcmVzdWx0LnRzeD8xMzY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wVHlwZXMge1xyXG4gICAgdXNlckFuc3dlcjogYW55XHJcbiAgICBxdWVzdGlvbnM6IGFueVxyXG4gICAgcmVzZXRRdWl6OiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IFJlc3VsdDogUmVhY3QuRkM8UHJvcFR5cGVzPiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXJzID0gcHJvcHMudXNlckFuc3dlci5maWx0ZXIoKGFuc3dlcjogYW55KSA9PiBhbnN3ZXIpLmxlbmd0aFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlJlc3VsdHM6PC9oMj5cclxuICAgICAgICAgICAgPHA+WW91IEFuc3dlcmVkIHtjb3JyZWN0QW5zd2Vyc30gb3V0IG9mIHtwcm9wcy5xdWVzdGlvbnMubGVuZ3RofSBxdWVzdGlvbnNcclxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3Byb3BzLnJlc2V0UXVpen0+Q2xpY2sgaGVyZSB0byBSZXRyeTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnF1ZXN0aW9ucy5tYXAoKHE6YW55LGluZGV4Om51bWJlcikgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgJHtwcm9wcy51c2VyQW5zd2VyW2luZGV4XX0gPyB0ZXh0LXJlZC01MDBgfT5Re2luZGV4ICsgMX0gIHtxLnF1ZXN0aW9uc308L3A+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVzdWx0IiwicHJvcHMiLCJjb3JyZWN0QW5zd2VycyIsInVzZXJBbnN3ZXIiLCJmaWx0ZXIiLCJhbnN3ZXIiLCJsZW5ndGgiLCJkaXYiLCJoMiIsInAiLCJxdWVzdGlvbnMiLCJzcGFuIiwib25DbGljayIsInJlc2V0UXVpeiIsIm1hcCIsInEiLCJpbmRleCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/result.tsx\n"));

/***/ })

});