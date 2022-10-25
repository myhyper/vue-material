/*!
 * vue-material v1.0.0-beta-15
 * Made with <3 by marcosmoura 2022
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("vue")) : factory(root["Vue"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, (function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 330);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdRipple_vue_vue_type_template_id_7692b1af__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdRipple_vue_vue_type_template_id_7692b1af___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdRipple_vue_vue_type_template_id_7692b1af__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdRipple_vue_vue_type_script_lang_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdRipple_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdRipple_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__MdRipple_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_1__MdRipple_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdRipple_vue_vue_type_style_index_0_id_7692b1af_lang_scss__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdRipple_vue_vue_type_style_index_0_id_7692b1af_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MdRipple_vue_vue_type_style_index_0_id_7692b1af_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);







const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_1__MdRipple_vue_vue_type_script_lang_js__["default"], [['render',__WEBPACK_IMPORTED_MODULE_0__MdRipple_vue_vue_type_template_id_7692b1af__["render"]],['__file',"src/components/MdRipple/MdRipple.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "7692b1af"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('7692b1af', __exports__)) {
    console.log('reload')
    api.reload('7692b1af', __exports__)
  }
  
  module.hot.accept("./MdRipple.vue?vue&type=template&id=7692b1af", () => {
    console.log('re-render')
    api.rerender('7692b1af', render)
  })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (63:10)\nYou may need an appropriate loader to handle this file type.\n|         ],\n|         attrs: {\n|           ...this.attrs,\n|           href: this.href,\n|           disabled: this.disabled,");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div\n|     :class=\"['md-ripple', rippleClasses]\"\n|     @touchstart.passive=\"event => mdEventTrigger && touchStartCheck(event)\"");

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(2);

var _material2 = _interopRequireDefault(_material);

var _MdChips = __webpack_require__(139);

var _MdChips2 = _interopRequireDefault(_MdChips);

var _MdChip = __webpack_require__(142);

var _MdChip2 = _interopRequireDefault(_MdChip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdChips2.default.name, _MdChips2.default);
  Vue.component(_MdChip2.default.name, _MdChip2.default);
};

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdChips_vue_vue_type_template_id_0b3d2a1e__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdChips_vue_vue_type_template_id_0b3d2a1e___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdChips_vue_vue_type_template_id_0b3d2a1e__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdChips_vue_vue_type_script_lang_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdChips_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdChips_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__MdChips_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_1__MdChips_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdChips_vue_vue_type_style_index_0_id_0b3d2a1e_lang_scss__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdChips_vue_vue_type_style_index_0_id_0b3d2a1e_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MdChips_vue_vue_type_style_index_0_id_0b3d2a1e_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);







const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_1__MdChips_vue_vue_type_script_lang_js__["default"], [['render',__WEBPACK_IMPORTED_MODULE_0__MdChips_vue_vue_type_template_id_0b3d2a1e__["render"]],['__file',"src/components/MdChips/MdChips.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "0b3d2a1e"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('0b3d2a1e', __exports__)) {
    console.log('reload')
    api.reload('0b3d2a1e', __exports__)
  }
  
  module.hot.accept("./MdChips.vue?vue&type=template&id=0b3d2a1e", () => {
    console.log('re-render')
    api.rerender('0b3d2a1e', render)
  })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-ripple {");

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-field class=\"md-chips\" :class=\"[$mdActiveTheme, chipsClasses]\">\n|     <slot />\n| ");

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-chips.md-field {");

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdChips/MdChip.vue?vue&type=template&id=84ba771c
var MdChipvue_type_template_id_84ba771c = __webpack_require__(143);

// EXTERNAL MODULE: ./src/core/MdComponent.js
var MdComponent = __webpack_require__(5);
var MdComponent_default = /*#__PURE__*/__webpack_require__.n(MdComponent);

// EXTERNAL MODULE: ./src/core/mixins/MdFocused/MdFocused.js
var MdFocused = __webpack_require__(144);
var MdFocused_default = /*#__PURE__*/__webpack_require__.n(MdFocused);

