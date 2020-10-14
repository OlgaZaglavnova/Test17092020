/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ../node_modules/moment/locale sync ^\.\/.*$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./af\": \"../node_modules/moment/locale/af.js\",\n\t\"./af.js\": \"../node_modules/moment/locale/af.js\",\n\t\"./ar\": \"../node_modules/moment/locale/ar.js\",\n\t\"./ar-dz\": \"../node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-dz.js\": \"../node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-kw\": \"../node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-kw.js\": \"../node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-ly\": \"../node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ly.js\": \"../node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ma\": \"../node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-ma.js\": \"../node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-sa\": \"../node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-sa.js\": \"../node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-tn\": \"../node_modules/moment/locale/ar-tn.js\",\n\t\"./ar-tn.js\": \"../node_modules/moment/locale/ar-tn.js\",\n\t\"./ar.js\": \"../node_modules/moment/locale/ar.js\",\n\t\"./az\": \"../node_modules/moment/locale/az.js\",\n\t\"./az.js\": \"../node_modules/moment/locale/az.js\",\n\t\"./be\": \"../node_modules/moment/locale/be.js\",\n\t\"./be.js\": \"../node_modules/moment/locale/be.js\",\n\t\"./bg\": \"../node_modules/moment/locale/bg.js\",\n\t\"./bg.js\": \"../node_modules/moment/locale/bg.js\",\n\t\"./bm\": \"../node_modules/moment/locale/bm.js\",\n\t\"./bm.js\": \"../node_modules/moment/locale/bm.js\",\n\t\"./bn\": \"../node_modules/moment/locale/bn.js\",\n\t\"./bn.js\": \"../node_modules/moment/locale/bn.js\",\n\t\"./bo\": \"../node_modules/moment/locale/bo.js\",\n\t\"./bo.js\": \"../node_modules/moment/locale/bo.js\",\n\t\"./br\": \"../node_modules/moment/locale/br.js\",\n\t\"./br.js\": \"../node_modules/moment/locale/br.js\",\n\t\"./bs\": \"../node_modules/moment/locale/bs.js\",\n\t\"./bs.js\": \"../node_modules/moment/locale/bs.js\",\n\t\"./ca\": \"../node_modules/moment/locale/ca.js\",\n\t\"./ca.js\": \"../node_modules/moment/locale/ca.js\",\n\t\"./cs\": \"../node_modules/moment/locale/cs.js\",\n\t\"./cs.js\": \"../node_modules/moment/locale/cs.js\",\n\t\"./cv\": \"../node_modules/moment/locale/cv.js\",\n\t\"./cv.js\": \"../node_modules/moment/locale/cv.js\",\n\t\"./cy\": \"../node_modules/moment/locale/cy.js\",\n\t\"./cy.js\": \"../node_modules/moment/locale/cy.js\",\n\t\"./da\": \"../node_modules/moment/locale/da.js\",\n\t\"./da.js\": \"../node_modules/moment/locale/da.js\",\n\t\"./de\": \"../node_modules/moment/locale/de.js\",\n\t\"./de-at\": \"../node_modules/moment/locale/de-at.js\",\n\t\"./de-at.js\": \"../node_modules/moment/locale/de-at.js\",\n\t\"./de-ch\": \"../node_modules/moment/locale/de-ch.js\",\n\t\"./de-ch.js\": \"../node_modules/moment/locale/de-ch.js\",\n\t\"./de.js\": \"../node_modules/moment/locale/de.js\",\n\t\"./dv\": \"../node_modules/moment/locale/dv.js\",\n\t\"./dv.js\": \"../node_modules/moment/locale/dv.js\",\n\t\"./el\": \"../node_modules/moment/locale/el.js\",\n\t\"./el.js\": \"../node_modules/moment/locale/el.js\",\n\t\"./en-au\": \"../node_modules/moment/locale/en-au.js\",\n\t\"./en-au.js\": \"../node_modules/moment/locale/en-au.js\",\n\t\"./en-ca\": \"../node_modules/moment/locale/en-ca.js\",\n\t\"./en-ca.js\": \"../node_modules/moment/locale/en-ca.js\",\n\t\"./en-gb\": \"../node_modules/moment/locale/en-gb.js\",\n\t\"./en-gb.js\": \"../node_modules/moment/locale/en-gb.js\",\n\t\"./en-ie\": \"../node_modules/moment/locale/en-ie.js\",\n\t\"./en-ie.js\": \"../node_modules/moment/locale/en-ie.js\",\n\t\"./en-il\": \"../node_modules/moment/locale/en-il.js\",\n\t\"./en-il.js\": \"../node_modules/moment/locale/en-il.js\",\n\t\"./en-in\": \"../node_modules/moment/locale/en-in.js\",\n\t\"./en-in.js\": \"../node_modules/moment/locale/en-in.js\",\n\t\"./en-nz\": \"../node_modules/moment/locale/en-nz.js\",\n\t\"./en-nz.js\": \"../node_modules/moment/locale/en-nz.js\",\n\t\"./en-sg\": \"../node_modules/moment/locale/en-sg.js\",\n\t\"./en-sg.js\": \"../node_modules/moment/locale/en-sg.js\",\n\t\"./eo\": \"../node_modules/moment/locale/eo.js\",\n\t\"./eo.js\": \"../node_modules/moment/locale/eo.js\",\n\t\"./es\": \"../node_modules/moment/locale/es.js\",\n\t\"./es-do\": \"../node_modules/moment/locale/es-do.js\",\n\t\"./es-do.js\": \"../node_modules/moment/locale/es-do.js\",\n\t\"./es-us\": \"../node_modules/moment/locale/es-us.js\",\n\t\"./es-us.js\": \"../node_modules/moment/locale/es-us.js\",\n\t\"./es.js\": \"../node_modules/moment/locale/es.js\",\n\t\"./et\": \"../node_modules/moment/locale/et.js\",\n\t\"./et.js\": \"../node_modules/moment/locale/et.js\",\n\t\"./eu\": \"../node_modules/moment/locale/eu.js\",\n\t\"./eu.js\": \"../node_modules/moment/locale/eu.js\",\n\t\"./fa\": \"../node_modules/moment/locale/fa.js\",\n\t\"./fa.js\": \"../node_modules/moment/locale/fa.js\",\n\t\"./fi\": \"../node_modules/moment/locale/fi.js\",\n\t\"./fi.js\": \"../node_modules/moment/locale/fi.js\",\n\t\"./fil\": \"../node_modules/moment/locale/fil.js\",\n\t\"./fil.js\": \"../node_modules/moment/locale/fil.js\",\n\t\"./fo\": \"../node_modules/moment/locale/fo.js\",\n\t\"./fo.js\": \"../node_modules/moment/locale/fo.js\",\n\t\"./fr\": \"../node_modules/moment/locale/fr.js\",\n\t\"./fr-ca\": \"../node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ca.js\": \"../node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ch\": \"../node_modules/moment/locale/fr-ch.js\",\n\t\"./fr-ch.js\": \"../node_modules/moment/locale/fr-ch.js\",\n\t\"./fr.js\": \"../node_modules/moment/locale/fr.js\",\n\t\"./fy\": \"../node_modules/moment/locale/fy.js\",\n\t\"./fy.js\": \"../node_modules/moment/locale/fy.js\",\n\t\"./ga\": \"../node_modules/moment/locale/ga.js\",\n\t\"./ga.js\": \"../node_modules/moment/locale/ga.js\",\n\t\"./gd\": \"../node_modules/moment/locale/gd.js\",\n\t\"./gd.js\": \"../node_modules/moment/locale/gd.js\",\n\t\"./gl\": \"../node_modules/moment/locale/gl.js\",\n\t\"./gl.js\": \"../node_modules/moment/locale/gl.js\",\n\t\"./gom-deva\": \"../node_modules/moment/locale/gom-deva.js\",\n\t\"./gom-deva.js\": \"../node_modules/moment/locale/gom-deva.js\",\n\t\"./gom-latn\": \"../node_modules/moment/locale/gom-latn.js\",\n\t\"./gom-latn.js\": \"../node_modules/moment/locale/gom-latn.js\",\n\t\"./gu\": \"../node_modules/moment/locale/gu.js\",\n\t\"./gu.js\": \"../node_modules/moment/locale/gu.js\",\n\t\"./he\": \"../node_modules/moment/locale/he.js\",\n\t\"./he.js\": \"../node_modules/moment/locale/he.js\",\n\t\"./hi\": \"../node_modules/moment/locale/hi.js\",\n\t\"./hi.js\": \"../node_modules/moment/locale/hi.js\",\n\t\"./hr\": \"../node_modules/moment/locale/hr.js\",\n\t\"./hr.js\": \"../node_modules/moment/locale/hr.js\",\n\t\"./hu\": \"../node_modules/moment/locale/hu.js\",\n\t\"./hu.js\": \"../node_modules/moment/locale/hu.js\",\n\t\"./hy-am\": \"../node_modules/moment/locale/hy-am.js\",\n\t\"./hy-am.js\": \"../node_modules/moment/locale/hy-am.js\",\n\t\"./id\": \"../node_modules/moment/locale/id.js\",\n\t\"./id.js\": \"../node_modules/moment/locale/id.js\",\n\t\"./is\": \"../node_modules/moment/locale/is.js\",\n\t\"./is.js\": \"../node_modules/moment/locale/is.js\",\n\t\"./it\": \"../node_modules/moment/locale/it.js\",\n\t\"./it-ch\": \"../node_modules/moment/locale/it-ch.js\",\n\t\"./it-ch.js\": \"../node_modules/moment/locale/it-ch.js\",\n\t\"./it.js\": \"../node_modules/moment/locale/it.js\",\n\t\"./ja\": \"../node_modules/moment/locale/ja.js\",\n\t\"./ja.js\": \"../node_modules/moment/locale/ja.js\",\n\t\"./jv\": \"../node_modules/moment/locale/jv.js\",\n\t\"./jv.js\": \"../node_modules/moment/locale/jv.js\",\n\t\"./ka\": \"../node_modules/moment/locale/ka.js\",\n\t\"./ka.js\": \"../node_modules/moment/locale/ka.js\",\n\t\"./kk\": \"../node_modules/moment/locale/kk.js\",\n\t\"./kk.js\": \"../node_modules/moment/locale/kk.js\",\n\t\"./km\": \"../node_modules/moment/locale/km.js\",\n\t\"./km.js\": \"../node_modules/moment/locale/km.js\",\n\t\"./kn\": \"../node_modules/moment/locale/kn.js\",\n\t\"./kn.js\": \"../node_modules/moment/locale/kn.js\",\n\t\"./ko\": \"../node_modules/moment/locale/ko.js\",\n\t\"./ko.js\": \"../node_modules/moment/locale/ko.js\",\n\t\"./ku\": \"../node_modules/moment/locale/ku.js\",\n\t\"./ku.js\": \"../node_modules/moment/locale/ku.js\",\n\t\"./ky\": \"../node_modules/moment/locale/ky.js\",\n\t\"./ky.js\": \"../node_modules/moment/locale/ky.js\",\n\t\"./lb\": \"../node_modules/moment/locale/lb.js\",\n\t\"./lb.js\": \"../node_modules/moment/locale/lb.js\",\n\t\"./lo\": \"../node_modules/moment/locale/lo.js\",\n\t\"./lo.js\": \"../node_modules/moment/locale/lo.js\",\n\t\"./lt\": \"../node_modules/moment/locale/lt.js\",\n\t\"./lt.js\": \"../node_modules/moment/locale/lt.js\",\n\t\"./lv\": \"../node_modules/moment/locale/lv.js\",\n\t\"./lv.js\": \"../node_modules/moment/locale/lv.js\",\n\t\"./me\": \"../node_modules/moment/locale/me.js\",\n\t\"./me.js\": \"../node_modules/moment/locale/me.js\",\n\t\"./mi\": \"../node_modules/moment/locale/mi.js\",\n\t\"./mi.js\": \"../node_modules/moment/locale/mi.js\",\n\t\"./mk\": \"../node_modules/moment/locale/mk.js\",\n\t\"./mk.js\": \"../node_modules/moment/locale/mk.js\",\n\t\"./ml\": \"../node_modules/moment/locale/ml.js\",\n\t\"./ml.js\": \"../node_modules/moment/locale/ml.js\",\n\t\"./mn\": \"../node_modules/moment/locale/mn.js\",\n\t\"./mn.js\": \"../node_modules/moment/locale/mn.js\",\n\t\"./mr\": \"../node_modules/moment/locale/mr.js\",\n\t\"./mr.js\": \"../node_modules/moment/locale/mr.js\",\n\t\"./ms\": \"../node_modules/moment/locale/ms.js\",\n\t\"./ms-my\": \"../node_modules/moment/locale/ms-my.js\",\n\t\"./ms-my.js\": \"../node_modules/moment/locale/ms-my.js\",\n\t\"./ms.js\": \"../node_modules/moment/locale/ms.js\",\n\t\"./mt\": \"../node_modules/moment/locale/mt.js\",\n\t\"./mt.js\": \"../node_modules/moment/locale/mt.js\",\n\t\"./my\": \"../node_modules/moment/locale/my.js\",\n\t\"./my.js\": \"../node_modules/moment/locale/my.js\",\n\t\"./nb\": \"../node_modules/moment/locale/nb.js\",\n\t\"./nb.js\": \"../node_modules/moment/locale/nb.js\",\n\t\"./ne\": \"../node_modules/moment/locale/ne.js\",\n\t\"./ne.js\": \"../node_modules/moment/locale/ne.js\",\n\t\"./nl\": \"../node_modules/moment/locale/nl.js\",\n\t\"./nl-be\": \"../node_modules/moment/locale/nl-be.js\",\n\t\"./nl-be.js\": \"../node_modules/moment/locale/nl-be.js\",\n\t\"./nl.js\": \"../node_modules/moment/locale/nl.js\",\n\t\"./nn\": \"../node_modules/moment/locale/nn.js\",\n\t\"./nn.js\": \"../node_modules/moment/locale/nn.js\",\n\t\"./oc-lnc\": \"../node_modules/moment/locale/oc-lnc.js\",\n\t\"./oc-lnc.js\": \"../node_modules/moment/locale/oc-lnc.js\",\n\t\"./pa-in\": \"../node_modules/moment/locale/pa-in.js\",\n\t\"./pa-in.js\": \"../node_modules/moment/locale/pa-in.js\",\n\t\"./pl\": \"../node_modules/moment/locale/pl.js\",\n\t\"./pl.js\": \"../node_modules/moment/locale/pl.js\",\n\t\"./pt\": \"../node_modules/moment/locale/pt.js\",\n\t\"./pt-br\": \"../node_modules/moment/locale/pt-br.js\",\n\t\"./pt-br.js\": \"../node_modules/moment/locale/pt-br.js\",\n\t\"./pt.js\": \"../node_modules/moment/locale/pt.js\",\n\t\"./ro\": \"../node_modules/moment/locale/ro.js\",\n\t\"./ro.js\": \"../node_modules/moment/locale/ro.js\",\n\t\"./ru\": \"../node_modules/moment/locale/ru.js\",\n\t\"./ru.js\": \"../node_modules/moment/locale/ru.js\",\n\t\"./sd\": \"../node_modules/moment/locale/sd.js\",\n\t\"./sd.js\": \"../node_modules/moment/locale/sd.js\",\n\t\"./se\": \"../node_modules/moment/locale/se.js\",\n\t\"./se.js\": \"../node_modules/moment/locale/se.js\",\n\t\"./si\": \"../node_modules/moment/locale/si.js\",\n\t\"./si.js\": \"../node_modules/moment/locale/si.js\",\n\t\"./sk\": \"../node_modules/moment/locale/sk.js\",\n\t\"./sk.js\": \"../node_modules/moment/locale/sk.js\",\n\t\"./sl\": \"../node_modules/moment/locale/sl.js\",\n\t\"./sl.js\": \"../node_modules/moment/locale/sl.js\",\n\t\"./sq\": \"../node_modules/moment/locale/sq.js\",\n\t\"./sq.js\": \"../node_modules/moment/locale/sq.js\",\n\t\"./sr\": \"../node_modules/moment/locale/sr.js\",\n\t\"./sr-cyrl\": \"../node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr-cyrl.js\": \"../node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr.js\": \"../node_modules/moment/locale/sr.js\",\n\t\"./ss\": \"../node_modules/moment/locale/ss.js\",\n\t\"./ss.js\": \"../node_modules/moment/locale/ss.js\",\n\t\"./sv\": \"../node_modules/moment/locale/sv.js\",\n\t\"./sv.js\": \"../node_modules/moment/locale/sv.js\",\n\t\"./sw\": \"../node_modules/moment/locale/sw.js\",\n\t\"./sw.js\": \"../node_modules/moment/locale/sw.js\",\n\t\"./ta\": \"../node_modules/moment/locale/ta.js\",\n\t\"./ta.js\": \"../node_modules/moment/locale/ta.js\",\n\t\"./te\": \"../node_modules/moment/locale/te.js\",\n\t\"./te.js\": \"../node_modules/moment/locale/te.js\",\n\t\"./tet\": \"../node_modules/moment/locale/tet.js\",\n\t\"./tet.js\": \"../node_modules/moment/locale/tet.js\",\n\t\"./tg\": \"../node_modules/moment/locale/tg.js\",\n\t\"./tg.js\": \"../node_modules/moment/locale/tg.js\",\n\t\"./th\": \"../node_modules/moment/locale/th.js\",\n\t\"./th.js\": \"../node_modules/moment/locale/th.js\",\n\t\"./tk\": \"../node_modules/moment/locale/tk.js\",\n\t\"./tk.js\": \"../node_modules/moment/locale/tk.js\",\n\t\"./tl-ph\": \"../node_modules/moment/locale/tl-ph.js\",\n\t\"./tl-ph.js\": \"../node_modules/moment/locale/tl-ph.js\",\n\t\"./tlh\": \"../node_modules/moment/locale/tlh.js\",\n\t\"./tlh.js\": \"../node_modules/moment/locale/tlh.js\",\n\t\"./tr\": \"../node_modules/moment/locale/tr.js\",\n\t\"./tr.js\": \"../node_modules/moment/locale/tr.js\",\n\t\"./tzl\": \"../node_modules/moment/locale/tzl.js\",\n\t\"./tzl.js\": \"../node_modules/moment/locale/tzl.js\",\n\t\"./tzm\": \"../node_modules/moment/locale/tzm.js\",\n\t\"./tzm-latn\": \"../node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm-latn.js\": \"../node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm.js\": \"../node_modules/moment/locale/tzm.js\",\n\t\"./ug-cn\": \"../node_modules/moment/locale/ug-cn.js\",\n\t\"./ug-cn.js\": \"../node_modules/moment/locale/ug-cn.js\",\n\t\"./uk\": \"../node_modules/moment/locale/uk.js\",\n\t\"./uk.js\": \"../node_modules/moment/locale/uk.js\",\n\t\"./ur\": \"../node_modules/moment/locale/ur.js\",\n\t\"./ur.js\": \"../node_modules/moment/locale/ur.js\",\n\t\"./uz\": \"../node_modules/moment/locale/uz.js\",\n\t\"./uz-latn\": \"../node_modules/moment/locale/uz-latn.js\",\n\t\"./uz-latn.js\": \"../node_modules/moment/locale/uz-latn.js\",\n\t\"./uz.js\": \"../node_modules/moment/locale/uz.js\",\n\t\"./vi\": \"../node_modules/moment/locale/vi.js\",\n\t\"./vi.js\": \"../node_modules/moment/locale/vi.js\",\n\t\"./x-pseudo\": \"../node_modules/moment/locale/x-pseudo.js\",\n\t\"./x-pseudo.js\": \"../node_modules/moment/locale/x-pseudo.js\",\n\t\"./yo\": \"../node_modules/moment/locale/yo.js\",\n\t\"./yo.js\": \"../node_modules/moment/locale/yo.js\",\n\t\"./zh-cn\": \"../node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-cn.js\": \"../node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-hk\": \"../node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-hk.js\": \"../node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-mo\": \"../node_modules/moment/locale/zh-mo.js\",\n\t\"./zh-mo.js\": \"../node_modules/moment/locale/zh-mo.js\",\n\t\"./zh-tw\": \"../node_modules/moment/locale/zh-tw.js\",\n\t\"./zh-tw.js\": \"../node_modules/moment/locale/zh-tw.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"../node_modules/moment/locale sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///../node_modules/moment/locale_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Place_PlaceContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Place/PlaceContainer */ \"./components/Place/PlaceContainer.jsx\");\n/* harmony import */ var _Language_LanguageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Language/LanguageContainer */ \"./components/Language/LanguageContainer.jsx\");\n/* harmony import */ var _OutputWindow_OutputWindowContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OutputWindow/OutputWindowContainer */ \"./components/OutputWindow/OutputWindowContainer.jsx\");\n/* harmony import */ var _TestSelectForm_TestSelectContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TestSelectForm/TestSelectContainer */ \"./components/TestSelectForm/TestSelectContainer.jsx\");\n/* harmony import */ var _store_myActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/myActions */ \"./store/myActions.js\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.scss */ \"./components/App.scss\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_6__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this, props);\n\n    _this.onPlaceChanged = function (newPlace) {\n      _this.setState({\n        place: newPlace\n      });\n    };\n\n    _this.onLanguageChanged = function (newLanguage) {\n      if (newLanguage.length > 0) {\n        _this.setState({\n          language: newLanguage[0]\n        });\n      }\n    };\n\n    _this.onSubmitForm = function (e) {\n      e.preventDefault();\n\n      _this.props.store.dispatch(Object(_store_myActions__WEBPACK_IMPORTED_MODULE_5__[\"saveData\"])({\n        place: _this.state.place,\n        language: _this.state.language\n      }));\n\n      var storeData = _this.props.store.getState();\n\n      console.log('App store=', storeData.myReducer.localData);\n\n      _this.setState({\n        isOpenOutputWindow: true\n      });\n    };\n\n    _this.closeOutputWindow = function () {\n      _this.setState({\n        isOpenOutputWindow: false\n      });\n    };\n\n    _this.state = {\n      place: {},\n      language: {},\n      isOpenOutputWindow: false\n    };\n    _this.onPlaceChanged = _this.onPlaceChanged.bind(_assertThisInitialized(_this));\n    _this.onLanguageChanged = _this.onLanguageChanged.bind(_assertThisInitialized(_this));\n    _this.onSubmitForm = _this.onSubmitForm.bind(_assertThisInitialized(_this));\n    return _this;\n  } // Выполняется при выборе страны или города - сохраняет новое значение в локальный state\n\n\n  _createClass(App, [{\n    key: \"render\",\n    //\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"app_container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"app_header\"\n      }, \"\\u0422\\u0435\\u0441\\u0442\\u043E\\u0432\\u043E\\u0435 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u0435\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"\\u0412\\u044B\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u043E: \\u0417\\u0430\\u0433\\u043B\\u0430\\u0432\\u043D\\u043E\\u0432\\u043E\\u0439 \\u041E\\u043B\\u044C\\u0433\\u043E\\u0439, \\u0441\\u0435\\u043D\\u0442\\u044F\\u0431\\u0440\\u044C 2020 \\u0433.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        className: \"app_form\",\n        onSubmit: this.onSubmitForm\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Place_PlaceContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        onPlaceChanged: this.onPlaceChanged\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Language_LanguageContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        onLanguageChanged: this.onLanguageChanged\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"app_submit\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"submit\",\n        className: \"app_submit_btn\",\n        value: \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\"\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TestSelectForm_TestSelectContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), this.state.isOpenOutputWindow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OutputWindow_OutputWindowContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        close: this.closeOutputWindow\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./components/App.jsx?");

