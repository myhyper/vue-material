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
/******/ 	return __webpack_require__(__webpack_require__.s = 353);
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

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  mdRounded: Boolean,
  mdSize: {
    type: Number,
    default: 420
  },
  mdIcon: String,
  mdLabel: String,
  mdDescription: String
};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(45)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout((function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout((function() { throw e }), 0)
            }
          }
        }
      }), Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(2);

var _material2 = _interopRequireDefault(_material);

var _MdTableContainer = __webpack_require__(276);

var _MdTableContainer2 = _interopRequireDefault(_MdTableContainer);

var _MdTableToolbar = __webpack_require__(280);

var _MdTableToolbar2 = _interopRequireDefault(_MdTableToolbar);

var _MdTableEmptyState = __webpack_require__(283);

var _MdTableEmptyState2 = _interopRequireDefault(_MdTableEmptyState);

var _MdTableRow = __webpack_require__(286);

var _MdTableRow2 = _interopRequireDefault(_MdTableRow);

var _MdTableHead = __webpack_require__(289);

var _MdTableHead2 = _interopRequireDefault(_MdTableHead);

var _MdTableCell = __webpack_require__(295);

var _MdTableCell2 = _interopRequireDefault(_MdTableCell);

var _MdTablePagination = __webpack_require__(298);

var _MdTablePagination2 = _interopRequireDefault(_MdTablePagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component('MdTable', _MdTableContainer2.default);
  Vue.component(_MdTableToolbar2.default.name, _MdTableToolbar2.default);
  Vue.component(_MdTableEmptyState2.default.name, _MdTableEmptyState2.default);
  Vue.component(_MdTableRow2.default.name, _MdTableRow2.default);
  Vue.component(_MdTableHead2.default.name, _MdTableHead2.default);
  Vue.component(_MdTableCell2.default.name, _MdTableCell2.default);
  Vue.component(_MdTablePagination2.default.name, _MdTablePagination2.default);
};

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _MdTable = __webpack_require__(277);

var _MdTable2 = _interopRequireDefault(_MdTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function processChildren(children, createElement) {
  var slotNames = ['md-table-toolbar', 'md-table-empty-state', 'md-table-pagination'];
  var nodes = Array.from(children);
  var namedSlots = {};

  function getTag(_ref) {
    var componentOptions = _ref.componentOptions;

    return componentOptions && componentOptions.tag;
  }

  nodes.forEach((function (node, index) {
    if (node && node.tag) {
      var tag = getTag(node);

      if (tag && slotNames.includes(tag)) {
        node.data.slot = tag;
        node.data.attrs = node.data.attrs || {};
        namedSlots[tag] = function () {
          return node;
        };
        nodes.splice(index, 1);
      }
    }
  }));

  return {
    childNodes: nodes,
    slots: namedSlots
  };
}

exports.default = {
  name: 'MdTableContainer',
  functional: true,
  render: function render(createElement, _ref2) {
    var data = _ref2.data,
        props = _ref2.props,
        children = _ref2.children;

    var slotChildren = [];
    var scopedSlots = data.scopedSlots;

    if (children) {
      var _processChildren = processChildren(children, createElement),
          childNodes = _processChildren.childNodes,
          slots = _processChildren.slots;

      slotChildren = childNodes;
      scopedSlots = _extends({}, scopedSlots, slots);
    }

    return createElement(_MdTable2.default, _extends({}, data, {
      props: props,
      scopedSlots: scopedSlots
    }), [slotChildren]);
  }
};

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdTable_vue_vue_type_template_id_aaeced82__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdTable_vue_vue_type_template_id_aaeced82___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdTable_vue_vue_type_template_id_aaeced82__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdTable_vue_vue_type_script_lang_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdTable_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdTable_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__MdTable_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_1__MdTable_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdTable_vue_vue_type_style_index_0_id_aaeced82_lang_scss__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdTable_vue_vue_type_style_index_0_id_aaeced82_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MdTable_vue_vue_type_style_index_0_id_aaeced82_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);