// EXTERNAL MODULE: ./src/core/mixins/MdRipple/MdRipple.js
var MdRipple = __webpack_require__(145);
var MdRipple_default = /*#__PURE__*/__webpack_require__.n(MdRipple);

// EXTERNAL MODULE: ./src/core/icons/MdClearIcon.vue + 1 modules
var MdClearIcon = __webpack_require__(25);

// EXTERNAL MODULE: ./src/components/MdButton/MdButton.vue
var MdButton = __webpack_require__(19);

// CONCATENATED MODULE: ./src/components/MdChips/MdChip.vue?vue&type=script&lang=js

  
  
  
  
  

  /* harmony default export */ var MdChipvue_type_script_lang_js = (new MdComponent_default.a({
    name: 'MdChip',
    components: {
      MdButton: MdButton["default"],
      MdClearIcon: MdClearIcon["a" /* default */]
    },
    mixins: [
      MdFocused_default.a,
      MdRipple_default.a
    ],
    props: {
      mdDisabled: Boolean,
      mdDeletable: Boolean,
      mdClickable: Boolean,
      mdDuplicated: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      chipClasses () {
        return {
          'md-disabled': this.mdDisabled,
          'md-deletable': this.mdDeletable,
          'md-clickable': this.mdClickable,
          'md-focused': this.mdHasFocus,
          'md-duplicated': this.mdDuplicated
        }
      }
    }
  }));

// EXTERNAL MODULE: ./src/components/MdChips/MdChip.vue?vue&type=style&index=0&id=84ba771c&lang=scss
var MdChipvue_type_style_index_0_id_84ba771c_lang_scss = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdChips/MdChip.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdChipvue_type_script_lang_js, [['render',MdChipvue_type_template_id_84ba771c["render"]],['__file',"src/components/MdChips/MdChip.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "84ba771c"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('84ba771c', __exports__)) {
    console.log('reload')
    api.reload('84ba771c', __exports__)
  }
  
  module.hot.accept("./MdChip.vue?vue&type=template&id=84ba771c", () => {
    console.log('re-render')
    api.rerender('84ba771c', render)
  })

}


/* harmony default export */ var MdChip = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <transition name=\"md-chip\" appear>\n|     <div class=\"md-chip\" :class=\"[$mdActiveTheme, chipClasses]\" tabindex=\"0\" v-on=\"$listeners\">\n|       <md-ripple :md-disabled=\"mdDisabled\" v-if=\"mdClickable || !mdRipple\">");

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdReactive = __webpack_require__(4);

var _MdReactive2 = _interopRequireDefault(_MdReactive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasEvents = false;
var eventTarget = null;
var supportsPassiveEvent = false;
var MdFocused = new _MdReactive2.default({
  currentElement: null
});

function checkPassiveEventSupport() {
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassiveEvent = { passive: true };
      }
    });
    window.addEventListener('ghost', null, opts);
  } catch (e) {}
}

function setKeyboardInteraction(_ref) {
  var keyCode = _ref.keyCode,
      target = _ref.target;

  MdFocused.currentElement = target;
}

function setMouseAndTouchInteraction(event) {
  MdFocused.currentElement = null;
}

function createKeyboardEvents() {
  eventTarget.addEventListener('keyup', setKeyboardInteraction);
}

function createPointerEvents() {
  eventTarget.addEventListener('pointerup', setMouseAndTouchInteraction);
}

function createMSPointerEvents() {
  eventTarget.addEventListener('MSPointerUp', setMouseAndTouchInteraction);
}

function createMouseAndTouchEvents() {
  eventTarget.addEventListener('mouseup', setMouseAndTouchInteraction);

  if ('ontouchend' in window) {
    eventTarget.addEventListener('touchend', setMouseAndTouchInteraction, supportsPassiveEvent);
  }
}

function bindEvents() {
  if (window.PointerEvent) {
    createPointerEvents();
  } else if (window.MSPointerEvent) {
    createMSPointerEvents();
  } else {
    createMouseAndTouchEvents();
  }

  createKeyboardEvents();
}

function createEvents() {
  if (!hasEvents) {
    eventTarget = document.body;
    checkPassiveEventSupport();
    bindEvents();
    hasEvents = true;
  }
}