/***/ }),

/***/ "./components/App.scss":
/*!*****************************!*\
  !*** ./components/App.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./components/App.scss?");

/***/ }),

/***/ "./components/Language/LanguageComponent.jsx":
/*!***************************************************!*\
  !*** ./components/Language/LanguageComponent.jsx ***!
  \***************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LanguageComponent\", function() { return LanguageComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"../node_modules/antd/es/index.js\");\n/* harmony import */ var _LanguageStyles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LanguageStyles.scss */ \"./components/Language/LanguageStyles.scss\");\n/* harmony import */ var _LanguageStyles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LanguageStyles_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Option = antd__WEBPACK_IMPORTED_MODULE_1__[\"AutoComplete\"].Option;\n/**\r\n * Автозаполнение - языки\r\n * \r\n * @param {languages} - array of objects \r\n * {\r\n *  code: string, \r\n *  description: string, \r\n *  }\r\n */\n\nvar LanguageComponent = function LanguageComponent(_ref) {\n  var languages = _ref.languages,\n      onLanguageChanged = _ref.onLanguageChanged;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      options = _useState2[0],\n      setOptions = _useState2[1]; // Выполняется при выборе языка\n\n\n  var onSelect = function onSelect(value) {\n    onLanguageChanged(languages.filter(function (lang) {\n      return lang.description === value;\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"languages_container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"AutoComplete\"], {\n    onSelect: onSelect,\n    className: \"languages_autoComplete\",\n    placeholder: \"B\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u044F\\u0437\\u044B\\u043A, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u043C \\u0412\\u044B \\u0432\\u043B\\u0430\\u0434\\u0435\\u0435\\u0442\\u0435\"\n  }, languages.map(function (language) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n      key: language.code,\n      value: language.description,\n      className: \"languages_options\"\n    }, language.description);\n  })));\n};\n\n//# sourceURL=webpack:///./components/Language/LanguageComponent.jsx?");

