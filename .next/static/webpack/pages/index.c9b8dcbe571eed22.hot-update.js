"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Movies/Movies.tsx":
/*!******************************************!*\
  !*** ./src/components/Movies/Movies.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Col,Container,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchBar/SearchBar */ \"./src/components/SearchBar/SearchBar.tsx\");\n/* harmony import */ var _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/card.module.scss */ \"./src/components/styles/card.module.scss\");\n/* harmony import */ var _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Movies = ()=>{\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [defaultMovies, setDefaultMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [clickedCardIndex, setClickedCardIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"18:37:45.616/movies\").then((response)=>{\n            setMovies(response.data.movies);\n            setDefaultMovies(response.data.movies);\n        }).catch((error)=>{\n            console.error(\"Error fetching movies:\", error);\n        });\n    }, []);\n    const handleSearch = (searchTerm)=>{\n        const filteredMovies = defaultMovies.filter((movie)=>movie.film_name.toLowerCase().includes(searchTerm.toLowerCase()));\n        setMovies(filteredMovies);\n    };\n    const handleSort = ()=>{\n        const sortedMovies = [\n            ...movies\n        ].sort((a, b)=>a.film_name.localeCompare(b.film_name));\n        setMovies(sortedMovies);\n    };\n    const handleClearSearch = ()=>{\n        setMovies(defaultMovies);\n    };\n    const handleCardClick = (index)=>{\n        setClickedCardIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleSearch: handleSearch,\n                handleSort: handleSort,\n                handleClearSearch: handleClearSearch\n            }, void 0, false, {\n                fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                xs: 1,\n                sm: 2,\n                md: 3,\n                lg: 4,\n                className: \"justify-content-center\",\n                children: movies.map((movie, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        className: `mb-4 animated fadeIn delay-${index + 1}s`,\n                        onClick: ()=>handleCardClick(index),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: `card ${(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card)} ${(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().animated)} ${(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().fadeIn)} ${(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().delay)}-${index + 1}s`,\n                            style: {\n                                position: \"relative\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: movie.film_image,\n                                    className: \"card-img-top\",\n                                    alt: movie.film_name\n                                }, void 0, false, {\n                                    fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, undefined),\n                                clickedCardIndex === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"position-absolute top-0 start-0 w-100 h-100 bg-overlay\",\n                                    style: {\n                                        zIndex: 1\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body bg-dark\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            className: \"card-title text-light\",\n                                            children: movie.film_name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"card-text text-light\",\n                                            children: movie.release_date\n                                        }, void 0, false, {\n                                            fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: movie.film_trailer,\n                                            className: \"btn btn-secondary\",\n                                            children: \"Watch Trailer\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: movie.film_trailer,\n                                            className: `${(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardbtn)} btn btn-secondary m-2`,\n                                            children: \"Watch Movie\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined)\n                    }, movie._id, false, {\n                        fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Movies, \"ZflIxkV4trptbco1DkewbqzoW5s=\");\n_c = Movies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0IsQ0FBQztzREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQVYvRW1CLE1BQU1zQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FBa0I3QjtHQS9ETXhEO0tBQUFBO0FBaUVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vdmllcy9Nb3ZpZXMudHN4P2VjOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL1NlYXJjaEJhci9TZWFyY2hCYXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY2FyZC5tb2R1bGUuc2Nzcyc7XG5cbmludGVyZmFjZSBNb3ZpZSB7XG4gIF9pZDogc3RyaW5nO1xuICBmaWxtX25hbWU6IHN0cmluZztcbiAgZmlsbV9pbWFnZTogc3RyaW5nO1xuICByZWxlYXNlX2RhdGU6IHN0cmluZztcbiAgZmlsbV90cmFpbGVyOiBzdHJpbmc7XG59XG5cbmNvbnN0IE1vdmllczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZTxNb3ZpZVtdPihbXSk7XG4gIGNvbnN0IFtkZWZhdWx0TW92aWVzLCBzZXREZWZhdWx0TW92aWVzXSA9IHVzZVN0YXRlPE1vdmllW10+KFtdKTtcbiAgY29uc3QgW2NsaWNrZWRDYXJkSW5kZXgsIHNldENsaWNrZWRDYXJkSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQ8eyBtb3ZpZXM6IE1vdmllW10gfT4oJzE4OjM3OjQ1LjYxNi9tb3ZpZXMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBzZXRNb3ZpZXMocmVzcG9uc2UuZGF0YS5tb3ZpZXMpO1xuICAgICAgICBzZXREZWZhdWx0TW92aWVzKHJlc3BvbnNlLmRhdGEubW92aWVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBtb3ZpZXM6JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoc2VhcmNoVGVybTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRNb3ZpZXMgPSBkZWZhdWx0TW92aWVzLmZpbHRlcihtb3ZpZSA9PlxuICAgICAgbW92aWUuZmlsbV9uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgc2V0TW92aWVzKGZpbHRlcmVkTW92aWVzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTb3J0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNvcnRlZE1vdmllcyA9IFsuLi5tb3ZpZXNdLnNvcnQoKGEsIGIpID0+IGEuZmlsbV9uYW1lLmxvY2FsZUNvbXBhcmUoYi5maWxtX25hbWUpKTtcbiAgICBzZXRNb3ZpZXMoc29ydGVkTW92aWVzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGVhclNlYXJjaCA9ICgpID0+IHtcbiAgICBzZXRNb3ZpZXMoZGVmYXVsdE1vdmllcyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2FyZENsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRDbGlja2VkQ2FyZEluZGV4KGluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8U2VhcmNoQmFyXG4gICAgICAgIGhhbmRsZVNlYXJjaD17aGFuZGxlU2VhcmNofVxuICAgICAgICBoYW5kbGVTb3J0PXtoYW5kbGVTb3J0fVxuICAgICAgICBoYW5kbGVDbGVhclNlYXJjaD17aGFuZGxlQ2xlYXJTZWFyY2h9XG4gICAgICAvPlxuICAgICAgPFJvdyB4cz17MX0gc209ezJ9IG1kPXszfSBsZz17NH0gY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICB7bW92aWVzLm1hcCgobW92aWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPENvbCBrZXk9e21vdmllLl9pZH0gY2xhc3NOYW1lPXtgbWItNCBhbmltYXRlZCBmYWRlSW4gZGVsYXktJHtpbmRleCArIDF9c2B9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhcmRDbGljayhpbmRleCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkICR7c3R5bGVzLmNhcmR9ICR7c3R5bGVzLmFuaW1hdGVkfSAke3N0eWxlcy5mYWRlSW59ICR7c3R5bGVzLmRlbGF5fS0ke2luZGV4ICsgMX1zYH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXttb3ZpZS5maWxtX2ltYWdlfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9e21vdmllLmZpbG1fbmFtZX0gLz5cbiAgICAgICAgICAgICAge2NsaWNrZWRDYXJkSW5kZXggPT09IGluZGV4ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0wIHN0YXJ0LTAgdy0xMDAgaC0xMDAgYmctb3ZlcmxheVwiIHN0eWxlPXt7IHpJbmRleDogMSB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmctZGFya1wiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtbGlnaHRcIj57bW92aWUuZmlsbV9uYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IHRleHQtbGlnaHRcIj57bW92aWUucmVsZWFzZV9kYXRlfTwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXttb3ZpZS5maWxtX3RyYWlsZXJ9IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+V2F0Y2ggVHJhaWxlcjwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXttb3ZpZS5maWxtX3RyYWlsZXJ9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmRidG59IGJ0biBidG4tc2Vjb25kYXJ5IG0tMmB9PldhdGNoIE1vdmllPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICApKX1cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJTZWFyY2hCYXIiLCJzdHlsZXMiLCJNb3ZpZXMiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJkZWZhdWx0TW92aWVzIiwic2V0RGVmYXVsdE1vdmllcyIsImNsaWNrZWRDYXJkSW5kZXgiLCJzZXRDbGlja2VkQ2FyZEluZGV4IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlU2VhcmNoIiwic2VhcmNoVGVybSIsImZpbHRlcmVkTW92aWVzIiwiZmlsdGVyIiwibW92aWUiLCJmaWxtX25hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlU29ydCIsInNvcnRlZE1vdmllcyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJoYW5kbGVDbGVhclNlYXJjaCIsImhhbmRsZUNhcmRDbGljayIsImluZGV4IiwieHMiLCJzbSIsIm1kIiwibGciLCJjbGFzc05hbWUiLCJtYXAiLCJvbkNsaWNrIiwiZGl2IiwiY2FyZCIsImFuaW1hdGVkIiwiZmFkZUluIiwiZGVsYXkiLCJzdHlsZSIsInBvc2l0aW9uIiwiaW1nIiwic3JjIiwiZmlsbV9pbWFnZSIsImFsdCIsInpJbmRleCIsImg1IiwicCIsInJlbGVhc2VfZGF0ZSIsImhyZWYiLCJmaWxtX3RyYWlsZXIiLCJjYXJkYnRuIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Movies/Movies.tsx\n"));

/***/ })

});