exports.default = {
  data: function data() {
    return {
      mdHasFocus: false
    };
  },
  computed: {
    focusedElement: function focusedElement() {
      return MdFocused.currentElement;
    }
  },
  watch: {
    focusedElement: function focusedElement(el) {
      this.mdHasFocus = el === this.$el;
    }
  },
  mounted: function mounted() {
    createEvents();
  }
};

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdRipple = __webpack_require__(10);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    MdRipple: _MdRipple2.default
  },
  props: {
    mdRipple: {
      type: Boolean,
      default: true
    }
  }
};

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n|   @import \"~components/MdElevation/mixins\";\n| ");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <md-svg-loader class=\"md-icon md-icon-image\" :md-src=\"mdSrc\" :class=\"[$mdActiveTheme]\" v-if=\"mdSrc\" @md-loaded=\"$emit('md-loaded')\" />\n|   <i class=\"md-icon md-icon-font\" :class=\"[$mdActiveTheme]\" v-else>\n|     <slot />");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <i class=\"md-svg-loader\" v-html=\"html\"></i>\n| ");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   .md-svg-loader {\n|     display: block;\n| ");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n|   @import \"./mixins\";\n| ");

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdButton_vue_vue_type_script_lang_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdButton_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdButton_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__MdButton_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__MdButton_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdButton_vue_vue_type_style_index_0_id_7d2cd822_lang_scss__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdButton_vue_vue_type_style_index_0_id_7d2cd822_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdButton_vue_vue_type_style_index_0_id_7d2cd822_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);






const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_0__MdButton_vue_vue_type_script_lang_js__["default"], [['__file',"src/components/MdButton/MdButton.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "7d2cd822"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('7d2cd822', __exports__)) {
    console.log('reload')
    api.reload('7d2cd822', __exports__)
  }
  
}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(6);

var _MdReactive = __webpack_require__(4);

var _MdReactive2 = _interopRequireDefault(_MdReactive);

var _MdTheme = __webpack_require__(3);

var _MdTheme2 = _interopRequireDefault(_MdTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = function init() {
  var material = new _MdReactive2.default({
    ripple: true,
    theming: {},
    locale: {
      startYear: 1900,
      endYear: 2099,
      dateFormat: 'yyyy-MM-dd',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      shorterDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Ju', 'Ju', 'A', 'Se', 'O', 'N', 'D'],
      firstDayOfAWeek: 0,
      cancel: 'Cancel',
      confirm: 'Ok'
    },
    router: {
      linkActiveClass: 'router-link-active'
    }
  });

  Object.defineProperties(material.theming, {
    metaColors: {
      get: function get() {
        return _MdTheme2.default.metaColors;
      },
      set: function set(metaColors) {
        _MdTheme2.default.metaColors = metaColors;
      }
    },
    theme: {
      get: function get() {
        return _MdTheme2.default.theme;
      },
      set: function set(theme) {
        _MdTheme2.default.theme = theme;
      }
    },
    enabled: {
      get: function get() {
        return _MdTheme2.default.enabled;
      },
      set: function set(enabled) {
        _MdTheme2.default.enabled = enabled;
      }
    }
  });

  return material;
};

exports.default = function (Vue) {
  if (!Vue.material) {
    Vue.material = init();
    Vue.prototype.$material = Vue.material;
  }
};

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n|   @import \"~components/MdElevation/mixins\";\n|   @import \"~components/MdElevation/variables\";");

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/core/icons/MdClearIcon.vue?vue&type=template&id=f53126ba
var MdClearIconvue_type_template_id_f53126ba = __webpack_require__(41);

// EXTERNAL MODULE: ./src/components/MdIcon/MdIcon.vue + 3 modules
var MdIcon = __webpack_require__(8);