/***/ }),

/***/ "./components/Language/LanguageContainer.jsx":
/*!***************************************************!*\
  !*** ./components/Language/LanguageContainer.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _LanguageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LanguageComponent */ \"./components/Language/LanguageComponent.jsx\");\n\n\n\n\nvar mapStateToProps = function mapStateToProps(_ref, props) {\n  var myReducer = _ref.myReducer;\n  //console.log('LanguageContainer', props);\n  return {\n    languages: myReducer.data.languages\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(_LanguageComponent__WEBPACK_IMPORTED_MODULE_2__[\"LanguageComponent\"]));\n\n//# sourceURL=webpack:///./components/Language/LanguageContainer.jsx?");

/***/ }),

/***/ "./components/Language/LanguageStyles.scss":
/*!*************************************************!*\
  !*** ./components/Language/LanguageStyles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./components/Language/LanguageStyles.scss?");

/***/ }),

/***/ "./components/OutputWindow/OutputWindowComponent.jsx":
/*!***********************************************************!*\
  !*** ./components/OutputWindow/OutputWindowComponent.jsx ***!
  \***********************************************************/
/*! exports provided: OutputWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OutputWindowComponent\", function() { return OutputWindowComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _OutputWindowStyles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OutputWindowStyles.scss */ \"./components/OutputWindow/OutputWindowStyles.scss\");\n/* harmony import */ var _OutputWindowStyles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_OutputWindowStyles_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\r\n * Окно вывода результата\r\n * @param {localData} - объект, содержащий выбранные данные и сохраненный в store Redux\r\n *  {\r\n *  place: {\r\n *          id: number,\r\n *          name: string\r\n *          },\r\n *  language: {\r\n *          code: string,\r\n *          description: string\r\n *          }\r\n * }\r\n */\n\nvar OutputWindowComponent = function OutputWindowComponent(_ref) {\n  var localData = _ref.localData,\n      close = _ref.close;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"outputWindow_container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"outputWindow_modal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"outputWindow_modal--close\",\n    onClick: close\n  }, \"\\xD7\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"outputWindow_place\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u041C\\u0435\\u0441\\u0442\\u043E:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"outputWindow_place--id\"\n  }, \"id: \", localData.place.id, \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"outputWindow_place--name\"\n  }, \"name: \", localData.place.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"outputWindow_language\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u042F\\u0437\\u044B\\u043A:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"outputWindow_language--code\"\n  }, localData.language.code, \", \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"outputWindow_language--description\"\n  }, localData.language.description)))));\n};\n\n//# sourceURL=webpack:///./components/OutputWindow/OutputWindowComponent.jsx?");

