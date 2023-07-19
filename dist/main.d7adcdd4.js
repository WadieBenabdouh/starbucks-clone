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
})({"epB2":[function(require,module,exports) {
var menu_btn = document.querySelector("#menu-toggle");
var mobile_menu = document.querySelector(".mobile-nav");
var overlayOne = document.querySelector("body");
menu_btn.onclick = function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("in-action");
  nextMenu.classList.remove("in-action"); //genius
  overlayOne.classList.toggle("active");
};
var nextButton = document.querySelector("#nextButton");
var backButton = document.querySelector("#backButton");
var nextMenu = document.querySelector(".next-menu");
nextButton.onclick = function () {
  nextMenu.classList.toggle("in-action");
};
backButton.onclick = function () {
  nextMenu.classList.remove("in-action");
};

//ACCORDION TRICK

// FIRST ACCORDION 1
var accordionOpener = document.querySelector("#accordionBtn");
var wrapper = document.querySelector("#wrapper");
var chevronTick = document.querySelector("#chevronOne");
accordionOpener.onclick = function () {
  wrapper.classList.toggle("is-open");
  chevronTick.classList.toggle("enabled");
};

// SECOND ACCORDION 2
var accordionOpenerTwo = document.querySelector("#accordionBtnTwo");
var wrapperTwo = document.querySelector("#wrapperTwo");
var chevronTickTwo = document.querySelector("#chevronTwo");
accordionOpenerTwo.onclick = function () {
  wrapperTwo.classList.toggle("is-open");
  chevronTickTwo.classList.toggle("enabled");
};

// THIRD ACCORDION 3
var accordionOpenerThree = document.querySelector("#accordionBtnThree");
var wrapperThree = document.querySelector("#wrapperThree");
var chevronTickThree = document.querySelector("#chevronThree");
accordionOpenerThree.onclick = function () {
  wrapperThree.classList.toggle("is-open");
  chevronTickThree.classList.toggle("enabled");
};

// FOURTH ACCORDION 4
var accordionOpenerFour = document.querySelector("#accordionBtnFour");
var wrapperFour = document.querySelector("#wrapperFour");
var chevronTickFour = document.querySelector("#chevronFour");
accordionOpenerFour.onclick = function () {
  wrapperFour.classList.toggle("is-open");
  chevronTickFour.classList.toggle("enabled");
};

// FIFTH ACCORDION 5
var accordionOpenerFive = document.querySelector("#accordionBtnFive");
var wrapperFive = document.querySelector("#wrapperFive");
var chevronTickFive = document.querySelector("#chevronFive");
accordionOpenerFive.onclick = function () {
  wrapperFive.classList.toggle("is-open");
  chevronTickFive.classList.toggle("enabled");
};
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.d7adcdd4.js.map