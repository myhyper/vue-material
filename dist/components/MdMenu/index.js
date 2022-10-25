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
/******/ 	return __webpack_require__(__webpack_require__.s = 344);
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

/***/ 20:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (99:8)\nYou may need an appropriate loader to handle this file type.\n| \n|       return createElement('li', {\n|         ...data,\n|         staticClass,\n|         on: listeners");

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(2);

var _material2 = _interopRequireDefault(_material);

var _MdMenu = __webpack_require__(217);

var _MdMenu2 = _interopRequireDefault(_MdMenu);

var _MdMenuContent = __webpack_require__(220);

var _MdMenuContent2 = _interopRequireDefault(_MdMenuContent);

var _MdMenuItem = __webpack_require__(223);

var _MdMenuItem2 = _interopRequireDefault(_MdMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdMenu2.default.name, _MdMenu2.default);
  Vue.component(_MdMenuContent2.default.name, _MdMenuContent2.default);
  Vue.component(_MdMenuItem2.default.name, _MdMenuItem2.default);
};

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdMenu_vue_vue_type_template_id_577c0662__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdMenu_vue_vue_type_template_id_577c0662___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdMenu_vue_vue_type_template_id_577c0662__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdMenu_vue_vue_type_script_lang_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdMenu_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdMenu_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__MdMenu_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_1__MdMenu_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdMenu_vue_vue_type_style_index_0_id_577c0662_lang_scss__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdMenu_vue_vue_type_style_index_0_id_577c0662_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MdMenu_vue_vue_type_style_index_0_id_577c0662_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);







const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_1__MdMenu_vue_vue_type_script_lang_js__["default"], [['render',__WEBPACK_IMPORTED_MODULE_0__MdMenu_vue_vue_type_template_id_577c0662__["render"]],['__file',"src/components/MdMenu/MdMenu.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "577c0662"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('577c0662', __exports__)) {
    console.log('reload')
    api.reload('577c0662', __exports__)
  }
  
  module.hot.accept("./MdMenu.vue?vue&type=template&id=577c0662", () => {
    console.log('re-render')
    api.rerender('577c0662', render)
  })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-menu\" v-on=\"$listeners\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n|   @import \"~components/MdLayout/mixins\";\n| ");

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdMenuContent_vue_vue_type_template_id_2c16774c__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdMenuContent_vue_vue_type_template_id_2c16774c___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdMenuContent_vue_vue_type_template_id_2c16774c__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdMenuContent_vue_vue_type_script_lang_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdMenuContent_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdMenuContent_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__MdMenuContent_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_1__MdMenuContent_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdMenuContent_vue_vue_type_style_index_0_id_2c16774c_lang_scss__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdMenuContent_vue_vue_type_style_index_0_id_2c16774c_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MdMenuContent_vue_vue_type_style_index_0_id_2c16774c_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);







const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_1__MdMenuContent_vue_vue_type_script_lang_js__["default"], [['render',__WEBPACK_IMPORTED_MODULE_0__MdMenuContent_vue_vue_type_template_id_2c16774c__["render"]],['__file',"src/components/MdMenu/MdMenuContent.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "2c16774c"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('2c16774c', __exports__)) {
    console.log('reload')
    api.reload('2c16774c', __exports__)
  }
  
  module.hot.accept("./MdMenuContent.vue?vue&type=template&id=2c16774c", () => {
    console.log('re-render')
    api.rerender('2c16774c', render)
  })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-popover :md-settings=\"popperSettings\" :md-active=\"shouldRender\">\n|     <transition name=\"md-menu-content\" :css=\"didMount\" v-if=\"shouldRender\" v-on=\"$listeners\">\n|       <div");

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n|   @import \"~components/MdElevation/mixins\";\n|   @import \"~components/MdLayout/mixins\";");

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdMenu/MdMenuItem.vue?vue&type=template&id=26762702
var MdMenuItemvue_type_template_id_26762702 = __webpack_require__(224);

// EXTERNAL MODULE: ./src/core/MdComponent.js
var MdComponent = __webpack_require__(5);
var MdComponent_default = /*#__PURE__*/__webpack_require__.n(MdComponent);

