"use strict";
(self["webpackChunkreact_router"] = self["webpackChunkreact_router"] || []).push([["src_pages_Login_index_jsx"],{

/***/ "./src/hooks/useInput.js":
/*!*******************************!*\
  !*** ./src/hooks/useInput.js ***!
  \*******************************/
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

/***/ "./src/pages/Login/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/Login/index.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hooks/useInput */ "./src/hooks/useInput.js");
/* harmony import */ var _pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/SignUp/styles */ "./src/pages/SignUp/styles.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/fetcher */ "./src/utils/fetcher.js");
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

/***/ }),

/***/ "./src/pages/SignUp/styles.js":
/*!************************************!*\
  !*** ./src/pages/SignUp/styles.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   Error: () => (/* binding */ Error),
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   Input: () => (/* binding */ Input),
/* harmony export */   Label: () => (/* binding */ Label),
/* harmony export */   LinkContainer: () => (/* binding */ LinkContainer),
/* harmony export */   Success: () => (/* binding */ Success)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const Header = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].header`
  text-align: center;
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const Form = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].form`
  margin: 0 auto;
  width: 400px;
  max-width: 400px;
`;
const Label = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].label`
  margin-bottom: 16px;

  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;
const Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;
const Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #4a154b;
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: rgba(74, 21, 75, 0.9);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;
const Error = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;
const Success = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  color: #2eb67d;
  font-weight: bold;