/***/ }),

/***/ "./components/OutputWindow/OutputWindowContainer.jsx":
/*!***********************************************************!*\
  !*** ./components/OutputWindow/OutputWindowContainer.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _OutputWindowComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OutputWindowComponent */ \"./components/OutputWindow/OutputWindowComponent.jsx\");\n\n\n\n\nvar mapStateToProps = function mapStateToProps(_ref, props) {\n  var myReducer = _ref.myReducer;\n  return {\n    localData: myReducer.localData\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(_OutputWindowComponent__WEBPACK_IMPORTED_MODULE_2__[\"OutputWindowComponent\"]));\n\n//# sourceURL=webpack:///./components/OutputWindow/OutputWindowContainer.jsx?");

/***/ }),

/***/ "./components/OutputWindow/OutputWindowStyles.scss":
/*!*********************************************************!*\
  !*** ./components/OutputWindow/OutputWindowStyles.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./components/OutputWindow/OutputWindowStyles.scss?");

/***/ }),

/***/ "./components/Place/PlaceComponent.jsx":
/*!*********************************************!*\
  !*** ./components/Place/PlaceComponent.jsx ***!
  \*********************************************/
/*! exports provided: PlaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlaceComponent\", function() { return PlaceComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"../node_modules/antd/es/index.js\");\n/* harmony import */ var _PlaceStyles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceStyles.scss */ \"./components/Place/PlaceStyles.scss\");\n/* harmony import */ var _PlaceStyles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PlaceStyles_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**\r\n * Дерево - страны и города\r\n * \r\n * @param {countries} - array of objects \r\n * {\r\n *  id: number, \r\n *  name: string, \r\n *  cities: array of objects\r\n *      {\r\n *      id: number,\r\n *      name: string\r\n *      }\r\n *  }\r\n * @param {languages} - array of objects \r\n * {\r\n *  code: string, \r\n *  description: string, \r\n *  }\r\n */\n\nvar PlaceComponent = function PlaceComponent(_ref) {\n  var countries = _ref.countries,\n      onPlaceChanged = _ref.onPlaceChanged;\n\n  //Выполняется при выборе ветви или листа дерева\n  var onSelect = function onSelect(selectedKeys, info) {\n    onPlaceChanged({\n      id: info.node.key,\n      name: info.node.title\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"place_container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Tree\"], {\n    treeData: countries,\n    onSelect: onSelect,\n    className: \"place_tree\"\n  }));\n};\n\n//# sourceURL=webpack:///./components/Place/PlaceComponent.jsx?");