// CONCATENATED MODULE: ./src/core/icons/MdClearIcon.vue?vue&type=script&lang=js

  

  /* harmony default export */ var MdClearIconvue_type_script_lang_js = ({
    name: 'MdClearIcon',
    components: {
      MdIcon: MdIcon["default"]
    }
  });

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/core/icons/MdClearIcon.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(MdClearIconvue_type_script_lang_js, [['render',MdClearIconvue_type_template_id_f53126ba["render"]],['__file',"src/core/icons/MdClearIcon.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "f53126ba"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('f53126ba', __exports__)) {
    console.log('reload')
    api.reload('f53126ba', __exports__)
  }
  
  module.hot.accept("./MdClearIcon.vue?vue&type=template&id=f53126ba", () => {
    console.log('re-render')
    api.rerender('f53126ba', render)
  })

}


/* harmony default export */ var MdClearIcon = __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msColor = null;
var themeColor = null;
var maskIcon = null;

exports.default = new _vue2.default({
  data: function data() {
    return {
      prefix: 'md-theme-',
      theme: 'default',
      enabled: true,
      metaColors: false
    };
  },
  computed: {
    themeTarget: function themeTarget() {
      if (!this.$isServer) {
        return document.documentElement;
      }

      return false;
    },
    fullThemeName: function fullThemeName() {
      return this.getThemeName();
    }
  },
  watch: {
    enabled: {
      immediate: true,
      handler: function handler() {
        var fullThemeName = this.fullThemeName,
            themeTarget = this.themeTarget,
            enabled = this.enabled;


        if (themeTarget) {
          if (enabled) {
            themeTarget.classList.add(fullThemeName);
            this.metaColors && this.setHtmlMetaColors(fullThemeName);
          } else {
            themeTarget.classList.remove(fullThemeName);
            this.metaColors && this.setHtmlMetaColors();
          }
        }
      }
    },
    theme: function theme(newTheme, oldTheme) {
      var getThemeName = this.getThemeName,
          themeTarget = this.themeTarget;


      newTheme = getThemeName(newTheme);

      themeTarget.classList.remove(getThemeName(oldTheme));
      themeTarget.classList.add(newTheme);

      if (this.metaColors) {
        this.setHtmlMetaColors(newTheme);
      }
    },
    metaColors: function metaColors(meta) {
      if (meta) {
        this.setHtmlMetaColors(this.fullThemeName);
      } else {
        this.setHtmlMetaColors();
      }
    }
  },
  methods: {
    getAncestorTheme: function getAncestorTheme(component) {
      var _this = this;

      if (component) {
        var currentTheme = component.mdTheme;
        var getParentThemeName = function getParentThemeName(parent) {
          if (parent) {
            var mdTheme = parent.mdTheme,
                $parent = parent.$parent;


            if (mdTheme && mdTheme !== currentTheme) {
              return mdTheme;
            }

            return getParentThemeName($parent);
          }

          return _this.theme;
        };

        return getParentThemeName(component.$parent);
      }

      return null;
    },
    getThemeName: function getThemeName(theme) {
      var themeName = theme || this.theme;

      return this.prefix + themeName;
    },
    setMicrosoftColors: function setMicrosoftColors(primaryColor) {
      if (msColor) {
        msColor.setAttribute('content', primaryColor);
      }
    },
    setThemeColors: function setThemeColors(primaryColor) {
      if (themeColor) {
        themeColor.setAttribute('content', primaryColor);
      }
    },
    setMaskColors: function setMaskColors(primaryColor) {
      if (maskIcon) {
        maskIcon.setAttribute('color', primaryColor);
      }
    },
    setHtmlMetaColors: function setHtmlMetaColors(themeName) {
      var primaryColor = '#fff';

      if (themeName) {
        var computedStyle = window.getComputedStyle(document.documentElement);

        primaryColor = computedStyle.getPropertyValue('--' + themeName + '-primary');
      }

      if (primaryColor) {
        this.setMicrosoftColors(primaryColor);
        this.setThemeColors(primaryColor);
        this.setMaskColors(primaryColor);
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    msColor = document.querySelector('[name="msapplication-TileColor"]');
    themeColor = document.querySelector('[name="theme-color"]');
    maskIcon = document.querySelector('[rel="mask-icon"]');

    if (this.enabled && this.metaColors) {
      window.addEventListener('load', (function () {
        _this2.setHtmlMetaColors(_this2.fullThemeName);
      }));
    }
  }
});

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var Instance = {};

  _vue2.default.util.defineReactive(Instance, 'reactive', data);

  return Instance.reactive;
};

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (22:8)\nYou may need an appropriate loader to handle this file type.\n|       mdInputType: {\n|         type: [String, Number],\n|         ...MdPropValidator('md-input-type', ['email', 'number', 'password', 'search', 'tel', 'text', 'url'])\n|       },\n|       mdPlaceholder: [String, Number],");

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-icon class=\"md-icon-image\" v-once>\n|     <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" v-once>\n|       <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\" />");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (newComponent) {
  var defaults = {
    props: {
      mdTheme: null
    },
    computed: {
      $mdActiveTheme: function $mdActiveTheme() {
        var enabled = _MdTheme2.default.enabled,
            getThemeName = _MdTheme2.default.getThemeName,
            getAncestorTheme = _MdTheme2.default.getAncestorTheme;


        if (enabled && this.mdTheme !== false) {
          return getThemeName(this.mdTheme || getAncestorTheme(this));
        }

        return null;
      }
    }
  };

  return (0, _deepmerge2.default)(defaults, newComponent);
};

var _MdTheme = __webpack_require__(3);

var _MdTheme2 = _interopRequireDefault(_MdTheme);

var _deepmerge = __webpack_require__(7);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.deepmerge = factory());
}(this, (function () { 'use strict';

	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {}
	}

	function cloneUnlessOtherwiseSpecified(value, options) {
		return (options.clone !== false && options.isMergeableObject(value))
			? deepmerge(emptyTarget(value), value, options)
			: value
	}

	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map((function(element) {
			return cloneUnlessOtherwiseSpecified(element, options)
		}))
	}

	function getMergeFunction(key, options) {
		if (!options.customMerge) {
			return deepmerge
		}
		var customMerge = options.customMerge(key);
		return typeof customMerge === 'function' ? customMerge : deepmerge
	}

	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(target).filter((function(symbol) {
				return target.propertyIsEnumerable(symbol)
			}))
			: []
	}

	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
	}

	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) {
			getKeys(target).forEach((function(key) {
				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
			}));
		}
		getKeys(source).forEach((function(key) {
			if (!options.isMergeableObject(source[key]) || !target[key]) {
				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
			} else {
				destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			}
		}));
		return destination
	}

	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;

		var sourceIsArray = Array.isArray(source);
		var targetIsArray = Array.isArray(target);
		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

		if (!sourceAndTargetTypesMatch) {
			return cloneUnlessOtherwiseSpecified(source, options)
		} else if (sourceIsArray) {
			return options.arrayMerge(target, source, options)
		} else {
			return mergeObject(target, source, options)
		}
	}

	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) {
			throw new Error('first argument should be an array')
		}

		return array.reduce((function(prev, next) {
			return deepmerge(prev, next, options)
		}), {})
	};

	var deepmerge_1 = deepmerge;

	return deepmerge_1;

})));


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdIcon/MdIcon.vue?vue&type=template&id=59c14b8f
var MdIconvue_type_template_id_59c14b8f = __webpack_require__(15);

