/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(28);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	TODO
	1) Make a list with functionality that need to patch [done]
	2) Get "blueprints" of these methods [done]
	3) Rewrite methods with Photoshop javascript environment and "blueprints" licences in mind

	Function
	• Function.bind [done]

	Object
	• Object.defineProperty [done]
	• Object.getOwnPropertyDescriptor [done]
	• Object.defineProperties 	 [done]
	• Object.create			  	 [done]
	• Object.getOwnPropertyNames [done]
	• Object.getPrototypeOf		 [done]
	• Object.preventExtensions   [done]
	• Object.isExtensible		 [done]
	• Object.seal 				 [done]
	• Object.isSealed(obj)		 [done]
	• Object.freeze 			 [done]
	• Object.isFrozen(obj)		 [done]
	• Object.keys 				 [done]

	Array
	• Array.isArray					[done]
	• Array.prototype.indexOf 		[done]
	• Array.prototype.lastIndexOf	[done]
	• Array.prototype.every 		[done]
	• Array.prototype.some			[done]
	• Array.prototype.forEach		[done]
	• Array.prototype.map			[done]
	• Array.prototype.filter		[done]
	• Array.prototype.reduce 		[done]
	• Array.prototype.reduceRight	[done]


	String
	• String.prototype.trim	

	Other
	• console.log
	• window



	*/
	__webpack_require__(3)

	__webpack_require__(4)
	__webpack_require__(5)
	__webpack_require__(6)
	__webpack_require__(7)
	__webpack_require__(8)
	__webpack_require__(9)
	__webpack_require__(10)
	__webpack_require__(11)
	__webpack_require__(12)
	__webpack_require__(13)

	__webpack_require__(14)

	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	*/
	if (!String.prototype.trim) {
		// Вырезаем BOM и неразрывный пробел
		String.prototype.trim = function() {
			return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
		};
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
	*/
	if (!Array.prototype.every) {
	  Array.prototype.every = function(callback, thisArg) {
	    var T, k;

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.every called on null or undefined');
	    }

	    // 1. Let O be the result of calling ToObject passing the this 
	    //    value as the argument.
	    var O = Object(this);

	    // 2. Let lenValue be the result of calling the Get internal method
	    //    of O with the argument "length".
	    // 3. Let len be ToUint32(lenValue).
	    var len = O.length >>> 0;

	    // 4. If IsCallable(callback) is false, throw a TypeError exception.
	    if (callback.__class__ !== 'Function') {
	      throw new TypeError(callback + ' is not a function');
	    }

	    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
	    T = (arguments.length > 1) ? thisArg : void 0;

	    // 6. Let k be 0.
	    k = 0;

	    // 7. Repeat, while k < len
	    while (k < len) {

	      var kValue;

	      // a. Let Pk be ToString(k).
	      //   This is implicit for LHS operands of the in operator
	      // b. Let kPresent be the result of calling the HasProperty internal 
	      //    method of O with argument Pk.
	      //   This step can be combined with c
	      // c. If kPresent is true, then
	      if (k in O) {

	        // i. Let kValue be the result of calling the Get internal method
	        //    of O with argument Pk.
	        kValue = O[k];

	        // ii. Let testResult be the result of calling the Call internal method
	        //     of callback with T as the this value and argument list 
	        //     containing kValue, k, and O.
	        var testResult = callback.call(T, kValue, k, O);

	        // iii. If ToBoolean(testResult) is false, return false.
	        if (!testResult) {
	          return false;
	        }
	      }
	      k++;
	    }
	    return true;
	  };
	}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	*/
	if (!Array.prototype.filter) {
	  Array.prototype.filter = function(callback, thisArg) {

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.filter called on null or undefined');
	    }

	    var t = Object(this);
	    var len = t.length >>> 0;

	    if (callback.__class__ !== 'Function') {
	      throw new TypeError(callback + ' is not a function');
	    }

	    var res = [];

	    var T = (arguments.length > 1) ? thisArg : void 0;
	    
	    for (var i = 0; i < len; i++) {
	      if (i in t) {
	        var val = t[i];

	        // NOTE: Technically this should Object.defineProperty at
	        //       the next index, as push can be affected by
	        //       properties on Object.prototype and Array.prototype.
	        //       But that method's new, and collisions should be
	        //       rare, so use the more-compatible alternative.
	        if (callback.call(T, val, i, t)) {
	          res.push(val);
	        }
	      }
	    }

	    return res;
	  };
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.18
	// Reference: http://es5.github.io/#x15.4.4.18
	if (!Array.prototype.forEach) {
	    Array.prototype.forEach = function(callback, thisArg) {


	        if (this === void 0 || this === null) {
	            throw new TypeError('Array.prototype.forEach called on null or undefined');
	        }

	        // 1. Let O be the result of calling toObject() passing the
	        // |this| value as the argument.
	        var O = Object(this);

	        // 2. Let lenValue be the result of calling the Get() internal
	        // method of O with the argument "length".
	        // 3. Let len be toUint32(lenValue).
	        var len = O.length >>> 0;

	        // 4. If isCallable(callback) is false, throw a TypeError exception. 
	        // See: http://es5.github.com/#x9.11
	        if (callback.__class__ !== 'Function') {
	            throw new TypeError(callback + ' is not a function');
	        }

	        // 5. If thisArg was supplied, let T be thisArg; else let
	        // T be undefined.
	        var T = (arguments.length > 1) ? thisArg : void 0;


	        // 6. Let k be 0
	        //k = 0;

	        // 7. Repeat, while k < len
	        for (var k = 0; k < len; k++) {
	            var kValue;
	            // a. Let Pk be ToString(k).
	            //    This is implicit for LHS operands of the in operator
	            // b. Let kPresent be the result of calling the HasProperty
	            //    internal method of O with argument Pk.
	            //    This step can be combined with c
	            // c. If kPresent is true, then
	            if (k in O) {
	                // i. Let kValue be the result of calling the Get internal
	                // method of O with argument Pk.
	                kValue = O[k];
	                // ii. Call the Call internal method of callback with T as
	                // the this value and argument list containing kValue, k, and O.
	                callback.call(T, kValue, k, O);
	            }
	        }
	        // 8. return undefined
	    }
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.14
	// Reference: http://es5.github.io/#x15.4.4.14
	if (!Array.prototype.indexOf) {
	  Array.prototype.indexOf = function(searchElement, fromIndex) {


	    // 1. Let o be the result of calling ToObject passing
	    //    the this value as the argument.
	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.indexOf called on null or undefined');
	    }

	    var k;
	    var o = Object(this);

	    // 2. Let lenValue be the result of calling the Get
	    //    internal method of o with the argument "length".
	    // 3. Let len be ToUint32(lenValue).
	    var len = o.length >>> 0;

	    // 4. If len is 0, return -1.
	    if (len === 0) {
	      return -1;
	    }

	    // 5. If argument fromIndex was passed let n be
	    //    ToInteger(fromIndex); else let n be 0.
	    var n = +fromIndex || 0;

	    if (Math.abs(n) === Infinity) {
	      n = 0;
	    }

	    // 6. If n >= len, return -1.
	    if (n >= len) {
	      return -1;
	    }

	    // 7. If n >= 0, then Let k be n.
	    // 8. Else, n<0, Let k be len - abs(n).
	    //    If k is less than 0, then let k be 0.
	    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

	    // 9. Repeat, while k < len
	    while (k < len) {
	      // a. Let Pk be ToString(k).
	      //   This is implicit for LHS operands of the in operator
	      // b. Let kPresent be the result of calling the
	      //    HasProperty internal method of o with argument Pk.
	      //   This step can be combined with c
	      // c. If kPresent is true, then
	      //    i.  Let elementK be the result of calling the Get
	      //        internal method of o with the argument ToString(k).
	      //   ii.  Let same be the result of applying the
	      //        Strict Equality Comparison Algorithm to
	      //        searchElement and elementK.
	      //  iii.  If same is true, return k.
	      if (k in o && o[k] === searchElement) {
	        return k;
	      }
	      k++;
	    }
	    return -1;
	  };
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
	*/
	if (!Array.isArray) {
	  Array.isArray = function(arg) {

	    if (arg === void 0 || arg === null) {
	      return false;
	    }
	  	return (arg.__class__ === 'Array');
	  };
	}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.15
	// Reference: http://es5.github.io/#x15.4.4.15
	if (!Array.prototype.lastIndexOf) {
	  Array.prototype.lastIndexOf = function(searchElement, fromIndex) {

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.lastIndexOf called on null or undefined');
	    }

	    var n, k,
	      t = Object(this),
	      len = t.length >>> 0;
	    if (len === 0) {
	      return -1;
	    }

	    n = len - 1;
	    if (arguments.length > 1) {
	      n = Number(arguments[1]);
	      if (n != n) {
	        n = 0;
	      }
	      else if (n != 0 && n != Infinity && n != -Infinity) {
	        n = (n > 0 || -1) * Math.floor(Math.abs(n));
	      }
	    }

	    for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) {
	      if (k in t && t[k] === searchElement) {
	        return k;
	      }
	    }
	    return -1;
	  };
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.19
	// Reference: http://es5.github.io/#x15.4.4.19
	if (!Array.prototype.map) {

	  Array.prototype.map = function(callback, thisArg) {

	    var T, A, k;

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.map called on null or undefined');
	    }

	    // 1. Let O be the result of calling ToObject passing the |this| 
	    //    value as the argument.
	    var O = Object(this);

	    // 2. Let lenValue be the result of calling the Get internal 
	    //    method of O with the argument "length".
	    // 3. Let len be ToUint32(lenValue).
	    var len = O.length >>> 0;

	    // 4. If IsCallable(callback) is false, throw a TypeError exception.
	    // See: http://es5.github.com/#x9.11
	    if (callback.__class__ !== 'Function') {
	      throw new TypeError(callback + ' is not a function');
	    }

	    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
	    T = (arguments.length > 1) ? thisArg : void 0;

	    // 6. Let A be a new array created as if by the expression new Array(len) 
	    //    where Array is the standard built-in constructor with that name and 
	    //    len is the value of len.
	    A = new Array(len);

	    for (var k = 0; k < len; k++) {

	      var kValue, mappedValue;

	      // a. Let Pk be ToString(k).
	      //   This is implicit for LHS operands of the in operator
	      // b. Let kPresent be the result of calling the HasProperty internal 
	      //    method of O with argument Pk.
	      //   This step can be combined with c
	      // c. If kPresent is true, then
	      if (k in O) {

	        // i. Let kValue be the result of calling the Get internal 
	        //    method of O with argument Pk.
	        kValue = O[k];

	        // ii. Let mappedValue be the result of calling the Call internal 
	        //     method of callback with T as the this value and argument 
	        //     list containing kValue, k, and O.
	        mappedValue = callback.call(T, kValue, k, O);

	        // iii. Call the DefineOwnProperty internal method of A with arguments
	        // Pk, Property Descriptor
	        // { Value: mappedValue,
	        //   Writable: true,
	        //   Enumerable: true,
	        //   Configurable: true },
	        // and false.

	        // In browsers that support Object.defineProperty, use the following:
	        // Object.defineProperty(A, k, {
	        //   value: mappedValue,
	        //   writable: true,
	        //   enumerable: true,
	        //   configurable: true
	        // });

	        // For best browser support, use the following:
	        A[k] = mappedValue;
	      }
	    }
	    // 9. return A
	    return A;
	  };
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.21
	// Reference: http://es5.github.io/#x15.4.4.21
	if (!Array.prototype.reduce) {
	  Array.prototype.reduce = function(callback, initialValue) {

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.reduce called on null or undefined');
	    }

	    if (callback.__class__ !== 'Function') {
	      throw new TypeError(callback + ' is not a function');
	    }

	    var t = Object(this), len = t.length >>> 0, k = 0, value;

	    if (arguments.length > 1) 
	      {
	        value = initialValue;
	      } 
	    else 
	      {
	        while (k < len && !(k in t)) {
	          k++; 
	        }
	        if (k >= len) {
	          throw new TypeError('Reduce of empty array with no initial value');
	        }
	        value = t[k++];
	      }

	    for (; k < len; k++) {
	      if (k in t) {
	        value = callback(value, t[k], k, t);
	      }
	    }
	    return value;
	  };
	}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.22
	// Reference: http://es5.github.io/#x15.4.4.22
	if (!Array.prototype.reduceRight) {
	  Array.prototype.reduceRight = function(callback, initialValue) {

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.reduceRight called on null or undefined');
	    }

	    if (callback.__class__ !== 'Function') {
	      throw new TypeError(callback + ' is not a function');
	    }

	    var t = Object(this), len = t.length >>> 0, k = len - 1, value;
	    if (arguments.length > 1) 
	      {
	        value = initialValue;
	      } 
	    else 
	      {
	        while (k >= 0 && !(k in t)) {
	          k--;
	        }
	        if (k < 0) {
	          throw new TypeError('Reduce of empty array with no initial value');
	        }
	        value = t[k--];
	      }
	      
	    for (; k >= 0; k--) {
	      if (k in t) {
	        value = callback(value, t[k], k, t);
	      }
	    }
	    return value;
	  };
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.17
	// Reference: http://es5.github.io/#x15.4.4.17
	if (!Array.prototype.some) {
	  Array.prototype.some = function(callback, thisArg) {

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.some called on null or undefined');
	    }

	    if (callback.__class__ !== 'Function') {
	      throw new TypeError(callback + ' is not a function');
	    }

	    var t = Object(this);
	    var len = t.length >>> 0;

	    var T = arguments.length > 1 ? thisArg : void 0;
	    for (var i = 0; i < len; i++) {
	      if (i in t && callback.call(T, t[i], i, t)) {
	        return true;
	      }
	    }

	    return false;
	  };
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill

	WARNING! Bound functions used as constructors NOT supported by this polyfill!
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Bound_functions_used_as_constructors
	*/
	if (!Function.prototype.bind) {
	  Function.prototype.bind = function(oThis) {
	    if (this.__class__ !== 'Function') {
	      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	    }

	    var aArgs   = Array.prototype.slice.call(arguments, 1),
	        fToBind = this,
	        fNOP    = function() {},
	        fBound  = function() {
	          return fToBind.apply(this instanceof fNOP
	                 ? this
	                 : oThis,
	                 aArgs.concat(Array.prototype.slice.call(arguments)));
	        };

	    if (this.prototype) {
	      // Function.prototype doesn't have a prototype property
	      fNOP.prototype = this.prototype; 
	    }
	    fBound.prototype = new fNOP();

	    return fBound;
	  };
	}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	if (!Object.create) {
	  // Production steps of ECMA-262, Edition 5, 15.2.3.5
	  // Reference: http://es5.github.io/#x15.2.3.5
	  Object.create = (function() {
	    // To save on memory, use a shared constructor
	    function Temp() {}

	    // make a safe reference to Object.prototype.hasOwnProperty
	    var hasOwn = Object.prototype.hasOwnProperty;

	    return function(O) {
	      // 1. If Type(O) is not Object or Null throw a TypeError exception.
	      if (Object(O) !== O && O !== null) {
	        throw TypeError('Object prototype may only be an Object or null');
	      }

	      // 2. Let obj be the result of creating a new object as if by the
	      //    expression new Object() where Object is the standard built-in
	      //    constructor with that name
	      // 3. Set the [[Prototype]] internal property of obj to O.
	      Temp.prototype = O;
	      var obj = new Temp();
	      Temp.prototype = null; // Let's not keep a stray reference to O...

	      // 4. If the argument Properties is present and not undefined, add
	      //    own properties to obj as if by calling the standard built-in
	      //    function Object.defineProperties with arguments obj and
	      //    Properties.
	      if (arguments.length > 1) {
	        // Object.defineProperties does ToObject on its first argument.
	        var Properties = Object(arguments[1]);
	        for (var prop in Properties) {
	          if (hasOwn.call(Properties, prop)) {
	            var descriptor = Properties[prop];
	            if (Object(descriptor) !== descriptor) {
	              throw TypeError(prop + 'must be an object');
	            }
	            if ('get' in descriptor || 'set' in descriptor) {
	              throw new TypeError('getters & setters can not be defined on this javascript engine');
	            }
	            if ('value' in descriptor) {
	              obj[prop] = Properties[prop];
	            }

	          }
	        }
	      }

	      // 5. Return obj
	      return obj;
	    };
	  })();
	}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties#Polyfill
	*/
	if (!Object.defineProperties) {

	  Object.defineProperties = function(object, props) {

	    function hasProperty(obj, prop) {
	      return Object.prototype.hasOwnProperty.call(obj, prop);
	    }

	    function convertToDescriptor(desc) {

	      if (Object(desc) !== desc) {
	        throw new TypeError('Descriptor can only be an Object.');
	      }


	      var d = {};

	      if (hasProperty(desc, "enumerable")) {
	        d.enumerable = !!desc.enumerable;
	      }

	      if (hasProperty(desc, "configurable")) {
	        d.configurable = !!desc.configurable;
	      }

	      if (hasProperty(desc, "value")) {
	        d.value = desc.value;
	      }

	      if (hasProperty(desc, "writable")) {
	        d.writable = !!desc.writable;
	      }

	      if (hasProperty(desc, "get")) {
	        throw new TypeError('getters & setters can not be defined on this javascript engine');
	      }

	      if (hasProperty(desc, "set")) {
	        throw new TypeError('getters & setters can not be defined on this javascript engine');
	      }

	      return d;
	    }

	    if (Object(object) !== object) {
	      throw new TypeError('Object.defineProperties can only be called on Objects.');
	    }

	    if (Object(props) !== props) {
	      throw new TypeError('Properties can only be an Object.');
	    }

	    var properties = Object(props);
	    for (propName in properties) {
	      if (hasOwnProperty.call(properties, propName)) {
	        var descr = convertToDescriptor(properties[propName]);
	        object[propName] = descr.value;
	      }
	    }
	    return object;
	  }
	}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	if (!Object.defineProperty) {

	    Object.defineProperty = function defineProperty(object, property, descriptor) {

	        if (Object(object) !== object) {
	            throw new TypeError('Object.defineProperty can only be called on Objects.');
	        }

	        if (Object(descriptor) !== descriptor) {
	            throw new TypeError('Property description can only be an Object.');
	        }

	        if ('get' in descriptor || 'set' in descriptor) {
	            throw new TypeError('getters & setters can not be defined on this javascript engine');
	        }
	        // If it's a data property.
	        if ('value' in descriptor) {
	            // fail silently if 'writable', 'enumerable', or 'configurable'
	            // are requested but not supported
	            // can't implement these features; allow true but not false
	            /* if ( 
	                     ('writable' in descriptor && !descriptor.writable) ||
	                     ('enumerable' in descriptor && !descriptor.enumerable) ||
	                     ('configurable' in descriptor && !descriptor.configurable)
	                 )
	                     {
	                         throw new RangeError('This implementation of Object.defineProperty does not support configurable, enumerable, or writable properties SET to FALSE.');
	                     }*/


	            object[property] = descriptor.value;
	        }
	        return object;
	    }
	}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	/*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
	// ES5 15.2.3.9
	// http://es5.github.com/#x15.2.3.9
	if (!Object.freeze) {
	    Object.freeze = function freeze(object) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.freeze can only be called on Objects.');
	        }
	        // this is misleading and breaks feature-detection, but
	        // allows "securable" code to "gracefully" degrade to working
	        // but insecure code.
	        return object;
	    };
	}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	if (!Object.getOwnPropertyDescriptor) {

	    Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.getOwnPropertyDescriptor can only be called on Objects.');
	        }

	        var descriptor;
	        if (!Object.prototype.hasOwnProperty.call(object, property)) {
	            return descriptor;
	        }

	        descriptor = {
	            enumerable: Object.prototype.propertyIsEnumerable.call(object, property),
	            configurable: true
	        };

	        descriptor.value = object[property];

	        var psPropertyType = object.reflect.find(property).type;
	        descriptor.writable = !(psPropertyType === "readonly");

	        return descriptor;
	    }
	}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	if (!Object.getOwnPropertyNames) {
	    Object.getOwnPropertyNames = function getOwnPropertyNames(object) {

	        if (Object(object) !== object) {
	            throw new TypeError('Object.getOwnPropertyNames can only be called on Objects.');
	        }
	        var names = [];
	        var hasOwnProperty = Object.prototype.hasOwnProperty;
	        var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
	        for (var prop in object) {
	            if (hasOwnProperty.call(object, prop)) {
	                names.push(prop);
	            }
	        }
	        var properties = object.reflect.properties;
	        var methods = object.reflect.methods;
	        var all = methods.concat(properties);
	        for (var i = 0; i < all.length; i++) {
	            var prop = all[i].name;
	            if (hasOwnProperty.call(object, prop) && !(propertyIsEnumerable.call(object, prop))) {
	                names.push(prop);
	            }
	        }
	        return names;
	    };
	}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	if (!Object.getPrototypeOf) {
		Object.getPrototypeOf = function(object) {
			if (Object(object) !== object) {
				throw new TypeError('Object.getPrototypeOf can only be called on Objects.');
			}
			return object.__proto__;
		}
	}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	// ES5 15.2.3.13
	// http://es5.github.com/#x15.2.3.13
	if (!Object.isExtensible) {
	    Object.isExtensible = function isExtensible(object) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.isExtensible can only be called on Objects.');
	        }
	        return true;
	    };
	}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
	// ES5 15.2.3.12
	// http://es5.github.com/#x15.2.3.12
	if (!Object.isFrozen) {
	    Object.isFrozen = function isFrozen(object) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.isFrozen can only be called on Objects.');
	        }
	        return false;
	    };
	}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	/*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
	// ES5 15.2.3.11
	// http://es5.github.com/#x15.2.3.11
	if (!Object.isSealed) {
	    Object.isSealed = function isSealed(object) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.isSealed can only be called on Objects.');
	        }
	        return false;
	    };
	}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	if (!Object.keys) {
	    Object.keys = function(object) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.keys can only be called on Objects.');
	        }
	        var hasOwnProperty = Object.prototype.hasOwnProperty;
	        var result = [];
	        for (var prop in object) {
	            if (hasOwnProperty.call(object, prop)) {
	                result.push(prop);
	            }
	        }
	        return result;
	    };
	}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	/*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
	// ES5 15.2.3.10
	// http://es5.github.com/#x15.2.3.10
	if (!Object.preventExtensions) {
	    Object.preventExtensions = function preventExtensions(object) {

	        if (Object(object) !== object) {
	            throw new TypeError('Object.preventExtensions can only be called on Objects.');
	        }
	        // this is misleading and breaks feature-detection, but
	        // allows "securable" code to "gracefully" degrade to working
	        // but insecure code.
	        return object;
	    };
	}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	/*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
	// ES5 15.2.3.8
	// http://es5.github.com/#x15.2.3.8
	if (!Object.seal) {
	    Object.seal = function seal(object) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.seal can only be called on Objects.');
	        }
	        // this is misleading and breaks feature-detection, but
	        // allows "securable" code to "gracefully" degrade to working
	        // but insecure code.
	        return object;
	    };
	}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var JSON = __webpack_require__(29);
	var polygon = __webpack_require__(32);

	/* globals $, app */

	var Exporter = function Exporter() {
	    if (app.documents.length === 0) return;

	    this.document = app.activeDocument;
	    this.getArtboardInfo();

	    this.output.layers = this.readLayers(this.document);
	    this.writeFile();
	};

	Exporter.prototype = {
	    document: {},
	    artboard: { x: 0, y: 0, w: 0, h: 0 },
	    output: {
	        layers: []
	    }
	};

	/**
	 * Get information about the artboard
	 */
	Exporter.prototype.getArtboardInfo = function () {
	    var artboardIndex = this.document.artboards.getActiveArtboardIndex();
	    var artboard = this.document.artboards[artboardIndex];

	    this.artboard.x += artboard.artboardRect[0];
	    this.artboard.y += artboard.artboardRect[1];

	    // Width is based on artboard x value
	    this.artboard.w = Math.abs(artboard.artboardRect[2] - this.artboard.x);

	    // Height is based on artboard y value
	    this.artboard.h = Math.abs(artboard.artboardRect[3] - this.artboard.y);
	};

	/**
	 * Read each layer within an object
	 *
	 * @param {object} object
	 */
	Exporter.prototype.readLayers = function (object) {
	    var layerCount = object.layers.length;
	    var layers = [];
	    var layerObject;
	    var layer;
	    var i;

	    for (i = 0; i < layerCount; i++) {
	        layer = object.layers[i];
	        layerObject = {};

	        // Skip if locked or hidden
	        if (layer.locked || !layer.visible) continue;

	        layerObject.name = layer.name;
	        layerObject.zOrderPosition = layer.zOrderPosition;

	        // Check for sub-layers
	        if (layer.layers.length) {
	            layerObject.layers = this.readLayers(layer);
	        }

	        // Check for paths
	        if (layer.pathItems.length > 0) {
	            layerObject.paths = this.readLayerPaths(layer);
	        }

	        layers.push(layerObject);
	    }

	    return layers;
	};

	/**
	 * Read each path within a layer
	 *
	 * @param  {object} layer
	 * @return {array}
	 */
	Exporter.prototype.readLayerPaths = function (layer) {
	    var pathCount = layer.pathItems.length;
	    var paths = [];
	    var path = {};
	    var i;

	    for (i = 0; i < pathCount; i++) {
	        path = layer.pathItems[i];

	        // Skip if locked or hidden
	        if (path.locked || path.hidden) continue;

	        var points = this.readPathPoints(path);

	        paths.push({
	            name: path.name || path.typename,
	            area: path.area,
	            points: points,
	            centroid: polygon.polygonCentroid(points)
	        });
	    }

	    return paths;
	};

	/**
	 * Read each point set within a path
	 *
	 * @param  {object} path
	 * @return {array}
	 */
	Exporter.prototype.readPathPoints = function (path) {
	    var pointCount = path.pathPoints.length;
	    var points = [];
	    var i;

	    if (path.hidden) return;

	    for (i = 0; i < pointCount; i++) {
	        points.push(this.getPointAnchorSet(path.pathPoints[i]));
	    }

	    return points;
	};

	/**
	 * Adjusts anchor coordinates relative to the artboard position
	 * within the document. Returns an anchor array.
	 *
	 * @param  {object} point
	 * @return {array}
	 */
	Exporter.prototype.getPointAnchorSet = function (point) {
	    var anchorX = point.anchor[0];
	    var anchorY = point.anchor[1];

	    anchorX = Math.abs(anchorX - this.artboard.x);
	    anchorY = Math.abs(anchorY - this.artboard.y);

	    return [anchorX, anchorY];
	};

	/**
	 * Write JSON to file
	 */
	Exporter.prototype.writeFile = function () {
	    var file = File.saveDialog('Export');

	    if (!file) return;

	    file.open('w');
	    file.write(JSON.stringify(this.output));
	    file.close();
	};

	/**
	 * Log to ExtendScript console for debugging
	 *
	 * @param  {*} out
	 */
	Exporter.prototype.log = function (out) {
	    if ((typeof out === 'undefined' ? 'undefined' : _typeof(out)) === 'object') {
	        out = JSON.stringify(out, null, 4);
	    }

	    $.writeln(out);
	};

	/* eslint-disable no-new */
	new Exporter();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	// For use in Node.js

	var JSON2 = __webpack_require__(30);
	var cycle = __webpack_require__(31);

	JSON2.decycle = cycle.decycle;
	JSON2.retrocycle = cycle.retrocycle;

	module.exports = JSON2;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	    json2.js
	    2011-10-19

	    Public Domain.

	    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

	    See http://www.JSON.org/js.html


	    This code should be minified before deployment.
	    See http://javascript.crockford.com/jsmin.html

	    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
	    NOT CONTROL.


	    This file creates a global JSON object containing two methods: stringify
	    and parse.

	        JSON.stringify(value, replacer, space)
	            value       any JavaScript value, usually an object or array.

	            replacer    an optional parameter that determines how object
	                        values are stringified for objects. It can be a
	                        function or an array of strings.

	            space       an optional parameter that specifies the indentation
	                        of nested structures. If it is omitted, the text will
	                        be packed without extra whitespace. If it is a number,
	                        it will specify the number of spaces to indent at each
	                        level. If it is a string (such as '\t' or '&nbsp;'),
	                        it contains the characters used to indent at each level.

	            This method produces a JSON text from a JavaScript value.

	            When an object value is found, if the object contains a toJSON
	            method, its toJSON method will be called and the result will be
	            stringified. A toJSON method does not serialize: it returns the
	            value represented by the name/value pair that should be serialized,
	            or undefined if nothing should be serialized. The toJSON method
	            will be passed the key associated with the value, and this will be
	            bound to the value

	            For example, this would serialize Dates as ISO strings.

	                Date.prototype.toJSON = function (key) {
	                    function f(n) {
	                        // Format integers to have at least two digits.
	                        return n < 10 ? '0' + n : n;
	                    }

	                    return this.getUTCFullYear()   + '-' +
	                         f(this.getUTCMonth() + 1) + '-' +
	                         f(this.getUTCDate())      + 'T' +
	                         f(this.getUTCHours())     + ':' +
	                         f(this.getUTCMinutes())   + ':' +
	                         f(this.getUTCSeconds())   + 'Z';
	                };

	            You can provide an optional replacer method. It will be passed the
	            key and value of each member, with this bound to the containing
	            object. The value that is returned from your method will be
	            serialized. If your method returns undefined, then the member will
	            be excluded from the serialization.

	            If the replacer parameter is an array of strings, then it will be
	            used to select the members to be serialized. It filters the results
	            such that only members with keys listed in the replacer array are
	            stringified.

	            Values that do not have JSON representations, such as undefined or
	            functions, will not be serialized. Such values in objects will be
	            dropped; in arrays they will be replaced with null. You can use
	            a replacer function to replace those with JSON values.
	            JSON.stringify(undefined) returns undefined.

	            The optional space parameter produces a stringification of the
	            value that is filled with line breaks and indentation to make it
	            easier to read.

	            If the space parameter is a non-empty string, then that string will
	            be used for indentation. If the space parameter is a number, then
	            the indentation will be that many spaces.

	            Example:

	            text = JSON.stringify(['e', {pluribus: 'unum'}]);
	            // text is '["e",{"pluribus":"unum"}]'


	            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
	            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

	            text = JSON.stringify([new Date()], function (key, value) {
	                return this[key] instanceof Date ?
	                    'Date(' + this[key] + ')' : value;
	            });
	            // text is '["Date(---current time---)"]'


	        JSON.parse(text, reviver)
	            This method parses a JSON text to produce an object or array.
	            It can throw a SyntaxError exception.

	            The optional reviver parameter is a function that can filter and
	            transform the results. It receives each of the keys and values,
	            and its return value is used instead of the original value.
	            If it returns what it received, then the structure is not modified.
	            If it returns undefined then the member is deleted.

	            Example:

	            // Parse the text. Values that look like ISO date strings will
	            // be converted to Date objects.

	            myData = JSON.parse(text, function (key, value) {
	                var a;
	                if (typeof value === 'string') {
	                    a =
	/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
	                    if (a) {
	                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
	                            +a[5], +a[6]));
	                    }
	                }
	                return value;
	            });

	            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
	                var d;
	                if (typeof value === 'string' &&
	                        value.slice(0, 5) === 'Date(' &&
	                        value.slice(-1) === ')') {
	                    d = new Date(value.slice(5, -1));
	                    if (d) {
	                        return d;
	                    }
	                }
	                return value;
	            });


	    This is a reference implementation. You are free to copy, modify, or
	    redistribute.
	*/

	/*jslint evil: true, regexp: true */

	/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
	    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
	    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
	    lastIndex, length, parse, prototype, push, replace, slice, stringify,
	    test, toJSON, toString, valueOf
	*/


	(function (JSON) {
	    'use strict';

	    function f(n) {
	        // Format integers to have at least two digits.
	        return n < 10 ? '0' + n : n;
	    }

	    /* DDOPSON-2012-04-16 - mutating global prototypes is NOT allowed for a well-behaved module.  
	     * It's also unneeded, since Date already defines toJSON() to the same ISOwhatever format below
	     * Thus, we skip this logic for the CommonJS case where 'exports' is defined
	     */
	    if (false) {
	      if (typeof Date.prototype.toJSON !== 'function') {
	          Date.prototype.toJSON = function (key) {

	              return isFinite(this.valueOf())
	                  ? this.getUTCFullYear()     + '-' +
	                      f(this.getUTCMonth() + 1) + '-' +
	                      f(this.getUTCDate())      + 'T' +
	                      f(this.getUTCHours())     + ':' +
	                      f(this.getUTCMinutes())   + ':' +
	                      f(this.getUTCSeconds())   + 'Z'
	                  : null;
	          };
	      }
	      
	      if (typeof String.prototype.toJSON !== 'function') {
	        String.prototype.toJSON = function (key) { return this.valueOf(); };
	      }

	      if (typeof Number.prototype.toJSON !== 'function') {
	        Number.prototype.toJSON = function (key) { return this.valueOf(); };
	      }
	      
	      if (typeof Boolean.prototype.toJSON !== 'function') {
	        Boolean.prototype.toJSON = function (key) { return this.valueOf(); };
	      }
	    }
	    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	        gap,
	        indent,
	        meta = {    // table of character substitutions
	            '\b': '\\b',
	            '\t': '\\t',
	            '\n': '\\n',
	            '\f': '\\f',
	            '\r': '\\r',
	            '"' : '\\"',
	            '\\': '\\\\'
	        },
	        rep;


	    function quote(string) {

	// If the string contains no control characters, no quote characters, and no
	// backslash characters, then we can safely slap some quotes around it.
	// Otherwise we must also replace the offending characters with safe escape
	// sequences.

	        escapable.lastIndex = 0;
	        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
	            var c = meta[a];
	            return typeof c === 'string'
	                ? c
	                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	        }) + '"' : '"' + string + '"';
	    }


	    function str(key, holder) {

	// Produce a string from holder[key].

	        var i,          // The loop counter.
	            k,          // The member key.
	            v,          // The member value.
	            length,
	            mind = gap,
	            partial,
	            value = holder[key];

	// If the value has a toJSON method, call it to obtain a replacement value.

	        if (value && typeof value === 'object' &&
	                typeof value.toJSON === 'function') {
	            value = value.toJSON(key);
	        }

	// If we were called with a replacer function, then call the replacer to
	// obtain a replacement value.

	        if (typeof rep === 'function') {
	            value = rep.call(holder, key, value);
	        }

	// What happens next depends on the value's type.

	        switch (typeof value) {
	        case 'string':
	            return quote(value);

	        case 'number':

	// JSON numbers must be finite. Encode non-finite numbers as null.

	            return isFinite(value) ? String(value) : 'null';

	        case 'boolean':
	        case 'null':

	// If the value is a boolean or null, convert it to a string. Note:
	// typeof null does not produce 'null'. The case is included here in
	// the remote chance that this gets fixed someday.

	            return String(value);

	// If the type is 'object', we might be dealing with an object or an array or
	// null.

	        case 'object':

	// Due to a specification blunder in ECMAScript, typeof null is 'object',
	// so watch out for that case.

	            if (!value) {
	                return 'null';
	            }

	// Make an array to hold the partial results of stringifying this object value.

	            gap += indent;
	            partial = [];

	// Is the value an array?

	            if (Object.prototype.toString.apply(value) === '[object Array]') {

	// The value is an array. Stringify every element. Use null as a placeholder
	// for non-JSON values.

	                length = value.length;
	                for (i = 0; i < length; i += 1) {
	                    partial[i] = str(i, value) || 'null';
	                }

	// Join all of the elements together, separated with commas, and wrap them in
	// brackets.

	                v = partial.length === 0
	                    ? '[]'
	                    : gap
	                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
	                    : '[' + partial.join(',') + ']';
	                gap = mind;
	                return v;
	            }

	// If the replacer is an array, use it to select the members to be stringified.

	            if (rep && typeof rep === 'object') {
	                length = rep.length;
	                for (i = 0; i < length; i += 1) {
	                    if (typeof rep[i] === 'string') {
	                        k = rep[i];
	                        v = str(k, value);
	                        if (v) {
	                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
	                        }
	                    }
	                }
	            } else {

	// Otherwise, iterate through all of the keys in the object.

	                for (k in value) {
	                    if (Object.prototype.hasOwnProperty.call(value, k)) {
	                        v = str(k, value);
	                        if (v) {
	                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
	                        }
	                    }
	                }
	            }

	// Join all of the member texts together, separated with commas,
	// and wrap them in braces.

	            v = partial.length === 0
	                ? '{}'
	                : gap
	                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
	                : '{' + partial.join(',') + '}';
	            gap = mind;
	            return v;
	        }
	    }

	// If the JSON object does not yet have a stringify method, give it one.

	    if (typeof JSON.stringify !== 'function') {
	        JSON.stringify = function (value, replacer, space) {

	// The stringify method takes a value and an optional replacer, and an optional
	// space parameter, and returns a JSON text. The replacer can be a function
	// that can replace values, or an array of strings that will select the keys.
	// A default replacer method can be provided. Use of the space parameter can
	// produce text that is more easily readable.

	            var i;
	            gap = '';
	            indent = '';

	// If the space parameter is a number, make an indent string containing that
	// many spaces.

	            if (typeof space === 'number') {
	                for (i = 0; i < space; i += 1) {
	                    indent += ' ';
	                }

	// If the space parameter is a string, it will be used as the indent string.

	            } else if (typeof space === 'string') {
	                indent = space;
	            }

	// If there is a replacer, it must be a function or an array.
	// Otherwise, throw an error.

	            rep = replacer;
	            if (replacer && typeof replacer !== 'function' &&
	                    (typeof replacer !== 'object' ||
	                    typeof replacer.length !== 'number')) {
	                throw new Error('JSON.stringify');
	            }

	// Make a fake root object containing our value under the key of ''.
	// Return the result of stringifying the value.

	            return str('', {'': value});
	        };
	    }


	// If the JSON object does not yet have a parse method, give it one.

	    if (typeof JSON.parse !== 'function') {
	        JSON.parse = function (text, reviver) {

	// The parse method takes a text and an optional reviver function, and returns
	// a JavaScript value if the text is a valid JSON text.

	            var j;

	            function walk(holder, key) {

	// The walk method is used to recursively walk the resulting structure so
	// that modifications can be made.

	                var k, v, value = holder[key];
	                if (value && typeof value === 'object') {
	                    for (k in value) {
	                        if (Object.prototype.hasOwnProperty.call(value, k)) {
	                            v = walk(value, k);
	                            if (v !== undefined) {
	                                value[k] = v;
	                            } else {
	                                delete value[k];
	                            }
	                        }
	                    }
	                }
	                return reviver.call(holder, key, value);
	            }


	// Parsing happens in four stages. In the first stage, we replace certain
	// Unicode characters with escape sequences. JavaScript handles many characters
	// incorrectly, either silently deleting them, or treating them as line endings.

	            text = String(text);
	            cx.lastIndex = 0;
	            if (cx.test(text)) {
	                text = text.replace(cx, function (a) {
	                    return '\\u' +
	                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	                });
	            }

	// In the second stage, we run the text against regular expressions that look
	// for non-JSON patterns. We are especially concerned with '()' and 'new'
	// because they can cause invocation, and '=' because it can cause mutation.
	// But just to be safe, we want to reject all unexpected forms.

	// We split the second stage into 4 regexp operations in order to work around
	// crippling inefficiencies in IE's and Safari's regexp engines. First we
	// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
	// replace all simple value tokens with ']' characters. Third, we delete all
	// open brackets that follow a colon or comma or that begin the text. Finally,
	// we look to see that the remaining characters are only whitespace or ']' or
	// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

	            if (/^[\],:{}\s]*$/
	                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
	                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
	                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

	// In the third stage we use the eval function to compile the text into a
	// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
	// in JavaScript: it can begin a block or an object literal. We wrap the text
	// in parens to eliminate the ambiguity.

	                j = eval('(' + text + ')');

	// In the optional fourth stage, we recursively walk the new structure, passing
	// each name/value pair to a reviver function for possible transformation.

	                return typeof reviver === 'function'
	                    ? walk({'': j}, '')
	                    : j;
	            }

	// If the text is not JSON parseable, then a SyntaxError is thrown.

	            throw new SyntaxError('JSON.parse');
	        };
	    }
	})(
	    
	    // Create a JSON object only if one does not already exist. We create the
	    // methods in a closure to avoid creating global variables.
	    
	  ( true) ? 
	    exports : 
	    (window.JSON ? 
	      (window.JSON) :
	      (window.JSON = {})
	    )
	);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// cycle.js
	// 2011-08-24

	/*jslint evil: true, regexp: true */

	/*members $ref, apply, call, decycle, hasOwnProperty, length, prototype, push,
	    retrocycle, stringify, test, toString
	*/

	(function (exports) {

	if (typeof exports.decycle !== 'function') {
	    exports.decycle = function decycle(object) {
	        'use strict';

	// Make a deep copy of an object or array, assuring that there is at most
	// one instance of each object or array in the resulting structure. The
	// duplicate references (which might be forming cycles) are replaced with
	// an object of the form
	//      {$ref: PATH}
	// where the PATH is a JSONPath string that locates the first occurance.
	// So,
	//      var a = [];
	//      a[0] = a;
	//      return JSON.stringify(JSON.decycle(a));
	// produces the string '[{"$ref":"$"}]'.

	// JSONPath is used to locate the unique object. $ indicates the top level of
	// the object or array. [NUMBER] or [STRING] indicates a child member or
	// property.

	        var objects = [],   // Keep a reference to each unique object or array
	            paths = [];     // Keep the path to each unique object or array

	        return (function derez(value, path) {

	// The derez recurses through the object, producing the deep copy.

	            var i,          // The loop counter
	                name,       // Property name
	                nu;         // The new object or array

	            switch (typeof value) {
	            case 'object':

	// typeof null === 'object', so get out if this value is not really an object.

	                if (!value) {
	                    return null;
	                }

	// If the value is an object or array, look to see if we have already
	// encountered it. If so, return a $ref/path object. This is a hard way,
	// linear search that will get slower as the number of unique objects grows.

	                for (i = 0; i < objects.length; i += 1) {
	                    if (objects[i] === value) {
	                        return {$ref: paths[i]};
	                    }
	                }

	// Otherwise, accumulate the unique value and its path.

	                objects.push(value);
	                paths.push(path);

	// If it is an array, replicate the array.

	                if (Object.prototype.toString.apply(value) === '[object Array]') {
	                    nu = [];
	                    for (i = 0; i < value.length; i += 1) {
	                        nu[i] = derez(value[i], path + '[' + i + ']');
	                    }
	                } else {

	// If it is an object, replicate the object.

	                    nu = {};
	                    for (name in value) {
	                        if (Object.prototype.hasOwnProperty.call(value, name)) {
	                            nu[name] = derez(value[name],
	                                path + '[' + JSON.stringify(name) + ']');
	                        }
	                    }
	                }
	                return nu;
	            case 'number':
	            case 'string':
	            case 'boolean':
	                return value;
	            }
	        }(object, '$'));
	    };
	}


	if (typeof exports.retrocycle !== 'function') {
	    exports.retrocycle = function retrocycle($) {
	        'use strict';

	// Restore an object that was reduced by decycle. Members whose values are
	// objects of the form
	//      {$ref: PATH}
	// are replaced with references to the value found by the PATH. This will
	// restore cycles. The object will be mutated.

	// The eval function is used to locate the values described by a PATH. The
	// root object is kept in a $ variable. A regular expression is used to
	// assure that the PATH is extremely well formed. The regexp contains nested
	// * quantifiers. That has been known to have extremely bad performance
	// problems on some browsers for very long strings. A PATH is expected to be
	// reasonably short. A PATH is allowed to belong to a very restricted subset of
	// Goessner's JSONPath.

	// So,
	//      var s = '[{"$ref":"$"}]';
	//      return JSON.retrocycle(JSON.parse(s));
	// produces an array containing a single element which is the array itself.

	        var px =
	            /^\$(?:\[(?:\d+|\"(?:[^\\\"\u0000-\u001f]|\\([\\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*\")\])*$/;

	        (function rez(value) {

	// The rez function walks recursively through the object looking for $ref
	// properties. When it finds one that has a value that is a path, then it
	// replaces the $ref object with a reference to the value that is found by
	// the path.

	            var i, item, name, path;

	            if (value && typeof value === 'object') {
	                if (Object.prototype.toString.apply(value) === '[object Array]') {
	                    for (i = 0; i < value.length; i += 1) {
	                        item = value[i];
	                        if (item && typeof item === 'object') {
	                            path = item.$ref;
	                            if (typeof path === 'string' && px.test(path)) {
	                                value[i] = eval(path);
	                            } else {
	                                rez(item);
	                            }
	                        }
	                    }
	                } else {
	                    for (name in value) {
	                        if (typeof value[name] === 'object') {
	                            item = value[name];
	                            if (item) {
	                                path = item.$ref;
	                                if (typeof path === 'string' && px.test(path)) {
	                                    value[name] = eval(path);
	                                } else {
	                                    rez(item);
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        }($));
	        return $;
	    };
	}
	}) (
	  ( true) ? 
	    exports : 
	    (window.JSON ? 
	      (window.JSON) :
	      (window.JSON = {})
	    )
	);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-polygon/ Version 1.0.3. Copyright 2017 Mike Bostock.
	(function (global, factory) {
		 true ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
		(factory((global.d3 = global.d3 || {})));
	}(this, (function (exports) { 'use strict';

	var area = function(polygon) {
	  var i = -1,
	      n = polygon.length,
	      a,
	      b = polygon[n - 1],
	      area = 0;

	  while (++i < n) {
	    a = b;
	    b = polygon[i];
	    area += a[1] * b[0] - a[0] * b[1];
	  }

	  return area / 2;
	};

	var centroid = function(polygon) {
	  var i = -1,
	      n = polygon.length,
	      x = 0,
	      y = 0,
	      a,
	      b = polygon[n - 1],
	      c,
	      k = 0;

	  while (++i < n) {
	    a = b;
	    b = polygon[i];
	    k += c = a[0] * b[1] - b[0] * a[1];
	    x += (a[0] + b[0]) * c;
	    y += (a[1] + b[1]) * c;
	  }

	  return k *= 3, [x / k, y / k];
	};

	// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
	// the 3D cross product in a quadrant I Cartesian coordinate system (+x is
	// right, +y is up). Returns a positive value if ABC is counter-clockwise,
	// negative if clockwise, and zero if the points are collinear.
	var cross = function(a, b, c) {
	  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
	};

	function lexicographicOrder(a, b) {
	  return a[0] - b[0] || a[1] - b[1];
	}

	// Computes the upper convex hull per the monotone chain algorithm.
	// Assumes points.length >= 3, is sorted by x, unique in y.
	// Returns an array of indices into points in left-to-right order.
	function computeUpperHullIndexes(points) {
	  var n = points.length,
	      indexes = [0, 1],
	      size = 2;

	  for (var i = 2; i < n; ++i) {
	    while (size > 1 && cross(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
	    indexes[size++] = i;
	  }

	  return indexes.slice(0, size); // remove popped points
	}

	var hull = function(points) {
	  if ((n = points.length) < 3) return null;

	  var i,
	      n,
	      sortedPoints = new Array(n),
	      flippedPoints = new Array(n);

	  for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
	  sortedPoints.sort(lexicographicOrder);
	  for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];

	  var upperIndexes = computeUpperHullIndexes(sortedPoints),
	      lowerIndexes = computeUpperHullIndexes(flippedPoints);

	  // Construct the hull polygon, removing possible duplicate endpoints.
	  var skipLeft = lowerIndexes[0] === upperIndexes[0],
	      skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1],
	      hull = [];

	  // Add upper hull in right-to-l order.
	  // Then add lower hull in left-to-right order.
	  for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
	  for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);

	  return hull;
	};

	var contains = function(polygon, point) {
	  var n = polygon.length,
	      p = polygon[n - 1],
	      x = point[0], y = point[1],
	      x0 = p[0], y0 = p[1],
	      x1, y1,
	      inside = false;

	  for (var i = 0; i < n; ++i) {
	    p = polygon[i], x1 = p[0], y1 = p[1];
	    if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside;
	    x0 = x1, y0 = y1;
	  }

	  return inside;
	};

	var length = function(polygon) {
	  var i = -1,
	      n = polygon.length,
	      b = polygon[n - 1],
	      xa,
	      ya,
	      xb = b[0],
	      yb = b[1],
	      perimeter = 0;

	  while (++i < n) {
	    xa = xb;
	    ya = yb;
	    b = polygon[i];
	    xb = b[0];
	    yb = b[1];
	    xa -= xb;
	    ya -= yb;
	    perimeter += Math.sqrt(xa * xa + ya * ya);
	  }

	  return perimeter;
	};

	exports.polygonArea = area;
	exports.polygonCentroid = centroid;
	exports.polygonHull = hull;
	exports.polygonContains = contains;
	exports.polygonLength = length;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));


/***/ })
/******/ ]);