// EXTERNAL MODULE: ./src/core/utils/MdInteractionEvents.js
var MdInteractionEvents = __webpack_require__(225);
var MdInteractionEvents_default = /*#__PURE__*/__webpack_require__.n(MdInteractionEvents);

// EXTERNAL MODULE: ./src/components/MdList/MdListItem/MdListItem.vue
var MdListItem = __webpack_require__(30);

// CONCATENATED MODULE: ./src/components/MdMenu/MdMenuItem.vue?vue&type=script&lang=js

  
  
  

  /* harmony default export */ var MdMenuItemvue_type_script_lang_js = (new MdComponent_default.a({
    name: 'MdMenuItem',
    props: {
      disabled: Boolean
    },
    inject: ['MdMenu'],
    data: () => ({
      highlighted: false
    }),
    computed: {
      itemClasses () {
        return {
          'md-highlight': this.highlighted
        }
      },
      listeners () {
        if (this.disabled) {
          return {}
        }

        if (!this.MdMenu.closeOnSelect) {
          return this.$listeners
        }

        let listeners = {}
        let listenerNames = Object.keys(this.$listeners)

        listenerNames.forEach(listener => {
          if (MdInteractionEvents_default.a.includes(listener)) {
            listeners[listener] = $event => {
              this.$listeners[listener]($event)
              this.closeMenu()
            }
          } else {
            listeners[listener] = this.$listeners[listener]
          }
        })

        return listeners
      }
    },
    methods: {
      closeMenu () {
        this.MdMenu.active = false

        if (this.MdMenu.eventObserver) {
          this.MdMenu.eventObserver.destroy()
        }
      },

      triggerCloseMenu () {
        if (!this.disabled) {
          this.closeMenu()
        }
      }
    },
    mounted () {
      if (this.$el.children && this.$el.children[0]) {
        let listItem = this.$el.children[0]

        if (listItem.tagName.toUpperCase() === 'A') {
          this.$el.addEventListener('click', this.triggerCloseMenu)
        }
      }
    },

    beforeDestroy () {
      this.$el.removeEventListener('click', this.triggerCloseMenu)
    }
  }));

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdMenu/MdMenuItem.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(MdMenuItemvue_type_script_lang_js, [['render',MdMenuItemvue_type_template_id_26762702["render"]],['__file',"src/components/MdMenu/MdMenuItem.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "26762702"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('26762702', __exports__)) {
    console.log('reload')
    api.reload('26762702', __exports__)
  }
  
  module.hot.accept("./MdMenuItem.vue?vue&type=template&id=26762702", () => {
    console.log('re-render')
    api.rerender('26762702', render)
  })

}


/* harmony default export */ var MdMenuItem = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-list-item class=\"md-menu-item\" v-bind=\"$attrs\" :class=\"[itemClasses, $mdActiveTheme]\" :disabled=\"disabled\" :tabindex=\"highlighted && -1\" v-on=\"listeners\">\n|     <slot />\n|   </md-list-item>");

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['click', 'dblclick', 'mousedown', 'mouseup'];

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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdListItem_vue_vue_type_script_lang_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdListItem_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdListItem_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__MdListItem_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__MdListItem_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdListItem_vue_vue_type_style_index_0_id_cff46336_lang_scss__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdListItem_vue_vue_type_style_index_0_id_cff46336_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdListItem_vue_vue_type_style_index_0_id_cff46336_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);






const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_0__MdListItem_vue_vue_type_script_lang_js__["default"], [['__file',"src/components/MdList/MdListItem/MdListItem.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "cff46336"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('cff46336', __exports__)) {
    console.log('reload')
    api.reload('cff46336', __exports__)
  }
  
}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(216);


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

/***/ 54:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-list-item {");

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (16:8)\nYou may need an appropriate loader to handle this file type.\n|         type: String,\n|         default: 'bottom-start',\n|         ...MdPropValidator('md-direction', [\n|           'top-end',\n|           'top-start',");

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (54:10)\nYou may need an appropriate loader to handle this file type.\n|         return {\n|           'md-dense': this.MdMenu.dense,\n|           ...this.mdListClass\n|         }\n|       }");

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