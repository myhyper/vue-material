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
/******/ 	return __webpack_require__(__webpack_require__.s = 350);
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

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el, config, cb) {
  if ('MutationObserver' in window) {
    var observer = new window.MutationObserver(cb);

    observer.observe(el, config);

    return {
      disconnect: function disconnect() {
        observer.disconnect();
      }
    };
  }
};

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(2);

var _material2 = _interopRequireDefault(_material);

var _MdSteppers = __webpack_require__(256);

var _MdSteppers2 = _interopRequireDefault(_MdSteppers);

var _MdStep = __webpack_require__(264);

var _MdStep2 = _interopRequireDefault(_MdStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdSteppers2.default.name, _MdSteppers2.default);
  Vue.component(_MdStep2.default.name, _MdStep2.default);
};

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdSteppers/MdSteppers.vue?vue&type=template&id=95acb722
var MdSteppersvue_type_template_id_95acb722 = __webpack_require__(257);

// EXTERNAL MODULE: ./src/core/MdComponent.js
var MdComponent = __webpack_require__(5);
var MdComponent_default = /*#__PURE__*/__webpack_require__.n(MdComponent);

// EXTERNAL MODULE: ./src/core/utils/MdObserveElement.js
var MdObserveElement = __webpack_require__(23);
var MdObserveElement_default = /*#__PURE__*/__webpack_require__.n(MdObserveElement);

// EXTERNAL MODULE: ./src/core/utils/MdThrottling.js
var MdThrottling = __webpack_require__(258);
var MdThrottling_default = /*#__PURE__*/__webpack_require__.n(MdThrottling);

// EXTERNAL MODULE: ./src/components/MdSteppers/MdStepHeader.vue?vue&type=template&id=43e95866
var MdStepHeadervue_type_template_id_43e95866 = __webpack_require__(259);

// EXTERNAL MODULE: ./src/core/icons/MdWarningIcon.vue?vue&type=template&id=8993dc9c
var MdWarningIconvue_type_template_id_8993dc9c = __webpack_require__(260);

// EXTERNAL MODULE: ./src/components/MdIcon/MdIcon.vue + 3 modules
var MdIcon = __webpack_require__(8);

// CONCATENATED MODULE: ./src/core/icons/MdWarningIcon.vue?vue&type=script&lang=js

  

  /* harmony default export */ var MdWarningIconvue_type_script_lang_js = ({
    name: 'MdWarningIcon',
    components: {
      MdIcon: MdIcon["default"]
    }
  });

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/core/icons/MdWarningIcon.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(MdWarningIconvue_type_script_lang_js, [['render',MdWarningIconvue_type_template_id_8993dc9c["render"]],['__file',"src/core/icons/MdWarningIcon.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "8993dc9c"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('8993dc9c', __exports__)) {
    console.log('reload')
    api.reload('8993dc9c', __exports__)
  }
  
  module.hot.accept("./MdWarningIcon.vue?vue&type=template&id=8993dc9c", () => {
    console.log('re-render')
    api.rerender('8993dc9c', render)
  })

}


/* harmony default export */ var MdWarningIcon = (__exports__);
// EXTERNAL MODULE: ./src/core/icons/MdCheckIcon.vue?vue&type=template&id=4154b05e
var MdCheckIconvue_type_template_id_4154b05e = __webpack_require__(261);

// CONCATENATED MODULE: ./src/core/icons/MdCheckIcon.vue?vue&type=script&lang=js

  

  /* harmony default export */ var MdCheckIconvue_type_script_lang_js = ({
    name: 'MdCheckIcon',
    components: {
      MdIcon: MdIcon["default"]
    }
  });

// CONCATENATED MODULE: ./src/core/icons/MdCheckIcon.vue





const MdCheckIcon___exports__ = /*#__PURE__*/exportHelper_default()(MdCheckIconvue_type_script_lang_js, [['render',MdCheckIconvue_type_template_id_4154b05e["render"]],['__file',"src/core/icons/MdCheckIcon.vue"]])
/* hot reload */
if (false) {
  MdCheckIcon___exports__.__hmrId = "4154b05e"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('4154b05e', MdCheckIcon___exports__)) {
    console.log('reload')
    api.reload('4154b05e', MdCheckIcon___exports__)
  }
  
  module.hot.accept("./MdCheckIcon.vue?vue&type=template&id=4154b05e", () => {
    console.log('re-render')
    api.rerender('4154b05e', render)
  })

}


/* harmony default export */ var MdCheckIcon = (MdCheckIcon___exports__);
// EXTERNAL MODULE: ./src/core/icons/MdEditIcon.vue?vue&type=template&id=75d6b514
var MdEditIconvue_type_template_id_75d6b514 = __webpack_require__(262);