const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_1__MdTable_vue_vue_type_script_lang_js__["default"], [['render',__WEBPACK_IMPORTED_MODULE_0__MdTable_vue_vue_type_template_id_aaeced82__["render"]],['__file',"src/components/MdTable/MdTable.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "aaeced82"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('aaeced82', __exports__)) {
    console.log('reload')
    api.reload('aaeced82', __exports__)
  }
  
  module.hot.accept("./MdTable.vue?vue&type=template&id=aaeced82", () => {
    console.log('re-render')
    api.rerender('aaeced82', render)
  })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-tag-switcher :md-tag=\"contentTag\" class=\"md-table\">\n|     <slot name=\"md-table-toolbar\" />\n| ");

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-table {");

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdEmptyState/MdEmptyState.vue?vue&type=template&id=d8a893a2
var MdEmptyStatevue_type_template_id_d8a893a2 = __webpack_require__(48);

// EXTERNAL MODULE: ./src/core/MdComponent.js
var MdComponent = __webpack_require__(5);
var MdComponent_default = /*#__PURE__*/__webpack_require__.n(MdComponent);

// EXTERNAL MODULE: ./src/components/MdEmptyState/MdEmptyStateProps.js
var MdEmptyStateProps = __webpack_require__(22);
var MdEmptyStateProps_default = /*#__PURE__*/__webpack_require__.n(MdEmptyStateProps);

// EXTERNAL MODULE: ./src/core/mixins/MdAssetIcon/MdAssetIcon.js
var MdAssetIcon = __webpack_require__(49);
var MdAssetIcon_default = /*#__PURE__*/__webpack_require__.n(MdAssetIcon);

// CONCATENATED MODULE: ./src/components/MdEmptyState/MdEmptyState.vue?vue&type=script&lang=js

  
  
  

  /* harmony default export */ var MdEmptyStatevue_type_script_lang_js = (new MdComponent_default.a({
    name: 'MdEmptyState',
    mixins: [MdAssetIcon_default.a],
    props: MdEmptyStateProps_default.a,
    computed: {
      emptyStateClasses () {
        return {
          'md-rounded': this.mdRounded
        }
      },
      emptyStateStyles () {
        if (this.mdRounded) {
          const size = this.mdSize + 'px'

          return {
            width: size,
            height: size
          }
        }
      }
    }
  }));

// EXTERNAL MODULE: ./src/components/MdEmptyState/MdEmptyState.vue?vue&type=style&index=0&id=d8a893a2&lang=scss
var MdEmptyStatevue_type_style_index_0_id_d8a893a2_lang_scss = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdEmptyState/MdEmptyState.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdEmptyStatevue_type_script_lang_js, [['render',MdEmptyStatevue_type_template_id_d8a893a2["render"]],['__file',"src/components/MdEmptyState/MdEmptyState.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "d8a893a2"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('d8a893a2', __exports__)) {
    console.log('reload')
    api.reload('d8a893a2', __exports__)
  }
  
  module.hot.accept("./MdEmptyState.vue?vue&type=template&id=d8a893a2", () => {
    console.log('re-render')
    api.rerender('d8a893a2', render)
  })

}


/* harmony default export */ var MdEmptyState = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdTable/MdTableToolbar.vue?vue&type=template&id=3f6f4028
var MdTableToolbarvue_type_template_id_3f6f4028 = __webpack_require__(281);

// EXTERNAL MODULE: ./src/components/MdToolbar/MdToolbar.vue + 1 modules
var MdToolbar = __webpack_require__(31);

// CONCATENATED MODULE: ./src/components/MdTable/MdTableToolbar.vue?vue&type=script&lang=js

  

  /* harmony default export */ var MdTableToolbarvue_type_script_lang_js = ({
    name: 'MdTableToolbar',
    components: {
      MdToolbar: MdToolbar["default"]
    },
    inject: ['MdTable']
  });

// EXTERNAL MODULE: ./src/components/MdTable/MdTableToolbar.vue?vue&type=style&index=0&id=3f6f4028&lang=scss
var MdTableToolbarvue_type_style_index_0_id_3f6f4028_lang_scss = __webpack_require__(282);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdTable/MdTableToolbar.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdTableToolbarvue_type_script_lang_js, [['render',MdTableToolbarvue_type_template_id_3f6f4028["render"]],['__file',"src/components/MdTable/MdTableToolbar.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "3f6f4028"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('3f6f4028', __exports__)) {
    console.log('reload')
    api.reload('3f6f4028', __exports__)
  }
  
  module.hot.accept("./MdTableToolbar.vue?vue&type=template&id=3f6f4028", () => {
    console.log('re-render')
    api.rerender('3f6f4028', render)
  })

}


/* harmony default export */ var MdTableToolbar = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-toolbar class=\"md-table-toolbar md-transparent\" :md-elevation=\"0\">\n|     <slot />\n|   </md-toolbar>");

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-table-toolbar {");

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdTable/MdTableEmptyState.vue?vue&type=template&id=6f84743a
var MdTableEmptyStatevue_type_template_id_6f84743a = __webpack_require__(284);

// EXTERNAL MODULE: ./src/components/MdEmptyState/MdEmptyState.vue + 1 modules
var MdEmptyState = __webpack_require__(28);

// EXTERNAL MODULE: ./src/components/MdEmptyState/MdEmptyStateProps.js
var MdEmptyStateProps = __webpack_require__(22);
var MdEmptyStateProps_default = /*#__PURE__*/__webpack_require__.n(MdEmptyStateProps);

// CONCATENATED MODULE: ./src/components/MdTable/MdTableEmptyState.vue?vue&type=script&lang=js

  
  

  /* harmony default export */ var MdTableEmptyStatevue_type_script_lang_js = ({
    name: 'MdTableEmptyState',
    props: MdEmptyStateProps_default.a,
    inject: ['MdTable']
  });

// EXTERNAL MODULE: ./src/components/MdTable/MdTableEmptyState.vue?vue&type=style&index=0&id=6f84743a&lang=scss
var MdTableEmptyStatevue_type_style_index_0_id_6f84743a_lang_scss = __webpack_require__(285);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdTable/MdTableEmptyState.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdTableEmptyStatevue_type_script_lang_js, [['render',MdTableEmptyStatevue_type_template_id_6f84743a["render"]],['__file',"src/components/MdTable/MdTableEmptyState.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "6f84743a"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('6f84743a', __exports__)) {
    console.log('reload')
    api.reload('6f84743a', __exports__)
  }
  
  module.hot.accept("./MdTableEmptyState.vue?vue&type=template&id=6f84743a", () => {
    console.log('re-render')
    api.rerender('6f84743a', render)
  })

}


/* harmony default export */ var MdTableEmptyState = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-empty-state v-bind=\"$props\" class=\"md-table-empty-state\">\n|     <slot />\n|   </md-empty-state>");

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-table-empty-state {");

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdTableRow_vue_vue_type_template_id_00a4496a__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdTableRow_vue_vue_type_template_id_00a4496a___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdTableRow_vue_vue_type_template_id_00a4496a__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdTableRow_vue_vue_type_script_lang_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdTableRow_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdTableRow_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__MdTableRow_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_1__MdTableRow_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdTableRow_vue_vue_type_style_index_0_id_00a4496a_lang_scss__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdTableRow_vue_vue_type_style_index_0_id_00a4496a_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MdTableRow_vue_vue_type_style_index_0_id_00a4496a_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);







