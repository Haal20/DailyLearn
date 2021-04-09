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
})({"src/project_planning/home-view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderHomeView = renderHomeView;

function renderHomeView() {
  var main = document.getElementById('main');
  main.innerHTML = "<p>Detta \xE4r min f\xF6rstasida. klicka vidare f\xF6r att se mer \xEDnformation om mitt projekt</p>";
}
},{}],"src/project_planning/plan-view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderPlanView = renderPlanView;

function renderPlanView() {
  var main = document.getElementById('main');
  main.innerHTML = "<h2>Aff\xE4rsplan</h2>\n    <p>DailyLearn \xE4r ett digitalt redskap som riktar sig mot elever och deras l\xE4rande p\xE5 h\xF6gstadiet. Visionen \xE4r att fr\xE4mja ett \n    livsl\xE5ngt l\xE4rande och j\xE4mna ut skillnader i samh\xE4llet n\xE4r det kommer till betygsskillnader mellan flickor och pojkar. Vi vill ta \n    ansvar fr\xE5n l\xE4rare och l\xE4gga det p\xE5 eleven sj\xE4lv f\xF6r att hen ska l\xE4ra sig och f\xE5 m\xF6jligheten att ta ansvar \xF6ver egna studier. \n    Vi vill \xE4ven hj\xE4lpa att skapa en h\xE4lsosam pluggkultur och sin egen studieteknik som blir ett redskap f\xF6r elever, \xE4ven \n    senare i livet.</p><p>\n    V\xE5r l\xF6sning \xE4r en applikation i mobiltelefonen som hj\xE4lper eleven att prioritera och inspirerar till att ta tag i studier i god \n    tid. Vi kan uppskattningsvis spara in 4 timmar/veckan p\xE5 en l\xE4rares f\xF6rtroendetid som annars brukar g\xE5 till att kontakta \n    v\xE5rdnadshavare och enskilda individer samt konstruktion av ompr\xF6vningar.\n    Applikationen anv\xE4nder sig av etablerade studietekniker i form av popups n\xE4r eleven studerar. Detta hj\xE4lper eleven att ta\n    vara p\xE5 kunskapen hen l\xE4r sig. Kommer \xE4ven inkludera \u201Dbrain breaks\u201D som i studier visat sig f\xF6rb\xE4ttra skolresultat med \n    upp till 40%. </p><p>\n    I applikationen kommer det finnas en Hem-vy. H\xE4r kommer inl\xE4mningar och prov visas i ett individuellt fl\xF6de. Eleven \n    kommer \xE4ven se rekommenderad tid att studera p\xE5 uppgiften; hur l\xE4nge hen studerat p\xE5 uppgiften samt hur det g\xE5tt de \n    senaste dagarna.</p><p>\n    I den gemensamma-vyn kommer en m\xE5nadssammanfattning visas. Beroende p\xE5 hur mycket eleven studerar s\xE5 kommer \n    hen vandra l\xE4ngsmed en visuell karta. Klarar eleven av all rekommenderad tid under en vecka s\xE5 n\xE5r hen en stj\xE4rna som \n    blir guldf\xE4rgad. Det kommer \xE4ven finnas r\xF6da flaggor p\xE5 kartan som representerar prov och uppgifterna i Hem-vyn.\n    I den gemensamma-vyn ska man \xE4ven kunna bjuda in \u201DWorkbuddies\u201D som d\xE5 ocks\xE5 kommer visas p\xE5 kartan. Vilka som \n    ska bjudas in till att vara \u201DWorkbuddies\u201D ska vara upp till eleven sj\xE4lv.</p><p>\n    Uppskattningsvis s\xE5 kommer nyttorna i applikationen innefatta:\n    Ett \xF6kat snittbetyg p\xE5 40%; \n    \xF6kad k\xE4nsla av kontroll \xF6ver egenstudier med 59%; \n    en minskad betygsklyfta mellan tjejer och killar med 23%; \n    samt en minskning med 4 timmar av en l\xE4rares f\xF6rtroendetid som g\xE5r till p\xE5minnelser och konstruktioner av \n    ompr\xF6vningar.</p><p>\n    Denna applikation fokuserar p\xE5 digitala l\xF6sningar med ett elevperspektiv; har elevers studieteknik och djupinl\xE4rning i \n    \xE5tanke; m\xF6jligg\xF6r till eget ansvarstagande samt underl\xE4ttar f\xF6r f\xF6r\xE4ldrar att hj\xE4lpa sina barn att prioritera.\n    Allt i applikationen \xE4r specialanpassat f\xF6r den som skolan \xE4r inr\xE4ttad f\xF6r, eleven.</p>";
}
},{}],"src/project_planning/idea-view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderIdeaView = renderIdeaView;

