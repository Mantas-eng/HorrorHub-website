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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Col,Container,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchBar/SearchBar */ \"./src/components/SearchBar/SearchBar.tsx\");\n/* harmony import */ var _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/card.module.scss */ \"./src/components/styles/card.module.scss\");\n/* harmony import */ var _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Movies = ()=>{\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [defaultMovies, setDefaultMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [clickedCardIndex, setClickedCardIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://horror-hub-website.vercel.app\").then((response)=>{\n            setMovies(response.data.movies);\n            setDefaultMovies(response.data.movies);\n        }).catch((error)=>{\n            console.error(\"Error fetching movies:\", error);\n        });\n    }, []);\n    const handleSearch = (searchTerm)=>{\n        const filteredMovies = defaultMovies.filter((movie)=>movie.film_name.toLowerCase().includes(searchTerm.toLowerCase()));\n        setMovies(filteredMovies);\n    };\n    const handleSort = ()=>{\n        const sortedMovies = [\n            ...movies\n        ].sort((a, b)=>a.film_name.localeCompare(b.film_name));\n        setMovies(sortedMovies);\n    };\n    const handleClearSearch = ()=>{\n        setMovies(defaultMovies);\n    };\n    const handleCardClick = (index1)=>{\n        setClickedCardIndex(index1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleSearch: handleSearch,\n                handleSort: handleSort,\n                handleClearSearch: handleClearSearch\n            }, void 0, false, {\n                fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                xs: 1,\n                sm: 2,\n                md: 3,\n                lg: 4,\n                className: \"justify-content-center\",\n                children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        className: `mb-4 animated fadeIn delay-${index + 1}s`,\n                        onClick: ()=>handleCardClick(index),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: `card ${(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card)} ${(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().animated)} ${(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().fadeIn)} ${(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().delay)}-${index + 1}s`,\n                            style: {\n                                position: \"relative\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: movie.film_image,\n                                    className: \"card-img-top\",\n                                    alt: movie.film_name\n                                }, void 0, false, {\n                                    fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, undefined),\n                                clickedCardIndex === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"position-absolute top-0 start-0 w-100 h-100 bg-overlay\",\n                                    style: {\n                                        zIndex: 1\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body bg-dark\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            className: \"card-title text-light\",\n                                            children: movie.film_name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"card-text text-light\",\n                                            children: movie.release_date\n                                        }, void 0, false, {\n                                            fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: movie.film_trailer,\n                                            className: \"btn btn-secondary\",\n                                            children: \"Watch Trailer\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: movie.film_trailer,\n                                            className: `${(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardbtn)} btn btn-secondary m-2`,\n                                            children: \"Watch Movie\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined)\n                    }, movie._id, false, {\n                        fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/MANTAS/Desktop/HorrorHub-Website/src/components/Movies/Movies.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Movies, \"ZflIxkV4trptbco1DkewbqzoW5s=\");\n_c = Movies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb3ZpZXMvTW92aWVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDNEI7QUFDUDtBQUNDO0FBVWhELE1BQU1TLFNBQW1COztJQUN2QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQVUsRUFBRTtJQUNoRCxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBVSxFQUFFO0lBQzlELE1BQU0sQ0FBQ2Esa0JBQWtCQyxvQkFBb0IsR0FBR2QsK0NBQVFBLENBQWdCO0lBRXhFQyxnREFBU0EsQ0FBQztRQUNSQyxpREFBUyxDQUFzQix5Q0FDNUJjLElBQUksQ0FBQ0MsQ0FBQUE7WUFDSlAsVUFBVU8sU0FBU0MsSUFBSSxDQUFDVCxNQUFNO1lBQzlCRyxpQkFBaUJLLFNBQVNDLElBQUksQ0FBQ1QsTUFBTTtRQUN2QyxHQUNDVSxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1FBQzFDO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUUsZUFBZSxDQUFDQztRQUNwQixNQUFNQyxpQkFBaUJiLGNBQWNjLE1BQU0sQ0FBQ0MsQ0FBQUEsUUFDMUNBLE1BQU1DLFNBQVMsQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNOLFdBQVdLLFdBQVc7UUFFL0RsQixVQUFVYztJQUNaO0lBRUEsTUFBTU0sYUFBYTtRQUNqQixNQUFNQyxlQUFlO2VBQUl0QjtTQUFPLENBQUN1QixJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRU4sU0FBUyxDQUFDUSxhQUFhLENBQUNELEVBQUVQLFNBQVM7UUFDckZqQixVQUFVcUI7SUFDWjtJQUVBLE1BQU1LLG9CQUFvQjtRQUN4QjFCLFVBQVVDO0lBQ1o7SUFFQSxNQUFNMEIsa0JBQWtCLENBQUNDO1FBQ3ZCeEIsb0JBQW9Cd0I7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ25DLCtGQUFTQTs7MEJBQ1IsOERBQUNHLDREQUFTQTtnQkFDUmdCLGNBQWNBO2dCQUNkUSxZQUFZQTtnQkFDWk0sbUJBQW1CQTs7Ozs7OzBCQUVyQiw4REFBQ2hDLHlGQUFHQTtnQkFBQ21DLElBQUk7Z0JBQUdDLElBQUk7Z0JBQUdDLElBQUk7Z0JBQUdDLElBQUk7Z0JBQUdDLFdBQVU7MEJBQ3hDbEMsT0FBT21DLEdBQUcsQ0FBQyxDQUFDbEIsc0JBQ1gsOERBQUNyQix5RkFBR0E7d0JBQWlCc0MsV0FBVyxDQUFDLDJCQUEyQixFQUFFTCxRQUFRLEVBQUUsQ0FBQyxDQUFDO3dCQUFFTyxTQUFTLElBQU1SLGdCQUFnQkM7a0NBQ3pHLDRFQUFDUTs0QkFBSUgsV0FBVyxDQUFDLEtBQUssRUFBRXBDLHNFQUFXLENBQUMsQ0FBQyxFQUFFQSwwRUFBZSxDQUFDLENBQUMsRUFBRUEsd0VBQWEsQ0FBQyxDQUFDLEVBQUVBLHVFQUFZLENBQUMsQ0FBQyxFQUFFK0IsUUFBUSxFQUFFLENBQUMsQ0FBQzs0QkFBRWEsT0FBTztnQ0FBRUMsVUFBVTs0QkFBVzs7OENBQ3JJLDhEQUFDQztvQ0FBSUMsS0FBSzVCLE1BQU02QixVQUFVO29DQUFFWixXQUFVO29DQUFlYSxLQUFLOUIsTUFBTUMsU0FBUzs7Ozs7O2dDQUN4RWQscUJBQXFCeUIsdUJBQ3BCLDhEQUFDUTtvQ0FBSUgsV0FBVTtvQ0FBeURRLE9BQU87d0NBQUVNLFFBQVE7b0NBQUU7Ozs7Ozs4Q0FFN0YsOERBQUNYO29DQUFJSCxXQUFVOztzREFDYiw4REFBQ2U7NENBQUdmLFdBQVU7c0RBQXlCakIsTUFBTUMsU0FBUzs7Ozs7O3NEQUN0RCw4REFBQ2dDOzRDQUFFaEIsV0FBVTtzREFBd0JqQixNQUFNa0MsWUFBWTs7Ozs7O3NEQUN2RCw4REFBQzNCOzRDQUFFNEIsTUFBTW5DLE1BQU1vQyxZQUFZOzRDQUFFbkIsV0FBVTtzREFBb0I7Ozs7OztzREFDM0QsOERBQUNWOzRDQUFFNEIsTUFBTW5DLE1BQU1vQyxZQUFZOzRDQUFFbkIsV0FBVyxDQUFDLEVBQUVwQyx5RUFBYyxDQUFDLHNCQUFzQixDQUFDO3NEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBVi9FbUIsTUFBTXNDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQjdCO0dBL0RNeEQ7S0FBQUE7QUFpRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzL01vdmllcy50c3g/ZWM4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vU2VhcmNoQmFyL1NlYXJjaEJhcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jYXJkLm1vZHVsZS5zY3NzJztcblxuaW50ZXJmYWNlIE1vdmllIHtcbiAgX2lkOiBzdHJpbmc7XG4gIGZpbG1fbmFtZTogc3RyaW5nO1xuICBmaWxtX2ltYWdlOiBzdHJpbmc7XG4gIHJlbGVhc2VfZGF0ZTogc3RyaW5nO1xuICBmaWxtX3RyYWlsZXI6IHN0cmluZztcbn1cblxuY29uc3QgTW92aWVzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlPE1vdmllW10+KFtdKTtcbiAgY29uc3QgW2RlZmF1bHRNb3ZpZXMsIHNldERlZmF1bHRNb3ZpZXNdID0gdXNlU3RhdGU8TW92aWVbXT4oW10pO1xuICBjb25zdCBbY2xpY2tlZENhcmRJbmRleCwgc2V0Q2xpY2tlZENhcmRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldDx7IG1vdmllczogTW92aWVbXSB9PignaHR0cHM6Ly9ob3Jyb3ItaHViLXdlYnNpdGUudmVyY2VsLmFwcCcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNldE1vdmllcyhyZXNwb25zZS5kYXRhLm1vdmllcyk7XG4gICAgICAgIHNldERlZmF1bHRNb3ZpZXMocmVzcG9uc2UuZGF0YS5tb3ZpZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG1vdmllczonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChzZWFyY2hUZXJtOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZE1vdmllcyA9IGRlZmF1bHRNb3ZpZXMuZmlsdGVyKG1vdmllID0+XG4gICAgICBtb3ZpZS5maWxtX25hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICBzZXRNb3ZpZXMoZmlsdGVyZWRNb3ZpZXMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNvcnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc29ydGVkTW92aWVzID0gWy4uLm1vdmllc10uc29ydCgoYSwgYikgPT4gYS5maWxtX25hbWUubG9jYWxlQ29tcGFyZShiLmZpbG1fbmFtZSkpO1xuICAgIHNldE1vdmllcyhzb3J0ZWRNb3ZpZXMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsZWFyU2VhcmNoID0gKCkgPT4ge1xuICAgIHNldE1vdmllcyhkZWZhdWx0TW92aWVzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHNldENsaWNrZWRDYXJkSW5kZXgoaW5kZXgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTZWFyY2hCYXJcbiAgICAgICAgaGFuZGxlU2VhcmNoPXtoYW5kbGVTZWFyY2h9XG4gICAgICAgIGhhbmRsZVNvcnQ9e2hhbmRsZVNvcnR9XG4gICAgICAgIGhhbmRsZUNsZWFyU2VhcmNoPXtoYW5kbGVDbGVhclNlYXJjaH1cbiAgICAgIC8+XG4gICAgICA8Um93IHhzPXsxfSBzbT17Mn0gbWQ9ezN9IGxnPXs0fSBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIHttb3ZpZXMubWFwKChtb3ZpZSkgPT4gKFxuICAgICAgICAgIDxDb2wga2V5PXttb3ZpZS5faWR9IGNsYXNzTmFtZT17YG1iLTQgYW5pbWF0ZWQgZmFkZUluIGRlbGF5LSR7aW5kZXggKyAxfXNgfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXJkQ2xpY2soaW5kZXgpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZCAke3N0eWxlcy5jYXJkfSAke3N0eWxlcy5hbmltYXRlZH0gJHtzdHlsZXMuZmFkZUlufSAke3N0eWxlcy5kZWxheX0tJHtpbmRleCArIDF9c2B9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17bW92aWUuZmlsbV9pbWFnZX0gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PXttb3ZpZS5maWxtX25hbWV9IC8+XG4gICAgICAgICAgICAgIHtjbGlja2VkQ2FyZEluZGV4ID09PSBpbmRleCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCBzdGFydC0wIHctMTAwIGgtMTAwIGJnLW92ZXJsYXlcIiBzdHlsZT17eyB6SW5kZXg6IDEgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJnLWRhcmtcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LWxpZ2h0XCI+e21vdmllLmZpbG1fbmFtZX08L2g1PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCB0ZXh0LWxpZ2h0XCI+e21vdmllLnJlbGVhc2VfZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bW92aWUuZmlsbV90cmFpbGVyfSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPldhdGNoIFRyYWlsZXI8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bW92aWUuZmlsbV90cmFpbGVyfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXJkYnRufSBidG4gYnRuLXNlY29uZGFyeSBtLTJgfT5XYXRjaCBNb3ZpZTwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSl9XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiU2VhcmNoQmFyIiwic3R5bGVzIiwiTW92aWVzIiwibW92aWVzIiwic2V0TW92aWVzIiwiZGVmYXVsdE1vdmllcyIsInNldERlZmF1bHRNb3ZpZXMiLCJjbGlja2VkQ2FyZEluZGV4Iiwic2V0Q2xpY2tlZENhcmRJbmRleCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVNlYXJjaCIsInNlYXJjaFRlcm0iLCJmaWx0ZXJlZE1vdmllcyIsImZpbHRlciIsIm1vdmllIiwiZmlsbV9uYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImhhbmRsZVNvcnQiLCJzb3J0ZWRNb3ZpZXMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiaGFuZGxlQ2xlYXJTZWFyY2giLCJoYW5kbGVDYXJkQ2xpY2siLCJpbmRleCIsInhzIiwic20iLCJtZCIsImxnIiwiY2xhc3NOYW1lIiwibWFwIiwib25DbGljayIsImRpdiIsImNhcmQiLCJhbmltYXRlZCIsImZhZGVJbiIsImRlbGF5Iiwic3R5bGUiLCJwb3NpdGlvbiIsImltZyIsInNyYyIsImZpbG1faW1hZ2UiLCJhbHQiLCJ6SW5kZXgiLCJoNSIsInAiLCJyZWxlYXNlX2RhdGUiLCJocmVmIiwiZmlsbV90cmFpbGVyIiwiY2FyZGJ0biIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Movies/Movies.tsx\n"));

/***/ })

});