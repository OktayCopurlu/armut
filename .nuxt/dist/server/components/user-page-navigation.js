exports.ids = [21];
exports.modules = {

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("20a0452c", content, true, context)
};

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_16_0_UserPageNavigation_vue_vue_type_style_index_0_id_fb6fff00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_16_0_UserPageNavigation_vue_vue_type_style_index_0_id_fb6fff00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_16_0_UserPageNavigation_vue_vue_type_style_index_0_id_fb6fff00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_16_0_UserPageNavigation_vue_vue_type_style_index_0_id_fb6fff00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_16_0_UserPageNavigation_vue_vue_type_style_index_0_id_fb6fff00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "ul[data-v-fb6fff00]{margin:0;padding:0;display:flex;justify-content:flex-end;background-color:#416ba7}li[data-v-fb6fff00]{list-style:none;padding:1rem}li a[data-v-fb6fff00]{color:#fff;text-decoration:none;font-size:1.2rem;font-weight:600}li a[data-v-fb6fff00]:hover{color:#ccc}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--16-0!./components/UserPageNavigation.vue?vue&type=template&id=fb6fff00&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_vm._ssrNode("<ul data-v-fb6fff00>","</ul>",[_vm._ssrNode("<li data-v-fb6fff00>","</li>",[_c('nuxt-link',{attrs:{"to":"/user-page/messages"}},[_vm._v("Messages")])],1),_vm._ssrNode(" "),(_vm.provider)?_vm._ssrNode("<li data-v-fb6fff00>","</li>",[_c('nuxt-link',{attrs:{"to":"/user-page/asked-service"}},[_vm._v("Asked Service")])],1):_vm._ssrNode("<li data-v-fb6fff00>","</li>",[_c('nuxt-link',{attrs:{"to":"/user-page/rezervation"}},[_vm._v("My Rezervation")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-fb6fff00>","</li>",[_c('nuxt-link',{attrs:{"to":"/user-page"}},[_vm._v("Profile")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UserPageNavigation.vue?vue&type=template&id=fb6fff00&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(4);

// EXTERNAL MODULE: ./store/auth.ts
var auth = __webpack_require__(21);

// EXTERNAL MODULE: ./protectRouter.ts
var protectRouter = __webpack_require__(61);

// EXTERNAL MODULE: ./store/index.ts
var store = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--16-0!./components/UserPageNavigation.vue?vue&type=script&lang=ts&




/* harmony default export */ var UserPageNavigationvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  setup() {
    const state = Object(runtime["d" /* reactive */])({
      provider: store["currentUserInfo"].provider
    });
    Object(auth["initAuth"])();
    Object(protectRouter["a" /* default */])();
    return { ...Object(runtime["g" /* toRefs */])(state)
    };
  }

}));
// CONCATENATED MODULE: ./components/UserPageNavigation.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_UserPageNavigationvue_type_script_lang_ts_ = (UserPageNavigationvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/UserPageNavigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(247)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UserPageNavigationvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fb6fff00",
  "591079fe"
  
)

/* harmony default export */ var UserPageNavigation = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=user-page-navigation.js.map