"use strict";
(self["webpackChunkreact_router"] = self["webpackChunkreact_router"] || []).push([["pages_Login_index_jsx"],{

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();

const useInput = initialValue => {
  _s();
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
_s(useInput, "zwfZiF3C83B9WQnByKaImAoFfFg=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./pages/Login/index.jsx":
/*!*******************************!*\
  !*** ./pages/Login/index.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/SignUp/styles */ "./pages/SignUp/styles.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/core/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();









const LogIn = () => {
  _s();
  const {
    data: userData,
    error,
    revalidate
  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__["default"])('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const [logInError, setLogInError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [email, onChangeEmail] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])('');
  const [password, onChangePassword] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])('');
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(e => {
    e.preventDefault();
    setLogInError(false);
    axios__WEBPACK_IMPORTED_MODULE_6__["default"].post('/api/users/login', {
      email,
      password
    }, {
      withCredentials: true
    }).then(() => {
      revalidate();
    }).catch(error => {
      setLogInError(error.response?.data?.statusCode === 401);
    });
  }, [email, password]);
  console.log(error, userData);
  if (!error && userData) {
    console.log('로그인됨', userData);
    // return <Redirect to="/workspace/sleact/channel/일반" />;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    id: "container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Header, {
      children: "Crossfit"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {
        id: "email-label",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "ID"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
            type: "email",
            id: "email",
            name: "email",
            value: email,
            onChange: onChangeEmail
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {
        id: "password-label",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "Password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
            type: "password",
            id: "password",
            name: "password",
            value: password,
            onChange: onChangePassword
          })
        }), logInError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Error, {
          children: "\uC774\uBA54\uC77C\uACFC \uBE44\uBC00\uBC88\uD638 \uC870\uD569\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "submit",
        children: "\uB85C\uADF8\uC778"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
      children: ["\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
        href: "/signup",
        children: "\uD68C\uC6D0\uAC00\uC785 \uD558\uB7EC\uAC00\uAE30"
      })]
    })]
  });
};
_s(LogIn, "A2TUaAaMJGzkcn1B/tI2dDkS0OA=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"]];
});
_c = LogIn;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogIn);
var _c;
__webpack_require__.$Refresh$.register(_c, "LogIn");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1yb3V0ZXIvLi9ob29rcy91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1yb3V0ZXIvLi9wYWdlcy9Mb2dpbi9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlSW5wdXQgPSAoaW5pdGlhbFZhbHVlKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VJbnB1dDsgICAgXHJcbiIsImltcG9ydCB1c2VJbnB1dCBmcm9tICdAaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEVycm9yLCBGb3JtLCBIZWFkZXIsIElucHV0LCBMYWJlbCwgTGlua0NvbnRhaW5lciB9IGZyb20gJ0BwYWdlcy9TaWduVXAvc3R5bGVzJztcclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnQHV0aWxzL2ZldGNoZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG5jb25zdCBMb2dJbiA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGE6IHVzZXJEYXRhLCBlcnJvciwgcmV2YWxpZGF0ZSB9ID0gdXNlU1dSKCcvYXBpL3VzZXJzJywgZmV0Y2hlcik7XHJcbiAgY29uc3QgW2xvZ0luRXJyb3IsIHNldExvZ0luRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZXRMb2dJbkVycm9yKGZhbHNlKTtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChcclxuICAgICAgICAgICcvYXBpL3VzZXJzL2xvZ2luJyxcclxuICAgICAgICAgIHsgZW1haWwsIHBhc3N3b3JkIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHJldmFsaWRhdGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIHNldExvZ0luRXJyb3IoZXJyb3IucmVzcG9uc2U/LmRhdGE/LnN0YXR1c0NvZGUgPT09IDQwMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW2VtYWlsLCBwYXNzd29yZF0sXHJcbiAgKTtcclxuXHJcbiAgY29uc29sZS5sb2coZXJyb3IsIHVzZXJEYXRhKTtcclxuICBpZiAoIWVycm9yICYmIHVzZXJEYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygn66Gc6re47J2465CoJywgdXNlckRhdGEpO1xyXG4gICAgLy8gcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi93b3Jrc3BhY2Uvc2xlYWN0L2NoYW5uZWwv7J2867CYXCIgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZGVyPkNyb3NzZml0PC9IZWFkZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPExhYmVsIGlkPVwiZW1haWwtbGFiZWxcIj5cclxuICAgICAgICAgIDxzcGFuPklEPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICA8TGFiZWwgaWQ9XCJwYXNzd29yZC1sYWJlbFwiPlxyXG4gICAgICAgICAgPHNwYW4+UGFzc3dvcmQ8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtsb2dJbkVycm9yICYmIDxFcnJvcj7snbTrqZTsnbzqs7wg67mE67CA67KI7Zi4IOyhsO2VqeydtCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvRXJyb3I+fVxyXG4gICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPExpbmtDb250YWluZXI+XHJcbiAgICAgICAg7JWE7KeBIO2ajOybkOydtCDslYTri4jsi6DqsIDsmpQ/Jm5ic3A7XHJcbiAgICAgICAgPGEgaHJlZj1cIi9zaWdudXBcIj7tmozsm5DqsIDsnoUg7ZWY65+s6rCA6riwPC9hPlxyXG4gICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nSW47XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlSW5wdXQiLCJpbml0aWFsVmFsdWUiLCJfcyIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVyIiwiZSIsInRhcmdldCIsIkJ1dHRvbiIsIkVycm9yIiwiRm9ybSIsIkhlYWRlciIsIklucHV0IiwiTGFiZWwiLCJMaW5rQ29udGFpbmVyIiwiZmV0Y2hlciIsImF4aW9zIiwiUmVhY3QiLCJSZWRpcmVjdCIsInVzZVNXUiIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJMb2dJbiIsImRhdGEiLCJ1c2VyRGF0YSIsImVycm9yIiwicmV2YWxpZGF0ZSIsImxvZ0luRXJyb3IiLCJzZXRMb2dJbkVycm9yIiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwiY2F0Y2giLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJjaGlsZHJlbiIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiLCJocmVmIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9