// EXTERNAL MODULE: ./src/core/MdComponent.js
var MdComponent = __webpack_require__(5);
var MdComponent_default = /*#__PURE__*/__webpack_require__.n(MdComponent);

// EXTERNAL MODULE: ./src/components/MdSvgLoader/MdSvgLoader.vue?vue&type=template&id=0db3655e
var MdSvgLoadervue_type_template_id_0db3655e = __webpack_require__(16);

// CONCATENATED MODULE: ./src/components/MdSvgLoader/MdSvgLoader.vue?vue&type=script&lang=js

  let mdSVGStore = {}

  /* harmony default export */ var MdSvgLoadervue_type_script_lang_js = ({
    name: 'MdSVGLoader',
    props: {
      mdSrc: {
        type: String,
        required: true
      }
    },
    data: () => ({
      html: null,
      error: null
    }),
    watch: {
      mdSrc () {
        this.html = null
        this.loadSVG()
      }
    },
    methods: {
      isSVG (mimetype) {
        if (typeof mimetype !== 'string') return false
        return mimetype.indexOf('svg') >= 0
      },
      setHtml (value) {
        mdSVGStore[this.mdSrc].then((html) => {
          this.html = html

          return this.$nextTick()
        }).then(() => this.$emit('md-loaded'))
      },
      unexpectedError (reject) {
        this.error = `Something bad happened trying to fetch ${this.mdSrc}.`
        reject(this.error)
      },
      loadSVG () {
        if (!mdSVGStore.hasOwnProperty(this.mdSrc)) {
          mdSVGStore[this.mdSrc] = new Promise((resolve, reject) => {
            const request = new window.XMLHttpRequest()

            request.open('GET', this.mdSrc, true)

            request.onload = () => {
              const mimetype = request.getResponseHeader('content-type')

              if (request.status === 200) {
                if (this.isSVG(mimetype)) {
                  resolve(request.response)
                  this.setHtml()
                } else {
                  this.error = `The file ${this.mdSrc} is not a valid SVG.`
                  reject(this.error)
                }
              } else if (request.status >= 400 && request.status < 500) {
                this.error = `The file ${this.mdSrc} do not exists.`
                reject(this.error)
              } else {
                this.unexpectedError(reject)
              }
            }

            request.onerror = () => this.unexpectedError(reject)
            request.onabort = () => this.unexpectedError(reject)
            request.send()
          })
        } else {
          this.setHtml()
        }
      }
    },
    mounted () {
      this.loadSVG()
    }
  });

