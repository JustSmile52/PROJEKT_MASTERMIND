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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n\\tpadding:0;\\r\\n\\tmargin: 0;\\r\\n}\\r\\n/**/\\r\\nhtml, body {\\r\\n    width: 100%;\\r\\n\\theight: 100%;\\r\\n    background-color: antiquewhite;\\r\\n}\\r\\ntable{\\r\\n    border: 1px solid black;\\r\\n    width: 200px;\\r\\n    height: 600px;\\r\\n    position: absolute;\\r\\n    margin-top: 5%;\\r\\n    margin-left: 2%;\\r\\n}\\r\\nth{\\r\\n border: 1px solid black;\\r\\n\\r\\n \\r\\n height: 10%;\\r\\n}\\r\\ntd{\\r\\n    border: 1px solid black;\\r\\n    height: 90%; \\r\\n}\\r\\n#trafione{\\r\\n    background-color: green;\\r\\n}\\r\\n#nietrafione{\\r\\n    background-color: red;\\r\\n}\\r\\n#traf{\\r\\n    color: green;\\r\\n}\\r\\n#nietraf{\\r\\n    color: red;\\r\\n}\\r\\n#przyciski{\\r\\n    margin-top: 750px;\\r\\n    margin-left: 45%;\\r\\n    position: absolute;\\r\\n}\\r\\n#tyl{\\r\\n    color: cornflowerblue;\\r\\n    font-size: 50px;\\r\\n    position: absolute;\\r\\n}\\r\\n#przod{\\r\\n    color: cornflowerblue;\\r\\n    font-size: 50px;\\r\\n    margin-left: 120px;\\r\\n    position: absolute;\\r\\n}\\r\\n#kolorek{\\r\\n    background-color: red;\\r\\n    border: 1px solid black;\\r\\n    width: 50px;\\r\\n    height: 50px;\\r\\n    border-radius: 100%;\\r\\n    margin-left: 60px;\\r\\n    position: absolute;\\r\\n}\\r\\n#wysylka{\\r\\n    height:  50px;\\r\\n    background-color: cornflowerblue;\\r\\n    margin-left: 180px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project_test/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://project_test/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://project_test/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project_test/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./node_modules/three/examples/jsm/libs/stats.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/three/examples/jsm/libs/stats.module.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Stats = function () {\n\n\tvar mode = 0;\n\n\tvar container = document.createElement( 'div' );\n\tcontainer.style.cssText = 'position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000';\n\tcontainer.addEventListener( 'click', function ( event ) {\n\n\t\tevent.preventDefault();\n\t\tshowPanel( ++ mode % container.children.length );\n\n\t}, false );\n\n\t//\n\n\tfunction addPanel( panel ) {\n\n\t\tcontainer.appendChild( panel.dom );\n\t\treturn panel;\n\n\t}\n\n\tfunction showPanel( id ) {\n\n\t\tfor ( var i = 0; i < container.children.length; i ++ ) {\n\n\t\t\tcontainer.children[ i ].style.display = i === id ? 'block' : 'none';\n\n\t\t}\n\n\t\tmode = id;\n\n\t}\n\n\t//\n\n\tvar beginTime = ( performance || Date ).now(), prevTime = beginTime, frames = 0;\n\n\tvar fpsPanel = addPanel( new Stats.Panel( 'FPS', '#0ff', '#002' ) );\n\tvar msPanel = addPanel( new Stats.Panel( 'MS', '#0f0', '#020' ) );\n\n\tif ( self.performance && self.performance.memory ) {\n\n\t\tvar memPanel = addPanel( new Stats.Panel( 'MB', '#f08', '#201' ) );\n\n\t}\n\n\tshowPanel( 0 );\n\n\treturn {\n\n\t\tREVISION: 16,\n\n\t\tdom: container,\n\n\t\taddPanel: addPanel,\n\t\tshowPanel: showPanel,\n\n\t\tbegin: function () {\n\n\t\t\tbeginTime = ( performance || Date ).now();\n\n\t\t},\n\n\t\tend: function () {\n\n\t\t\tframes ++;\n\n\t\t\tvar time = ( performance || Date ).now();\n\n\t\t\tmsPanel.update( time - beginTime, 200 );\n\n\t\t\tif ( time >= prevTime + 1000 ) {\n\n\t\t\t\tfpsPanel.update( ( frames * 1000 ) / ( time - prevTime ), 100 );\n\n\t\t\t\tprevTime = time;\n\t\t\t\tframes = 0;\n\n\t\t\t\tif ( memPanel ) {\n\n\t\t\t\t\tvar memory = performance.memory;\n\t\t\t\t\tmemPanel.update( memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576 );\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\treturn time;\n\n\t\t},\n\n\t\tupdate: function () {\n\n\t\t\tbeginTime = this.end();\n\n\t\t},\n\n\t\t// Backwards Compatibility\n\n\t\tdomElement: container,\n\t\tsetMode: showPanel\n\n\t};\n\n};\n\nStats.Panel = function ( name, fg, bg ) {\n\n\tvar min = Infinity, max = 0, round = Math.round;\n\tvar PR = round( window.devicePixelRatio || 1 );\n\n\tvar WIDTH = 80 * PR, HEIGHT = 48 * PR,\n\t\tTEXT_X = 3 * PR, TEXT_Y = 2 * PR,\n\t\tGRAPH_X = 3 * PR, GRAPH_Y = 15 * PR,\n\t\tGRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;\n\n\tvar canvas = document.createElement( 'canvas' );\n\tcanvas.width = WIDTH;\n\tcanvas.height = HEIGHT;\n\tcanvas.style.cssText = 'width:80px;height:48px';\n\n\tvar context = canvas.getContext( '2d' );\n\tcontext.font = 'bold ' + ( 9 * PR ) + 'px Helvetica,Arial,sans-serif';\n\tcontext.textBaseline = 'top';\n\n\tcontext.fillStyle = bg;\n\tcontext.fillRect( 0, 0, WIDTH, HEIGHT );\n\n\tcontext.fillStyle = fg;\n\tcontext.fillText( name, TEXT_X, TEXT_Y );\n\tcontext.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );\n\n\tcontext.fillStyle = bg;\n\tcontext.globalAlpha = 0.9;\n\tcontext.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );\n\n\treturn {\n\n\t\tdom: canvas,\n\n\t\tupdate: function ( value, maxValue ) {\n\n\t\t\tmin = Math.min( min, value );\n\t\t\tmax = Math.max( max, value );\n\n\t\t\tcontext.fillStyle = bg;\n\t\t\tcontext.globalAlpha = 1;\n\t\t\tcontext.fillRect( 0, 0, WIDTH, GRAPH_Y );\n\t\t\tcontext.fillStyle = fg;\n\t\t\tcontext.fillText( round( value ) + ' ' + name + ' (' + round( min ) + '-' + round( max ) + ')', TEXT_X, TEXT_Y );\n\n\t\t\tcontext.drawImage( canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT );\n\n\t\t\tcontext.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT );\n\n\t\t\tcontext.fillStyle = bg;\n\t\t\tcontext.globalAlpha = 0.9;\n\t\t\tcontext.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round( ( 1 - ( value / maxValue ) ) * GRAPH_HEIGHT ) );\n\n\t\t}\n\n\t};\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stats);\n\n\n//# sourceURL=webpack://project_test/./node_modules/three/examples/jsm/libs/stats.module.js?");