// CONCATENATED MODULE: ./src/core/icons/MdEditIcon.vue?vue&type=script&lang=js

  

  /* harmony default export */ var MdEditIconvue_type_script_lang_js = ({
    name: 'MdEditIcon',
    components: {
      MdIcon: MdIcon["default"]
    }
  });

// CONCATENATED MODULE: ./src/core/icons/MdEditIcon.vue





const MdEditIcon___exports__ = /*#__PURE__*/exportHelper_default()(MdEditIconvue_type_script_lang_js, [['render',MdEditIconvue_type_template_id_75d6b514["render"]],['__file',"src/core/icons/MdEditIcon.vue"]])
/* hot reload */
if (false) {
  MdEditIcon___exports__.__hmrId = "75d6b514"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('75d6b514', MdEditIcon___exports__)) {
    console.log('reload')
    api.reload('75d6b514', MdEditIcon___exports__)
  }
  
  module.hot.accept("./MdEditIcon.vue?vue&type=template&id=75d6b514", () => {
    console.log('re-render')
    api.rerender('75d6b514', render)
  })

}


/* harmony default export */ var MdEditIcon = (MdEditIcon___exports__);
// CONCATENATED MODULE: ./src/components/MdSteppers/MdStepHeader.vue?vue&type=script&lang=js

  
  
  

  /* harmony default export */ var MdStepHeadervue_type_script_lang_js = ({
    name: 'MdStepperHeader',
    components: {
      MdWarningIcon: MdWarningIcon,
      MdCheckIcon: MdCheckIcon,
      MdEditIcon: MdEditIcon
    },
    props: {
      index: {
        type: String,
        required: true
      }
    },
    inject: ['MdSteppers'],
    computed: {
      data () {
        return this.MdSteppers.items[this.index]
      },
      shouldDisable () {
        const { data, index, MdSteppers }  = this

        if (data.done && !data.editable) {
          return true
        }

        return MdSteppers.isLinear && !MdSteppers.isPreviousStepperDone(index)
      },
      classes () {
        return {
          'md-active': !this.MdSteppers.syncRoute && this.index === this.MdSteppers.activeStep,
          'md-error': this.data.error,
          'md-done': this.data.done
        }
      }
    }
  });

// CONCATENATED MODULE: ./src/components/MdSteppers/MdStepHeader.vue





const MdStepHeader___exports__ = /*#__PURE__*/exportHelper_default()(MdStepHeadervue_type_script_lang_js, [['render',MdStepHeadervue_type_template_id_43e95866["render"]],['__file',"src/components/MdSteppers/MdStepHeader.vue"]])
/* hot reload */
if (false) {
  MdStepHeader___exports__.__hmrId = "43e95866"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('43e95866', MdStepHeader___exports__)) {
    console.log('reload')
    api.reload('43e95866', MdStepHeader___exports__)
  }
  
  module.hot.accept("./MdStepHeader.vue?vue&type=template&id=43e95866", () => {
    console.log('re-render')
    api.rerender('43e95866', render)
  })

}


