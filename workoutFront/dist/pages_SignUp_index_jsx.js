"use strict";
(self["webpackChunkreact_router"] = self["webpackChunkreact_router"] || []).push([["pages_SignUp_index_jsx"],{

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

/***/ "./pages/SignUp/index.jsx":
/*!********************************!*\
  !*** ./pages/SignUp/index.jsx ***!
  \********************************/
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









const SignUp = () => {
  _s();
  const {
    data: userData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__["default"])('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const [signUpError, setSignUpError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [signUpSuccess, setSignUpSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [mismatchError, setMismatchError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [email, onChangeEmail] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])('');
  const [nickname, onChangeNickname] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])('');
  const [password,, setPassword] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])('');
  const [passwordCheck,, setPasswordCheck] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])('');
  const onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(e => {
    setPassword(e.target.value);
    setMismatchError(passwordCheck !== e.target.value);
  }, [passwordCheck]);
  const onChangePasswordCheck = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(e => {
    setPasswordCheck(e.target.value);
    setMismatchError(password !== e.target.value);
  }, [password]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(e => {
    e.preventDefault();
    if (!nickname || !nickname.trim()) {
      return;
    }
    if (!mismatchError) {
      setSignUpError(false);
      setSignUpSuccess(false);
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].post('/api/users', {
        email,
        nickname,
        password
      }).then(() => {
        setSignUpSuccess(true);
      }).catch(error => {
        setSignUpError(error.response?.data?.statusCode === 403);
      });
    }
  }, [email, nickname, password, mismatchError]);
  if (userData) {
    // return <Redirect to="/workspace/sleact" />;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    id: "container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Header, {
      children: "Sleact"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {
        id: "email-label",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "\uC774\uBA54\uC77C \uC8FC\uC18C"
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
        id: "nickname-label",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "\uB2C9\uB124\uC784"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
            type: "text",
            id: "nickname",
            name: "nickname",
            value: nickname,
            onChange: onChangeNickname
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {
        id: "password-label",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "\uBE44\uBC00\uBC88\uD638"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
            type: "password",
            id: "password",
            name: "password",
            value: password,
            onChange: onChangePassword
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {
        id: "password-check-label",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
            type: "password",
            id: "password-check",
            name: "password-check",
            value: passwordCheck,
            onChange: onChangePasswordCheck
          })
        }), mismatchError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Error, {
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        }), !nickname && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Error, {
          children: "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }), signUpError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Error, {
          children: "\uC774\uBBF8 \uAC00\uC785\uB41C \uC774\uBA54\uC77C\uC785\uB2C8\uB2E4."
        }), signUpSuccess && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Success, {
          children: "\uD68C\uC6D0\uAC00\uC785\uB418\uC5C8\uC2B5\uB2C8\uB2E4! \uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "submit",
        children: "\uD68C\uC6D0\uAC00\uC785"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
      children: ["\uC774\uBBF8 \uD68C\uC6D0\uC774\uC2E0\uAC00\uC694?\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Link, {
        to: "/login",
        children: "\uB85C\uADF8\uC778 \uD558\uB7EC\uAC00\uAE30"
      })]
    })]
  });
};
_s(SignUp, "7B9Gvp8SG0BWI+s/GxmQy2365Fs=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"]];
});
_c = SignUp;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);
var _c;
__webpack_require__.$Refresh$.register(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCxzREFBQSxDQUFDYix1REFBSztVQUFBNkMsUUFBQSxFQUFDO1FBQVksQ0FBTyxDQUFDLEVBQ3hDMUIsV0FBVyxpQkFBSU4sc0RBQUEsQ0FBQ2IsdURBQUs7VUFBQTZDLFFBQUEsRUFBQztRQUFjLENBQU8sQ0FBQyxFQUM1Q3hCLGFBQWEsaUJBQUlSLHNEQUFBLENBQUNQLHlEQUFPO1VBQUF1QyxRQUFBLEVBQUM7UUFBbUIsQ0FBUyxDQUFDO01BQUEsQ0FDbkQsQ0FBQyxlQUNSaEMsc0RBQUEsQ0FBQ2Qsd0RBQU07UUFBQytDLElBQUksRUFBQyxRQUFRO1FBQUFELFFBQUEsRUFBQztNQUFJLENBQVEsQ0FBQztJQUFBLENBQy9CLENBQUMsZUFDUDlCLHVEQUFBLENBQUNWLCtEQUFhO01BQUF3QyxRQUFBLEdBQUMsd0RBRWIsZUFBQWhDLHNEQUFBLENBQUNvQyxJQUFJO1FBQUNDLEVBQUUsRUFBQyxRQUFRO1FBQUFMLFFBQUEsRUFBQztNQUFRLENBQU0sQ0FBQztJQUFBLENBQ3BCLENBQUM7RUFBQSxDQUNiLENBQUM7QUFFVixDQUFDO0FBQUNwRCxFQUFBLENBbkdJdUIsTUFBTTtFQUFBLFFBQ2lCTCwyQ0FBTSxFQUtGcEIsdURBQVEsRUFDRkEsdURBQVEsRUFDWEEsdURBQVEsRUFDRUEsdURBQVE7QUFBQTtBQUFBNEQsRUFBQSxHQVRoRG5DLE1BQU07QUFxR1osaUVBQWVBLE1BQU0sRUFBQztBQUFBLElBQUFtQyxFQUFBO0FBQUFDLHNDQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1yb3V0ZXIvLi9ob29rcy91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1yb3V0ZXIvLi9wYWdlcy9TaWduVXAvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZUlucHV0ID0gKGluaXRpYWxWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcclxuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0VmFsdWVdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7ICAgIFxyXG4iLCJpbXBvcnQgdXNlSW5wdXQgZnJvbSAnQGhvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBFcnJvciwgRm9ybSwgSGVhZGVyLCBJbnB1dCwgTGFiZWwsIExpbmtDb250YWluZXIsIFN1Y2Nlc3MgfSBmcm9tICdAcGFnZXMvU2lnblVwL3N0eWxlcyc7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJ0B1dGlscy9mZXRjaGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5cclxuY29uc3QgU2lnblVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YTogdXNlckRhdGEgfSA9IHVzZVNXUignL2FwaS91c2VycycsIGZldGNoZXIpO1xyXG4gIGNvbnN0IFtzaWduVXBFcnJvciwgc2V0U2lnblVwRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaWduVXBTdWNjZXNzLCBzZXRTaWduVXBTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWlzbWF0Y2hFcnJvciwgc2V0TWlzbWF0Y2hFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgLCBzZXRQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssICwgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgc2V0TWlzbWF0Y2hFcnJvcihwYXNzd29yZENoZWNrICE9PSBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgW3Bhc3N3b3JkQ2hlY2tdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIHNldE1pc21hdGNoRXJyb3IocGFzc3dvcmQgIT09IGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBbcGFzc3dvcmRdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICghbmlja25hbWUgfHwgIW5pY2tuYW1lLnRyaW0oKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIW1pc21hdGNoRXJyb3IpIHtcclxuICAgICAgICBzZXRTaWduVXBFcnJvcihmYWxzZSk7XHJcbiAgICAgICAgc2V0U2lnblVwU3VjY2VzcyhmYWxzZSk7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgIC5wb3N0KCcvYXBpL3VzZXJzJywgeyBlbWFpbCwgbmlja25hbWUsIHBhc3N3b3JkIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNpZ25VcFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBzZXRTaWduVXBFcnJvcihlcnJvci5yZXNwb25zZT8uZGF0YT8uc3RhdHVzQ29kZSA9PT0gNDAzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2VtYWlsLCBuaWNrbmFtZSwgcGFzc3dvcmQsIG1pc21hdGNoRXJyb3JdLFxyXG4gICk7XHJcblxyXG4gIGlmICh1c2VyRGF0YSkge1xyXG4gICAgLy8gcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi93b3Jrc3BhY2Uvc2xlYWN0XCIgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZGVyPlNsZWFjdDwvSGVhZGVyPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxMYWJlbCBpZD1cImVtYWlsLWxhYmVsXCI+XHJcbiAgICAgICAgICA8c3Bhbj7snbTrqZTsnbwg7KO87IaMPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICA8TGFiZWwgaWQ9XCJuaWNrbmFtZS1sYWJlbFwiPlxyXG4gICAgICAgICAgPHNwYW4+64uJ64Sk7J6EPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuaWNrbmFtZVwiIG5hbWU9XCJuaWNrbmFtZVwiIHZhbHVlPXtuaWNrbmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgIDxMYWJlbCBpZD1cInBhc3N3b3JkLWxhYmVsXCI+XHJcbiAgICAgICAgICA8c3Bhbj7ruYTrsIDrsojtmLg8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgIDxMYWJlbCBpZD1cInBhc3N3b3JkLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICA8c3Bhbj7ruYTrsIDrsojtmLgg7ZmV7J24PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkLWNoZWNrXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmQtY2hlY2tcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZENoZWNrfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHttaXNtYXRjaEVycm9yICYmIDxFcnJvcj7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L0Vycm9yPn1cclxuICAgICAgICAgIHshbmlja25hbWUgJiYgPEVycm9yPuuLieuEpOyehOydhCDsnoXroKXtlbTso7zshLjsmpQuPC9FcnJvcj59XHJcbiAgICAgICAgICB7c2lnblVwRXJyb3IgJiYgPEVycm9yPuydtOuvuCDqsIDsnoXrkJwg7J2066mU7J287J6F64uI64ukLjwvRXJyb3I+fVxyXG4gICAgICAgICAge3NpZ25VcFN1Y2Nlc3MgJiYgPFN1Y2Nlc3M+7ZqM7JuQ6rCA7J6F65CY7JeI7Iq164uI64ukISDroZzqt7jsnbjtlbTso7zshLjsmpQuPC9TdWNjZXNzPn1cclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPu2ajOybkOqwgOyehTwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxMaW5rQ29udGFpbmVyPlxyXG4gICAgICAgIOydtOuvuCDtmozsm5DsnbTsi6DqsIDsmpQ/Jm5ic3A7XHJcbiAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj7roZzqt7jsnbgg7ZWY65+s6rCA6riwPC9MaW5rPlxyXG4gICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZUlucHV0IiwiaW5pdGlhbFZhbHVlIiwiX3MiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsImUiLCJ0YXJnZXQiLCJCdXR0b24iLCJFcnJvciIsIkZvcm0iLCJIZWFkZXIiLCJJbnB1dCIsIkxhYmVsIiwiTGlua0NvbnRhaW5lciIsIlN1Y2Nlc3MiLCJmZXRjaGVyIiwiYXhpb3MiLCJSZWFjdCIsIlJlZGlyZWN0IiwidXNlU1dSIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIlNpZ25VcCIsImRhdGEiLCJ1c2VyRGF0YSIsInNpZ25VcEVycm9yIiwic2V0U2lnblVwRXJyb3IiLCJzaWduVXBTdWNjZXNzIiwic2V0U2lnblVwU3VjY2VzcyIsIm1pc21hdGNoRXJyb3IiLCJzZXRNaXNtYXRjaEVycm9yIiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkQ2hlY2siLCJzZXRQYXNzd29yZENoZWNrIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwicG9zdCIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiaWQiLCJjaGlsZHJlbiIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiLCJMaW5rIiwidG8iLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=