const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_1__MdTableRow_vue_vue_type_script_lang_js__["default"], [['render',__WEBPACK_IMPORTED_MODULE_0__MdTableRow_vue_vue_type_template_id_00a4496a__["render"]],['__file',"src/components/MdTable/MdTableRow.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "00a4496a"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('00a4496a', __exports__)) {
    console.log('reload')
    api.reload('00a4496a', __exports__)
  }
  
  module.hot.accept("./MdTableRow.vue?vue&type=template&id=00a4496a", () => {
    console.log('re-render')
    api.rerender('00a4496a', render)
  })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <tr class=\"md-table-row\" :class=\"rowClasses\" @click=\"onClick\" v-on=\"$listeners\">\n|     <md-table-cell-selection\n|       :value=\"isMultipleSelected\"");

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-table-row {");

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdTable/MdTableHead.vue?vue&type=template&id=98ddc082
var MdTableHeadvue_type_template_id_98ddc082 = __webpack_require__(290);

// EXTERNAL MODULE: ./src/core/icons/MdUpwardIcon.vue?vue&type=template&id=235f197a
var MdUpwardIconvue_type_template_id_235f197a = __webpack_require__(291);

// EXTERNAL MODULE: ./src/components/MdIcon/MdIcon.vue + 3 modules
var MdIcon = __webpack_require__(8);

// CONCATENATED MODULE: ./src/core/icons/MdUpwardIcon.vue?vue&type=script&lang=js

  

  /* harmony default export */ var MdUpwardIconvue_type_script_lang_js = ({
    name: 'MdUpwardIcon',
    components: {
      MdIcon: MdIcon["default"]
    }
  });

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/core/icons/MdUpwardIcon.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(MdUpwardIconvue_type_script_lang_js, [['render',MdUpwardIconvue_type_template_id_235f197a["render"]],['__file',"src/core/icons/MdUpwardIcon.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "235f197a"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('235f197a', __exports__)) {
    console.log('reload')
    api.reload('235f197a', __exports__)
  }
  
  module.hot.accept("./MdUpwardIcon.vue?vue&type=template&id=235f197a", () => {
    console.log('re-render')
    api.rerender('235f197a', render)
  })

}


/* harmony default export */ var MdUpwardIcon = (__exports__);
// EXTERNAL MODULE: ./src/core/utils/MdResizeObserver.js
var MdResizeObserver = __webpack_require__(292);
var MdResizeObserver_default = /*#__PURE__*/__webpack_require__.n(MdResizeObserver);

// CONCATENATED MODULE: ./src/components/MdTable/MdTableHead.vue?vue&type=script&lang=js

  
  

  /* harmony default export */ var MdTableHeadvue_type_script_lang_js = ({
    name: 'MdTableHead',
    components: {
      MdUpwardIcon: MdUpwardIcon
    },
    props: {
      mdNumeric: Boolean,
      numeric: Boolean,
      id: [String, Number],
      label: String,
      tooltip: String,
      sortBy: String
    },
    inject: ['MdTable'],
    data: () => ({
      width: null,
      windowResizeObserver: null
    }),
    computed: {
      hasSort () {
        return this.MdTable.sort && this.sortBy
      },
      isSorted () {
        if (this.MdTable.sort) {
          return this.MdTable.sort === this.sortBy
        }
      },
      isDescSorted () {
        return this.isSorted && this.MdTable.sortOrder === 'desc'
      },
      isAscSorted () {
        return this.isSorted && this.MdTable.sortOrder === 'asc'
      },
      headStyles () {
        return {
          width: this.width + 'px'
        }
      },
      headClasses () {
        return {
          'md-numeric': this.numeric || this.mdNumeric,
          'md-sortable': this.hasSort,
          'md-sorted': this.isSorted,
          'md-sorted-desc': this.isDescSorted
        }
      }
    },
    methods: {
      changeSort () {
        if (this.hasSort) {
          if (this.isAscSorted) {
            this.MdTable.sortOrder = 'desc'
          } else {
            this.MdTable.sortOrder = 'asc'
          }

          this.MdTable.sort = this.sortBy
          this.MdTable.emitEvent('md-sorted', this.MdTable.sort)
          this.MdTable.emitEvent('update:mdSort', this.MdTable.sort)
          this.MdTable.emitEvent('update:mdSortOrder', this.MdTable.sortOrder)
          this.MdTable.sortTable()
        }
      },
      getChildNodesBySelector (el, selector) {
        return Array.from(el.childNodes).filter(({ classList }) => classList && classList.contains(selector))
      },
      getNodeIndex (nodes, el) {
        return [].indexOf.call(nodes, el)
      },
      setWidth () {
        if (this.MdTable.fixedHeader) {
          const cellSelector = 'md-table-cell'
          const thEls = this.getChildNodesBySelector(this.$el.parentNode, 'md-table-head')
          const tdEls = this.MdTable.contentEl.querySelectorAll('tr:first-child .' + cellSelector)
          const nodeIndex = this.getNodeIndex(thEls, this.$el)

          this.width = tdEls[nodeIndex].offsetWidth
        }
      }
    },
    updated () {
      this.$nextTick().then(this.setWidth)
    },
    mounted () {
      this.$nextTick().then(this.setWidth)

      if (this.MdTable.fixedHeader) {
        this.windowResizeObserver = new MdResizeObserver_default.a(window, this.setWidth)
      }
    },
    beforeDestroy () {
      if (this.windowResizeObserver) {
        this.windowResizeObserver.destroy()
      }
    }
  });

// EXTERNAL MODULE: ./src/components/MdTable/MdTableHead.vue?vue&type=style&index=0&id=98ddc082&lang=scss
var MdTableHeadvue_type_style_index_0_id_98ddc082_lang_scss = __webpack_require__(294);

// CONCATENATED MODULE: ./src/components/MdTable/MdTableHead.vue







const MdTableHead___exports__ = /*#__PURE__*/exportHelper_default()(MdTableHeadvue_type_script_lang_js, [['render',MdTableHeadvue_type_template_id_98ddc082["render"]],['__file',"src/components/MdTable/MdTableHead.vue"]])
/* hot reload */
if (false) {
  MdTableHead___exports__.__hmrId = "98ddc082"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('98ddc082', MdTableHead___exports__)) {
    console.log('reload')
    api.reload('98ddc082', MdTableHead___exports__)
  }
  
  module.hot.accept("./MdTableHead.vue?vue&type=template&id=98ddc082", () => {
    console.log('re-render')
    api.rerender('98ddc082', render)
  })

}


/* harmony default export */ var MdTableHead = __webpack_exports__["default"] = (MdTableHead___exports__);

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <th class=\"md-table-head\" :id=\"id\" :class=\"headClasses\" :style=\"headStyles\" @click=\"changeSort\">\n|     <div class=\"md-table-head-container\" v-if=\"$slots.default\">\n|       <div class=\"md-table-head-label\">");

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-icon class=\"md-icon-image\" v-once>\n|     <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n|       <path d=\"M0 0h24v24H0V0z\" fill=\"none\" />");

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raf = __webpack_require__(27);