/***/ }),

/***/ "./src/components/Camera.js":
/*!**********************************!*\
  !*** ./src/components/Camera.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Camera)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Camera {\r\n    constructor(renderer) {\r\n        const width = renderer.domElement.width;\r\n        const height = renderer.domElement.height;\r\n\r\n        this.threeCamera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, width / height, 0.1, 10000);\r\n        this.threeCamera.position.set(-300, 700, 0);\r\n        this.threeCamera.lookAt(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0))\r\n\r\n        this.updateSize(renderer);\r\n\r\n        window.addEventListener('resize', () => this.updateSize(renderer), false);\r\n    }\r\n\r\n    updateSize(renderer) {\r\n\r\n        this.threeCamera.aspect = renderer.domElement.width / renderer.domElement.height;\r\n        this.threeCamera.updateProjectionMatrix();\r\n    }\r\n}\n\n//# sourceURL=webpack://project_test/./src/components/Camera.js?");

/***/ }),

/***/ "./src/components/Config.js":
/*!**********************************!*\
  !*** ./src/components/Config.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//TODO zmienić z rotacji na zmiane koloru\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    rotateLeft: false,\r\n    rotateRight: false,\r\n    moveForward: false\r\n});\n\n//# sourceURL=webpack://project_test/./src/components/Config.js?");

/***/ }),

