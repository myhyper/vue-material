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
/******/ 	return __webpack_require__(__webpack_require__.s = 328);
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

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdCard/MdCard.vue?vue&type=template&id=24f7f3af
var MdCardvue_type_template_id_24f7f3af = __webpack_require__(101);

// EXTERNAL MODULE: ./src/core/MdComponent.js
var MdComponent = __webpack_require__(5);
var MdComponent_default = /*#__PURE__*/__webpack_require__.n(MdComponent);

// CONCATENATED MODULE: ./src/components/MdCard/MdCard.vue?vue&type=script&lang=js

  

  /* harmony default export */ var MdCardvue_type_script_lang_js = (new MdComponent_default.a({
    name: 'MdCard',
    props: {
      mdWithHover: Boolean
    },
    data: () => ({
      MdCard: {
        expand: false
      }
    }),
    provide () {
      return {
        MdCard: this.MdCard
      }
    },
    computed: {
      cardClasses () {
        return {
          'md-with-hover': this.mdWithHover,
          'md-expand-active': this.MdCard.expand
        }
      }
    }
  }));

// EXTERNAL MODULE: ./src/components/MdCard/MdCard.vue?vue&type=style&index=0&id=24f7f3af&lang=scss
var MdCardvue_type_style_index_0_id_24f7f3af_lang_scss = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdCard/MdCard.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdCardvue_type_script_lang_js, [['render',MdCardvue_type_template_id_24f7f3af["render"]],['__file',"src/components/MdCard/MdCard.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "24f7f3af"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('24f7f3af', __exports__)) {
    console.log('reload')
    api.reload('24f7f3af', __exports__)
  }
  
  module.hot.accept("./MdCard.vue?vue&type=template&id=24f7f3af", () => {
    console.log('re-render')
    api.rerender('24f7f3af', render)
  })

}


/* harmony default export */ var MdCard = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-card\" :class=\"[$mdActiveTheme, cardClasses]\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n|   @import \"~components/MdElevation/mixins\";\n|   @import \"./base\";");

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardArea/MdCardArea.vue?vue&type=template&id=132f02d7
var MdCardAreavue_type_template_id_132f02d7 = __webpack_require__(104);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardArea/MdCardArea.vue?vue&type=script&lang=js

  /* harmony default export */ var MdCardAreavue_type_script_lang_js = ({
    name: 'MdCardArea',
    props: {
      mdInset: Boolean
    },
    computed: {
      areaClasses () {
        return {
          'md-inset': this.mdInset
        }
      }
    }
  });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardArea/MdCardArea.vue?vue&type=style&index=0&id=132f02d7&lang=scss
var MdCardAreavue_type_style_index_0_id_132f02d7_lang_scss = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardArea/MdCardArea.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdCardAreavue_type_script_lang_js, [['render',MdCardAreavue_type_template_id_132f02d7["render"]],['__file',"src/components/MdCard/MdCardArea/MdCardArea.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "132f02d7"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('132f02d7', __exports__)) {
    console.log('reload')
    api.reload('132f02d7', __exports__)
  }
  
  module.hot.accept("./MdCardArea.vue?vue&type=template&id=132f02d7", () => {
    console.log('re-render')
    api.rerender('132f02d7', render)
  })

}


/* harmony default export */ var MdCardArea = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-card-area\" :class=\"areaClasses\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   .md-card-area {\n|     position: relative;\n|   }");

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardHeader/MdCardHeader.vue?vue&type=template&id=4d103817
var MdCardHeadervue_type_template_id_4d103817 = __webpack_require__(107);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardHeader/MdCardHeader.vue?vue&type=script&lang=js

  /* harmony default export */ var MdCardHeadervue_type_script_lang_js = ({
    name: 'MdCardHeader'
  });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardHeader/MdCardHeader.vue?vue&type=style&index=0&id=4d103817&lang=scss