/* harmony default export */ var MdStepHeader = (MdStepHeader___exports__);
// CONCATENATED MODULE: ./src/components/MdSteppers/MdSteppers.vue?vue&type=script&lang=js

  
  
  
  

  /* harmony default export */ var MdSteppersvue_type_script_lang_js = (new MdComponent_default.a({
    name: 'MdSteppers',
    components: {
      MdStepHeader: MdStepHeader
    },
    props: {
      mdSyncRoute: Boolean,
      mdDynamicHeight: Boolean,
      mdVertical: Boolean,
      mdLinear: Boolean,
      mdAlternative: Boolean,
      mdActiveStep: [String, Number]
    },
    data () {
      return {
        activeStepIndex: 0,
        noTransition: true,
        contentStyles: {},
        activeButtonEl: null,
        MdSteppers: {
          activeStep: 0,
          isLinear: false,
          isVertical: false,
          items: {},
          syncRoute: this.mdSyncRoute,
          getStepperNumber: this.getStepperNumber,
          setActiveStep: this.setActiveStep,
          isPreviousStepperDone: this.isPreviousStepperDone
        }
      }
    },
    provide () {
      return { MdSteppers: this.MdSteppers }
    },
    computed: {
      steppersClasses () {
        return {
          'md-no-transition': this.noTransition,
          'md-alternative': this.mdAlternative,
          'md-horizontal': !this.mdVertical,
          'md-vertical': this.mdVertical,
          'md-dynamic-height': this.mdDynamicHeight
        }
      },
      activeIndex () {
        return this.MdSteppers.activeStep
      },
      containerStyles () {
        return {
          transform: !this.mdVertical && `translate3D(${-this.activeStepIndex * 100}%, 0, 0)`
        }
      }
    },
    watch: {
      mdActiveStep (stepper) {
        this.MdSteppers.activeStep = stepper
        this.$emit('md-changed', stepper)
      },
      mdLinear (isLinear) {
        this.MdSteppers.isLinear = isLinear
      },
      mdVertical (isVertical) {
        this.MdSteppers.isVertical = isVertical
      },
      activeIndex () {
        this.$nextTick(this.setActiveButtonEl)
      },
      activeStepIndex () {
        this.onActiveStepIndex()
        this.$nextTick(this.calculateStepperPos)
      },
      activeButtonEl (activeButton) {
        this.activeStepIndex = activeButton ? [].indexOf.call(activeButton.parentNode.childNodes, activeButton) : 0
      },
      '$route' () {
        this.$nextTick(this.setActiveButtonEl)
      }
    },
    methods: {
      hasActiveStep () {
        return this.MdSteppers.activeStep || this.mdActiveStep
      },
      getItemsAndKeys () {
        const items = this.MdSteppers.items

        return {
          items,
          keys: Object.keys(items)
        }
      },
      getStepperNumber (id) {
        const stepperNames = Object.keys(this.MdSteppers.items)

        return stepperNames.indexOf(id) + 1
      },
      isStepperDone (id) {
        return this.MdSteppers.items[id].done
      },
      isPreviousStepperDone (id) {
        const { items } = this.MdSteppers
        const stepperNames = Object.keys(items)
        const activeIndex = this.getStepperNumber(id) - 2
        const previousIndex = stepperNames[activeIndex]

        if (!previousIndex) {
          return true
        }

        return items[previousIndex].done
      },
      isStepperEditable (id) {
        return this.MdSteppers.items[id].editable
      },
      setStepperAsDone (id) {
        this.MdSteppers.items[id].done = true
      },
      setPreviousStepperAsDone (newId) {
        const activeIndex = this.getStepperNumber(this.MdSteppers.activeStep)
        const newIndex = this.getStepperNumber(newId)

        if (newIndex > activeIndex) {
          this.setStepperAsDone(this.MdSteppers.activeStep)
        }
      },
      setActiveStep (id) {
        if (this.mdLinear && !this.isPreviousStepperDone(id)) {
          return false
        }

        if (id !== this.MdSteppers.activeStep && (this.isStepperEditable(id) || !this.isStepperDone(id))) {
          this.setPreviousStepperAsDone(id)
          this.MdSteppers.activeStep = id
          this.$emit('md-changed', id)
          this.$emit('update:mdActiveStep', id)
          this.MdSteppers.items[id].error = null
        }
      },
      setActiveButtonEl () {
        this.activeButtonEl = this.$el.querySelector('.md-stepper-header.md-button.md-active')
      },
      setActiveStepByIndex (index) {
        const { keys } = this.getItemsAndKeys()

        if (!this.hasActiveStep()) {
          this.MdSteppers.activeStep = keys[index]
        }
      },
      setupObservers () {
        const steppersContent = this.$el.querySelector('.md-steppers-wrapper')

        if ('ResizeObserver' in window) {
          this.resizeObserver = new window.ResizeObserver(this.calculateStepperPos)
          this.resizeObserver.observe(this.$el)
        } else {
          window.addEventListener('resize', this.calculateStepperPos)
        }

        if (steppersContent) {
          this.resizeObserver = MdObserveElement_default()(this.$el.querySelector('.md-steppers-wrapper'), {
            childList: true,
            characterData: true,
            subtree: true
          }, this.calculateStepperPos)
        }
      },
      calculateStepperPos () {
        if (!this.mdVertical) {
          const stepperElement = this.$el.querySelector(`.md-stepper:nth-child(${this.activeStepIndex + 1})`)

          this.contentStyles = {
            height: `${stepperElement.offsetHeight}px`
          }
        }
      },
      onActiveStepIndex () {
        const { items, keys } = this.getItemsAndKeys()
        if (!this.hasActiveStep() && !this.activeStepIndex) {
          this.MdSteppers.activeStep = keys[0]
        } else {
          this.MdSteppers.activeStep = keys[this.activeStepIndex]

          for (let i = 0; i < this.activeStepIndex; i++) {
            this.setStepperAsDone(keys[i])
          }
        }
      }
    },
    created () {
      this.calculateStepperPos = MdThrottling_default()(this.calculateStepperPos, 300)
      this.MdSteppers.activeStep = this.mdActiveStep
      this.MdSteppers.isLinear = this.mdLinear
      this.MdSteppers.isVertical = this.mdVertical
    },
    mounted () {
      this.$nextTick().then(() => {
        if (!this.mdSyncRoute) {
          this.setActiveStepByIndex(0)
        } else {
          this.onActiveStepIndex()
        }

        return this.$nextTick()
      }).then(() => {
        this.setActiveButtonEl()
        this.calculateStepperPos()

        window.setTimeout(() => {
          this.noTransition = false
          this.setupObservers()
        }, 100)
      })
    },
    beforeDestroy () {
      if (!('ResizeObserver' in window)) {
        window.removeEventListener('resize', this.calculateStepperPos)
      }
    },
  }));