/***/ }),

/***/ "./components/Place/PlaceContainer.jsx":
/*!*********************************************!*\
  !*** ./components/Place/PlaceContainer.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _PlaceComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceComponent */ \"./components/Place/PlaceComponent.jsx\");\n\n\n\n\nvar mapStateToProps = function mapStateToProps(_ref, props) {\n  var myReducer = _ref.myReducer;\n  return {\n    countries: myReducer.data.countries\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(_PlaceComponent__WEBPACK_IMPORTED_MODULE_2__[\"PlaceComponent\"]));\n\n//# sourceURL=webpack:///./components/Place/PlaceContainer.jsx?");

/***/ }),

/***/ "./components/Place/PlaceStyles.scss":
/*!*******************************************!*\
  !*** ./components/Place/PlaceStyles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./components/Place/PlaceStyles.scss?");

/***/ }),

/***/ "./components/TestSelectForm/TestSelect.scss":
/*!***************************************************!*\
  !*** ./components/TestSelectForm/TestSelect.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./components/TestSelectForm/TestSelect.scss?");

/***/ }),

/***/ "./components/TestSelectForm/TestSelectComponent.jsx":
/*!***********************************************************!*\
  !*** ./components/TestSelectForm/TestSelectComponent.jsx ***!
  \***********************************************************/