// EXTERNAL MODULE: ./src/components/MdSvgLoader/MdSvgLoader.vue?vue&type=style&index=0&id=0db3655e&lang=scss
var MdSvgLoadervue_type_style_index_0_id_0db3655e_lang_scss = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdSvgLoader/MdSvgLoader.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdSvgLoadervue_type_script_lang_js, [['render',MdSvgLoadervue_type_template_id_0db3655e["render"]],['__file',"src/components/MdSvgLoader/MdSvgLoader.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "0db3655e"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('0db3655e', __exports__)) {
    console.log('reload')
    api.reload('0db3655e', __exports__)
  }
  
  module.hot.accept("./MdSvgLoader.vue?vue&type=template&id=0db3655e", () => {
    console.log('re-render')
    api.rerender('0db3655e', render)
  })

}


/* harmony default export */ var MdSvgLoader = (__exports__);
// CONCATENATED MODULE: ./src/components/MdIcon/MdIcon.vue?vue&type=script&lang=js

  
  

  /* harmony default export */ var MdIconvue_type_script_lang_js = (new MdComponent_default.a({
    name: 'MdIcon',
    components: {
      MdSvgLoader: MdSvgLoader
    },
    props: {
      mdSrc: String
    }
  }));

// EXTERNAL MODULE: ./src/components/MdIcon/MdIcon.vue?vue&type=style&index=0&id=59c14b8f&lang=scss
var MdIconvue_type_style_index_0_id_59c14b8f_lang_scss = __webpack_require__(18);

// CONCATENATED MODULE: ./src/components/MdIcon/MdIcon.vue







const MdIcon___exports__ = /*#__PURE__*/exportHelper_default()(MdIconvue_type_script_lang_js, [['render',MdIconvue_type_template_id_59c14b8f["render"]],['__file',"src/components/MdIcon/MdIcon.vue"]])
/* hot reload */
if (false) {
  MdIcon___exports__.__hmrId = "59c14b8f"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('59c14b8f', MdIcon___exports__)) {
    console.log('reload')
    api.reload('59c14b8f', MdIcon___exports__)
  }
  
  module.hot.accept("./MdIcon.vue?vue&type=template&id=59c14b8f", () => {
    console.log('re-render')
    api.rerender('59c14b8f', render)
  })

}


/* harmony default export */ var MdIcon = __webpack_exports__["default"] = (MdIcon___exports__);

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (92:10)\nYou may need an appropriate loader to handle this file type.\n| \n|         return {\n|           ...position,\n|           width: size,\n|           height: size");

/***/ })

/******/ });
}));