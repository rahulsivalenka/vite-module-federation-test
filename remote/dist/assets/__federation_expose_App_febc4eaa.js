import React, { r as react } from './__federation_shared_react.js';

const reactLogo = "/assets/react.35ef61ed.svg";

const App = '';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=react.exports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

(function (module) {

	{
	  module.exports = reactJsxRuntime_production_min;
	}
} (jsxRuntime));

const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;

function RemoteApp() {
  console.log("remote app", React.useState);
  const [count, setCount] = React.useState(0);
  return /* @__PURE__ */ jsxs("div", {
    className: "App",
    children: [/* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("a", {
        href: "https://vitejs.dev",
        target: "_blank",
        children: /* @__PURE__ */ jsx("img", {
          src: "/vite.svg",
          className: "logo",
          alt: "Vite logo"
        })
      }), /* @__PURE__ */ jsx("a", {
        href: "https://reactjs.org",
        target: "_blank",
        children: /* @__PURE__ */ jsx("img", {
          src: reactLogo,
          className: "logo react",
          alt: "React logo"
        })
      })]
    }), /* @__PURE__ */ jsx("h1", {
      children: "Vite (Remote)"
    }), /* @__PURE__ */ jsxs("div", {
      className: "card",
      children: [/* @__PURE__ */ jsxs("button", {
        onClick: () => setCount((count2) => count2 + 1),
        children: ["count is ", count]
      }), /* @__PURE__ */ jsxs("p", {
        children: ["Edit ", /* @__PURE__ */ jsx("code", {
          children: "src/App.tsx"
        }), " and save to test HMR"]
      })]
    }), /* @__PURE__ */ jsx("p", {
      className: "read-the-docs",
      children: "Click on the Vite and React logos to learn more"
    })]
  });
}

export { RemoteApp as default, jsx as j };
