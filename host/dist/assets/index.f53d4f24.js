import React, { r as react } from './__federation_shared_react.js';
import { r as reactDom } from './__federation_shared_react-dom.js';

const p$1 = function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(script) {
        const fetchOpts = {};
        if (script.integrity)
            fetchOpts.integrity = script.integrity;
        if (script.referrerpolicy)
            fetchOpts.referrerPolicy = script.referrerpolicy;
        if (script.crossorigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (script.crossorigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
};true&&p$1();

var client = {};

var m$1 = reactDom.exports;
{
  client.createRoot = m$1.createRoot;
  client.hydrateRoot = m$1.hydrateRoot;
}

const scriptRel = 'modulepreload';const assetsURL = function(dep) { return "/"+dep };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
    // @ts-ignore
    if (!true || !deps || deps.length === 0) {
        return baseModule();
    }
    return Promise.all(deps.map((dep) => {
        // @ts-ignore
        dep = assetsURL(dep);
        // @ts-ignore
        if (dep in seen)
            return;
        // @ts-ignore
        seen[dep] = true;
        const isCss = dep.endsWith('.css');
        const cssSelector = isCss ? '[rel="stylesheet"]' : '';
        // @ts-ignore check if the file is already preloaded by SSR markup
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
            return;
        }
        // @ts-ignore
        const link = document.createElement('link');
        // @ts-ignore
        link.rel = isCss ? 'stylesheet' : scriptRel;
        if (!isCss) {
            link.as = 'script';
            link.crossOrigin = '';
        }
        link.href = dep;
        // @ts-ignore
        document.head.appendChild(link);
        if (isCss) {
            return new Promise((res, rej) => {
                link.addEventListener('load', res);
                link.addEventListener('error', () => rej(new Error(`Unable to preload CSS for ${dep}`)));
            });
        }
    })).then(() => baseModule());
};

const remotesMap = {
'remote':{url:'http://localhost:3001/assets/remoteEntry.js',format:'esm',from:'vite'}
};
const loadJS = async (url, fn) => {
  const resolvedUrl = typeof url === 'function' ? await url() : url;
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = fn;
  script.src = resolvedUrl;
  document.getElementsByTagName('head')[0].appendChild(script);
};
const scriptTypes = ['var'];
const importTypes = ['esm', 'systemjs'];
function get(name, remoteFrom){
  return __federation_import(name).then(module => ()=> {
    if (remoteFrom === 'webpack') {
      return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module
    }
    return module
  })
}
const wrapShareModule = remoteFrom => {
  return {
    'react':{'18.2.0':{get:()=>get('./__federation_shared_react.js', remoteFrom), loaded:1}},'react-dom':{'18.2.0':{get:()=>get('./__federation_shared_react-dom.js', remoteFrom), loaded:1}}
  }
};
async function __federation_import(name){
  return __vitePreload(() => import(name),true?[]:void 0);
}
async function __federation_method_ensure(remoteId) {
  const remote = remotesMap[remoteId];
  if (!remote.inited) {
    if (scriptTypes.includes(remote.format)) {
      // loading js with script tag
      return new Promise(resolve => {
        const callback = () => {
          if (!remote.inited) {
            remote.lib = window[remoteId];
            remote.lib.init(wrapShareModule(remote.from));
            remote.inited = true;
          }
          resolve(remote.lib);
        };
        return loadJS(remote.url, callback);
      });
    } else if (importTypes.includes(remote.format)) {
      // loading js with import(...)
      return new Promise(resolve => {
        const getUrl = typeof remote.url === 'function' ? remote.url : () => Promise.resolve(remote.url);
        getUrl().then(url => {
          __vitePreload(() => import(/* @vite-ignore */ url),true?[]:void 0).then(lib => {
            if (!remote.inited) {
              const shareScope = wrapShareModule(remote.from);
              lib.init(shareScope);
              remote.lib = lib;
              remote.lib.init(shareScope);
              remote.inited = true;
            }
            resolve(remote.lib);
          });
        });
      })
    }
  } else {
    return remote.lib;
  }
}

function __federation_method_unwrapDefault(module) {
  return (module?.__esModule || module?.[Symbol.toStringTag] === 'Module')?module.default:module
}

function __federation_method_getRemote(remoteName,  componentName){
  return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
}

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

const __federation_var_remoteApp = await __federation_method_getRemote("remote" , "./App");
 let RemoteApp = __federation_method_unwrapDefault(__federation_var_remoteApp); 
function HostApp() {
  console.log("host app", React.useState);
  const [count, setCount] = React.useState(0);
  return /* @__PURE__ */ jsx(React.Suspense, {
    fallback: "Loading App...",
    children: /* @__PURE__ */ jsxs("div", {
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
        children: "Vite (Host)"
      }), /* @__PURE__ */ jsx("div", {
        className: "card",
        children: /* @__PURE__ */ jsxs("button", {
          onClick: () => setCount((count2) => count2 + 1),
          children: ["count is ", count]
        })
      }), /* @__PURE__ */ jsx(RemoteApp, {})]
    })
  });
}

const index = '';

client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(HostApp, {})
}));
