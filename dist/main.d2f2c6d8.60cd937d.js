// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.d2f2c6d8.js":[function(require,module,exports) {
parcelRequire = function (e) {
  var r = "function" == typeof parcelRequire && parcelRequire,
    n = "function" == typeof require && require,
    i = {};
  function u(e, u) {
    if (e in i) return i[e];
    var t = "function" == typeof parcelRequire && parcelRequire;
    if (!u && t) return t(e, !0);
    if (r) return r(e, !0);
    if (n && "string" == typeof e) return n(e);
    var o = new Error("Cannot find module '" + e + "'");
    throw o.code = "MODULE_NOT_FOUND", o;
  }
  return u.register = function (e, r) {
    i[e] = r;
  }, i = e(u), u.modules = i, u;
}(function (require) {
  var b = document.querySelector("select"),
    a = document.querySelector(".weather");
  function c() {
    switch (b.value) {
      case "sunny":
        a.textContent = "\u9633\u5149\u660E\u5A9A\u3002\u7A7F\u4E0A\u77ED\u88E4\u5427\uFF01\u53BB\u6D77\u6EE9\uFF0C\u6216\u516C\u56ED\uFF0C\u5403\u4E2A\u51B0\u6DC7\u6DCB\u3002";
        break;
      case "rainy":
        a.textContent = "\u5916\u9762\u4E0B\u7740\u96E8\uFF1B\u5E26\u4E0A\u96E8\u8863\u548C\u96E8\u4F1E\uFF0C\u4E0D\u8981\u5728\u5916\u9762\u5446\u592A\u4E45\u3002";
        break;
      case "snowing":
        a.textContent = "\u5927\u96EA\u7EB7\u98DE\uFF0C\u5929\u5BD2\u5730\u51BB\uFF01\u6700\u597D\u5446\u5728\u5BB6\u91CC\u559D\u676F\u70ED\u5DE7\u514B\u529B\uFF0C\u6216\u8005\u53BB\u5806\u4E2A\u96EA\u4EBA\u3002";
        break;
      case "overcast":
        a.textContent = "\u867D\u7136\u6CA1\u6709\u4E0B\u96E8\uFF0C\u4F46\u5929\u7A7A\u7070\u8499\u8499\u7684\uFF0C\u968F\u65F6\u90FD\u53EF\u80FD\u53D8\u5929\uFF0C\u6240\u4EE5\u8981\u5E26\u4E00\u4EF6\u96E8\u8863\u4EE5\u9632\u4E07\u4E00\u3002";
        break;
      default:
        a.textContent = "";
    }
  }
  b.addEventListener("change", c), document.querySelector("img").addEventListener("click", function () {
    alert("\u522B\u6233\u6211\uFF0C\u6211\u6015\u75BC\uFF0C\u5636\uFF0C\u554A\u5636~\u3002");
  });
  var d = document.querySelector("button"),
    f = document.querySelector("h1");
  function g() {
    var e = prompt("\u8BF7\u8F93\u5165\u4F60\u7684\u540D\u5B57\u3002");
    localStorage.setItem("name", e), f.textContent = "\u5965\u91CC\u7ED9\uFF01\uFF01\uFF01" + e;
  }
  d.onclick = function () {
    g();
  };
  return {
    "KIzB": {}
  };
});
},{}]