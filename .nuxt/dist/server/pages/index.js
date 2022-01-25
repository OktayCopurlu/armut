exports.ids = [35];
exports.modules = {

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--16-0!./pages/index.vue?vue&type=template&id=2a328241&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Home')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2a328241&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(4);

// EXTERNAL MODULE: ./store/auth.ts
var auth = __webpack_require__(21);

// EXTERNAL MODULE: ./protectRouter.ts
var protectRouter = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--16-0!./pages/index.vue?vue&type=script&lang=ts&



/* harmony default export */ var transform_ref_16_0_pagesvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  setup() {
    const state = Object(runtime["d" /* reactive */])({});
    Object(auth["initAuth"])();
    Object(protectRouter["a" /* default */])();
    return { ...Object(runtime["g" /* toRefs */])(state)
    };
  },

  head() {
    return {
      title: "Armut"
    };
  }

}));
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pagesvue_type_script_lang_ts_ = (transform_ref_16_0_pagesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2a328241",
  "5d0e0eb2"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Home: __webpack_require__(133).default})


/***/ })

};;
//# sourceMappingURL=index.js.map