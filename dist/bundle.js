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

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./static/tree/componentsT/Camera.js":
/*!*******************************************!*\
  !*** ./static/tree/componentsT/Camera.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Camera)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Camera {\r\n    constructor(renderer) {\r\n        const width = renderer.domElement.width;\r\n        const height = renderer.domElement.height;\r\n\r\n        this.threeCamera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, width / height, 0.1, 10000);\r\n        this.threeCamera.position.set(2, 2, 2);\r\n        this.threeCamera.lookAt(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0))\r\n\r\n        this.updateSize(renderer);\r\n\r\n        window.addEventListener('resize', () => this.updateSize(renderer), false);\r\n    }\r\n\r\n    updateSize(renderer) {\r\n\r\n        this.threeCamera.aspect = renderer.domElement.width / renderer.domElement.height;\r\n        this.threeCamera.updateProjectionMatrix();\r\n    }\r\n}\n\n//# sourceURL=webpack://projekt_koncowy/./static/tree/componentsT/Camera.js?");

/***/ }),

/***/ "./static/tree/componentsT/Ico.js":
/*!****************************************!*\
  !*** ./static/tree/componentsT/Ico.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ico)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Ico {\r\n\r\n    constructor(scene) {\r\n        console.log(\"ico\")\r\n        this.scene = scene;\r\n        this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.IcosahedronGeometry();\r\n        this.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial();\r\n        this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.geometry, this.material);\r\n        this.scene.add(this.mesh)\r\n    }\r\n    update() {\r\n        this.mesh.rotation.y += 0.01\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://projekt_koncowy/./static/tree/componentsT/Ico.js?");

/***/ }),

/***/ "./static/tree/componentsT/Main.js":
/*!*****************************************!*\
  !*** ./static/tree/componentsT/Main.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer */ \"./static/tree/componentsT/Renderer.js\");\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera */ \"./static/tree/componentsT/Camera.js\");\n/* harmony import */ var _Ico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ico */ \"./static/tree/componentsT/Ico.js\");\n\r\n\r\n\r\n\r\n\r\nclass Main {\r\n    constructor(container) {\r\n        // właściwości klasy\r\n        this.container = container;\r\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();\r\n        this.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_0__.default(this.scene, container);\r\n        this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_1__.default(this.renderer.threeRenderer);\r\n        this.ico = new _Ico__WEBPACK_IMPORTED_MODULE_2__.default(this.scene);\r\n\r\n        this.render();\r\n    }\r\n\r\n    render() {\r\n\r\n        console.log(\"render leci\")\r\n\r\n        this.renderer.render(this.scene, this.camera.threeCamera);\r\n        this.ico.update() // obrót ico\r\n\r\n        requestAnimationFrame(this.render.bind(this));\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://projekt_koncowy/./static/tree/componentsT/Main.js?");

/***/ }),

/***/ "./static/tree/componentsT/Renderer.js":
/*!*********************************************!*\
  !*** ./static/tree/componentsT/Renderer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Renderer)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Renderer {\r\n    constructor(scene, container) {\r\n\r\n        this.scene = scene;\r\n        this.container = container;\r\n        this.threeRenderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });\r\n        this.threeRenderer.setClearColor(0xffffff);\r\n        this.container.appendChild(this.threeRenderer.domElement);\r\n        this.updateSize();\r\n\r\n        document.addEventListener('DOMContentLoaded', () => this.updateSize(), false);\r\n        window.addEventListener('resize', () => this.updateSize(), false);\r\n    }\r\n\r\n    updateSize() {\r\n        this.threeRenderer.setSize(window.innerWidth, window.innerHeight);\r\n    }\r\n\r\n    render(scene, camera) {\r\n        this.threeRenderer.render(scene, camera);\r\n    }\r\n}\n\n//# sourceURL=webpack://projekt_koncowy/./static/tree/componentsT/Renderer.js?");

/***/ }),

/***/ "./static/tree/gra.js":
/*!****************************!*\
  !*** ./static/tree/gra.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './cssT/style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _componentsT_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentsT/Main */ \"./static/tree/componentsT/Main.js\");\n\r\n\r\n// import plik from './plik.png';\r\n// document.getElementById(\"img1\").src = plik\r\n\r\n\r\n\r\nfunction init() {\r\n    //div\r\n    const container = document.getElementById('root');\r\n    //main class object\r\n    new _componentsT_Main__WEBPACK_IMPORTED_MODULE_1__.default(container);\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack://projekt_koncowy/./static/tree/gra.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./static/tree/gra.js");
/******/ 	
/******/ })()
;