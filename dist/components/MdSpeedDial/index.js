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
/******/ 	return __webpack_require__(__webpack_require__.s = 349);
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

/***/ 12:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (63:10)\nYou may need an appropriate loader to handle this file type.\n|         ],\n|         attrs: {\n|           ...this.attrs,\n|           href: this.href,\n|           disabled: this.disabled,");

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

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(2);

var _material2 = _interopRequireDefault(_material);

var _MdSpeedDial = __webpack_require__(246);

var _MdSpeedDial2 = _interopRequireDefault(_MdSpeedDial);

var _MdSpeedDialTarget = __webpack_require__(249);

var _MdSpeedDialTarget2 = _interopRequireDefault(_MdSpeedDialTarget);

var _MdSpeedDialContent = __webpack_require__(252);

var _MdSpeedDialContent2 = _interopRequireDefault(_MdSpeedDialContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdSpeedDial2.default.name, _MdSpeedDial2.default);
  Vue.component(_MdSpeedDialTarget2.default.name, _MdSpeedDialTarget2.default);
  Vue.component(_MdSpeedDialContent2.default.name, _MdSpeedDialContent2.default);
};

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdSpeedDial_vue_vue_type_template_id_470f76d1__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdSpeedDial_vue_vue_type_template_id_470f76d1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdSpeedDial_vue_vue_type_template_id_470f76d1__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdSpeedDial_vue_vue_type_script_lang_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdSpeedDial_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdSpeedDial_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__MdSpeedDial_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_1__MdSpeedDial_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdSpeedDial_vue_vue_type_style_index_0_id_470f76d1_lang_scss__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdSpeedDial_vue_vue_type_style_index_0_id_470f76d1_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MdSpeedDial_vue_vue_type_style_index_0_id_470f76d1_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);







const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_1__MdSpeedDial_vue_vue_type_script_lang_js__["default"], [['render',__WEBPACK_IMPORTED_MODULE_0__MdSpeedDial_vue_vue_type_template_id_470f76d1__["render"]],['__file',"src/components/MdSpeedDial/MdSpeedDial.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "470f76d1"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('470f76d1', __exports__)) {
    console.log('reload')
    api.reload('470f76d1', __exports__)
  }
  
  module.hot.accept("./MdSpeedDial.vue?vue&type=template&id=470f76d1", () => {
    console.log('re-render')
    api.rerender('470f76d1', render)
  })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-speed-dial\" :class=\"[$mdActiveTheme, speedDialClasses]\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-speed-dial {");

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdSpeedDial/MdSpeedDialTarget.vue?vue&type=template&id=654a757c
var MdSpeedDialTargetvue_type_template_id_654a757c = __webpack_require__(250);

// EXTERNAL MODULE: ./src/components/MdButton/MdButton.vue
var MdButton = __webpack_require__(19);

// CONCATENATED MODULE: ./src/components/MdSpeedDial/MdSpeedDialTarget.vue?vue&type=script&lang=js

  

  /* harmony default export */ var MdSpeedDialTargetvue_type_script_lang_js = ({
    name: 'MdSpeedDialTarget',
    components: {
      MdButton: MdButton["default"]
    },
    inject: ['MdSpeedDial'],
    methods: {
      handleClick () {
        if (this.MdSpeedDial.event === 'click') {
          this.MdSpeedDial.active = !this.MdSpeedDial.active
        }
      }
    }
  });

// EXTERNAL MODULE: ./src/components/MdSpeedDial/MdSpeedDialTarget.vue?vue&type=style&index=0&id=654a757c&lang=scss
var MdSpeedDialTargetvue_type_style_index_0_id_654a757c_lang_scss = __webpack_require__(251);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdSpeedDial/MdSpeedDialTarget.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdSpeedDialTargetvue_type_script_lang_js, [['render',MdSpeedDialTargetvue_type_template_id_654a757c["render"]],['__file',"src/components/MdSpeedDial/MdSpeedDialTarget.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "654a757c"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('654a757c', __exports__)) {
    console.log('reload')
    api.reload('654a757c', __exports__)
  }
  
  module.hot.accept("./MdSpeedDialTarget.vue?vue&type=template&id=654a757c", () => {
    console.log('re-render')
    api.rerender('654a757c', render)
  })

}


/* harmony default export */ var MdSpeedDialTarget = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-button class=\"md-speed-dial-target md-fab\" v-on=\"$listeners\" v-bind=\"$attrs\" @click=\"handleClick\">\n|     <slot />\n|   </md-button>");

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-speed-dial-target {");

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdSpeedDial/MdSpeedDialContent.vue?vue&type=template&id=45ac6418
var MdSpeedDialContentvue_type_template_id_45ac6418 = __webpack_require__(253);

// CONCATENATED MODULE: ./src/components/MdSpeedDial/MdSpeedDialContent.vue?vue&type=script&lang=js

  function getChildIndex (direction, index, count) {
    if (direction === 'top') {
      return count - index - 1
    }

    return index
  }

  /* harmony default export */ var MdSpeedDialContentvue_type_script_lang_js = ({
    name: 'MdSpeedDialContent',
    inject: ['MdSpeedDial'],
    methods: {
      setChildrenIndexes () {
        this.$nextTick().then(() => {
          const countChild = this.$children.length

          this.$children.forEach((child, index) => {
            if (child._vnode.tag === 'button') {
              const childIndex = getChildIndex(this.MdSpeedDial.direction, index, countChild)

              child.$el.setAttribute('md-button-index', childIndex)
              child.$el.classList.add('md-raised')
            }
          })
        })
      }
    },
    mounted () {
      this.setChildrenIndexes()
    },
    updated () {
      this.setChildrenIndexes()
    }
  });

// EXTERNAL MODULE: ./src/components/MdSpeedDial/MdSpeedDialContent.vue?vue&type=style&index=0&id=45ac6418&lang=scss
var MdSpeedDialContentvue_type_style_index_0_id_45ac6418_lang_scss = __webpack_require__(254);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdSpeedDial/MdSpeedDialContent.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdSpeedDialContentvue_type_script_lang_js, [['render',MdSpeedDialContentvue_type_template_id_45ac6418["render"]],['__file',"src/components/MdSpeedDial/MdSpeedDialContent.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "45ac6418"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('45ac6418', __exports__)) {
    console.log('reload')
    api.reload('45ac6418', __exports__)
  }
  
  module.hot.accept("./MdSpeedDialContent.vue?vue&type=template&id=45ac6418", () => {
    console.log('re-render')
    api.rerender('45ac6418', render)
  })

}


/* harmony default export */ var MdSpeedDialContent = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-speed-dial-content\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-speed-dial-content {");

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

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(245);


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

/***/ 6:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (11:8)\nYou may need an appropriate loader to handle this file type.\n|         type: String,\n|         default: 'hover',\n|         ...MdPropValidator('md-event', ['click', 'hover'])\n|       },\n|       mdDirection: {");

/***/ })

/******/ });
}));