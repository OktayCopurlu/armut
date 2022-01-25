exports.ids = [12];
exports.modules = {

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("16549780", content, true, context)
};

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_16_0_MessageUserCard_vue_vue_type_style_index_0_id_12a5ddb1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(249);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_16_0_MessageUserCard_vue_vue_type_style_index_0_id_12a5ddb1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_16_0_MessageUserCard_vue_vue_type_style_index_0_id_12a5ddb1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_16_0_MessageUserCard_vue_vue_type_style_index_0_id_12a5ddb1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_16_0_MessageUserCard_vue_vue_type_style_index_0_id_12a5ddb1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "li[data-v-12a5ddb1]{list-style:none;padding:.5rem .5rem .5rem 1rem;cursor:pointer;display:flex}li[data-v-12a5ddb1]:hover{background-color:#d8cbcb}li span[data-v-12a5ddb1]{display:flex;flex-direction:column;justify-content:space-between}li span h4[data-v-12a5ddb1],li span strong[data-v-12a5ddb1]{margin:0;width:15rem}li span strong[data-v-12a5ddb1]{color:red}li span a[data-v-12a5ddb1]{text-decoration:none;color:#000}li img[data-v-12a5ddb1]{width:3.3rem;margin-right:1rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--16-0!./components/MessageUserCard.vue?vue&type=template&id=12a5ddb1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.user.photo
        ? _vm.user.photo
        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png'))+" alt=\"User Photo\" data-v-12a5ddb1> <span data-v-12a5ddb1><h4 data-v-12a5ddb1>"+_vm._ssrEscape(_vm._s(_vm.user.fullname))+"</h4> <a"+(_vm._ssrAttr("href",("tel:" + (_vm.user.tel))))+" data-v-12a5ddb1>"+_vm._ssrEscape(_vm._s(_vm.user.tel))+"</a></span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MessageUserCard.vue?vue&type=template&id=12a5ddb1&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(4);

// EXTERNAL MODULE: ./store/index.ts
var store = __webpack_require__(2);

// EXTERNAL MODULE: ./store/message.ts
var message = __webpack_require__(127);

// EXTERNAL MODULE: ./store/user.ts
var store_user = __webpack_require__(126);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--16-0!./components/MessageUserCard.vue?vue&type=script&lang=ts&




/* harmony default export */ var MessageUserCardvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  props: ["_id"],

  setup(props) {
    const {
      getUserInfo
    } = Object(store_user["useUser"])();
    const user = Object(runtime["e" /* ref */])({});
    const offers = Object(runtime["e" /* ref */])([]);
    const {
      getOffer
    } = Object(message["useMessage"])();

    const setOffer = async () => {
      const data = await getUserInfo(props._id);
      user.value = data;
      const bidderID = store["currentUserInfo"].provider ? store["currentUserInfo"]._id : data._id;
      offers.value = await getOffer(bidderID); // offer.forEach((elm) => {
      //   offers.value = elm
      // });
    };

    setOffer();
    return {
      user,
      offers
    };
  }

}));
// CONCATENATED MODULE: ./components/MessageUserCard.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_MessageUserCardvue_type_script_lang_ts_ = (MessageUserCardvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/MessageUserCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(257)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MessageUserCardvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "12a5ddb1",
  "60baf15f"
  
)

/* harmony default export */ var MessageUserCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=message-user-card.js.map