/***/ "./src/components/Ico.js":
/*!*******************************!*\
  !*** ./src/components/Ico.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ico)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Ico extends three__WEBPACK_IMPORTED_MODULE_0__.Mesh {\r\n\r\n    constructor(scene) {\r\n        super()\r\n        this.scene = scene;\r\n        this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(50, 50, 50);\r\n        this.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial();\r\n        this.status = false\r\n        this.active = false\r\n        this.pomocnicza = 0\r\n        this.scene.add(this)\r\n    }\r\n    update() {\r\n        this.rotation.y += 0.01\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://project_test/./src/components/Ico.js?");

/***/ }),

/***/ "./src/components/Keyboard.js":
/*!************************************!*\
  !*** ./src/components/Keyboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ \"./src/components/Config.js\");\n// import Animation from \"./Animation\"\r\n\r\n\r\nconst KEYS = {\r\n    //TODO usunąć up i down \r\n    \"left\": 37,\r\n    \"up\": 38,\r\n    \"right\": 39,\r\n    \"down\": 40,\r\n};\r\n\r\nclass Keyboard {\r\n    constructor(domElement, animation, modelMesh) {\r\n\r\n        this.domElement = domElement;\r\n        this.animation = animation\r\n        this.modelMesh = modelMesh\r\n\r\n        // events\r\n        this.domElement.addEventListener('keydown', event => this.onKeyDown(event), false);\r\n        this.domElement.addEventListener('keyup', event => this.onKeyUp(event), false);\r\n\r\n\r\n    }\r\n\r\n    onKeyUp(event) {\r\n        switch (event.keyCode) {\r\n            case KEYS.up:\r\n                _Config__WEBPACK_IMPORTED_MODULE_0__.default.moveForward = false;\r\n                break;\r\n            case KEYS.left:\r\n                _Config__WEBPACK_IMPORTED_MODULE_0__.default.rotateLeft = false;\r\n                break;\r\n            case KEYS.right:\r\n                _Config__WEBPACK_IMPORTED_MODULE_0__.default.rotateRight = false;\r\n                break;\r\n\r\n\r\n        }\r\n        console.log('onKeyChange', event.keyCode)\r\n    }\r\n\r\n    onKeyDown(event) {\r\n        switch (event.keyCode) {\r\n            case KEYS.up:\r\n                _Config__WEBPACK_IMPORTED_MODULE_0__.default.moveForward = true;\r\n                break;\r\n            case KEYS.left:\r\n                _Config__WEBPACK_IMPORTED_MODULE_0__.default.rotateLeft = true;\r\n                break;\r\n            case KEYS.right:\r\n                _Config__WEBPACK_IMPORTED_MODULE_0__.default.rotateRight = true;\r\n                break;\r\n        }\r\n\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://project_test/./src/components/Keyboard.js?");

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer */ \"./src/components/Renderer.js\");\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera */ \"./src/components/Camera.js\");\n/* harmony import */ var _Raycasting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Raycasting */ \"./src/components/Raycasting.js\");\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Keyboard */ \"./src/components/Keyboard.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Config */ \"./src/components/Config.js\");\n/* harmony import */ var three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three/examples/jsm/libs/stats.module.js */ \"./node_modules/three/examples/jsm/libs/stats.module.js\");\n/* harmony import */ var _assets_Icha_MD2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/Icha.MD2 */ \"./src/components/assets/Icha.MD2\");\n/* harmony import */ var _Ico__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Ico */ \"./src/components/Ico.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Main {\r\n    constructor(container) {\r\n        // właściwości klasy\r\n        this.camVect = new three__WEBPACK_IMPORTED_MODULE_7__.Vector3(10, 10, 0)\r\n        this.container = container;\r\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_7__.Scene();\r\n        this.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_0__.default(this.scene, container);\r\n        this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_1__.default(this.renderer.threeRenderer);\r\n\r\n        this.isLoaded = null\r\n        // this.animation = null\r\n        this.tablica_kostek = []\r\n\r\n\r\n\r\n        // grid - testowa siatka na podłoże modelu\r\n\r\n        const gridHelper = new three__WEBPACK_IMPORTED_MODULE_7__.GridHelper(1000, 10);\r\n        this.scene.add(gridHelper);\r\n\r\n        //stats - statystyki wydajności\r\n\r\n        this.stats = new three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_8__.default();\r\n        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb\r\n\r\n        document.body.appendChild(this.stats.dom);\r\n\r\n        // zegar - vide lekcja 4\r\n\r\n        this.clock = new three__WEBPACK_IMPORTED_MODULE_7__.Clock()\r\n\r\n        // manager loadingu, pozwala monitorować progress oraz fakt zakończenia ładowania\r\n\r\n        this.manager = new three__WEBPACK_IMPORTED_MODULE_7__.LoadingManager();\r\n\r\n        // szesciany\r\n        //* zrobiona tablica dwuwyiarowa\r\n\r\n        this.tab2 = []\r\n        let x\r\n        let z\r\n        let pom = 0\r\n        for (let i = 0; i < 12; i++) {\r\n            this.tablica_kostek[i] = []\r\n            for (let j = 0; j < 4; j++) {\r\n\r\n\r\n                this.ico = new _Ico__WEBPACK_IMPORTED_MODULE_6__.default(this.scene)\r\n                this.tablica_kostek[i][j] = this.ico\r\n                \r\n                x = -330 + i * 60\r\n                z = -90 + j * 60\r\n                this.ico.position.set(x, 0, z)\r\n                this.ico.pomocnicza = i + \"-\" + j\r\n                this.scene.add(this.ico)\r\n                this.tab2.push(this.ico)\r\n            }\r\n        }\r\n        for(let i = 0 ; i<4; i++){\r\n            this.tab2[i].active=true\r\n        }\r\n        \r\n        \r\n        console.log(this.tab2)\r\n        //sfery\r\n        /* let czerwona = new Sphere(0)\r\n        czerwona.position.set(100, 0, 200)\r\n        this.scene.add(czerwona)\r\n\r\n        let niebieska = new Sphere(1)\r\n        niebieska.position.set(100, 0, 250)\r\n        this.scene.add(niebieska)\r\n\r\n        let zielona = new Sphere(2)\r\n        zielona.position.set(150, 0, 200)\r\n        this.scene.add(zielona)\r\n\r\n        let zolta = new Sphere(3)\r\n        zolta.position.set(150, 0, 250)\r\n        this.scene.add(zolta)\r\n\r\n        let czarna = new Sphere(4)\r\n        czarna.position.set(200, 0, 250)\r\n        this.scene.add(czarna)*/\r\n\r\n        //raycast\r\n        //\r\n        //\r\n        //\r\n        //\r\n        //\r\n        ///\r\n        this.ray = new _Raycasting__WEBPACK_IMPORTED_MODULE_2__.default(this.scene, this.camera, this.tab2)\r\n        // moniytor progressu ładowania\r\n\r\n        this.manager.onProgress = (item, loaded, total) => {\r\n            console.log(`progress ${item}: ${loaded} ${total}`);\r\n        };\r\n\r\n\r\n        //\r\n        this.showCard()\r\n        this.render();\r\n    }\r\n\r\n    render() {\r\n\r\n        // początek pomiaru wydajności\r\n        this.stats.begin()\r\n\r\n        // delta do animacji\r\n        var delta = this.clock.getDelta();\r\n\r\n        // wykonanie funkcji update w module Animations - zobacz do pliku Animations\r\n        // if (this.animation) this.animation.update(delta)\r\n\r\n        this.renderer.render(this.scene, this.camera.threeCamera);\r\n\r\n        // obsługa ruch modelu dopiero kiedy jest załadowany, można tą część umieścić w module Keyboard\r\n        // tworząc w nim np funkcję update() i wywoływać ją poniżej\r\n\r\n\r\n        // switch{\r\n        //     case: GetElementbyId(\"kolorek\").style.background-color = red,\r\n        // }\r\n\r\n\r\n        //raycaster\r\n\r\n\r\n        // koniec statystyk\r\n        this.stats.end()\r\n\r\n        requestAnimationFrame(this.render.bind(this))\r\n    }\r\n\r\n    extractValue(reg, str) {\r\n        const matches = str.match(reg);\r\n        return matches && matches[0];\r\n    }\r\n\r\n\r\n    getArray(){\r\n        return this.ray.do_wyslania\r\n    }\r\n\r\n    showCard() {\r\n\r\n        // WebGL Context Setup\r\n        const canvas = document.createElement(\"canvas\");\r\n        const gl = canvas.getContext(\"webgl\");\r\n        const debugInfo = gl.getExtension(\"WEBGL_debug_renderer_info\");\r\n\r\n        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);\r\n        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);\r\n\r\n        // Full card description and webGL layer (if present)\r\n        const layer = this.extractValue(/(ANGLE)/g, renderer);\r\n        const card = this.extractValue(/((NVIDIA|AMD|Intel)[^\\d]*[^\\s]+)/, renderer);\r\n\r\n        const tokens = card.split(' ');\r\n        tokens.shift();\r\n\r\n        // Split the card description up into pieces\r\n        // with brand, manufacturer, card version\r\n        const manufacturer = this.extractValue(/(NVIDIA|AMD|Intel)/g, card);\r\n        const cardVersion = tokens.pop();\r\n        const brand = tokens.join(' ');\r\n        const integrated = manufacturer === 'Intel';\r\n\r\n        console.log({\r\n            card,\r\n            manufacturer,\r\n            cardVersion,\r\n            brand,\r\n            integrated,\r\n            vendor,\r\n            renderer\r\n        });\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://project_test/./src/components/Main.js?");

