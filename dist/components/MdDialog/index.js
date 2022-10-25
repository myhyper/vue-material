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
/******/ 	return __webpack_require__(__webpack_require__.s = 333);
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

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(2);

var _material2 = _interopRequireDefault(_material);

var _MdDialog = __webpack_require__(26);

var _MdDialog2 = _interopRequireDefault(_MdDialog);

var _MdDialogTitle = __webpack_require__(159);

var _MdDialogTitle2 = _interopRequireDefault(_MdDialogTitle);

var _MdDialogContent = __webpack_require__(162);

var _MdDialogContent2 = _interopRequireDefault(_MdDialogContent);

var _MdDialogActions = __webpack_require__(165);

var _MdDialogActions2 = _interopRequireDefault(_MdDialogActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdDialog2.default.name, _MdDialog2.default);
  Vue.component(_MdDialogTitle2.default.name, _MdDialogTitle2.default);
  Vue.component(_MdDialogContent2.default.name, _MdDialogContent2.default);
  Vue.component(_MdDialogActions2.default.name, _MdDialogActions2.default);
};

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-portal>\n|     <transition name=\"md-dialog\">\n|       <div class=\"md-dialog\" v-if=\"mdActive\">");

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-portal :md-attach-to-parent=\"mdAttachToParent\">\n|     <transition name=\"md-overlay\">\n|       <div class=\"md-overlay\" :class=\"overlayClasses\" v-on=\"$listeners\" v-if=\"mdActive\"></div>");

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-overlay {");

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdFocusTrap',
  abstract: true,
  methods: {
    setFocus: function setFocus() {
      var _this = this;

      window.setTimeout((function () {
        if (_this.$el.tagName) {
          _this.$el.setAttribute('tabindex', '-1');
          _this.$el.focus();
        }
      }), 20);
    }
  },
  mounted: function mounted() {
    this.setFocus();
  },
  render: function render() {
    try {
      var defaultSlot = this.$slots.default;

      if (!defaultSlot) {
        return null;
      }

      if (defaultSlot.length > 1) {
        throw new Error();
      }

      return defaultSlot[0];
    } catch (e) {
      _vue2.default.util.warn('MdFocusTrap can only render one, and exactly one child component.', this);
    }

    return null;
  }
};

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n|   @import \"~components/MdLayout/mixins\";\n|   @import \"~components/MdElevation/mixins\";");

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdDialog/MdDialogTitle.vue?vue&type=template&id=879275ce
var MdDialogTitlevue_type_template_id_879275ce = __webpack_require__(160);

// CONCATENATED MODULE: ./src/components/MdDialog/MdDialogTitle.vue?vue&type=script&lang=js

/* harmony default export */ var MdDialogTitlevue_type_script_lang_js = ({
  name: 'MdDialogTitle'
});

// EXTERNAL MODULE: ./src/components/MdDialog/MdDialogTitle.vue?vue&type=style&index=0&id=879275ce&lang=scss
var MdDialogTitlevue_type_style_index_0_id_879275ce_lang_scss = __webpack_require__(161);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdDialog/MdDialogTitle.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdDialogTitlevue_type_script_lang_js, [['render',MdDialogTitlevue_type_template_id_879275ce["render"]],['__file',"src/components/MdDialog/MdDialogTitle.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "879275ce"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('879275ce', __exports__)) {
    console.log('reload')
    api.reload('879275ce', __exports__)
  }
  
  module.hot.accept("./MdDialogTitle.vue?vue&type=template&id=879275ce", () => {
    console.log('re-render')
    api.rerender('879275ce', render)
  })

}


