/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".field {\\r\\n  margin: 0 auto;\\r\\n  margin-top: 50px;\\r\\n  \\r\\n  background-color: rgba(40, 59, 79, 0.867);\\r\\n  color: whitesmoke;\\r\\n  border-radius: 10px;\\r\\n  border: 7px solid rgba(32, 46, 60, 0.867);\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.field-row {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.field-key {\\r\\n  box-sizing: border-box;\\r\\n  background-color: rgba(28, 39, 51, 0.867);\\r\\n  border-radius: 3px;\\r\\n  border: 2px solid rgba(101, 131, 161, 0.867);\\r\\n\\r\\n  text-align: center;\\r\\n  transition: 0.2s ease-in-out all;\\r\\n}\\r\\n\\r\\n.field-key.opened {\\r\\n  background-color: rgba(101, 131, 161, 0.867);\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.pop-up {\\r\\n  position: fixed;\\r\\n  z-index: 1;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n}\\r\\n\\r\\n.pop-up-content {\\r\\n  background-color: white;\\r\\n  margin: 10% auto;\\r\\n  padding: 20px;\\r\\n  border: 1px solid #888888;\\r\\n  width: 30%;\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n.pop-up-content button {\\r\\n  display: block;\\r\\n  margin: 0 auto;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://minesweeper/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _js_generate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/generate.js */ \"./src/js/generate.js\");\n/* harmony import */ var _js_logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/logic.js */ \"./src/js/logic.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://minesweeper/./src/index.js?");

/***/ }),