/***/ }),

/***/ "./src/components/Raycasting.js":
/*!**************************************!*\
  !*** ./src/components/Raycasting.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ray)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Sphere__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sphere */ \"./src/components/Sphere.js\");\n\r\n\r\n\r\n\r\nclass ray extends three__WEBPACK_IMPORTED_MODULE_1__.Raycaster {\r\n    constructor(scene, camera, tablica_kostek,) {\r\n        super()\r\n\r\n        this.scene = scene;\r\n        this.camera = camera.threeCamera;\r\n        this.tablica_kostek = tablica_kostek\r\n        this.do_wyslania = [null,null,null,null]\r\n        // this.czerwona = czerwona\r\n        // this.niebieska = niebieska\r\n        // this.zielona = zielona\r\n        // this.zolta = zolta\r\n        // this.czarna = czarna\r\n        \r\n        //zdefiniowac plansze (w szensie tablice kostek)\r\n        window.addEventListener(\"click\", (e) => {\r\n            this.mouseVector = new three__WEBPACK_IMPORTED_MODULE_1__.Vector2((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1)\r\n            this.setFromCamera(this.mouseVector, this.camera)\r\n            this.intersect = this.intersectObjects(this.tablica_kostek)\r\n            if (this.intersect[0]) {\r\n\r\n                if (this.intersect[0].object.active == true) {\r\n                    let x = this.intersect[0].object.position.x\r\n                    let z = this.intersect[0].object.position.z\r\n                    let kolor_kuli = document.getElementById(\"pom\").value\r\n\r\n                    \r\n                    this.do_wyslania[this.intersect[0].object.pomocnicza.split('-')[1]]=kolor_kuli\r\n                \r\n                    //this.intersect[0].split('-')[0] - rząd\r\n                    //this.intersect[0].split('-')[1] - kolumna i to jest twoje pole tablicy\r\n                    let kula = new _Sphere__WEBPACK_IMPORTED_MODULE_0__.default(parseInt(kolor_kuli))\r\n                    kula.position.set(x, 20, z)\r\n                    this.scene.add(kula)\r\n                    \r\n                }\r\n                else {\r\n                    console.log(\"to tak nie zadziala byczq\")\r\n                }\r\n\r\n            }\r\n\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://project_test/./src/components/Raycasting.js?");