function renderIdeaView() {
  var main = document.getElementById('main');
  main.innerHTML = "<h2>Produktid\xE9</h2>\n    <p>Prototypen jag ska bygga under kursen ska vara uppdelad i 3 delar. Den f\xF6rsta delen \xE4r en \"smart\" att-g\xF6ra-lista; den andra \xE4r en gemensam m\xE5nadskarta; den sista \xE4r en \xF6vrigt-vy som visar samlad information kring hur en f\xF6rb\xE4ttrar sina studier.</p>\n    <img src=\"./src/project_planning/image/hem-vy.jpg\" alt=\"Hem Vy\">\n    <p>Ovan ser du nu id\xE9n f\xF6r hem-vyn. H\xE4r kommer alla inl\xE4mningar och prov som prioriteras att studera till en given dag att visas i ett induviduellt fl\xF6de i elevans applikation.\n    \xD6verskriften ber\xE4ttar vilken typ av uppgift eller prov det \xE4r och vad den heter; under visas hur m\xE5nga minuter eleven totalt rekomenderas att l\xE4gga p\xE5 att studera p\xE5 uppgiften samt hur m\xE5nga minuter den hittils har laggt.\n    Det finns \xE4ven en visuell representation av de studerade timmarna i form av en \"bar\" som fylls utefter procent avklarade minuter. Till sist har vi ocks\xE5 till h\xF6ger i uppgifts-objektet en liten sammanfattning som visar hur det g\xE5tt att studera de senaste dagarna. fylls plutten i s\xE5 betyder det att alla rekomenderade studietimmar \xE4r laggda.</p><br>\n    <img src=\"./src/project_planning/image/gemensamt-vy.jpg\" alt=\"Gemensamt Vy\">\n    <p>Som ocks\xE5 beskrivet kort i Aff\xE4rsplanen s\xE5 kommer det finnas en gemensam-vy. Denna kommer visa en sammanfattning av hela m\xE5nadens studier. H\xE4r kommer man se r\xF6da flaggor som representerar uppgifterna som man s\xE5g p\xE5 hemsk\xE4rmen -h\xE5ller en elev in p\xE5 en av flaggorna s\xE5 ska namnet p\xE5 uppgiften den flaggan representerar visas-. \n    Det kommer finnas sm\xE5 avatar-bilder som representerar eleven och v\xE4nner eleven bjudit in till sin karta. \n    Det kommer \xE4ven finnas stj\xE4rnor som representerar varje vecka i m\xE5naden. \n    Allt detta kommer visas p\xE5 en liten \"v\xE4g\" som fylls i n\xE4r eleven g\xF6r framsteg och tar sig fram i sina studier. \n    Att f\xE5 se uppgifterna som ska g\xF6ras och sig sj\xE4lv i f\xF6rh\xE5llande till dessa ska fr\xE4mja elevens medvetenhet och uppmuntra till att studera mer fokuserat.</p>";
}
},{}],"src/project_planning/contact-view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderContactView = renderContactView;

function renderContactView() {
  var main = document.getElementById('main');
  main.innerHTML = "<h2>Mina kontaktuppgifter:</h2>\n    Alma H\xE4rlin <br>\n    Email: <a href=\"mailto: alma-harlin@hotmail.com\">alma-harlin@hotmail.com</a><br>\n    Tel: <a href=\"tel:+739714337\">0739-71 43 37</a>";
}
},{}],"src/project_planning/event-listeners.js":[function(require,module,exports) {
"use strict";

var _homeView = require("./home-view.js");

var _planView = require("./plan-view.js");

var _ideaView = require("./idea-view.js");

var _contactView = require("./contact-view.js");

//Get buttons
var viewPlan = document.getElementById('businessPlan');
var viewIdea = document.getElementById('projectIdea');
var viewContact = document.getElementById('contact'); //Show first page

(0, _homeView.renderHomeView)(); //Add eventlisteners to buttons

viewPlan.addEventListener('click', _planView.renderPlanView);
viewIdea.addEventListener('click', _ideaView.renderIdeaView);
viewContact.addEventListener('click', _contactView.renderContactView);
},{"./home-view.js":"src/project_planning/home-view.js","./plan-view.js":"src/project_planning/plan-view.js","./idea-view.js":"src/project_planning/idea-view.js","./contact-view.js":"src/project_planning/contact-view.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58853" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/project_planning/event-listeners.js"], null)
//# sourceMappingURL=/event-listeners.799df814.js.map