/***/ "./src/js/generate.js":
/*!****************************!*\
  !*** ./src/js/generate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   chosenLevel: () => (/* binding */ chosenLevel),\n/* harmony export */   numberMines: () => (/* binding */ numberMines),\n/* harmony export */   params: () => (/* binding */ params)\n/* harmony export */ });\nlet sizeField = 400; //px\r\nlet chosenLevel = 'Easy';\r\nlet numberMines = 10;\r\n\r\nconst params = {\r\n    'Easy': {\r\n        sizeX: 10,\r\n        sizeY: 10\r\n    },\r\n    'Medium': {\r\n        sizeX: 15,\r\n        sizeY: 15\r\n    },\r\n    'Hard': {\r\n        sizeX: 25,\r\n        sizeY: 25\r\n    }\r\n}\r\n\r\nfunction init() {\r\n    let body = document.querySelector('body');\r\n    body.innerHTML += '<div class=\"container\"></div>';\r\n    let container = document.querySelector('.container');\r\n    container.innerHTML += '<div class=\"info\"></div>';\r\n    container.innerHTML += `<div class=\"field\" style=\"width: ${sizeField}px; height: ${sizeField}px;\"></div>`;\r\n    container.innerHTML += '<div class=\"tools\"></div>';\r\n    container.innerHTML += '<div class=\"pop-up\"></div>';\r\n\r\n    //field\r\n    let field = document.querySelector('.field');\r\n    drawField(field);\r\n\r\n    //info\r\n    let info = document.querySelector('.info');\r\n    info.innerHTML += '<h2>Flags</h2>';\r\n    info.innerHTML += `<div>used: <span class=\"number-used\">0</span></div>`;\r\n    info.innerHTML += `<div>remained: <span class=\"number-remained\">10</span</div>`;\r\n\r\n    //time\r\n    let tools = document.querySelector('.tools');\r\n    tools.innerHTML += '<div class=\"tools-timer\">Timer</div>';\r\n\r\n    //level\r\n    tools.innerHTML += '<div class=\"tools-choose-level\"></div>';\r\n    let levelChecker = document.querySelector('.tools-choose-level');\r\n    createCheckBox(levelChecker);\r\n    \r\n    //number of mines\r\n    tools.innerHTML += '<div class=\"tools-choose-mines\"></div>';\r\n    let minesChecker = document.querySelector('.tools-choose-mines');\r\n    createInput(minesChecker);\r\n\r\n    //pop-up\r\n    let popUp = document.querySelector('.pop-up');\r\n    popUp.classList.add('hidden');\r\n    popUp.innerHTML += '<div class=\"pop-up-content\"></div>';\r\n\r\n    let popUpCont = document.querySelector('.pop-up-content');\r\n    popUpCont.innerHTML += '<h1 class=\"game-over\">Game Over!</h1>';\r\n    popUpCont.innerHTML += '<h1 class=\"lost hidden\">You lost!</h1>';\r\n    popUpCont.innerHTML += '<button class=\"tools-btn-apply pop-up-btn\">New Game</button>';\r\n    \r\n    tools.innerHTML += '<div><button class=\"tools-btn-apply\">Apply</button></div>';\r\n    document.getElementById('check-level-0').checked = true;\r\n}\r\n\r\nfunction createCheckBox(parent) {\r\n    for (let i = 0; i < 3; i++) {\r\n        let checkbox = document.createElement('input');\r\n        checkbox.type = 'radio';\r\n        checkbox.name = 'level';\r\n        checkbox.id = 'check-level-' + i;\r\n        let label = document.createElement('label');\r\n        let tn;\r\n        if (i === 0) tn = document.createTextNode('Easy');\r\n        if (i === 1) tn = document.createTextNode('Medium');\r\n        if (i === 2) tn = document.createTextNode('Hard');\r\n        label.htmlFor = checkbox.id;\r\n        label.appendChild(tn);\r\n        parent.appendChild(label);\r\n        parent.appendChild(checkbox);\r\n    }\r\n}\r\n\r\nfunction createInput(parent){\r\n    let textArea = document.createElement('input');\r\n    textArea.type = 'text';\r\n    textArea.name = 'mines';\r\n    textArea.id = 'input-mines';\r\n    textArea.autocomplete = 'off';\r\n    textArea.minLength = '2';\r\n    textArea.maxLength = '2';\r\n    let label = document.createElement('label');\r\n    label.htmlFor = textArea.id;\r\n    label.innerText = 'Choose number of mines (from 10 to 99):';\r\n    parent.appendChild(label);\r\n    parent.appendChild(textArea);\r\n}\r\n\r\ninit();\r\n\r\ndocument.querySelectorAll('.tools-btn-apply').forEach(btn => btn.addEventListener('click', () => {\r\n    if (document.getElementById('check-level-0').checked === true) chosenLevel = 'Easy';\r\n    if (document.getElementById('check-level-1').checked === true) chosenLevel = 'Medium';\r\n    if (document.getElementById('check-level-2').checked === true) chosenLevel = 'Hard';\r\n\r\n    numberMines = parseInt(document.getElementById('input-mines').value);\r\n    if(numberMines == '' || !numberMines || numberMines < 10) numberMines = 10;\r\n\r\n    let remained = document.querySelector('.number-remained');\r\n    remained.innerHTML = numberMines;\r\n    resizeField();\r\n}));\r\n\r\nfunction resizeField() {\r\n    let field = document.querySelector('.field');\r\n    field.innerHTML = null;\r\n    drawField(field);\r\n}\r\n\r\nfunction drawField(field){\r\n    for (let i = 0; i < params[chosenLevel].sizeY; i++) {\r\n        field.innerHTML += '<div class=\"field-row\"></div>';\r\n        let fieldRow = document.querySelectorAll('.field-row');\r\n        fieldRow = fieldRow[fieldRow.length - 1];\r\n        for (let j = 0; j < params[chosenLevel].sizeX; j++) {\r\n            fieldRow.innerHTML += `<div class=\"field-key\" key-coord=\"${i},${j}\" style=\"width: ${sizeField / params[chosenLevel].sizeX}px; height: ${sizeField /  params[chosenLevel].sizeY}px;\"></div>`;\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://minesweeper/./src/js/generate.js?");

/***/ }),