/***/ }),

/***/ "./src/components/Renderer.js":
/*!************************************!*\
  !*** ./src/components/Renderer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Renderer)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Renderer {\r\n    constructor(scene, container) {\r\n\r\n        this.scene = scene;\r\n        this.container = container;\r\n        this.threeRenderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });\r\n        this.threeRenderer.setClearColor(0xffffff);\r\n        this.container.appendChild(this.threeRenderer.domElement);\r\n        this.updateSize();\r\n\r\n        document.addEventListener('DOMContentLoaded', () => this.updateSize(), false);\r\n        window.addEventListener('resize', () => this.updateSize(), false);\r\n    }\r\n\r\n    updateSize() {\r\n        this.threeRenderer.setSize(window.innerWidth, window.innerHeight);\r\n    }\r\n\r\n    render(scene, camera) {\r\n        this.threeRenderer.render(scene, camera);\r\n    }\r\n}\n\n//# sourceURL=webpack://project_test/./src/components/Renderer.js?");

/***/ }),

/***/ "./src/components/Sphere.js":
/*!**********************************!*\
  !*** ./src/components/Sphere.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sphere)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Sphere extends three__WEBPACK_IMPORTED_MODULE_0__.Mesh {\r\n    constructor(kolor) {\r\n        let c\r\n\r\n        switch (kolor) {\r\n            case 0: // Red\r\n                c = 0xff0000\r\n                break\r\n\r\n            case 1: // Blue\r\n                c = 0x0000ff\r\n                break\r\n\r\n            case 2: // Green\r\n                c = 0x00ff00\r\n                break\r\n\r\n            case 3: // Yellow\r\n                c = 0xffff00\r\n                break\r\n\r\n            case 4: // Black\r\n                c = 0x000000\r\n                break\r\n        }\r\n\r\n        super(\r\n            new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(25, 50, 50),\r\n            new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\r\n                color: c,\r\n                wireframe: false,\r\n                transparent: true,\r\n                opacity: 1\r\n            })\r\n        )\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://project_test/./src/components/Sphere.js?");

/***/ }),

