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
/******/ 	return __webpack_require__(__webpack_require__.s = 322);
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

/***/ 32:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (65:89)\nYou may need an appropriate loader to handle this file type.\n| \n|             if (isRight) {\n|               const drawerRightPrevious = createElement(MdDrawerRightPrevious, { props: {...child.data.attrs}})\n|               drawerRightPrevious.data.slot = 'md-app-drawer-right-previous'\n|               slots.push(drawerRightPrevious)");

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(69);


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

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(2);

var _material2 = _interopRequireDefault(_material);

var _MdApp = __webpack_require__(70);

var _MdApp2 = _interopRequireDefault(_MdApp);

var _MdAppToolbar = __webpack_require__(72);

var _MdAppToolbar2 = _interopRequireDefault(_MdAppToolbar);

var _MdAppContent = __webpack_require__(75);

var _MdAppContent2 = _interopRequireDefault(_MdAppContent);

var _MdAppDrawer = __webpack_require__(78);

var _MdAppDrawer2 = _interopRequireDefault(_MdAppDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdApp2.default.name, _MdApp2.default);
  Vue.component(_MdAppToolbar2.default.name, _MdAppToolbar2.default);
  Vue.component(_MdAppContent2.default.name, _MdAppContent2.default);
  Vue.component(_MdAppDrawer2.default.name, _MdAppDrawer2.default);
};

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdApp_vue_vue_type_script_lang_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdApp_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdApp_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__MdApp_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__MdApp_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdApp_vue_vue_type_style_index_0_id_8b7389b6_lang_scss__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdApp_vue_vue_type_style_index_0_id_8b7389b6_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdApp_vue_vue_type_style_index_0_id_8b7389b6_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);






const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_0__MdApp_vue_vue_type_script_lang_js__["default"], [['__file',"src/components/MdApp/MdApp.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "8b7389b6"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('8b7389b6', __exports__)) {
    console.log('reload')
    api.reload('8b7389b6', __exports__)
  }
  
}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n|   @import \"~components/MdLayout/mixins\";\n| ");

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdApp/MdAppToolbar.vue?vue&type=template&id=2d3e4174
var MdAppToolbarvue_type_template_id_2d3e4174 = __webpack_require__(73);

// CONCATENATED MODULE: ./src/components/MdApp/MdAppToolbar.vue?vue&type=script&lang=js

  /* harmony default export */ var MdAppToolbarvue_type_script_lang_js = ({
    name: 'MdAppToolbar',
    inject: ['MdApp'],
    computed: {
      toolbarClasses () {
        return {
          'md-no-elevation': !this.MdApp.toolbar.hasElevation,
          'md-reveal-active': this.MdApp.toolbar.revealActive,
          'md-fixed-last-active': this.MdApp.toolbar.fixedLastActive,
          'md-overlap-off': this.MdApp.toolbar.overlapOff
        }
      },
      toolbarStyles () {
        let styles = {
          'top': `${this.MdApp.toolbar.top}px`
        }

        if (this.MdApp.toolbar.fixedLastActive) {
          styles['transform'] = `translate3D(0, ${this.MdApp.toolbar.fixedLastHeight}px, 0)`
        }

        return styles
      }
    },
    mounted () {
      const title = this.$el.querySelector('.md-title, .md-display-1, .md-display-2')

      this.MdApp.toolbar.element = this.$el
      this.MdApp.toolbar.titleElement = title

      if (title) {
        this.MdApp.toolbar.titleSize = parseInt(window.getComputedStyle(title).fontSize, 10)
      }
    }
  });

// EXTERNAL MODULE: ./src/components/MdApp/MdAppToolbar.vue?vue&type=style&index=0&id=2d3e4174&lang=scss
var MdAppToolbarvue_type_style_index_0_id_2d3e4174_lang_scss = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdApp/MdAppToolbar.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdAppToolbarvue_type_script_lang_js, [['render',MdAppToolbarvue_type_template_id_2d3e4174["render"]],['__file',"src/components/MdApp/MdAppToolbar.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "2d3e4174"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('2d3e4174', __exports__)) {
    console.log('reload')
    api.reload('2d3e4174', __exports__)
  }
  
  module.hot.accept("./MdAppToolbar.vue?vue&type=template&id=2d3e4174", () => {
    console.log('re-render')
    api.rerender('2d3e4174', render)
  })

}