/***/ "./src/js/logic.js":
/*!*************************!*\
  !*** ./src/js/logic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate.js */ \"./src/js/generate.js\");\n\r\n\r\nlet firstClick = false;\r\nlet firstX;\r\nlet firstY;\r\nlet sizeX = _generate_js__WEBPACK_IMPORTED_MODULE_0__.params[_generate_js__WEBPACK_IMPORTED_MODULE_0__.chosenLevel].sizeX;\r\nlet sizeY = _generate_js__WEBPACK_IMPORTED_MODULE_0__.params[_generate_js__WEBPACK_IMPORTED_MODULE_0__.chosenLevel].sizeY;\r\nlet lost = false;\r\nlet flagOnField = 0;\r\nlet data = new Array(_generate_js__WEBPACK_IMPORTED_MODULE_0__.params[_generate_js__WEBPACK_IMPORTED_MODULE_0__.chosenLevel].sizeY).fill(0).map(() => new Array(_generate_js__WEBPACK_IMPORTED_MODULE_0__.params[_generate_js__WEBPACK_IMPORTED_MODULE_0__.chosenLevel].sizeX).fill(0));\r\n\r\nasync function newGame() {\r\n    await getFirstClick();\r\n    putMines();\r\n    countMines();\r\n    console.log(data);\r\n    openFirst(firstX, firstY);\r\n}\r\n\r\ndocument.querySelectorAll('.tools-btn-apply').forEach(btn => btn.addEventListener('click', () => {\r\n    sizeX = _generate_js__WEBPACK_IMPORTED_MODULE_0__.params[_generate_js__WEBPACK_IMPORTED_MODULE_0__.chosenLevel].sizeX;\r\n    sizeY = _generate_js__WEBPACK_IMPORTED_MODULE_0__.params[_generate_js__WEBPACK_IMPORTED_MODULE_0__.chosenLevel].sizeY;\r\n    firstClick = false;\r\n    data = new Array(_generate_js__WEBPACK_IMPORTED_MODULE_0__.params[_generate_js__WEBPACK_IMPORTED_MODULE_0__.chosenLevel].sizeY).fill(0).map(() => new Array(_generate_js__WEBPACK_IMPORTED_MODULE_0__.params[_generate_js__WEBPACK_IMPORTED_MODULE_0__.chosenLevel].sizeX).fill(0));\r\n    newGame();\r\n}));\r\n\r\nfunction countMines() {\r\n    let x = [0, 1, 1, 1, 0, -1, -1, -1];\r\n    let y = [1, 1, 0, -1, -1, -1, 0, 1];\r\n    for (let i = 0; i < data.length; i++) {\r\n        for (let j = 0; j < data[i].length; j++) {\r\n            if (data[i][j] === 0) {\r\n                let cnt = 0;\r\n                for (let k = 0; k < 8; k++) {\r\n                    if (0 <= i + y[k] && i + y[k] < data.length && 0 <= j + x[k] && j + x[k] < data[i].length) {\r\n                        if (data[i + y[k]][j + x[k]] === -1) cnt++;\r\n                    }\r\n                }\r\n                data[i][j] = cnt;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction putMine(cnt) {\r\n    let x = Math.floor(Math.random() * sizeX);\r\n    let y = Math.floor(Math.random() * sizeY);\r\n    if (x == firstX && y == firstY) {\r\n        putMine(cnt);\r\n    }\r\n    else if (data[y][x] === 0 && cnt != 0) {\r\n        data[y][x] = -1;\r\n        cnt--;\r\n        putMine(cnt);\r\n    }\r\n    else if (cnt === 0) {\r\n        return;\r\n    }\r\n    else {\r\n        putMine(cnt);\r\n    }\r\n}\r\n\r\nfunction putMines() {\r\n    let cnt = _generate_js__WEBPACK_IMPORTED_MODULE_0__.numberMines;\r\n    if (!cnt) cnt = 10;\r\n    console.log(cnt);\r\n    putMine(cnt);\r\n}\r\n\r\n\r\nfunction getFirstClick() {\r\n    return new Promise((resolve, reject) => {\r\n        let button = document.querySelectorAll('.field-key');\r\n        button.forEach(btn => btn.addEventListener('click', () => {\r\n            if (!firstClick) {\r\n                firstClick = true;\r\n                let coords = btn.getAttribute('key-coord').split(',');\r\n                firstX = coords[1];\r\n                firstY = coords[0];\r\n                resolve(firstClick);\r\n            }\r\n            else if(!btn.classList.contains('flagged')){\r\n                openCells(btn);\r\n                if(checkWin()) ifWin();\r\n            }\r\n        }));\r\n        button.forEach(btn => btn.addEventListener('contextmenu', (e) => {\r\n            e.preventDefault();\r\n            let used = document.querySelector('.number-used');\r\n            let remained = document.querySelector('.number-remained');\r\n            if (firstClick) {\r\n                if (btn.innerHTML != 'F' && flagOnField != _generate_js__WEBPACK_IMPORTED_MODULE_0__.numberMines) {\r\n                    btn.classList.add('flagged');\r\n                    used.innerHTML = String(parseInt(used.textContent) + 1);\r\n                    remained.innerHTML = String(parseInt(remained.textContent) - 1);\r\n                    btn.innerHTML += 'F';\r\n                    flagOnField++;\r\n                }\r\n                else if(btn.innerHTML == 'F'){\r\n                    btn.classList.remove('flagged');\r\n                    used.innerHTML = String(parseInt(used.textContent) - 1);\r\n                    remained.innerHTML = String(parseInt(remained.textContent) + 1);\r\n                    btn.innerHTML = '';\r\n                    flagOnField--;\r\n                }\r\n            }\r\n        }));\r\n    });\r\n}\r\n\r\nfunction checkWin(){\r\n    let cnt = 0;\r\n    let cntFlag = 0;\r\n    let numToOpen = sizeX * sizeY - _generate_js__WEBPACK_IMPORTED_MODULE_0__.numberMines;\r\n    let rows = document.querySelectorAll('.field-row');\r\n    for(let i = 0; i < rows.length; i++){\r\n        let cells = rows[i].childNodes;\r\n        for(let j = 0; j < cells.length; j++){\r\n            if(cells[j].classList.contains('opened')) cnt++;\r\n            if(cells[j].classList.contains('flagged') && data[i][j] === -1) cntFlag++;\r\n        }\r\n    }\r\n    return (cnt === numToOpen) && (cntFlag === _generate_js__WEBPACK_IMPORTED_MODULE_0__.numberMines);\r\n}\r\n\r\nlet button = document.querySelectorAll('.field-key');\r\nbutton.forEach(btn => btn.addEventListener('contextmenu', (e) => {\r\n    e.preventDefault();\r\n}));\r\n\r\nfunction openTiles(i, j) {\r\n    i = parseInt(i);\r\n    j = parseInt(j);\r\n    let x = [0, 1, 1, 1, 0, -1, -1, -1];\r\n    let y = [1, 1, 0, -1, -1, -1, 0, 1];\r\n    for (let k = 0; k < 8; k++) {\r\n        if (0 <= i + y[k] && i + y[k] < data.length && 0 <= j + x[k] && j + x[k] < data[i].length) {\r\n            if (data[i + y[k]][j + x[k]] === 0) {\r\n                let el = document.querySelector(\r\n                    `[key-coord=\"${i + y[k]},${j + x[k]}\"]`\r\n                );\r\n                if (!el.classList.contains('opened') && !el.classList.contains('flagged')) el.classList.add('opened');\r\n                else continue;\r\n                if (!el.classList.contains('flagged')) openTiles(i + y[k], j + x[k]);\r\n            }\r\n            else if (data[i + y[k]][j + x[k]] != -1) {\r\n                let el = document.querySelector(\r\n                    `[key-coord=\"${i + y[k]},${j + x[k]}\"]`\r\n                );\r\n                if (!el.classList.contains('opened') && !el.classList.contains('flagged')) el.classList.add('opened');\r\n                else continue;\r\n                el.innerHTML += data[i + y[k]][j + x[k]];\r\n            }\r\n        }\r\n    }\r\n    return;\r\n}\r\n\r\nlet popUp = document.querySelector('.pop-up');\r\nlet popUpBtn = document.querySelector('.pop-up-btn');\r\nlet popUpCont = document.querySelector('.pop-up-content');\r\n\r\nfunction ifLost() { //check again\r\n    popUp.classList.remove('hidden');\r\n    popUpCont.childNodes.forEach(child => {\r\n        if (child.classList.contains('hidden') && child.classList.contains('lost')) child.classList.remove('hidden');\r\n        else child.classList.add('hidden');\r\n    })\r\n}\r\n\r\nfunction ifWin() {\r\n    popUp.classList.remove('hidden');\r\n    popUpCont.childNodes.forEach(child => {\r\n        if (child.classList.contains('hidden') && child.classList.contains('game-over')) child.classList.remove('hidden');\r\n        else child.classList.add('hidden');\r\n    })\r\n}\r\n\r\n\r\npopUpBtn.addEventListener('click', () => {\r\n    popUp.classList.add('hidden');\r\n});\r\n\r\nfunction openFirst(x, y) {\r\n    let el = document.querySelector(\r\n        `[key-coord=\"${y},${x}\"]`\r\n    );\r\n    openCells(el);\r\n}\r\n\r\nfunction openCells(btn) {\r\n    let coords = btn.getAttribute('key-coord').split(',');\r\n    let i = coords[0];\r\n    let j = coords[1];\r\n    if (!btn.classList.contains('opened')) btn.classList.add('opened');\r\n    if (data[i][j] === -1) {\r\n        btn.innerHTML += 'M';\r\n        lost = true;\r\n        ifLost();\r\n    }\r\n    else {\r\n        if (data[i][j] > 0) {\r\n            btn.innerHTML += data[i][j];\r\n        }\r\n        else openTiles(i, j);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://minesweeper/./src/js/logic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;