/* harmony default export */ var MdDialogTitle = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <span class=\"md-dialog-title md-title\">\n|     <slot />\n|   </span>");

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-dialog-title {");

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdDialog/MdDialogContent.vue?vue&type=template&id=dae90f0c
var MdDialogContentvue_type_template_id_dae90f0c = __webpack_require__(163);

// EXTERNAL MODULE: ./src/core/MdComponent.js
var MdComponent = __webpack_require__(5);
var MdComponent_default = /*#__PURE__*/__webpack_require__.n(MdComponent);

// CONCATENATED MODULE: ./src/components/MdDialog/MdDialogContent.vue?vue&type=script&lang=js

  

  /* harmony default export */ var MdDialogContentvue_type_script_lang_js = (new MdComponent_default.a({
    name: 'MdDialogContent'
  }));

// EXTERNAL MODULE: ./src/components/MdDialog/MdDialogContent.vue?vue&type=style&index=0&id=dae90f0c&lang=scss
var MdDialogContentvue_type_style_index_0_id_dae90f0c_lang_scss = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdDialog/MdDialogContent.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdDialogContentvue_type_script_lang_js, [['render',MdDialogContentvue_type_template_id_dae90f0c["render"]],['__file',"src/components/MdDialog/MdDialogContent.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "dae90f0c"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('dae90f0c', __exports__)) {
    console.log('reload')
    api.reload('dae90f0c', __exports__)
  }
  
  module.hot.accept("./MdDialogContent.vue?vue&type=template&id=dae90f0c", () => {
    console.log('re-render')
    api.rerender('dae90f0c', render)
  })

}


/* harmony default export */ var MdDialogContent = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div :class=\"['md-dialog-content', $mdActiveTheme]\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-dialog-content {");

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdDialog/MdDialogActions.vue?vue&type=template&id=092eaafe
var MdDialogActionsvue_type_template_id_092eaafe = __webpack_require__(166);

// CONCATENATED MODULE: ./src/components/MdDialog/MdDialogActions.vue?vue&type=script&lang=js

/* harmony default export */ var MdDialogActionsvue_type_script_lang_js = ({
  name: 'MdDialogActions'
});

// EXTERNAL MODULE: ./src/components/MdDialog/MdDialogActions.vue?vue&type=style&index=0&id=092eaafe&lang=scss
var MdDialogActionsvue_type_style_index_0_id_092eaafe_lang_scss = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdDialog/MdDialogActions.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdDialogActionsvue_type_script_lang_js, [['render',MdDialogActionsvue_type_template_id_092eaafe["render"]],['__file',"src/components/MdDialog/MdDialogActions.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "092eaafe"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('092eaafe', __exports__)) {
    console.log('reload')
    api.reload('092eaafe', __exports__)
  }
  
  module.hot.accept("./MdDialogActions.vue?vue&type=template&id=092eaafe", () => {
    console.log('re-render')
    api.rerender('092eaafe', render)
  })

}