var _raf2 = _interopRequireDefault(_raf);

var _MdObserveEvent = __webpack_require__(293);

var _MdObserveEvent2 = _interopRequireDefault(_MdObserveEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var observerFn = arguments[1];

  var observer = (0, _MdObserveEvent2.default)(el, 'resize', (function () {
    (0, _raf2.default)(observerFn);
  }), { passive: true });

  return {
    destroy: observer.destroy
  };
};

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el, eventName, observerFn, options) {
  function killObserver() {
    el.removeEventListener(eventName, observerFn);
  }

  //fix click event for ios devices: https://stackoverflow.com/questions/3705937/document-click-not-working-correctly-on-iphone-jquery/17490775
  eventName && eventName.indexOf('click') >= 0 && /iP/i.test(navigator.userAgent) && (el.style.cursor = 'pointer');
  //
  el.addEventListener(eventName, observerFn, options || false);

  return {
    destroy: killObserver
  };
};

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-table-head {");

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdTable/MdTableCell.vue?vue&type=template&id=813d6b7e
var MdTableCellvue_type_template_id_813d6b7e = __webpack_require__(296);

// CONCATENATED MODULE: ./src/components/MdTable/MdTableCell.vue?vue&type=script&lang=js

  /* harmony default export */ var MdTableCellvue_type_script_lang_js = ({
    name: 'MdTableCell',
    props: {
      mdId: [String, Number],
      mdLabel: String,
      mdNumeric: Boolean,
      mdTooltip: String,
      mdSortBy: String
    },
    inject: ['MdTable'],
    data: () => ({
      index: null,
      parentNode: null
    }),
    computed: {
      cellClasses () {
        return {
          'md-numeric': this.mdNumeric
        }
      }
    },
    watch: {
      mdSortBy () {
        this.setCellData()
      },
      mdNumeric () {
        this.setCellData()
      },
      mdLabel () {
        this.setCellData()
      },
      mdTooltip () {
        this.setCellData()
      }
    },
    methods: {
      setCellData ($vm = this) {
        this.$set(this.MdTable.items, $vm.index, {
          id: $vm.mdId,
          label: $vm.mdLabel,
          numeric: $vm.mdNumeric,
          tooltip: $vm.mdTooltip,
          sortBy: $vm.mdSortBy
        })
      },
      updateAllCellData () {
        this.MdTable.items = {}

        const cells = Array.from(this.parentNode.childNodes).filter(({ tagName, classList }) => {
          const isSelection = classList && classList.contains('md-table-cell-selection')
          const isTd = tagName && tagName.toLowerCase() === 'td'

          return isTd && !isSelection
        })

        cells.forEach((cell, index) => {
          const $vm = cell.__vue__

          $vm.index = index

          this.setCellData($vm)
        })
      }
    },
    mounted () {
      this.parentNode = this.$el.parentNode
      this.updateAllCellData()
    },
    destroyed () {
      const rowRemoved = this.$el.parentNode !== null

      if (rowRemoved) {
        return false
      }

      this.updateAllCellData()
    }
  });

// EXTERNAL MODULE: ./src/components/MdTable/MdTableCell.vue?vue&type=style&index=0&id=813d6b7e&lang=scss
var MdTableCellvue_type_style_index_0_id_813d6b7e_lang_scss = __webpack_require__(297);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdTable/MdTableCell.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdTableCellvue_type_script_lang_js, [['render',MdTableCellvue_type_template_id_813d6b7e["render"]],['__file',"src/components/MdTable/MdTableCell.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "813d6b7e"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('813d6b7e', __exports__)) {
    console.log('reload')
    api.reload('813d6b7e', __exports__)
  }
  
  module.hot.accept("./MdTableCell.vue?vue&type=template&id=813d6b7e", () => {
    console.log('re-render')
    api.rerender('813d6b7e', render)
  })

}


/* harmony default export */ var MdTableCell = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <td class=\"md-table-cell\" :class=\"cellClasses\">\n|     <div class=\"md-table-cell-container\">\n|       <slot />");

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-table-cell {");

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdTable/MdTablePagination.vue?vue&type=template&id=4165698e
var MdTablePaginationvue_type_template_id_4165698e = __webpack_require__(299);

// CONCATENATED MODULE: ./src/components/MdTable/MdTablePagination.vue?vue&type=script&lang=babel

  const getPageData = (data, mdPage, mdPageSize) => {
    return data.slice((mdPage - 1) * mdPageSize, ((mdPage - 1) * mdPageSize) + mdPageSize)
  }
  /* harmony default export */ var MdTablePaginationvue_type_script_lang_babel = ({
    name: 'MdTablePagination',
    inject: ['MdTable'],
    props: {
      mdData: {
        type: [Array, Object]
      },
      mdPageOptions: {
        type: [Array, Boolean],
        default: () => [5, 10, 25, 50, 100]
      },
      mdPaginatedData: {
        type: Array,
        default: () => []
      },
      mdPageSize: {
        type: Number,
        default: 10
      },
      mdUpdate: {
        type: Function,
        default: () => true
      },
      mdLabel: {
        type: String,
        default: 'Rows per page:'
      },
      mdSeparator: {
        type: String,
        default: 'of'
      }
    },
    data: () => ({
      mdPage: 0,
      mdCount: 0,
      currentPageSize: 0
    }),
    computed: {
      pageCount () {
        return this.getPageCount()
      },
      isExternalPagination () {
        return this.mdData && this.mdData.mdData
      }
    },
    watch: {
      mdData: {
        immediate: true,
        handler (mdData) {
          this.mdData = mdData
          this.updatePage()
        }
      },
      mdPageSize: {
        immediate: true,
        handler (pageSize) {
          this.currentPageSize = pageSize
          this.updatePage()
        }
      },
      currentPageSize: {
        immediate: true,
        handler (newValue, oldValue) {
          if (this.mdUpdate(this.mdPage, this.currentPageSize, this.MdTable.sort, this.MdTable.sortOrder) !== false) {
            this.updatePage()
          }
        }
      }
    },
    methods: {
      getPageCount () {
        return Math.ceil(this.mdCount / this.currentPageSize);
      },
      setPage (mdPage, mdCount) {
        this.mdPage = mdCount > 0 ? (mdPage > 0 ? mdPage : (this.mdPage > 0 ? this.mdPage : 1)) : 0
        var pageCount = this.getPageCount()
        if (this.mdPage > pageCount) {
          this.mdPage = pageCount
        }
      },
      updatePage () {
        if (this.currentPageSize !== 0) {
          if (this.isExternalPagination) {
            this.mdCount = this.mdData.mdCount
            this.setPage(this.mdData.mdPage, this.mdCount)
            this.$emit('update:mdPaginatedData', this.mdData.mdData)
          } else {
            this.mdCount = this.mdData.length
            this.setPage(this.mdPage, this.mdCount)
            if (this.mdPage > 0) {
              this.$emit('update:mdPaginatedData', getPageData(this.mdData, this.mdPage, this.currentPageSize))
            } else {
              this.$emit('update:mdPaginatedData', [])
            }
          }
        }
      },
      changePage (AddOrSubtract) {
        if (this.mdUpdate(this.mdPage + AddOrSubtract, this.currentPageSize, this.MdTable.sort, this.MdTable.sortOrder) !== false) {
          this.mdPage = this.mdPage + AddOrSubtract
          if (!this.isExternalPagination) {
            this.$emit('update:mdPaginatedData', getPageData(this.mdData, this.mdPage, this.currentPageSize))
          }
        }
      }
    }
  });

// EXTERNAL MODULE: ./src/components/MdTable/MdTablePagination.vue?vue&type=style&index=0&id=4165698e&lang=scss
var MdTablePaginationvue_type_style_index_0_id_4165698e_lang_scss = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdTable/MdTablePagination.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdTablePaginationvue_type_script_lang_babel, [['render',MdTablePaginationvue_type_template_id_4165698e["render"]],['__file',"src/components/MdTable/MdTablePagination.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "4165698e"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('4165698e', __exports__)) {
    console.log('reload')
    api.reload('4165698e', __exports__)
  }
  
  module.hot.accept("./MdTablePagination.vue?vue&type=template&id=4165698e", () => {
    console.log('re-render')
    api.rerender('4165698e', render)
  })

}


/* harmony default export */ var MdTablePagination = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-table-pagination\">\n|     <template v-if=\"mdPageOptions !== false\">\n|       <span class=\"md-table-pagination-label\">{{ mdLabel }}</span>");

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

