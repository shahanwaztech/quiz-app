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

/***/ "(app-pages-browser)/./src/components/qustions.tsx":
/*!*************************************!*\
  !*** ./src/components/qustions.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Questions = (props)=>{\n    const handleClick = (isCorrect)=>{\n        props.onAnswerClick(isCorrect);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[98%] mt-[10px] mx-[20px] md:mt-[20px]  p-[10px] md:p-[20px] border rounded-md flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-[18px] text-[#1A1A1A] text-center font-semibold\",\n                children: [\n                    \"Q\",\n                    props.currentQustion + 1,\n                    \") \",\n                    props.questions.questions\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\quiz-app\\\\src\\\\components\\\\qustions.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[100%] md:w-[80%] grid grid-cols-2  mx-auto gap-[20px] mt-[30px]\",\n                children: props.questions.answerOptions.map((options, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleClick(options.isCorrect),\n                        className: \"w-[100%] py-[35px] text-[#1A1A1A] text-[14px] font-semibold hover:shadow-md   hover:scale-105 transform transition-transform delay-150 rounded-md cursor-pointer bg-gray-100\",\n                        children: options.text\n                    }, index, false, {\n                        fileName: \"E:\\\\quiz-app\\\\src\\\\components\\\\qustions.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\quiz-app\\\\src\\\\components\\\\qustions.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\quiz-app\\\\src\\\\components\\\\qustions.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Questions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Questions);\nvar _c;\n$RefreshReg$(_c, \"Questions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3F1c3Rpb25zLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQWtCMUIsTUFBTUMsWUFBaUMsQ0FBQ0M7SUFFcEMsTUFBTUMsY0FBYyxDQUFDQztRQUNqQkYsTUFBTUcsYUFBYSxDQUFDRDtJQUN4QjtJQUVBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUF1RDtvQkFDL0RMLE1BQU1PLGNBQWMsR0FBRztvQkFBRTtvQkFBT1AsTUFBTVEsU0FBUyxDQUFDQSxTQUFTOzs7Ozs7OzBCQUUvRCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ1ZMLE1BQU1RLFNBQVMsQ0FBQ0MsYUFBYSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsU0FBd0JDLHNCQUN4RCw4REFBQ0M7d0JBRUdDLFNBQVMsSUFBTWIsWUFBWVUsUUFBUVQsU0FBUzt3QkFDNUNHLFdBQVU7a0NBR1RNLFFBQVFJLElBQUk7dUJBTFJIOzs7Ozs7Ozs7Ozs7Ozs7O0FBVzdCO0tBekJNYjtBQTJCTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9xdXN0aW9ucy50c3g/YTRmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIGFuc3dlck9wdGlvbnMge1xyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgaXNDb3JyZWN0OiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBxdWVzdGlvbnMge1xyXG4gICAgcXVlc3Rpb25zOiBzdHJpbmcsXHJcbiAgICBhbnN3ZXJPcHRpb25zOiBhbnN3ZXJPcHRpb25zW11cclxufVxyXG5cclxuaW50ZXJmYWNlIFByb3BUeXBlcyB7XHJcbiAgICBxdWVzdGlvbnM6IHF1ZXN0aW9ucyxcclxuICAgIGN1cnJlbnRRdXN0aW9uOiBudW1iZXIsXHJcbiAgICBvbkFuc3dlckNsaWNrOiAoaXNDb3JyZWN0OiBib29sZWFuKSA9PiB2b2lkLFxyXG59XHJcblxyXG5jb25zdCBRdWVzdGlvbnM6IFJlYWN0LkZDPFByb3BUeXBlcz4gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChpc0NvcnJlY3Q6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBwcm9wcy5vbkFuc3dlckNsaWNrKGlzQ29ycmVjdClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTglXSBtdC1bMTBweF0gbXgtWzIwcHhdIG1kOm10LVsyMHB4XSAgcC1bMTBweF0gbWQ6cC1bMjBweF0gYm9yZGVyIHJvdW5kZWQtbWQgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bMThweF0gdGV4dC1bIzFBMUExQV0gdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgUXtwcm9wcy5jdXJyZW50UXVzdGlvbiArIDF9JiM0MTsge3Byb3BzLnF1ZXN0aW9ucy5xdWVzdGlvbnN9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTAwJV0gbWQ6dy1bODAlXSBncmlkIGdyaWQtY29scy0yICBteC1hdXRvIGdhcC1bMjBweF0gbXQtWzMwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMucXVlc3Rpb25zLmFuc3dlck9wdGlvbnMubWFwKChvcHRpb25zOiBhbnN3ZXJPcHRpb25zLCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhvcHRpb25zLmlzQ29ycmVjdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzEwMCVdIHB5LVszNXB4XSB0ZXh0LVsjMUExQTFBXSB0ZXh0LVsxNHB4XSBmb250LXNlbWlib2xkIGhvdmVyOnNoYWRvdy1tZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpzY2FsZS0xMDUgdHJhbnNmb3JtIHRyYW5zaXRpb24tdHJhbnNmb3JtIGRlbGF5LTE1MCByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyIGJnLWdyYXktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9ucztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUXVlc3Rpb25zIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImlzQ29ycmVjdCIsIm9uQW5zd2VyQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImN1cnJlbnRRdXN0aW9uIiwicXVlc3Rpb25zIiwiYW5zd2VyT3B0aW9ucyIsIm1hcCIsIm9wdGlvbnMiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/qustions.tsx\n"));

/***/ })

});