/* harmony default export */ var MdDialogActions = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-dialog-actions\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-dialog-actions {");

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

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdDialog/MdDialog.vue?vue&type=template&id=f080a6a2
var MdDialogvue_type_template_id_f080a6a2 = __webpack_require__(154);

// EXTERNAL MODULE: ./src/core/MdComponent.js
var MdComponent = __webpack_require__(5);
var MdComponent_default = /*#__PURE__*/__webpack_require__.n(MdComponent);

// EXTERNAL MODULE: ./src/components/MdPortal/MdPortal.js
var MdPortal = __webpack_require__(43);
var MdPortal_default = /*#__PURE__*/__webpack_require__.n(MdPortal);

// EXTERNAL MODULE: ./src/components/MdOverlay/MdOverlay.vue?vue&type=template&id=0e05c97a
var MdOverlayvue_type_template_id_0e05c97a = __webpack_require__(155);

// CONCATENATED MODULE: ./src/components/MdOverlay/MdOverlay.vue?vue&type=script&lang=js

  

  /* harmony default export */ var MdOverlayvue_type_script_lang_js = ({
    name: 'MdOverlay',
    components: {
      MdPortal: MdPortal_default.a
    },
    props: {
      mdActive: Boolean,
      mdAttachToParent: Boolean,
      mdFixed: Boolean
    },
    computed: {
      overlayClasses () {
        return {
          'md-fixed': this.mdFixed
        }
      }
    }
  });

// EXTERNAL MODULE: ./src/components/MdOverlay/MdOverlay.vue?vue&type=style&index=0&id=0e05c97a&lang=scss
var MdOverlayvue_type_style_index_0_id_0e05c97a_lang_scss = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdOverlay/MdOverlay.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdOverlayvue_type_script_lang_js, [['render',MdOverlayvue_type_template_id_0e05c97a["render"]],['__file',"src/components/MdOverlay/MdOverlay.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "0e05c97a"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('0e05c97a', __exports__)) {
    console.log('reload')
    api.reload('0e05c97a', __exports__)
  }
  
  module.hot.accept("./MdOverlay.vue?vue&type=template&id=0e05c97a", () => {
    console.log('re-render')
    api.rerender('0e05c97a', render)
  })

}


/* harmony default export */ var MdOverlay = (__exports__);
// EXTERNAL MODULE: ./src/components/MdFocusTrap/MdFocusTrap.js
var MdFocusTrap = __webpack_require__(157);
var MdFocusTrap_default = /*#__PURE__*/__webpack_require__.n(MdFocusTrap);

// CONCATENATED MODULE: ./src/components/MdDialog/MdDialog.vue?vue&type=script&lang=js

  
  
  
  

  /* harmony default export */ var MdDialogvue_type_script_lang_js = (new MdComponent_default.a({
    name: 'MdDialog',
    components: {
      MdPortal: MdPortal_default.a,
      MdOverlay: MdOverlay,
      MdFocusTrap: MdFocusTrap_default.a
    },
    props: {
      mdActive: Boolean,
      mdBackdrop: {
        type: Boolean,
        default: true
      },
      mdBackdropClass: {
        type: String,
        default: 'md-dialog-overlay'
      },
      mdCloseOnEsc: {
        type: Boolean,
        default: true
      },
      mdClickOutsideToClose: {
        type: Boolean,
        default: true
      },
      mdFullscreen: {
        type: Boolean,
        default: true
      },
      mdAnimateFromSource: Boolean
    },
    computed: {
      dialogClasses () {
        return {
          'md-active': this.mdActive
        }
      },
      dialogContainerClasses () {
        return {
          'md-dialog-fullscreen': this.mdFullscreen
        }
      }
    },
    watch: {
      mdActive (isActive) {
        this.$nextTick().then(() => {
          if (isActive) {
            this.$emit('md-opened')
          } else {
            this.$emit('md-closed')
          }
        })
      }
    },
    methods: {
      closeDialog () {
        this.$emit('update:mdActive', false)
      },
      onClick () {
        if (this.mdClickOutsideToClose) {
          this.closeDialog()
        }
        this.$emit('md-clicked-outside')
      },
      onEsc () {
        if (this.mdCloseOnEsc) {
          this.closeDialog()
        }
      }
    }
  }));

// EXTERNAL MODULE: ./src/components/MdDialog/MdDialog.vue?vue&type=style&index=0&id=f080a6a2&lang=scss
var MdDialogvue_type_style_index_0_id_f080a6a2_lang_scss = __webpack_require__(158);

// CONCATENATED MODULE: ./src/components/MdDialog/MdDialog.vue







const MdDialog___exports__ = /*#__PURE__*/exportHelper_default()(MdDialogvue_type_script_lang_js, [['render',MdDialogvue_type_template_id_f080a6a2["render"]],['__file',"src/components/MdDialog/MdDialog.vue"]])
/* hot reload */
if (false) {
  MdDialog___exports__.__hmrId = "f080a6a2"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('f080a6a2', MdDialog___exports__)) {
    console.log('reload')
    api.reload('f080a6a2', MdDialog___exports__)
  }
  
  module.hot.accept("./MdDialog.vue?vue&type=template&id=f080a6a2", () => {
    console.log('re-render')
    api.rerender('f080a6a2', render)
  })

}