`;
const LinkContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;
  width: 400px;
  max-width: 400px;

  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXJvdXRlci8uL3NyYy9ob29rcy91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1yb3V0ZXIvLi9zcmMvcGFnZXMvTG9naW4vaW5kZXguanN4Iiwid2VicGFjazovL3JlYWN0LXJvdXRlci8uL3NyYy9wYWdlcy9TaWduVXAvc3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZUlucHV0ID0gKGluaXRpYWxWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcclxuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0VmFsdWVdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7ICAgIFxyXG4iLCJpbXBvcnQgdXNlSW5wdXQgZnJvbSAnQGhvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBFcnJvciwgRm9ybSwgSGVhZGVyLCBJbnB1dCwgTGFiZWwsIExpbmtDb250YWluZXIgfSBmcm9tICdAcGFnZXMvU2lnblVwL3N0eWxlcyc7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJ0B1dGlscy9mZXRjaGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5cclxuY29uc3QgTG9nSW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhOiB1c2VyRGF0YSwgZXJyb3IsIHJldmFsaWRhdGUgfSA9IHVzZVNXUignL2FwaS91c2VycycsIGZldGNoZXIpO1xyXG4gIGNvbnN0IFtsb2dJbkVycm9yLCBzZXRMb2dJbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2V0TG9nSW5FcnJvcihmYWxzZSk7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXHJcbiAgICAgICAgICAnL2FwaS91c2Vycy9sb2dpbicsXHJcbiAgICAgICAgICB7IGVtYWlsLCBwYXNzd29yZCB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICByZXZhbGlkYXRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBzZXRMb2dJbkVycm9yKGVycm9yLnJlc3BvbnNlPy5kYXRhPy5zdGF0dXNDb2RlID09PSA0MDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtlbWFpbCwgcGFzc3dvcmRdLFxyXG4gICk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGVycm9yLCB1c2VyRGF0YSk7XHJcbiAgaWYgKCFlcnJvciAmJiB1c2VyRGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ+uhnOq3uOyduOuQqCcsIHVzZXJEYXRhKTtcclxuICAgIC8vIHJldHVybiA8UmVkaXJlY3QgdG89XCIvd29ya3NwYWNlL3NsZWFjdC9jaGFubmVsL+ydvOuwmFwiIC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cclxuICAgICAgPEhlYWRlcj5Dcm9zc2ZpdDwvSGVhZGVyPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxMYWJlbCBpZD1cImVtYWlsLWxhYmVsXCI+XHJcbiAgICAgICAgICA8c3Bhbj5JRDwvc3Bhbj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgPExhYmVsIGlkPVwicGFzc3dvcmQtbGFiZWxcIj5cclxuICAgICAgICAgIDxzcGFuPlBhc3N3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7bG9nSW5FcnJvciAmJiA8RXJyb3I+7J2066mU7J286rO8IOu5hOuwgOuyiO2YuCDsobDtlansnbQg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L0Vycm9yPn1cclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPuuhnOq3uOyduDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxMaW5rQ29udGFpbmVyPlxyXG4gICAgICAgIOyVhOyngSDtmozsm5DsnbQg7JWE64uI7Iug6rCA7JqUPyZuYnNwO1xyXG4gICAgICAgIDxhIGhyZWY9XCIvc2lnbnVwXCI+7ZqM7JuQ6rCA7J6FIO2VmOufrOqwgOq4sDwvYT5cclxuICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ0luO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFNsYWNrLUxhcnNzZWl0LCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBTZWdvZSBVSSwgVGFob21hLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBsaW5lLWhlaWdodDogNDZweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblxyXG4gICYgPiBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMS40NjY2NjY2NztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfaGlnaF9zb2xpZCwgMTM0LCAxMzQsIDEzNCksIDEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNhZi0wKTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgODBtcyBlYXNlLW91dCwgYm94LXNoYWRvdyA4MG1zIGVhc2Utb3V0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwIDAgMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogcmdiYSh2YXIoLS1za19wcmltYXJ5X2ZvcmVncm91bmQsIDI5LCAyOCwgMjkpLCAxKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNrX3ByaW1hcnlfYmFja2dyb3VuZCwgMjU1LCAyNTUsIDI1NSksIDEpO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzMztcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2hpZ2hsaWdodCwgMTgsIDEwMCwgMTYzKSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tc2FmLTApLCAwIDAgMCA1cHggcmdiYSgyOSwgMTU1LCAyMDksIDAuMyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhMTU0YjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIG1pbi13aWR0aDogOTZweDtcclxuICBwYWRkaW5nOiAwIDE2cHggM3B4O1xyXG4gIHRyYW5zaXRpb246IGFsbCA4MG1zIGxpbmVhcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LCAyMSwgNzUsIDAuOSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gICY6Zm9jdXMge1xyXG4gICAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19oaWdobGlnaHQsIDE4LCAxMDAsIDE2MyksIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLXNhZi0wKSwgMCAwIDAgNXB4IHJnYmEoMjksIDE1NSwgMjA5LCAwLjMpO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICNlMDFlNWE7XHJcbiAgbWFyZ2luOiA4cHggMCAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN1Y2Nlc3MgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAjMmViNjdkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM2MTYwNjE7XHJcbiAgbWFyZ2luOiAwIGF1dG8gOHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICAmIGEge1xyXG4gICAgY29sb3I6ICMxMjY0YTM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlSW5wdXQiLCJpbml0aWFsVmFsdWUiLCJfcyIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVyIiwiZSIsInRhcmdldCIsIkJ1dHRvbiIsIkVycm9yIiwiRm9ybSIsIkhlYWRlciIsIklucHV0IiwiTGFiZWwiLCJMaW5rQ29udGFpbmVyIiwiZmV0Y2hlciIsImF4aW9zIiwiUmVhY3QiLCJSZWRpcmVjdCIsInVzZVNXUiIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJMb2dJbiIsImRhdGEiLCJ1c2VyRGF0YSIsImVycm9yIiwicmV2YWxpZGF0ZSIsImxvZ0luRXJyb3IiLCJzZXRMb2dJbkVycm9yIiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwiY2F0Y2giLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJjaGlsZHJlbiIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiLCJocmVmIiwiX2MiLCIkUmVmcmVzaFJlZyQiLCJzdHlsZWQiLCJoZWFkZXIiLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsImJ1dHRvbiIsImRpdiIsIlN1Y2Nlc3MiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==