/*! exports provided: TestSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TestSelectComponent\", function() { return TestSelectComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"../node_modules/antd/es/index.js\");\n/* harmony import */ var _TestSelect_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TestSelect.scss */ \"./components/TestSelectForm/TestSelect.scss\");\n/* harmony import */ var _TestSelect_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TestSelect_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Option = antd__WEBPACK_IMPORTED_MODULE_1__[\"Select\"].Option;\nvar countries = {\n  '1': [{\n    id: 1,\n    name: 'China'\n  }, {\n    id: 2,\n    name: 'Russia'\n  }, {\n    id: 3,\n    name: 'USA'\n  }, {\n    id: 4,\n    name: 'Canada'\n  }],\n  '2': [{\n    id: 1,\n    name: 'Brazil'\n  }, {\n    id: 2,\n    name: 'Portugal'\n  }, {\n    id: 3,\n    name: 'Italy'\n  }]\n};\nvar TestSelectComponent = function TestSelectComponent(_ref) {\n  var defaultValue = _ref.defaultValue,\n      saveDefault = _ref.saveDefault;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('1'),\n      _useState2 = _slicedToArray(_useState, 2),\n      selector = _useState2[0],\n      setSelector = _useState2[1];\n\n  var onChange = function onChange(e) {\n    setSelector(e.target.value);\n  };\n\n  var onChangeSelectAntd = function onChangeSelectAntd(e) {\n    console.log('onChangeSelectAntd', selector, e);\n    saveDefault({\n      selector: selector,\n      newData: e\n    });\n  };\n\n  var onChangeSelect = function onChangeSelect(e) {\n    console.log('onChangeSelect', selector, e.currentTarget.value);\n    saveDefault({\n      selector: selector,\n      newData: e.currentTarget.value\n    });\n  };\n\n  var isSelected = function isSelected(item) {\n    if (defaultValue[selector]) {\n      return item.name === defaultValue[selector] ? true : false;\n    } else {\n      return item.id === countries[selector][0].id ? true : false;\n    }\n  };\n\n  console.log('TestSelectComponent', defaultValue, selector);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    initialValues: {\n      'select': defaultValue[selector] ? defaultValue[selector] : [countries[selector][0].name],\n      'radio-group': '1',\n      rate: 4\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n    name: \"radio-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Radio\"].Group, {\n    onChange: onChange\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Radio\"], {\n    value: \"1\"\n  }, \"1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Radio\"], {\n    value: \"2\"\n  }, \"2\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n    name: \"select\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    onChange: onChangeSelectAntd,\n    value: defaultValue[selector] ? defaultValue[selector] : [countries[selector][0].name],\n    mode: \"multiple\"\n  }, countries[selector].map(function (country) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Select\"].Option, {\n      key: country.id,\n      value: country.name\n    }, country.name);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    className: \"select\",\n    onChange: onChangeSelect\n  }, countries[selector].map(function (country) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      key: country.id,\n      value: country.name,\n      selected: isSelected(country)\n    }, country.name);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n    name: \"rate\",\n    label: \"Rate\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Rate\"], null)));\n};\n\n//# sourceURL=webpack:///./components/TestSelectForm/TestSelectComponent.jsx?");