/* harmony default export */ var MdDialog = __webpack_exports__["default"] = (MdDialog___exports__);

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

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(153);


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

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _raf = __webpack_require__(27);

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdPortal',
  abstract: true,
  props: {
    mdAttachToParent: Boolean,
    mdTarget: {
      type: null,
      validator: function validator(value) {
        if (HTMLElement && value && value instanceof HTMLElement) {
          return true;
        }

        _vue2.default.util.warn('The md-target-el prop is invalid. You should pass a valid HTMLElement.', this);

        return false;
      }
    }
  },
  data: function data() {
    return {
      leaveTimeout: null,
      originalParentEl: null
    };
  },
  computed: {
    transitionName: function transitionName() {
      var childrenComponent = this._vnode.componentOptions.children[0];

      if (childrenComponent) {
        var transition = childrenComponent.data.transition;

        if (transition) {
          return transition.name;
        } else {
          var _transition = childrenComponent.componentOptions.propsData.name;

          if (_transition) {
            return _transition;
          }
        }
      }

      return 'v';
    },
    leaveClass: function leaveClass() {
      return this.transitionName + '-leave';
    },
    leaveActiveClass: function leaveActiveClass() {
      return this.transitionName + '-leave-active';
    },
    leaveToClass: function leaveToClass() {
      return this.transitionName + '-leave-to';
    }
  },
  watch: {
    mdTarget: function mdTarget(newTarget, oldTarget) {
      this.changeParentEl(newTarget);

      if (oldTarget) {
        this.$forceUpdate();
      }
    }
  },
  methods: {
    getTransitionDuration: function getTransitionDuration(el) {
      var duration = window.getComputedStyle(el).transitionDuration;
      var num = parseFloat(duration, 10);
      var unit = duration.match(/m?s/);

      if (unit) {
        unit = unit[0];
      }

      if (unit === 's') {
        return num * 1000;
      }

      if (unit === 'ms') {
        return num;
      }

      return 0;
    },
    killGhostElement: function killGhostElement(el) {
      if (el.parentNode) {
        this.changeParentEl(this.originalParentEl);
        this.$options._parentElm = this.originalParentEl;
        el.parentNode.removeChild(el);
      }
    },
    initDestroy: function initDestroy(manualCall) {
      var _this = this;

      var el = this.$el;

      if (manualCall && this.$el.nodeType === Node.COMMENT_NODE) {
        el = this.$vnode.elm;
      }

      el.classList.add(this.leaveClass);
      el.classList.add(this.leaveActiveClass);

      this.$nextTick().then((function () {
        el.classList.add(_this.leaveToClass);

        clearTimeout(_this.leaveTimeout);
        _this.leaveTimeout = setTimeout((function () {
          _this.destroyElement(el);
        }), _this.getTransitionDuration(el));
      }));
    },
    destroyElement: function destroyElement(el) {
      var _this2 = this;

      (0, _raf2.default)((function () {
        el.classList.remove(_this2.leaveClass);
        el.classList.remove(_this2.leaveActiveClass);
        el.classList.remove(_this2.leaveToClass);
        _this2.$emit('md-destroy');
        _this2.killGhostElement(el);
      }));
    },
    changeParentEl: function changeParentEl(newTarget) {
      newTarget && newTarget.appendChild(this.$el);
    }
  },
  mounted: function mounted() {
    if (!this.originalParentEl) {
      this.originalParentEl = this.$el.parentNode;
      this.$emit('md-initial-parent', this.$el.parentNode);
    }

    if (this.mdAttachToParent && this.$el.parentNode.parentNode) {
      this.changeParentEl(this.$el.parentNode.parentNode);
    } else if (document) {
      this.changeParentEl(this.mdTarget || document.body);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$el.classList) {
      this.initDestroy();
    } else {
      this.killGhostElement(this.$el);
    }
  },
  render: function render(createElement) {
    var defaultSlot = this.$slots.default;

    if (defaultSlot && defaultSlot[0]) {
      return defaultSlot[0];
    }
  }
};

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


/***/ })

/******/ });
}));