// EXTERNAL MODULE: ./src/components/MdSteppers/MdSteppers.vue?vue&type=style&index=0&id=95acb722&lang=scss
var MdSteppersvue_type_style_index_0_id_95acb722_lang_scss = __webpack_require__(263);

// CONCATENATED MODULE: ./src/components/MdSteppers/MdSteppers.vue







const MdSteppers___exports__ = /*#__PURE__*/exportHelper_default()(MdSteppersvue_type_script_lang_js, [['render',MdSteppersvue_type_template_id_95acb722["render"]],['__file',"src/components/MdSteppers/MdSteppers.vue"]])
/* hot reload */
if (false) {
  MdSteppers___exports__.__hmrId = "95acb722"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('95acb722', MdSteppers___exports__)) {
    console.log('reload')
    api.reload('95acb722', MdSteppers___exports__)
  }
  
  module.hot.accept("./MdSteppers.vue?vue&type=template&id=95acb722", () => {
    console.log('re-render')
    api.rerender('95acb722', render)
  })

}


/* harmony default export */ var MdSteppers = __webpack_exports__["default"] = (MdSteppers___exports__);

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-steppers\" :class=\"[steppersClasses, $mdActiveTheme]\">\n|     <div class=\"md-steppers-navigation\" v-if=\"!mdVertical\">\n|       <md-step-header v-for=\"(_, index) in MdSteppers.items\" :key=\"index\" :index=\"index\" />");

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getOption = function getOption(options, key) {
  return options ? options[key] === false ? false : true : true;
};

exports.default = function (fn, time, option) {
  var leading = getOption(option, 'leading');
  var trailing = getOption(option, 'trailing');
  var timeout = null;
  var duplicated = false;

  return function () {
    var _this = this,
        _arguments = arguments;

    var functionCall = function functionCall() {
      return fn.apply(_this, _arguments);
    };

    if (timeout) {
      duplicated = true;
      return false;
    } else if (leading) {
      functionCall();
    }

    var setThrottling = function setThrottling() {

      timeout = setTimeout((function () {
        timeout = null;

        if (duplicated && trailing) {
          duplicated = false;
          functionCall();
          setThrottling();
        }
      }), time);
    };
  };
};

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-button class=\"md-stepper-header\" :class=\"classes\" :disabled=\"shouldDisable\" v-bind=\"data.props\" v-on=\"data.events\" @click.native=\"!MdSteppers.syncRoute && MdSteppers.setActiveStep(index)\">\n|     <md-warning-icon class=\"md-stepper-icon\" v-if=\"data.error\" />\n| ");

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-icon class=\"md-icon-image\" v-once>\n|     <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n|       <path d=\"M0 0h24v24H0z\" fill=\"none\" />");

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-icon class=\"md-icon-image\" v-once>\n|     <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n|       <path d=\"M0 0h24v24H0z\" fill=\"none\" />");

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <md-icon class=\"md-icon-image\" v-once>\n|     <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n|       <path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\" />");

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n|   @import \"~components/MdElevation/mixins\";\n|   @import \"~components/MdLayout/mixins\";");

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdStep_vue_vue_type_template_id_8624960e__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdStep_vue_vue_type_template_id_8624960e___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdStep_vue_vue_type_template_id_8624960e__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdStep_vue_vue_type_script_lang_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdStep_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdStep_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__MdStep_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_1__MdStep_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdStep_vue_vue_type_style_index_0_id_8624960e_lang_scss__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdStep_vue_vue_type_style_index_0_id_8624960e_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MdStep_vue_vue_type_style_index_0_id_8624960e_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);







const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_1__MdStep_vue_vue_type_script_lang_js__["default"], [['render',__WEBPACK_IMPORTED_MODULE_0__MdStep_vue_vue_type_template_id_8624960e__["render"]],['__file',"src/components/MdSteppers/MdStep.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "8624960e"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('8624960e', __exports__)) {
    console.log('reload')
    api.reload('8624960e', __exports__)
  }
  
  module.hot.accept("./MdStep.vue?vue&type=template&id=8624960e", () => {
    console.log('re-render')
    api.rerender('8624960e', render)
  })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-stepper\">\n|     <md-step-header v-if=\"MdSteppers.isVertical\" :index=\"id\" />\n| ");

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-steppers.md-vertical .md-stepper-content {");

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

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(255);


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

/***/ 6:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (108:10)\nYou may need an appropriate loader to handle this file type.\n|         staticClass: 'md-stepper',\n|         attrs: {\n|           ...this.$attrs,\n|           id: this.id\n|         },");

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