/***/ }),

/***/ "./components/TestSelectForm/TestSelectContainer.jsx":
/*!***********************************************************!*\
  !*** ./components/TestSelectForm/TestSelectContainer.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"../node_modules/redux/es/redux.js\");\n/* harmony import */ var _store_myActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/myActions */ \"./store/myActions.js\");\n/* harmony import */ var _TestSelectComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TestSelectComponent */ \"./components/TestSelectForm/TestSelectComponent.jsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(_ref, props) {\n  var myReducer = _ref.myReducer;\n  return {\n    countries: myReducer.data.countries,\n    defaultValue: myReducer.defaultValue\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"bindActionCreators\"])({\n    saveDefault: _store_myActions__WEBPACK_IMPORTED_MODULE_3__[\"saveDefault\"]\n  }, dispatch);\n};\n\nvar mergeProps = function mergeProps(stateProps, dispatchProps, props) {\n  return _objectSpread(_objectSpread({}, stateProps), {}, {\n    saveDefault: function saveDefault(_ref2) {\n      var selector = _ref2.selector,\n          newData = _ref2.newData;\n      return dispatchProps.saveDefault(selector, newData);\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps, mergeProps)(_TestSelectComponent__WEBPACK_IMPORTED_MODULE_4__[\"TestSelectComponent\"]));\n\n//# sourceURL=webpack:///./components/TestSelectForm/TestSelectContainer.jsx?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./components/App.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/store */ \"./store/store.js\");\n/* harmony import */ var _store_myActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/myActions */ \"./store/myActions.js\");\n\n\n\n\n\n\n\nvar myDataJSON = __webpack_require__(/*! ./store/data.json */ \"./store/data.json\");\n\nconsole.log('index JSON=', myDataJSON);\nvar store = Object(_store_store__WEBPACK_IMPORTED_MODULE_4__[\"initStore\"])();\nstore.dispatch(Object(_store_myActions__WEBPACK_IMPORTED_MODULE_5__[\"loadData\"])());\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  store: store\n})), document.getElementById('root'));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./store/data.js":