/***/ 300:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-table-pagination {");

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdToolbar/MdToolbar.vue?vue&type=template&id=38a0b4d9
var MdToolbarvue_type_template_id_38a0b4d9 = __webpack_require__(63);

// EXTERNAL MODULE: ./src/core/MdComponent.js
var MdComponent = __webpack_require__(5);
var MdComponent_default = /*#__PURE__*/__webpack_require__.n(MdComponent);

// CONCATENATED MODULE: ./src/components/MdToolbar/MdToolbar.vue?vue&type=script&lang=js

  

  /* harmony default export */ var MdToolbarvue_type_script_lang_js = (new MdComponent_default.a({
    name: 'MdToolbar',
    props: {
      mdElevation: {
        type: [String, Number],
        default: 4
      }
    }
  }));

// EXTERNAL MODULE: ./src/components/MdToolbar/MdToolbar.vue?vue&type=style&index=0&id=38a0b4d9&lang=scss
var MdToolbarvue_type_style_index_0_id_38a0b4d9_lang_scss = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdToolbar/MdToolbar.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdToolbarvue_type_script_lang_js, [['render',MdToolbarvue_type_template_id_38a0b4d9["render"]],['__file',"src/components/MdToolbar/MdToolbar.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "38a0b4d9"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('38a0b4d9', __exports__)) {
    console.log('reload')
    api.reload('38a0b4d9', __exports__)
  }
  
  module.hot.accept("./MdToolbar.vue?vue&type=template&id=38a0b4d9", () => {
    console.log('re-render')
    api.rerender('38a0b4d9', render)
  })

}


/* harmony default export */ var MdToolbar = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(275);


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

/***/ 44:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)))

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <transition name=\"md-empty-state\" appear>\n|     <div class=\"md-empty-state\" :class=\"[emptyStateClasses, $mdActiveTheme]\" :style=\"emptyStateStyles\">\n|       <div class=\"md-empty-state-container\">");

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {
    isAssetIcon: function isAssetIcon(icon) {
      return (/\w+[/\\.]\w+/.test(icon)
      );
    }
  }
};

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

/***/ 50:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n|   @import \"~components/MdIcon/mixins\";\n| ");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (50:8)\nYou may need an appropriate loader to handle this file type.\n|         type: String,\n|         default: 'asc',\n|         ...MdPropValidator('md-sort-order', ['asc', 'desc'])\n|       },\n|       mdSortFn: {");

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-toolbar\" :class=\"[$mdActiveTheme, `md-elevation-${mdElevation}`]\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n|   @import \"~components/MdLayout/mixins\";\n|   @import \"~components/MdElevation/mixins\";");

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (15:8)\nYou may need an appropriate loader to handle this file type.\n|       mdSelectable: {\n|         type: [String],\n|         ...MdPropValidator('md-selectable', ['multiple', 'single'])\n|       },\n|       mdDisabled: Boolean,");

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

/***/ })

/******/ });
}));