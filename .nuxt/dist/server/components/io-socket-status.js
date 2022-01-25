exports.ids = [9];
exports.modules = {

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(332);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(10).default("96d375ee", content, true)

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".socket-status.label{width:100%;text-align:left}.socket-status.grid{display:grid;grid-template-columns:1fr 1fr}.socket-status.grid:hover{color:#212529;background-color:rgba(0,0,0,.075)}.socket-status.striped:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.socket-status.col-key{grid-column:1;font-weight:700;text-align:right;padding:.75rem;border-top:1px solid #dee2e6}.socket-status.col-val{grid-column:2;text-align:left;padding:.75rem;border-top:1px solid #dee2e6}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocketStatus_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(331);
/* harmony import */ var _SocketStatus_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SocketStatus_css__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  render (h) {
    if (!this.status.connectUrl) { return h() }
    const label = h('label', {
      staticClass: 'socket-status label'
    }, [
      h('b', 'Status for: '),
      this.status.connectUrl
    ])
    const entries = []
    for (const entry of this.statusTbl) {
      const entryElm = h('div', {
        staticClass: 'socket-status grid striped'
      }, [
        h('span', {
          staticClass: 'socket-status col-key'
        }, entry.item),
        h('span', {
          staticClass: 'socket-status col-val'
        }, entry.info)
      ])
      entries.push(entryElm)
    }

    return h('div', [
      label,
      entries
    ])
  },
  props: {
    status: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    statusTbl () {
      const { status } = this
      let err
      const items = Object.entries(status).reduce((arr, [item, info]) => {
        if (item !== 'connectUrl' && info !== undefined && info !== '') {
          if (item.match(/Error|Failed/)) {
            err = true
          }
          arr.push({
            item,
            info: typeof info === 'string'
              ? info
              : info.toString()
          })
        }
        return arr
      }, [])

      if (!err) {
        items.unshift({ item: 'status', info: 'OK' })
      }

      return items
    }
  }
});


/***/ })

};;
//# sourceMappingURL=io-socket-status.js.map