/*!***********************!*\
  !*** ./store/data.js ***!
  \***********************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\nvar data = {\n  \"countries\": [{\n    \"key\": 1000,\n    \"title\": \"Россия\",\n    \"children\": [{\n      \"key\": 1001,\n      \"title\": \"Москва\"\n    }, {\n      \"key\": 1006,\n      \"title\": \"Санкт-Петербург\"\n    }]\n  }, {\n    \"key\": 1100,\n    \"title\": \"Израиль\",\n    \"children\": [{\n      \"key\": 1101,\n      \"title\": \"Тель-Авив\"\n    }, {\n      \"key\": 1102,\n      \"title\": \"Хайфа\"\n    }]\n  }],\n  \"languages\": [{\n    \"code\": \"rus\",\n    \"description\": \"Русский\"\n  }, {\n    \"code\": \"eng\",\n    \"description\": \"Английский\"\n  }, {\n    \"code\": \"heb\",\n    \"description\": \"Иврит\"\n  }]\n};\n\n//# sourceURL=webpack:///./store/data.js?");

/***/ }),

/***/ "./store/data.json":
/*!*************************!*\
  !*** ./store/data.json ***!
  \*************************/
/*! exports provided: countries, languages, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"countries\\\":[{\\\"key\\\":1000,\\\"title\\\":\\\"Россия\\\",\\\"children\\\":[{\\\"key\\\":1001,\\\"title\\\":\\\"Москва\\\"},{\\\"key\\\":1006,\\\"title\\\":\\\"Санкт-Петербург\\\"}]},{\\\"key\\\":1100,\\\"title\\\":\\\"Израиль\\\",\\\"children\\\":[{\\\"key\\\":1101,\\\"title\\\":\\\"Тель-Авив\\\"},{\\\"key\\\":1102,\\\"title\\\":\\\"Хайфа\\\"}]}],\\\"languages\\\":[{\\\"code\\\":\\\"rus\\\",\\\"description\\\":\\\"Русский\\\"},{\\\"code\\\":\\\"eng\\\",\\\"description\\\":\\\"Английский\\\"},{\\\"code\\\":\\\"heb\\\",\\\"description\\\":\\\"Иврит\\\"}]}\");\n\n//# sourceURL=webpack:///./store/data.json?");

/***/ }),

/***/ "./store/myActions.js":
/*!****************************!*\
  !*** ./store/myActions.js ***!
  \****************************/
/*! exports provided: loadData, saveData, saveDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadData\", function() { return loadData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveData\", function() { return saveData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveDefault\", function() { return saveDefault; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"../node_modules/redux-actions/es/index.js\");\n\n\nvar _createActions = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createActions\"])({\n  LOAD_DATA: function LOAD_DATA() {\n    return {};\n  },\n  SAVE_DATA: function SAVE_DATA(newData) {\n    return {\n      newData: newData\n    };\n  },\n  SAVE_DEFAULT: function SAVE_DEFAULT(selector, newData) {\n    return {\n      selector: selector,\n      newData: newData\n    };\n  }\n}),\n    loadData = _createActions.loadData,\n    saveData = _createActions.saveData,\n    saveDefault = _createActions.saveDefault;\n\n\n\n//# sourceURL=webpack:///./store/myActions.js?");

/***/ }),

/***/ "./store/myReducer.js":
/*!****************************!*\
  !*** ./store/myReducer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"../node_modules/redux-actions/es/index.js\");\n/* harmony import */ var _myActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myActions */ \"./store/myActions.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./store/data.js\");\nvar _handleActions;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar defaultState = {\n  data: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"handleActions\"])((_handleActions = {}, _defineProperty(_handleActions, _myActions__WEBPACK_IMPORTED_MODULE_1__[\"loadData\"], function (state) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    data: _data__WEBPACK_IMPORTED_MODULE_2__[\"data\"],\n    defaultValue: {}\n  });\n}), _defineProperty(_handleActions, _myActions__WEBPACK_IMPORTED_MODULE_1__[\"saveData\"], function (state, _ref) {\n  var newData = _ref.payload.newData;\n  return _objectSpread(_objectSpread({}, state), {}, {\n    localData: newData\n  });\n}), _defineProperty(_handleActions, _myActions__WEBPACK_IMPORTED_MODULE_1__[\"saveDefault\"], function (state, _ref2) {\n  var _ref2$payload = _ref2.payload,\n      selector = _ref2$payload.selector,\n      newData = _ref2$payload.newData;\n  // console.log('Reducer selector=', selector);\n  // console.log('Reducer newData=', newData);\n  return _objectSpread(_objectSpread({}, state), {}, {\n    defaultValue: _objectSpread(_objectSpread({}, state.defaultValue), {}, _defineProperty({}, selector, newData))\n  });\n}), _handleActions), defaultState));\n\n//# sourceURL=webpack:///./store/myReducer.js?");

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"../node_modules/redux/es/redux.js\");\n/* harmony import */ var _myReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myReducer */ \"./store/myReducer.js\");\n\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  myReducer: _myReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\nvar initStore = function initStore() {\n  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());\n};\n\n//# sourceURL=webpack:///./store/store.js?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"../node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./index.js?");

/***/ })

/******/ });