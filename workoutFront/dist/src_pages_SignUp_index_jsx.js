"use strict";
(self["webpackChunkreact_router"] = self["webpackChunkreact_router"] || []).push([["src_pages_SignUp_index_jsx"],{

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

/***/ "./src/pages/SignUp/index.jsx":
/*!************************************!*\
  !*** ./src/pages/SignUp/index.jsx ***!
  \************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRU0sTUFBTXJELEtBQUssR0FBR2tELHVEQUFNLENBQUNJLEtBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFFTSxNQUFNMUQsTUFBTSxHQUFHc0QsdURBQU0sQ0FBQ0ssTUFBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVNLE1BQU0xRCxLQUFLLEdBQUdxRCx1REFBTSxDQUFDTSxHQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFFTSxNQUFNckQsT0FBTyxHQUFHK0MsdURBQU0sQ0FBQ00sR0FBSTtBQUNsQztBQUNBO0FBQ0EsQ0FBQztBQUVNLE1BQU10RCxhQUFhLEdBQUdnRCx1REFBTSxDQUFDTyxDQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1yb3V0ZXIvLi9zcmMvaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtcm91dGVyLy4vc3JjL3BhZ2VzL1NpZ25VcC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vcmVhY3Qtcm91dGVyLy4vc3JjL3BhZ2VzL1NpZ25VcC9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlSW5wdXQgPSAoaW5pdGlhbFZhbHVlKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VJbnB1dDsgICAgXHJcbiIsImltcG9ydCB1c2VJbnB1dCBmcm9tICdAaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEVycm9yLCBGb3JtLCBIZWFkZXIsIElucHV0LCBMYWJlbCwgTGlua0NvbnRhaW5lciwgU3VjY2VzcyB9IGZyb20gJ0BwYWdlcy9TaWduVXAvc3R5bGVzJztcclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnQHV0aWxzL2ZldGNoZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG5jb25zdCBTaWduVXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhOiB1c2VyRGF0YSB9ID0gdXNlU1dSKCcvYXBpL3VzZXJzJywgZmV0Y2hlcik7XHJcbiAgY29uc3QgW3NpZ25VcEVycm9yLCBzZXRTaWduVXBFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NpZ25VcFN1Y2Nlc3MsIHNldFNpZ25VcFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttaXNtYXRjaEVycm9yLCBzZXRNaXNtYXRjaEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCAsIHNldFBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRDaGVjaywgLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICBzZXRNaXNtYXRjaEVycm9yKHBhc3N3b3JkQ2hlY2sgIT09IGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBbcGFzc3dvcmRDaGVja10sXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZENoZWNrID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBzZXRQYXNzd29yZENoZWNrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgc2V0TWlzbWF0Y2hFcnJvcihwYXNzd29yZCAhPT0gZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIFtwYXNzd29yZF0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKCFuaWNrbmFtZSB8fCAhbmlja25hbWUudHJpbSgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghbWlzbWF0Y2hFcnJvcikge1xyXG4gICAgICAgIHNldFNpZ25VcEVycm9yKGZhbHNlKTtcclxuICAgICAgICBzZXRTaWduVXBTdWNjZXNzKGZhbHNlKTtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgLnBvc3QoJy9hcGkvdXNlcnMnLCB7IGVtYWlsLCBuaWNrbmFtZSwgcGFzc3dvcmQgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0U2lnblVwU3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNpZ25VcEVycm9yKGVycm9yLnJlc3BvbnNlPy5kYXRhPy5zdGF0dXNDb2RlID09PSA0MDMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbZW1haWwsIG5pY2tuYW1lLCBwYXNzd29yZCwgbWlzbWF0Y2hFcnJvcl0sXHJcbiAgKTtcclxuXHJcbiAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAvLyByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL3dvcmtzcGFjZS9zbGVhY3RcIiAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkZXI+U2xlYWN0PC9IZWFkZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPExhYmVsIGlkPVwiZW1haWwtbGFiZWxcIj5cclxuICAgICAgICAgIDxzcGFuPuydtOuplOydvCDso7zshow8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgIDxMYWJlbCBpZD1cIm5pY2tuYW1lLWxhYmVsXCI+XHJcbiAgICAgICAgICA8c3Bhbj7ri4nrhKTsnoQ8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5pY2tuYW1lXCIgbmFtZT1cIm5pY2tuYW1lXCIgdmFsdWU9e25pY2tuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2VOaWNrbmFtZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgPExhYmVsIGlkPVwicGFzc3dvcmQtbGFiZWxcIj5cclxuICAgICAgICAgIDxzcGFuPuu5hOuwgOuyiO2YuDwvc3Bhbj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgPExhYmVsIGlkPVwicGFzc3dvcmQtY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgIDxzcGFuPuu5hOuwgOuyiO2YuCDtmZXsnbg8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtY2hlY2tcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZC1jaGVja1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge21pc21hdGNoRXJyb3IgJiYgPEVycm9yPuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvRXJyb3I+fVxyXG4gICAgICAgICAgeyFuaWNrbmFtZSAmJiA8RXJyb3I+64uJ64Sk7J6E7J2EIOyeheugpe2VtOyjvOyEuOyalC48L0Vycm9yPn1cclxuICAgICAgICAgIHtzaWduVXBFcnJvciAmJiA8RXJyb3I+7J2066+4IOqwgOyeheuQnCDsnbTrqZTsnbzsnoXri4jri6QuPC9FcnJvcj59XHJcbiAgICAgICAgICB7c2lnblVwU3VjY2VzcyAmJiA8U3VjY2Vzcz7tmozsm5DqsIDsnoXrkJjsl4jsirXri4jri6QhIOuhnOq3uOyduO2VtOyjvOyEuOyalC48L1N1Y2Nlc3M+fVxyXG4gICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPExpbmtDb250YWluZXI+XHJcbiAgICAgICAg7J2066+4IO2ajOybkOydtOyLoOqwgOyalD8mbmJzcDtcclxuICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPuuhnOq3uOyduCDtlZjrn6zqsIDquLA8L0xpbms+XHJcbiAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogU2xhY2stTGFyc3NlaXQsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIFNlZ29lIFVJLCBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC43NXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgJiA+IHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ2NjY2NjY3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfZm9yZWdyb3VuZF9oaWdoX3NvbGlkLCAxMzQsIDEzNCwgMTM0KSwgMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2FmLTApO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlciA4MG1zIGVhc2Utb3V0LCBib3gtc2hhZG93IDgwbXMgZWFzZS1vdXQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiByZ2JhKHZhcigtLXNrX3ByaW1hcnlfZm9yZWdyb3VuZCwgMjksIDI4LCAyOSksIDEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2tfcHJpbWFyeV9iYWNrZ3JvdW5kLCAyNTUsIDI1NSwgMjU1KSwgMSk7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgcGFkZGluZy10b3A6IDExcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzMzO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfaGlnaGxpZ2h0LCAxOCwgMTAwLCAxNjMpLCAxKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1zYWYtMCksIDAgMCAwIDVweCByZ2JhKDI5LCAxNTUsIDIwOSwgMC4zKTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGExNTRiO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgbWluLXdpZHRoOiA5NnB4O1xyXG4gIHBhZGRpbmc6IDAgMTZweCAzcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDgwbXMgbGluZWFyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDIxLCA3NSwgMC45KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgJjpmb2N1cyB7XHJcbiAgICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2hpZ2hsaWdodCwgMTgsIDEwMCwgMTYzKSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tc2FmLTApLCAwIDAgMCA1cHggcmdiYSgyOSwgMTU1LCAyMDksIDAuMyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogI2UwMWU1YTtcclxuICBtYXJnaW46IDhweCAwIDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3VjY2VzcyA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICMyZWI2N2Q7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzYxNjA2MTtcclxuICBtYXJnaW46IDAgYXV0byA4cHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcblxyXG4gICYgYSB7XHJcbiAgICBjb2xvcjogIzEyNjRhMztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VJbnB1dCIsImluaXRpYWxWYWx1ZSIsIl9zIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJlIiwidGFyZ2V0IiwiQnV0dG9uIiwiRXJyb3IiLCJGb3JtIiwiSGVhZGVyIiwiSW5wdXQiLCJMYWJlbCIsIkxpbmtDb250YWluZXIiLCJTdWNjZXNzIiwiZmV0Y2hlciIsImF4aW9zIiwiUmVhY3QiLCJSZWRpcmVjdCIsInVzZVNXUiIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJTaWduVXAiLCJkYXRhIiwidXNlckRhdGEiLCJzaWduVXBFcnJvciIsInNldFNpZ25VcEVycm9yIiwic2lnblVwU3VjY2VzcyIsInNldFNpZ25VcFN1Y2Nlc3MiLCJtaXNtYXRjaEVycm9yIiwic2V0TWlzbWF0Y2hFcnJvciIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsIm5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInBvc3QiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsImlkIiwiY2hpbGRyZW4iLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwiTGluayIsInRvIiwiX2MiLCIkUmVmcmVzaFJlZyQiLCJzdHlsZWQiLCJoZWFkZXIiLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsImJ1dHRvbiIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9