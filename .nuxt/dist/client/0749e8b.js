(window.webpackJsonp=window.webpackJsonp||[]).push([[41,10,22],{748:function(e,t,r){"use strict";r.r(t);r(20),r(18),r(21),r(10),r(25),r(16),r(26);var n=r(2),o=r(12);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={props:["clickEvent","asked_service_user","text"],setup:function(){var e=Object(o.d)({});return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.g)(e))}},d=l,f=r(86),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.clickEvent?r("button",{attrs:{value:e.asked_service_user},on:{click:e.clickEvent}},[e._v("\n  "+e._s(e.text)+"\n")]):r("button",{attrs:{value:e.asked_service_user}},[e._v("\n  "+e._s(e.text)+"\n")])}),[],!1,null,"227727fb",null);t.default=component.exports;installComponents(component,{Button:r(748).default})},786:function(e,t,r){var content=r(816);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(35).default)("97aa4460",content,!0,{sourceMap:!1})},815:function(e,t,r){"use strict";r(786)},816:function(e,t,r){var n=r(34)(!1);n.push([e.i,"@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]),n.push([e.i,".main[data-v-80c5548c]{border-radius:5px;background-color:#f2f2f2;padding:3rem;width:30rem;margin:5rem auto;box-shadow:2px 2px 12px grey}.main *[data-v-80c5548c]{font-size:1rem}.main .faild[data-v-80c5548c]{background-color:#e57373}.main .faild[data-v-80c5548c],.main .success[data-v-80c5548c]{padding:1rem;border-radius:4px;text-align:center}.main .success[data-v-80c5548c]{background-color:#00b300;color:#fff}.main .success a[data-v-80c5548c]{color:#00f;font-size:1.1rem}.main .floating-form[data-v-80c5548c]{position:relative}.main input[data-v-80c5548c],.main select[data-v-80c5548c]{width:100%;padding:14px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;background-color:#fff}.main input[data-v-80c5548c]:active,.main input[data-v-80c5548c]:focus,.main input[data-v-80c5548c]:valid,.main select[data-v-80c5548c]:active,.main select[data-v-80c5548c]:focus,.main select[data-v-80c5548c]:valid{background-color:#e2eff1;outline:none}.main input:active+.label[data-v-80c5548c],.main input:focus+.label[data-v-80c5548c],.main input:valid+.label[data-v-80c5548c],.main select:active+.label[data-v-80c5548c],.main select:focus+.label[data-v-80c5548c],.main select:valid+.label[data-v-80c5548c]{transform:translateY(-10%);top:-2px;z-index:100;font-size:1rem;background-color:#f2f2f2}.main .label[data-v-80c5548c]{position:absolute;top:50%;left:.75rem;z-index:1;font-size:1rem;transform:translateY(-60%);transition:all .2s linear}.main button[data-v-80c5548c]{border:none;background-color:green;color:#fff;font-size:1.3rem;border-radius:4px;transition:all .2s linear;cursor:pointer;width:100%;padding:14px 20px;margin:8px 0}.main button[data-v-80c5548c]:hover{background-color:#00b300;transition:all .2s linear}.main .radio-buttons[data-v-80c5548c]{display:flex;align-items:center}.main .radio-buttons *[data-v-80c5548c]{margin:.5rem;width:auto}.main .categories[data-v-80c5548c]{margin:0 .5rem}.main .categories *[data-v-80c5548c]{width:auto;padding:0;margin-right:.7rem}@media only screen and (max-width:600px){.main[data-v-80c5548c]{width:auto;margin:5vw auto;padding:4vw}}",""]),e.exports=n},838:function(e,t,r){"use strict";r.r(t);r(20),r(18),r(21),r(10),r(25),r(16),r(26);var n=r(2),o=r(7),c=(r(52),r(12)),l=r(481);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(c.b)({setup:function(){var e=Object(c.d)({email:"",password:"",confirm_password:"",isConfirm:!0}),t=Object(c.e)(null),r=Object(c.i)().value.params.id,n=Object(l.useForgotPassword)().resetPassword,d=function(){var c=Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(e.password!==e.confirm_password){o.next=8;break}return e.isConfirm=!0,o.next=4,n(e.email,r,e.password);case 4:o.sent?(t.value=!0,e.email="",e.password="",e.confirm_password=""):t.value=!1,o.next=9;break;case 8:e.isConfirm=!1;case 9:case"end":return o.stop()}}),o)})));return function(){return c.apply(this,arguments)}}();return f(f({},Object(c.g)(e)),{},{submit:d,doesEmailSent:t})}}),v=m,w=(r(815),r(86)),component=Object(w.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[!1===e.doesEmailSent?r("p",{staticClass:"faild"},[e._v("Password couldn't reset!")]):e._e(),e._v(" "),!0===e.doesEmailSent?r("div",{staticClass:"success"},[r("p",[e._v("Password has been reset successfully...")]),e._v(" "),r("nuxt-link",{attrs:{to:"/login"}},[e._v("Go to Login Page")])],1):r("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("div",{staticClass:"floating-form"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",id:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("label",{staticClass:"label",attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),r("div",{staticClass:"floating-form"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"pswd",id:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("label",{staticClass:"label",attrs:{for:"password"}},[e._v("New Password")])]),e._v(" "),r("div",{staticClass:"floating-form"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm_password,expression:"confirm_password"}],attrs:{type:"password",name:"pswd",id:"new-password",required:""},domProps:{value:e.confirm_password},on:{input:function(t){t.target.composing||(e.confirm_password=t.target.value)}}}),r("label",{staticClass:"label",attrs:{for:"new-password"}},[e._v("Confirm Password")])]),e._v(" "),e.isConfirm?e._e():r("p",{staticClass:"faild"},[e._v("\n      Error! Confirm Password is not matching\n    ")]),e._v(" "),r("Button",{attrs:{text:"Reset Password"}})],1)])}),[],!1,null,"80c5548c",null);t.default=component.exports;installComponents(component,{Button:r(748).default})},877:function(e,t,r){"use strict";r.r(t);r(20),r(18),r(21),r(10),r(25),r(16),r(26);var n=r(2),o=r(12),c=r(113),l=r(302);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f=Object(o.b)({setup:function(){var e=Object(o.d)({});return Object(c.initAuth)(),Object(l.a)(),function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.g)(e))},head:function(){return{title:"Reset Password"}}}),m=f,v=r(86),component=Object(v.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)("ResetPassword")}),[],!1,null,"18c8bf24",null);t.default=component.exports;installComponents(component,{ResetPassword:r(838).default})}}]);