/***/ "./src/components/assets/Icha.MD2":
/*!****************************************!*\
  !*** ./src/components/assets/Icha.MD2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e8004ec1c3bb37f65f5.MD2\";\n\n//# sourceURL=webpack://project_test/./src/components/assets/Icha.MD2?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_Raycasting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Raycasting */ \"./src/components/Raycasting.js\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Main */ \"./src/components/Main.js\");\n\r\n\r\nlet pomocnicza = 0\r\nlet main =null\r\n;\r\n\r\n\r\n\r\nfunction zniana_koloru() {\r\n    // console.log(document.querySelector(\"#kolorek\"));\r\n    // czerwona = 0\r\n    // niebieska = 1\r\n    // zielona = 2\r\n    // zolta = 3\r\n    // czarna = 4\r\n    switch (pomocnicza) {\r\n        case 0:\r\n            document.querySelector(\"#kolorek\").style.backgroundColor = \"red\"\r\n            break\r\n        case 1:\r\n            document.querySelector(\"#kolorek\").style.backgroundColor = \"blue\"\r\n            break\r\n        case 2:\r\n            document.querySelector(\"#kolorek\").style.backgroundColor = \"green\"\r\n            break\r\n        case 3:\r\n            document.querySelector(\"#kolorek\").style.backgroundColor = \"yellow\"\r\n            break\r\n        case 4:\r\n            document.querySelector(\"#kolorek\").style.backgroundColor = \"black\"\r\n            break\r\n    }\r\n}\r\nfunction wyslij(){\r\n    $(\"#wysylka\").on(\"click\", function () {\r\n    let sprawdzak = 0\r\n    let tablica = main.getArray()\r\n    for(let i=0;i<4;i++){\r\n        if (tablica[i]== null){\r\n            sprawdzak=sprawdzak+1\r\n        }\r\n    }\r\n    if(sprawdzak==0){\r\n        fetch(\"http://localhost:3000/gra\", {method:\"POST\",body:JSON.stringify({data:tablica}),headers:{\"Content-type\":\"application/json\"}})\r\n        //wysylanko na serwer tablicy\r\n    }\r\n    else{\r\n        console.log('tablica jest niepelna')\r\n    }\r\n\r\n\r\n        \r\n    })\r\n}\r\nfunction przod() {\r\n\r\n    $(\"#przod\").on(\"click\", function () {\r\n\r\n        if (pomocnicza < 4) {\r\n            pomocnicza = pomocnicza + 1\r\n            console.log(pomocnicza)\r\n            zniana_koloru()\r\n            document.getElementById(\"pom\").value=pomocnicza\r\n            return pomocnicza\r\n        }\r\n        else {\r\n            pomocnicza = 0\r\n            console.log(pomocnicza)\r\n            zniana_koloru()\r\n            document.getElementById(\"pom\").value=pomocnicza\r\n            return pomocnicza\r\n        }\r\n    })\r\n}\r\nfunction tyl() {\r\n\r\n    $(\"#tyl\").on(\"click\", function () {\r\n        if (pomocnicza > 0) {\r\n            pomocnicza = pomocnicza - 1\r\n            console.log(pomocnicza)\r\n            zniana_koloru()\r\n            document.getElementById(\"pom\").value=pomocnicza\r\n            return pomocnicza\r\n\r\n        }\r\n        else {\r\n            pomocnicza = 4\r\n            console.log(pomocnicza)\r\n            zniana_koloru()\r\n            document.getElementById(\"pom\").value=pomocnicza\r\n            return pomocnicza\r\n        }\r\n        \r\n    })\r\n}\r\n\r\n// function getPom(){\r\n//     $(\"#tyl\").on(\"click\", function () {\r\n//         return pomocnicza\r\n\r\n//     })\r\n//     $(\"#przod\").on(\"click\", function () {\r\n//         return pomocnicza\r\n\r\n//     })\r\n//     return pomocnicza\r\n   \r\n// }\r\n\r\nfunction init() {\r\n    //div\r\n    const container = document.getElementById('root');\r\n    //main class object\r\n    main = new _components_Main__WEBPACK_IMPORTED_MODULE_2__.default(container);\r\n}\r\n\r\ninit();\r\nprzod()\r\ntyl()\r\nwyslij()\n\n//# sourceURL=webpack://project_test/./src/index.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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