var MdCardHeadervue_type_style_index_0_id_4d103817_lang_scss = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardHeader/MdCardHeader.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdCardHeadervue_type_script_lang_js, [['render',MdCardHeadervue_type_template_id_4d103817["render"]],['__file',"src/components/MdCard/MdCardHeader/MdCardHeader.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "4d103817"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('4d103817', __exports__)) {
    console.log('reload')
    api.reload('4d103817', __exports__)
  }
  
  module.hot.accept("./MdCardHeader.vue?vue&type=template&id=4d103817", () => {
    console.log('re-render')
    api.rerender('4d103817', render)
  })

}


/* harmony default export */ var MdCardHeader = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-card-header\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   .md-card-header {\n|     padding: 16px;\n| ");

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardHeader/MdCardHeaderText.vue?vue&type=template&id=49a3ab64
var MdCardHeaderTextvue_type_template_id_49a3ab64 = __webpack_require__(110);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardHeader/MdCardHeaderText.vue?vue&type=script&lang=js

  /* harmony default export */ var MdCardHeaderTextvue_type_script_lang_js = ({
    name: 'MdCardHeaderText',
    data: () => ({
      parentClasses: null
    }),
    mounted () {
      this.parentClasses = this.$parent.$el.classList

      if (this.parentClasses.contains('md-card-header')) {
        this.parentClasses.add('md-card-header-flex')
      }
    },
    beforeDestroy () {
      this.parentClasses.remove('md-card-header-flex')
    }
  });

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardHeader/MdCardHeaderText.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(MdCardHeaderTextvue_type_script_lang_js, [['render',MdCardHeaderTextvue_type_template_id_49a3ab64["render"]],['__file',"src/components/MdCard/MdCardHeader/MdCardHeaderText.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "49a3ab64"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('49a3ab64', __exports__)) {
    console.log('reload')
    api.reload('49a3ab64', __exports__)
  }
  
  module.hot.accept("./MdCardHeaderText.vue?vue&type=template&id=49a3ab64", () => {
    console.log('re-render')
    api.rerender('49a3ab64', render)
  })

}


/* harmony default export */ var MdCardHeaderText = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-card-header-text\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdCardMedia_vue_vue_type_template_id_33e1f253__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdCardMedia_vue_vue_type_template_id_33e1f253___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdCardMedia_vue_vue_type_template_id_33e1f253__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdCardMedia_vue_vue_type_script_lang_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdCardMedia_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdCardMedia_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__MdCardMedia_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_1__MdCardMedia_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdCardMedia_vue_vue_type_style_index_0_id_33e1f253_lang_scss__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdCardMedia_vue_vue_type_style_index_0_id_33e1f253_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MdCardMedia_vue_vue_type_style_index_0_id_33e1f253_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);







const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_1__MdCardMedia_vue_vue_type_script_lang_js__["default"], [['render',__WEBPACK_IMPORTED_MODULE_0__MdCardMedia_vue_vue_type_template_id_33e1f253__["render"]],['__file',"src/components/MdCard/MdCardMedia/MdCardMedia.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "33e1f253"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('33e1f253', __exports__)) {
    console.log('reload')
    api.reload('33e1f253', __exports__)
  }
  
  module.hot.accept("./MdCardMedia.vue?vue&type=template&id=33e1f253", () => {
    console.log('re-render')
    api.rerender('33e1f253', render)
  })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-card-media\" :class=\"mediaClasses\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @mixin md-image-aspect-ratio($width, $height) {\n|     overflow: hidden;\n| ");

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardMedia/MdCardMediaActions.vue?vue&type=template&id=102584da
var MdCardMediaActionsvue_type_template_id_102584da = __webpack_require__(115);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardMedia/MdCardMediaActions.vue?vue&type=script&lang=js

  /* harmony default export */ var MdCardMediaActionsvue_type_script_lang_js = ({
    name: 'MdCardMediaActions'
  });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardMedia/MdCardMediaActions.vue?vue&type=style&index=0&id=102584da&lang=scss
var MdCardMediaActionsvue_type_style_index_0_id_102584da_lang_scss = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardMedia/MdCardMediaActions.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdCardMediaActionsvue_type_script_lang_js, [['render',MdCardMediaActionsvue_type_template_id_102584da["render"]],['__file',"src/components/MdCard/MdCardMedia/MdCardMediaActions.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "102584da"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('102584da', __exports__)) {
    console.log('reload')
    api.reload('102584da', __exports__)
  }
  
  module.hot.accept("./MdCardMediaActions.vue?vue&type=template&id=102584da", () => {
    console.log('re-render')
    api.rerender('102584da', render)
  })

}


/* harmony default export */ var MdCardMediaActions = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-card-media-actions\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   .md-card-media-actions {\n|     padding: 16px;\n|     display: flex;");

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardMedia/MdCardMediaCover.vue?vue&type=template&id=20dfcfd4
var MdCardMediaCovervue_type_template_id_20dfcfd4 = __webpack_require__(118);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardMedia/MdCardMediaCover.vue?vue&type=script&lang=js

  /* harmony default export */ var MdCardMediaCovervue_type_script_lang_js = ({
    name: 'MdCardMediaCover',
    props: {
      mdTextScrim: Boolean,
      mdSolid: Boolean
    },
    data: () => ({
      backdropBackground: {}
    }),
    computed: {
      coverClasses () {
        return {
          'md-text-scrim': this.mdTextScrim,
          'md-solid': this.mdSolid
        }
      },
      coverStyles () {
        return {
          background: this.backdropBackground
        }
      }
    },
    methods: {
      applyScrimColor (darkness) {
        if (this.$refs.backdrop) {
          this.backdropBackground = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, ${darkness / 2}) 66%, rgba(0, 0, 0, ${darkness}) 100%)`
        }
      },
      applySolidColor (darkness) {
        let area = this.$el.querySelector('.md-card-area')

        if (area) {
          area.style.background = `rgba(0, 0, 0, ${darkness})`
        }
      },
      getImageLightness (image, onLoad, onError) {
        let canvas = document.createElement('canvas')

        image.crossOrigin = 'Anonymous'

        image.onload = function () {
          let colorSum = 0
          let ctx
          let imageData
          let imageMetadata
          let r
          let g
          let b
          let average

          canvas.width = this.width
          canvas.height = this.height
          ctx = canvas.getContext('2d')

          ctx.drawImage(this, 0, 0)

          imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          imageMetadata = imageData.data

          for (let x = 0, len = imageMetadata.length; x < len; x += 4) {
            r = imageMetadata[x]
            g = imageMetadata[x + 1]
            b = imageMetadata[x + 2]

            average = Math.floor((r + g + b) / 3)
            colorSum += average
          }

          onLoad(Math.floor(colorSum / (this.width * this.height)))
        }

        image.onerror = onError
      }
    },
    mounted () {
      const applyBackground = (darkness = 0.6) => {
        if (this.mdTextScrim) {
          this.applyScrimColor(darkness)
        } else if (this.mdSolid) {
          this.applySolidColor(darkness)
        }
      }
      let image = this.$el.querySelector('img')

      if (image && (this.mdTextScrim || this.mdSolid)) {
        this.getImageLightness(image, (lightness) => {
          let limit = 256
          let darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100

          if (darkness >= 0.7) {
            darkness = 0.7
          }

          applyBackground(darkness)
        }, applyBackground)
      }
    }
  });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardMedia/MdCardMediaCover.vue?vue&type=style&index=0&id=20dfcfd4&lang=scss
var MdCardMediaCovervue_type_style_index_0_id_20dfcfd4_lang_scss = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardMedia/MdCardMediaCover.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdCardMediaCovervue_type_script_lang_js, [['render',MdCardMediaCovervue_type_template_id_20dfcfd4["render"]],['__file',"src/components/MdCard/MdCardMedia/MdCardMediaCover.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "20dfcfd4"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('20dfcfd4', __exports__)) {
    console.log('reload')
    api.reload('20dfcfd4', __exports__)
  }
  
  module.hot.accept("./MdCardMediaCover.vue?vue&type=template&id=20dfcfd4", () => {
    console.log('re-render')
    api.rerender('20dfcfd4', render)
  })

}


/* harmony default export */ var MdCardMediaCover = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-card-media-cover\" :class=\"coverClasses\">\n|     <slot />\n|     <div class=\"md-card-backdrop\" :style=\"coverStyles\" v-if=\"mdTextScrim\" ref=\"backdrop\"></div>");

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   .md-card-media-cover {\n|     position: relative;\n|     color: #fff;");

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardContent/MdCardContent.vue?vue&type=template&id=36a98486
var MdCardContentvue_type_template_id_36a98486 = __webpack_require__(121);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardContent/MdCardContent.vue?vue&type=script&lang=js

  /* harmony default export */ var MdCardContentvue_type_script_lang_js = ({
    name: 'MdCardContent'
  });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardContent/MdCardContent.vue?vue&type=style&index=0&id=36a98486&lang=scss
var MdCardContentvue_type_style_index_0_id_36a98486_lang_scss = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardContent/MdCardContent.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdCardContentvue_type_script_lang_js, [['render',MdCardContentvue_type_template_id_36a98486["render"]],['__file',"src/components/MdCard/MdCardContent/MdCardContent.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "36a98486"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('36a98486', __exports__)) {
    console.log('reload')
    api.reload('36a98486', __exports__)
  }
  
  module.hot.accept("./MdCardContent.vue?vue&type=template&id=36a98486", () => {
    console.log('re-render')
    api.rerender('36a98486', render)
  })

}


/* harmony default export */ var MdCardContent = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-card-content\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   .md-card-content {\n|     padding: 16px;\n|     font-size: 14px;");

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardExpand/MdCardExpand.vue?vue&type=template&id=d46d3592
var MdCardExpandvue_type_template_id_d46d3592 = __webpack_require__(124);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardExpand/MdCardExpand.vue?vue&type=script&lang=js

  /* harmony default export */ var MdCardExpandvue_type_script_lang_js = ({
    name: 'MdCardExpand',
    inject: ['MdCard']
  });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardExpand/MdCardExpand.vue?vue&type=style&index=0&id=d46d3592&lang=scss
var MdCardExpandvue_type_style_index_0_id_d46d3592_lang_scss = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardExpand/MdCardExpand.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdCardExpandvue_type_script_lang_js, [['render',MdCardExpandvue_type_template_id_d46d3592["render"]],['__file',"src/components/MdCard/MdCardExpand/MdCardExpand.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "d46d3592"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('d46d3592', __exports__)) {
    console.log('reload')
    api.reload('d46d3592', __exports__)
  }
  
  module.hot.accept("./MdCardExpand.vue?vue&type=template&id=d46d3592", () => {
    console.log('re-render')
    api.rerender('d46d3592', render)
  })

}


/* harmony default export */ var MdCardExpand = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-card-expand\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   .md-card-expand {\n|     overflow: hidden;\n| ");

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdCardExpandTrigger_vue_vue_type_script_lang_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdCardExpandTrigger_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdCardExpandTrigger_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__MdCardExpandTrigger_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__MdCardExpandTrigger_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdCardExpandTrigger_vue_vue_type_style_index_0_id_4ede00b1_lang_scss__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdCardExpandTrigger_vue_vue_type_style_index_0_id_4ede00b1_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdCardExpandTrigger_vue_vue_type_style_index_0_id_4ede00b1_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);






const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_0__MdCardExpandTrigger_vue_vue_type_script_lang_js__["default"], [['__file',"src/components/MdCard/MdCardExpand/MdCardExpandTrigger.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "4ede00b1"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('4ede00b1', __exports__)) {
    console.log('reload')
    api.reload('4ede00b1', __exports__)
  }
  
}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-card-expand-trigger.md-icon-button {");

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardExpand/MdCardExpandContent.vue?vue&type=template&id=604296f2
var MdCardExpandContentvue_type_template_id_604296f2 = __webpack_require__(129);

// EXTERNAL MODULE: ./src/core/utils/MdObserveElement.js
var MdObserveElement = __webpack_require__(23);
var MdObserveElement_default = /*#__PURE__*/__webpack_require__.n(MdObserveElement);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardExpand/MdCardExpandContent.vue?vue&type=script&lang=js

  
  /* harmony default export */ var MdCardExpandContentvue_type_script_lang_js = ({
    name: 'MdCardExpandContent',
    inject: ['MdCard'],
    data: () => ({
      marginTop: 0,
      resizeObserver: null,
      transitionEnabled: true
    }),
    computed: {
      expand () {
        return this.MdCard.expand
      },
      contentStyles () {
        return {
          'margin-top': `-${this.marginTop}px`,
          'opacity': this.marginTop === 0 ? 1 : 0,
          'transition-property': this.transitionEnabled ? null : 'none'
        }
      }
    },
    methods: {
      calculateMarginTop () {
        if (!this.expand) {
          this.marginTop = this.$el.children[0].offsetHeight
        } else {
          this.marginTop = 0
        }
      },
      calculateMarginTopImmediately () {
        if (this.expand) {
          return
        }

        this.transitionEnabled = false
        this.$nextTick(() => {
          this.calculateMarginTop()
          this.$nextTick(() => {
            // force reflow
            this.$el.offsetHeight
            this.transitionEnabled = true
          })
        })
      }
    },
    watch: {
      expand () {
        this.calculateMarginTop()
      }
    },
    mounted () {
      this.calculateMarginTopImmediately()

      this.resizeObserver = MdObserveElement_default()(this.$el, {
        childList: true,
        characterData: true,
        subtree: true
      }, this.calculateMarginTopImmediately)
    },
    beforeDestroy () {
      this.resizeObserver.disconnect()
    }
  });

// EXTERNAL MODULE: ./src/components/MdCard/MdCardExpand/MdCardExpandContent.vue?vue&type=style&index=0&id=604296f2&lang=scss
var MdCardExpandContentvue_type_style_index_0_id_604296f2_lang_scss = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_tkjio7cifk25h5tfwpoehfnw6a/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(0);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/MdCard/MdCardExpand/MdCardExpandContent.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(MdCardExpandContentvue_type_script_lang_js, [['render',MdCardExpandContentvue_type_template_id_604296f2["render"]],['__file',"src/components/MdCard/MdCardExpand/MdCardExpandContent.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "604296f2"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('604296f2', __exports__)) {
    console.log('reload')
    api.reload('604296f2', __exports__)
  }
  
  module.hot.accept("./MdCardExpandContent.vue?vue&type=template&id=604296f2", () => {
    console.log('re-render')
    api.rerender('604296f2', render)
  })

}


/* harmony default export */ var MdCardExpandContent = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-card-expand-content\" :style=\"contentStyles\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   @import \"~components/MdAnimation/variables\";\n| \n|   .md-card-expand-content {");

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdCardActions_vue_vue_type_template_id_2894ebc5__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MdCardActions_vue_vue_type_template_id_2894ebc5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MdCardActions_vue_vue_type_template_id_2894ebc5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdCardActions_vue_vue_type_script_lang_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdCardActions_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdCardActions_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__MdCardActions_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_1__MdCardActions_vue_vue_type_script_lang_js__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdCardActions_vue_vue_type_style_index_0_id_2894ebc5_lang_scss__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MdCardActions_vue_vue_type_style_index_0_id_2894ebc5_lang_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MdCardActions_vue_vue_type_style_index_0_id_2894ebc5_lang_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js__);







const __exports__ = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3__Users_max_prj_vue_material_node_modules_pnpm_vue_loader_16_8_3_tkjio7cifk25h5tfwpoehfnw6a_node_modules_vue_loader_dist_exportHelper_js___default()(__WEBPACK_IMPORTED_MODULE_1__MdCardActions_vue_vue_type_script_lang_js__["default"], [['render',__WEBPACK_IMPORTED_MODULE_0__MdCardActions_vue_vue_type_template_id_2894ebc5__["render"]],['__file',"src/components/MdCard/MdCardActions/MdCardActions.vue"]])
/* hot reload */
if (false) {
  __exports__.__hmrId = "2894ebc5"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('2894ebc5', __exports__)) {
    console.log('reload')
    api.reload('2894ebc5', __exports__)
  }
  
  module.hot.accept("./MdCardActions.vue?vue&type=template&id=2894ebc5", () => {
    console.log('re-render')
    api.rerender('2894ebc5', render)
  })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   <div class=\"md-card-actions\" :class=\"`md-alignment-${mdAlignment}`\">\n|     <slot />\n|   </div>");

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:2)\nYou may need an appropriate loader to handle this file type.\n| \n|   .md-card-actions {\n|     padding: 8px;\n|     display: flex;");

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

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(99);


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (9:8)\nYou may need an appropriate loader to handle this file type.\n|       mdRatio: {\n|         type: String,\n|         ...MdPropValidator('md-ratio', [\n|           '16-9',\n|           '16/9',");

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (16:10)\nYou may need an appropriate loader to handle this file type.\n|       if (trigger) {\n|         trigger.componentOptions.listeners = {\n|           ...trigger.componentOptions.listeners,\n|           ...listeners\n|         }");

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (12:8)\nYou may need an appropriate loader to handle this file type.\n|         type: String,\n|         default: 'right',\n|         ...MdPropValidator('md-alignment', alignments)\n|       }\n|     }");

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

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(2);

var _material2 = _interopRequireDefault(_material);

var _MdCard = __webpack_require__(100);

var _MdCard2 = _interopRequireDefault(_MdCard);

var _MdCardArea = __webpack_require__(103);

var _MdCardArea2 = _interopRequireDefault(_MdCardArea);

var _MdCardHeader = __webpack_require__(106);

var _MdCardHeader2 = _interopRequireDefault(_MdCardHeader);

var _MdCardHeaderText = __webpack_require__(109);

var _MdCardHeaderText2 = _interopRequireDefault(_MdCardHeaderText);

var _MdCardMedia = __webpack_require__(111);

var _MdCardMedia2 = _interopRequireDefault(_MdCardMedia);

var _MdCardMediaActions = __webpack_require__(114);

var _MdCardMediaActions2 = _interopRequireDefault(_MdCardMediaActions);

var _MdCardMediaCover = __webpack_require__(117);

var _MdCardMediaCover2 = _interopRequireDefault(_MdCardMediaCover);

var _MdCardContent = __webpack_require__(120);

var _MdCardContent2 = _interopRequireDefault(_MdCardContent);

var _MdCardExpand = __webpack_require__(123);

var _MdCardExpand2 = _interopRequireDefault(_MdCardExpand);

var _MdCardExpandTrigger = __webpack_require__(126);

var _MdCardExpandTrigger2 = _interopRequireDefault(_MdCardExpandTrigger);

var _MdCardExpandContent = __webpack_require__(128);

var _MdCardExpandContent2 = _interopRequireDefault(_MdCardExpandContent);

var _MdCardActions = __webpack_require__(131);

var _MdCardActions2 = _interopRequireDefault(_MdCardActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdCard2.default.name, _MdCard2.default);
  Vue.component(_MdCardArea2.default.name, _MdCardArea2.default);
  Vue.component(_MdCardHeader2.default.name, _MdCardHeader2.default);
  Vue.component(_MdCardHeaderText2.default.name, _MdCardHeaderText2.default);
  Vue.component(_MdCardMedia2.default.name, _MdCardMedia2.default);
  Vue.component(_MdCardMediaActions2.default.name, _MdCardMediaActions2.default);
  Vue.component(_MdCardMediaCover2.default.name, _MdCardMediaCover2.default);
  Vue.component(_MdCardContent2.default.name, _MdCardContent2.default);
  Vue.component(_MdCardExpand2.default.name, _MdCardExpand2.default);
  Vue.component(_MdCardExpandTrigger2.default.name, _MdCardExpandTrigger2.default);
  Vue.component(_MdCardExpandContent2.default.name, _MdCardExpandContent2.default);
  Vue.component(_MdCardActions2.default.name, _MdCardActions2.default);
};

/***/ })

/******/ });
}));