/* harmony default export */ var MdAppToolbar = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-toolbar class=\"md-app-toolbar\" v-bind=\"$attrs\" v-on=\"$listeners\" :class=\"toolbarClasses\" :style=\"toolbarStyles\">\n|     <slot />\n|   </md-toolbar>");

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-no-elevation {");

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdApp/MdAppContent.vue?vue&type=template&id=65f3d944
var MdAppContentvue_type_template_id_65f3d944 = __webpack_require__(76);

// CONCATENATED MODULE: ./src/components/MdApp/MdAppContent.vue?vue&type=script&lang=js

  /* harmony default export */ var MdAppContentvue_type_script_lang_js = ({
    name: 'MdAppContent',
    inject: ['MdApp'],
    computed: {
      showCard () {
        return this.MdApp.options && this.MdApp.options.mode === 'overlap'
      }
    }
  });

// EXTERNAL MODULE: ./src/components/MdApp/MdAppContent.vue?vue&type=style&index=0&id=65f3d944&lang=scss
var MdAppContentvue_type_style_index_0_id_65f3d944_lang_scss = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdApp/MdAppContent.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdAppContentvue_type_script_lang_js, [['render',MdAppContentvue_type_template_id_65f3d944["render"]],['__file',"src/components/MdApp/MdAppContent.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "65f3d944"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('65f3d944', __exports__)) {
    console.log('reload')
    api.reload('65f3d944', __exports__)
  }
  
  module.hot.accept("./MdAppContent.vue?vue&type=template&id=65f3d944", () => {
    console.log('re-render')
    api.rerender('65f3d944', render)
  })

}


/* harmony default export */ var MdAppContent = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-card class=\"md-app-content md-flex\" v-bind=\"$attrs\" v-on=\"$listeners\" v-if=\"showCard\">\n|     <slot />\n|   </md-card>");

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   .md-app-content {\n|     min-height: 100%;\n| ");

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdApp/MdAppDrawer.vue?vue&type=template&id=1d41d1f6
var MdAppDrawervue_type_template_id_1d41d1f6 = __webpack_require__(79);

// CONCATENATED MODULE: ./src/components/MdApp/MdAppDrawer.vue?vue&type=script&lang=js

  /* harmony default export */ var MdAppDrawervue_type_script_lang_js = ({
    name: 'MdAppDrawer',
    inject: ['MdApp'],
    data: () => ({
      drawerElement: {
        mdActive: null,
        mode: null,
        submode: null
      },
      initialized: false
    }),
    props: {
      mdRight: {
        type: Boolean,
        default: false
      },
      mdActive: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      visible () {
        return this.drawerElement.mdActive
      },
      mode () {
        return this.drawerElement.mode
      },
      submode () {
        return this.drawerElement.submode
      },
    },
    watch: {
      visible (visible) {
        this.MdApp.drawer.width = this.getDrawerWidth()
        this.MdApp.drawer.active = visible
      },
      mode (mode) {
        this.MdApp.drawer.mode = mode
      },
      submode (submode) {
        this.MdApp.drawer.submode = submode
      },
      mdRight (right) {
        this.MdApp.drawer.right = right
      }
    },
    methods: {
      getDrawerWidth () {
        if (this.$el) {
          return window.getComputedStyle(this.$el).width
        }

        return 0
      },
      updateDrawerData () {
        this.MdApp.drawer.width = this.getDrawerWidth()
        this.MdApp.drawer.active = this.visible
        this.MdApp.drawer.mode = this.mode
        this.MdApp.drawer.submode = this.submode
        this.MdApp.drawer.right = this.mdRight
      },
      clearDrawerData () {
        this.MdApp.drawer.width = 0
        this.MdApp.drawer.active = false
        this.MdApp.drawer.mode = 'temporary'
        this.MdApp.drawer.submode = null
        this.MdApp.drawer.initialWidth = 0
      },
    },
    mounted () {
      this.$nextTick().then(() => {
        this.MdApp.drawer.initialWidth = this.$el.offsetWidth
        this.drawerElement = this.$refs.drawer
        this.updateDrawerData()
        this.initialized = true
      })
    },
    updated () {
      this.drawerElement = this.$refs.drawer
    },
    beforeDestroy () {
      this.clearDrawerData()
    }
  });

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdApp/MdAppDrawer.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(MdAppDrawervue_type_script_lang_js, [['render',MdAppDrawervue_type_template_id_1d41d1f6["render"]],['__file',"src/components/MdApp/MdAppDrawer.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "1d41d1f6"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('1d41d1f6', __exports__)) {
    console.log('reload')
    api.reload('1d41d1f6', __exports__)
  }
  
  module.hot.accept("./MdAppDrawer.vue?vue&type=template&id=1d41d1f6", () => {
    console.log('re-render')
    api.rerender('1d41d1f6', render)
  })

}


/* harmony default export */ var MdAppDrawer = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-drawer class=\"md-app-drawer\" :md-active=\"mdActive && initialized\" v-bind=\"$attrs\" v-on=\"$listeners\" :md-right=\"mdRight\" ref=\"drawer\">\n|     <slot />\n|   </md-drawer>");

/***/ })

/******/ });
}));