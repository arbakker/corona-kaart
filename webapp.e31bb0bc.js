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
})({"node_modules/leaflet/dist/leaflet.js":[function(require,module,exports) {
var define;
/* @preserve
 * Leaflet 1.6.0, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.L={})}(this,function(t){"use strict";var i=Object.freeze;function h(t){var i,e,n,o;for(e=1,n=arguments.length;e<n;e++)for(i in o=arguments[e])t[i]=o[i];return t}Object.freeze=function(t){return t};var s=Object.create||function(t){return e.prototype=t,new e};function e(){}function a(t,i){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var n=e.call(arguments,2);return function(){return t.apply(i,n.length?n.concat(e.call(arguments)):arguments)}}var n=0;function u(t){return t._leaflet_id=t._leaflet_id||++n,t._leaflet_id}function o(t,i,e){var n,o,s,r;return r=function(){n=!1,o&&(s.apply(e,o),o=!1)},s=function(){n?o=arguments:(t.apply(e,arguments),setTimeout(r,i),n=!0)}}function r(t,i,e){var n=i[1],o=i[0],s=n-o;return t===n&&e?t:((t-o)%s+s)%s+o}function l(){return!1}function c(t,i){var e=Math.pow(10,void 0===i?6:i);return Math.round(t*e)/e}function _(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function d(t){return _(t).split(/\s+/)}function p(t,i){for(var e in t.hasOwnProperty("options")||(t.options=t.options?s(t.options):{}),i)t.options[e]=i[e];return t.options}function m(t,i,e){var n=[];for(var o in t)n.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(i&&-1!==i.indexOf("?")?"&":"?")+n.join("&")}var f=/\{ *([\w_-]+) *\}/g;function g(t,n){return t.replace(f,function(t,i){var e=n[i];if(void 0===e)throw new Error("No value provided for variable "+t);return"function"==typeof e&&(e=e(n)),e})}var v=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function y(t,i){for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1}var x="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function w(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var P=0;function b(t){var i=+new Date,e=Math.max(0,16-(i-P));return P=i+e,window.setTimeout(t,e)}var T=window.requestAnimationFrame||w("RequestAnimationFrame")||b,z=window.cancelAnimationFrame||w("CancelAnimationFrame")||w("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function M(t,i,e){if(!e||T!==b)return T.call(window,a(t,i));t.call(i)}function C(t){t&&z.call(window,t)}var S=(Object.freeze||Object)({freeze:i,extend:h,create:s,bind:a,lastId:n,stamp:u,throttle:o,wrapNum:r,falseFn:l,formatNum:c,trim:_,splitWords:d,setOptions:p,getParamString:m,template:g,isArray:v,indexOf:y,emptyImageUrl:x,requestFn:T,cancelFn:z,requestAnimFrame:M,cancelAnimFrame:C});function E(){}E.extend=function(t){function i(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()}var e=i.__super__=this.prototype,n=s(e);for(var o in(n.constructor=i).prototype=n,this)this.hasOwnProperty(o)&&"prototype"!==o&&"__super__"!==o&&(i[o]=this[o]);return t.statics&&(h(i,t.statics),delete t.statics),t.includes&&(function(t){if("undefined"==typeof L||!L||!L.Mixin)return;t=v(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}(t.includes),h.apply(null,[n].concat(t.includes)),delete t.includes),n.options&&(t.options=h(s(n.options),t.options)),h(n,t),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){e.callInitHooks&&e.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=n._initHooks.length;t<i;t++)n._initHooks[t].call(this)}},i},E.include=function(t){return h(this.prototype,t),this},E.mergeOptions=function(t){return h(this.prototype.options,t),this},E.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};var Z={on:function(t,i,e){if("object"==typeof t)for(var n in t)this._on(n,t[n],i);else for(var o=0,s=(t=d(t)).length;o<s;o++)this._on(t[o],i,e);return this},off:function(t,i,e){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],i);else for(var o=0,s=(t=d(t)).length;o<s;o++)this._off(t[o],i,e);else delete this._events;return this},_on:function(t,i,e){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),e===this&&(e=void 0);for(var o={fn:i,ctx:e},s=n,r=0,a=s.length;r<a;r++)if(s[r].fn===i&&s[r].ctx===e)return;s.push(o)},_off:function(t,i,e){var n,o,s;if(this._events&&(n=this._events[t]))if(i){if(e===this&&(e=void 0),n)for(o=0,s=n.length;o<s;o++){var r=n[o];if(r.ctx===e&&r.fn===i)return r.fn=l,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(o,1)}}else{for(o=0,s=n.length;o<s;o++)n[o].fn=l;delete this._events[t]}},fire:function(t,i,e){if(!this.listens(t,e))return this;var n=h({},i,{type:t,target:this,sourceTarget:i&&i.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,r=o.length;s<r;s++){var a=o[s];a.fn.call(a.ctx||this,n)}this._firingCount--}}return e&&this._propagateEvent(n),this},listens:function(t,i){var e=this._events&&this._events[t];if(e&&e.length)return!0;if(i)for(var n in this._eventParents)if(this._eventParents[n].listens(t,i))return!0;return!1},once:function(t,i,e){if("object"==typeof t){for(var n in t)this.once(n,t[n],i);return this}var o=a(function(){this.off(t,i,e).off(t,o,e)},this);return this.on(t,i,e).on(t,o,e)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[u(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[u(t)],this},_propagateEvent:function(t){for(var i in this._eventParents)this._eventParents[i].fire(t.type,h({layer:t.target,propagatedFrom:t.target},t),!0)}};Z.addEventListener=Z.on,Z.removeEventListener=Z.clearAllEventListeners=Z.off,Z.addOneTimeEventListener=Z.once,Z.fireEvent=Z.fire,Z.hasEventListeners=Z.listens;var k=E.extend(Z);function B(t,i,e){this.x=e?Math.round(t):t,this.y=e?Math.round(i):i}var A=Math.trunc||function(t){return 0<t?Math.floor(t):Math.ceil(t)};function I(t,i,e){return t instanceof B?t:v(t)?new B(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new B(t.x,t.y):new B(t,i,e)}function O(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function R(t,i){return!t||t instanceof O?t:new O(t,i)}function N(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function D(t,i){return t instanceof N?t:new N(t,i)}function j(t,i,e){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=+t,this.lng=+i,void 0!==e&&(this.alt=+e)}function W(t,i,e){return t instanceof j?t:v(t)&&"object"!=typeof t[0]?3===t.length?new j(t[0],t[1],t[2]):2===t.length?new j(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new j(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===i?null:new j(t,i,e)}B.prototype={clone:function(){return new B(this.x,this.y)},add:function(t){return this.clone()._add(I(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(I(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new B(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new B(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=A(this.x),this.y=A(this.y),this},distanceTo:function(t){var i=(t=I(t)).x-this.x,e=t.y-this.y;return Math.sqrt(i*i+e*e)},equals:function(t){return(t=I(t)).x===this.x&&t.y===this.y},contains:function(t){return t=I(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+c(this.x)+", "+c(this.y)+")"}},O.prototype={extend:function(t){return t=I(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new B((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new B(this.min.x,this.max.y)},getTopRight:function(){return new B(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,e;return(t="number"==typeof t[0]||t instanceof B?I(t):R(t))instanceof O?(i=t.min,e=t.max):i=e=t,i.x>=this.min.x&&e.x<=this.max.x&&i.y>=this.min.y&&e.y<=this.max.y},intersects:function(t){t=R(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>=i.x&&n.x<=e.x,r=o.y>=i.y&&n.y<=e.y;return s&&r},overlaps:function(t){t=R(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>i.x&&n.x<e.x,r=o.y>i.y&&n.y<e.y;return s&&r},isValid:function(){return!(!this.min||!this.max)}},N.prototype={extend:function(t){var i,e,n=this._southWest,o=this._northEast;if(t instanceof j)e=i=t;else{if(!(t instanceof N))return t?this.extend(W(t)||D(t)):this;if(i=t._southWest,e=t._northEast,!i||!e)return this}return n||o?(n.lat=Math.min(i.lat,n.lat),n.lng=Math.min(i.lng,n.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new j(i.lat,i.lng),this._northEast=new j(e.lat,e.lng)),this},pad:function(t){var i=this._southWest,e=this._northEast,n=Math.abs(i.lat-e.lat)*t,o=Math.abs(i.lng-e.lng)*t;return new N(new j(i.lat-n,i.lng-o),new j(e.lat+n,e.lng+o))},getCenter:function(){return new j((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new j(this.getNorth(),this.getWest())},getSouthEast:function(){return new j(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof j||"lat"in t?W(t):D(t);var i,e,n=this._southWest,o=this._northEast;return t instanceof N?(i=t.getSouthWest(),e=t.getNorthEast()):i=e=t,i.lat>=n.lat&&e.lat<=o.lat&&i.lng>=n.lng&&e.lng<=o.lng},intersects:function(t){t=D(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=i.lat&&n.lat<=e.lat,r=o.lng>=i.lng&&n.lng<=e.lng;return s&&r},overlaps:function(t){t=D(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>i.lat&&n.lat<e.lat,r=o.lng>i.lng&&n.lng<e.lng;return s&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,i){return!!t&&(t=D(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i))},isValid:function(){return!(!this._southWest||!this._northEast)}};var H,F={latLngToPoint:function(t,i){var e=this.projection.project(t),n=this.scale(i);return this.transformation._transform(e,n)},pointToLatLng:function(t,i){var e=this.scale(i),n=this.transformation.untransform(t,e);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,e=this.scale(t);return new O(this.transformation.transform(i.min,e),this.transformation.transform(i.max,e))},infinite:!(j.prototype={equals:function(t,i){return!!t&&(t=W(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===i?1e-9:i))},toString:function(t){return"LatLng("+c(this.lat,t)+", "+c(this.lng,t)+")"},distanceTo:function(t){return U.distance(this,W(t))},wrap:function(){return U.wrapLatLng(this)},toBounds:function(t){var i=180*t/40075017,e=i/Math.cos(Math.PI/180*this.lat);return D([this.lat-i,this.lng-e],[this.lat+i,this.lng+e])},clone:function(){return new j(this.lat,this.lng,this.alt)}}),wrapLatLng:function(t){var i=this.wrapLng?r(t.lng,this.wrapLng,!0):t.lng;return new j(this.wrapLat?r(t.lat,this.wrapLat,!0):t.lat,i,t.alt)},wrapLatLngBounds:function(t){var i=t.getCenter(),e=this.wrapLatLng(i),n=i.lat-e.lat,o=i.lng-e.lng;if(0==n&&0==o)return t;var s=t.getSouthWest(),r=t.getNorthEast();return new N(new j(s.lat-n,s.lng-o),new j(r.lat-n,r.lng-o))}},U=h({},F,{wrapLng:[-180,180],R:6371e3,distance:function(t,i){var e=Math.PI/180,n=t.lat*e,o=i.lat*e,s=Math.sin((i.lat-t.lat)*e/2),r=Math.sin((i.lng-t.lng)*e/2),a=s*s+Math.cos(n)*Math.cos(o)*r*r,h=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*h}}),V=6378137,q={R:V,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,e=this.MAX_LATITUDE,n=Math.max(Math.min(e,t.lat),-e),o=Math.sin(n*i);return new B(this.R*t.lng*i,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var i=180/Math.PI;return new j((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:(H=V*Math.PI,new O([-H,-H],[H,H]))};function G(t,i,e,n){if(v(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=i,this._c=e,this._d=n}function K(t,i,e,n){return new G(t,i,e,n)}G.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new B((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};var Y,X=h({},U,{code:"EPSG:3857",projection:q,transformation:(Y=.5/(Math.PI*q.R),K(Y,.5,-Y,.5))}),J=h({},X,{code:"EPSG:900913"});function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t,i){var e,n,o,s,r,a,h="";for(e=0,o=t.length;e<o;e++){for(n=0,s=(r=t[e]).length;n<s;n++)h+=(n?"L":"M")+(a=r[n]).x+" "+a.y;h+=i?Zt?"z":"x":""}return h||"M0 0"}var tt=document.documentElement.style,it="ActiveXObject"in window,et=it&&!document.addEventListener,nt="msLaunchUri"in navigator&&!("documentMode"in document),ot=Bt("webkit"),st=Bt("android"),rt=Bt("android 2")||Bt("android 3"),at=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ht=st&&Bt("Google")&&at<537&&!("AudioNode"in window),ut=!!window.opera,lt=Bt("chrome"),ct=Bt("gecko")&&!ot&&!ut&&!it,_t=!lt&&Bt("safari"),dt=Bt("phantom"),pt="OTransition"in tt,mt=0===navigator.platform.indexOf("Win"),ft=it&&"transition"in tt,gt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!rt,vt="MozPerspective"in tt,yt=!window.L_DISABLE_3D&&(ft||gt||vt)&&!pt&&!dt,xt="undefined"!=typeof orientation||Bt("mobile"),wt=xt&&ot,Pt=xt&&gt,Lt=!window.PointerEvent&&window.MSPointerEvent,bt=!(ot||!window.PointerEvent&&!Lt),Tt=!window.L_NO_TOUCH&&(bt||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),zt=xt&&ut,Mt=xt&&ct,Ct=1<(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI),St=function(){var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",l,i),window.removeEventListener("testPassiveEventSupport",l,i)}catch(t){}return t},Et=!!document.createElement("canvas").getContext,Zt=!(!document.createElementNS||!$("svg").createSVGRect),kt=!Zt&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}();function Bt(t){return 0<=navigator.userAgent.toLowerCase().indexOf(t)}var At=(Object.freeze||Object)({ie:it,ielt9:et,edge:nt,webkit:ot,android:st,android23:rt,androidStock:ht,opera:ut,chrome:lt,gecko:ct,safari:_t,phantom:dt,opera12:pt,win:mt,ie3d:ft,webkit3d:gt,gecko3d:vt,any3d:yt,mobile:xt,mobileWebkit:wt,mobileWebkit3d:Pt,msPointer:Lt,pointer:bt,touch:Tt,mobileOpera:zt,mobileGecko:Mt,retina:Ct,passiveEvents:St,canvas:Et,svg:Zt,vml:kt}),It=Lt?"MSPointerDown":"pointerdown",Ot=Lt?"MSPointerMove":"pointermove",Rt=Lt?"MSPointerUp":"pointerup",Nt=Lt?"MSPointerCancel":"pointercancel",Dt=["INPUT","SELECT","OPTION"],jt={},Wt=!1,Ht=0;function Ft(t,i,e,n){return"touchstart"===i?function(t,i,e){var n=a(function(t){if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(Dt.indexOf(t.target.tagName)<0))return;ji(t)}Gt(t,i)});t["_leaflet_touchstart"+e]=n,t.addEventListener(It,n,!1),Wt||(document.documentElement.addEventListener(It,Ut,!0),document.documentElement.addEventListener(Ot,Vt,!0),document.documentElement.addEventListener(Rt,qt,!0),document.documentElement.addEventListener(Nt,qt,!0),Wt=!0)}(t,e,n):"touchmove"===i?function(t,i,e){function n(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&Gt(t,i)}t["_leaflet_touchmove"+e]=n,t.addEventListener(Ot,n,!1)}(t,e,n):"touchend"===i&&function(t,i,e){function n(t){Gt(t,i)}t["_leaflet_touchend"+e]=n,t.addEventListener(Rt,n,!1),t.addEventListener(Nt,n,!1)}(t,e,n),this}function Ut(t){jt[t.pointerId]=t,Ht++}function Vt(t){jt[t.pointerId]&&(jt[t.pointerId]=t)}function qt(t){delete jt[t.pointerId],Ht--}function Gt(t,i){for(var e in t.touches=[],jt)t.touches.push(jt[e]);t.changedTouches=[t],i(t)}var Kt=Lt?"MSPointerDown":bt?"pointerdown":"touchstart",Yt=Lt?"MSPointerUp":bt?"pointerup":"touchend",Xt="_leaflet_";function Jt(t,o,i){var s,r,a=!1;function e(t){var i;if(bt){if(!nt||"mouse"===t.pointerType)return;i=Ht}else i=t.touches.length;if(!(1<i)){var e=Date.now(),n=e-(s||e);r=t.touches?t.touches[0]:t,a=0<n&&n<=250,s=e}}function n(t){if(a&&!r.cancelBubble){if(bt){if(!nt||"mouse"===t.pointerType)return;var i,e,n={};for(e in r)i=r[e],n[e]=i&&i.bind?i.bind(r):i;r=n}r.type="dblclick",r.button=0,o(r),s=null}}return t[Xt+Kt+i]=e,t[Xt+Yt+i]=n,t[Xt+"dblclick"+i]=o,t.addEventListener(Kt,e,!!St&&{passive:!1}),t.addEventListener(Yt,n,!!St&&{passive:!1}),t.addEventListener("dblclick",o,!1),this}function $t(t,i){var e=t[Xt+Kt+i],n=t[Xt+Yt+i],o=t[Xt+"dblclick"+i];return t.removeEventListener(Kt,e,!!St&&{passive:!1}),t.removeEventListener(Yt,n,!!St&&{passive:!1}),nt||t.removeEventListener("dblclick",o,!1),this}var Qt,ti,ii,ei,ni,oi=xi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),si=xi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ri="webkitTransition"===si||"OTransition"===si?si+"End":"transitionend";function ai(t){return"string"==typeof t?document.getElementById(t):t}function hi(t,i){var e=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!e||"auto"===e)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);e=n?n[i]:null}return"auto"===e?null:e}function ui(t,i,e){var n=document.createElement(t);return n.className=i||"",e&&e.appendChild(n),n}function li(t){var i=t.parentNode;i&&i.removeChild(t)}function ci(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function _i(t){var i=t.parentNode;i&&i.lastChild!==t&&i.appendChild(t)}function di(t){var i=t.parentNode;i&&i.firstChild!==t&&i.insertBefore(t,i.firstChild)}function pi(t,i){if(void 0!==t.classList)return t.classList.contains(i);var e=vi(t);return 0<e.length&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e)}function mi(t,i){if(void 0!==t.classList)for(var e=d(i),n=0,o=e.length;n<o;n++)t.classList.add(e[n]);else if(!pi(t,i)){var s=vi(t);gi(t,(s?s+" ":"")+i)}}function fi(t,i){void 0!==t.classList?t.classList.remove(i):gi(t,_((" "+vi(t)+" ").replace(" "+i+" "," ")))}function gi(t,i){void 0===t.className.baseVal?t.className=i:t.className.baseVal=i}function vi(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}function yi(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&function(t,i){var e=!1,n="DXImageTransform.Microsoft.Alpha";try{e=t.filters.item(n)}catch(t){if(1===i)return}i=Math.round(100*i),e?(e.Enabled=100!==i,e.Opacity=i):t.style.filter+=" progid:"+n+"(opacity="+i+")"}(t,i)}function xi(t){for(var i=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in i)return t[e];return!1}function wi(t,i,e){var n=i||new B(0,0);t.style[oi]=(ft?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(e?" scale("+e+")":"")}function Pi(t,i){t._leaflet_pos=i,yt?wi(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}function Li(t){return t._leaflet_pos||new B(0,0)}if("onselectstart"in document)Qt=function(){ki(window,"selectstart",ji)},ti=function(){Ai(window,"selectstart",ji)};else{var bi=xi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Qt=function(){if(bi){var t=document.documentElement.style;ii=t[bi],t[bi]="none"}},ti=function(){bi&&(document.documentElement.style[bi]=ii,ii=void 0)}}function Ti(){ki(window,"dragstart",ji)}function zi(){Ai(window,"dragstart",ji)}function Mi(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(Ci(),ni=(ei=t).style.outline,t.style.outline="none",ki(window,"keydown",Ci))}function Ci(){ei&&(ei.style.outline=ni,ni=ei=void 0,Ai(window,"keydown",Ci))}function Si(t){for(;!((t=t.parentNode).offsetWidth&&t.offsetHeight||t===document.body););return t}function Ei(t){var i=t.getBoundingClientRect();return{x:i.width/t.offsetWidth||1,y:i.height/t.offsetHeight||1,boundingClientRect:i}}var Zi=(Object.freeze||Object)({TRANSFORM:oi,TRANSITION:si,TRANSITION_END:ri,get:ai,getStyle:hi,create:ui,remove:li,empty:ci,toFront:_i,toBack:di,hasClass:pi,addClass:mi,removeClass:fi,setClass:gi,getClass:vi,setOpacity:yi,testProp:xi,setTransform:wi,setPosition:Pi,getPosition:Li,disableTextSelection:Qt,enableTextSelection:ti,disableImageDrag:Ti,enableImageDrag:zi,preventOutline:Mi,restoreOutline:Ci,getSizedParentNode:Si,getScale:Ei});function ki(t,i,e,n){if("object"==typeof i)for(var o in i)Ii(t,o,i[o],e);else for(var s=0,r=(i=d(i)).length;s<r;s++)Ii(t,i[s],e,n);return this}var Bi="_leaflet_events";function Ai(t,i,e,n){if("object"==typeof i)for(var o in i)Oi(t,o,i[o],e);else if(i)for(var s=0,r=(i=d(i)).length;s<r;s++)Oi(t,i[s],e,n);else{for(var a in t[Bi])Oi(t,a,t[Bi][a]);delete t[Bi]}return this}function Ii(i,t,e,n){var o=t+u(e)+(n?"_"+u(n):"");if(i[Bi]&&i[Bi][o])return this;var s=function(t){return e.call(n||i,t||window.event)},r=s;bt&&0===t.indexOf("touch")?Ft(i,t,s,o):!Tt||"dblclick"!==t||bt&&lt?"addEventListener"in i?"mousewheel"===t?i.addEventListener("onwheel"in i?"wheel":"mousewheel",s,!!St&&{passive:!1}):"mouseenter"===t||"mouseleave"===t?(s=function(t){t=t||window.event,Yi(i,t)&&r(t)},i.addEventListener("mouseenter"===t?"mouseover":"mouseout",s,!1)):("click"===t&&st&&(s=function(t){!function(t,i){var e=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=Vi&&e-Vi;if(n&&100<n&&n<500||t.target._simulatedClick&&!t._simulated)return Wi(t);Vi=e,i(t)}(t,r)}),i.addEventListener(t,s,!1)):"attachEvent"in i&&i.attachEvent("on"+t,s):Jt(i,s,o),i[Bi]=i[Bi]||{},i[Bi][o]=s}function Oi(t,i,e,n){var o=i+u(e)+(n?"_"+u(n):""),s=t[Bi]&&t[Bi][o];if(!s)return this;bt&&0===i.indexOf("touch")?function(t,i,e){var n=t["_leaflet_"+i+e];"touchstart"===i?t.removeEventListener(It,n,!1):"touchmove"===i?t.removeEventListener(Ot,n,!1):"touchend"===i&&(t.removeEventListener(Rt,n,!1),t.removeEventListener(Nt,n,!1))}(t,i,o):!Tt||"dblclick"!==i||bt&&lt?"removeEventListener"in t?"mousewheel"===i?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",s,!!St&&{passive:!1}):t.removeEventListener("mouseenter"===i?"mouseover":"mouseleave"===i?"mouseout":i,s,!1):"detachEvent"in t&&t.detachEvent("on"+i,s):$t(t,o),t[Bi][o]=null}function Ri(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,Ki(t),this}function Ni(t){return Ii(t,"mousewheel",Ri),this}function Di(t){return ki(t,"mousedown touchstart dblclick",Ri),Ii(t,"click",Gi),this}function ji(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Wi(t){return ji(t),Ri(t),this}function Hi(t,i){if(!i)return new B(t.clientX,t.clientY);var e=Ei(i),n=e.boundingClientRect;return new B((t.clientX-n.left)/e.x-i.clientLeft,(t.clientY-n.top)/e.y-i.clientTop)}var Fi=mt&&lt?2*window.devicePixelRatio:ct?window.devicePixelRatio:1;function Ui(t){return nt?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/Fi:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}var Vi,qi={};function Gi(t){qi[t.type]=!0}function Ki(t){var i=qi[t.type];return qi[t.type]=!1,i}function Yi(t,i){var e=i.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}var Xi=(Object.freeze||Object)({on:ki,off:Ai,stopPropagation:Ri,disableScrollPropagation:Ni,disableClickPropagation:Di,preventDefault:ji,stop:Wi,getMousePosition:Hi,getWheelDelta:Ui,fakeStop:Gi,skipped:Ki,isExternalTarget:Yi,addListener:ki,removeListener:Ai}),Ji=k.extend({run:function(t,i,e,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Li(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=M(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,e=1e3*this._duration;i<e?this._runFrame(this._easeOut(i/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var e=this._startPos.add(this._offset.multiplyBy(t));i&&e._round(),Pi(this._el,e),this.fire("step")},_complete:function(){C(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),$i=k.extend({options:{crs:X,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,i){i=p(this,i),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=a(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),void 0!==i.zoom&&(this._zoom=this._limitZoom(i.zoom)),i.center&&void 0!==i.zoom&&this.setView(W(i.center),i.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=si&&yt&&!zt&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ki(this._proxy,ri,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,i,e){if((i=void 0===i?this._zoom:this._limitZoom(i),t=this._limitCenter(W(t),i,this.options.maxBounds),e=e||{},this._stop(),this._loaded&&!e.reset&&!0!==e)&&(void 0!==e.animate&&(e.zoom=h({animate:e.animate},e.zoom),e.pan=h({animate:e.animate,duration:e.duration},e.pan)),this._zoom!==i?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,i,e.zoom):this._tryAnimatedPan(t,e.pan)))return clearTimeout(this._sizeTimer),this;return this._resetView(t,i),this},setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},zoomIn:function(t,i){return t=t||(yt?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},zoomOut:function(t,i){return t=t||(yt?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},setZoomAround:function(t,i,e){var n=this.getZoomScale(i),o=this.getSize().divideBy(2),s=(t instanceof B?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),r=this.containerPointToLatLng(o.add(s));return this.setView(r,i,{zoom:e})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():D(t);var e=I(i.paddingTopLeft||i.padding||[0,0]),n=I(i.paddingBottomRight||i.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(n));if((o="number"==typeof i.maxZoom?Math.min(i.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(e).divideBy(2),r=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(r.add(a).divideBy(2).add(s),o),zoom:o}},fitBounds:function(t,i){if(!(t=D(t)).isValid())throw new Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,i);return this.setView(e.center,e.zoom,i)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,i){return this.setView(t,this._zoom,{pan:i})},panBy:function(t,i){if(i=i||{},!(t=I(t).round()).x&&!t.y)return this.fire("moveend");if(!0!==i.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Ji,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),!1!==i.animate){mi(this._mapPane,"leaflet-pan-anim");var e=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,e,i.duration||.25,i.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(n,o,t){if(!1===(t=t||{}).animate||!yt)return this.setView(n,o,t);this._stop();var s=this.project(this.getCenter()),r=this.project(n),i=this.getSize(),a=this._zoom;n=W(n),o=void 0===o?a:o;var h=Math.max(i.x,i.y),u=h*this.getZoomScale(a,o),l=r.distanceTo(s)||1,c=1.42,_=c*c;function e(t){var i=(u*u-h*h+(t?-1:1)*_*_*l*l)/(2*(t?u:h)*_*l),e=Math.sqrt(i*i+1)-i;return e<1e-9?-18:Math.log(e)}function d(t){return(Math.exp(t)-Math.exp(-t))/2}function p(t){return(Math.exp(t)+Math.exp(-t))/2}var m=e(0);function f(t){return h*(p(m)*function(t){return d(t)/p(t)}(m+c*t)-d(m))/_}var g=Date.now(),v=(e(1)-m)/c,y=t.duration?1e3*t.duration:1e3*v*.8;return this._moveStart(!0,t.noMoveStart),function t(){var i=(Date.now()-g)/y,e=function(t){return 1-Math.pow(1-t,1.5)}(i)*v;i<=1?(this._flyToFrame=M(t,this),this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(e)/l)),a),this.getScaleZoom(h/function(t){return h*(p(m)/p(m+c*t))}(e),a),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}.call(this),this},flyToBounds:function(t,i){var e=this._getBoundsCenterZoom(t,i);return this.flyTo(e.center,e.zoom,i)},setMaxBounds:function(t){return(t=D(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){var i=this.options.minZoom;return this.options.minZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var i=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,i){this._enforcingBounds=!0;var e=this.getCenter(),n=this._limitCenter(e,this._zoom,D(t));return e.equals(n)||this.panTo(n,i),this._enforcingBounds=!1,this},panInside:function(t,i){var e=I((i=i||{}).paddingTopLeft||i.padding||[0,0]),n=I(i.paddingBottomRight||i.padding||[0,0]),o=this.getCenter(),s=this.project(o),r=this.project(t),a=this.getPixelBounds(),h=a.getSize().divideBy(2),u=R([a.min.add(e),a.max.subtract(n)]);if(!u.contains(r)){this._enforcingBounds=!0;var l=s.subtract(r),c=I(r.x+l.x,r.y+l.y);(r.x<u.min.x||r.x>u.max.x)&&(c.x=s.x-l.x,0<l.x?c.x+=h.x-e.x:c.x-=h.x-n.x),(r.y<u.min.y||r.y>u.max.y)&&(c.y=s.y-l.y,0<l.y?c.y+=h.y-e.y:c.y-=h.y-n.y),this.panTo(this.unproject(c),i),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=h({animate:!1,pan:!0},!0===t?{animate:!0}:t);var i=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var e=this.getSize(),n=i.divideBy(2).round(),o=e.divideBy(2).round(),s=n.subtract(o);return s.x||s.y?(t.animate&&t.pan?this.panBy(s):(t.pan&&this._rawPanBy(s),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(a(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:i,newSize:e})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=h({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var i=a(this._handleGeolocationResponse,this),e=a(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(i,e,t):navigator.geolocation.getCurrentPosition(i,e,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var i=t.code,e=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+e+"."})},_handleGeolocationResponse:function(t){var i=new j(t.coords.latitude,t.coords.longitude),e=i.toBounds(2*t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(e);this.setView(i,n.maxZoom?Math.min(o,n.maxZoom):o)}var s={latlng:i,bounds:e,timestamp:t.timestamp};for(var r in t.coords)"number"==typeof t.coords[r]&&(s[r]=t.coords[r]);this.fire("locationfound",s)},addHandler:function(t,i){if(!i)return this;var e=this[t]=new i(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}var t;for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),li(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(C(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)li(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,i){var e=ui("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new N(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,i,e){t=D(t),e=I(e||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(e),u=R(this.project(a,n),this.project(r,n)).getSize(),l=yt?this.options.zoomSnap:1,c=h.x/u.x,_=h.y/u.y,d=i?Math.max(c,_):Math.min(c,_);return n=this.getScaleZoom(d,n),l&&(n=Math.round(n/(l/100))*(l/100),n=i?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new B(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,i){var e=this._getTopLeftPoint(t,i);return new O(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,i){var e=this.options.crs;return i=void 0===i?this._zoom:i,e.scale(t)/e.scale(i)},getScaleZoom:function(t,i){var e=this.options.crs;i=void 0===i?this._zoom:i;var n=e.zoom(t*e.scale(i));return isNaN(n)?1/0:n},project:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.latLngToPoint(W(t),i)},unproject:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.pointToLatLng(I(t),i)},layerPointToLatLng:function(t){var i=I(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){return this.project(W(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(W(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(D(t))},distance:function(t,i){return this.options.crs.distance(W(t),W(i))},containerPointToLayerPoint:function(t){return I(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return I(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(I(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(W(t)))},mouseEventToContainerPoint:function(t){return Hi(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=ai(t);if(!i)throw new Error("Map container not found.");if(i._leaflet_id)throw new Error("Map container is already initialized.");ki(i,"scroll",this._onScroll,this),this._containerId=u(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&yt,mi(t,"leaflet-container"+(Tt?" leaflet-touch":"")+(Ct?" leaflet-retina":"")+(et?" leaflet-oldie":"")+(_t?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=hi(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Pi(this._mapPane,new B(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(mi(t.markerPane,"leaflet-zoom-hide"),mi(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,i){Pi(this._mapPane,new B(0,0));var e=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var n=this._zoom!==i;this._moveStart(n,!1)._move(t,i)._moveEnd(n),this.fire("viewreset"),e&&this.fire("load")},_moveStart:function(t,i){return t&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(t,i,e){void 0===i&&(i=this._zoom);var n=this._zoom!==i;return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||e&&e.pinch)&&this.fire("zoom",e),this.fire("move",e)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return C(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Pi(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={};var i=t?Ai:ki;i((this._targets[u(this._container)]=this)._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),yt&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){C(this._resizeRequest),this._resizeRequest=M(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var e,n=[],o="mouseout"===i||"mouseover"===i,s=t.target||t.srcElement,r=!1;s;){if((e=this._targets[u(s)])&&("click"===i||"preclick"===i)&&!t._simulated&&this._draggableMoved(e)){r=!0;break}if(e&&e.listens(i,!0)){if(o&&!Yi(s,t))break;if(n.push(e),o)break}if(s===this._container)break;s=s.parentNode}return n.length||r||o||!Yi(s,t)||(n=[this]),n},_handleDOMEvent:function(t){if(this._loaded&&!Ki(t)){var i=t.type;"mousedown"!==i&&"keypress"!==i&&"keyup"!==i&&"keydown"!==i||Mi(t.target||t.srcElement),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,i,e){if("click"===t.type){var n=h({},t);n.type="preclick",this._fireDOMEvent(n,n.type,e)}if(!t._stopped&&(e=(e||[]).concat(this._findEventTargets(t,i))).length){var o=e[0];"contextmenu"===i&&o.listens(i,!0)&&ji(t);var s={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var r=o.getLatLng&&(!o._radius||o._radius<=10);s.containerPoint=r?this.latLngToContainerPoint(o.getLatLng()):this.mouseEventToContainerPoint(t),s.layerPoint=this.containerPointToLayerPoint(s.containerPoint),s.latlng=r?o.getLatLng():this.layerPointToLatLng(s.layerPoint)}for(var a=0;a<e.length;a++)if(e[a].fire(i,s,!0),s.originalEvent._stopped||!1===e[a].options.bubblingMouseEvents&&-1!==y(this._mouseEvents,i))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},_getMapPanePos:function(){return Li(this._mapPane)||new B(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){return(t&&void 0!==i?this._getNewPixelOrigin(t,i):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var e=this.getSize()._divideBy(2);return this.project(t,i)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return this.project(t,i)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return R([this.project(t.getSouthWest(),i)._subtract(n),this.project(t.getNorthWest(),i)._subtract(n),this.project(t.getSouthEast(),i)._subtract(n),this.project(t.getNorthEast(),i)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,i,e){if(!e)return t;var n=this.project(t,i),o=this.getSize().divideBy(2),s=new O(n.subtract(o),n.add(o)),r=this._getBoundsOffset(s,e,i);return r.round().equals([0,0])?t:this.unproject(n.add(r),i)},_limitOffset:function(t,i){if(!i)return t;var e=this.getPixelBounds(),n=new O(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(n,i))},_getBoundsOffset:function(t,i,e){var n=R(this.project(i.getNorthEast(),e),this.project(i.getSouthWest(),e)),o=n.min.subtract(t.min),s=n.max.subtract(t.max);return new B(this._rebound(o.x,-s.x),this._rebound(o.y,-s.y))},_rebound:function(t,i){return 0<t+i?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),e=this.getMaxZoom(),n=yt?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(i,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){fi(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){var e=this._getCenterOffset(t)._trunc();return!(!0!==(i&&i.animate)&&!this.getSize().contains(e))&&(this.panBy(e,i),!0)},_createAnimProxy:function(){var t=this._proxy=ui("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var i=oi,e=this._proxy.style[i];wi(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){li(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),i=this.getZoom();wi(this._proxy,this.project(t,i),this.getZoomScale(i,1))},_catchTransitionEnd:function(t){this._animatingZoom&&0<=t.propertyName.indexOf("transform")&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,e){if(this._animatingZoom)return!0;if(e=e||{},!this._zoomAnimated||!1===e.animate||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(i),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==e.animate&&!this.getSize().contains(o))&&(M(function(){this._moveStart(!0,!1)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,e,n){this._mapPane&&(e&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=i,mi(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:i,noUpdate:n}),setTimeout(a(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&fi(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),M(function(){this._moveEnd(!0)},this))}});function Qi(t){return new te(t)}var te=E.extend({options:{position:"topright"},initialize:function(t){p(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),e=this.getPosition(),n=t._controlCorners[e];return mi(i,"leaflet-control"),-1!==e.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this._map.on("unload",this.remove,this),this},remove:function(){return this._map&&(li(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){this._map&&t&&0<t.screenX&&0<t.screenY&&this._map.getContainer().focus()}});$i.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",s=this._controlContainer=ui("div",o+"control-container",this._container);function t(t,i){var e=o+t+" "+o+i;n[t+i]=ui("div",e,s)}t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)li(this._controlCorners[t]);li(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var ie=te.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,i,e,n){return e<n?-1:n<e?1:0}},initialize:function(t,i,e){for(var n in p(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,t)this._addLayer(t[n],n);for(n in i)this._addLayer(i[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),(this._map=t).on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return te.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(u(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){mi(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(mi(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):fi(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return fi(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=ui("div",t),e=this.options.collapsed;i.setAttribute("aria-haspopup",!0),Di(i),Ni(i);var n=this._section=ui("section",t+"-list");e&&(this._map.on("click",this.collapse,this),st||ki(i,{mouseenter:this.expand,mouseleave:this.collapse},this));var o=this._layersLink=ui("a",t+"-toggle",i);o.href="#",o.title="Layers",Tt?(ki(o,"click",Wi),ki(o,"click",this.expand,this)):ki(o,"focus",this.expand,this),e||this.expand(),this._baseLayersList=ui("div",t+"-base",n),this._separator=ui("div",t+"-separator",n),this._overlaysList=ui("div",t+"-overlays",n),i.appendChild(n)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&u(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,e){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:e}),this.options.sortLayers&&this._layers.sort(a(function(t,i){return this.options.sortFunction(t.layer,i.layer,t.name,i.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ci(this._baseLayersList),ci(this._overlaysList),this._layerControlInputs=[];var t,i,e,n,o=0;for(e=0;e<this._layers.length;e++)n=this._layers[e],this._addItem(n),i=i||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&1<o,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(u(t.target)),e=i.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;e&&this._map.fire(e,i)},_createRadioElement:function(t,i){var e='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=e,n.firstChild},_addItem:function(t){var i,e=document.createElement("label"),n=this._map.hasLayer(t.layer);t.overlay?((i=document.createElement("input")).type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=n):i=this._createRadioElement("leaflet-base-layers_"+u(this),n),this._layerControlInputs.push(i),i.layerId=u(t.layer),ki(i,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;var s=document.createElement("div");return e.appendChild(s),s.appendChild(i),s.appendChild(o),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){var t,i,e=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=e.length-1;0<=s;s--)t=e[s],i=this._getLayer(t.layerId).layer,t.checked?n.push(i):t.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,i,e=this._layerControlInputs,n=this._map.getZoom(),o=e.length-1;0<=o;o--)t=e[o],i=this._getLayer(t.layerId).layer,t.disabled=void 0!==i.options.minZoom&&n<i.options.minZoom||void 0!==i.options.maxZoom&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),ee=te.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",e=ui("div",i+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,i+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,i+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,e,n,o){var s=ui("a",e,n);return s.innerHTML=t,s.href="#",s.title=i,s.setAttribute("role","button"),s.setAttribute("aria-label",i),Di(s),ki(s,"click",Wi),ki(s,"click",o,this),ki(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";fi(this._zoomInButton,i),fi(this._zoomOutButton,i),!this._disabled&&t._zoom!==t.getMinZoom()||mi(this._zoomOutButton,i),!this._disabled&&t._zoom!==t.getMaxZoom()||mi(this._zoomInButton,i)}});$i.mergeOptions({zoomControl:!0}),$i.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ee,this.addControl(this.zoomControl))});var ne=te.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var i="leaflet-control-scale",e=ui("div",i),n=this.options;return this._addScales(n,i+"-line",e),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),e},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,e){t.metric&&(this._mScale=ui("div",i,e)),t.imperial&&(this._iScale=ui("div",i,e))},_update:function(){var t=this._map,i=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),e=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,e,i/t)},_updateImperial:function(t){var i,e,n,o=3.2808399*t;5280<o?(i=o/5280,e=this._getRoundNum(i),this._updateScale(this._iScale,e+" mi",e/i)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,i,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),e=t/i;return i*(e=10<=e?10:5<=e?5:3<=e?3:2<=e?2:1)}}),oe=te.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){p(this,t),this._attributions={}},onAdd:function(t){for(var i in(t.attributionControl=this)._container=ui("div","leaflet-control-attribution"),Di(this._container),t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(" | ")}}});$i.mergeOptions({attributionControl:!0}),$i.addInitHook(function(){this.options.attributionControl&&(new oe).addTo(this)});te.Layers=ie,te.Zoom=ee,te.Scale=ne,te.Attribution=oe,Qi.layers=function(t,i,e){return new ie(t,i,e)},Qi.zoom=function(t){return new ee(t)},Qi.scale=function(t){return new ne(t)},Qi.attribution=function(t){return new oe(t)};var se=E.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},enabled:function(){return!!this._enabled}});se.addTo=function(t,i){return t.addHandler(i,this),this};var re,ae={Events:Z},he=Tt?"touchstart mousedown":"mousedown",ue={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},le={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},ce=k.extend({options:{clickTolerance:3},initialize:function(t,i,e,n){p(this,n),this._element=t,this._dragStartTarget=i||t,this._preventOutline=e},enable:function(){this._enabled||(ki(this._dragStartTarget,he,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ce._dragging===this&&this.finishDrag(),Ai(this._dragStartTarget,he,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!pi(this._element,"leaflet-zoom-anim")&&!(ce._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||((ce._dragging=this)._preventOutline&&Mi(this._element),Ti(),Qt(),this._moving)))){this.fire("down");var i=t.touches?t.touches[0]:t,e=Si(this._element);this._startPoint=new B(i.clientX,i.clientY),this._parentScale=Ei(e),ki(document,le[t.type],this._onMove,this),ki(document,ue[t.type],this._onUp,this)}},_onMove:function(t){if(!t._simulated&&this._enabled)if(t.touches&&1<t.touches.length)this._moved=!0;else{var i=t.touches&&1===t.touches.length?t.touches[0]:t,e=new B(i.clientX,i.clientY)._subtract(this._startPoint);(e.x||e.y)&&(Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,ji(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=Li(this._element).subtract(e),mi(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),mi(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,C(this._animRequest),this._lastEvent=t,this._animRequest=M(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Pi(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){for(var t in fi(document.body,"leaflet-dragging"),this._lastTarget&&(fi(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),le)Ai(document,le[t],this._onMove,this),Ai(document,ue[t],this._onUp,this);zi(),ti(),this._moved&&this._moving&&(C(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,ce._dragging=!1}});function _e(t,i){if(!i||!t.length)return t.slice();var e=i*i;return t=function(t,i){var e=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(e);n[0]=n[e-1]=1,function t(i,e,n,o,s){var r,a,h,u=0;for(a=o+1;a<=s-1;a++)h=ge(i[a],i[o],i[s],!0),u<h&&(r=a,u=h);n<u&&(e[r]=1,t(i,e,n,o,r),t(i,e,n,r,s))}(t,n,i,0,e-1);var o,s=[];for(o=0;o<e;o++)n[o]&&s.push(t[o]);return s}(t=function(t,i){for(var e=[t[0]],n=1,o=0,s=t.length;n<s;n++)r=t[n],a=t[o],void 0,h=a.x-r.x,u=a.y-r.y,i<h*h+u*u&&(e.push(t[n]),o=n);var r,a,h,u;o<s-1&&e.push(t[s-1]);return e}(t,e),e)}function de(t,i,e){return Math.sqrt(ge(t,i,e,!0))}function pe(t,i,e,n,o){var s,r,a,h=n?re:fe(t,e),u=fe(i,e);for(re=u;;){if(!(h|u))return[t,i];if(h&u)return!1;a=fe(r=me(t,i,s=h||u,e,o),e),s===h?(t=r,h=a):(i=r,u=a)}}function me(t,i,e,n,o){var s,r,a=i.x-t.x,h=i.y-t.y,u=n.min,l=n.max;return 8&e?(s=t.x+a*(l.y-t.y)/h,r=l.y):4&e?(s=t.x+a*(u.y-t.y)/h,r=u.y):2&e?(s=l.x,r=t.y+h*(l.x-t.x)/a):1&e&&(s=u.x,r=t.y+h*(u.x-t.x)/a),new B(s,r,o)}function fe(t,i){var e=0;return t.x<i.min.x?e|=1:t.x>i.max.x&&(e|=2),t.y<i.min.y?e|=4:t.y>i.max.y&&(e|=8),e}function ge(t,i,e,n){var o,s=i.x,r=i.y,a=e.x-s,h=e.y-r,u=a*a+h*h;return 0<u&&(1<(o=((t.x-s)*a+(t.y-r)*h)/u)?(s=e.x,r=e.y):0<o&&(s+=a*o,r+=h*o)),a=t.x-s,h=t.y-r,n?a*a+h*h:new B(s,r)}function ve(t){return!v(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function ye(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),ve(t)}var xe=(Object.freeze||Object)({simplify:_e,pointToSegmentDistance:de,closestPointOnSegment:function(t,i,e){return ge(t,i,e)},clipSegment:pe,_getEdgeIntersection:me,_getBitCode:fe,_sqClosestPointOnSegment:ge,isFlat:ve,_flat:ye});function we(t,i,e){var n,o,s,r,a,h,u,l,c,_=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=fe(t[o],i);for(r=0;r<4;r++){for(l=_[r],n=[],o=0,s=(u=t.length)-1;o<u;s=o++)a=t[o],h=t[s],a._code&l?h._code&l||((c=me(h,a,l,i,e))._code=fe(c,i),n.push(c)):(h._code&l&&((c=me(h,a,l,i,e))._code=fe(c,i),n.push(c)),n.push(a));t=n}return t}var Pe,Le=(Object.freeze||Object)({clipPolygon:we}),be={project:function(t){return new B(t.lng,t.lat)},unproject:function(t){return new j(t.y,t.x)},bounds:new O([-180,-90],[180,90])},Te={R:6378137,R_MINOR:6356752.314245179,bounds:new O([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var i=Math.PI/180,e=this.R,n=t.lat*i,o=this.R_MINOR/e,s=Math.sqrt(1-o*o),r=s*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),s/2);return n=-e*Math.log(Math.max(a,1e-10)),new B(t.lng*i*e,n)},unproject:function(t){for(var i,e=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,u=.1;h<15&&1e-7<Math.abs(u);h++)i=s*Math.sin(a),i=Math.pow((1-i)/(1+i),s/2),a+=u=Math.PI/2-2*Math.atan(r*i)-a;return new j(a*e,t.x*e/n)}},ze=(Object.freeze||Object)({LonLat:be,Mercator:Te,SphericalMercator:q}),Me=h({},U,{code:"EPSG:3395",projection:Te,transformation:(Pe=.5/(Math.PI*Te.R),K(Pe,.5,-Pe,.5))}),Ce=h({},U,{code:"EPSG:4326",projection:be,transformation:K(1/180,1,-1/180,.5)}),Se=h({},F,{projection:be,transformation:K(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var e=i.lng-t.lng,n=i.lat-t.lat;return Math.sqrt(e*e+n*n)},infinite:!0});F.Earth=U,F.EPSG3395=Me,F.EPSG3857=X,F.EPSG900913=J,F.EPSG4326=Ce,F.Simple=Se;var Ee=k.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[u(t)]=this},removeInteractiveTarget:function(t){return delete this._map._targets[u(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i=t.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var e=this.getEvents();i.on(e,this),this.once("remove",function(){i.off(e,this)},this)}this.onAdd(i),this.getAttribution&&i.attributionControl&&i.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),i.fire("layeradd",{layer:this})}}});$i.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var i=u(t);return this._layers[i]||((this._layers[i]=t)._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this},removeLayer:function(t){var i=u(t);return this._layers[i]&&(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},hasLayer:function(t){return!!t&&u(t)in this._layers},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},_addLayers:function(t){for(var i=0,e=(t=t?v(t)?t:[t]:[]).length;i<e;i++)this.addLayer(t[i])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[u(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=u(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-1/0,e=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=t===1/0?void 0:t,e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ze=Ee.extend({initialize:function(t,i){var e,n;if(p(this,i),this._layers={},t)for(e=0,n=t.length;e<n;e++)this.addLayer(t[e])},addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var i,e,n=Array.prototype.slice.call(arguments,1);for(i in this._layers)(e=this._layers[i])[t]&&e[t].apply(e,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return u(t)}}),ke=Ze.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ze.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ze.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new N;for(var i in this._layers){var e=this._layers[i];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),Be=E.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){p(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(e,i&&"IMG"===i.tagName?i:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,i){var e=this.options,n=e[i+"Size"];"number"==typeof n&&(n=[n,n]);var o=I(n),s=I("shadow"===i&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(e.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,i){return(i=i||document.createElement("img")).src=t,i},_getIconUrl:function(t){return Ct&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});var Ae=Be.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return Ae.imagePath||(Ae.imagePath=this._detectIconPath()),(this.options.imagePath||Ae.imagePath)+Be.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=ui("div","leaflet-default-icon-path",document.body),i=hi(t,"background-image")||hi(t,"backgroundImage");return document.body.removeChild(t),i=null===i||0!==i.indexOf("url")?"":i.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),Ie=se.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new ce(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),mi(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&fi(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var i=this._marker,e=i._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=Li(i._icon),r=e.getPixelBounds(),a=e.getPixelOrigin(),h=R(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));if(!h.contains(s)){var u=I((Math.max(h.max.x,s.x)-h.max.x)/(r.max.x-h.max.x)-(Math.min(h.min.x,s.x)-h.min.x)/(r.min.x-h.min.x),(Math.max(h.max.y,s.y)-h.max.y)/(r.max.y-h.max.y)-(Math.min(h.min.y,s.y)-h.min.y)/(r.min.y-h.min.y)).multiplyBy(n);e.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),Pi(i._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=M(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(C(this._panRequest),this._panRequest=M(this._adjustPan.bind(this,t)))},_onDrag:function(t){var i=this._marker,e=i._shadow,n=Li(i._icon),o=i._map.layerPointToLatLng(n);e&&Pi(e,n),i._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){C(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Oe=Ee.extend({options:{icon:new Ae,interactive:!0,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,i){p(this,i),this._latlng=W(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var i=this._latlng;return this._latlng=W(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),n=!1;e!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(e.title=t.title),"IMG"===e.tagName&&(e.alt=t.alt||"")),mi(e,i),t.keyboard&&(e.tabIndex="0"),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(mi(o,i),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),li(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&li(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&Pi(this._icon,t),this._shadow&&Pi(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(mi(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ie)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ie(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&yi(this._icon,t),this._shadow&&yi(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});var Re=Ee.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return p(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&t.hasOwnProperty("weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),Ne=Re.extend({options:{fill:!0,radius:10},initialize:function(t,i){p(this,i),this._latlng=W(t),this._radius=this.options.radius},setLatLng:function(t){var i=this._latlng;return this._latlng=W(t),this.redraw(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return Re.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,e=this._clickTolerance(),n=[t+e,i+e];this._pxBounds=new O(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});var De=Ne.extend({initialize:function(t,i,e){if("number"==typeof i&&(i=h({},e,{radius:i})),p(this,i),this._latlng=W(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new N(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Re.prototype.setStyle,_project:function(){var t=this._latlng.lng,i=this._latlng.lat,e=this._map,n=e.options.crs;if(n.distance===U.distance){var o=Math.PI/180,s=this._mRadius/U.R/o,r=e.project([i+s,t]),a=e.project([i-s,t]),h=r.add(a).divideBy(2),u=e.unproject(h).lat,l=Math.acos((Math.cos(s*o)-Math.sin(i*o)*Math.sin(u*o))/(Math.cos(i*o)*Math.cos(u*o)))/o;!isNaN(l)&&0!==l||(l=s/Math.cos(Math.PI/180*i)),this._point=h.subtract(e.getPixelOrigin()),this._radius=isNaN(l)?0:h.x-e.project([u,t-l]).x,this._radiusY=h.y-r.y}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=e.latLngToLayerPoint(this._latlng),this._radius=this._point.x-e.latLngToLayerPoint(c).x}this._updateBounds()}});var je=Re.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,i){p(this,i),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var i,e,n=1/0,o=null,s=ge,r=0,a=this._parts.length;r<a;r++)for(var h=this._parts[r],u=1,l=h.length;u<l;u++){var c=s(t,i=h[u-1],e=h[u],!0);c<n&&(n=c,o=s(t,i,e))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;for(i=t=0;t<h-1;t++)i+=a[t].distanceTo(a[t+1])/2;if(0===i)return this._map.layerPointToLatLng(a[0]);for(n=t=0;t<h-1;t++)if(o=a[t],s=a[t+1],i<(n+=e=o.distanceTo(s)))return r=(n-i)/e,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,i){return i=i||this._defaultShape(),t=W(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new N,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return ve(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var i=[],e=ve(t),n=0,o=t.length;n<o;n++)e?(i[n]=W(t[n]),this._bounds.extend(i[n])):i[n]=this._convertLatLngs(t[n]);return i},_project:function(){var t=new O;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),i=new B(t,t);this._pxBounds=new O([this._rawPxBounds.min.subtract(i),this._rawPxBounds.max.add(i)])},_projectLatlngs:function(t,i,e){var n,o,s=t[0]instanceof j,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),e.extend(o[n]);i.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],i,e)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var i,e,n,o,s,r,a,h=this._parts;for(n=i=0,o=this._rings.length;i<o;i++)for(e=0,s=(a=this._rings[i]).length;e<s-1;e++)(r=pe(a[e],a[e+1],t,e,!0))&&(h[n]=h[n]||[],h[n].push(r[0]),r[1]===a[e+1]&&e!==s-2||(h[n].push(r[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,e=0,n=t.length;e<n;e++)t[e]=_e(t[e],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,i){var e,n,o,s,r,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(e=0,s=this._parts.length;e<s;e++)for(n=0,o=(r=(a=this._parts[e]).length)-1;n<r;o=n++)if((i||0!==n)&&de(t,a[o],a[n])<=h)return!0;return!1}});je._flat=ye;var We=je.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a,h,u=this._rings[0],l=u.length;if(!l)return null;for(s=r=a=0,t=0,i=l-1;t<l;i=t++)e=u[t],n=u[i],o=e.y*n.x-n.y*e.x,r+=(e.x+n.x)*o,a+=(e.y+n.y)*o,s+=3*o;return h=0===s?u[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var i=je.prototype._convertLatLngs.call(this,t),e=i.length;return 2<=e&&i[0]instanceof j&&i[0].equals(i[e-1])&&i.pop(),i},_setLatLngs:function(t){je.prototype._setLatLngs.call(this,t),ve(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return ve(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,i=this.options.weight,e=new B(i,i);if(t=new O(t.min.subtract(e),t.max.add(e)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,s=this._rings.length;o<s;o++)(n=we(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var i,e,n,o,s,r,a,h,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(i=this._parts[o]).length)-1;s<h;r=s++)e=i[s],n=i[r],e.y>t.y!=n.y>t.y&&t.x<(n.x-e.x)*(t.y-e.y)/(n.y-e.y)+e.x&&(u=!u);return u||je.prototype._containsPoint.call(this,t,!0)}});var He=ke.extend({initialize:function(t,i){p(this,i),this._layers={},t&&this.addData(t)},addData:function(t){var i,e,n,o=v(t)?t:t.features;if(o){for(i=0,e=o.length;i<e;i++)((n=o[i]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var r=Fe(t,s);return r?(r.feature=Xe(t),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(t.options=h({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(t){this._setLayerStyle(t,i)},this)},_setLayerStyle:function(t,i){t.setStyle&&("function"==typeof i&&(i=i(t.feature)),t.setStyle(i))}});function Fe(t,i){var e,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],u=i&&i.pointToLayer,l=i&&i.coordsToLatLng||Ve;if(!a&&!r)return null;switch(r.type){case"Point":return Ue(u,t,e=l(a),i);case"MultiPoint":for(o=0,s=a.length;o<s;o++)e=l(a[o]),h.push(Ue(u,t,e,i));return new ke(h);case"LineString":case"MultiLineString":return n=qe(a,"LineString"===r.type?0:1,l),new je(n,i);case"Polygon":case"MultiPolygon":return n=qe(a,"Polygon"===r.type?1:2,l),new We(n,i);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=Fe({geometry:r.geometries[o],type:"Feature",properties:t.properties},i);c&&h.push(c)}return new ke(h);default:throw new Error("Invalid GeoJSON object.")}}function Ue(t,i,e,n){return t?t(i,e):new Oe(e,n&&n.markersInheritOptions&&n)}function Ve(t){return new j(t[1],t[0],t[2])}function qe(t,i,e){for(var n,o=[],s=0,r=t.length;s<r;s++)n=i?qe(t[s],i-1,e):(e||Ve)(t[s]),o.push(n);return o}function Ge(t,i){return i="number"==typeof i?i:6,void 0!==t.alt?[c(t.lng,i),c(t.lat,i),c(t.alt,i)]:[c(t.lng,i),c(t.lat,i)]}function Ke(t,i,e,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(i?Ke(t[s],i-1,e,n):Ge(t[s],n));return!i&&e&&o.push(o[0]),o}function Ye(t,i){return t.feature?h({},t.feature,{geometry:i}):Xe(i)}function Xe(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var Je={toGeoJSON:function(t){return Ye(this,{type:"Point",coordinates:Ge(this.getLatLng(),t)})}};function $e(t,i){return new He(t,i)}Oe.include(Je),De.include(Je),Ne.include(Je),je.include({toGeoJSON:function(t){var i=!ve(this._latlngs);return Ye(this,{type:(i?"Multi":"")+"LineString",coordinates:Ke(this._latlngs,i?1:0,!1,t)})}}),We.include({toGeoJSON:function(t){var i=!ve(this._latlngs),e=i&&!ve(this._latlngs[0]),n=Ke(this._latlngs,e?2:i?1:0,!0,t);return i||(n=[n]),Ye(this,{type:(e?"Multi":"")+"Polygon",coordinates:n})}}),Ze.include({toMultiPoint:function(i){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON(i).geometry.coordinates)}),Ye(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(n){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===t)return this.toMultiPoint(n);var o="GeometryCollection"===t,s=[];return this.eachLayer(function(t){if(t.toGeoJSON){var i=t.toGeoJSON(n);if(o)s.push(i.geometry);else{var e=Xe(i);"FeatureCollection"===e.type?s.push.apply(s,e.features):s.push(e)}}}),o?Ye(this,{geometries:s,type:"GeometryCollection"}):{type:"FeatureCollection",features:s}}});var Qe=$e,tn=Ee.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,i,e){this._url=t,this._bounds=D(i),p(this,e)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(mi(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){li(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&_i(this._image),this},bringToBack:function(){return this._map&&di(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=D(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,i=this._image=t?this._url:ui("img");mi(i,"leaflet-image-layer"),this._zoomAnimated&&mi(i,"leaflet-zoom-animated"),this.options.className&&mi(i,this.options.className),i.onselectstart=l,i.onmousemove=l,i.onload=a(this.fire,this,"load"),i.onerror=a(this._overlayOnError,this,"error"),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=i.src:(i.src=this._url,i.alt=this.options.alt)},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;wi(this._image,e,i)},_reset:function(){var t=this._image,i=new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=i.getSize();Pi(t,i.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){yi(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),en=tn.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,i=this._image=t?this._url:ui("video");if(mi(i,"leaflet-image-layer"),this._zoomAnimated&&mi(i,"leaflet-zoom-animated"),this.options.className&&mi(i,this.options.className),i.onselectstart=l,i.onmousemove=l,i.onloadeddata=a(this.fire,this,"load"),t){for(var e=i.getElementsByTagName("source"),n=[],o=0;o<e.length;o++)n.push(e[o].src);this._url=0<e.length?n:[i.src]}else{v(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&i.style.hasOwnProperty("objectFit")&&(i.style.objectFit="fill"),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop;for(var s=0;s<this._url.length;s++){var r=ui("source");r.src=this._url[s],i.appendChild(r)}}}});var nn=tn.extend({_initImage:function(){var t=this._image=this._url;mi(t,"leaflet-image-layer"),this._zoomAnimated&&mi(t,"leaflet-zoom-animated"),this.options.className&&mi(t,this.options.className),t.onselectstart=l,t.onmousemove=l}});var on=Ee.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,i){p(this,t),this._source=i},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&yi(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&yi(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(yi(this._container,0),this._removeTimeout=setTimeout(a(li,void 0,this._container),200)):li(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=W(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&_i(this._container),this},bringToBack:function(){return this._map&&di(this._container),this},_prepareOpen:function(t,i,e){if(i instanceof Ee||(e=i,i=t),i instanceof ke)for(var n in t._layers){i=t._layers[n];break}if(!e)if(i.getCenter)e=i.getCenter();else{if(!i.getLatLng)throw new Error("Unable to get source layer LatLng.");e=i.getLatLng()}return this._source=i,this.update(),e},_updateContent:function(){if(this._content){var t=this._contentNode,i="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof i)t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),i=I(this.options.offset),e=this._getAnchor();this._zoomAnimated?Pi(this._container,t.add(e)):i=i.add(t).add(e);var n=this._containerBottom=-i.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}}),sn=on.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){on.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Re||this._source.on("preclick",Ri))},onRemove:function(t){on.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Re||this._source.off("preclick",Ri))},getEvents:function(){var t=on.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",i=this._container=ui("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),e=this._wrapper=ui("div",t+"-content-wrapper",i);if(this._contentNode=ui("div",t+"-content",e),Di(e),Ni(this._contentNode),ki(e,"contextmenu",Ri),this._tipContainer=ui("div",t+"-tip-container",i),this._tip=ui("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=ui("a",t+"-close-button",i);n.href="#close",n.innerHTML="&#215;",ki(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var e=t.offsetWidth;e=Math.min(e,this.options.maxWidth),e=Math.max(e,this.options.minWidth),i.width=e+1+"px",i.whiteSpace="",i.height="";var n=t.offsetHeight,o=this.options.maxHeight,s="leaflet-popup-scrolled";o&&o<n?(i.height=o+"px",mi(t,s)):fi(t,s),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();Pi(this._container,i.add(e))},_adjustPan:function(){if(this.options.autoPan){this._map._panAnim&&this._map._panAnim.stop();var t=this._map,i=parseInt(hi(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+i,n=this._containerWidth,o=new B(this._containerLeft,-e-this._containerBottom);o._add(Li(this._container));var s=t.layerPointToContainerPoint(o),r=I(this.options.autoPanPadding),a=I(this.options.autoPanPaddingTopLeft||r),h=I(this.options.autoPanPaddingBottomRight||r),u=t.getSize(),l=0,c=0;s.x+n+h.x>u.x&&(l=s.x+n-u.x+h.x),s.x-l-a.x<0&&(l=s.x-a.x),s.y+e+h.y>u.y&&(c=s.y+e-u.y+h.y),s.y-c-a.y<0&&(c=s.y-a.y),(l||c)&&t.fire("autopanstart").panBy([l,c])}},_onCloseButtonClick:function(t){this._close(),Wi(t)},_getAnchor:function(){return I(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});$i.mergeOptions({closePopupOnClick:!0}),$i.include({openPopup:function(t,i,e){return t instanceof sn||(t=new sn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),Ee.include({bindPopup:function(t,i){return t instanceof sn?(p(t,i),(this._popup=t)._source=this):(this._popup&&!i||(this._popup=new sn(i,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,i){return this._popup&&this._map&&(i=this._popup._prepareOpen(this,t,i),this._map.openPopup(this._popup,i)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var i=t.layer||t.target;this._popup&&this._map&&(Wi(t),i instanceof Re?this.openPopup(t.layer||t.target,t.latlng):this._map.hasLayer(this._popup)&&this._popup._source===i?this.closePopup():this.openPopup(i,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var rn=on.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){on.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){on.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=on.prototype.getEvents.call(this);return Tt&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ui("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i=this._map,e=this._container,n=i.latLngToContainerPoint(i.getCenter()),o=i.layerPointToContainerPoint(t),s=this.options.direction,r=e.offsetWidth,a=e.offsetHeight,h=I(this.options.offset),u=this._getAnchor();t="top"===s?t.add(I(-r/2+h.x,-a+h.y+u.y,!0)):"bottom"===s?t.subtract(I(r/2-h.x,-h.y,!0)):"center"===s?t.subtract(I(r/2+h.x,a/2-u.y+h.y,!0)):"right"===s||"auto"===s&&o.x<n.x?(s="right",t.add(I(h.x+u.x,u.y-a/2+h.y,!0))):(s="left",t.subtract(I(r+u.x-h.x,a/2-u.y-h.y,!0))),fi(e,"leaflet-tooltip-right"),fi(e,"leaflet-tooltip-left"),fi(e,"leaflet-tooltip-top"),fi(e,"leaflet-tooltip-bottom"),mi(e,"leaflet-tooltip-"+s),Pi(e,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&yi(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){return I(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});$i.include({openTooltip:function(t,i,e){return t instanceof rn||(t=new rn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),Ee.include({bindTooltip:function(t,i){return t instanceof rn?(p(t,i),(this._tooltip=t)._source=this):(this._tooltip&&!i||(this._tooltip=new rn(i,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var i=t?"off":"on",e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),Tt&&(e.click=this._openTooltip)),this[i](e),this._tooltipHandlersAdded=!t}},openTooltip:function(t,i){return this._tooltip&&this._map&&(i=this._tooltip._prepareOpen(this,t,i),this._map.openTooltip(this._tooltip,i),this._tooltip.options.interactive&&this._tooltip._container&&(mi(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(fi(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var i=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(i,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var i,e,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(i),n=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(n)}});var an=Be.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;if(e.html instanceof Element?(ci(i),i.appendChild(e.html)):i.innerHTML=!1!==e.html?e.html:"",e.bgPos){var n=I(e.bgPos);i.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});Be.Default=Ae;var hn=Ee.extend({options:{tileSize:256,opacity:1,updateWhenIdle:xt,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){p(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),li(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(_i(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(di(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=o(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof B?t:new B(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var i,e=this.getPane().children,n=-t(-1/0,1/0),o=0,s=e.length;o<s;o++)i=e[o].style.zIndex,e[o]!==this._container&&i&&(n=t(n,+i));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!et){yi(this._container,this.options.opacity);var t=+new Date,i=!1,e=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var s=Math.min(1,(t-o.loaded)/200);yi(o.el,s),s<1?i=!0:(o.active?e=!0:this._onOpaqueTile(o),o.active=!0)}}e&&!this._noPrune&&this._pruneTiles(),i&&(C(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this))}},_onOpaqueTile:l,_initContainer:function(){this._container||(this._container=ui("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=i-Math.abs(t-e),this._onUpdateLevel(e)):(li(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=ui("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=i,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),n.el.offsetWidth,this._onCreateLevel(n)),this._level=n}},_onUpdateLevel:l,_onRemoveLevel:l,_onCreateLevel:l,_pruneTiles:function(){if(this._map){var t,i,e=this._map.getZoom();if(e>this.options.maxZoom||e<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)if((i=this._tiles[t]).current&&!i.active){var n=i.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)li(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,i,e,n){var o=Math.floor(t/2),s=Math.floor(i/2),r=e-1,a=new B(+o,+s);a.z=+r;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?u.retain=!0:(u&&u.loaded&&(u.retain=!0),n<r&&this._retainParent(o,s,r,n))},_retainChildren:function(t,i,e,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*i;s<2*i+2;s++){var r=new B(o,s);r.z=e+1;var a=this._tileCoordsToKey(r),h=this._tiles[a];h&&h.active?h.retain=!0:(h&&h.loaded&&(h.retain=!0),e+1<n&&this._retainChildren(o,s,e+1,n))}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return void 0!==i.minNativeZoom&&t<i.minNativeZoom?i.minNativeZoom:void 0!==i.maxNativeZoom&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,e,n){var o=this._clampZoom(Math.round(i));(void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom)&&(o=void 0);var s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),this._noPrune=!!e),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,i)},_setZoomTransform:function(t,i,e){var n=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i,e)).round();yt?wi(t.el,o,n):Pi(t.el,o)},_resetGrid:function(){var t=this._map,i=t.options.crs,e=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],n).x/e.x),Math.ceil(t.project([0,i.wrapLng[1]],n).x/e.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],n).y/e.x),Math.ceil(t.project([i.wrapLat[1],0],n).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var i=this._map,e=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),n=i.getZoomScale(e,this._tileZoom),o=i.project(t,this._tileZoom).floor(),s=i.getSize().divideBy(2*n);return new O(o.subtract(s),o.add(s))},_update:function(t){var i=this._map;if(i){var e=this._clampZoom(i.getZoom());if(void 0===t&&(t=i.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),r=[],a=this.options.keepBuffer,h=new O(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new B(l.x,l.y))||(this._tiles[u].current=!1)}if(1<Math.abs(e-this._tileZoom))this._setView(t,e);else{for(var c=o.min.y;c<=o.max.y;c++)for(var _=o.min.x;_<=o.max.x;_++){var d=new B(_,c);if(d.z=this._tileZoom,this._isValidTile(d)){var p=this._tiles[this._tileCoordsToKey(d)];p?p.current=!0:r.push(d)}}if(r.sort(function(t,i){return t.distanceTo(s)-i.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));var m=document.createDocumentFragment();for(_=0;_<r.length;_++)this._addTile(r[_],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){var e=this._globalTileRange;if(!i.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!i.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return D(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var i=this._map,e=this.getTileSize(),n=t.scaleBy(e),o=n.add(e);return[i.unproject(n,t.z),i.unproject(o,t.z)]},_tileCoordsToBounds:function(t){var i=this._tileCoordsToNwSe(t),e=new N(i[0],i[1]);return this.options.noWrap||(e=this._map.wrapLatLngBounds(e)),e},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var i=t.split(":"),e=new B(+i[0],+i[1]);return e.z=+i[2],e},_removeTile:function(t){var i=this._tiles[t];i&&(li(i.el),delete this._tiles[t],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){mi(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=l,t.onmousemove=l,et&&this.options.opacity<1&&yi(t,this.options.opacity),st&&!rt&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,i){var e=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),a(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&M(a(this._tileReady,this,t,null,o)),Pi(o,e),this._tiles[n]={el:o,coords:t,current:!0},i.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,i,e){i&&this.fire("tileerror",{error:i,tile:e,coords:t});var n=this._tileCoordsToKey(t);(e=this._tiles[n])&&(e.loaded=+new Date,this._map._fadeAnimated?(yi(e.el,0),C(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this)):(e.active=!0,this._pruneTiles()),i||(mi(e.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:e.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),et||!this._map._fadeAnimated?M(this._pruneTiles,this):setTimeout(a(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new B(this._wrapX?r(t.x,this._wrapX):t.x,this._wrapY?r(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new O(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});var un=hn.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,i){this._url=t,(i=p(this,i)).detectRetina&&Ct&&0<i.maxZoom&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom++):(i.zoomOffset++,i.maxZoom--),i.minZoom=Math.max(0,i.minZoom)),"string"==typeof i.subdomains&&(i.subdomains=i.subdomains.split("")),st||this.on("tileunload",this._onTileRemove)},setUrl:function(t,i){return this._url===t&&void 0===i&&(i=!0),this._url=t,i||this.redraw(),this},createTile:function(t,i){var e=document.createElement("img");return ki(e,"load",a(this._tileOnLoad,this,i,e)),ki(e,"error",a(this._tileOnError,this,i,e)),!this.options.crossOrigin&&""!==this.options.crossOrigin||(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),e.alt="",e.setAttribute("role","presentation"),e.src=this.getTileUrl(t),e},getTileUrl:function(t){var i={r:Ct?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var e=this._globalTileRange.max.y-t.y;this.options.tms&&(i.y=e),i["-y"]=e}return g(this._url,h(i,this.options))},_tileOnLoad:function(t,i){et?setTimeout(a(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,e){var n=this.options.errorTileUrl;n&&i.getAttribute("src")!==n&&(i.src=n),t(e,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom;return this.options.zoomReverse&&(t=i-t),t+this.options.zoomOffset},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var t,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=l,i.onerror=l,i.complete||(i.src=x,li(i),delete this._tiles[t]))},_removeTile:function(t){var i=this._tiles[t];if(i)return ht||i.el.setAttribute("src",x),hn.prototype._removeTile.call(this,t)},_tileReady:function(t,i,e){if(this._map&&(!e||e.getAttribute("src")!==x))return hn.prototype._tileReady.call(this,t,i,e)}});function ln(t,i){return new un(t,i)}var cn=un.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,i){this._url=t;var e=h({},this.defaultWmsParams);for(var n in i)n in this.options||(e[n]=i[n]);var o=(i=p(this,i)).detectRetina&&Ct?2:1,s=this.getTileSize();e.width=s.x*o,e.height=s.y*o,this.wmsParams=e},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=1.3<=this._wmsVersion?"crs":"srs";this.wmsParams[i]=this._crs.code,un.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToNwSe(t),e=this._crs,n=R(e.project(i[0]),e.project(i[1])),o=n.min,s=n.max,r=(1.3<=this._wmsVersion&&this._crs===Ce?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),a=un.prototype.getTileUrl.call(this,t);return a+m(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(t,i){return h(this.wmsParams,t),i||this.redraw(),this}});un.WMS=cn,ln.wms=function(t,i){return new cn(t,i)};var _n=Ee.extend({options:{padding:.1,tolerance:0},initialize:function(t){p(this,t),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&mi(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var e=this._map.getZoomScale(i,this._zoom),n=Li(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,i),r=this._map.project(t,i).subtract(s),a=o.multiplyBy(-e).add(n).add(o).subtract(r);yt?wi(this._container,a,e):Pi(this._container,a)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,i=this._map.getSize(),e=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new O(e,e.add(i.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),dn=_n.extend({getEvents:function(){var t=_n.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){_n.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");ki(t,"mousemove",this._onMouseMove,this),ki(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ki(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){C(this._redrawRequest),delete this._ctx,li(this._container),Ai(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){_n.prototype._update.call(this);var t=this._bounds,i=this._container,e=t.getSize(),n=Ct?2:1;Pi(i,t.min),i.width=n*e.x,i.height=n*e.y,i.style.width=e.x+"px",i.style.height=e.y+"px",Ct&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){_n.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t);var i=(this._layers[u(t)]=t)._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,e=i.next,n=i.prev;e?e.prev=n:this._drawLast=n,n?n.next=e:this._drawFirst=e,delete t._order,delete this._layers[u(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var i,e,n=t.options.dashArray.split(/[, ]+/),o=[];for(e=0;e<n.length;e++){if(i=Number(n[e]),isNaN(i))return;o.push(i)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||M(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var i=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new O,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var i=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,i.x,i.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,i=this._redrawBounds;if(this._ctx.save(),i){var e=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var e,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(h.beginPath(),e=0;e<a;e++){for(n=0,o=r[e].length;n<o;n++)s=r[e][n],h[n?"lineTo":"moveTo"](s.x,s.y);i&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var i=t._point,e=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;1!=o&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(i.x,i.y/o,n,0,2*Math.PI,!1),1!=o&&e.restore(),this._fillStroke(e,t)}},_fillStroke:function(t,i){var e=i.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},_onClick:function(t){for(var i,e,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(n)&&!this._map._draggableMoved(i)&&(e=i);e&&(Gi(t),this._fireEvent([e],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var i=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,i)}},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(fi(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,i){if(!this._mouseHoverThrottled){for(var e,n,o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(i)&&(n=e);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(mi(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(L.bind(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,i,e){this._map._fireDOMEvent(i,e||i.type,t)},_bringToFront:function(t){var i=t._order;if(i){var e=i.next,n=i.prev;e&&((e.prev=n)?n.next=e:e&&(this._drawFirst=e),i.prev=this._drawLast,(this._drawLast.next=i).next=null,this._drawLast=i,this._requestRedraw(t))}},_bringToBack:function(t){var i=t._order;if(i){var e=i.next,n=i.prev;n&&((n.next=e)?e.prev=n:n&&(this._drawLast=n),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(t))}}});function pn(t){return Et?new dn(t):null}var mn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),fn={_initContainer:function(){this._container=ui("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(_n.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=mn("shape");mi(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=mn("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[u(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;li(i),t.removeInteractiveTarget(i),delete this._layers[u(t)]},_updateStyle:function(t){var i=t._stroke,e=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(i||(i=t._stroke=mn("stroke")),o.appendChild(i),i.weight=n.weight+"px",i.color=n.color,i.opacity=n.opacity,n.dashArray?i.dashStyle=v(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=n.lineCap.replace("butt","flat"),i.joinstyle=n.lineJoin):i&&(o.removeChild(i),t._stroke=null),n.fill?(e||(e=t._fill=mn("fill")),o.appendChild(e),e.color=n.fillColor||n.color,e.opacity=n.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),e=Math.round(t._radius),n=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+e+","+n+" 0,23592600")},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){_i(t._container)},_bringToBack:function(t){di(t._container)}},gn=kt?mn:$,vn=_n.extend({getEvents:function(){var t=_n.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=gn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=gn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){li(this._container),Ai(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){_n.prototype._update.call(this);var t=this._bounds,i=t.getSize(),e=this._container;this._svgSize&&this._svgSize.equals(i)||(this._svgSize=i,e.setAttribute("width",i.x),e.setAttribute("height",i.y)),Pi(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(t){var i=t._path=gn("path");t.options.className&&mi(i,t.options.className),t.options.interactive&&mi(i,"leaflet-interactive"),this._updateStyle(t),this._layers[u(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){li(t._path),t.removeInteractiveTarget(t._path),delete this._layers[u(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,e=t.options;i&&(e.stroke?(i.setAttribute("stroke",e.color),i.setAttribute("stroke-opacity",e.opacity),i.setAttribute("stroke-width",e.weight),i.setAttribute("stroke-linecap",e.lineCap),i.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?i.setAttribute("stroke-dasharray",e.dashArray):i.removeAttribute("stroke-dasharray"),e.dashOffset?i.setAttribute("stroke-dashoffset",e.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),e.fill?(i.setAttribute("fill",e.fillColor||e.color),i.setAttribute("fill-opacity",e.fillOpacity),i.setAttribute("fill-rule",e.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,Q(t._parts,i))},_updateCircle:function(t){var i=t._point,e=Math.max(Math.round(t._radius),1),n="a"+e+","+(Math.max(Math.round(t._radiusY),1)||e)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(i.x-e)+","+i.y+n+2*e+",0 "+n+2*-e+",0 ";this._setPath(t,o)},_setPath:function(t,i){t._path.setAttribute("d",i)},_bringToFront:function(t){_i(t._path)},_bringToBack:function(t){di(t._path)}});function yn(t){return Zt||kt?new vn(t):null}kt&&vn.include(fn),$i.include({getRenderer:function(t){var i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this._createRenderer()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var i=this._paneRenderers[t];return void 0===i&&(i=this._createRenderer({pane:t}),this._paneRenderers[t]=i),i},_createRenderer:function(t){return this.options.preferCanvas&&pn(t)||yn(t)}});var xn=We.extend({initialize:function(t,i){We.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=D(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});vn.create=gn,vn.pointsToPath=Q,He.geometryToLayer=Fe,He.coordsToLatLng=Ve,He.coordsToLatLngs=qe,He.latLngToCoords=Ge,He.latLngsToCoords=Ke,He.getFeature=Ye,He.asFeature=Xe,$i.mergeOptions({boxZoom:!0});var wn=se.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){ki(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ai(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){li(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),Qt(),Ti(),this._startPoint=this._map.mouseEventToContainerPoint(t),ki(document,{contextmenu:Wi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=ui("div","leaflet-zoom-box",this._container),mi(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new O(this._point,this._startPoint),e=i.getSize();Pi(this._box,i.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(li(this._box),fi(this._container,"leaflet-crosshair")),ti(),zi(),Ai(document,{contextmenu:Wi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(a(this._resetState,this),0);var i=new N(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});$i.addInitHook("addHandler","boxZoom",wn),$i.mergeOptions({doubleClickZoom:!0});var Pn=se.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,e=i.getZoom(),n=i.options.zoomDelta,o=t.originalEvent.shiftKey?e-n:e+n;"center"===i.options.doubleClickZoom?i.setZoom(o):i.setZoomAround(t.containerPoint,o)}});$i.addInitHook("addHandler","doubleClickZoom",Pn),$i.mergeOptions({dragging:!0,inertia:!rt,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Ln=se.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new ce(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}mi(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){fi(this._map._container,"leaflet-grab"),fi(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=D(this._map.options.maxBounds);this._offsetLimit=R(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var i=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(e),this._times.push(i),this._prunePositions(i)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;1<this._positions.length&&50<t-this._times[0];)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,i=Math.round(t/2),e=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-i+e)%t+i-e,s=(n+i+e)%t-i-e,r=Math.abs(o+e)<Math.abs(s+e)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var i=this._map,e=i.options,n=!e.inertia||this._times.length<2;if(i.fire("dragend",t),n)i.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,r=e.easeLinearity,a=o.multiplyBy(r/s),h=a.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(e.inertiaDeceleration*r),_=l.multiplyBy(-c/2).round();_.x||_.y?(_=i._limitOffset(_,i.options.maxBounds),M(function(){i.panBy(_,{duration:c,easeLinearity:r,noMoveStart:!0,animate:!0})})):i.fire("moveend")}}});$i.addInitHook("addHandler","dragging",Ln),$i.mergeOptions({keyboard:!0,keyboardPanDelta:80});var bn=se.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),ki(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ai(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,i=document.documentElement,e=t.scrollTop||i.scrollTop,n=t.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(n,e)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var i,e,n=this._panKeys={},o=this.keyCodes;for(i=0,e=o.left.length;i<e;i++)n[o.left[i]]=[-1*t,0];for(i=0,e=o.right.length;i<e;i++)n[o.right[i]]=[t,0];for(i=0,e=o.down.length;i<e;i++)n[o.down[i]]=[0,t];for(i=0,e=o.up.length;i<e;i++)n[o.up[i]]=[0,-1*t]},_setZoomDelta:function(t){var i,e,n=this._zoomKeys={},o=this.keyCodes;for(i=0,e=o.zoomIn.length;i<e;i++)n[o.zoomIn[i]]=t;for(i=0,e=o.zoomOut.length;i<e;i++)n[o.zoomOut[i]]=-t},_addHooks:function(){ki(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ai(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i,e=t.keyCode,n=this._map;if(e in this._panKeys)n._panAnim&&n._panAnim._inProgress||(i=this._panKeys[e],t.shiftKey&&(i=I(i).multiplyBy(3)),n.panBy(i),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds));else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}Wi(t)}}});$i.addInitHook("addHandler","keyboard",bn),$i.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Tn=se.extend({addHooks:function(){ki(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ai(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=Ui(t),e=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(e-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(a(this._performZoom,this),n),Wi(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=e?Math.ceil(o/e)*e:o,r=t._limitZoom(i+(0<this._delta?s:-s))-i;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(i+r):t.setZoomAround(this._lastMousePos,i+r))}});$i.addInitHook("addHandler","scrollWheelZoom",Tn),$i.mergeOptions({tap:!0,tapTolerance:15});var zn=se.extend({addHooks:function(){ki(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ai(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(ji(t),this._fireClick=!0,1<t.touches.length)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],e=i.target;this._startPos=this._newPos=new B(i.clientX,i.clientY),e.tagName&&"a"===e.tagName.toLowerCase()&&mi(e,"leaflet-active"),this._holdTimeout=setTimeout(a(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),ki(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),Ai(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],e=i.target;e&&e.tagName&&"a"===e.tagName.toLowerCase()&&fi(e,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var i=t.touches[0];this._newPos=new B(i.clientX,i.clientY),this._simulateEvent("mousemove",i)},_simulateEvent:function(t,i){var e=document.createEvent("MouseEvents");e._simulated=!0,i.target._simulatedClick=!0,e.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(e)}});Tt&&!bt&&$i.addInitHook("addHandler","tap",zn),$i.mergeOptions({touchZoom:Tt&&!rt,bounceAtZoomLimits:!0});var Mn=se.extend({addHooks:function(){mi(this._map._container,"leaflet-touch-zoom"),ki(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){fi(this._map._container,"leaflet-touch-zoom"),Ai(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(e.add(n)._divideBy(2))),this._startDist=e.distanceTo(n),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),ki(document,"touchmove",this._onTouchMove,this),ki(document,"touchend",this._onTouchEnd,this),ji(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var i=this._map,e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]),o=e.distanceTo(n)/this._startDist;if(this._zoom=i.getScaleZoom(o,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&o<1||this._zoom>i.getMaxZoom()&&1<o)&&(this._zoom=i._limitZoom(this._zoom)),"center"===i.options.touchZoom){if(this._center=this._startLatLng,1==o)return}else{var s=e._add(n)._divideBy(2)._subtract(this._centerPoint);if(1==o&&0===s.x&&0===s.y)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(s),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),C(this._animRequest);var r=a(i._move,i,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=M(r,this,!0),ji(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,C(this._animRequest),Ai(document,"touchmove",this._onTouchMove),Ai(document,"touchend",this._onTouchEnd),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});$i.addInitHook("addHandler","touchZoom",Mn),$i.BoxZoom=wn,$i.DoubleClickZoom=Pn,$i.Drag=Ln,$i.Keyboard=bn,$i.ScrollWheelZoom=Tn,$i.Tap=zn,$i.TouchZoom=Mn,Object.freeze=i,t.version="1.6.0",t.Control=te,t.control=Qi,t.Browser=At,t.Evented=k,t.Mixin=ae,t.Util=S,t.Class=E,t.Handler=se,t.extend=h,t.bind=a,t.stamp=u,t.setOptions=p,t.DomEvent=Xi,t.DomUtil=Zi,t.PosAnimation=Ji,t.Draggable=ce,t.LineUtil=xe,t.PolyUtil=Le,t.Point=B,t.point=I,t.Bounds=O,t.bounds=R,t.Transformation=G,t.transformation=K,t.Projection=ze,t.LatLng=j,t.latLng=W,t.LatLngBounds=N,t.latLngBounds=D,t.CRS=F,t.GeoJSON=He,t.geoJSON=$e,t.geoJson=Qe,t.Layer=Ee,t.LayerGroup=Ze,t.layerGroup=function(t,i){return new Ze(t,i)},t.FeatureGroup=ke,t.featureGroup=function(t){return new ke(t)},t.ImageOverlay=tn,t.imageOverlay=function(t,i,e){return new tn(t,i,e)},t.VideoOverlay=en,t.videoOverlay=function(t,i,e){return new en(t,i,e)},t.SVGOverlay=nn,t.svgOverlay=function(t,i,e){return new nn(t,i,e)},t.DivOverlay=on,t.Popup=sn,t.popup=function(t,i){return new sn(t,i)},t.Tooltip=rn,t.tooltip=function(t,i){return new rn(t,i)},t.Icon=Be,t.icon=function(t){return new Be(t)},t.DivIcon=an,t.divIcon=function(t){return new an(t)},t.Marker=Oe,t.marker=function(t,i){return new Oe(t,i)},t.TileLayer=un,t.tileLayer=ln,t.GridLayer=hn,t.gridLayer=function(t){return new hn(t)},t.SVG=vn,t.svg=yn,t.Renderer=_n,t.Canvas=dn,t.canvas=pn,t.Path=Re,t.CircleMarker=Ne,t.circleMarker=function(t,i){return new Ne(t,i)},t.Circle=De,t.circle=function(t,i,e){return new De(t,i,e)},t.Polyline=je,t.polyline=function(t,i){return new je(t,i)},t.Polygon=We,t.polygon=function(t,i){return new We(t,i)},t.Rectangle=xn,t.rectangle=function(t,i){return new xn(t,i)},t.Map=$i,t.map=function(t,i){return new $i(t,i)};var Cn=window.L;t.noConflict=function(){return window.L=Cn,this},window.L=t});
},{}],"node_modules/leaflet.control.layers.tree/L.Control.Layers.Tree.js":[function(require,module,exports) {
/*
 * Control like L.Control.Layers, but showing layers in a tree.
 * Do not forget to include the css file.
 */

(function(L) {
    if (typeof L === 'undefined') {
        throw new Error('Leaflet must be included first');
    }

    /*
     * L.Control.Layers.Tree extends L.Control.Layers because it reuses
     * most of its functionality. Only the HTML creation is different.
     */
    L.Control.Layers.Tree = L.Control.Layers.extend({
        options: {
            closedSymbol: '+',
            openedSymbol: '&minus;',
            spaceSymbol: ' ',
            selectorBack: false,
            namedToggle: false,
            collapseAll: '',
            expandAll: '',
            labelIsSelector: 'both',
        },

        // Class names are error prone texts, so write them once here
        _initClassesNames: function() {
            this.cls = {
                children: 'leaflet-layerstree-children',
                childrenNopad: 'leaflet-layerstree-children-nopad',
                hide: 'leaflet-layerstree-hide',
                closed: 'leaflet-layerstree-closed',
                opened: 'leaflet-layerstree-opened',
                space: 'leaflet-layerstree-header-space',
                pointer: 'leaflet-layerstree-header-pointer',
                header: 'leaflet-layerstree-header',
                neverShow: 'leaflet-layerstree-nevershow',
                node: 'leaflet-layerstree-node',
                name: 'leaflet-layerstree-header-name',
                label: 'leaflet-layerstree-header-label',
                selAllCheckbox: 'leaflet-layerstree-sel-all-checkbox',
            };
        },

        initialize: function(baseTree, overlaysTree, options) {
            this._scrollTop = 0;
            this._initClassesNames();
            this._baseTree = null;
            this._overlaysTree = null;
            L.Util.setOptions(this, options);
            L.Control.Layers.prototype.initialize.call(this, null, null, options);
            this._setTrees(baseTree, overlaysTree);
        },

        setBaseTree: function(tree) {
            return this._setTrees(tree);
        },

        setOverlayTree: function(tree) {
            return this._setTrees(undefined, tree);
        },

        addBaseLayer: function(layer, name) {
            throw 'addBaseLayer is disabled';
        },

        addOverlay: function(layer, name) {
            throw 'addOverlay is disabled';
        },

        removeLayer: function(layer) {
            throw 'removeLayer is disabled';
        },

        collapse: function() {
            this._scrollTop = this._sect().scrollTop;
            return L.Control.Layers.prototype.collapse.call(this);
        },

        expand: function() {
            var ret = L.Control.Layers.prototype.expand.call(this);
            this._sect().scrollTop = this._scrollTop;
        },

        onAdd: function(map) {
            function changeName(layer) {
                if (layer._layersTreeName) {
                    toggle.innerHTML = layer._layersTreeName;
                }
            }

            var ret = L.Control.Layers.prototype.onAdd.call(this, map);
            if (this.options.namedToggle) {
                var toggle = this._container.getElementsByClassName('leaflet-control-layers-toggle')[0];
                L.DomUtil.addClass(toggle, 'leaflet-layerstree-named-toggle');
                // Start with this value...
                map.eachLayer(function(layer) {changeName(layer);});
                // ... and change it whenever the baselayer is changed.
                map.on('baselayerchange', function(e) {changeName(e.layer);}, this);
            }
            return ret;
        },

        // Expands the whole tree (base other overlays)
        expandTree: function(overlay) {
            var container = overlay ? this._overlaysList : this._baseLayersList;
            if (container) {
                this._applyOnTree(container, false);
            }
            return this._localExpand();
        },

        // Collapses the whole tree (base other overlays)
        collapseTree: function(overlay) {
            var container = overlay ? this._overlaysList : this._baseLayersList;
            if (container) {
                this._applyOnTree(container, true);
            }
            return this._localExpand();
        },

        // Expands the tree, only to show the selected inputs
        expandSelected: function(overlay) {
            function iter(el) {
                // Function to iterate the whole DOM upwards
                var p = el.parentElement;
                if (p) {
                    if (L.DomUtil.hasClass(p, that.cls.children) &&
                        !L.DomUtil.hasClass(el, that.cls.childrenNopad)) {
                        L.DomUtil.removeClass(p, hide);
                    }

                    if (L.DomUtil.hasClass(p, that.cls.node)) {
                        var h = p.getElementsByClassName(that.cls.header)[0];
                        that._applyOnTree(h, false);
                    }
                    iter(p);
                }
            }

            var that = this;
            var container = overlay ? this._overlaysList : this._baseLayersList;
            if (!container) return this;
            var hide = this.cls.hide;
            var inputs = this._layerControlInputs || container.getElementsByTagName('input');
            for (var i = 0; i < inputs.length; i++) {
                // Loop over every (valid) input.
                var input = inputs[i];
                if (this._getLayer && !!this._getLayer(input.layerId).overlay != !!overlay) continue
                if (input.checked) {
                    // Get out of the header,
                    // to not open the posible (but rare) children
                    iter(input.parentElement.parentElement.parentElement.parentElement);
                }
            }
            return this._localExpand();
        },

        // "private" methods, not exposed in the API
        _sect: function() {
            // to keep compatibility after 1.3 https://github.com/Leaflet/Leaflet/pull/6380
            return this._section || this._form;
        },

        _setTrees: function(base, overlays) {
            var id = 0; // to keep unique id
            function iterate(tree, output, overlays) {
                if (tree && tree.layer) {
                    if (!overlays) {
                        tree.layer._layersTreeName = tree.name || tree.label;
                    }
                    output[id++] = tree.layer;
                }
                if (tree && tree.children && tree.children.length) {
                    tree.children.forEach(function(child) {
                        iterate(child, output, overlays);
                    });
                }
                return output;
            }

            // We accept arrays, but convert into an object with children
            function forArrays(input) {
                if (Array.isArray(input)) {
                    return {noShow: true, children: input};
                } else {
                    return input
                }
            }

            // Clean everything, and start again.
            if (this._layerControlInputs) {
                this._layerControlInputs = [];
            }
            for (var i = 0; i < this._layers.length; ++i) {
                this._layers[i].layer.off('add remove', this._onLayerChange, this);
            }
            this._layers = [];

            if (base !== undefined) this._baseTree = forArrays(base);
            if (overlays !== undefined) this._overlaysTree = forArrays(overlays);

            var bflat = iterate(this._baseTree, {});
            for (var i in bflat) {
                this._addLayer(bflat[i], i);
            }

            var oflat = iterate(this._overlaysTree, {}, true);
            for (i in oflat) {
                this._addLayer(oflat[i], i, true);
            }
            return (this._map) ? this._update() : this;
        },

        // Used to update the vertical scrollbar
        _localExpand: function() {
            if (this._map && L.DomUtil.hasClass(this._container, 'leaflet-control-layers-expanded')) {
                var top = this._sect().scrollTop;
                this.expand();
                this._sect().scrollTop = top; // to keep the scroll location
                this._scrollTop = top;
            }
            return this;
        },

        // collapses or expands the tree in the containter.
        _applyOnTree: function(container, collapse) {
            var iters = [
                {cls: this.cls.children, hide: collapse},
                {cls: this.cls.opened, hide: collapse},
                {cls: this.cls.closed, hide: !collapse},
            ];
            iters.forEach(function(it) {
                var els = container.getElementsByClassName(it.cls);
                for (var i = 0; i < els.length; i++) {
                    var el = els[i];
                    if (L.DomUtil.hasClass(el, this.cls.childrenNopad)) {
                        // do nothing
                    } else if (it.hide) {
                        L.DomUtil.addClass(el, this.cls.hide);
                    } else {
                        L.DomUtil.removeClass(el, this.cls.hide);
                    }
                }
            }, this);
        },

        // it is called in the original _update, and shouldn't do anything.
        _addItem: function(obj) {
        },

        // overwrite _update function in Control.Layers
        _update: function() {
            if (!this._container) { return this; }
            L.Control.Layers.prototype._update.call(this);
            this._addTreeLayout(this._baseTree, false);
            this._addTreeLayout(this._overlaysTree, true);
            return this._localExpand();
        },

        // Create the DOM objects for the tree
        _addTreeLayout: function(tree, overlay) {
            if (!tree) return;
            var container = overlay ? this._overlaysList : this._baseLayersList;
            this._expandCollapseAll(overlay, this.options.collapseAll, this.collapseTree);
            this._expandCollapseAll(overlay, this.options.expandAll, this.expandTree);
            this._iterateTreeLayout(tree, container, overlay, [], tree.noShow)
            if (this._checkDisabledLayers) {
                // to keep compatibility
                this._checkDisabledLayers();
            }
        },

        // Create the "Collapse all" or expand, if needed.
        _expandCollapseAll: function(overlay, text, fn, ctx) {
            var container = overlay ? this._overlaysList : this._baseLayersList;
            ctx = ctx ? ctx : this;
            if (text) {
                var o = document.createElement('div');
                o.className = 'leaflet-layerstree-expand-collapse';
                container.appendChild(o);
                o.innerHTML = text;
                o.tabIndex = 0;
                L.DomEvent.on(o, 'click keydown', function(e) {
                    if (e.type !== 'keydown' || e.keyCode === 32) {
                        o.blur()
                        fn.call(ctx, overlay);
                        this._localExpand();
                    }
                }, this);
            }
        },

        // recursive funtion to create the DOM children
        _iterateTreeLayout: function(tree, container, overlay, selAllNodes, noShow) {
            if (!tree) return;
            function creator(type, cls, append, innerHTML) {
                var obj = L.DomUtil.create(type, cls, append);
                if (innerHTML) obj.innerHTML = innerHTML;
                return obj;
            }

            // create the header with it fields
            var header = creator('div', this.cls.header, container);
            var sel = creator('span');
            var entry = creator('span');
            var closed = creator('span', this.cls.closed, sel, this.options.closedSymbol);
            var opened = creator('span', this.cls.opened, sel, this.options.openedSymbol);
            var space = creator('span', this.cls.space, null, this.options.spaceSymbol);
            if (this.options.selectorBack) {
                sel.insertBefore(space, closed);
                header.appendChild(entry);
                header.appendChild(sel);
            } else {
                sel.appendChild(space);
                header.appendChild(sel);
                header.appendChild(entry);
            }

            function updateSelAllCheckbox(ancestor) {
                var selector = ancestor.querySelector('input[type=checkbox]')
                var selectedAll = true;
                var selectedNone = true;
                var inputs = ancestor.querySelectorAll('input[type=checkbox]');
                [].forEach.call(inputs, function(inp) { // to work in node for tests
                    if (inp === selector) {
                        // ignore
                    } else if (inp.indeterminate) {
                        selectedAll = false;
                        selectedNone = false;
                    } else if (inp.checked) {
                        selectedNone = false;
                    } else if (!inp.checked) {
                        selectedAll = false;
                    }
                });
                if (selectedAll) {
                    selector.indeterminate = false
                    selector.checked = true;
                } else if (selectedNone) {
                    selector.indeterminate = false
                    selector.checked = false;
                } else {
                    selector.indeterminate = true;
                    selector.checked = false;
                }
            }

            function manageSelectorsAll(input, ctx) {
                selAllNodes.forEach(function(ancestor) {
                    L.DomEvent.on(input, 'click', function(ev) {
                        updateSelAllCheckbox(ancestor)
                    }, ctx)
                }, ctx);
            }

            var selAll;
            if (tree.selectAllCheckbox) {
                selAll = this._createCheckboxElement(false);
                selAll.className += ' ' + this.cls.selAllCheckbox;
            }

            var hide = this.cls.hide; // To toggle state
            // create the children group, with the header event click
            if (tree.children) {
                var children = creator('div', this.cls.children, container);
                var sensible = tree.layer ? sel : header;
                L.DomUtil.addClass(sensible, this.cls.pointer);
                sensible.tabIndex = 0;
                L.DomEvent.on(sensible, 'click keydown', function(e) {
                    if (e.type === 'keydown' && e.keyCode !== 32) {
                        return
                    }
                    sensible.blur();

                    if (L.DomUtil.hasClass(opened, hide)) {
                        // it is not opened, so open it
                        L.DomUtil.addClass(closed, hide);
                        L.DomUtil.removeClass(opened, hide);
                        L.DomUtil.removeClass(children, hide);
                    } else {
                        // close it
                        L.DomUtil.removeClass(closed, hide);
                        L.DomUtil.addClass(opened, hide);
                        L.DomUtil.addClass(children, hide);
                    }
                    this._localExpand();
                }, this);
                if (selAll) {
                    selAllNodes.splice(0, 0, container);
                }
                tree.children.forEach(function(child) {
                    var node = creator('div', this.cls.node, children)
                    this._iterateTreeLayout(child, node, overlay, selAllNodes);
                }, this);
                if (selAll) {
                    selAllNodes.splice(0, 1);
                }
            } else {
                // no children, so the selector makes no sense.
                L.DomUtil.addClass(sel, this.cls.neverShow);
            }

            // make (or not) the label clickable to toggle the layer
            var labelType;
            if (tree.layer) {
                if ((this.options.labelIsSelector === 'both') || // if option is set to both
                    (overlay && this.options.labelIsSelector === 'overlay') || // if an overlay layer and options is set to overlay
                    (!overlay && this.options.labelIsSelector === 'base')) { // if a base layer and option is set to base
                    labelType = 'label'
                } else { // if option is set to something else
                    labelType = 'span'
                }
            } else {
                labelType = 'span';
            }
            // create the input and label
            var label = creator(labelType, this.cls.label, entry);
            if (tree.layer) {
                // now create the element like in _addItem
                var checked = this._map.hasLayer(tree.layer)
                var input;
                var radioGroup = overlay ? tree.radioGroup : 'leaflet-base-layers_' + L.Util.stamp(this);
                if (radioGroup) {
                    input = this._createRadioElement(radioGroup, checked);
                } else {
                    input = this._createCheckboxElement(checked);
                    manageSelectorsAll(input, this);
                }
                if (this._layerControlInputs) {
                    // to keep compatibility with 1.0.3
                    this._layerControlInputs.push(input);
                }
                input.layerId = L.Util.stamp(tree.layer);
                L.DomEvent.on(input, 'click', this._onInputClick, this);
                label.appendChild(input);
            }

            function isText(variable) {
                return (typeof variable === 'string' || variable instanceof String);
            }

            function isFunction(functionToCheck) {
                return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
            }

            function selectAllCheckboxes(select, ctx) {
                var inputs = container.getElementsByTagName('input');
                for (var i = 0; i < inputs.length; i++) {
                    var input = inputs[i];
                    if (input.type !== 'checkbox') continue;
                    input.checked = select;
                    input.indeterminate = false;
                }
                ctx._onInputClick();
            }
            if (tree.selectAllCheckbox) {
                // selAll is already created
                label.appendChild(selAll);
                if (isText(tree.selectAllCheckbox)) {
                    selAll.title = tree.selectAllCheckbox;
                }
                L.DomEvent.on(selAll, 'click', function(ev) {
                    ev.stopPropagation();
                    selectAllCheckboxes(selAll.checked, this);
                }, this);
                updateSelAllCheckbox(container);
                manageSelectorsAll(selAll, this);
            }

            var name = creator('span', this.cls.name, label, tree.label);

            // hide the button which doesn't fit the collapsed state, then hide children conditionally
            L.DomUtil.addClass(tree.collapsed ? opened : closed, hide);
            tree.collapsed && children && L.DomUtil.addClass(children, hide);

            if (noShow) {
                L.DomUtil.addClass(header, this.cls.neverShow);
                L.DomUtil.addClass(children, this.cls.childrenNopad);
            }

            var eventeds = tree.eventedClasses;
            if (!(eventeds instanceof Array)) {
                eventeds = [eventeds];
            }

            for (var e = 0; e < eventeds.length; e++) {
                var evented = eventeds[e];
                if (evented && evented.className) {
                    var obj = container.querySelector('.' + evented.className);
                    if (obj) {
                        L.DomEvent.on(obj, evented.event || 'click', (function(selectAll) {
                            return function(ev) {
                                ev.stopPropagation();
                                var select = isFunction(selectAll) ? selectAll(ev, container, tree, this._map) : selectAll;
                                if (select !== undefined && select !== null) {
                                    selectAllCheckboxes(select, this);
                                }
                            }
                        })(evented.selectAll), this);
                    }
                }
            }
        },

        _createCheckboxElement: function(checked) {
            var input = document.createElement('input');
            input.type = 'checkbox';
            input.className = 'leaflet-control-layers-selector';
            input.defaultChecked = checked;
            return input;
        },

    });

    L.control.layers.tree = function(base, overlays, options) {
        return new L.Control.Layers.Tree(base, overlays, options);
    }

})(L);

},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/leaflet.control.layers.tree/L.Control.Layers.Tree.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/leaflet.markercluster/dist/leaflet.markercluster.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e.Leaflet=e.Leaflet||{},e.Leaflet.markercluster=e.Leaflet.markercluster||{}))}(this,function(e){"use strict";var t=L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,clusterPane:L.Marker.prototype.options.pane,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(e){L.Util.setOptions(this,e),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.addEventParent(this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.addEventParent(this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[],this._childMarkerEventHandlers={dragstart:this._childMarkerDragStart,move:this._childMarkerMoved,dragend:this._childMarkerDragEnd};var t=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,t?this._withAnimation:this._noAnimation),this._markerCluster=t?L.MarkerCluster:L.MarkerClusterNonAnimated},addLayer:function(e){if(e instanceof L.LayerGroup)return this.addLayers([e]);if(!e.getLatLng)return this._nonPointGroup.addLayer(e),this.fire("layeradd",{layer:e}),this;if(!this._map)return this._needsClustering.push(e),this.fire("layeradd",{layer:e}),this;if(this.hasLayer(e))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(e,this._maxZoom),this.fire("layeradd",{layer:e}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons();var t=e,i=this._zoom;if(e.__parent)for(;t.__parent._zoom>=i;)t=t.__parent;return this._currentShownBounds.contains(t.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(e,t):this._animationAddLayerNonAnimated(e,t)),this},removeLayer:function(e){return e instanceof L.LayerGroup?this.removeLayers([e]):e.getLatLng?this._map?e.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(e)),this._removeLayer(e,!0),this.fire("layerremove",{layer:e}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),e.off(this._childMarkerEventHandlers,this),this._featureGroup.hasLayer(e)&&(this._featureGroup.removeLayer(e),e.clusterShow&&e.clusterShow()),this):this:(!this._arraySplice(this._needsClustering,e)&&this.hasLayer(e)&&this._needsRemoving.push({layer:e,latlng:e._latlng}),this.fire("layerremove",{layer:e}),this):(this._nonPointGroup.removeLayer(e),this.fire("layerremove",{layer:e}),this)},addLayers:function(e,t){if(!L.Util.isArray(e))return this.addLayer(e);var i,n=this._featureGroup,r=this._nonPointGroup,s=this.options.chunkedLoading,o=this.options.chunkInterval,a=this.options.chunkProgress,h=e.length,l=0,u=!0;if(this._map){var _=(new Date).getTime(),d=L.bind(function(){for(var c=(new Date).getTime();h>l;l++){if(s&&0===l%200){var p=(new Date).getTime()-c;if(p>o)break}if(i=e[l],i instanceof L.LayerGroup)u&&(e=e.slice(),u=!1),this._extractNonGroupLayers(i,e),h=e.length;else if(i.getLatLng){if(!this.hasLayer(i)&&(this._addLayer(i,this._maxZoom),t||this.fire("layeradd",{layer:i}),i.__parent&&2===i.__parent.getChildCount())){var f=i.__parent.getAllChildMarkers(),m=f[0]===i?f[1]:f[0];n.removeLayer(m)}}else r.addLayer(i),t||this.fire("layeradd",{layer:i})}a&&a(l,h,(new Date).getTime()-_),l===h?(this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout(d,this.options.chunkDelay)},this);d()}else for(var c=this._needsClustering;h>l;l++)i=e[l],i instanceof L.LayerGroup?(u&&(e=e.slice(),u=!1),this._extractNonGroupLayers(i,e),h=e.length):i.getLatLng?this.hasLayer(i)||c.push(i):r.addLayer(i);return this},removeLayers:function(e){var t,i,n=e.length,r=this._featureGroup,s=this._nonPointGroup,o=!0;if(!this._map){for(t=0;n>t;t++)i=e[t],i instanceof L.LayerGroup?(o&&(e=e.slice(),o=!1),this._extractNonGroupLayers(i,e),n=e.length):(this._arraySplice(this._needsClustering,i),s.removeLayer(i),this.hasLayer(i)&&this._needsRemoving.push({layer:i,latlng:i._latlng}),this.fire("layerremove",{layer:i}));return this}if(this._unspiderfy){this._unspiderfy();var a=e.slice(),h=n;for(t=0;h>t;t++)i=a[t],i instanceof L.LayerGroup?(this._extractNonGroupLayers(i,a),h=a.length):this._unspiderfyLayer(i)}for(t=0;n>t;t++)i=e[t],i instanceof L.LayerGroup?(o&&(e=e.slice(),o=!1),this._extractNonGroupLayers(i,e),n=e.length):i.__parent?(this._removeLayer(i,!0,!0),this.fire("layerremove",{layer:i}),r.hasLayer(i)&&(r.removeLayer(i),i.clusterShow&&i.clusterShow())):(s.removeLayer(i),this.fire("layerremove",{layer:i}));return this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),this},clearLayers:function(){return this._map||(this._needsClustering=[],this._needsRemoving=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(e){e.off(this._childMarkerEventHandlers,this),delete e.__parent},this),this._map&&this._generateInitialClusters(),this},getBounds:function(){var e=new L.LatLngBounds;this._topClusterLevel&&e.extend(this._topClusterLevel._bounds);for(var t=this._needsClustering.length-1;t>=0;t--)e.extend(this._needsClustering[t].getLatLng());return e.extend(this._nonPointGroup.getBounds()),e},eachLayer:function(e,t){var i,n,r,s=this._needsClustering.slice(),o=this._needsRemoving;for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(s),n=s.length-1;n>=0;n--){for(i=!0,r=o.length-1;r>=0;r--)if(o[r].layer===s[n]){i=!1;break}i&&e.call(t,s[n])}this._nonPointGroup.eachLayer(e,t)},getLayers:function(){var e=[];return this.eachLayer(function(t){e.push(t)}),e},getLayer:function(e){var t=null;return e=parseInt(e,10),this.eachLayer(function(i){L.stamp(i)===e&&(t=i)}),t},hasLayer:function(e){if(!e)return!1;var t,i=this._needsClustering;for(t=i.length-1;t>=0;t--)if(i[t]===e)return!0;for(i=this._needsRemoving,t=i.length-1;t>=0;t--)if(i[t].layer===e)return!1;return!(!e.__parent||e.__parent._group!==this)||this._nonPointGroup.hasLayer(e)},zoomToShowLayer:function(e,t){"function"!=typeof t&&(t=function(){});var i=function(){!e._icon&&!e.__parent._icon||this._inZoomAnimation||(this._map.off("moveend",i,this),this.off("animationend",i,this),e._icon?t():e.__parent._icon&&(this.once("spiderfied",t,this),e.__parent.spiderfy()))};e._icon&&this._map.getBounds().contains(e.getLatLng())?t():e.__parent._zoom<Math.round(this._map._zoom)?(this._map.on("moveend",i,this),this._map.panTo(e.getLatLng())):(this._map.on("moveend",i,this),this.on("animationend",i,this),e.__parent.zoomToBounds())},onAdd:function(e){this._map=e;var t,i,n;if(!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.addTo(e),this._nonPointGroup.addTo(e),this._gridClusters||this._generateInitialClusters(),this._maxLat=e.options.crs.projection.MAX_LATITUDE,t=0,i=this._needsRemoving.length;i>t;t++)n=this._needsRemoving[t],n.newlatlng=n.layer._latlng,n.layer._latlng=n.latlng;for(t=0,i=this._needsRemoving.length;i>t;t++)n=this._needsRemoving[t],this._removeLayer(n.layer,!0),n.layer._latlng=n.newlatlng;this._needsRemoving=[],this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),i=this._needsClustering,this._needsClustering=[],this.addLayers(i,!0)},onRemove:function(e){e.off("zoomend",this._zoomEnd,this),e.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),delete this._maxLat,this._hideCoverage(),this._featureGroup.remove(),this._nonPointGroup.remove(),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(e){for(var t=e;t&&!t._icon;)t=t.__parent;return t||null},_arraySplice:function(e,t){for(var i=e.length-1;i>=0;i--)if(e[i]===t)return e.splice(i,1),!0},_removeFromGridUnclustered:function(e,t){for(var i=this._map,n=this._gridUnclustered,r=Math.floor(this._map.getMinZoom());t>=r&&n[t].removeObject(e,i.project(e.getLatLng(),t));t--);},_childMarkerDragStart:function(e){e.target.__dragStart=e.target._latlng},_childMarkerMoved:function(e){if(!this._ignoreMove&&!e.target.__dragStart){var t=e.target._popup&&e.target._popup.isOpen();this._moveChild(e.target,e.oldLatLng,e.latlng),t&&e.target.openPopup()}},_moveChild:function(e,t,i){e._latlng=t,this.removeLayer(e),e._latlng=i,this.addLayer(e)},_childMarkerDragEnd:function(e){var t=e.target.__dragStart;delete e.target.__dragStart,t&&this._moveChild(e.target,t,e.target._latlng)},_removeLayer:function(e,t,i){var n=this._gridClusters,r=this._gridUnclustered,s=this._featureGroup,o=this._map,a=Math.floor(this._map.getMinZoom());t&&this._removeFromGridUnclustered(e,this._maxZoom);var h,l=e.__parent,u=l._markers;for(this._arraySplice(u,e);l&&(l._childCount--,l._boundsNeedUpdate=!0,!(l._zoom<a));)t&&l._childCount<=1?(h=l._markers[0]===e?l._markers[1]:l._markers[0],n[l._zoom].removeObject(l,o.project(l._cLatLng,l._zoom)),r[l._zoom].addObject(h,o.project(h.getLatLng(),l._zoom)),this._arraySplice(l.__parent._childClusters,l),l.__parent._markers.push(h),h.__parent=l.__parent,l._icon&&(s.removeLayer(l),i||s.addLayer(h))):l._iconNeedsUpdate=!0,l=l.__parent;delete e.__parent},_isOrIsParent:function(e,t){for(;t;){if(e===t)return!0;t=t.parentNode}return!1},fire:function(e,t,i){if(t&&t.layer instanceof L.MarkerCluster){if(t.originalEvent&&this._isOrIsParent(t.layer._icon,t.originalEvent.relatedTarget))return;e="cluster"+e}L.FeatureGroup.prototype.fire.call(this,e,t,i)},listens:function(e,t){return L.FeatureGroup.prototype.listens.call(this,e,t)||L.FeatureGroup.prototype.listens.call(this,"cluster"+e,t)},_defaultIconCreateFunction:function(e){var t=e.getChildCount(),i=" marker-cluster-";return i+=10>t?"small":100>t?"medium":"large",new L.DivIcon({html:"<div><span>"+t+"</span></div>",className:"marker-cluster"+i,iconSize:new L.Point(40,40)})},_bindEvents:function(){var e=this._map,t=this.options.spiderfyOnMaxZoom,i=this.options.showCoverageOnHover,n=this.options.zoomToBoundsOnClick;(t||n)&&this.on("clusterclick",this._zoomOrSpiderfy,this),i&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),e.on("zoomend",this._hideCoverage,this))},_zoomOrSpiderfy:function(e){for(var t=e.layer,i=t;1===i._childClusters.length;)i=i._childClusters[0];i._zoom===this._maxZoom&&i._childCount===t._childCount&&this.options.spiderfyOnMaxZoom?t.spiderfy():this.options.zoomToBoundsOnClick&&t.zoomToBounds(),e.originalEvent&&13===e.originalEvent.keyCode&&this._map._container.focus()},_showCoverage:function(e){var t=this._map;this._inZoomAnimation||(this._shownPolygon&&t.removeLayer(this._shownPolygon),e.layer.getChildCount()>2&&e.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(e.layer.getConvexHull(),this.options.polygonOptions),t.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var e=this.options.spiderfyOnMaxZoom,t=this.options.showCoverageOnHover,i=this.options.zoomToBoundsOnClick,n=this._map;(e||i)&&this.off("clusterclick",this._zoomOrSpiderfy,this),t&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),n.off("zoomend",this._hideCoverage,this))},_zoomEnd:function(){this._map&&(this._mergeSplitClusters(),this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var e=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),e),this._currentShownBounds=e}},_generateInitialClusters:function(){var e=Math.ceil(this._map.getMaxZoom()),t=Math.floor(this._map.getMinZoom()),i=this.options.maxClusterRadius,n=i;"function"!=typeof i&&(n=function(){return i}),null!==this.options.disableClusteringAtZoom&&(e=this.options.disableClusteringAtZoom-1),this._maxZoom=e,this._gridClusters={},this._gridUnclustered={};for(var r=e;r>=t;r--)this._gridClusters[r]=new L.DistanceGrid(n(r)),this._gridUnclustered[r]=new L.DistanceGrid(n(r));this._topClusterLevel=new this._markerCluster(this,t-1)},_addLayer:function(e,t){var i,n,r=this._gridClusters,s=this._gridUnclustered,o=Math.floor(this._map.getMinZoom());for(this.options.singleMarkerMode&&this._overrideMarkerIcon(e),e.on(this._childMarkerEventHandlers,this);t>=o;t--){i=this._map.project(e.getLatLng(),t);var a=r[t].getNearObject(i);if(a)return a._addChild(e),e.__parent=a,void 0;if(a=s[t].getNearObject(i)){var h=a.__parent;h&&this._removeLayer(a,!1);var l=new this._markerCluster(this,t,a,e);r[t].addObject(l,this._map.project(l._cLatLng,t)),a.__parent=l,e.__parent=l;var u=l;for(n=t-1;n>h._zoom;n--)u=new this._markerCluster(this,n,u),r[n].addObject(u,this._map.project(a.getLatLng(),n));return h._addChild(u),this._removeFromGridUnclustered(a,t),void 0}s[t].addObject(e,i)}this._topClusterLevel._addChild(e),e.__parent=this._topClusterLevel},_refreshClustersIcons:function(){this._featureGroup.eachLayer(function(e){e instanceof L.MarkerCluster&&e._iconNeedsUpdate&&e._updateIcon()})},_enqueue:function(e){this._queue.push(e),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var e=0;e<this._queue.length;e++)this._queue[e].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){var e=Math.round(this._map._zoom);this._processQueue(),this._zoom<e&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,e)):this._zoom>e?(this._animationStart(),this._animationZoomOut(this._zoom,e)):this._moveEnd()},_getExpandedVisibleBounds:function(){return this.options.removeOutsideVisibleBounds?L.Browser.mobile?this._checkBoundsMaxLat(this._map.getBounds()):this._checkBoundsMaxLat(this._map.getBounds().pad(1)):this._mapBoundsInfinite},_checkBoundsMaxLat:function(e){var t=this._maxLat;return void 0!==t&&(e.getNorth()>=t&&(e._northEast.lat=1/0),e.getSouth()<=-t&&(e._southWest.lat=-1/0)),e},_animationAddLayerNonAnimated:function(e,t){if(t===e)this._featureGroup.addLayer(e);else if(2===t._childCount){t._addToMap();var i=t.getAllChildMarkers();this._featureGroup.removeLayer(i[0]),this._featureGroup.removeLayer(i[1])}else t._updateIcon()},_extractNonGroupLayers:function(e,t){var i,n=e.getLayers(),r=0;for(t=t||[];r<n.length;r++)i=n[r],i instanceof L.LayerGroup?this._extractNonGroupLayers(i,t):t.push(i);return t},_overrideMarkerIcon:function(e){var t=e.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[e]}});return t}});L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-1/0,-1/0),new L.LatLng(1/0,1/0))}),L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),e),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationZoomOut:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),e),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationAddLayer:function(e,t){this._animationAddLayerNonAnimated(e,t)}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationZoomIn:function(e,t){var i,n=this._getExpandedVisibleBounds(),r=this._featureGroup,s=Math.floor(this._map.getMinZoom());this._ignoreMove=!0,this._topClusterLevel._recursively(n,e,s,function(s){var o,a=s._latlng,h=s._markers;for(n.contains(a)||(a=null),s._isSingleParent()&&e+1===t?(r.removeLayer(s),s._recursivelyAddChildrenToMap(null,t,n)):(s.clusterHide(),s._recursivelyAddChildrenToMap(a,t,n)),i=h.length-1;i>=0;i--)o=h[i],n.contains(o._latlng)||r.removeLayer(o)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(n,t),r.eachLayer(function(e){e instanceof L.MarkerCluster||!e._icon||e.clusterShow()}),this._topClusterLevel._recursively(n,e,t,function(e){e._recursivelyRestoreChildPositions(t)}),this._ignoreMove=!1,this._enqueue(function(){this._topClusterLevel._recursively(n,e,s,function(e){r.removeLayer(e),e.clusterShow()}),this._animationEnd()})},_animationZoomOut:function(e,t){this._animationZoomOutSingle(this._topClusterLevel,e-1,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),e,this._getExpandedVisibleBounds())},_animationAddLayer:function(e,t){var i=this,n=this._featureGroup;n.addLayer(e),t!==e&&(t._childCount>2?(t._updateIcon(),this._forceLayout(),this._animationStart(),e._setPos(this._map.latLngToLayerPoint(t.getLatLng())),e.clusterHide(),this._enqueue(function(){n.removeLayer(e),e.clusterShow(),i._animationEnd()})):(this._forceLayout(),i._animationStart(),i._animationZoomOutSingle(t,this._map.getMaxZoom(),this._zoom)))}},_animationZoomOutSingle:function(e,t,i){var n=this._getExpandedVisibleBounds(),r=Math.floor(this._map.getMinZoom());e._recursivelyAnimateChildrenInAndAddSelfToMap(n,r,t+1,i);var s=this;this._forceLayout(),e._recursivelyBecomeVisible(n,i),this._enqueue(function(){if(1===e._childCount){var o=e._markers[0];this._ignoreMove=!0,o.setLatLng(o.getLatLng()),this._ignoreMove=!1,o.clusterShow&&o.clusterShow()}else e._recursively(n,i,r,function(e){e._recursivelyRemoveChildrenFromMap(n,r,t+1)});s._animationEnd()})},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_forceLayout:function(){L.Util.falseFn(document.body.offsetWidth)}}),L.markerClusterGroup=function(e){return new L.MarkerClusterGroup(e)};var i=L.MarkerCluster=L.Marker.extend({options:L.Icon.prototype.options,initialize:function(e,t,i,n){L.Marker.prototype.initialize.call(this,i?i._cLatLng||i.getLatLng():new L.LatLng(0,0),{icon:this,pane:e.options.clusterPane}),this._group=e,this._zoom=t,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,i&&this._addChild(i),n&&this._addChild(n)},getAllChildMarkers:function(e,t){e=e||[];for(var i=this._childClusters.length-1;i>=0;i--)this._childClusters[i].getAllChildMarkers(e);for(var n=this._markers.length-1;n>=0;n--)t&&this._markers[n].__dragStart||e.push(this._markers[n]);return e},getChildCount:function(){return this._childCount},zoomToBounds:function(e){for(var t,i=this._childClusters.slice(),n=this._group._map,r=n.getBoundsZoom(this._bounds),s=this._zoom+1,o=n.getZoom();i.length>0&&r>s;){s++;var a=[];for(t=0;t<i.length;t++)a=a.concat(i[t]._childClusters);i=a}r>s?this._group._map.setView(this._latlng,s):o>=r?this._group._map.setView(this._latlng,o+1):this._group._map.fitBounds(this._bounds,e)},getBounds:function(){var e=new L.LatLngBounds;return e.extend(this._bounds),e},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(e,t){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(e),e instanceof L.MarkerCluster?(t||(this._childClusters.push(e),e.__parent=this),this._childCount+=e._childCount):(t||this._markers.push(e),this._childCount++),this.__parent&&this.__parent._addChild(e,!0)},_setClusterCenter:function(e){this._cLatLng||(this._cLatLng=e._cLatLng||e._latlng)},_resetBounds:function(){var e=this._bounds;e._southWest&&(e._southWest.lat=1/0,e._southWest.lng=1/0),e._northEast&&(e._northEast.lat=-1/0,e._northEast.lng=-1/0)},_recalculateBounds:function(){var e,t,i,n,r=this._markers,s=this._childClusters,o=0,a=0,h=this._childCount;if(0!==h){for(this._resetBounds(),e=0;e<r.length;e++)i=r[e]._latlng,this._bounds.extend(i),o+=i.lat,a+=i.lng;for(e=0;e<s.length;e++)t=s[e],t._boundsNeedUpdate&&t._recalculateBounds(),this._bounds.extend(t._bounds),i=t._wLatLng,n=t._childCount,o+=i.lat*n,a+=i.lng*n;this._latlng=this._wLatLng=new L.LatLng(o/h,a/h),this._boundsNeedUpdate=!1}},_addToMap:function(e){e&&(this._backupLatlng=this._latlng,this.setLatLng(e)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(e,t,i){this._recursively(e,this._group._map.getMinZoom(),i-1,function(e){var i,n,r=e._markers;for(i=r.length-1;i>=0;i--)n=r[i],n._icon&&(n._setPos(t),n.clusterHide())},function(e){var i,n,r=e._childClusters;for(i=r.length-1;i>=0;i--)n=r[i],n._icon&&(n._setPos(t),n.clusterHide())})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(e,t,i,n){this._recursively(e,n,t,function(r){r._recursivelyAnimateChildrenIn(e,r._group._map.latLngToLayerPoint(r.getLatLng()).round(),i),r._isSingleParent()&&i-1===n?(r.clusterShow(),r._recursivelyRemoveChildrenFromMap(e,t,i)):r.clusterHide(),r._addToMap()})},_recursivelyBecomeVisible:function(e,t){this._recursively(e,this._group._map.getMinZoom(),t,null,function(e){e.clusterShow()})},_recursivelyAddChildrenToMap:function(e,t,i){this._recursively(i,this._group._map.getMinZoom()-1,t,function(n){if(t!==n._zoom)for(var r=n._markers.length-1;r>=0;r--){var s=n._markers[r];i.contains(s._latlng)&&(e&&(s._backupLatlng=s.getLatLng(),s.setLatLng(e),s.clusterHide&&s.clusterHide()),n._group._featureGroup.addLayer(s))}},function(t){t._addToMap(e)})},_recursivelyRestoreChildPositions:function(e){for(var t=this._markers.length-1;t>=0;t--){var i=this._markers[t];i._backupLatlng&&(i.setLatLng(i._backupLatlng),delete i._backupLatlng)}if(e-1===this._zoom)for(var n=this._childClusters.length-1;n>=0;n--)this._childClusters[n]._restorePosition();else for(var r=this._childClusters.length-1;r>=0;r--)this._childClusters[r]._recursivelyRestoreChildPositions(e)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(e,t,i,n){var r,s;this._recursively(e,t-1,i-1,function(e){for(s=e._markers.length-1;s>=0;s--)r=e._markers[s],n&&n.contains(r._latlng)||(e._group._featureGroup.removeLayer(r),r.clusterShow&&r.clusterShow())},function(e){for(s=e._childClusters.length-1;s>=0;s--)r=e._childClusters[s],n&&n.contains(r._latlng)||(e._group._featureGroup.removeLayer(r),r.clusterShow&&r.clusterShow())})},_recursively:function(e,t,i,n,r){var s,o,a=this._childClusters,h=this._zoom;if(h>=t&&(n&&n(this),r&&h===i&&r(this)),t>h||i>h)for(s=a.length-1;s>=0;s--)o=a[s],o._boundsNeedUpdate&&o._recalculateBounds(),e.intersects(o._bounds)&&o._recursively(e,t,i,n,r)},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}});L.Marker.include({clusterHide:function(){var e=this.options.opacity;return this.setOpacity(0),this.options.opacity=e,this},clusterShow:function(){return this.setOpacity(this.options.opacity)}}),L.DistanceGrid=function(e){this._cellSize=e,this._sqCellSize=e*e,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(e,t){var i=this._getCoord(t.x),n=this._getCoord(t.y),r=this._grid,s=r[n]=r[n]||{},o=s[i]=s[i]||[],a=L.Util.stamp(e);this._objectPoint[a]=t,o.push(e)},updateObject:function(e,t){this.removeObject(e),this.addObject(e,t)},removeObject:function(e,t){var i,n,r=this._getCoord(t.x),s=this._getCoord(t.y),o=this._grid,a=o[s]=o[s]||{},h=a[r]=a[r]||[];for(delete this._objectPoint[L.Util.stamp(e)],i=0,n=h.length;n>i;i++)if(h[i]===e)return h.splice(i,1),1===n&&delete a[r],!0},eachObject:function(e,t){var i,n,r,s,o,a,h,l=this._grid;for(i in l){o=l[i];for(n in o)for(a=o[n],r=0,s=a.length;s>r;r++)h=e.call(t,a[r]),h&&(r--,s--)}},getNearObject:function(e){var t,i,n,r,s,o,a,h,l=this._getCoord(e.x),u=this._getCoord(e.y),_=this._objectPoint,d=this._sqCellSize,c=null;for(t=u-1;u+1>=t;t++)if(r=this._grid[t])for(i=l-1;l+1>=i;i++)if(s=r[i])for(n=0,o=s.length;o>n;n++)a=s[n],h=this._sqDist(_[L.Util.stamp(a)],e),(d>h||d>=h&&null===c)&&(d=h,c=a);return c},_getCoord:function(e){var t=Math.floor(e/this._cellSize);return isFinite(t)?t:e},_sqDist:function(e,t){var i=t.x-e.x,n=t.y-e.y;return i*i+n*n}},function(){L.QuickHull={getDistant:function(e,t){var i=t[1].lat-t[0].lat,n=t[0].lng-t[1].lng;return n*(e.lat-t[0].lat)+i*(e.lng-t[0].lng)},findMostDistantPointFromBaseLine:function(e,t){var i,n,r,s=0,o=null,a=[];for(i=t.length-1;i>=0;i--)n=t[i],r=this.getDistant(n,e),r>0&&(a.push(n),r>s&&(s=r,o=n));return{maxPoint:o,newPoints:a}},buildConvexHull:function(e,t){var i=[],n=this.findMostDistantPointFromBaseLine(e,t);return n.maxPoint?(i=i.concat(this.buildConvexHull([e[0],n.maxPoint],n.newPoints)),i=i.concat(this.buildConvexHull([n.maxPoint,e[1]],n.newPoints))):[e[0]]},getConvexHull:function(e){var t,i=!1,n=!1,r=!1,s=!1,o=null,a=null,h=null,l=null,u=null,_=null;for(t=e.length-1;t>=0;t--){var d=e[t];(i===!1||d.lat>i)&&(o=d,i=d.lat),(n===!1||d.lat<n)&&(a=d,n=d.lat),(r===!1||d.lng>r)&&(h=d,r=d.lng),(s===!1||d.lng<s)&&(l=d,s=d.lng)}n!==i?(_=a,u=o):(_=l,u=h);var c=[].concat(this.buildConvexHull([_,u],e),this.buildConvexHull([u,_],e));return c}}}(),L.MarkerCluster.include({getConvexHull:function(){var e,t,i=this.getAllChildMarkers(),n=[];for(t=i.length-1;t>=0;t--)e=i[t].getLatLng(),n.push(e);return L.QuickHull.getConvexHull(n)}}),L.MarkerCluster.include({_2PI:2*Math.PI,_circleFootSeparation:25,_circleStartAngle:0,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(this._group._spiderfied!==this&&!this._group._inZoomAnimation){var e,t=this.getAllChildMarkers(null,!0),i=this._group,n=i._map,r=n.latLngToLayerPoint(this._latlng);this._group._unspiderfy(),this._group._spiderfied=this,t.length>=this._circleSpiralSwitchover?e=this._generatePointsSpiral(t.length,r):(r.y+=10,e=this._generatePointsCircle(t.length,r)),this._animationSpiderfy(t,e)}},unspiderfy:function(e){this._group._inZoomAnimation||(this._animationUnspiderfy(e),this._group._spiderfied=null)},_generatePointsCircle:function(e,t){var i,n,r=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+e),s=r/this._2PI,o=this._2PI/e,a=[];for(s=Math.max(s,35),a.length=e,i=0;e>i;i++)n=this._circleStartAngle+i*o,a[i]=new L.Point(t.x+s*Math.cos(n),t.y+s*Math.sin(n))._round();return a},_generatePointsSpiral:function(e,t){var i,n=this._group.options.spiderfyDistanceMultiplier,r=n*this._spiralLengthStart,s=n*this._spiralFootSeparation,o=n*this._spiralLengthFactor*this._2PI,a=0,h=[];for(h.length=e,i=e;i>=0;i--)e>i&&(h[i]=new L.Point(t.x+r*Math.cos(a),t.y+r*Math.sin(a))._round()),a+=s/r+5e-4*i,r+=o/a;return h},_noanimationUnspiderfy:function(){var e,t,i=this._group,n=i._map,r=i._featureGroup,s=this.getAllChildMarkers(null,!0);for(i._ignoreMove=!0,this.setOpacity(1),t=s.length-1;t>=0;t--)e=s[t],r.removeLayer(e),e._preSpiderfyLatlng&&(e.setLatLng(e._preSpiderfyLatlng),delete e._preSpiderfyLatlng),e.setZIndexOffset&&e.setZIndexOffset(0),e._spiderLeg&&(n.removeLayer(e._spiderLeg),delete e._spiderLeg);i.fire("unspiderfied",{cluster:this,markers:s}),i._ignoreMove=!1,i._spiderfied=null}}),L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(e,t){var i,n,r,s,o=this._group,a=o._map,h=o._featureGroup,l=this._group.options.spiderLegPolylineOptions;for(o._ignoreMove=!0,i=0;i<e.length;i++)s=a.layerPointToLatLng(t[i]),n=e[i],r=new L.Polyline([this._latlng,s],l),a.addLayer(r),n._spiderLeg=r,n._preSpiderfyLatlng=n._latlng,n.setLatLng(s),n.setZIndexOffset&&n.setZIndexOffset(1e6),h.addLayer(n);this.setOpacity(.3),o._ignoreMove=!1,o.fire("spiderfied",{cluster:this,markers:e})},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerCluster.include({_animationSpiderfy:function(e,t){var i,n,r,s,o,a,h=this,l=this._group,u=l._map,_=l._featureGroup,d=this._latlng,c=u.latLngToLayerPoint(d),p=L.Path.SVG,f=L.extend({},this._group.options.spiderLegPolylineOptions),m=f.opacity;for(void 0===m&&(m=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),p?(f.opacity=0,f.className=(f.className||"")+" leaflet-cluster-spider-leg"):f.opacity=m,l._ignoreMove=!0,i=0;i<e.length;i++)n=e[i],a=u.layerPointToLatLng(t[i]),r=new L.Polyline([d,a],f),u.addLayer(r),n._spiderLeg=r,p&&(s=r._path,o=s.getTotalLength()+.1,s.style.strokeDasharray=o,s.style.strokeDashoffset=o),n.setZIndexOffset&&n.setZIndexOffset(1e6),n.clusterHide&&n.clusterHide(),_.addLayer(n),n._setPos&&n._setPos(c);for(l._forceLayout(),l._animationStart(),i=e.length-1;i>=0;i--)a=u.layerPointToLatLng(t[i]),n=e[i],n._preSpiderfyLatlng=n._latlng,n.setLatLng(a),n.clusterShow&&n.clusterShow(),p&&(r=n._spiderLeg,s=r._path,s.style.strokeDashoffset=0,r.setStyle({opacity:m}));this.setOpacity(.3),l._ignoreMove=!1,setTimeout(function(){l._animationEnd(),l.fire("spiderfied",{cluster:h,markers:e})},200)},_animationUnspiderfy:function(e){var t,i,n,r,s,o,a=this,h=this._group,l=h._map,u=h._featureGroup,_=e?l._latLngToNewLayerPoint(this._latlng,e.zoom,e.center):l.latLngToLayerPoint(this._latlng),d=this.getAllChildMarkers(null,!0),c=L.Path.SVG;for(h._ignoreMove=!0,h._animationStart(),this.setOpacity(1),i=d.length-1;i>=0;i--)t=d[i],t._preSpiderfyLatlng&&(t.closePopup(),t.setLatLng(t._preSpiderfyLatlng),delete t._preSpiderfyLatlng,o=!0,t._setPos&&(t._setPos(_),o=!1),t.clusterHide&&(t.clusterHide(),o=!1),o&&u.removeLayer(t),c&&(n=t._spiderLeg,r=n._path,s=r.getTotalLength()+.1,r.style.strokeDashoffset=s,n.setStyle({opacity:0})));h._ignoreMove=!1,setTimeout(function(){var e=0;for(i=d.length-1;i>=0;i--)t=d[i],t._spiderLeg&&e++;for(i=d.length-1;i>=0;i--)t=d[i],t._spiderLeg&&(t.clusterShow&&t.clusterShow(),t.setZIndexOffset&&t.setZIndexOffset(0),e>1&&u.removeLayer(t),l.removeLayer(t._spiderLeg),delete t._spiderLeg);h._animationEnd(),h.fire("unspiderfied",{cluster:a,markers:d})},200)}}),L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:function(){this._unspiderfy.apply(this,arguments)},_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Browser.touch||this._map.getRenderer(this)},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._map.off("zoomend",this._noanimationUnspiderfy,this),this._noanimationUnspiderfy()
},_unspiderfyZoomStart:function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(e){L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(e))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(e){this._spiderfied&&this._spiderfied.unspiderfy(e)},_noanimationUnspiderfy:function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(e){e._spiderLeg&&(this._featureGroup.removeLayer(e),e.clusterShow&&e.clusterShow(),e.setZIndexOffset&&e.setZIndexOffset(0),this._map.removeLayer(e._spiderLeg),delete e._spiderLeg)}}),L.MarkerClusterGroup.include({refreshClusters:function(e){return e?e instanceof L.MarkerClusterGroup?e=e._topClusterLevel.getAllChildMarkers():e instanceof L.LayerGroup?e=e._layers:e instanceof L.MarkerCluster?e=e.getAllChildMarkers():e instanceof L.Marker&&(e=[e]):e=this._topClusterLevel.getAllChildMarkers(),this._flagParentsIconsNeedUpdate(e),this._refreshClustersIcons(),this.options.singleMarkerMode&&this._refreshSingleMarkerModeMarkers(e),this},_flagParentsIconsNeedUpdate:function(e){var t,i;for(t in e)for(i=e[t].__parent;i;)i._iconNeedsUpdate=!0,i=i.__parent},_refreshSingleMarkerModeMarkers:function(e){var t,i;for(t in e)i=e[t],this.hasLayer(i)&&i.setIcon(this._overrideMarkerIcon(i))}}),L.Marker.include({refreshIconOptions:function(e,t){var i=this.options.icon;return L.setOptions(i,e),this.setIcon(i),t&&this.__parent&&this.__parent._group.refreshClusters(this),this}}),e.MarkerClusterGroup=t,e.MarkerCluster=i});

},{}],"node_modules/leaflet/dist/leaflet.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./images/layers.png":[["layers.69e4b0dc.png","node_modules/leaflet/dist/images/layers.png"],"node_modules/leaflet/dist/images/layers.png"],"./images/layers-2x.png":[["layers-2x.c9958c4f.png","node_modules/leaflet/dist/images/layers-2x.png"],"node_modules/leaflet/dist/images/layers-2x.png"],"./images/marker-icon.png":[["marker-icon.3caa7cec.png","node_modules/leaflet/dist/images/marker-icon.png"],"node_modules/leaflet/dist/images/marker-icon.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/leaflet.markercluster/dist/MarkerCluster.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"data/corona_markers.json":[function(require,module,exports) {
module.exports = {
  "type": "FeatureCollection",
  "name": "corona_markers",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "features": [{
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Amsterdam",
      "code": "0363"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.90454395880494, 52.373442677628717]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Amsterdam",
      "code": "0363"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.90454395880494, 52.373442677628717]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Amsterdam",
      "code": "0363"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.90454395880494, 52.373442677628717]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Amsterdam",
      "code": "0363"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.90454395880494, 52.373442677628717]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Amsterdam",
      "code": "0363"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.90454395880494, 52.373442677628717]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Amsterdam",
      "code": "0363"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.90454395880494, 52.373442677628717]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "'s-Hertogenbosch",
      "code": "0796"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.351926203101234, 51.716809335548959]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "'s-Hertogenbosch",
      "code": "0796"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.351926203101234, 51.716809335548959]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "'s-Hertogenbosch",
      "code": "0796"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.351926203101234, 51.716809335548959]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Oegstgeest",
      "code": "0579"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.471210594887227, 52.185552707634905]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Haaren",
      "code": "0788"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.218108455890217, 51.626050929371893]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Haaren",
      "code": "0788"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.218108455890217, 51.626050929371893]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Waalwijk",
      "code": "0867"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.011821611903081, 51.692320087269813]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Waalwijk",
      "code": "0867"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.011821611903081, 51.692320087269813]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Waalwijk",
      "code": "0867"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.011821611903081, 51.692320087269813]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Waalwijk",
      "code": "0867"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.011821611903081, 51.692320087269813]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Waalwijk",
      "code": "0867"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.011821611903081, 51.692320087269813]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Deurne",
      "code": "0762"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.826976348479612, 51.4362205073908]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Vijfheerenlanden",
      "code": "1961"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.056755337983452, 51.935983842921189]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "De Bilt",
      "code": "0310"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.17431250414956, 52.141732600522673]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "De Bilt",
      "code": "0310"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.17431250414956, 52.141732600522673]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "De Bilt",
      "code": "0310"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.17431250414956, 52.141732600522673]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "De Bilt",
      "code": "0310"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.17431250414956, 52.141732600522673]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "De Bilt",
      "code": "0310"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.17431250414956, 52.141732600522673]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "De Bilt",
      "code": "0310"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.17431250414956, 52.141732600522673]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Bernheze",
      "code": "1721"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.520664325742123, 51.684682607348954]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Bernheze",
      "code": "1721"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.520664325742123, 51.684682607348954]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Waterland",
      "code": "0852"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.063246898651594, 52.448963994456228]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Uden",
      "code": "0856"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.65184538449909, 51.655489641462964]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Uden",
      "code": "0856"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.65184538449909, 51.655489641462964]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Uden",
      "code": "0856"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.65184538449909, 51.655489641462964]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Uden",
      "code": "0856"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.65184538449909, 51.655489641462964]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Uden",
      "code": "0856"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.65184538449909, 51.655489641462964]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Uden",
      "code": "0856"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.65184538449909, 51.655489641462964]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Uden",
      "code": "0856"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.65184538449909, 51.655489641462964]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Uden",
      "code": "0856"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.65184538449909, 51.655489641462964]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Uden",
      "code": "0856"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.65184538449909, 51.655489641462964]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Uden",
      "code": "0856"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.65184538449909, 51.655489641462964]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Uden",
      "code": "0856"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.65184538449909, 51.655489641462964]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Uden",
      "code": "0856"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.65184538449909, 51.655489641462964]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Maastricht",
      "code": "0935"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.699530381059366, 50.852967145591229]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Maastricht",
      "code": "0935"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.699530381059366, 50.852967145591229]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Maastricht",
      "code": "0935"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.699530381059366, 50.852967145591229]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Maastricht",
      "code": "0935"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.699530381059366, 50.852967145591229]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Maastricht",
      "code": "0935"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.699530381059366, 50.852967145591229]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Maastricht",
      "code": "0935"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.699530381059366, 50.852967145591229]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Delft",
      "code": "0503"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.363105691737761, 51.998456723101199]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Best",
      "code": "0753"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.396467315360838, 51.51365335484379]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Best",
      "code": "0753"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.396467315360838, 51.51365335484379]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Houten",
      "code": "0321"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.181715330381173, 52.004095129909409]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Houten",
      "code": "0321"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.181715330381173, 52.004095129909409]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Houten",
      "code": "0321"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.181715330381173, 52.004095129909409]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Houten",
      "code": "0321"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.181715330381173, 52.004095129909409]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Houten",
      "code": "0321"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.181715330381173, 52.004095129909409]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Houten",
      "code": "0321"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.181715330381173, 52.004095129909409]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Houten",
      "code": "0321"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.181715330381173, 52.004095129909409]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Houten",
      "code": "0321"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.181715330381173, 52.004095129909409]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Houten",
      "code": "0321"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.181715330381173, 52.004095129909409]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Houten",
      "code": "0321"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.181715330381173, 52.004095129909409]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Houten",
      "code": "0321"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.181715330381173, 52.004095129909409]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Houten",
      "code": "0321"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.181715330381173, 52.004095129909409]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Houten",
      "code": "0321"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.181715330381173, 52.004095129909409]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Maasdriel",
      "code": "0263"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.296924502350473, 51.776250815239109]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Alphen aan den Rijn",
      "code": "0484"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.640959773515626, 52.113321712474807]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Heusden",
      "code": "0797"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.160190885949772, 51.696761985006397]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Dinkelland",
      "code": "1774"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.914139080020418, 52.373010504524636]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Dinkelland",
      "code": "1774"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.914139080020418, 52.373010504524636]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Waalre",
      "code": "0866"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.464870191258435, 51.387291811033244]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Veldhoven",
      "code": "0861"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.383214388357032, 51.411856536819357]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tilburg",
      "code": "0855"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.068324449040283, 51.580026772464493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Meierijstad",
      "code": "1948"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.506397041370766, 51.592236704841945]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Meierijstad",
      "code": "1948"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.506397041370766, 51.592236704841945]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Meierijstad",
      "code": "1948"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.506397041370766, 51.592236704841945]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Meierijstad",
      "code": "1948"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.506397041370766, 51.592236704841945]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Meierijstad",
      "code": "1948"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.506397041370766, 51.592236704841945]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Meierijstad",
      "code": "1948"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.506397041370766, 51.592236704841945]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Meierijstad",
      "code": "1948"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.506397041370766, 51.592236704841945]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Meierijstad",
      "code": "1948"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.506397041370766, 51.592236704841945]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Meierijstad",
      "code": "1948"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.506397041370766, 51.592236704841945]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Meierijstad",
      "code": "1948"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.506397041370766, 51.592236704841945]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Gooise Meren",
      "code": "1942"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.123323554622014, 52.317949049208067]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Gooise Meren",
      "code": "1942"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.123323554622014, 52.317949049208067]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Etten-Leur",
      "code": "0777"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.644966209814083, 51.578315087652847]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Boekel",
      "code": "0755"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.693726026678925, 51.60667429194234]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Coevorden",
      "code": "0109"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.735911695668312, 52.740255478531068]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Coevorden",
      "code": "0109"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.735911695668312, 52.740255478531068]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Coevorden",
      "code": "0109"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.735911695668312, 52.740255478531068]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Coevorden",
      "code": "0109"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.735911695668312, 52.740255478531068]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Coevorden",
      "code": "0109"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.735911695668312, 52.740255478531068]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Coevorden",
      "code": "0109"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.735911695668312, 52.740255478531068]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Coevorden",
      "code": "0109"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.735911695668312, 52.740255478531068]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Coevorden",
      "code": "0109"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.735911695668312, 52.740255478531068]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Coevorden",
      "code": "0109"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.735911695668312, 52.740255478531068]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Simpelveld",
      "code": "0965"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.986644901041596, 50.828804080500099]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Simpelveld",
      "code": "0965"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.986644901041596, 50.828804080500099]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tubbergen",
      "code": "0183"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.776671355139665, 52.41058180413814]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Altena",
      "code": "1959"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.945931477173863, 51.76566263880094]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Altena",
      "code": "1959"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.945931477173863, 51.76566263880094]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Altena",
      "code": "1959"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.945931477173863, 51.76566263880094]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Altena",
      "code": "1959"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.945931477173863, 51.76566263880094]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Helmond",
      "code": "0794"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.656969875541203, 51.476151225287424]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Helmond",
      "code": "0794"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.656969875541203, 51.476151225287424]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Helmond",
      "code": "0794"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.656969875541203, 51.476151225287424]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Helmond",
      "code": "0794"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.656969875541203, 51.476151225287424]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Helmond",
      "code": "0794"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.656969875541203, 51.476151225287424]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Helmond",
      "code": "0794"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.656969875541203, 51.476151225287424]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Helmond",
      "code": "0794"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.656969875541203, 51.476151225287424]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Gemert-Bakel",
      "code": "1652"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.75429070684962, 51.540748398763633]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Leidschendam-Voorburg",
      "code": "1916"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.422294385192383, 52.090330507717098]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Borne",
      "code": "0147"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.743564384977534, 52.312330673437714]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Borne",
      "code": "0147"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.743564384977534, 52.312330673437714]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Borne",
      "code": "0147"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.743564384977534, 52.312330673437714]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Rotterdam",
      "code": "0599"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.276879581949601, 51.931017743854092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Landerd",
      "code": "1685"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.658960763271454, 51.716649529545606]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Loon op Zand",
      "code": "0809"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.047540126202141, 51.640569515600802]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Loon op Zand",
      "code": "0809"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.047540126202141, 51.640569515600802]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Loon op Zand",
      "code": "0809"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.047540126202141, 51.640569515600802]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Loon op Zand",
      "code": "0809"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.047540126202141, 51.640569515600802]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Loon op Zand",
      "code": "0809"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.047540126202141, 51.640569515600802]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Loon op Zand",
      "code": "0809"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.047540126202141, 51.640569515600802]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Loon op Zand",
      "code": "0809"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.047540126202141, 51.640569515600802]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Oss",
      "code": "0828"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.526401416074795, 51.781568289806927]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Beekdaelen",
      "code": "1954"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.897121163156082, 50.936725873227708]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Beekdaelen",
      "code": "1954"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.897121163156082, 50.936725873227708]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Beekdaelen",
      "code": "1954"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.897121163156082, 50.936725873227708]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Beekdaelen",
      "code": "1954"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.897121163156082, 50.936725873227708]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Wijchen",
      "code": "0296"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.70191345328336, 51.816735036161013]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Leudal",
      "code": "1640"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.884817157395882, 51.239442870211988]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Neder-Betuwe",
      "code": "1740"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.586867198080381, 51.915883777932933]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Dongen",
      "code": "0766"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.955449509995915, 51.635884398773747]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Dongen",
      "code": "0766"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.955449509995915, 51.635884398773747]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Dongen",
      "code": "0766"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.955449509995915, 51.635884398773747]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Huizen",
      "code": "0406"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.242063974589224, 52.298646902865769]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Voorst",
      "code": "0285"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.099116537129384, 52.225567742071846]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrecht",
      "code": "0344"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.07475437190386, 52.091137978719885]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrecht",
      "code": "0344"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.07475437190386, 52.091137978719885]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrecht",
      "code": "0344"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.07475437190386, 52.091137978719885]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrecht",
      "code": "0344"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.07475437190386, 52.091137978719885]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrecht",
      "code": "0344"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.07475437190386, 52.091137978719885]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrecht",
      "code": "0344"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.07475437190386, 52.091137978719885]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrecht",
      "code": "0344"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.07475437190386, 52.091137978719885]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrecht",
      "code": "0344"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.07475437190386, 52.091137978719885]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrecht",
      "code": "0344"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.07475437190386, 52.091137978719885]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrecht",
      "code": "0344"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.07475437190386, 52.091137978719885]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrecht",
      "code": "0344"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.07475437190386, 52.091137978719885]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrecht",
      "code": "0344"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.07475437190386, 52.091137978719885]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrecht",
      "code": "0344"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.07475437190386, 52.091137978719885]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Hellendoorn",
      "code": "0163"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.450860160537849, 52.386367528933327]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Hellendoorn",
      "code": "0163"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.450860160537849, 52.386367528933327]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "'s-Gravenhage",
      "code": "0518"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.293009674594854, 52.07207116871971]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "'s-Gravenhage",
      "code": "0518"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.293009674594854, 52.07207116871971]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Pijnacker-Nootdorp",
      "code": "1926"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.42195366598497, 52.017529980101294]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Pijnacker-Nootdorp",
      "code": "1926"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.42195366598497, 52.017529980101294]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Roermond",
      "code": "0957"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.011476738027607, 51.201190112980946]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrechtse Heuvelrug",
      "code": "1581"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.388321410888151, 52.034714526870836]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Utrechtse Heuvelrug",
      "code": "1581"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.388321410888151, 52.034714526870836]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Bronckhorst",
      "code": "1876"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.302955155031611, 52.045231667151185]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Bronckhorst",
      "code": "1876"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.302955155031611, 52.045231667151185]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Culemborg",
      "code": "0216"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.210380409299452, 51.945777865819473]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Sint-Michielsgestel",
      "code": "0845"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.378121616947739, 51.657068477221358]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Sint-Michielsgestel",
      "code": "0845"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.378121616947739, 51.657068477221358]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Sint-Michielsgestel",
      "code": "0845"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.378121616947739, 51.657068477221358]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Sint-Michielsgestel",
      "code": "0845"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.378121616947739, 51.657068477221358]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Sint-Michielsgestel",
      "code": "0845"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.378121616947739, 51.657068477221358]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Woerden",
      "code": "0632"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.898899336379786, 52.10693981365732]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Woerden",
      "code": "0632"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.898899336379786, 52.10693981365732]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Noordwijk",
      "code": "0575"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.476189653801145, 52.271145113046643]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Noordwijk",
      "code": "0575"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.476189653801145, 52.271145113046643]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "West Maas en Waal",
      "code": "0668"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.496593282993622, 51.851629488730602]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Krimpenerwaard",
      "code": "1931"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.737182026313357, 51.952389596190493]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Hoeksche Waard",
      "code": "1963"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.448705090934322, 51.76456718796252]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Hoeksche Waard",
      "code": "1963"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.448705090934322, 51.76456718796252]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Zeist",
      "code": "0355"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.255185646638755, 52.101965223337587]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Haarlem",
      "code": "0392"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.647530502365609, 52.383408082211389]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Haarlem",
      "code": "0392"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.647530502365609, 52.383408082211389]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Heemstede",
      "code": "0397"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.615360353591372, 52.344779750571846]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Stichtse Vecht",
      "code": "1904"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.012587202287017, 52.176948243166869]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Stichtse Vecht",
      "code": "1904"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.012587202287017, 52.176948243166869]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Stichtse Vecht",
      "code": "1904"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.012587202287017, 52.176948243166869]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Stichtse Vecht",
      "code": "1904"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.012587202287017, 52.176948243166869]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Stichtse Vecht",
      "code": "1904"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.012587202287017, 52.176948243166869]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Almelo",
      "code": "0141"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.65819561961092, 52.347890620200623]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Ridderkerk",
      "code": "0597"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.596108373761555, 51.868794408879118]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Albrandswaard",
      "code": "0613"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.435715056837845, 51.852042929339596]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Beuningen",
      "code": "0209"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.740275637807039, 51.862815385512704]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Beuningen",
      "code": "0209"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.740275637807039, 51.862815385512704]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Beuningen",
      "code": "0209"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.740275637807039, 51.862815385512704]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Goirle",
      "code": "0785"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.03307007009464, 51.512274570838812]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Goirle",
      "code": "0785"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.03307007009464, 51.512274570838812]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Goirle",
      "code": "0785"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.03307007009464, 51.512274570838812]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Goirle",
      "code": "0785"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.03307007009464, 51.512274570838812]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Zaanstad",
      "code": "0479"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.773012668286436, 52.462908898106235]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Zaanstad",
      "code": "0479"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.773012668286436, 52.462908898106235]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Blaricum",
      "code": "0376"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.274231432714287, 52.282958937667267]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Venlo",
      "code": "0983"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.15911190622785, 51.390954820764307]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Zeewolde",
      "code": "0050"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.455242011825033, 52.344361396045329]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Tiel",
      "code": "0281"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.406860162226484, 51.885082361173033]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Zaltbommel",
      "code": "0297"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.15844057161561, 51.792290699582246]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Vught",
      "code": "0865"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.268812414069878, 51.655584732893942]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Lansingerland",
      "code": "1621"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.506107290127652, 52.004008267325496]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Lansingerland",
      "code": "1621"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.506107290127652, 52.004008267325496]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Lansingerland",
      "code": "1621"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.506107290127652, 52.004008267325496]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Sittard-Geleen",
      "code": "1883"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.8282044909993, 51.004858770846774]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Sittard-Geleen",
      "code": "1883"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.8282044909993, 51.004858770846774]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Sittard-Geleen",
      "code": "1883"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.8282044909993, 51.004858770846774]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Sittard-Geleen",
      "code": "1883"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.8282044909993, 51.004858770846774]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Sittard-Geleen",
      "code": "1883"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.8282044909993, 51.004858770846774]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Sittard-Geleen",
      "code": "1883"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.8282044909993, 51.004858770846774]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Sittard-Geleen",
      "code": "1883"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.8282044909993, 51.004858770846774]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Sittard-Geleen",
      "code": "1883"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.8282044909993, 51.004858770846774]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Eindhoven",
      "code": "0772"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.458870799384706, 51.450022191775162]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Eindhoven",
      "code": "0772"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.458870799384706, 51.450022191775162]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Eindhoven",
      "code": "0772"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.458870799384706, 51.450022191775162]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Eindhoven",
      "code": "0772"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.458870799384706, 51.450022191775162]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Eindhoven",
      "code": "0772"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.458870799384706, 51.450022191775162]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Eindhoven",
      "code": "0772"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.458870799384706, 51.450022191775162]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Eindhoven",
      "code": "0772"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.458870799384706, 51.450022191775162]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Bergen op Zoom",
      "code": "0748"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.288303640707042, 51.503458364490143]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "West Betuwe",
      "code": "1960"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.209350618335098, 51.861601539836215]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "West Betuwe",
      "code": "1960"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.209350618335098, 51.861601539836215]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Hardinxveld-Giessendam",
      "code": "0523"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.852424178489662, 51.832614685788862]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Hardinxveld-Giessendam",
      "code": "0523"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.852424178489662, 51.832614685788862]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Hardinxveld-Giessendam",
      "code": "0523"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.852424178489662, 51.832614685788862]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Hardinxveld-Giessendam",
      "code": "0523"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.852424178489662, 51.832614685788862]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Amstelveen",
      "code": "0362"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.85148669610057, 52.289265956992494]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Amstelveen",
      "code": "0362"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.85148669610057, 52.289265956992494]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Westvoorne",
      "code": "0614"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.058623189749088, 51.8906774281472]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Arnhem",
      "code": "0202"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.892592568683463, 52.001137213662339]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Arnhem",
      "code": "0202"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.892592568683463, 52.001137213662339]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Beverwijk",
      "code": "0375"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.649106198592863, 52.484808222913927]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Beverwijk",
      "code": "0375"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.649106198592863, 52.484808222913927]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Beverwijk",
      "code": "0375"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.649106198592863, 52.484808222913927]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Beverwijk",
      "code": "0375"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.649106198592863, 52.484808222913927]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Zwolle",
      "code": "0193"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.118363682684245, 52.518685657998496]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Renkum",
      "code": "0274"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.784845458849348, 51.989619298868263]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Renkum",
      "code": "0274"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.784845458849348, 51.989619298868263]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Renkum",
      "code": "0274"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.784845458849348, 51.989619298868263]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Renkum",
      "code": "0274"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.784845458849348, 51.989619298868263]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Renkum",
      "code": "0274"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.784845458849348, 51.989619298868263]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Schouwen-Duiveland",
      "code": "1676"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [3.882837892157855, 51.682174704909194]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Schouwen-Duiveland",
      "code": "1676"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [3.882837892157855, 51.682174704909194]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Soest",
      "code": "0342"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.296288805459032, 52.156190812286091]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Soest",
      "code": "0342"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.296288805459032, 52.156190812286091]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Soest",
      "code": "0342"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.296288805459032, 52.156190812286091]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Soest",
      "code": "0342"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.296288805459032, 52.156190812286091]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Soest",
      "code": "0342"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.296288805459032, 52.156190812286091]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Soest",
      "code": "0342"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.296288805459032, 52.156190812286091]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Soest",
      "code": "0342"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.296288805459032, 52.156190812286091]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Lingewaard",
      "code": "1705"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.942228423465802, 51.901531251454422]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Lingewaard",
      "code": "1705"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.942228423465802, 51.901531251454422]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "IJsselstein",
      "code": "0353"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.028791050515309, 52.027712470410911]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Oisterwijk",
      "code": "0824"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.197526475016558, 51.552101449095524]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Oisterwijk",
      "code": "0824"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.197526475016558, 51.552101449095524]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Oisterwijk",
      "code": "0824"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.197526475016558, 51.552101449095524]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Emmen",
      "code": "0114"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.961960528128859, 52.74965273481061]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Zundert",
      "code": "0879"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.642618513690003, 51.479798990552204]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Breda",
      "code": "0758"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.761441523771285, 51.585120498530195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Bloemendaal",
      "code": "0377"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.581535324875825, 52.385927790276355]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Wijk bij Duurstede",
      "code": "0352"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.325254052652819, 51.989201238963275]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Almere",
      "code": "0034"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.205651133163596, 52.402471265052704]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Nijmegen",
      "code": "0268"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.836792944233466, 51.838509283041823]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Nijmegen",
      "code": "0268"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.836792944233466, 51.838509283041823]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gemeentenaam": "Nijmegen",
      "code": "0268"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.836792944233466, 51.838509283041823]
    }
  }]
};
},{}],"data/gemeenten_simplified.json":[function(require,module,exports) {
module.exports = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "properties": {
      "gml_id": "idb755d8a1-afde-4052-8f03-ca9eea33cf43",
      "Code": "0363",
      "Gemeentenaam": "Amsterdam",
      "aantal": 6
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.909133519196191, 52.31825066324535], [4.912935531070008, 52.330515868077455], [4.949858161844606, 52.33854194681551], [4.973885309047185, 52.35496149521978], [4.998030044245861, 52.34215933441576], [5.039068254883871, 52.354565843451], [5.0376963949294, 52.375394082993076], [5.0791657615531, 52.388648417247126], [5.074266261715707, 52.41382882624575], [5.049180822548251, 52.41512882491459], [5.000225020173014, 52.42541577090281], [4.947780773913552, 52.42157229657754], [4.931200866463811, 52.41170926319873], [4.898746579540916, 52.424483163162115], [4.862686260737698, 52.42993750540312], [4.856062136957542, 52.416654910308445], [4.739218864835378, 52.431067939028196], [4.728753533182704, 52.40071579619484], [4.757876160216172, 52.3965897134633], [4.7556811842890205, 52.35614845052611], [4.790173663144271, 52.34201803021263], [4.818747546195952, 52.325570220967734], [4.855905352962745, 52.33031804219306], [4.856336508948436, 52.32175500748309], [4.896277231622869, 52.32243326765814], [4.909133519196191, 52.31825066324535]]], [[[4.95522801366639, 52.278318095439445], [4.96769234125272, 52.279589833267664], [4.983488328728477, 52.290357213546535], [4.997481300264073, 52.289113736558946], [5.011709447791864, 52.303385461075564], [5.02154764346535, 52.30245285333488], [5.017941611585028, 52.32319631035507], [5.016138595644868, 52.324524569864536], [4.9978732602510645, 52.31398327631068], [4.989093356542455, 52.327972392421024], [4.9752963650003545, 52.33057238975871], [4.952680273750945, 52.32263109354253], [4.944723486015018, 52.32712456720222], [4.929476242521049, 52.30742676128522], [4.95522801366639, 52.278318095439445]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idae97ea99-5cb5-4d83-afab-b249cf4e453d",
      "Code": "0779",
      "Gemeentenaam": "Geertruidenberg",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.925047094668045, 51.67299915005046], [4.933160666398769, 51.67675784185385], [4.917991814902198, 51.71996866717248], [4.873073200392973, 51.7199969280131], [4.836895293593658, 51.71262084860947], [4.823607850034646, 51.7112925891], [4.831133481784883, 51.69292304269247], [4.842382733411538, 51.6796404475978], [4.843401829377717, 51.686027397579494], [4.880481244147112, 51.67421436619742], [4.91281794307391, 51.67658827681009], [4.925047094668045, 51.67299915005046]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id2f3bd60a-98a2-4213-bf2d-e702f1de3c34",
      "Code": "0396",
      "Gemeentenaam": "Heemskerk",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.672428883052027, 52.4971983060953], [4.672428883052027, 52.4971983060953], [4.7079796538721554, 52.48634614329455], [4.720365589461087, 52.49496569968577], [4.694378642323551, 52.50782438217104], [4.695750502278021, 52.52673088455048], [4.660003751464397, 52.53176131418208], [4.598662013500228, 52.531083054007034], [4.583336378008861, 52.5338808772291], [4.571499186401717, 52.50203090984251], [4.604306237312906, 52.49440048287323], [4.621395692745734, 52.49784830542972], [4.655339427619198, 52.4979330879516], [4.6652952112887816, 52.50152221471122], [4.6652952112887816, 52.50152221471122], [4.672428883052027, 52.4971983060953]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id78649605-668d-4a6f-b406-191369d84da6",
      "Code": "0796",
      "Gemeentenaam": "'s-Hertogenbosch",
      "aantal": 3
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.3534985564484465, 51.75546428299995], [5.294547774404926, 51.73678386734552], [5.267032183318123, 51.739468647205086], [5.2496683558944, 51.73359039235468], [5.225053268711334, 51.74297299144283], [5.206513561326636, 51.7414751668896], [5.21000200521086, 51.733957783282825], [5.230932668516207, 51.7241795324259], [5.229991964547427, 51.7105578072437], [5.251588959830658, 51.69936651435542], [5.22615075667491, 51.69004043694852], [5.246885439986761, 51.68317305267617], [5.288785962596151, 51.68164696728231], [5.298937726259231, 51.66712089520005], [5.319045273591895, 51.67037089187215], [5.327472413312211, 51.67336654097861], [5.338878448933664, 51.66398394189046], [5.353694536441942, 51.671077412887826], [5.3573397643209635, 51.682014358210466], [5.377094547665335, 51.67879262237899], [5.359260368257221, 51.698688254180375], [5.398260386962875, 51.69849042829598], [5.429029245941708, 51.70151433824307], [5.456858405018103, 51.68758174381398], [5.4698322805875215, 51.68913609004846], [5.47825942030784, 51.70140129488056], [5.499033299618388, 51.707025202165326], [5.484609172097102, 51.71352519550953], [5.474261428440526, 51.72895561449185], [5.463168960808667, 51.72587518286352], [5.4481568933068925, 51.744131685908535], [5.4481568933068925, 51.744131685908535], [5.438828245616495, 51.76501644713186], [5.392772947144994, 51.760268625906534], [5.374037259766801, 51.75323167659042], [5.3534985564484465, 51.75546428299995]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id9e12be5e-2496-4b23-aa3d-7d13845b18ff",
      "Code": "1894",
      "Gemeentenaam": "Peel en Maas",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.009600378673508, 51.26576043661588], [6.0237893302026, 51.26612782754403], [6.046405421452009, 51.28559954673601], [6.084699912181078, 51.29744083895871], [6.101946151608704, 51.30806691503445], [6.116213495135194, 51.323214725610505], [6.1232687749010415, 51.34336470497753], [6.099711979682853, 51.35709947352223], [6.09104966397034, 51.371597284763865], [6.077605436416532, 51.37818206062995], [6.090383331992455, 51.38911900595259], [6.07313709256483, 51.3957320426593], [6.018772242369109, 51.38225162168023], [5.989845595329137, 51.378210321470576], [5.95790085638933, 51.37804075642682], [5.931286773272608, 51.384738575655405], [5.870376191294129, 51.352521217340666], [5.840195272295785, 51.34686904921527], [5.832081700565061, 51.33805166693966], [5.8521500518990255, 51.320699510794704], [5.877823431046968, 51.316573428063165], [5.9106696779568555, 51.3076995241063], [5.907494802062224, 51.31323864886918], [5.954686784495999, 51.300266923021404], [6.0082677147177375, 51.277545207157324], [6.009600378673508, 51.26576043661588]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id54af3a59-eb8a-40dd-97a8-8eb79198d4f7",
      "Code": "0579",
      "Gemeentenaam": "Oegstgeest",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.497575532855121, 52.18398340942664], [4.489540353121797, 52.18169428133585], [4.491460957058054, 52.20368121534363], [4.463475013986862, 52.20020513194651], [4.458614710148167, 52.18344645345472], [4.446542342548829, 52.17847254550438], [4.448384554487689, 52.16205299710011], [4.454185562295163, 52.171152987781994], [4.466689085880192, 52.169937771635034], [4.478604669484733, 52.179574718288826], [4.491931309042444, 52.175420374716666], [4.497575532855121, 52.18398340942664]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id942765f4-2af6-4d25-8a17-70b44b454096",
      "Code": "0267",
      "Gemeentenaam": "Nijkerk",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.479905652253203, 52.165811688903496], [5.485471484068483, 52.1816377596546], [5.50083631555855, 52.18858992644883], [5.530821254563398, 52.191529053874035], [5.542423270178347, 52.17768124196682], [5.565156949423853, 52.17810515457623], [5.577934844999776, 52.18618775499554], [5.577699669007581, 52.19480731138676], [5.6001981722608924, 52.19766165629009], [5.625636375416641, 52.192716009180366], [5.633279595162975, 52.208174689003314], [5.605803200074871, 52.20483990980934], [5.549909705929885, 52.202324694993536], [5.51553481507073, 52.23417466238013], [5.506441343372527, 52.231602925883074], [5.483707664127021, 52.23923335285235], [5.4768483643546695, 52.26240724216647], [5.404649334750837, 52.249633342203076], [5.3955166670539345, 52.21913989516658], [5.409666422584328, 52.21857467835404], [5.439337793599584, 52.20068556623717], [5.439886537581372, 52.171209509463246], [5.479905652253203, 52.165811688903496]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ide2a96c44-99dc-402c-a27b-843fa8c978e4",
      "Code": "1901",
      "Gemeentenaam": "Bodegraven-Reeuwijk",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.868212896554278, 52.063450924152626], [4.873190788389071, 52.068735701349866], [4.8392470535156065, 52.068763962190495], [4.826273177946188, 52.07467047788153], [4.825371669976108, 52.107113922921286], [4.792094267080531, 52.12228999433797], [4.754583696325444, 52.108809573358904], [4.738866100847085, 52.106520445268124], [4.7348681089797715, 52.1018856674053], [4.704726385980126, 52.09524436985796], [4.713035937704346, 52.07693134513169], [4.677249990892022, 52.06551396551839], [4.659964555465698, 52.06410092348705], [4.677328382889421, 52.04397920496064], [4.706019853937198, 52.04010746979475], [4.719856041477998, 52.035190083525656], [4.719856041477998, 52.02648574461255], [4.7436872086870805, 52.022614009446656], [4.750977664445123, 52.01390967053355], [4.770693251790794, 52.01340097540227], [4.798718390860686, 52.02227487935914], [4.8067143745953125, 52.03315530300052], [4.829487249839518, 52.0498009381298], [4.868212896554278, 52.063450924152626]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id6a46987b-8fe5-464c-b351-7ba564916553",
      "Code": "1658",
      "Gemeentenaam": "Heeze-Leende",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.65471980645141, 51.35387773769076], [5.638923818975652, 51.38917552763384], [5.63900221097305, 51.422466797892405], [5.594044400465126, 51.41723854237642], [5.566724789371819, 51.40559507603811], [5.525804166729907, 51.404690729138046], [5.5048735034245615, 51.4001407337971], [5.516436323040811, 51.378323364833086], [5.527176026684378, 51.36693424606042], [5.493781035792702, 51.355403823084615], [5.496093599715952, 51.34661470164963], [5.47359509646264, 51.33395384504875], [5.491390079872055, 51.31422777829113], [5.484844348089297, 51.30001257545577], [5.515769991062925, 51.29520823254918], [5.565823281401739, 51.32044516322906], [5.605332848090482, 51.3318060211611], [5.631280599229319, 51.32753863422643], [5.644097690803941, 51.33347341075809], [5.63994291494183, 51.34672774501214], [5.65471980645141, 51.35387773769076]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id9f36f750-99b7-4d2f-a141-290e03e6583b",
      "Code": "0788",
      "Gemeentenaam": "Haaren",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.204788937383874, 51.66983393590024], [5.166808014644398, 51.66904263236269], [5.154461275054166, 51.654912212049204], [5.160066302868144, 51.63953831474814], [5.1449366473702725, 51.64049918332945], [5.169198970565047, 51.61868181436543], [5.16947334255594, 51.603590525470636], [5.179546714221622, 51.59765574893897], [5.186876365978363, 51.60175357082988], [5.214156781072971, 51.58556010915063], [5.247238203975053, 51.58702967286323], [5.263661327429997, 51.60025574627665], [5.300466370208498, 51.60630356617082], [5.31649753367645, 51.61735355485597], [5.310970897859869, 51.63366005989773], [5.304346774079713, 51.624927460143994], [5.277693494964292, 51.61919050949672], [5.246493479999769, 51.632755712997664], [5.242534684131154, 51.6494578698082], [5.204788937383874, 51.66983393590024]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id10bde382-9931-4e23-83e9-735d11d1e054",
      "Code": "0014",
      "Gemeentenaam": "Groningen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.695373571913826, 53.12116940629809], [6.68827909614928, 53.155167197572325], [6.66201777702085, 53.17161500681722], [6.657235865179553, 53.180771519180354], [6.639793645758433, 53.19029542247164], [6.666878080859544, 53.20202367133183], [6.684006732291072, 53.20219323637559], [6.6829092443274964, 53.21106714033246], [6.6980780958240675, 53.21474104961397], [6.708817799467634, 53.235427984952906], [6.717676095173642, 53.241871456615854], [6.698313271816263, 53.25614318113247], [6.772511297353752, 53.28307576224997], [6.764632901615222, 53.298138790304144], [6.753070081998974, 53.298845311319816], [6.7378228385050045, 53.3129757316333], [6.72649519488095, 53.30489313121399], [6.709680111439015, 53.3100366042081], [6.689572564106351, 53.2974605301291], [6.654060989284922, 53.30865182301738], [6.625839870221535, 53.26620404039567], [6.636030829883314, 53.25139535990714], [6.619294138438777, 53.24944536190388], [6.586330303532792, 53.25583231188558], [6.5857423635523045, 53.26154100169222], [6.552582548652825, 53.262162740186014], [6.5082518741240865, 53.25758448400445], [6.495865938535156, 53.24582797430363], [6.4809322630307795, 53.25018014376018], [6.463450847610959, 53.200045412487945], [6.482578494976144, 53.203719321769455], [6.513386549953675, 53.19693672001898], [6.5294961054190255, 53.195184547900105], [6.534317213259021, 53.18402151585246], [6.54819259679852, 53.18111064926788], [6.563675016284684, 53.15762589070687], [6.581509195692797, 53.16358892807916], [6.587741359485962, 53.14575633764355], [6.6000097070787955, 53.14471068654035], [6.627682082160394, 53.12266723085131], [6.63575645789242, 53.10669985589708], [6.695373571913826, 53.12116940629809]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ide83bf2d8-80e1-4453-b19e-07ffb0fedcf9",
      "Code": "0867",
      "Gemeentenaam": "Waalwijk",
      "aantal": 5
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.101507480811615, 51.67684262437573], [5.106485372646407, 51.67732305866639], [5.103036124760882, 51.70247520682439], [5.1068381366347, 51.7108686764906], [5.081752697467244, 51.72234257778514], [5.0545898703687335, 51.71197084927505], [5.006026027980488, 51.71329910878452], [4.960911433477767, 51.72242736030702], [4.917991814902198, 51.71996866717248], [4.933160666398769, 51.67675784185385], [4.944253134030628, 51.678905665741496], [4.953738565715822, 51.67076654364093], [4.9578933415779325, 51.65152091117397], [4.987251144603595, 51.65460134280231], [4.992229036438387, 51.67624914672256], [5.049180822548251, 51.661610031277796], [5.060626054168402, 51.671105673728455], [5.101507480811615, 51.67684262437573]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id538d333c-ea56-4b1e-9f75-07e5fb78db25",
      "Code": "0762",
      "Gemeentenaam": "Deurne",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.931286773272608, 51.384738575655405], [5.8749621231419304, 51.446545034106585], [5.860733975614139, 51.491988465834744], [5.852581207884716, 51.50414062730434], [5.773954034494222, 51.48865368664076], [5.721705768228256, 51.48512108156239], [5.735032407785967, 51.46918196744878], [5.717198228377853, 51.46824935970809], [5.730015319952475, 51.44436894937831], [5.718256520342731, 51.43874504209354], [5.756629403069198, 51.433855916665074], [5.787633438040226, 51.41277332955736], [5.8318073285741665, 51.39960377782519], [5.854109851833982, 51.37642988851108], [5.856579199752029, 51.353764694328255], [5.870376191294129, 51.352521217340666], [5.931286773272608, 51.384738575655405]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd1dd51c0-994a-45fd-970d-6d5ed81acf4a",
      "Code": "1961",
      "Gemeentenaam": "Vijfheerenlanden",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.142428103453527, 51.924944544239864], [5.1802130461995075, 51.96744884854282], [5.155088411033352, 51.97157493127436], [5.13678387964085, 51.99568142832916], [5.119576836211923, 51.999920554423205], [5.100174816855844, 52.00302924689217], [5.077519529607736, 51.997461861288656], [5.062625050102059, 51.99124447635073], [5.036128554981434, 51.97132058370872], [5.022370759438033, 51.9697379766336], [5.003007936080653, 51.97813144629981], [4.985957676646523, 51.9725640606963], [4.968397869229304, 51.95942276980476], [4.941548610120387, 51.96383146094257], [4.926301366626418, 51.95091625677605], [4.939236046197137, 51.92892932276827], [4.947702381916153, 51.93373366567485], [4.956168717635169, 51.91559020599234], [4.973767721051088, 51.907620648935534], [4.973414957062795, 51.89724892042544], [4.994972756347328, 51.902279350057036], [4.99944110019903, 51.884418498780796], [4.9962270283057, 51.87311416253001], [5.026956691285833, 51.881931544805624], [5.0218220154562445, 51.86862068887032], [5.026917495287134, 51.858616351288376], [5.05380595039475, 51.857372874300786], [5.055726554331009, 51.87319894505189], [5.081086365489359, 51.875827203230195], [5.089043153225286, 51.8880924080623], [5.112717536439572, 51.8877815388154], [5.142428103453527, 51.924944544239864]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idfb13a6fd-6316-4e0f-a8f6-abcee21054b3",
      "Code": "1949",
      "Gemeentenaam": "Waadhoeke",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.637355979027687, 53.12413679456392], [5.631986127205903, 53.133010698520785], [5.6402172869327245, 53.14326938366837], [5.663303730166524, 53.14982589869383], [5.656875586379863, 53.154488937397275], [5.656875586379863, 53.154488937397275], [5.65283839851385, 53.16624544709809], [5.684783137453657, 53.18187369196481], [5.69987359695283, 53.173593265661104], [5.71323943250924, 53.17523239441747], [5.733307783843204, 53.169467182929566], [5.745419347441241, 53.18523673199942], [5.74455703546986, 53.19775628439716], [5.734797231793772, 53.21123670537622], [5.729780143960281, 53.235258419909144], [5.743890703491974, 53.24110841391893], [5.733621351832797, 53.248512754163194], [5.73538517177426, 53.264706215842445], [5.72013792828029, 53.27519098771505], [5.73538517177426, 53.294719228588285], [5.749299751312457, 53.31356920928647], [5.727898736022722, 53.31746920529299], [5.702695708859169, 53.36797132749338], [5.627243411363306, 53.32317789509964], [5.612270539860231, 53.318740943121206], [5.5672343373549085, 53.30534530466402], [5.537092614355263, 53.269454037067774], [5.4770835403468645, 53.242549716790904], [5.4321257298389405, 53.215617135673405], [5.436907641680237, 53.210191054273025], [5.466853384686386, 53.19933889147227], [5.489547867933194, 53.20075193350362], [5.480219220242796, 53.17596717627377], [5.496367971706846, 53.17836934772706], [5.472184040509471, 53.14660416286235], [5.504991091420659, 53.134734609799025], [5.511693607198214, 53.14578459848417], [5.53121321455039, 53.147875900690565], [5.5507328219025664, 53.134112871305234], [5.570957957231327, 53.12981722352993], [5.581736856873594, 53.13374548037709], [5.596317768389677, 53.12597374920467], [5.622226323529815, 53.13823895403677], [5.624342907459569, 53.12831939897671], [5.637355979027687, 53.12413679456392]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idff11e321-9d92-4032-8bd8-9e17127979d6",
      "Code": "0820",
      "Gemeentenaam": "Nuenen, Gerwen en Nederwetten",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.5486946299702105, 51.43467548104326], [5.566176045390032, 51.44148634363435], [5.584715752774729, 51.46050588937631], [5.582991128831966, 51.4655363190079], [5.6052152600943845, 51.47096240040828], [5.585930828734403, 51.4791580441901], [5.5701740372573445, 51.496934112944466], [5.5767197690401025, 51.49944932776026], [5.557670513672315, 51.509368882820326], [5.547440358011838, 51.5377427668098], [5.5308604505620975, 51.525053649368296], [5.540189098252496, 51.52601451794961], [5.546264478050864, 51.51270366201431], [5.5114192352073195, 51.496934112944466], [5.505461443405049, 51.48348195280603], [5.509028279286671, 51.469295010811294], [5.53258507450486, 51.45708632766044], [5.5486946299702105, 51.43467548104326]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id3daadb1f-9d55-4122-b55c-8fcf0be782e3",
      "Code": "0310",
      "Gemeentenaam": "De Bilt",
      "aantal": 6
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.192755765783235, 52.086087857494825], [5.205533661359158, 52.084900902188494], [5.210825121183543, 52.10069871209897], [5.222309548802394, 52.10389218708981], [5.218233164937683, 52.113670437946745], [5.230932668516207, 52.11677913041571], [5.225014072712635, 52.165698645540985], [5.220976884846623, 52.17824645877936], [5.212079393141916, 52.17638124329798], [5.215489445028742, 52.2042746929968], [5.192598981788438, 52.177822546169956], [5.124123572061024, 52.180818195276416], [5.115304472353716, 52.1798573266951], [5.118832112236639, 52.17239646476958], [5.094883357031459, 52.15535517787152], [5.120517540180703, 52.14554866617396], [5.107112508625594, 52.13319867881998], [5.14689644730523, 52.12039651801596], [5.1619085148070045, 52.1072269662838], [5.160889418840827, 52.094566109682916], [5.186170838001778, 52.09292698092655], [5.192755765783235, 52.086087857494825]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id2f5ea903-1462-40c5-a6f3-ceca3d446ed1",
      "Code": "0569",
      "Gemeentenaam": "Nieuwkoop",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.738866100847085, 52.106520445268124], [4.754583696325444, 52.108809573358904], [4.792094267080531, 52.12228999433797], [4.8080862345497835, 52.129100856929064], [4.813142518381973, 52.14020736729547], [4.83309328171984, 52.14470084095515], [4.855239020984859, 52.13721171818901], [4.8745234523448415, 52.138822586104745], [4.873621944374761, 52.15608995972782], [4.892161651759459, 52.16179864953447], [4.8555133929757535, 52.178952979795035], [4.843911377360806, 52.18011167426074], [4.813612870366363, 52.20184426070288], [4.802912362721496, 52.201024696324694], [4.802128442747512, 52.21767033145398], [4.794563614998577, 52.226742061295234], [4.784019891348505, 52.22874858097975], [4.7631284240418585, 52.21860293919467], [4.728753533182704, 52.20981381775968], [4.720757549448078, 52.20127904389034], [4.707666085882562, 52.20506599653435], [4.69531934629233, 52.18915514326137], [4.688930398504369, 52.19192470564281], [4.681208786760637, 52.167507339341114], [4.7059414619397995, 52.15168126859001], [4.70500075797102, 52.144757362636405], [4.726793733247748, 52.15900082631239], [4.74184499674822, 52.1626747355939], [4.7590520401771474, 52.13509215514198], [4.756896260248694, 52.124381296544364], [4.738866100847085, 52.106520445268124]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf1c27c26-992b-46d1-bc87-2b00a6a5cba0",
      "Code": "1721",
      "Gemeentenaam": "Bernheze",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.474261428440526, 51.72895561449185], [5.484609172097102, 51.71352519550953], [5.499033299618388, 51.707025202165326], [5.47825942030784, 51.70140129488056], [5.4698322805875215, 51.68913609004846], [5.456858405018103, 51.68758174381398], [5.445021213410961, 51.6642382894561], [5.432988041810322, 51.66435133281861], [5.42338502212903, 51.653781778424126], [5.467794088655166, 51.64227961628895], [5.4971910876795285, 51.626679632262864], [5.5048735034245615, 51.63606223135102], [5.524393110776738, 51.63043832406625], [5.570291625253442, 51.65143612865209], [5.562256445520116, 51.663164377512274], [5.576602181044005, 51.6803752294541], [5.5968273163727655, 51.69091652300796], [5.597023296366261, 51.70199477253373], [5.600158976262193, 51.7083534616748], [5.580874544902212, 51.731442568467024], [5.560179057589061, 51.73234691536709], [5.53395693445933, 51.74037299410515], [5.507695615330901, 51.73782951844872], [5.474261428440526, 51.72895561449185]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id90663b8a-f2ef-4f59-9f38-231cdb9e296c",
      "Code": "0542",
      "Gemeentenaam": "Krimpen aan den IJssel",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.549902191118486, 51.90671630203547], [4.576320294241713, 51.90304239275397], [4.596780605562669, 51.90781847481992], [4.643031884027665, 51.912566296045256], [4.617711268868015, 51.93104888581529], [4.5815333620687, 51.92014020133328], [4.567657978529201, 51.90979673366381], [4.549902191118486, 51.90671630203547]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb59c742b-39c2-4d04-b649-2bf96f7287be",
      "Code": "0226",
      "Gemeentenaam": "Duiven",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.0017219829349795, 51.97753796864665], [5.984005391522963, 51.97242275649317], [5.987768207398082, 51.96306841824564], [5.9843189595125565, 51.943031482241125], [5.965779252127859, 51.93876409530645], [5.968601364034198, 51.92822280175259], [5.987062679421497, 51.91330107790155], [6.0152837984848855, 51.91694672634243], [6.037468733748604, 51.91395107723597], [6.06345568088614, 51.94927712801968], [6.060829548973297, 51.97448579785893], [6.068864728706622, 51.98039231354997], [6.046797381439001, 51.98059013943436], [6.034293857853973, 51.97134884454934], [6.0218295302676434, 51.978216228821694], [6.0017219829349795, 51.97753796864665]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5deba7b4-99e6-4ae2-84a9-3827d5975908",
      "Code": "1669",
      "Gemeentenaam": "Roerdalen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.036449637782425, 51.09653452294161], [6.088423532057497, 51.12762144763127], [6.091755191946925, 51.13491274451303], [6.125032594842503, 51.14432360444181], [6.163444673567669, 51.14876055642024], [6.175438649169609, 51.158454024755294], [6.138790390385905, 51.1733474877657], [6.180730108993995, 51.18634747445411], [6.165169297510432, 51.194401814032794], [6.129618526690304, 51.18374747711643], [6.099672783684154, 51.169843143527956], [6.082191368264333, 51.171623576487455], [6.07313709256483, 51.18281486937573], [6.055185325160618, 51.18456704149461], [6.063573268882237, 51.16551923491203], [6.029511946012676, 51.16096923957109], [6.013715958536919, 51.16664966853711], [5.999958162993517, 51.16221271655868], [5.983574235537273, 51.17623009350965], [5.955470704469983, 51.159047502408455], [5.913883749850186, 51.13318883323478], [5.926740037423507, 51.11377363572406], [5.9721290039171215, 51.114706243464745], [5.984789311496947, 51.12064101999641], [6.000781278966199, 51.114141026652206], [6.013951134529114, 51.11792797929622], [6.036449637782425, 51.09653452294161]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ide64bc151-f9a5-4f7f-bee4-170fd7bb03f6",
      "Code": "0852",
      "Gemeentenaam": "Waterland",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.0791657615531, 52.388648417247126], [5.137332623622638, 52.415552737523996], [5.185504506023893, 52.41563752004588], [5.151012027168641, 52.46636572897128], [5.112991908430466, 52.49787656627035], [5.061018014155394, 52.48578092648201], [5.058783842229543, 52.49075483443235], [5.02480091135738, 52.48487657958194], [4.997951652248463, 52.49473961296076], [4.974238073035478, 52.47043529002156], [4.95801092957403, 52.471226593559116], [4.948329517895339, 52.48400049352251], [4.9508772578107845, 52.437144019763], [4.947780773913552, 52.42157229657754], [5.000225020173014, 52.42541577090281], [5.049180822548251, 52.41512882491459], [5.074266261715707, 52.41382882624575], [5.0791657615531, 52.388648417247126]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id89a5b33f-72b9-40a5-80b6-5628806a1e1a",
      "Code": "0448",
      "Gemeentenaam": "Texel",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.144270315392387, 53.02615646011022], [5.09578486500154, 53.08711509334259], [5.050944642489712, 53.14326938366837], [4.818394782207659, 53.214288876163934], [4.818786742194651, 53.18283456054613], [4.715544481621091, 53.08793465772077], [4.686343462590225, 53.047323829739824], [4.687088186565509, 53.002417353983574], [4.613007749024117, 52.97946955139447], [4.6133213170137095, 52.96098696162444], [4.646206759922296, 52.94106306898243], [4.741021880775539, 52.980232594091405], [4.79166311109484, 52.98051520249767], [4.876248076287604, 53.02197385569743], [4.932415942423485, 53.04401731138647], [5.006966731949267, 53.044299919792735], [5.074501437707902, 53.01841298977843], [5.144270315392387, 53.02615646011022]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id8e0cdab4-da16-4f23-8089-fe2804610bbf",
      "Code": "0848",
      "Gemeentenaam": "Son en Breugel",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.5308604505620975, 51.525053649368296], [5.500248375578062, 51.521408000927416], [5.487156912012546, 51.541840588700715], [5.437456385662024, 51.533984075006416], [5.42385537411342, 51.5340688575283], [5.4474905613290066, 51.51208192352052], [5.442551865492915, 51.493938463838006], [5.46391368478395, 51.49699063462572], [5.5114192352073195, 51.496934112944466], [5.546264478050864, 51.51270366201431], [5.540189098252496, 51.52601451794961], [5.5308604505620975, 51.525053649368296]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf79bd874-ab3b-4d45-8277-1de13e44ea48",
      "Code": "1681",
      "Gemeentenaam": "Borger-Odoorn",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.849805806788474, 52.80464799127606], [6.858507318499686, 52.813691460276694], [6.907659100868418, 52.83420883057187], [6.9499515834648005, 52.84881968517601], [6.957594803211135, 52.86187619354567], [7.014781765313193, 52.872982703912065], [7.045589820290726, 52.91591092082443], [7.026854132912533, 52.91904787413402], [7.0159576452741685, 52.924586998896906], [6.935684239938311, 52.993345624142314], [6.837772635187836, 52.977886944319366], [6.788777636813899, 52.96276739458394], [6.727710270840624, 52.95471305500526], [6.731433890717043, 52.93755872474468], [6.7258288629030645, 52.92961742852851], [6.7258288629030645, 52.92961742852851], [6.728219818823713, 52.90706527770819], [6.736333390554437, 52.87869139371872], [6.7656128015827015, 52.84992185796046], [6.8163324238994, 52.825702317543154], [6.849805806788474, 52.80464799127606]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id44d04eae-a51a-4842-a095-328ed3fae1c8",
      "Code": "1690",
      "Gemeentenaam": "De Wolden",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.529378517422928, 52.654498145024995], [6.530554397383902, 52.672472039663745], [6.499550362412876, 52.673545951607565], [6.48598854686297, 52.69363940929334], [6.44867395610138, 52.69378071349647], [6.451143304019427, 52.70697852606927], [6.419943289054903, 52.701722009712654], [6.40716539347898, 52.70680896102551], [6.414377457239624, 52.717265472057484], [6.4068126294906875, 52.72840024326451], [6.421315149009374, 52.73142415321159], [6.415396553205802, 52.740863273981], [6.426293040844165, 52.751432828375485], [6.410144289380115, 52.76488498851392], [6.446165412184634, 52.77610454224283], [6.446910136159918, 52.78588279309976], [6.436993548489033, 52.79198713467518], [6.416650825164174, 52.78172844952759], [6.412888009289056, 52.78831322539368], [6.394034733914765, 52.77746106259292], [6.377925178449415, 52.78520453292471], [6.355505067193501, 52.77952410395869], [6.342962347609774, 52.7896980065844], [6.353662855254641, 52.79891104062879], [6.309763336711594, 52.79543495723167], [6.293026645267057, 52.778421931174236], [6.298514085084938, 52.76629803054527], [6.269117086060576, 52.75855456021348], [6.252027630627747, 52.75830021264784], [6.231449731310693, 52.74171109919981], [6.216320075812822, 52.718593731566955], [6.21690801579331, 52.70316331258463], [6.248382402748726, 52.70819374221623], [6.274290957888864, 52.70618722253171], [6.286637697479096, 52.69917853405622], [6.283462821584465, 52.68225029052067], [6.269822614037161, 52.68222202968005], [6.265511054180255, 52.66797856600405], [6.291929157303481, 52.66243944124117], [6.326970380140521, 52.66919378215101], [6.327793496113203, 52.658680749437785], [6.364441754896907, 52.64316554793358], [6.384039754246482, 52.61221992744705], [6.406303081507599, 52.62055687543201], [6.4162980611758815, 52.618635138269376], [6.433034752620419, 52.62773512895126], [6.441697068332931, 52.61566775000354], [6.4608247156981164, 52.61626122765671], [6.463921199595349, 52.623919915466615], [6.478266935119237, 52.618635138269376], [6.518599617780662, 52.61408514292843], [6.513856901938064, 52.64630250124317], [6.529378517422928, 52.654498145024995]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ide1d527d8-a869-419c-94bb-f6f1f084fe56",
      "Code": "0441",
      "Gemeentenaam": "Schagen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.728871121178802, 52.69140680288381], [4.769634959825917, 52.698782882287446], [4.778806823521519, 52.73133937068971], [4.786489239266552, 52.72108068554213], [4.80502894665125, 52.71421330126977], [4.826233981947489, 52.71743503710125], [4.847674193235924, 52.720261121163944], [4.848889269195597, 52.72611111517372], [4.8069495505875075, 52.77025454823305], [4.82897770185643, 52.77531323870527], [4.8345043376730095, 52.807784944585656], [4.8345043376730095, 52.807784944585656], [4.8096540744977485, 52.83689361043143], [4.782569639396637, 52.851447943354316], [4.758856060183652, 52.84867838097288], [4.770928427782989, 52.87863487203746], [4.6939866823365595, 52.884484866047245], [4.656358523585376, 52.797017564306785], [4.63448715631125, 52.75832847348847], [4.651027867762291, 52.7558415195133], [4.671057023097557, 52.740637187255984], [4.689831906474449, 52.73297849944608], [4.715818853611985, 52.71005895769761], [4.728871121178802, 52.69140680288381]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id4425a41a-56dc-4750-907f-b3190def71e8",
      "Code": "0160",
      "Gemeentenaam": "Hardenberg",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.595188599238799, 52.480298323400376], [6.612278054671629, 52.46591355552125], [6.626819770189014, 52.4738265908968], [6.649553449434521, 52.4730918090405], [6.65366902929793, 52.48784396784777], [6.669308232778891, 52.49499396052639], [6.697568547840978, 52.48628962161329], [6.70532935558341, 52.520993933903206], [6.6808710523951405, 52.553324335580456], [6.716265039220472, 52.54851999267387], [6.725985646897861, 52.56324389064052], [6.751619830047105, 52.55906128622773], [6.766671093547579, 52.56352649904679], [6.718773583137217, 52.588622125523536], [6.727279114854934, 52.614932968147244], [6.710072071426007, 52.62781991147314], [6.701997695693982, 52.6272546946606], [6.70854342747674, 52.64870467269647], [6.682517284340505, 52.6541872757781], [6.629445902101857, 52.66967421644167], [6.614512226597481, 52.67405464673885], [6.55281772464502, 52.66560465539139], [6.529378517422928, 52.654498145024995], [6.513856901938064, 52.64630250124317], [6.518599617780662, 52.61408514292843], [6.478266935119237, 52.618635138269376], [6.463921199595349, 52.623919915466615], [6.4608247156981164, 52.61626122765671], [6.441697068332931, 52.61566775000354], [6.433034752620419, 52.62773512895126], [6.4162980611758815, 52.618635138269376], [6.406303081507599, 52.62055687543201], [6.384039754246482, 52.61221992744705], [6.364441754896907, 52.64316554793358], [6.327793496113203, 52.658680749437785], [6.303060820934039, 52.59712863855225], [6.319679924382479, 52.59916341907739], [6.323403544258898, 52.59252212153006], [6.402657853628578, 52.59139168790498], [6.415004593218811, 52.569998231550365], [6.488340306784918, 52.56900910212842], [6.504920214234659, 52.57587648640077], [6.521813689673992, 52.56058737162159], [6.534121233265525, 52.52834175246622], [6.5412549050287705, 52.51929828346559], [6.609651922758786, 52.49250700655122], [6.595188599238799, 52.480298323400376]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id7aa87542-b07d-4863-a955-3db22e00decb",
      "Code": "0453",
      "Gemeentenaam": "Velsen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.544061987312313, 52.43929184365064], [4.5878047218605635, 52.43443097906281], [4.625001724626056, 52.42349403374017], [4.631665044404912, 52.41165274151747], [4.650753495771397, 52.428580985053024], [4.665804759271871, 52.42547229258406], [4.6824630587190095, 52.41385708708638], [4.700532414119317, 52.42550055342468], [4.721972625407751, 52.433328806278354], [4.674859034971375, 52.455513566170524], [4.6619243554006555, 52.46175921194909], [4.667607775212032, 52.46842877033705], [4.653340431685542, 52.47716137009078], [4.596035881587385, 52.48600701320702], [4.5663253145734295, 52.492733093276236], [4.554684102959783, 52.47806571699084], [4.52066197608892, 52.46924833471523], [4.519917252113637, 52.457463564173786], [4.543317263337029, 52.44912661618883], [4.544061987312313, 52.43929184365064]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1a790aa3-0667-4af0-a5aa-872b5725585b",
      "Code": "0856",
      "Gemeentenaam": "Uden",
      "aantal": 12
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.597023296366261, 51.70199477253373], [5.5968273163727655, 51.69091652300796], [5.576602181044005, 51.6803752294541], [5.562256445520116, 51.663164377512274], [5.570291625253442, 51.65143612865209], [5.588321784655051, 51.64270352889835], [5.602275560191948, 51.62942093380368], [5.607488628018935, 51.63377310326023], [5.62657707938542, 51.62340137475014], [5.664910766113188, 51.62834702185985], [5.7504756312734315, 51.622694853734465], [5.747692715365792, 51.63267093047578], [5.7425580395362035, 51.650051347461364], [5.734013311819789, 51.652029606305256], [5.731347983908247, 51.67393175779115], [5.67866856165659, 51.66494481047177], [5.6729851418452135, 51.666244809140615], [5.6225790875181065, 51.69908390594915], [5.6239509474725775, 51.703520857927586], [5.597023296366261, 51.70199477253373]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id21caf0d1-f5c4-4071-a52e-3be55fb9e771",
      "Code": "1729",
      "Gemeentenaam": "Gulpen-Wittem",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.845055576134479, 50.76537399247482], [5.848935980005695, 50.75341965688961], [5.86343849952438, 50.76350877699344], [5.8864857467594796, 50.77015007454078], [5.889739014651509, 50.75633052347419], [5.9151772178072575, 50.7503674861019], [5.935755117124311, 50.75698052280861], [5.920547069629041, 50.7693305101626], [5.92383953351977, 50.77523702585363], [5.943594316864141, 50.77325876700974], [5.942026476916174, 50.79052614063282], [5.95100236061828, 50.794397875798715], [5.95100236061828, 50.794397875798715], [5.976675739766223, 50.803356562277465], [5.983535039538574, 50.80974351225915], [5.959547088334695, 50.8283391453917], [5.954804372492097, 50.845917388261675], [5.933168181210167, 50.83967174248311], [5.925015413480744, 50.848828254846254], [5.891267658600777, 50.84275217411145], [5.887975194710048, 50.847047821886754], [5.859479703655766, 50.83368044427019], [5.864144027500965, 50.82333697660073], [5.839254568327005, 50.80759568837151], [5.819421392985236, 50.80525003859947], [5.821812348905883, 50.79623483043947], [5.8358837124388785, 50.786682666307556], [5.845055576134479, 50.76537399247482]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id2cf5a790-def4-416f-ae17-b2b8548663bd",
      "Code": "0935",
      "Gemeentenaam": "Maastricht",
      "aantal": 6
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.757334931045783, 50.855299987349824], [5.7626655868688665, 50.86651954107873], [5.733386175840602, 50.87474344570118], [5.714846468455905, 50.90845862856915], [5.696541937063403, 50.90859993277228], [5.692347965202593, 50.893706469761874], [5.679334893634476, 50.88048039634845], [5.669653481955786, 50.88180865585792], [5.644176082801339, 50.87138040566657], [5.64272583084947, 50.850071731833836], [5.653975082476126, 50.820086979928625], [5.693798217154462, 50.81045003327483], [5.716963052385658, 50.80380873572749], [5.717315816373951, 50.81449133348449], [5.7434595475062835, 50.821330456916215], [5.746320855411321, 50.83732609271107], [5.757334931045783, 50.855299987349824]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id9dace0c1-8bef-49ac-b8a8-0aa946d35931",
      "Code": "0503",
      "Gemeentenaam": "Delft",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.388336284480593, 52.007664024754995], [4.388336284480593, 52.007664024754995], [4.394529252275058, 52.011253151514616], [4.379752360765479, 52.026740092178194], [4.373481000973615, 52.03259008618798], [4.357802601493955, 52.026853135540705], [4.325975450550246, 52.01277923690847], [4.341065910049418, 52.00269011680465], [4.324094042612686, 51.98985969516001], [4.338243798143079, 51.97417492861204], [4.35662672153298, 51.97728362108101], [4.359527225436718, 51.97013362840238], [4.386298092548237, 51.97222493060878], [4.393823724298473, 51.97750970780602], [4.402917195996676, 51.966318414917744], [4.407895087831468, 51.96821189123975], [4.397037796191803, 51.978979271518625], [4.388336284480593, 52.007664024754995]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id6e17320e-52e1-4cbd-a309-f9b24c330d77",
      "Code": "0213",
      "Gemeentenaam": "Brummen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.008855654698224, 52.07402047854711], [6.006072738790585, 52.066361790737204], [6.023750134203901, 52.06729439847789], [6.044915973501442, 52.07964438583188], [6.0683551807235325, 52.08823568138247], [6.103435599559272, 52.07814656127865], [6.137457726430133, 52.059183537217955], [6.168344173405063, 52.07633786747852], [6.177947193086355, 52.09123133048893], [6.210519068005348, 52.09244654663589], [6.217887915760787, 52.09787262803627], [6.208833640061284, 52.11304869945295], [6.1903723246739855, 52.11454652400618], [6.183630612897732, 52.13421606908255], [6.1732044772437575, 52.14501171020205], [6.149608486026869, 52.14399431993948], [6.142435618264925, 52.155609525437164], [6.159525073697754, 52.1576443059623], [6.181631616964075, 52.152698658852586], [6.184688904862608, 52.16123343272193], [6.160622561661331, 52.16188343205635], [6.108413491394064, 52.152698658852586], [6.076076792467266, 52.14393779825822], [6.069648648680605, 52.13130520249797], [6.051108941295907, 52.1242117315006], [6.0358225018032385, 52.109459572693325], [6.034058681861778, 52.09572480414862], [6.008855654698224, 52.07402047854711]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb3941a46-faf8-4959-896b-eab818dd20fc",
      "Code": "1930",
      "Gemeentenaam": "Nissewaard",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.2393914894238245, 51.872972858326875], [4.185261815220299, 51.84971418649088], [4.1982748867884165, 51.84988375153464], [4.1971382028261415, 51.83493376684298], [4.207289966489221, 51.8355837661774], [4.221988466001402, 51.825014211782914], [4.212228662325314, 51.81396422309777], [4.194590462910697, 51.807096838825416], [4.1926306629757395, 51.79110120303055], [4.213247758291492, 51.7852794698614], [4.2466427491831675, 51.78533599154265], [4.2656136125535555, 51.80398814635645], [4.296774431519379, 51.80240553928134], [4.310179463074489, 51.80995118372874], [4.353334257642252, 51.819051174410625], [4.3690910491193105, 51.81698813304485], [4.397116188189202, 51.8312881184021], [4.422280019354056, 51.83021420645827], [4.432470979015834, 51.83705332989], [4.414166447623332, 51.84279028053727], [4.383671960635393, 51.84211202036223], [4.352589533666968, 51.84951636060649], [4.335539274232838, 51.86429678025439], [4.268396528461195, 51.864522866979414], [4.2393914894238245, 51.872972858326875]], [[4.220224646059941, 51.82580551532047], [4.220224646059941, 51.82580551532047], [4.220224646059941, 51.82580551532047], [4.220224646059941, 51.82580551532047]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "iddcfef4a4-4c56-4e0d-8b50-46212999e121",
      "Code": "0944",
      "Gemeentenaam": "Mook en Middelaar",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.938302857039755, 51.74158821025211], [5.915294805803355, 51.75229906884973], [5.911100833942546, 51.76241644979418], [5.893423438529229, 51.77784686877651], [5.867906843376083, 51.7755294798451], [5.864457595490558, 51.75766862856885], [5.880331974963713, 51.74854037704634], [5.885388258795904, 51.72830561515743], [5.892051578574759, 51.7228230120758], [5.919488777664164, 51.71767953908169], [5.938302857039755, 51.74158821025211]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd5868fac-0a21-4268-9bc0-227c4704de89",
      "Code": "0119",
      "Gemeentenaam": "Meppel",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.172890909254164, 52.773052371455115], [6.156781353788814, 52.762708903785644], [6.1327542065862355, 52.758724125257245], [6.120054703007711, 52.750895872403575], [6.1589763297159665, 52.692141584740114], [6.1630135175819785, 52.680074205792394], [6.183160260913342, 52.67507203700143], [6.201425596307145, 52.684454636089576], [6.219808519697047, 52.685698113077166], [6.251988434629048, 52.66987204232606], [6.265511054180255, 52.66797856600405], [6.269822614037161, 52.68222202968005], [6.283462821584465, 52.68225029052067], [6.286637697479096, 52.69917853405622], [6.274290957888864, 52.70618722253171], [6.248382402748726, 52.70819374221623], [6.21690801579331, 52.70316331258463], [6.216320075812822, 52.718593731566955], [6.231449731310693, 52.74171109919981], [6.218554247738673, 52.74829587506589], [6.201856752292835, 52.729304590164574], [6.172890909254164, 52.773052371455115]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb75cdd44-cb9f-462d-b3aa-6b58d3aace72",
      "Code": "0753",
      "Gemeentenaam": "Best",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.391205107197028, 51.471753703945836], [5.401592046852302, 51.4859689067812], [5.414801098413916, 51.48529064660615], [5.442551865492915, 51.493938463838006], [5.4474905613290066, 51.51208192352052], [5.42385537411342, 51.5340688575283], [5.404218178765146, 51.54828406036366], [5.382660379480614, 51.54379058670397], [5.356908608335273, 51.544723194444664], [5.3686282119463185, 51.53186451195939], [5.355693532375599, 51.52898190621544], [5.349382976585035, 51.51643409297707], [5.355889512369094, 51.49611454856628], [5.389950835238656, 51.48752325301568], [5.391205107197028, 51.471753703945836]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id6a28022a-158f-4b9d-82a6-e01420617d52",
      "Code": "0718",
      "Gemeentenaam": "Vlissingen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[3.703660579203851, 51.48226673665907], [3.6668947324240486, 51.46960588005819], [3.646238441109597, 51.47084935704577], [3.6292273776741664, 51.48091021630897], [3.6216625499252304, 51.4754841349086], [3.5869740910764834, 51.47924282671198], [3.5645539798205697, 51.470425444436366], [3.552755984212126, 51.47096240040828], [3.52539717712012, 51.46225806149518], [3.502428321882418, 51.48642108023123], [3.4860443944261736, 51.49732976471324], [3.4504936236060453, 51.51307105294246], [3.432581052200534, 51.52598625710898], [3.4346584401315887, 51.54223624046949], [3.484554946475606, 51.56419491363664], [3.485926806430076, 51.57363403440605], [3.4525710115371, 51.61642094711527], [3.387309673703016, 51.59251227594486], [3.307937776337239, 51.433375482374416], [3.3525428228568708, 51.37860597323936], [3.3630473505082428, 51.372869022592084], [3.4224684845361533, 51.391408134043374], [3.448102667685397, 51.391945090015284], [3.515010237464845, 51.40901463775397], [3.6914706236084154, 51.39762551898131], [3.738035470063005, 51.39460160903422], [3.7365852181111365, 51.411105939960365], [3.710441486978804, 51.42393636160501], [3.718045510726439, 51.42763853172714], [3.6964093194445082, 51.445838513090905], [3.7098535469983167, 51.453242853335176], [3.7174183747472522, 51.46960588005819], [3.6956645954692244, 51.471103704611416], [3.703660579203851, 51.48226673665907]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idcf435954-0672-411b-bd2d-065e12444d1e",
      "Code": "0317",
      "Gemeentenaam": "Eemnes",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.312264365816942, 52.232818142030034], [5.3139497937610045, 52.251865948612604], [5.33954478091155, 52.28772895536823], [5.335468397046839, 52.2902159093434], [5.3058362220302815, 52.27732896601751], [5.265973891353246, 52.281935483039696], [5.244063328080422, 52.25466377183468], [5.2247397007217415, 52.22518771506075], [5.314772909733687, 52.22419858563881], [5.312264365816942, 52.232818142030034]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id66591f2e-c878-4ce2-a490-bfd34e95d8c0",
      "Code": "0531",
      "Gemeentenaam": "Hendrik-Ido-Ambacht",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.67042988711837, 51.82360116975156], [4.672624863045523, 51.838664197805734], [4.648048971861156, 51.8625163472949], [4.635271076285234, 51.86972286165477], [4.647029875894978, 51.856722874966366], [4.636525348243606, 51.84965766480963], [4.627314288549306, 51.8546598336006], [4.604894177293392, 51.848385926981415], [4.600151461450796, 51.83872071948699], [4.637191680221492, 51.82535334187044], [4.661885159401956, 51.831598987648995], [4.67042988711837, 51.82360116975156]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb492633f-a469-49d3-8dbe-3f762740cc30",
      "Code": "0398",
      "Gemeentenaam": "Heerhugowaard",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.899844067504492, 52.697595926981116], [4.898824971538314, 52.70680896102551], [4.898668187543517, 52.70683722186613], [4.877267172253782, 52.71217852074463], [4.858100328889898, 52.723341552792284], [4.847674193235924, 52.720261121163944], [4.826233981947489, 52.71743503710125], [4.827096293918871, 52.6765133398734], [4.811417894439211, 52.67337638656381], [4.800521406800847, 52.66023509567227], [4.785587731296472, 52.63915250856455], [4.8302319738148025, 52.63268077606097], [4.838541525539022, 52.64613293619941], [4.8733867683825665, 52.63443294817985], [4.875464156313621, 52.64228946187414], [4.863195808720787, 52.65647640386888], [4.8763264682850025, 52.68637637325221], [4.899844067504492, 52.697595926981116]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idcc0b5c2b-d74d-4fc3-87a6-2bff2bd53cf5",
      "Code": "0654",
      "Gemeentenaam": "Borsele",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[3.9128888202599104, 51.47912978334948], [3.8468043664531444, 51.48503629904051], [3.8155651554899226, 51.48288847515286], [3.780837500642476, 51.495521070913114], [3.7577902534073764, 51.499166719353994], [3.70554198714141, 51.50244497686672], [3.6990354513573513, 51.49232759592227], [3.703660579203851, 51.48226673665907], [3.6956645954692244, 51.471103704611416], [3.7174183747472522, 51.46960588005819], [3.7098535469983167, 51.453242853335176], [3.6964093194445082, 51.445838513090905], [3.718045510726439, 51.42763853172714], [3.710441486978804, 51.42393636160501], [3.7365852181111365, 51.411105939960365], [3.738035470063005, 51.39460160903422], [3.775506844819392, 51.3921711767403], [3.8082355037331816, 51.35574295317214], [3.9244908358748587, 51.37804075642682], [3.963216482589618, 51.422014624442376], [3.935348127514523, 51.44702546839724], [3.928528023740871, 51.45878197809806], [3.908890828392597, 51.46799501214245], [3.9128888202599104, 51.47912978334948]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idbf9ea00e-62be-4e59-8ee6-e8b0a6b673f8",
      "Code": "0321",
      "Gemeentenaam": "Houten",
      "aantal": 13
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.153050219100997, 52.056753104924034], [5.126828095971266, 52.05491615028328], [5.121771812139076, 52.030442262300326], [5.128395935919231, 52.02479009417493], [5.119576836211923, 51.999920554423205], [5.13678387964085, 51.99568142832916], [5.155088411033352, 51.97157493127436], [5.1802130461995075, 51.96744884854282], [5.194323605731201, 51.96128798528614], [5.217684420955894, 51.96258798395498], [5.229090456577347, 51.97490971046834], [5.243984936083024, 51.978385793865456], [5.256253283675857, 51.97095319278056], [5.271461331171127, 51.98112709540627], [5.254136699746103, 51.986072742515994], [5.256214087677158, 51.99370316948527], [5.24320101610904, 51.99879012079813], [5.231324628503198, 52.00975532696139], [5.202006021476234, 52.01747053645255], [5.200908533512658, 52.031487913403524], [5.191540689823562, 52.043046597219956], [5.16073263484603, 52.0455052903545], [5.153050219100997, 52.056753104924034]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5f71d497-2445-4ecb-8e12-6e4f1cdcb026",
      "Code": "0327",
      "Gemeentenaam": "Leusden",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.31093170186117, 52.1083856607495], [5.322455325478721, 52.10191392824593], [5.340563876877727, 52.095018283132944], [5.401317674861409, 52.08933785416693], [5.404531746754739, 52.10411827381483], [5.432400101829835, 52.09682697693307], [5.443806137451286, 52.107085662080664], [5.472536804497763, 52.10180088488342], [5.479082536280521, 52.11742912975013], [5.486451384035961, 52.11536608838436], [5.504167975447977, 52.113726959627996], [5.4978966156561135, 52.1302878122354], [5.514084563118862, 52.135911719520166], [5.497308675675626, 52.14145084428305], [5.4989941036196885, 52.14738562081472], [5.481355904205072, 52.15049431328368], [5.459092576943956, 52.15298126725885], [5.442199101504622, 52.161516041128195], [5.423620198121225, 52.1576443059623], [5.3971237030006005, 52.133961721516904], [5.370470423885179, 52.13155955006361], [5.355615140378201, 52.13681606642023], [5.334018145094969, 52.12042477885659], [5.31093170186117, 52.1083856607495]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id6d371c68-9085-49c9-a8fe-350f65c34f88",
      "Code": "0642",
      "Gemeentenaam": "Zwijndrecht",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.621238908750938, 51.8007946713656], [4.645697211939208, 51.80743596891294], [4.671723355075443, 51.820859868210746], [4.67042988711837, 51.82360116975156], [4.661885159401956, 51.831598987648995], [4.637191680221492, 51.82535334187044], [4.600151461450796, 51.83872071948699], [4.5710680304160265, 51.8471141891532], [4.553625810994905, 51.82990333721138], [4.561112246746443, 51.81800552330743], [4.579534366135043, 51.80800118572548], [4.621238908750938, 51.8007946713656]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ida2e7cb06-55f1-4869-922b-4b8bb508badd",
      "Code": "0197",
      "Gemeentenaam": "Aalten",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.464352355581039, 51.855648963022546], [6.464352355581039, 51.855648963022546], [6.464391551579738, 51.85528157209439], [6.498844834436291, 51.86166852207609], [6.501079006362142, 51.86805547205778], [6.524635801580331, 51.87370764018318], [6.552425764658028, 51.886198931740296], [6.5561493845344465, 51.8817054580806], [6.585781559551004, 51.89408370627522], [6.6377162578273765, 51.90445543478531], [6.668720292798405, 51.91386629471409], [6.658960489122316, 51.92904236613077], [6.632659973995187, 51.937605400840745], [6.632659973995187, 51.937605400840745], [6.629053942114865, 51.950096692397864], [6.638931333787051, 51.96255972311435], [6.628740374125272, 51.96727928349906], [6.591817743350673, 51.9721401480869], [6.5468991288414475, 51.97270536489944], [6.527261933493174, 51.96603580651147], [6.532827765308453, 51.96236189722997], [6.517462933818386, 51.94792060766959], [6.5048810182359595, 51.945998870506955], [6.488653874774512, 51.91287716529215], [6.472740299302657, 51.907648909776164], [6.484067942926711, 51.87822937468349], [6.464352355581039, 51.855648963022546]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id452b3d36-8b08-480e-90a4-11929426dbae",
      "Code": "0703",
      "Gemeentenaam": "Reimerswaal",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.236804553509681, 51.34975165495922], [4.217559318148399, 51.37388641285465], [4.277411608162, 51.3760342367423], [4.268396528461195, 51.383551620349074], [4.263732204615996, 51.41644723883886], [4.275843768214034, 51.425038534389465], [4.26541763256006, 51.43967764983423], [4.230337213724321, 51.4889080342064], [4.133915056924414, 51.47955369595888], [4.1122004736450855, 51.50620366867011], [4.060383363364809, 51.50962323038597], [4.067517035128055, 51.52646669139964], [4.013073792934936, 51.53825146194109], [4.017385352791843, 51.512477575289296], [4.004725045212018, 51.50484714832001], [4.007311981126161, 51.45864067389493], [3.991437601653006, 51.44979503077868], [3.969213470390588, 51.45635154580414], [3.935348127514523, 51.44702546839724], [3.963216482589618, 51.422014624442376], [4.0197763087124905, 51.420177669801625], [4.048075819773277, 51.38988204864952], [4.114944193554026, 51.3910124822746], [4.102558257965094, 51.366849463538536], [4.146653756501637, 51.37168206728575], [4.197882926801426, 51.38702770374619], [4.209053786430683, 51.38575596591798], [4.218108062130186, 51.36591685579785], [4.236804553509681, 51.34975165495922]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5dcc339e-8eb8-426d-ae65-2711e19b3b74",
      "Code": "0150",
      "Gemeentenaam": "Deventer",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.32653922415483, 52.301633288956694], [6.267235678123017, 52.30081372457851], [6.235134155188414, 52.31446371060134], [6.235369331180609, 52.31983327032046], [6.206599468135433, 52.32110500814868], [6.168736133392055, 52.308302847344656], [6.10860947138756, 52.297620249587666], [6.101319015629517, 52.30123763718792], [6.112960227243165, 52.27752679190189], [6.130049682675994, 52.26068333088822], [6.123543146891935, 52.253081164759564], [6.153645673892882, 52.24403769575894], [6.1422396382714295, 52.2384420493148], [6.147727078089311, 52.22767466903593], [6.162190401609297, 52.22417032479818], [6.166266785474008, 52.231009448229905], [6.189157248714311, 52.229172493589154], [6.259984418363675, 52.229144232748524], [6.2712728659890296, 52.22640293120771], [6.292791469274862, 52.23086814402677], [6.2979261451044515, 52.22552684514827], [6.338689983751566, 52.22716597390464], [6.338023651773681, 52.23620944290527], [6.350879939347002, 52.2416920459869], [6.38184477831933, 52.246100737124706], [6.376710102489741, 52.25876159372559], [6.32881259207938, 52.281228962024024], [6.32653922415483, 52.301633288956694]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id437eee51-8da1-49b9-98b2-81f15228f429",
      "Code": "0263",
      "Gemeentenaam": "Maasdriel",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.185700486017389, 51.74192734033963], [5.206513561326636, 51.7414751668896], [5.225053268711334, 51.74297299144283], [5.2496683558944, 51.73359039235468], [5.267032183318123, 51.739468647205086], [5.294547774404926, 51.73678386734552], [5.3534985564484465, 51.75546428299995], [5.359926700235107, 51.76057949515343], [5.363767908107624, 51.78217077739243], [5.4017096348484, 51.820888129051376], [5.414879490411314, 51.82128378082015], [5.400651342883523, 51.837646807543166], [5.384385003423376, 51.827303339873694], [5.365806100039979, 51.80794466404422], [5.3390352329284605, 51.80658814369413], [5.319789997567178, 51.82054899896385], [5.304581950071908, 51.82396856067972], [5.281730682830304, 51.82119899829827], [5.28102515485372, 51.80189684415005], [5.2665226353350345, 51.793192505236945], [5.269932687221861, 51.77431426369814], [5.20772863728631, 51.769283834066535], [5.1736673144167495, 51.76402731770992], [5.184838174046007, 51.75388167592484], [5.185700486017389, 51.74192734033963]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd3b3aec4-34b8-4cd4-b1c3-1d7743701fc3",
      "Code": "0351",
      "Gemeentenaam": "Woudenberg",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.497857419657414, 52.05700745248968], [5.496132795714651, 52.07167482877507], [5.484060428115313, 52.0696117874093], [5.459249360938752, 52.080237863485046], [5.4860986200476685, 52.09366176278285], [5.484295604107508, 52.10553131584618], [5.493859427790101, 52.11109870144969], [5.486451384035961, 52.11536608838436], [5.479082536280521, 52.11742912975013], [5.472536804497763, 52.10180088488342], [5.443806137451286, 52.107085662080664], [5.432400101829835, 52.09682697693307], [5.404531746754739, 52.10411827381483], [5.401317674861409, 52.08933785416693], [5.340563876877727, 52.095018283132944], [5.322455325478721, 52.10191392824593], [5.298310590280044, 52.096431325164296], [5.332254325153508, 52.08416612033219], [5.405903606709209, 52.07520743385344], [5.401905614841896, 52.06429874937143], [5.422561906156348, 52.073031349125166], [5.438318697633406, 52.070431351787484], [5.428676481953415, 52.057318321736574], [5.448548853293884, 52.04313137974184], [5.4840996241140125, 52.05596180138648], [5.497857419657414, 52.05700745248968]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id43e880aa-1163-4fd8-9d16-7a59b3f44ad6",
      "Code": "0882",
      "Gemeentenaam": "Landgraaf",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.017126010423745, 50.870476058766506], [6.031158177958041, 50.871578231550956], [6.042877781569086, 50.900404288990465], [6.079800412343685, 50.905773848709586], [6.091559211953429, 50.917078184960374], [6.0561652251280975, 50.92713904422357], [6.018184302388622, 50.9347129495116], [6.0116777666045635, 50.9264325232079], [5.993412431210759, 50.91004123564426], [5.99662650310409, 50.89251951445554], [6.0082677147177375, 50.88556734766131], [6.017126010423745, 50.870476058766506]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id44a8e10a-416d-45ba-b1ba-f6fe3b2d1326",
      "Code": "0233",
      "Gemeentenaam": "Ermelo",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.683646453491382, 52.240618134043075], [5.726370092073455, 52.242511610365085], [5.761450510909194, 52.24830508269361], [5.749221359315059, 52.268285497016876], [5.755414327109524, 52.2776398352644], [5.744674623465958, 52.28832243302139], [5.750750003264326, 52.31706370793902], [5.706184152743393, 52.3283680441898], [5.678119817674801, 52.30149198475356], [5.6302615032631405, 52.326841958795946], [5.6020403841997535, 52.31799631567971], [5.581384092885301, 52.32263109354253], [5.565862477400438, 52.332381083558836], [5.545166990087287, 52.29329634097174], [5.571114741226124, 52.28399852440547], [5.571114741226124, 52.28399852440547], [5.596513748383173, 52.27851592132384], [5.596513748383173, 52.27851592132384], [5.6370424110380934, 52.272496362270296], [5.6765911737255355, 52.25039638490001], [5.683646453491382, 52.240618134043075]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ida0e7ae6f-7ad7-408d-bc91-d6efe2f59684",
      "Code": "0086",
      "Gemeentenaam": "Opsterland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.185708000828786, 53.12922374587677], [6.124640634855512, 53.10093464440918], [6.10488585151114, 53.077732494254434], [6.089521020021074, 53.0710911967071], [6.024416466181787, 53.07335206395726], [6.002466706910263, 53.08064336083901], [5.982907903559387, 53.077308581645035], [5.93254104523098, 53.08120857765155], [5.927563153396188, 53.078382493588855], [5.94731793674056, 53.06247164031588], [5.942653612895361, 53.0534846929965], [5.9576264843984355, 53.05362599719963], [5.937989289050162, 53.04427165895211], [5.984554135504752, 53.02544993909455], [5.971933023923626, 53.009680390024705], [5.979654635667358, 52.997839097802], [5.9580968363828255, 52.972941297209644], [6.019085810358702, 52.96604565209667], [6.044719993507946, 52.966328260502934], [6.069766236676703, 52.974184774197234], [6.099711979682853, 52.98950214981705], [6.096419515792125, 52.992893450692286], [6.1311863666382695, 53.011884735593604], [6.1768105091240795, 53.021041247956745], [6.205423588174458, 53.03794123065167], [6.212870827927297, 53.03624558021405], [6.2805231216820285, 53.058204253381206], [6.2814246296521095, 53.06419555159412], [6.33206585997141, 53.07527380111989], [6.305294992859891, 53.08118031681093], [6.315172384532077, 53.094038999296195], [6.290557297349011, 53.09983247162472], [6.261669846307738, 53.11430202202573], [6.2050316281874665, 53.11548897733206], [6.185708000828786, 53.12922374587677]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id0253ca71-55bd-4529-a810-42c8da3b8c74",
      "Code": "1714",
      "Gemeentenaam": "Sluis",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[3.693939971526462, 51.2760473826041], [3.7066394751049865, 51.28918867349564], [3.703582187206453, 51.309932130515826], [3.7124012869137615, 51.31578212452561], [3.6841801678503736, 51.32117994508536], [3.666189204447464, 51.31982342473527], [3.657958044720643, 51.333360367395585], [3.644161053178542, 51.341838619583676], [3.647257537075775, 51.35006252420612], [3.6938223835303647, 51.352464695659414], [3.6914706236084154, 51.39762551898131], [3.515010237464845, 51.40901463775397], [3.448102667685397, 51.391945090015284], [3.4224684845361533, 51.391408134043374], [3.3630473505082428, 51.372869022592084], [3.3750021301114836, 51.35887990648173], [3.374061426142704, 51.34850817797164], [3.385349873768059, 51.33412341009251], [3.358383026663044, 51.31499082098806], [3.3768443420503433, 51.30244300774968], [3.367280518367751, 51.29958866284636], [3.3808031379189574, 51.2869560670861], [3.378255398003513, 51.27508651402278], [3.3884071616665925, 51.272825646772624], [3.4062805370734046, 51.25776261871845], [3.4167458687260774, 51.26005174680923], [3.4275247683683436, 51.244677849508165], [3.4469659837231217, 51.241597417879824], [3.527592153047272, 51.24603436985826], [3.5154021974518366, 51.287153892970494], [3.538057484699945, 51.28364954873275], [3.5597720679792735, 51.29546258011482], [3.5818002192481955, 51.28689954540485], [3.581094691271611, 51.29831692501815], [3.590815298949, 51.30442126659357], [3.6408293932891147, 51.28808650071118], [3.6582324167115368, 51.29014954207695], [3.6899419796591486, 51.280597377945035], [3.693939971526462, 51.2760473826041]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd1bb4b32-dce1-4347-a390-b900cb1f014f",
      "Code": "0484",
      "Gemeentenaam": "Alphen aan den Rijn",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.659964555465698, 52.06410092348705], [4.677249990892022, 52.06551396551839], [4.713035937704346, 52.07693134513169], [4.704726385980126, 52.09524436985796], [4.7348681089797715, 52.1018856674053], [4.738866100847085, 52.106520445268124], [4.756896260248694, 52.124381296544364], [4.7590520401771474, 52.13509215514198], [4.74184499674822, 52.1626747355939], [4.726793733247748, 52.15900082631239], [4.70500075797102, 52.144757362636405], [4.7059414619397995, 52.15168126859001], [4.681208786760637, 52.167507339341114], [4.679876122804865, 52.162787778956414], [4.642679120039372, 52.16196821457823], [4.571499186401717, 52.153122571461985], [4.560132346778964, 52.13189868015114], [4.550725307091168, 52.13837041265471], [4.547236863206944, 52.13466824253258], [4.547236863206944, 52.13466824253258], [4.535321279602402, 52.12042477885659], [4.537124295542563, 52.08394003360718], [4.530539367761106, 52.08052047189131], [4.533714243655737, 52.073059609965796], [4.557192646876528, 52.06124657858372], [4.565031846616358, 52.058561798724156], [4.6074419172088374, 52.06551396551839], [4.606893173227049, 52.077044388494194], [4.6368389162331995, 52.07373787014084], [4.63821077618767, 52.06483570534335], [4.659964555465698, 52.06410092348705]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id64752a9d-0785-43e6-9e8f-ee34a12fff82",
      "Code": "0118",
      "Gemeentenaam": "Hoogeveen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.529378517422928, 52.654498145024995], [6.55281772464502, 52.66560465539139], [6.614512226597481, 52.67405464673885], [6.629445902101857, 52.66967421644167], [6.632424798002992, 52.68674376418036], [6.629955450084946, 52.71271547671655], [6.595776539219287, 52.71322417184783], [6.596795635185465, 52.72353937867667], [6.576413715861907, 52.72427416053297], [6.587466987495068, 52.73569154014626], [6.55740365649282, 52.74535674764069], [6.566379540194925, 52.7655915095296], [6.51272021797579, 52.76208716529185], [6.5076247381449, 52.76909585376734], [6.4906528707081685, 52.77087628672684], [6.491789554670444, 52.79311756830026], [6.455454863876332, 52.800550169385154], [6.446910136159918, 52.78588279309976], [6.446165412184634, 52.77610454224283], [6.410144289380115, 52.76488498851392], [6.426293040844165, 52.751432828375485], [6.415396553205802, 52.740863273981], [6.421315149009374, 52.73142415321159], [6.4068126294906875, 52.72840024326451], [6.414377457239624, 52.717265472057484], [6.40716539347898, 52.70680896102551], [6.419943289054903, 52.701722009712654], [6.451143304019427, 52.70697852606927], [6.44867395610138, 52.69378071349647], [6.48598854686297, 52.69363940929334], [6.499550362412876, 52.673545951607565], [6.530554397383902, 52.672472039663745], [6.529378517422928, 52.654498145024995]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id93e04eba-da7a-4fef-8e1d-3bf57520525d",
      "Code": "0797",
      "Gemeentenaam": "Heusden",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.204788937383874, 51.66983393590024], [5.223211056772474, 51.67379045358802], [5.22615075667491, 51.69004043694852], [5.251588959830658, 51.69936651435542], [5.229991964547427, 51.7105578072437], [5.230932668516207, 51.7241795324259], [5.21000200521086, 51.733957783282825], [5.206513561326636, 51.7414751668896], [5.185700486017389, 51.74192734033963], [5.165671330682123, 51.742916469761575], [5.12804317193094, 51.737603431723706], [5.101468284812916, 51.73118822090139], [5.081752697467244, 51.72234257778514], [5.1068381366347, 51.7108686764906], [5.103036124760882, 51.70247520682439], [5.106485372646407, 51.67732305866639], [5.101507480811615, 51.67684262437573], [5.106132608658115, 51.63594918798851], [5.1449366473702725, 51.64049918332945], [5.160066302868144, 51.63953831474814], [5.154461275054166, 51.654912212049204], [5.166808014644398, 51.66904263236269], [5.204788937383874, 51.66983393590024]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ida0e7abba-888a-47d8-9b73-59808647e311",
      "Code": "0047",
      "Gemeentenaam": "Veendam",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.813941467978752, 53.07097815334459], [6.861290234407325, 53.040880358076876], [6.881436977738687, 53.046617308724144], [6.8989183931585085, 53.032402105888785], [6.9076982968671174, 53.038873838392355], [6.905503320939966, 53.043847746342706], [6.933332480016362, 53.049612957830604], [6.9244349883116545, 53.0577803407718], [6.930588760107421, 53.07284336882597], [6.96061289511097, 53.095791171415065], [6.9617495790732455, 53.11003463509106], [6.959358623152597, 53.12018027687614], [6.8862580855786835, 53.12860200738297], [6.8659153622538245, 53.12439114212956], [6.823113331674353, 53.12622809677031], [6.801673120385919, 53.119162886613566], [6.813941467978752, 53.07097815334459]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id7fbf4cbf-1ce2-4c46-9a4d-61de4ad915d6",
      "Code": "1706",
      "Gemeentenaam": "Cranendonck",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.515769991062925, 51.29520823254918], [5.544461462110703, 51.27129956137877], [5.556455437712643, 51.266382175109676], [5.555201165754269, 51.24439524110189], [5.5604534295799555, 51.22232352457223], [5.566058457393934, 51.22091048254089], [5.61877707564429, 51.2294169955696], [5.625989139404933, 51.27358868946955], [5.643980102807843, 51.29057345468636], [5.672122829873832, 51.31510386435056], [5.65471980645141, 51.35387773769076], [5.63994291494183, 51.34672774501214], [5.644097690803941, 51.33347341075809], [5.631280599229319, 51.32753863422643], [5.605332848090482, 51.3318060211611], [5.565823281401739, 51.32044516322906], [5.515769991062925, 51.29520823254918]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id708a8e2f-f710-49a7-a2b2-e58c479ec51e",
      "Code": "1774",
      "Gemeentenaam": "Dinkelland",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.759027873801244, 52.33207021431194], [6.773843961309523, 52.31890066257977], [6.802025884374212, 52.3135876245419], [6.823348507666548, 52.30875502079469], [6.8191545358057395, 52.30084198541914], [6.846356558902949, 52.29140286464973], [6.852471134700016, 52.284874610464904], [6.840477159098077, 52.27631157575493], [6.868345514173171, 52.272948535720325], [6.88320079768015, 52.283178960027286], [6.912127444720122, 52.285496348958695], [6.859800786456757, 52.298637639850234], [6.861368626404723, 52.3063528493414], [6.877321397875277, 52.31223110419181], [6.900643017101271, 52.333454995502656], [6.9309807200944125, 52.32947021697426], [6.93752645187717, 52.332833257008865], [6.953596811343822, 52.333963690633944], [6.9592018391578, 52.34569193949414], [6.97025511079096, 52.34877237112247], [6.9637485750069015, 52.3659832230643], [6.9637485750069015, 52.3659832230643], [6.970921442768846, 52.37985929581214], [7.007765681546046, 52.363835399176644], [7.072203903407448, 52.37279408565539], [7.058720479854941, 52.399415797526], [7.0349285086445565, 52.403541880257535], [7.021993829073837, 52.42298533860889], [7.010783773445881, 52.42917446270619], [6.993890298006548, 52.46548964291184], [6.9775455665490025, 52.46568746879623], [6.9610440510966605, 52.44398314319472], [6.947286255553259, 52.43663532463171], [6.949206859489517, 52.432876632828325], [6.8971153772183476, 52.43282011114707], [6.853411838668796, 52.42705489965917], [6.851491234732538, 52.41459186894268], [6.862348526372202, 52.40780926719221], [6.863602798330575, 52.36372235581414], [6.817704283853871, 52.36507887616423], [6.783407784992115, 52.36010496821389], [6.7739615493056204, 52.34656802555357], [6.762633905681566, 52.34343107224398], [6.759027873801244, 52.33207021431194]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idc13f875e-4391-4100-9a8d-7ac7ec1918dd",
      "Code": "0866",
      "Gemeentenaam": "Waalre",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.516436323040811, 51.378323364833086], [5.5048735034245615, 51.4001407337971], [5.497818223658715, 51.40426681652864], [5.4362021137036525, 51.40497333754431], [5.427265426000246, 51.4026559486129], [5.41781919031375, 51.390136396215155], [5.421817182181064, 51.38341031614594], [5.423189042135535, 51.3748755422766], [5.43631970169975, 51.366227725044745], [5.516436323040811, 51.378323364833086]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id029dbb7f-013e-4313-9088-f921d4e6b511",
      "Code": "0547",
      "Gemeentenaam": "Leiderdorp",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.550725307091168, 52.13837041265471], [4.560132346778964, 52.13189868015114], [4.571499186401717, 52.153122571461985], [4.559622798795875, 52.16592473226601], [4.5527634990235235, 52.16309864820331], [4.538143391508742, 52.180083413420114], [4.518349412165671, 52.18211819394526], [4.51470418428665, 52.160950824315655], [4.524032831977047, 52.14738562081472], [4.550725307091168, 52.13837041265471]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id851d34f5-ff8c-4342-8e0e-e81c47195dba",
      "Code": "1667",
      "Gemeentenaam": "Reusel-De Mierden",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.191031141840472, 51.430210268224194], [5.154853235041157, 51.42891026955535], [5.154853235041157, 51.42891026955535], [5.102017028794704, 51.42891026955535], [5.071169777818474, 51.39349943624977], [5.116558744312089, 51.36114077373189], [5.13168839980996, 51.347038614259034], [5.134353727721503, 51.31549951611934], [5.162653238782289, 51.31032778228461], [5.200242201534772, 51.322649508797966], [5.204710545386476, 51.32544733202003], [5.193853253746811, 51.34522992045891], [5.188522597923727, 51.377616843817414], [5.200947729511357, 51.39010813537453], [5.194754761716892, 51.399858125390836], [5.191031141840472, 51.430210268224194]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id01a51cf9-7e17-42a9-b41b-63cacf7925be",
      "Code": "0861",
      "Gemeentenaam": "Veldhoven",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.388892543273778, 51.376458149351706], [5.421817182181064, 51.38341031614594], [5.41781919031375, 51.390136396215155], [5.427265426000246, 51.4026559486129], [5.426677486019758, 51.43015374654294], [5.387363899324512, 51.43781243435285], [5.356908608335273, 51.43820808612163], [5.339858348901142, 51.425547229520745], [5.319358841581487, 51.423795057401875], [5.3236704014383935, 51.40618855369127], [5.354360868419828, 51.408788551028955], [5.370979971868268, 51.39785160570632], [5.388892543273778, 51.376458149351706]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd7d4d101-e87b-4947-adad-5e8270c2ed69",
      "Code": "0855",
      "Gemeentenaam": "Tilburg",
      "aantal": 27
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.179546714221622, 51.59765574893897], [5.16947334255594, 51.603590525470636], [5.169198970565047, 51.61868181436543], [5.1449366473702725, 51.64049918332945], [5.106132608658115, 51.63594918798851], [5.098215016920887, 51.62891223867239], [5.102957732763484, 51.61690138140593], [5.093746673069184, 51.611249213280544], [5.045026046686141, 51.611107909077404], [5.042909462756387, 51.60604921860518], [5.004497384031221, 51.60788617324593], [4.986310440634815, 51.60791443408656], [4.95291544974314, 51.614725296677655], [4.94785916591095, 51.61116443075866], [4.968750633217597, 51.602064440076774], [4.973414957062795, 51.59197531997295], [4.968985809209792, 51.57131664547464], [4.951151629801679, 51.560916656123915], [4.953464193724928, 51.55051666677319], [4.9795687288585615, 51.54421449931338], [4.975453148995151, 51.5401449382631], [5.020606939496571, 51.53895798295676], [5.030484331168757, 51.52954712302798], [5.030484331168757, 51.52954712302798], [5.052277306445484, 51.529773209752996], [5.060312486178809, 51.53785581017231], [5.09206124512512, 51.53494494358773], [5.109817032535835, 51.539381895566166], [5.117969800265258, 51.54574058470723], [5.130198951859393, 51.53031016572491], [5.14783715127401, 51.547125365897955], [5.137371819621337, 51.562584045720904], [5.150776851176446, 51.580105766909625], [5.179546714221622, 51.59765574893897]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id7daf0dab-8a37-4f72-bf6a-ac7ca300487f",
      "Code": "0546",
      "Gemeentenaam": "Leiden",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.518349412165671, 52.18211819394526], [4.497575532855121, 52.18398340942664], [4.491931309042444, 52.175420374716666], [4.478604669484733, 52.179574718288826], [4.466689085880192, 52.169937771635034], [4.454185562295163, 52.171152987781994], [4.448384554487689, 52.16205299710011], [4.440466962750461, 52.155666047118416], [4.4429755066672065, 52.145350840289574], [4.449599630447363, 52.14097040999239], [4.46539561792312, 52.14944866218048], [4.46449410995304, 52.12732042396957], [4.472960445672056, 52.118955215143984], [4.513136344338684, 52.139924758889194], [4.516036848242421, 52.14470084095515], [4.516036848242421, 52.14470084095515], [4.524032831977047, 52.14738562081472], [4.51470418428665, 52.160950824315655], [4.518349412165671, 52.18211819394526]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id44168add-0860-48af-b661-f164e59b3c28",
      "Code": "1948",
      "Gemeentenaam": "Meierijstad",
      "aantal": 10
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.42338502212903, 51.653781778424126], [5.396143803033121, 51.645331787076664], [5.378074447632813, 51.646631785745505], [5.385913647372643, 51.620914420774966], [5.385913647372643, 51.620914420774966], [5.3948503350760495, 51.60585139272079], [5.38054379555086, 51.602912265295586], [5.38144530352094, 51.58759488967577], [5.399789030912142, 51.572362296577836], [5.404218178765146, 51.54828406036366], [5.42385537411342, 51.5340688575283], [5.437456385662024, 51.533984075006416], [5.487156912012546, 51.541840588700715], [5.500248375578062, 51.521408000927416], [5.5308604505620975, 51.525053649368296], [5.547440358011838, 51.5377427668098], [5.533094622487949, 51.557807963654945], [5.584245400790339, 51.56272534992404], [5.627204215364607, 51.55526448799852], [5.652485634525558, 51.56967751671827], [5.651348950563283, 51.58236663415978], [5.642961006841665, 51.60619052280831], [5.62657707938542, 51.62340137475014], [5.607488628018935, 51.63377310326023], [5.602275560191948, 51.62942093380368], [5.588321784655051, 51.64270352889835], [5.570291625253442, 51.65143612865209], [5.524393110776738, 51.63043832406625], [5.5048735034245615, 51.63606223135102], [5.4971910876795285, 51.626679632262864], [5.467794088655166, 51.64227961628895], [5.42338502212903, 51.653781778424126]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id24220c0b-a10c-4f41-8579-6733474cb000",
      "Code": "0988",
      "Gemeentenaam": "Weert",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.7917882139023344, 51.237527856829544], [5.776776146400561, 51.25098001696798], [5.750201259282537, 51.261323484637444], [5.730328887942068, 51.28096476887319], [5.714023352483222, 51.283508244529614], [5.67451378579448, 51.277036512026044], [5.6569539783772615, 51.2797212918856], [5.643980102807843, 51.29057345468636], [5.625989139404933, 51.27358868946955], [5.61877707564429, 51.2294169955696], [5.566058457393934, 51.22091048254089], [5.652720810517753, 51.19765181070489], [5.658012270342138, 51.184793128219624], [5.689525853296255, 51.185414866713415], [5.7079871686835535, 51.18205182667881], [5.745654523433436, 51.189512688604324], [5.7522786472135925, 51.21398657658728], [5.774306798482515, 51.21559744450302], [5.7917882139023344, 51.237527856829544]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id85c338c0-bdf0-45d5-b4cc-bac2dd8ae39f",
      "Code": "1942",
      "Gemeentenaam": "Gooise Meren",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.201104513506154, 52.26814419281374], [5.1847205860499095, 52.27800722619255], [5.195029133707786, 52.28091809277713], [5.187268325965354, 52.29258981995606], [5.197812049615425, 52.30033329028785], [5.229560808561736, 52.301718071478575], [5.224582916726945, 52.325768046852126], [5.151129615164739, 52.31864631501413], [5.146151723329947, 52.319663705276696], [5.079283349549198, 52.37042017504273], [5.0791657615531, 52.388648417247126], [5.0376963949294, 52.375394082993076], [5.039068254883871, 52.354565843451], [5.039969762853951, 52.341254987515704], [5.013042111747636, 52.330487607236826], [5.016138595644868, 52.324524569864536], [5.017941611585028, 52.32319631035507], [5.03079789915835, 52.33057238975871], [5.06952354587311, 52.32178326832372], [5.100566776842836, 52.31030936702918], [5.096882352965116, 52.30030502944723], [5.107700448606081, 52.29728111950014], [5.104643160707547, 52.28538330559619], [5.134392923720202, 52.277809400308165], [5.141644183479544, 52.2823593956491], [5.137606995613532, 52.25960941894439], [5.1621436907991995, 52.25579420545976], [5.201104513506154, 52.26814419281374]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id01c8e7d5-85eb-43bb-8e6b-b7593aa3eab9",
      "Code": "0777",
      "Gemeentenaam": "Etten-Leur",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.694182662330055, 51.54483623780717], [4.693673114346966, 51.568123170483794], [4.682110294730717, 51.59889922592656], [4.663884155335612, 51.604070959761295], [4.657965559532041, 51.62046224732493], [4.665060035296587, 51.63431005923214], [4.644286155986038, 51.63247310459139], [4.631508260410115, 51.62447528669396], [4.612733377033223, 51.62846006522236], [4.601248949414372, 51.62523832939089], [4.613909256994197, 51.60802747744906], [4.59674140956397, 51.59030793037596], [4.591763517729177, 51.561029699486426], [4.62480574463256, 51.55226883889206], [4.640092184125229, 51.54342319577582], [4.638720324170759, 51.524403650033875], [4.6381715801889705, 51.517197135673996], [4.659102243494316, 51.525505822818324], [4.681208786760637, 51.54079493759752], [4.694182662330055, 51.54483623780717]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id35bf453a-7f15-476a-911c-3a12fdf064d3",
      "Code": "0340",
      "Gemeentenaam": "Rhenen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.586597160712288, 51.950831474254166], [5.605920788070969, 51.943116264763006], [5.627243411363306, 51.95238582048865], [5.619521799619573, 51.96719450097718], [5.6261851193984285, 51.97369449432138], [5.605999180068367, 51.9941553429353], [5.589497664616025, 52.009444457714494], [5.570487605246938, 51.996953166157375], [5.5532413658193125, 51.99904446836377], [5.512595115168294, 52.01851618755575], [5.494212191778393, 51.9948901247916], [5.477671480327352, 51.98347274517831], [5.486216208043766, 51.98384013610646], [5.517494615005688, 51.97182927884], [5.537523770340953, 51.96829667376163], [5.561237349553938, 51.95450538353567], [5.586597160712288, 51.950831474254166]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf0ed6812-d544-4054-b8a8-cfb39b64678d",
      "Code": "0755",
      "Gemeentenaam": "Boekel",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.62657707938542, 51.62340137475014], [5.642961006841665, 51.60619052280831], [5.651348950563283, 51.58236663415978], [5.69944244096714, 51.58414706711928], [5.758628399002855, 51.59395357881684], [5.7504756312734315, 51.622694853734465], [5.664910766113188, 51.62834702185985], [5.62657707938542, 51.62340137475014]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ida67768a7-553b-45b0-911c-0bcdad70465a",
      "Code": "0784",
      "Gemeentenaam": "Gilze en Rijen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.94785916591095, 51.61116443075866], [4.911877239105131, 51.615403556852705], [4.918501362885287, 51.6013579190611], [4.864254100685664, 51.57908837664705], [4.870094304491838, 51.57080795034335], [4.8629998287272915, 51.557271007683035], [4.864254100685664, 51.55207101300768], [4.834621925669107, 51.53861885286924], [4.8290952898525275, 51.52906668873732], [4.844734493333488, 51.533305814831365], [4.844734493333488, 51.533305814831365], [4.866213900620622, 51.5380536360567], [4.911054123132448, 51.510075403836005], [4.956639069619559, 51.5186666993866], [4.96255766542313, 51.52587321374648], [4.975453148995151, 51.5401449382631], [4.9795687288585615, 51.54421449931338], [4.953464193724928, 51.55051666677319], [4.951151629801679, 51.560916656123915], [4.968985809209792, 51.57131664547464], [4.973414957062795, 51.59197531997295], [4.968750633217597, 51.602064440076774], [4.94785916591095, 51.61116443075866]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id45b37665-9a5a-41fd-bf5a-e5283326fd92",
      "Code": "0109",
      "Gemeentenaam": "Coevorden",
      "aantal": 9
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.629445902101857, 52.66967421644167], [6.682517284340505, 52.6541872757781], [6.70854342747674, 52.64870467269647], [6.701997695693982, 52.6272546946606], [6.710072071426007, 52.62781991147314], [6.726416802883552, 52.63321773203289], [6.741977614367114, 52.645341632661854], [6.767886169507252, 52.64683945721509], [6.783838940977805, 52.65254814702173], [6.821859059715981, 52.64768728243389], [6.83894851514881, 52.65181336516543], [6.861878174387812, 52.649693802118406], [6.84953143479758, 52.699348099099986], [6.840869119085069, 52.69957418582501], [6.8263665995663825, 52.73088719723968], [6.837498263196942, 52.73450458483993], [6.830560571427192, 52.74227631601235], [6.839693239124093, 52.7609849925074], [6.831383687399875, 52.77881758294302], [6.849805806788474, 52.80464799127606], [6.8163324238994, 52.825702317543154], [6.7656128015827015, 52.84992185796046], [6.736333390554437, 52.87869139371872], [6.71457961127641, 52.868150100164854], [6.728611778810704, 52.85396315817012], [6.704035887626338, 52.84698273053526], [6.707602723507961, 52.836384915300144], [6.690199700085538, 52.822678407596065], [6.694001711959356, 52.81451102465488], [6.675148436585065, 52.79713060766929], [6.660881093058574, 52.8012284295602], [6.616354438536341, 52.76310455555442], [6.587466987495068, 52.73569154014626], [6.576413715861907, 52.72427416053297], [6.596795635185465, 52.72353937867667], [6.595776539219287, 52.71322417184783], [6.629955450084946, 52.71271547671655], [6.632424798002992, 52.68674376418036], [6.629445902101857, 52.66967421644167]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id0e28b3d4-a64c-4495-a72e-e4b581b224e7",
      "Code": "0965",
      "Gemeentenaam": "Simpelveld",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.023710938205202, 50.81839132949101], [6.004230526851725, 50.83760870111735], [5.9802425756478454, 50.84868695064311], [5.969346088009482, 50.86007606941578], [5.954804372492097, 50.845917388261675], [5.959547088334695, 50.8283391453917], [5.983535039538574, 50.80974351225915], [6.003564194873839, 50.801463085955454], [6.025043602160974, 50.814123942556336], [6.023710938205202, 50.81839132949101]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idcd32e27a-4543-41ea-9d0b-8deb508bd82b",
      "Code": "0183",
      "Gemeentenaam": "Tubbergen",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.947286255553259, 52.43663532463171], [6.941642031740582, 52.43542010848475], [6.861799782390414, 52.45135922259836], [6.854313346638877, 52.459696170583314], [6.774588685284806, 52.45961138806143], [6.752717318010681, 52.464104861721125], [6.7177152911723415, 52.4781222386721], [6.692081108023097, 52.44734618322933], [6.676324316546039, 52.44409618655723], [6.677892156494005, 52.4278179423561], [6.669660996767184, 52.41736143132412], [6.698626839805855, 52.39373536855998], [6.7052901595847105, 52.37813538453389], [6.713482123312833, 52.376496255777525], [6.720576599077379, 52.35233323704147], [6.709758503436413, 52.34343107224398], [6.720850971068273, 52.341198465834445], [6.759027873801244, 52.33207021431194], [6.762633905681566, 52.34343107224398], [6.7739615493056204, 52.34656802555357], [6.783407784992115, 52.36010496821389], [6.817704283853871, 52.36507887616423], [6.863602798330575, 52.36372235581414], [6.862348526372202, 52.40780926719221], [6.851491234732538, 52.41459186894268], [6.853411838668796, 52.42705489965917], [6.8971153772183476, 52.43282011114707], [6.949206859489517, 52.432876632828325], [6.947286255553259, 52.43663532463171]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id84a4dd3f-8e32-4c68-b3a1-1f3966362151",
      "Code": "0074",
      "Gemeentenaam": "Heerenveen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.937832505055366, 52.91172831641164], [5.952335024574051, 52.92464352057816], [6.003799370866034, 52.93368698957879], [6.043308937554777, 52.91811526639333], [6.0848566961758745, 52.93628698691647], [6.092970267906599, 52.94230654597001], [6.1284818427280285, 52.953836968945815], [6.158623565727674, 52.97585216379422], [6.202209516281128, 52.99032171419523], [6.205423588174458, 53.03794123065167], [6.1768105091240795, 53.021041247956745], [6.1311863666382695, 53.011884735593604], [6.096419515792125, 52.992893450692286], [6.099711979682853, 52.98950214981705], [6.069766236676703, 52.974184774197234], [6.044719993507946, 52.966328260502934], [6.019085810358702, 52.96604565209667], [5.9580968363828255, 52.972941297209644], [5.979654635667358, 52.997839097802], [5.971933023923626, 53.009680390024705], [5.984554135504752, 53.02544993909455], [5.937989289050162, 53.04427165895211], [5.9576264843984355, 53.05362599719963], [5.942653612895361, 53.0534846929965], [5.94731793674056, 53.06247164031588], [5.927563153396188, 53.078382493588855], [5.895422434462886, 53.07886292787951], [5.871512875256405, 53.074199889176064], [5.874648555152337, 53.085080312817446], [5.830161096628802, 53.079597709735815], [5.796374145750136, 53.058825991875], [5.797941985698102, 53.049810783714996], [5.823850540838239, 53.038223839057935], [5.857598295718207, 53.01699994774709], [5.867318903395596, 52.99848909713642], [5.887269666733463, 52.981504331919616], [5.867201315399498, 52.97862172617567], [5.870964131274617, 52.96446304502156], [5.897421430396543, 52.96307826383084], [5.912982241880105, 52.94058263469177], [5.937832505055366, 52.91172831641164]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "iddcadacf9-ee79-4283-b15b-abf4dc1d90c7",
      "Code": "0307",
      "Gemeentenaam": "Amersfoort",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.306463358009467, 52.11027913707151], [5.31093170186117, 52.1083856607495], [5.334018145094969, 52.12042477885659], [5.355615140378201, 52.13681606642023], [5.370470423885179, 52.13155955006361], [5.3971237030006005, 52.133961721516904], [5.423620198121225, 52.1576443059623], [5.442199101504622, 52.161516041128195], [5.459092576943956, 52.15298126725885], [5.481355904205072, 52.15049431328368], [5.479905652253203, 52.165811688903496], [5.439886537581372, 52.171209509463246], [5.439337793599584, 52.20068556623717], [5.409666422584328, 52.21857467835404], [5.3955166670539345, 52.21913989516658], [5.392733751146295, 52.20551816998438], [5.330529701210745, 52.21473120402877], [5.330686485205542, 52.20339860693736], [5.314263361750598, 52.20303121600921], [5.310304565881984, 52.19183992312093], [5.326335729349936, 52.18180732469836], [5.349892524568125, 52.17561820060105], [5.338721664938868, 52.1600464774156], [5.331274425186029, 52.12664216379452], [5.306463358009467, 52.11027913707151]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id82fe254d-157f-4dc1-be22-8fead661b7fa",
      "Code": "0402",
      "Gemeentenaam": "Hilversum",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.215489445028742, 52.2042746929968], [5.218977888912966, 52.21213120669109], [5.1989487335777005, 52.24084422076809], [5.188836165913321, 52.24765508335919], [5.203809037416395, 52.26712680255117], [5.201104513506154, 52.26814419281374], [5.1621436907991995, 52.25579420545976], [5.137606995613532, 52.25960941894439], [5.141644183479544, 52.2823593956491], [5.134392923720202, 52.277809400308165], [5.104643160707547, 52.28538330559619], [5.102056224793404, 52.27990070251456], [5.119380856218427, 52.27340070917035], [5.125652216010291, 52.26014637491631], [5.139605991547189, 52.25401377250026], [5.141800967474341, 52.22549858430765], [5.122516536114359, 52.21882902591968], [5.145563783349459, 52.20062904455592], [5.124123572061024, 52.180818195276416], [5.192598981788438, 52.177822546169956], [5.215489445028742, 52.2042746929968]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1b3eb4ab-b113-4886-81ec-64b309612da0",
      "Code": "1959",
      "Gemeentenaam": "Altena",
      "aantal": 4
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.081752697467244, 51.72234257778514], [5.101468284812916, 51.73118822090139], [5.12804317193094, 51.737603431723706], [5.126318547988177, 51.74500777196797], [5.1427024754444215, 51.75520993543431], [5.135098451696786, 51.77383382940748], [5.09943009288056, 51.78731425038654], [5.079988877525782, 51.7799381709829], [5.066975805957664, 51.78055990947669], [5.052355698442882, 51.79570772005275], [5.014492363699504, 51.80901857598805], [5.00038180416781, 51.82094465073263], [4.926967698604303, 51.82829246929564], [4.884636020009221, 51.81647943791357], [4.84598876529186, 51.79875989084046], [4.797189746911419, 51.79977728110303], [4.773554559695833, 51.793333809440085], [4.75525002830333, 51.78160556057989], [4.744784696650656, 51.76349036173801], [4.7294590611592895, 51.750716461774616], [4.676309286923242, 51.724914314282195], [4.69857261418436, 51.722003447697624], [4.733653033020098, 51.736501258939256], [4.750742488452928, 51.75229906884973], [4.782452051400539, 51.76657079336635], [4.785391751302976, 51.75594471729061], [4.822275186078875, 51.75385341508421], [4.851946557094131, 51.75588819560935], [4.84692946926064, 51.72553605277599], [4.836895293593658, 51.71262084860947], [4.873073200392973, 51.7199969280131], [4.917991814902198, 51.71996866717248], [4.960911433477767, 51.72242736030702], [5.006026027980488, 51.71329910878452], [5.0545898703687335, 51.71197084927505], [5.081752697467244, 51.72234257778514]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idc5d811a8-f73f-4acd-bf3b-1aaa3affea4c",
      "Code": "1659",
      "Gemeentenaam": "Laarbeek",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.652485634525558, 51.56967751671827], [5.627204215364607, 51.55526448799852], [5.584245400790339, 51.56272534992404], [5.533094622487949, 51.557807963654945], [5.547440358011838, 51.5377427668098], [5.557670513672315, 51.509368882820326], [5.5767197690401025, 51.49944932776026], [5.609644407947387, 51.50922757861719], [5.618267527661201, 51.49874280674459], [5.634769043113543, 51.49487107157869], [5.656405234395473, 51.50730584145456], [5.684156001474471, 51.50770149322334], [5.674670569789276, 51.5259014745871], [5.6822353975382125, 51.5276819075466], [5.666909762046846, 51.540568850872496], [5.652485634525558, 51.56967751671827]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1de04885-8038-43fd-b876-d0219c13768c",
      "Code": "0399",
      "Gemeentenaam": "Heiloo",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.752153544406097, 52.59190038303626], [4.737455044893916, 52.59385038103952], [4.733339465030506, 52.6075568887436], [4.739454040827573, 52.61385905620342], [4.714603777652312, 52.62479600152605], [4.689988690469246, 52.62375035042285], [4.674427878985684, 52.60376993609959], [4.672585667046824, 52.59091125361432], [4.698337438192165, 52.58186778461369], [4.740002784809361, 52.578928657188484], [4.752153544406097, 52.59190038303626]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb076ceb5-9ffd-4d6b-b5b9-accab8917202",
      "Code": "0269",
      "Gemeentenaam": "Oldebroek",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.924349081502858, 52.39138971878794], [5.951041556616979, 52.39842666810405], [5.975578251802647, 52.41100274218305], [6.0177531464029315, 52.444209229919736], [6.022652646240324, 52.44409618655723], [6.0369591857655145, 52.47023746413718], [6.0279441060647105, 52.482417886447394], [6.000781278966199, 52.50013743352051], [5.96526970414477, 52.476454849075104], [5.958136032381525, 52.48408527604439], [5.925603353461231, 52.47408093846244], [5.903104850207919, 52.50440482045518], [5.876216395100303, 52.522011324165774], [5.864300811495761, 52.51816784984051], [5.840273664293183, 52.471057028515354], [5.877627451053472, 52.45311139471723], [5.868729959348766, 52.444774446732275], [5.899969170311987, 52.41982012445867], [5.916274705770833, 52.41295274018631], [5.906005354111656, 52.40860057072976], [5.924349081502858, 52.39138971878794]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id394b2671-e308-4494-a312-396a2d761050",
      "Code": "0794",
      "Gemeentenaam": "Helmond",
      "aantal": 7
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.5767197690401025, 51.49944932776026], [5.5701740372573445, 51.496934112944466], [5.585930828734403, 51.4791580441901], [5.6052152600943845, 51.47096240040828], [5.582991128831966, 51.4655363190079], [5.584715752774729, 51.46050588937631], [5.619365015624776, 51.44965372657555], [5.6564836263928715, 51.45654937168853], [5.672162025872531, 51.45776458783549], [5.6939941971479575, 51.439253737224824], [5.718256520342731, 51.43874504209354], [5.730015319952475, 51.44436894937831], [5.717198228377853, 51.46824935970809], [5.735032407785967, 51.46918196744878], [5.721705768228256, 51.48512108156239], [5.708183148677049, 51.50204932509794], [5.684156001474471, 51.50770149322334], [5.656405234395473, 51.50730584145456], [5.634769043113543, 51.49487107157869], [5.618267527661201, 51.49874280674459], [5.609644407947387, 51.50922757861719], [5.5767197690401025, 51.49944932776026]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id6643c192-786b-4154-817b-7d2d200733e3",
      "Code": "0093",
      "Gemeentenaam": "Terschelling",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.552849405832321, 53.47157556923184], [5.492605155831727, 53.458179930774655], [5.3571045883287685, 53.431275610497785], [5.176685406316584, 53.40861041631496], [5.161790926810907, 53.38614304801652], [5.101781852802509, 53.36802784917463], [5.087083353290328, 53.32306485173713], [5.102056224793404, 53.32295180837462], [5.162222082796598, 53.30528878298277], [5.147484387285718, 53.25133883822589], [5.387207115329716, 53.215617135673405], [5.4321257298389405, 53.215617135673405], [5.4770835403468645, 53.242549716790904], [5.537092614355263, 53.269454037067774], [5.5672343373549085, 53.30534530466402], [5.612270539860231, 53.318740943121206], [5.612819283842018, 53.42206257645339], [5.582912736834568, 53.458066887412144], [5.552849405832321, 53.47157556923184]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id91428e2f-5683-4a43-ac6f-6ea4a57f490b",
      "Code": "0532",
      "Gemeentenaam": "Stede Broec",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.25750755563423, 52.71619156011366], [5.211413061164031, 52.71695460281059], [5.187033149973159, 52.70745896035993], [5.204592957390378, 52.67761551265785], [5.209649241222569, 52.68394594095829], [5.24598393201668, 52.68660245997722], [5.262250271476827, 52.6768242091203], [5.268952787254381, 52.680272031676786], [5.259192983578293, 52.68629159073033], [5.25750755563423, 52.71619156011366]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id743b1e8d-df52-4c38-a337-9ad1469b391b",
      "Code": "1700",
      "Gemeentenaam": "Twenterand",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.585507187560109, 52.432226633493904], [6.585507187560109, 52.432226633493904], [6.575943363877517, 52.41750273552726], [6.59883382711782, 52.38364624845615], [6.6517484253616725, 52.398709276510324], [6.664173556949303, 52.38952450330656], [6.6761283365525435, 52.39613754001327], [6.698626839805855, 52.39373536855998], [6.669660996767184, 52.41736143132412], [6.677892156494005, 52.4278179423561], [6.676324316546039, 52.44409618655723], [6.692081108023097, 52.44734618322933], [6.7177152911723415, 52.4781222386721], [6.697568547840978, 52.48628962161329], [6.669308232778891, 52.49499396052639], [6.65366902929793, 52.48784396784777], [6.649553449434521, 52.4730918090405], [6.626819770189014, 52.4738265908968], [6.612278054671629, 52.46591355552125], [6.595188599238799, 52.480298323400376], [6.554307172595587, 52.48761788112276], [6.505468958216447, 52.490952660316744], [6.503783530272384, 52.48171136543172], [6.467017683492582, 52.47552224133442], [6.450085012054549, 52.4612505168178], [6.475601607207695, 52.44084618988513], [6.510917202035628, 52.437172280603626], [6.5299664574034155, 52.44197662351021], [6.540549377052185, 52.450878788307705], [6.5628910963107, 52.44576357615422], [6.596403675198474, 52.45480704515485], [6.598128299141236, 52.43903749608501], [6.585507187560109, 52.432226633493904]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idbf46f9d0-d40a-4a8f-9d8c-f6200c9500bb",
      "Code": "1652",
      "Gemeentenaam": "Gemert-Bakel",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.684156001474471, 51.50770149322334], [5.708183148677049, 51.50204932509794], [5.721705768228256, 51.48512108156239], [5.773954034494222, 51.48865368664076], [5.852581207884716, 51.50414062730434], [5.838235472360827, 51.566427520046176], [5.820205312959218, 51.568660126455704], [5.800568117610945, 51.57860794235639], [5.786692734071446, 51.59822096575151], [5.758628399002855, 51.59395357881684], [5.69944244096714, 51.58414706711928], [5.651348950563283, 51.58236663415978], [5.652485634525558, 51.56967751671827], [5.666909762046846, 51.540568850872496], [5.6822353975382125, 51.5276819075466], [5.674670569789276, 51.5259014745871], [5.684156001474471, 51.50770149322334]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5d8238f1-0016-4de4-8783-b9ea3bc7781a",
      "Code": "0637",
      "Gemeentenaam": "Zoetermeer",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.476723261547174, 52.031629217606664], [4.504709204618367, 52.03194008685356], [4.53500771161281, 52.04963137308604], [4.54512027927719, 52.04886833038911], [4.557192646876528, 52.06124657858372], [4.533714243655737, 52.073059609965796], [4.530539367761106, 52.08052047189131], [4.504434832627473, 52.093294371854704], [4.492205681033338, 52.09001611434197], [4.475664969582297, 52.08128351458824], [4.456733302210608, 52.07882482145369], [4.4208297674021875, 52.06257483809319], [4.42208403936056, 52.05166615361118], [4.450579530414842, 52.04920746047664], [4.457634810180688, 52.03860964524152], [4.470726273746204, 52.0404748607229], [4.476723261547174, 52.031629217606664]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id40b1e2b2-96fa-4606-9048-cc56c09fa912",
      "Code": "1711",
      "Gemeentenaam": "Echt-Susteren",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.8770003150742856, 51.03204328463087], [5.866299807429418, 51.05109109121344], [5.887544038724357, 51.05222152483852], [5.9132174178723, 51.06688890112392], [5.938146073044958, 51.035123716259214], [5.9576264843984355, 51.03472806449043], [5.967856640058914, 51.044760662913006], [5.970953123956146, 51.06163238476731], [6.00952198667611, 51.09085409397559], [6.036449637782425, 51.09653452294161], [6.013951134529114, 51.11792797929622], [6.000781278966199, 51.114141026652206], [5.984789311496947, 51.12064101999641], [5.9721290039171215, 51.114706243464745], [5.926740037423507, 51.11377363572406], [5.913883749850186, 51.13318883323478], [5.872296795230388, 51.135110570397416], [5.851326935926343, 51.10911059702061], [5.83349275651823, 51.09955843288869], [5.822674660877265, 51.09232365768819], [5.808250533355977, 51.09633669705722], [5.795119873791762, 51.089610616988004], [5.804174149491266, 51.07692149954649], [5.799353041651271, 51.06007803853282], [5.809348021319554, 51.059145430792135], [5.8196173729787315, 51.07259759093057], [5.827338984722464, 51.047671529497585], [5.848622412016102, 51.04625848746623], [5.8526204038834155, 51.02933024393068], [5.8770003150742856, 51.03204328463087]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ida2f5feb3-2d56-443b-b1c7-2739a57652ba",
      "Code": "0072",
      "Gemeentenaam": "Harlingen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.472184040509471, 53.14660416286235], [5.496367971706846, 53.17836934772706], [5.480219220242796, 53.17596717627377], [5.489547867933194, 53.20075193350362], [5.466853384686386, 53.19933889147227], [5.436907641680237, 53.210191054273025], [5.4321257298389405, 53.215617135673405], [5.387207115329716, 53.215617135673405], [5.147484387285718, 53.25133883822589], [5.132825083772236, 53.19738889346901], [5.163241178762775, 53.10757594195651], [5.09578486500154, 53.08711509334259], [5.144270315392387, 53.02615646011022], [5.164260274728953, 53.00100431195222], [5.292470386473871, 53.06806728676001], [5.348403076617558, 53.079654231417074], [5.372273439825339, 53.09378465173055], [5.372273439825339, 53.107802028681526], [5.402140790834091, 53.125775923320276], [5.406648330684494, 53.152708504437776], [5.434791057750482, 53.15347154713471], [5.472184040509471, 53.14660416286235]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id8b933fd0-2747-4029-befc-b310c430bc9a",
      "Code": "0432",
      "Gemeentenaam": "Opmeer",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.898824971538314, 52.70680896102551], [4.898668187543517, 52.70683722186613], [4.898824971538314, 52.70680896102551], [4.899844067504492, 52.697595926981116], [4.915875230972444, 52.699348099099986], [4.90497874333408, 52.68713941594914], [4.95287625374444, 52.67213290957622], [4.979215964870269, 52.67967855402362], [4.98607526464262, 52.698924186490586], [4.972003901109626, 52.71217852074463], [4.988270240569773, 52.71339373689159], [5.011160703810076, 52.72291764018288], [4.996383812300497, 52.73863066757147], [4.996854164284887, 52.752054566869276], [4.944409918025425, 52.75360891310376], [4.898824971538314, 52.70680896102551]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "iddd92d325-8f06-4b4e-90be-2b98463c14df",
      "Code": "1916",
      "Gemeentenaam": "Leidschendam-Voorburg",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.4208297674021875, 52.06257483809319], [4.456733302210608, 52.07882482145369], [4.475664969582297, 52.08128351458824], [4.492205681033338, 52.09001611434197], [4.472960445672056, 52.118955215143984], [4.46449410995304, 52.12732042396957], [4.427885047168034, 52.10146175479589], [4.401153376055214, 52.111861744146616], [4.3726970809996315, 52.0947639355673], [4.373520196972314, 52.09230524243276], [4.335225706243245, 52.07500960796905], [4.354510137603226, 52.067661789406046], [4.354470941604527, 52.067661789406046], [4.354510137603226, 52.067661789406046], [4.354470941604527, 52.067661789406046], [4.342986513985677, 52.06152918698999], [4.342986513985677, 52.06152918698999], [4.348003601819167, 52.05649875735839], [4.379987536757674, 52.074755260403414], [4.403936291962854, 52.07783569203175], [4.4208297674021875, 52.06257483809319]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5178d81d-d7fb-405b-a7cc-a048b2727aef",
      "Code": "0080",
      "Gemeentenaam": "Leeuwarden",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.771014334591786, 53.04695643881167], [5.796374145750136, 53.058825991875], [5.830161096628802, 53.079597709735815], [5.874648555152337, 53.085080312817446], [5.878764135015747, 53.08657813737068], [5.8788033310144465, 53.08657813737068], [5.878764135015747, 53.08657813737068], [5.8788033310144465, 53.08657813737068], [5.882918910877857, 53.089884655724035], [5.882918910877857, 53.089884655724035], [5.882017402907777, 53.10692594262209], [5.9316003412622, 53.1105998519036], [5.949669696662509, 53.10489116209695], [5.943476728868044, 53.121621579748115], [5.9228596335522905, 53.13128678724254], [5.9086314860244995, 53.1447672082216], [5.931953105250493, 53.161130234944615], [5.922114909577006, 53.168365010145116], [5.861949051573813, 53.17153022429534], [5.85097417193805, 53.191708464502995], [5.86206663956991, 53.19374324502813], [5.857715883714304, 53.20405845185697], [5.897734998386136, 53.20866496887917], [5.879900818978022, 53.23333668274651], [5.852542011886017, 53.230482337843185], [5.859244527663571, 53.243284498647206], [5.832160092562459, 53.2428605860378], [5.8322776805585566, 53.267673604108275], [5.838666628346518, 53.274936640149406], [5.810523901280528, 53.27742359412458], [5.763214330850655, 53.29449314186326], [5.73538517177426, 53.294719228588285], [5.72013792828029, 53.27519098771505], [5.73538517177426, 53.264706215842445], [5.733621351832797, 53.248512754163194], [5.743890703491974, 53.24110841391893], [5.729780143960281, 53.235258419909144], [5.734797231793772, 53.21123670537622], [5.74455703546986, 53.19775628439716], [5.745419347441241, 53.18523673199942], [5.733307783843204, 53.169467182929566], [5.71323943250924, 53.17523239441747], [5.69987359695283, 53.173593265661104], [5.684783137453657, 53.18187369196481], [5.65283839851385, 53.16624544709809], [5.656875586379863, 53.154488937397275], [5.656875586379863, 53.154488937397275], [5.663303730166524, 53.14982589869383], [5.6402172869327245, 53.14326938366837], [5.631986127205903, 53.133010698520785], [5.637355979027687, 53.12413679456392], [5.6567188023850665, 53.11235202402247], [5.685959017414632, 53.12987374521119], [5.703401236835753, 53.117438975335325], [5.703401236835753, 53.117438975335325], [5.75149472723961, 53.12651070517658], [5.75745251904188, 53.11271941495062], [5.787359066049332, 53.09850421211526], [5.7642726228155325, 53.080275969910865], [5.775051522457798, 53.06628685380051], [5.761842470896185, 53.06083251155951], [5.771014334591786, 53.04695643881167]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id472b9b96-36a2-40a1-8fc7-d06834903d10",
      "Code": "0147",
      "Gemeentenaam": "Borne",
      "aantal": 3
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.802025884374212, 52.3135876245419], [6.773843961309523, 52.31890066257977], [6.759027873801244, 52.33207021431194], [6.720850971068273, 52.341198465834445], [6.704584631608126, 52.3221789200925], [6.704584631608126, 52.3221789200925], [6.690944424060822, 52.30838762986654], [6.703800711634143, 52.30734197876334], [6.742879122337195, 52.283122438346034], [6.775529389253586, 52.2931550367686], [6.802025884374212, 52.3135876245419]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id332cc3d2-597f-43d1-8e30-1357863c08a9",
      "Code": "0175",
      "Gemeentenaam": "Ommen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.323403544258898, 52.59252212153006], [6.33622063583352, 52.56960257978159], [6.33622063583352, 52.56960257978159], [6.360718135020488, 52.52415914805343], [6.331517115989622, 52.52206784584703], [6.34405983557335, 52.48171136543172], [6.342609583621481, 52.456898347361246], [6.378513118429902, 52.45641791307059], [6.371065878677063, 52.44969183300137], [6.384157342242579, 52.439433147853784], [6.3805905063609565, 52.429824462040614], [6.3903111140383455, 52.428157072443625], [6.428488016771317, 52.4386135834756], [6.450085012054549, 52.4612505168178], [6.467017683492582, 52.47552224133442], [6.503783530272384, 52.48171136543172], [6.505468958216447, 52.490952660316744], [6.554307172595587, 52.48761788112276], [6.595188599238799, 52.480298323400376], [6.609651922758786, 52.49250700655122], [6.5412549050287705, 52.51929828346559], [6.534121233265525, 52.52834175246622], [6.521813689673992, 52.56058737162159], [6.504920214234659, 52.57587648640077], [6.488340306784918, 52.56900910212842], [6.415004593218811, 52.569998231550365], [6.402657853628578, 52.59139168790498], [6.323403544258898, 52.59252212153006]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id2711f208-e7f1-41ed-86bc-4b15edb18b41",
      "Code": "0303",
      "Gemeentenaam": "Dronten",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.756276639080905, 52.40741361542343], [5.8114646052493075, 52.43691793303798], [5.822400288886371, 52.44969183300137], [5.815619381111418, 52.45520269692363], [5.831376172588476, 52.47340267828739], [5.840273664293183, 52.471057028515354], [5.864300811495761, 52.51816784984051], [5.8550897518014615, 52.550837381605284], [5.815345009120524, 52.57745909347588], [5.777912830362836, 52.58085039435112], [5.777952026361535, 52.60752862790297], [5.72378315615931, 52.607698192946735], [5.72382235215801, 52.61128731970636], [5.663382122163922, 52.6114286239095], [5.648526838656944, 52.61693948783176], [5.627674567348997, 52.63683511963314], [5.6072142560280405, 52.64924162866838], [5.592280580523665, 52.64929815034963], [5.511301647211222, 52.66356987486625], [5.564490617445967, 52.615017750669125], [5.587381080686271, 52.563469977365536], [5.591261484557487, 52.50013743352051], [5.6058815920722695, 52.48450918865379], [5.5654313214147475, 52.47029398581843], [5.586401180718792, 52.44771357415748], [5.566646397374421, 52.435872281934785], [5.589066508630335, 52.41120056806744], [5.623010243503797, 52.40888317913603], [5.611917775871939, 52.3749984312243], [5.620736875579247, 52.36411800758292], [5.644881610777923, 52.37087234849276], [5.652564026522956, 52.36541800625176], [5.678903737648785, 52.378841905549564], [5.698776108989254, 52.382007119699786], [5.756276639080905, 52.40741361542343]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id81754328-8a05-4228-baba-04f9e7c0e904",
      "Code": "0599",
      "Gemeentenaam": "Rotterdam",
      "aantal": 14
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.547668019192635, 51.97281840826194], [4.518584588157866, 51.960298855864195], [4.49581171291366, 51.97185753968063], [4.495262968931872, 51.967392326861564], [4.469001649803442, 51.98056187859373], [4.446699126543626, 51.962785809839374], [4.427885047168034, 51.976464056702824], [4.407895087831468, 51.96821189123975], [4.402917195996676, 51.966318414917744], [4.379321204779788, 51.963407548333166], [4.388924224461079, 51.94554669705692], [4.409227751787239, 51.93596627208438], [4.417066951527069, 51.91997063628952], [4.4090709677924425, 51.91205760091397], [4.413696095638942, 51.90075326466318], [4.388336284480593, 51.89676848613478], [4.370619693068576, 51.89936848347246], [4.3237020826256956, 51.8941684887971], [4.2879553318120704, 51.89854891909428], [4.267573412488513, 51.90533152084475], [4.238881941440736, 51.91590107523923], [4.212699014309704, 51.93373366567485], [4.2195191180833564, 51.94139235348476], [4.1923954869835445, 51.954816252782564], [4.187495987146151, 51.966827110049024], [4.147280892480824, 51.981381442971916], [4.150965316358544, 51.98762708875047], [4.132504000971244, 51.99853577323248], [4.1101622817127295, 52.00444228892352], [4.032789380280608, 52.003566202864086], [3.9531431109239366, 51.989153174144334], [3.9407571753350057, 51.92158150420526], [3.9726235222774138, 51.91095542812952], [4.065831607183991, 51.9326314928904], [4.092876846286404, 51.93251844952789], [4.102009513983306, 51.92353150220852], [4.107732129793382, 51.93613583712814], [4.144889936560175, 51.93141627674344], [4.159784416065852, 51.92774236746193], [4.2159130862030345, 51.89894457086306], [4.2393914894238245, 51.872972858326875], [4.268396528461195, 51.864522866979414], [4.335539274232838, 51.86429678025439], [4.352589533666968, 51.84951636060649], [4.383671960635393, 51.84211202036223], [4.383515176640597, 51.85776852606956], [4.390413672411647, 51.870570686873585], [4.418164439490645, 51.872379380673706], [4.465238833928323, 51.86200765216361], [4.480407685424894, 51.86231852141051], [4.494008696973499, 51.86895981895785], [4.532969519680454, 51.86890329727659], [4.5493926431353975, 51.87401850943007], [4.568912250487574, 51.87805980963973], [4.576320294241713, 51.90304239275397], [4.549902191118486, 51.90671630203547], [4.542141383376054, 51.90620760690418], [4.537555451528254, 51.91977281040513], [4.556918274885634, 51.91991411460826], [4.566246922576031, 51.92590541282118], [4.560602698763354, 51.9409119191941], [4.572792654358789, 51.943455394850524], [4.561543402732133, 51.95665320742332], [4.584002709986746, 51.96535754633643], [4.6017976933961595, 51.9721401480869], [4.593723317664136, 51.976096665774676], [4.5943504536433215, 51.99426838629781], [4.578946426154555, 51.98985969516001], [4.571891146388709, 51.97185753968063], [4.547668019192635, 51.97281840826194]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id2dcdf44f-fdbe-4293-8265-039d24fb8caa",
      "Code": "1507",
      "Gemeentenaam": "Horst aan de Maas",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.169206485376444, 51.50309497620114], [6.157643665760196, 51.513664530595626], [6.141102954309154, 51.51951452460541], [6.1268748067813625, 51.5143710516113], [6.1268748067813625, 51.5143710516113], [6.12197530694397, 51.51018844719851], [6.107551179422682, 51.521379740086786], [6.0667873407755675, 51.5236971290182], [6.066238596793779, 51.50795584078898], [6.073764228544016, 51.49518194082559], [6.068080808732639, 51.48837107823449], [6.049462709350543, 51.49040585875964], [6.030217473989261, 51.47983630436515], [5.994353135179539, 51.47525804818358], [5.952962160553238, 51.46352979932339], [5.8749621231419304, 51.446545034106585], [5.931286773272608, 51.384738575655405], [5.95790085638933, 51.37804075642682], [5.989845595329137, 51.378210321470576], [6.018772242369109, 51.38225162168023], [6.07313709256483, 51.3957320426593], [6.077683828413931, 51.420177669801625], [6.116448671127389, 51.42099723417981], [6.1352627505029815, 51.41610810875134], [6.140789386319561, 51.39485595659986], [6.153057733912394, 51.39592986854369], [6.148981350047683, 51.40777116076639], [6.158349193736781, 51.42478418682382], [6.1574476857667, 51.44555590468464], [6.17814317307985, 51.464462407064076], [6.1670899014466904, 51.48579934173744], [6.169206485376444, 51.50309497620114]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id8fe66bcd-b88c-4e31-b070-212406cdfc45",
      "Code": "1685",
      "Gemeentenaam": "Landerd",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.713121844513142, 51.72641213883543], [5.698109777011368, 51.73850777862377], [5.701911788885186, 51.755520804681204], [5.690858517252026, 51.759138192281455], [5.673690669821799, 51.76770122699143], [5.667262526035138, 51.75221428632785], [5.648644426653041, 51.76433818695681], [5.63578813907972, 51.75831862790327], [5.576288613054412, 51.74486646776484], [5.580874544902212, 51.731442568467024], [5.600158976262193, 51.7083534616748], [5.597023296366261, 51.70199477253373], [5.6239509474725775, 51.703520857927586], [5.6225790875181065, 51.69908390594915], [5.6729851418452135, 51.666244809140615], [5.67866856165659, 51.66494481047177], [5.731347983908247, 51.67393175779115], [5.734013311819789, 51.652029606305256], [5.7425580395362035, 51.650051347461364], [5.734366075808081, 51.677633927913284], [5.699951988950228, 51.71146215414376], [5.713121844513142, 51.72641213883543]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id68f39f96-713a-4eee-9d1e-fbc40c967b2e",
      "Code": "0995",
      "Gemeentenaam": "Lelystad",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.589066508630335, 52.41120056806744], [5.566646397374421, 52.435872281934785], [5.586401180718792, 52.44771357415748], [5.5654313214147475, 52.47029398581843], [5.6058815920722695, 52.48450918865379], [5.591261484557487, 52.50013743352051], [5.587381080686271, 52.563469977365536], [5.564490617445967, 52.615017750669125], [5.511301647211222, 52.66356987486625], [5.361141776194781, 52.67572203633584], [5.301642250169472, 52.69242419314638], [5.287610082635177, 52.691661150449455], [5.268952787254381, 52.680272031676786], [5.262250271476827, 52.6768242091203], [5.257193987644637, 52.64446554660242], [5.135294431690282, 52.60393950114335], [5.074619025703999, 52.583676478413814], [5.254293483740899, 52.43898097440375], [5.279339726909656, 52.422137513390076], [5.350754836539506, 52.40020710106355], [5.386188019363537, 52.41459186894268], [5.438789049617796, 52.44265488368526], [5.509498631271061, 52.39735275616023], [5.533016230490551, 52.384381030312454], [5.57726851302189, 52.40956143931108], [5.589066508630335, 52.41120056806744]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd19183c5-2730-4a5b-aab6-8fe6d3898253",
      "Code": "0809",
      "Gemeentenaam": "Loon op Zand",
      "aantal": 7
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.106132608658115, 51.63594918798851], [5.101507480811615, 51.67684262437573], [5.060626054168402, 51.671105673728455], [5.049180822548251, 51.661610031277796], [4.992229036438387, 51.67624914672256], [4.987251144603595, 51.65460134280231], [5.004497384031221, 51.60788617324593], [5.042909462756387, 51.60604921860518], [5.045026046686141, 51.611107909077404], [5.093746673069184, 51.611249213280544], [5.102957732763484, 51.61690138140593], [5.098215016920887, 51.62891223867239], [5.106132608658115, 51.63594918798851]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ida0974981-5a29-4bbe-90ed-e8165947ec9f",
      "Code": "0203",
      "Gemeentenaam": "Barneveld",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.633279595162975, 52.208174689003314], [5.625636375416641, 52.192716009180366], [5.6001981722608924, 52.19766165629009], [5.577699669007581, 52.19480731138676], [5.577934844999776, 52.18618775499554], [5.565156949423853, 52.17810515457623], [5.542423270178347, 52.17768124196682], [5.530821254563398, 52.191529053874035], [5.50083631555855, 52.18858992644883], [5.485471484068483, 52.1816377596546], [5.479905652253203, 52.165811688903496], [5.481355904205072, 52.15049431328368], [5.4989941036196885, 52.14738562081472], [5.497308675675626, 52.14145084428305], [5.514084563118862, 52.135911719520166], [5.4978966156561135, 52.1302878122354], [5.504167975447977, 52.113726959627996], [5.486451384035961, 52.11536608838436], [5.493859427790101, 52.11109870144969], [5.519376022943247, 52.100500886214576], [5.5315267825399825, 52.102253058333446], [5.550340861915575, 52.10541827248367], [5.561394133548735, 52.12042477885659], [5.606900688038447, 52.12488999167565], [5.6381790950003685, 52.13076824652606], [5.679256501637077, 52.131616071744865], [5.688428365332678, 52.136957370623364], [5.7215489842334595, 52.13800302172656], [5.720333908273785, 52.14625518718964], [5.762116842887079, 52.14761170753973], [5.774698758469506, 52.15221822456193], [5.809857569302643, 52.15142692102437], [5.8096615893091474, 52.16668777496293], [5.801939977565414, 52.17737037271993], [5.811934957233698, 52.184887756326695], [5.788574142009004, 52.19653122266501], [5.750593219269529, 52.19373339944294], [5.730760043927759, 52.20859860161272], [5.7274283840383315, 52.21930946021034], [5.741656531566123, 52.21987467702288], [5.726370092073455, 52.242511610365085], [5.683646453491382, 52.240618134043075], [5.681255497570733, 52.22532901926389], [5.6654987060936755, 52.22270076108558], [5.633279595162975, 52.208174689003314]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf5c5e669-70fe-44d1-98ca-2ab9662495f9",
      "Code": "0590",
      "Gemeentenaam": "Papendrecht",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.729655041152785, 51.82215986687959], [4.742746504718301, 51.84100984757777], [4.73725906490042, 51.84646418981878], [4.705431913956711, 51.84126419514342], [4.683207782694293, 51.84849897034392], [4.672624863045523, 51.838664197805734], [4.67042988711837, 51.82360116975156], [4.671723355075443, 51.820859868210746], [4.729655041152785, 51.82215986687959]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id99aaf8de-cb94-4e6f-a266-8872a1de5bd2",
      "Code": "0629",
      "Gemeentenaam": "Wassenaar",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.440466962750461, 52.155666047118416], [4.4115795117091885, 52.16346603913146], [4.375009644922882, 52.18661166760494], [4.359997577421107, 52.19268774833974], [4.332638770329101, 52.1684399470818], [4.290071915741825, 52.13503563346073], [4.329895050420161, 52.10852696495264], [4.3275040944995125, 52.09555523910486], [4.35850812947054, 52.10575740257119], [4.3726970809996315, 52.0947639355673], [4.401153376055214, 52.111861744146616], [4.4429755066672065, 52.145350840289574], [4.440466962750461, 52.155666047118416]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5d15f77f-0bdf-453d-bba1-5e528a40ec4d",
      "Code": "1895",
      "Gemeentenaam": "Oldambt",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.9113435247461386, 53.24300189024093], [6.9127153847006095, 53.225112778124064], [6.92004503645735, 53.22734538453359], [6.9294128801464465, 53.21281931245134], [6.91683096456402, 53.19558019966888], [6.91220583671752, 53.171954136904745], [6.903308345012813, 53.16647153382311], [6.929256096151651, 53.16904327032017], [6.950382739450491, 53.15889762853509], [6.954655103308699, 53.13665634696166], [6.965277218956168, 53.110825938628615], [6.979740542476154, 53.119191147454195], [6.987618938214684, 53.116110715825855], [7.0297546368162696, 53.115093325563286], [7.0511948481047035, 53.13021287529871], [7.080513455131667, 53.143693296277775], [7.101992862418801, 53.14321286198712], [7.14165921310234, 53.15553458850047], [7.145304440981361, 53.16076284401646], [7.17395671603044, 53.147932422371824], [7.189243155523108, 53.15488458916605], [7.203667283044394, 53.176560653926934], [7.227498450253478, 53.180291084889696], [7.2080572348987, 53.18848672867151], [7.217621058581292, 53.19781280607842], [7.212486382751703, 53.228193209752405], [7.187596923577743, 53.33219310325964], [7.171722544104588, 53.33321049352221], [7.101248138443518, 53.33027136609701], [7.100425022470835, 53.30998008252684], [7.134251169348201, 53.2878235834753], [7.134878305327388, 53.279684461374735], [7.113477290037652, 53.26286926120169], [7.085295366972964, 53.25489970414489], [7.067539579562249, 53.24238015174714], [7.041591828423412, 53.259308395282694], [7.021837045079041, 53.253232314547894], [7.013213925365228, 53.26685403973009], [6.995458137954513, 53.2669670830926], [6.9522249513893515, 53.25651057206063], [6.9425043437119625, 53.24204102165962], [6.928432980178968, 53.23695407034676], [6.9113435247461386, 53.24300189024093]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id99d063b4-e0da-409e-87b2-b2f1bac2bcd3",
      "Code": "0828",
      "Gemeentenaam": "Oss",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.5979640003350415, 51.828038121729996], [5.555083577758172, 51.8266816013799], [5.540933822227779, 51.81630987286981], [5.517729790997882, 51.81927726113564], [5.505069483418057, 51.827953339208115], [5.488763947959211, 51.830270728139524], [5.465520720730616, 51.81136422576009], [5.4278141699820335, 51.811788138369494], [5.414879490411314, 51.82128378082015], [5.4017096348484, 51.820888129051376], [5.363767908107624, 51.78217077739243], [5.359926700235107, 51.76057949515343], [5.3534985564484465, 51.75546428299995], [5.374037259766801, 51.75323167659042], [5.392772947144994, 51.760268625906534], [5.438828245616495, 51.76501644713186], [5.4481568933068925, 51.744131685908535], [5.4481568933068925, 51.744131685908535], [5.463168960808667, 51.72587518286352], [5.474261428440526, 51.72895561449185], [5.507695615330901, 51.73782951844872], [5.53395693445933, 51.74037299410515], [5.560179057589061, 51.73234691536709], [5.580874544902212, 51.731442568467024], [5.576288613054412, 51.74486646776484], [5.63578813907972, 51.75831862790327], [5.648644426653041, 51.76433818695681], [5.667262526035138, 51.75221428632785], [5.673690669821799, 51.76770122699143], [5.690858517252026, 51.759138192281455], [5.711240436575583, 51.77502078471381], [5.693249473172674, 51.78804903224284], [5.664048454141807, 51.79418163465889], [5.636650451051102, 51.81933378281689], [5.620697679580548, 51.81936204365752], [5.5979640003350415, 51.828038121729996]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id61c5ba9e-2a26-40eb-9bc2-5c528d5c0c9a",
      "Code": "1728",
      "Gemeentenaam": "Bladel",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.191031141840472, 51.43023852906482], [5.191031141840472, 51.430210268224194], [5.194754761716892, 51.399858125390836], [5.200947729511357, 51.39010813537453], [5.188522597923727, 51.377616843817414], [5.193853253746811, 51.34522992045891], [5.204710545386476, 51.32544733202003], [5.200242201534772, 51.322649508797966], [5.241123628177985, 51.305664743581154], [5.259428159570488, 51.31148647675031], [5.263426151437802, 51.31928646876335], [5.285963850689813, 51.336327755661415], [5.275302539043643, 51.362723380807005], [5.289256314580541, 51.3889211800682], [5.310853309863772, 51.390701613027694], [5.307090493988654, 51.40630159705378], [5.281887466825101, 51.40437985989115], [5.23771357629116, 51.428571139467834], [5.223524624762067, 51.42509505607072], [5.209218085236878, 51.43651243568401], [5.191031141840472, 51.43023852906482]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id6e470777-2efd-4943-bcbb-5f575b44a225",
      "Code": "1969",
      "Gemeentenaam": "Westerkwartier",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.315172384532077, 53.094038999296195], [6.3444517955603414, 53.08714335418322], [6.382628698293313, 53.14957155112818], [6.402697049627277, 53.16700848979502], [6.408145293446459, 53.1781997826833], [6.442872948293905, 53.18775194681522], [6.447694056133901, 53.196428024887695], [6.463450847610959, 53.200045412487945], [6.4809322630307795, 53.25018014376018], [6.495865938535156, 53.24582797430363], [6.5082518741240865, 53.25758448400445], [6.502137298327019, 53.27931707044659], [6.504214686258074, 53.29573661885085], [6.474935275229809, 53.323912676955935], [6.454239787916659, 53.32894310658754], [6.442245812314718, 53.31715833604609], [6.429311132743999, 53.32843441145625], [6.414142281247429, 53.32772789044058], [6.401717149659799, 53.319193116571235], [6.367577434792839, 53.321623548865155], [6.355426675196103, 53.313851817692736], [6.316309068494352, 53.319758333383774], [6.313878916575005, 53.32832136809375], [6.286990461467388, 53.341377876463405], [6.2805231216820285, 53.312608340705154], [6.292477901285269, 53.31029095177374], [6.268293970087894, 53.28980184231919], [6.253203510588722, 53.28790836599718], [6.254222606554899, 53.2680127341958], [6.232155259287278, 53.25673665878564], [6.231096967322401, 53.24509319244733], [6.215536155838839, 53.23698233118739], [6.229960283360127, 53.217934524604814], [6.2190637957217625, 53.205980189019606], [6.199544188369586, 53.198264979528446], [6.177829605090258, 53.16799761921697], [6.176732117126681, 53.15949110618825], [6.1752426691761135, 53.135893304264734], [6.185708000828786, 53.12922374587677], [6.2050316281874665, 53.11548897733206], [6.261669846307738, 53.11430202202573], [6.290557297349011, 53.09983247162472], [6.315172384532077, 53.094038999296195]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id71f56e95-6aa5-4a38-9324-02c1ecc5c997",
      "Code": "0308",
      "Gemeentenaam": "Baarn",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.2247397007217415, 52.22518771506075], [5.218977888912966, 52.21213120669109], [5.215489445028742, 52.2042746929968], [5.212079393141916, 52.17638124329798], [5.220976884846623, 52.17824645877936], [5.225014072712635, 52.165698645540985], [5.243161820110341, 52.17007907583817], [5.281534702836808, 52.19248992245535], [5.281534702836808, 52.19248992245535], [5.314263361750598, 52.20303121600921], [5.330686485205542, 52.20339860693736], [5.330529701210745, 52.21473120402877], [5.335468397046839, 52.22846597257348], [5.312264365816942, 52.232818142030034], [5.314772909733687, 52.22419858563881], [5.2247397007217415, 52.22518771506075]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ideaa75c2c-8e2b-473e-913b-2c69e7c795f1",
      "Code": "0416",
      "Gemeentenaam": "Langedijk",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.826233981947489, 52.71743503710125], [4.80502894665125, 52.71421330126977], [4.786489239266552, 52.72108068554213], [4.778806823521519, 52.73133937068971], [4.769634959825917, 52.698782882287446], [4.728871121178802, 52.69140680288381], [4.741727408752123, 52.680808987648696], [4.779041999513714, 52.67648507903277], [4.77367214769193, 52.64836554260894], [4.7976992948945085, 52.65899161868468], [4.7976992948945085, 52.65899161868468], [4.800521406800847, 52.66023509567227], [4.811417894439211, 52.67337638656381], [4.827096293918871, 52.6765133398734], [4.826233981947489, 52.71743503710125]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id4f898dac-9d57-4fed-9b64-62c7ee1e7bd7",
      "Code": "0678",
      "Gemeentenaam": "Kapelle",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.013073792934936, 51.53825146194109], [3.998532077417552, 51.54429928183526], [3.9609431146650675, 51.55147753535451], [3.937974259427366, 51.535764507965915], [3.9714476423164395, 51.52844495024353], [3.9634908545805123, 51.52061669738986], [3.965215478523275, 51.506429755395125], [3.9258234998306296, 51.49187542247223], [3.9128888202599104, 51.47912978334948], [3.908890828392597, 51.46799501214245], [3.928528023740871, 51.45878197809806], [3.935348127514523, 51.44702546839724], [3.969213470390588, 51.45635154580414], [3.991437601653006, 51.44979503077868], [4.007311981126161, 51.45864067389493], [4.004725045212018, 51.50484714832001], [4.017385352791843, 51.512477575289296], [4.013073792934936, 51.53825146194109]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ide22f6be8-1131-44c8-84eb-e579edfea405",
      "Code": "0232",
      "Gemeentenaam": "Epe",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.073685836546618, 52.33057238975871], [6.076076792467266, 52.3505810649226], [6.094851675844158, 52.3569680149043], [6.077840612408727, 52.36428757262668], [6.052402409252979, 52.361009315113954], [5.991335043279705, 52.37858755798392], [5.951041556616979, 52.39842666810405], [5.924349081502858, 52.39138971878794], [5.911688773923033, 52.386783201765745], [5.876020415106807, 52.357872361804354], [5.8648103594788505, 52.3513158467789], [5.8809591109429, 52.335178906780904], [5.870258603298032, 52.323139788673814], [5.8408224082749705, 52.30440285133814], [5.8521500518990255, 52.280098528398945], [5.850817387943254, 52.26870940962628], [5.860890759608935, 52.25579420545976], [5.879587250988429, 52.26497897866352], [5.936225469108701, 52.27441809943293], [5.9738928238585824, 52.27320288328597], [5.985730015465727, 52.28566591400246], [5.988983283357756, 52.27410723018603], [6.028218478055605, 52.276594184161205], [6.036410441783726, 52.26853984458252], [6.043387329552175, 52.27865722552697], [6.034764209838363, 52.29485068720622], [6.052951153234767, 52.33091151984623], [6.073685836546618, 52.33057238975871]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ida573c279-5c6a-46f0-98e2-756fdd56d139",
      "Code": "1842",
      "Gemeentenaam": "Midden-Delfland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.35066892973071, 51.95150973442921], [4.379321204779788, 51.963407548333166], [4.402917195996676, 51.966318414917744], [4.393823724298473, 51.97750970780602], [4.386298092548237, 51.97222493060878], [4.359527225436718, 51.97013362840238], [4.35662672153298, 51.97728362108101], [4.338243798143079, 51.97417492861204], [4.324094042612686, 51.98985969516001], [4.341065910049418, 52.00269011680465], [4.325975450550246, 52.01277923690847], [4.309826699086196, 52.0156335818118], [4.26541763256006, 51.995737950010415], [4.3031241833086415, 51.97991187925931], [4.276510100191919, 51.96504667708953], [4.233943245604643, 51.95331842822934], [4.240332193392605, 51.94286191719736], [4.270395524394852, 51.92358802388977], [4.292619655657269, 51.92124237411773], [4.323858866620491, 51.9416467010504], [4.35066892973071, 51.95150973442921]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id13f7d150-eb74-4932-be24-74e3395dff74",
      "Code": "0037",
      "Gemeentenaam": "Stadskanaal",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[7.026854132912533, 52.91904787413402], [7.0363003685990275, 52.929278298440984], [7.063541587694935, 52.9309739488786], [7.069930535482897, 52.95301740456763], [7.072047119412652, 53.00377387433367], [7.100033062483844, 53.01643473093455], [7.081846119087439, 53.02638254683524], [7.081728531091342, 53.0444694848365], [7.068323499536232, 53.04333905121142], [7.080082299145976, 53.0614542500533], [7.065932543615584, 53.06727598322246], [7.034262176666671, 53.06464772504415], [7.015448097291079, 53.071769456882144], [7.010117441467996, 53.073691194044784], [6.955791787270974, 53.013862994437496], [6.933567656008556, 53.020956465434864], [6.9076982968671174, 53.038873838392355], [6.8989183931585085, 53.032402105888785], [6.881436977738687, 53.046617308724144], [6.861290234407325, 53.040880358076876], [6.935684239938311, 52.993345624142314], [7.0159576452741685, 52.924586998896906], [7.026854132912533, 52.91904787413402]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idc46a1aef-41e5-4599-af74-e21747808f2a",
      "Code": "1954",
      "Gemeentenaam": "Beekdaelen",
      "aantal": 4
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.928464661366268, 50.93660642583361], [5.9364214491021965, 50.9465542417343], [5.965857644125258, 50.96240857332603], [6.006072738790585, 50.95754770873819], [6.015205406487487, 50.96235205164477], [6.026493854112841, 50.98326507370873], [5.968287796044605, 50.979393338542835], [5.955196332479089, 50.988408546702836], [5.89706866640825, 50.97487160404252], [5.873511871190061, 50.96280422509481], [5.852189247897725, 50.968032480610795], [5.839881704306191, 50.95019989017518], [5.856931963740321, 50.944010766077874], [5.841488740252856, 50.919593399776176], [5.801704801573219, 50.914139057535166], [5.7965701257436315, 50.907469499147204], [5.799823393635661, 50.88568039102381], [5.81922541299174, 50.88384343638306], [5.833100796531239, 50.89220864520864], [5.835295772458391, 50.881299960726636], [5.8616354835842195, 50.882430394351715], [5.880567150955908, 50.88248691603297], [5.901537010259953, 50.89576951112764], [5.923408377534079, 50.90441732835949], [5.895500826460284, 50.920130355748086], [5.928464661366268, 50.93660642583361]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id67d8723c-9fdc-4cb6-92ff-a7cfba476d37",
      "Code": "1708",
      "Gemeentenaam": "Steenwijkerland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.172890909254164, 52.773052371455115], [6.201739164296738, 52.79371104595343], [6.130324054666888, 52.84393055974755], [6.119819527015516, 52.85421750573576], [6.0810154883033585, 52.83873056507218], [6.052598389246475, 52.83734578388146], [6.059928041003216, 52.82612623015256], [6.031158177958041, 52.814991458945535], [6.024573250176584, 52.82253710339293], [5.996469719109293, 52.816771891905034], [5.98647473944101, 52.82168927817413], [5.969973223988668, 52.84237621351306], [5.956293820442665, 52.83336100535306], [5.946612408763976, 52.83734578388146], [5.9271711934091975, 52.83386970048435], [5.923957121515867, 52.82341318945237], [5.898636506356216, 52.808463204760706], [5.8765299630898955, 52.8008045169508], [5.844154068164398, 52.80543929481362], [5.819734960974829, 52.817280587036315], [5.795159069790461, 52.806513206757444], [5.818794257006049, 52.78469583779343], [5.849680703980979, 52.78475235947468], [5.879665642985827, 52.77325019733951], [5.922585261561396, 52.75069804651918], [5.942536024899264, 52.715004604807326], [5.951159144613076, 52.711924173178986], [5.965152116148673, 52.69358288761209], [5.933873709186752, 52.67552421045146], [5.933089789212769, 52.671256823516785], [5.97079633996135, 52.665180742781985], [5.999527007007827, 52.65463944922813], [6.017282794418541, 52.643222069614836], [6.054871757171026, 52.65023075809032], [6.08556222415246, 52.66328726645998], [6.119584351023321, 52.66795030516343], [6.152391401934509, 52.68453941861146], [6.1589763297159665, 52.692141584740114], [6.120054703007711, 52.750895872403575], [6.1327542065862355, 52.758724125257245], [6.156781353788814, 52.762708903785644], [6.172890909254164, 52.773052371455115]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id13deebd1-a62e-41e9-ac1d-d2c654f68c46",
      "Code": "0473",
      "Gemeentenaam": "Zandvoort",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.526031827910704, 52.4051810090139], [4.477663965515954, 52.33252238776197], [4.547315255204342, 52.31398327631068], [4.5916459297330805, 52.39172884887546], [4.526031827910704, 52.4051810090139]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id44278316-4b5a-4c30-bac2-828c8c3c2f46",
      "Code": "0003",
      "Gemeentenaam": "Appingedam",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.814333427965744, 53.297601834332234], [6.8458078149211605, 53.29011271156609], [6.8873947695409585, 53.2978844427385], [6.8819465257217765, 53.32487354553726], [6.885395773607302, 53.34513656826679], [6.866816870223905, 53.34180178907281], [6.834284191303611, 53.34329961362604], [6.838909319150111, 53.330582235343904], [6.804456036293558, 53.3237713727528], [6.814333427965744, 53.297601834332234]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ida9d1d5df-92d4-4fe8-8739-4b2edd36d18e",
      "Code": "0457",
      "Gemeentenaam": "Weesp",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.06442806604222, 52.280748527733365], [5.063918518059131, 52.280098528398945], [5.063918518059131, 52.280098528398945], [5.1013506968168185, 52.27998548503644], [5.1013506968168185, 52.27998548503644], [5.102056224793404, 52.27990070251456], [5.104643160707547, 52.28538330559619], [5.107700448606081, 52.29728111950014], [5.096882352965116, 52.30030502944723], [5.100566776842836, 52.31030936702918], [5.06952354587311, 52.32178326832372], [5.03079789915835, 52.33057238975871], [5.017941611585028, 52.32319631035507], [5.02154764346535, 52.30245285333488], [5.021861211454944, 52.282642004055376], [5.030523527167456, 52.288491998065155], [5.042791874760289, 52.282500699852235], [5.059136606217835, 52.28919851908083], [5.06442806604222, 52.280748527733365]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id907ab151-f39f-4fd0-9139-c0d8104faeb4",
      "Code": "1680",
      "Gemeentenaam": "Aa en Hunze",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.813941467978752, 53.07097815334459], [6.776509289221065, 53.0947737811525], [6.748758522142067, 53.08683248493632], [6.749816814106945, 53.08160422942033], [6.699018799792847, 53.06518468101606], [6.6745604966045775, 53.07883466703889], [6.653865009291426, 53.08013466570773], [6.6704841127398655, 53.06665424472867], [6.666838884860844, 53.05834555758434], [6.642341385673877, 53.0459390485491], [6.648612745465741, 53.026326025153985], [6.631209722043318, 53.02609993842897], [6.62975947009145, 53.015530384034484], [6.615962478549349, 53.0082108263121], [6.596050911210181, 52.97265868880338], [6.5812740197006026, 52.96745869412801], [6.561519236356231, 52.946658715426565], [6.585820755549703, 52.9194435259028], [6.614943382583171, 52.91828483143709], [6.625447910234543, 52.91280222835546], [6.666721296864747, 52.90943918832085], [6.674991652590268, 52.90503049718305], [6.686358492213021, 52.875328353684104], [6.71457961127641, 52.868150100164854], [6.736333390554437, 52.87869139371872], [6.728219818823713, 52.90706527770819], [6.7258288629030645, 52.92961742852851], [6.7258288629030645, 52.92961742852851], [6.731433890717043, 52.93755872474468], [6.727710270840624, 52.95471305500526], [6.788777636813899, 52.96276739458394], [6.837772635187836, 52.977886944319366], [6.935684239938311, 52.993345624142314], [6.861290234407325, 53.040880358076876], [6.813941467978752, 53.07097815334459]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id105d30e5-679d-466d-9ceb-7e736946776c",
      "Code": "0296",
      "Gemeentenaam": "Wijchen",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.729740947961582, 51.772844699985534], [5.745262563446445, 51.77863817231406], [5.780656550271777, 51.78420555791757], [5.800960077597936, 51.79514250324021], [5.77132790258138, 51.82306421377965], [5.757687695034075, 51.82402508236097], [5.764742974799923, 51.832277247824045], [5.728721851995404, 51.83860767612448], [5.678119817674801, 51.84315767146543], [5.684822333452356, 51.84878157875019], [5.667850466015625, 51.86593590901076], [5.636219295065411, 51.86737721188273], [5.64319618283386, 51.84499462610618], [5.609840387940883, 51.83629028719307], [5.609840387940883, 51.83626202635244], [5.5979640003350415, 51.828038121729996], [5.620697679580548, 51.81936204365752], [5.636650451051102, 51.81933378281689], [5.664048454141807, 51.79418163465889], [5.693249473172674, 51.78804903224284], [5.711240436575583, 51.77502078471381], [5.729740947961582, 51.772844699985534]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id815174e5-bcab-4dc7-910c-7d985212c604",
      "Code": "1640",
      "Gemeentenaam": "Leudal",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.9513159286078725, 51.20115615494264], [5.98000739965565, 51.22334091483481], [6.000546102974004, 51.232751774763585], [6.009090830690419, 51.24945393157412], [6.005876758797089, 51.25869522645914], [6.009600378673508, 51.26576043661588], [6.0082677147177375, 51.277545207157324], [5.954686784495999, 51.300266923021404], [5.907494802062224, 51.31323864886918], [5.9106696779568555, 51.3076995241063], [5.877823431046968, 51.316573428063165], [5.860733975614139, 51.31080821657527], [5.850660603948457, 51.291534323267676], [5.833806324507823, 51.274775644775886], [5.853443519856097, 51.24448002362377], [5.7917882139023344, 51.237527856829544], [5.774306798482515, 51.21559744450302], [5.7522786472135925, 51.21398657658728], [5.745654523433436, 51.189512688604324], [5.776736950401862, 51.17849096075981], [5.770191218619104, 51.16421923624319], [5.779402278313404, 51.16331488934313], [5.777638458371943, 51.151304032076666], [5.806251537422321, 51.16283445505247], [5.813855561169956, 51.15873663316156], [5.8263982807536845, 51.166847494421496], [5.826947024735472, 51.17057792538426], [5.873668655184858, 51.19089746979505], [5.868102823369579, 51.19553224765787], [5.879469662992332, 51.21084962327769], [5.8948736904810985, 51.215993096271795], [5.9248978254846465, 51.20389745648345], [5.9513159286078725, 51.20115615494264]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idde5883a2-c26d-42fc-b35f-89cd21c2e90b",
      "Code": "0243",
      "Gemeentenaam": "Harderwijk",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.706184152743393, 52.3283680441898], [5.700618320928114, 52.357307144991815], [5.678903737648785, 52.378841905549564], [5.652564026522956, 52.36541800625176], [5.644881610777923, 52.37087234849276], [5.620736875579247, 52.36411800758292], [5.611643403881045, 52.35951149056072], [5.591143896561389, 52.36290279143596], [5.575661477075226, 52.350807151647615], [5.565862477400438, 52.332381083558836], [5.581384092885301, 52.32263109354253], [5.6020403841997535, 52.31799631567971], [5.6302615032631405, 52.326841958795946], [5.678119817674801, 52.30149198475356], [5.706184152743393, 52.3283680441898]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id2f4e644d-76c0-4e66-8f83-58ef584128de",
      "Code": "1641",
      "Gemeentenaam": "Maasgouw",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.83349275651823, 51.09955843288869], [5.851326935926343, 51.10911059702061], [5.872296795230388, 51.135110570397416], [5.913883749850186, 51.13318883323478], [5.955470704469983, 51.159047502408455], [5.916666665757825, 51.168627927380996], [5.921252597605625, 51.178914873369216], [5.9513159286078725, 51.20115615494264], [5.9248978254846465, 51.20389745648345], [5.8948736904810985, 51.215993096271795], [5.879469662992332, 51.21084962327769], [5.868102823369579, 51.19553224765787], [5.873668655184858, 51.19089746979505], [5.826947024735472, 51.17057792538426], [5.8263982807536845, 51.166847494421496], [5.8363540644232685, 51.153677942689335], [5.855756083779347, 51.144634473688704], [5.842938992204726, 51.13290622482852], [5.828789236674332, 51.13033448833146], [5.809857569302643, 51.11840841358688], [5.814639481143939, 51.107443207423614], [5.83349275651823, 51.09955843288869]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id2f2a9722-6094-48fc-9a4a-6238eb4b82e8",
      "Code": "1740",
      "Gemeentenaam": "Neder-Betuwe",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.666008254076765, 51.95280973309805], [5.648918798643935, 51.95399668840439], [5.639629346952237, 51.938255400175166], [5.629908739274848, 51.93644670637504], [5.605920788070969, 51.943116264763006], [5.586597160712288, 51.950831474254166], [5.575857457068722, 51.94255104795047], [5.533447386476242, 51.94322930812551], [5.5541428737893925, 51.93427062164676], [5.547832317998829, 51.92163802588651], [5.4533699611338795, 51.92276845951159], [5.469675496592726, 51.91988585376764], [5.472458412500365, 51.90807282238556], [5.455525741062333, 51.90281630602895], [5.46391368478395, 51.88899675496236], [5.507656419332202, 51.88967501513741], [5.531369998545187, 51.89476196645026], [5.5539076977971975, 51.90078152550381], [5.628105723334688, 51.89939674431309], [5.685018313445852, 51.8956380525097], [5.706654504727783, 51.893292402737664], [5.706184152743393, 51.90793151818243], [5.675807253751552, 51.926159760386824], [5.6887811293209705, 51.935146707706195], [5.660364030264088, 51.92960758294331], [5.66114795023807, 51.943596699053664], [5.6469981947076775, 51.94031844154093], [5.666008254076765, 51.95280973309805]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id10b9ac4c-22c6-496b-810e-7a914a1ec4c2",
      "Code": "0405",
      "Gemeentenaam": "Hoorn",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.027035083283232, 52.61261557921583], [5.060430074174906, 52.578928657188484], [5.074619025703999, 52.583676478413814], [5.135294431690282, 52.60393950114335], [5.1252210600246, 52.61518731571288], [5.09484416103276, 52.632313385132825], [5.105975824663318, 52.63607207693621], [5.101938636797306, 52.64717858730261], [5.1194200522171265, 52.65116336583101], [5.09621602098723, 52.66981552064481], [5.091747677135527, 52.67891551132669], [5.086730589302036, 52.684369853567695], [5.063448166074741, 52.67315029983879], [5.034756695026964, 52.66656552397271], [5.0369516709541164, 52.64743293486825], [5.018372767570719, 52.63833294418637], [5.027035083283232, 52.61261557921583]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id868e92b1-874b-4f30-8092-1bb95c97d77e",
      "Code": "0766",
      "Gemeentenaam": "Dongen",
      "aantal": 3
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.933160666398769, 51.67675784185385], [4.925047094668045, 51.67299915005046], [4.9328079024104765, 51.650701346795785], [4.912857139072609, 51.63368832073835], [4.911877239105131, 51.615403556852705], [4.94785916591095, 51.61116443075866], [4.95291544974314, 51.614725296677655], [4.986310440634815, 51.60791443408656], [5.004497384031221, 51.60788617324593], [4.987251144603595, 51.65460134280231], [4.9578933415779325, 51.65152091117397], [4.953738565715822, 51.67076654364093], [4.944253134030628, 51.678905665741496], [4.933160666398769, 51.67675784185385]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb47b4901-f9a1-4f30-aec4-5cb5d1db86ac",
      "Code": "0530",
      "Gemeentenaam": "Hellevoetsluis",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.1926306629757395, 51.79110120303055], [4.194590462910697, 51.807096838825416], [4.212228662325314, 51.81396422309777], [4.221988466001402, 51.825014211782914], [4.207289966489221, 51.8355837661774], [4.1971382028261415, 51.83493376684298], [4.1982748867884165, 51.84988375153464], [4.185261815220299, 51.84971418649088], [4.175619599540308, 51.85547939797878], [4.1863201071851766, 51.86245982561364], [4.160137180054145, 51.86703808179521], [4.15527687621545, 51.8815924147181], [4.130113045050596, 51.87588372491145], [4.117256757477275, 51.857966351953955], [4.0891532264099855, 51.8528794006411], [4.082725082623325, 51.847255493356336], [4.039844660046455, 51.84211202036223], [4.049486875726446, 51.83123159672085], [4.070456735030491, 51.81927726113564], [4.106752229825903, 51.81266422442893], [4.121568317334182, 51.8068707521004], [4.141950236657739, 51.807040317144164], [4.175188443554618, 51.79175120236497], [4.1926306629757395, 51.79110120303055]]], [[[4.220224646059941, 51.82580551532047], [4.220224646059941, 51.82580551532047], [4.220224646059941, 51.82580551532047], [4.220224646059941, 51.82580551532047]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idc77e4516-1ced-4155-bb95-53b1bfcf58d6",
      "Code": "1701",
      "Gemeentenaam": "Westerveld",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.446910136159918, 52.78588279309976], [6.455454863876332, 52.800550169385154], [6.4599232077280355, 52.813861025320456], [6.4800307550606995, 52.83695013211268], [6.462666927636976, 52.83867404339093], [6.460707127702019, 52.85305881127006], [6.430878972691966, 52.850374031410496], [6.430761384695868, 52.871852270286986], [6.419982485053602, 52.88230878131897], [6.359542255059514, 52.894517464469814], [6.385568398195749, 52.915543529896276], [6.369027686744708, 52.92198700155922], [6.333280935931084, 52.90635875669251], [6.302982428936641, 52.92498265066568], [6.2565743664768485, 52.92763916968462], [6.24724571878645, 52.923343521909324], [6.206913036125027, 52.8907305118258], [6.165992413483114, 52.87501748443721], [6.119819527015516, 52.85421750573576], [6.130324054666888, 52.84393055974755], [6.201739164296738, 52.79371104595343], [6.172890909254164, 52.773052371455115], [6.201856752292835, 52.729304590164574], [6.218554247738673, 52.74829587506589], [6.231449731310693, 52.74171109919981], [6.252027630627747, 52.75830021264784], [6.269117086060576, 52.75855456021348], [6.298514085084938, 52.76629803054527], [6.293026645267057, 52.778421931174236], [6.309763336711594, 52.79543495723167], [6.353662855254641, 52.79891104062879], [6.342962347609774, 52.7896980065844], [6.355505067193501, 52.77952410395869], [6.377925178449415, 52.78520453292471], [6.394034733914765, 52.77746106259292], [6.412888009289056, 52.78831322539368], [6.416650825164174, 52.78172844952759], [6.436993548489033, 52.79198713467518], [6.446910136159918, 52.78588279309976]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id04873831-07f0-413f-98e5-37dc84784e0b",
      "Code": "0406",
      "Gemeentenaam": "Huizen",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.30544426204329, 52.30762458716961], [5.281142742849817, 52.31678109953275], [5.224582916726945, 52.325768046852126], [5.229560808561736, 52.301718071478575], [5.197812049615425, 52.30033329028785], [5.187268325965354, 52.29258981995606], [5.195029133707786, 52.28091809277713], [5.1847205860499095, 52.27800722619255], [5.201104513506154, 52.26814419281374], [5.203809037416395, 52.26712680255117], [5.210903513180941, 52.27735722685813], [5.227718596622877, 52.277131140133115], [5.280946762856321, 52.293805036103024], [5.30544426204329, 52.30762458716961]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id82601fee-872d-4872-8b42-8e7f1c141a91",
      "Code": "1731",
      "Gemeentenaam": "Midden-Drenthe",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.587466987495068, 52.73569154014626], [6.616354438536341, 52.76310455555442], [6.660881093058574, 52.8012284295602], [6.675148436585065, 52.79713060766929], [6.694001711959356, 52.81451102465488], [6.690199700085538, 52.822678407596065], [6.707602723507961, 52.836384915300144], [6.704035887626338, 52.84698273053526], [6.728611778810704, 52.85396315817012], [6.71457961127641, 52.868150100164854], [6.686358492213021, 52.875328353684104], [6.674991652590268, 52.90503049718305], [6.666721296864747, 52.90943918832085], [6.625447910234543, 52.91280222835546], [6.614943382583171, 52.91828483143709], [6.585820755549703, 52.9194435259028], [6.561519236356231, 52.946658715426565], [6.542979528971533, 52.95533479349905], [6.535924249205686, 52.93258481679434], [6.4969634264987315, 52.95157610169566], [6.483950354930614, 52.95016305966431], [6.495748350539058, 52.96898477952187], [6.48551819487858, 52.9729978188909], [6.49661066251044, 52.983228243197864], [6.488222718788821, 53.005413003090034], [6.413279969276047, 52.985517371288644], [6.427625704799937, 52.971810863584565], [6.393446793934277, 52.93283916435998], [6.369027686744708, 52.92198700155922], [6.385568398195749, 52.915543529896276], [6.359542255059514, 52.894517464469814], [6.419982485053602, 52.88230878131897], [6.430761384695868, 52.871852270286986], [6.430878972691966, 52.850374031410496], [6.460707127702019, 52.85305881127006], [6.462666927636976, 52.83867404339093], [6.4800307550606995, 52.83695013211268], [6.4599232077280355, 52.813861025320456], [6.455454863876332, 52.800550169385154], [6.491789554670444, 52.79311756830026], [6.4906528707081685, 52.77087628672684], [6.5076247381449, 52.76909585376734], [6.51272021797579, 52.76208716529185], [6.566379540194925, 52.7655915095296], [6.55740365649282, 52.74535674764069], [6.587466987495068, 52.73569154014626]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idc6b09ae0-bec1-474f-a1e2-29b0e40eb5a1",
      "Code": "1724",
      "Gemeentenaam": "Bergeijk",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.263426151437802, 51.31928646876335], [5.259428159570488, 51.31148647675031], [5.241123628177985, 51.305664743581154], [5.225954776681415, 51.26824739059106], [5.237909556284655, 51.26135174547807], [5.263112583448208, 51.266806087719075], [5.296154810351592, 51.26149304968121], [5.336487493013015, 51.26307565675632], [5.346129708693006, 51.275764774197825], [5.417427230326759, 51.26228435321877], [5.387795055310202, 51.28523215580786], [5.397672446982388, 51.31431256081301], [5.4109598905414, 51.320021250619654], [5.4258151740483775, 51.3119951718816], [5.433928745779101, 51.324316898394954], [5.42428653009911, 51.3307603700579], [5.41973979425001, 51.360716861122484], [5.423189042135535, 51.3748755422766], [5.421817182181064, 51.38341031614594], [5.388892543273778, 51.376458149351706], [5.3523618724861715, 51.36176251222568], [5.342602068810083, 51.3526625215438], [5.347109608660485, 51.337458189286494], [5.324023165426686, 51.33290819394555], [5.316654317671246, 51.32338429065427], [5.292156818484278, 51.318240817660154], [5.263426151437802, 51.31928646876335]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb2d2a2a7-ead9-42bb-b8f4-2bd4a127c400",
      "Code": "0285",
      "Gemeentenaam": "Voorst",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.166266785474008, 52.231009448229905], [6.162190401609297, 52.22417032479818], [6.147727078089311, 52.22767466903593], [6.1422396382714295, 52.2384420493148], [6.153645673892882, 52.24403769575894], [6.123543146891935, 52.253081164759564], [6.130049682675994, 52.26068333088822], [6.112960227243165, 52.27752679190189], [6.101319015629517, 52.30123763718792], [6.084111972200591, 52.30157676727544], [6.079839608342384, 52.31760066391093], [6.066512968784673, 52.31779848979532], [6.073685836546618, 52.33057238975871], [6.052951153234767, 52.33091151984623], [6.034764209838363, 52.29485068720622], [6.043387329552175, 52.27865722552697], [6.036410441783726, 52.26853984458252], [6.024847622167478, 52.2492376904343], [6.033431545882591, 52.2240855422763], [6.0469149694350985, 52.22137250157611], [6.049266729357047, 52.211311642312914], [6.049266729357047, 52.211311642312914], [6.058242613059153, 52.19593774501184], [6.0493843173531445, 52.18466166960168], [6.059810453007119, 52.17621167825422], [6.0645139728510165, 52.15671169822161], [6.076076792467266, 52.14393779825822], [6.108413491394064, 52.152698658852586], [6.160622561661331, 52.16188343205635], [6.184688904862608, 52.16123343272193], [6.192802476593332, 52.1697964674319], [6.193939160555608, 52.175872548166694], [6.156781353788814, 52.19831165562451], [6.189588404700002, 52.207722515553286], [6.189392424706506, 52.217133375482064], [6.166266785474008, 52.231009448229905]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id04a42dd0-ede8-41d5-ba95-680677c2695a",
      "Code": "0344",
      "Gemeentenaam": "Utrecht",
      "aantal": 13
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.0170792996136475, 52.06113353522122], [5.055608966334911, 52.028605307659575], [5.055608966334911, 52.028605307659575], [5.062781834096856, 52.026824874700075], [5.064153694051326, 52.05146832772679], [5.070307465847092, 52.06178353455564], [5.097352704949506, 52.05949440646485], [5.104407984715352, 52.04994224233293], [5.111267284487703, 52.05833571199914], [5.126828095971266, 52.05491615028328], [5.153050219100997, 52.056753104924034], [5.160183890864242, 52.0802943851663], [5.195146721703884, 52.07735525774109], [5.192755765783235, 52.086087857494825], [5.186170838001778, 52.09292698092655], [5.160889418840827, 52.094566109682916], [5.1619085148070045, 52.1072269662838], [5.14689644730523, 52.12039651801596], [5.107112508625594, 52.13319867881998], [5.087161745287727, 52.13565737195452], [5.06121399414889, 52.122572602744235], [5.0475737866015855, 52.129976942988506], [5.0326793070959095, 52.11677913041571], [5.015393871669584, 52.12726390228831], [5.00269436809106, 52.14130954007992], [4.9739245050458845, 52.1296660737416], [4.9700832971733675, 52.1224312985411], [4.979843100849456, 52.10909218176518], [4.975649128988646, 52.0997943651989], [4.98932853253465, 52.10075523378022], [5.00496773601561, 52.088490028948115], [4.99948029619773, 52.06613570401219], [5.0170792996136475, 52.06113353522122]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id6e10fc9a-12ad-462b-903a-428479deaa4f",
      "Code": "0246",
      "Gemeentenaam": "Heerde",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.109589371355039, 52.44053532063823], [6.103553187555369, 52.45395921993604], [6.063338092890042, 52.45116139671397], [6.022652646240324, 52.44409618655723], [6.0177531464029315, 52.444209229919736], [5.975578251802647, 52.41100274218305], [5.951041556616979, 52.39842666810405], [5.991335043279705, 52.37858755798392], [6.052402409252979, 52.361009315113954], [6.077840612408727, 52.36428757262668], [6.082896896240918, 52.37220060800223], [6.124562242858113, 52.38217668474355], [6.130559230659083, 52.399981014338536], [6.110765251316012, 52.407752745510955], [6.119466763027224, 52.432904893668955], [6.109589371355039, 52.44053532063823]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id0dd463bc-e16c-4a11-a7ec-8359c88e9dd5",
      "Code": "1719",
      "Gemeentenaam": "Drimmelen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.699042966168749, 51.63806875103553], [4.7369063009121275, 51.643070919826506], [4.762658072057469, 51.635044841088444], [4.768184707874049, 51.62885571699114], [4.7875083352327295, 51.63705136077296], [4.794289243007682, 51.641742660317036], [4.781080191446069, 51.663899159368576], [4.842382733411538, 51.6796404475978], [4.831133481784883, 51.69292304269247], [4.823607850034646, 51.7112925891], [4.836895293593658, 51.71262084860947], [4.84692946926064, 51.72553605277599], [4.851946557094131, 51.75588819560935], [4.822275186078875, 51.75385341508421], [4.785391751302976, 51.75594471729061], [4.782452051400539, 51.76657079336635], [4.750742488452928, 51.75229906884973], [4.733653033020098, 51.736501258939256], [4.69857261418436, 51.722003447697624], [4.676309286923242, 51.724914314282195], [4.645148467957419, 51.719064320272416], [4.656515307580173, 51.7073078105716], [4.666941443234146, 51.68650783187015], [4.697318342225987, 51.68772304801711], [4.709861061809715, 51.67328175845673], [4.6849324066370555, 51.66644263502501], [4.696769598244199, 51.65462960364293], [4.689204770495263, 51.6523969972334], [4.699042966168749, 51.63806875103553]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id9275856a-7a70-4cb1-b9ea-1bfdb5845e0a",
      "Code": "1945",
      "Gemeentenaam": "Berg en Dal",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.87911689900404, 51.809527271119336], [5.893423438529229, 51.77784686877651], [5.911100833942546, 51.76241644979418], [5.915294805803355, 51.75229906884973], [5.938302857039755, 51.74158821025211], [5.953275728542831, 51.74803168191506], [5.990472731308323, 51.76625992411945], [5.9823591595776, 51.77369252520434], [5.990433535309624, 51.783188167655005], [5.974559155836468, 51.78505338313638], [5.979066695686871, 51.79765771805601], [5.94594607678609, 51.81509465672285], [5.945044568816009, 51.82354464807031], [5.96299633622022, 51.836912025686864], [5.994549115173035, 51.830920727473945], [6.029159182024383, 51.84513593030931], [6.035665717808442, 51.84264897633414], [6.055381305154114, 51.852568531394205], [6.063494876884839, 51.8654554747201], [6.046287833455912, 51.8709098169611], [6.012187314587652, 51.88167719723998], [5.989571223338243, 51.87243590235496], [5.981065691620527, 51.859831567435336], [5.95605864445047, 51.85646852740072], [5.9373229570722765, 51.87141851209239], [5.923643553526274, 51.874611987083235], [5.8959711784446736, 51.870542426032955], [5.886760118750374, 51.86520112715446], [5.885858610780294, 51.84799027521264], [5.89706866640825, 51.832135943620905], [5.908357114033605, 51.82930985955821], [5.88048875895851, 51.82032291223884], [5.87911689900404, 51.809527271119336]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id75e38fc4-8ebd-478c-8eab-c8a9352ab2f6",
      "Code": "1940",
      "Gemeentenaam": "De Fryske Marren",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.937832505055366, 52.91172831641164], [5.912982241880105, 52.94058263469177], [5.897421430396543, 52.96307826383084], [5.870964131274617, 52.96446304502156], [5.867201315399498, 52.97862172617567], [5.887269666733463, 52.981504331919616], [5.867318903395596, 52.99848909713642], [5.857598295718207, 53.01699994774709], [5.823850540838239, 53.038223839057935], [5.797941985698102, 53.049810783714996], [5.796374145750136, 53.058825991875], [5.771014334591786, 53.04695643881167], [5.755414327109524, 53.046843395449166], [5.73671783573003, 53.03014123863863], [5.733229391845805, 53.0154456015126], [5.748633419334571, 53.00815430463085], [5.716845464389562, 52.99569127391435], [5.705165056777215, 52.98424563346043], [5.691211281240317, 52.98865432459824], [5.688153993341784, 52.936004378510205], [5.679178109639679, 52.93295220772249], [5.6424514588585755, 52.93617394355396], [5.6399821109405295, 52.92246743584988], [5.594240380458622, 52.91540222569314], [5.564764989436862, 52.94747827980475], [5.515495619072031, 52.928684820787815], [5.476965952350767, 52.90223267396098], [5.501855411524727, 52.88007617490943], [5.4770835403468645, 52.86877183865865], [5.432517689825932, 52.87465009350906], [5.441180005538444, 52.8500631621636], [5.337859352967486, 52.79594365236296], [5.377251331660132, 52.76480020599204], [5.631358991226717, 52.803065384200956], [5.660285638266689, 52.83124144230604], [5.709633400628918, 52.834830569065666], [5.729584163966785, 52.83372839628121], [5.724684664129391, 52.8439870814288], [5.748790203329368, 52.8396914336535], [5.7843801701481965, 52.81747841292071], [5.795159069790461, 52.806513206757444], [5.819734960974829, 52.817280587036315], [5.818127925028163, 52.8216610173335], [5.83996009630359, 52.84291316948497], [5.856775179745524, 52.870778358343166], [5.885937002777692, 52.89417833438229], [5.911453597930838, 52.89790876534505], [5.937832505055366, 52.91172831641164]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idbcba72c6-d74f-4f34-aed2-05da1a40d39f",
      "Code": "0088",
      "Gemeentenaam": "Schiermonnikoog",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.194017552553007, 53.413301715859035], [6.350409587362612, 53.4462821168707], [6.351585467323586, 53.497038586636734], [6.381648798325834, 53.49455163266156], [6.3970136298159, 53.507890749437486], [6.382275934305021, 53.52151247461968], [6.3521342113053745, 53.5217385613447], [6.352526171292366, 53.53971245598345], [6.3220708803031265, 53.52648638257003], [6.186139156814477, 53.513966830172286], [6.1259732988112825, 53.523349429260435], [6.11045168332642, 53.496473369824194], [6.050129041328429, 53.492347287092656], [6.079251668361897, 53.429269090813264], [6.194017552553007, 53.413301715859035]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5c0b5e6d-739f-4c8f-93c8-092c0b414906",
      "Code": "1970",
      "Gemeentenaam": "Noardeast-Fryslân",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.0439752695326625, 53.24351058537222], [6.0745089525193, 53.24845623248194], [6.141063758310455, 53.26439534659555], [6.180730108993995, 53.261060567401564], [6.192096948616747, 53.26908664613963], [6.192096948616747, 53.26908664613963], [6.217103995786805, 53.265271432654984], [6.232155259287278, 53.25673665878564], [6.254222606554899, 53.2680127341958], [6.253203510588722, 53.28790836599718], [6.268293970087894, 53.28980184231919], [6.292477901285269, 53.31029095177374], [6.2805231216820285, 53.312608340705154], [6.286990461467388, 53.341377876463405], [6.2556728585067685, 53.34838656493889], [6.232429631278173, 53.34344091782917], [6.217574347771195, 53.35785394654892], [6.178574329065541, 53.364834374183786], [6.167952213418072, 53.39074956503871], [6.194017552553007, 53.413301715859035], [6.079251668361897, 53.429269090813264], [6.050129041328429, 53.492347287092656], [6.00493605482831, 53.49257337381767], [6.0044265068452205, 53.4566538453808], [5.958998344352906, 53.43890603746706], [5.958763168360711, 53.42093214282831], [5.823145012861655, 53.394536517682724], [5.792885701865911, 53.376675666406484], [5.777873634364138, 53.376732188087736], [5.747967087356686, 53.39479086524837], [5.702891688852665, 53.39490390861088], [5.702695708859169, 53.36797132749338], [5.727898736022722, 53.31746920529299], [5.749299751312457, 53.31356920928647], [5.73538517177426, 53.294719228588285], [5.763214330850655, 53.29449314186326], [5.810523901280528, 53.27742359412458], [5.838666628346518, 53.274936640149406], [5.861165131599829, 53.288643147853485], [5.882252578899972, 53.27677359479016], [5.906632490090843, 53.28785184431593], [5.897225450403047, 53.301247482773114], [5.922350085569201, 53.312636601545776], [5.963858648191601, 53.32286702585274], [5.972168199915821, 53.32108659289324], [5.975852623793541, 53.30692791173913], [5.990511927307022, 53.31012138672998], [6.021124002291058, 53.30884964890176], [6.022456666246829, 53.324025720318446], [6.073450660554423, 53.32487354553726], [6.073685836546618, 53.29240183965687], [6.0543622091879365, 53.29087575426301], [6.051853665271191, 53.26628882291755], [6.0439752695326625, 53.24351058537222]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id47e23f6b-0775-4aee-b909-8ca2c816582e",
      "Code": "1773",
      "Gemeentenaam": "Olst-Wijhe",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.077840612408727, 52.36428757262668], [6.094851675844158, 52.3569680149043], [6.076076792467266, 52.3505810649226], [6.073685836546618, 52.33057238975871], [6.066512968784673, 52.31779848979532], [6.079839608342384, 52.31760066391093], [6.084111972200591, 52.30157676727544], [6.101319015629517, 52.30123763718792], [6.10860947138756, 52.297620249587666], [6.168736133392055, 52.308302847344656], [6.206599468135433, 52.32110500814868], [6.235369331180609, 52.31983327032046], [6.235682899170202, 52.339898467165604], [6.222944199592979, 52.347246285728616], [6.196996448454142, 52.352107150316456], [6.1894708167039045, 52.3757332130806], [6.201347204309747, 52.37138104362405], [6.203973336222591, 52.38689624512825], [6.229842695364029, 52.389778850872204], [6.222199475617694, 52.40877013577352], [6.230940183327604, 52.42349403374017], [6.177437645103266, 52.43115272155008], [6.154899945851255, 52.453196177239114], [6.139613506358587, 52.44158097174143], [6.109589371355039, 52.44053532063823], [6.119466763027224, 52.432904893668955], [6.110765251316012, 52.407752745510955], [6.130559230659083, 52.399981014338536], [6.124562242858113, 52.38217668474355], [6.082896896240918, 52.37220060800223], [6.077840612408727, 52.36428757262668]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id45d1c894-f489-4287-853a-4a084519f341",
      "Code": "0556",
      "Gemeentenaam": "Maassluis",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.240332193392605, 51.94286191719736], [4.228299021791965, 51.94800539019147], [4.2195191180833564, 51.94139235348476], [4.212699014309704, 51.93373366567485], [4.238881941440736, 51.91590107523923], [4.267573412488513, 51.90533152084475], [4.292619655657269, 51.92124237411773], [4.270395524394852, 51.92358802388977], [4.240332193392605, 51.94286191719736]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id0ab78b21-3437-414f-bc73-83042b5e560d",
      "Code": "0163",
      "Gemeentenaam": "Hellendoorn",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.575943363877517, 52.41750273552726], [6.585507187560109, 52.432226633493904], [6.585507187560109, 52.432226633493904], [6.598128299141236, 52.43903749608501], [6.596403675198474, 52.45480704515485], [6.5628910963107, 52.44576357615422], [6.540549377052185, 52.450878788307705], [6.5299664574034155, 52.44197662351021], [6.510917202035628, 52.437172280603626], [6.475601607207695, 52.44084618988513], [6.450085012054549, 52.4612505168178], [6.428488016771317, 52.4386135834756], [6.3903111140383455, 52.428157072443625], [6.405166397545324, 52.415496215842744], [6.388390510102088, 52.37977451329026], [6.357033711142768, 52.37700495090881], [6.343079935605871, 52.370024523273955], [6.333516111923279, 52.351372368460154], [6.342374407629286, 52.33317238709639], [6.356014615176591, 52.31822240240472], [6.4217463049950645, 52.325683264330245], [6.460903107695515, 52.32005935704548], [6.468193563453556, 52.3264745678678], [6.490888046700364, 52.34939410961627], [6.518873989771556, 52.35515932110417], [6.520794593707814, 52.36140496688273], [6.499040814429787, 52.36355279077038], [6.495552370545562, 52.37618538653063], [6.514092077930259, 52.38166798961226], [6.508526246114981, 52.392152761484866], [6.5159734858678195, 52.40611361675459], [6.575943363877517, 52.41750273552726]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id85f783cc-109c-4f04-bc8c-b42bf8a43458",
      "Code": "0518",
      "Gemeentenaam": "'s-Gravenhage",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.290071915741825, 52.13503563346073], [4.255265868896981, 52.11279435188731], [4.243154305298943, 52.11061826715903], [4.2387251574459395, 52.099992191083295], [4.184987443229406, 52.06144440446811], [4.19631508685346, 52.05567919298021], [4.212307054322713, 52.0307248707066], [4.23500153756952, 52.03928790541657], [4.2482105891311335, 52.02521400678434], [4.272668892319403, 52.03592486538196], [4.295520159561007, 52.014842278274244], [4.3076317231590435, 52.0181487966276], [4.2909342277132065, 52.04157703350735], [4.34004681408324, 52.06181179539626], [4.352628729665668, 52.04909441711413], [4.3460438018842105, 52.04400746580127], [4.357802601493955, 52.026853135540705], [4.373481000973615, 52.03259008618798], [4.379752360765479, 52.026740092178194], [4.3939413122945705, 52.03295747711613], [4.372657885000932, 52.04092703417293], [4.39445086027766, 52.05404006422385], [4.42208403936056, 52.05166615361118], [4.4208297674021875, 52.06257483809319], [4.403936291962854, 52.07783569203175], [4.379987536757674, 52.074755260403414], [4.348003601819167, 52.05649875735839], [4.342986513985677, 52.06152918698999], [4.342986513985677, 52.06152918698999], [4.354470941604527, 52.067661789406046], [4.354510137603226, 52.067661789406046], [4.354470941604527, 52.067661789406046], [4.354510137603226, 52.067661789406046], [4.335225706243245, 52.07500960796905], [4.373520196972314, 52.09230524243276], [4.3726970809996315, 52.0947639355673], [4.35850812947054, 52.10575740257119], [4.3275040944995125, 52.09555523910486], [4.329895050420161, 52.10852696495264], [4.290071915741825, 52.13503563346073]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id9bfe8be4-8dbb-4c0a-89dd-e7b2834c16a6",
      "Code": "0489",
      "Gemeentenaam": "Barendrecht",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.489109197136106, 51.83538594029301], [4.525483083928916, 51.829846815530125], [4.553625810994905, 51.82990333721138], [4.5710680304160265, 51.8471141891532], [4.5493926431353975, 51.87401850943007], [4.532969519680454, 51.86890329727659], [4.494008696973499, 51.86895981895785], [4.480407685424894, 51.86231852141051], [4.490128293102283, 51.851325054406615], [4.489109197136106, 51.83538594029301]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ided0d6de5-6c98-4da3-83a4-edfdaeefd9a3",
      "Code": "1926",
      "Gemeentenaam": "Pijnacker-Nootdorp",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.379752360765479, 52.026740092178194], [4.394529252275058, 52.011253151514616], [4.388336284480593, 52.007664024754995], [4.388336284480593, 52.007664024754995], [4.397037796191803, 51.978979271518625], [4.407895087831468, 51.96821189123975], [4.427885047168034, 51.976464056702824], [4.4242398192890136, 51.97926187992489], [4.447247870525414, 51.99240317081643], [4.461554410050604, 52.01263793270534], [4.457164458196298, 52.022133575156], [4.476723261547174, 52.031629217606664], [4.470726273746204, 52.0404748607229], [4.457634810180688, 52.03860964524152], [4.450579530414842, 52.04920746047664], [4.42208403936056, 52.05166615361118], [4.39445086027766, 52.05404006422385], [4.372657885000932, 52.04092703417293], [4.3939413122945705, 52.03295747711613], [4.379752360765479, 52.026740092178194]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb0e547df-9d22-44a5-b37e-8e2af5380021",
      "Code": "0957",
      "Gemeentenaam": "Roermond",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.0726667405804395, 51.24255828646114], [6.051383313286801, 51.252506102361835], [6.027865714067312, 51.2455539355676], [6.005876758797089, 51.25869522645914], [6.009090830690419, 51.24945393157412], [6.000546102974004, 51.232751774763585], [5.98000739965565, 51.22334091483481], [5.9513159286078725, 51.20115615494264], [5.921252597605625, 51.178914873369216], [5.916666665757825, 51.168627927380996], [5.955470704469983, 51.159047502408455], [5.983574235537273, 51.17623009350965], [5.999958162993517, 51.16221271655868], [6.013715958536919, 51.16664966853711], [6.029511946012676, 51.16096923957109], [6.063573268882237, 51.16551923491203], [6.055185325160618, 51.18456704149461], [6.07313709256483, 51.18281486937573], [6.068002416735241, 51.22054309161273], [6.08603257613685, 51.22266265465976], [6.0726667405804395, 51.24255828646114]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id53f9f867-2b7d-46a4-9bcb-a2785f54c47c",
      "Code": "0417",
      "Gemeentenaam": "Laren",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.203809037416395, 52.26712680255117], [5.188836165913321, 52.24765508335919], [5.1989487335777005, 52.24084422076809], [5.218977888912966, 52.21213120669109], [5.2247397007217415, 52.22518771506075], [5.244063328080422, 52.25466377183468], [5.225523620695724, 52.272920274879695], [5.203809037416395, 52.26712680255117]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id7b2ee8c6-9616-4eea-8572-6ee7d85cb16b",
      "Code": "0889",
      "Gemeentenaam": "Beesel",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.0726667405804395, 51.24255828646114], [6.085601420151159, 51.247616976933365], [6.124758222851609, 51.277545207157324], [6.120054703007711, 51.28511911244535], [6.093558207887086, 51.295519101796074], [6.093558207887086, 51.295519101796074], [6.084699912181078, 51.29744083895871], [6.046405421452009, 51.28559954673601], [6.0237893302026, 51.26612782754403], [6.009600378673508, 51.26576043661588], [6.005876758797089, 51.25869522645914], [6.027865714067312, 51.2455539355676], [6.051383313286801, 51.252506102361835], [6.0726667405804395, 51.24255828646114]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id4c5ca8d0-8897-4449-90e8-f62b21b678c9",
      "Code": "1730",
      "Gemeentenaam": "Tynaarlo",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.513386549953675, 53.19693672001898], [6.537452893154953, 53.16483240506675], [6.533925253272029, 53.15180415753771], [6.539099125100317, 53.13253026423013], [6.510917202035628, 53.13069330958937], [6.512485041983595, 53.125606358276514], [6.480305127051594, 53.1207737545293], [6.490731262705567, 53.09689334419952], [6.513347353954976, 53.07227815201343], [6.505116194228155, 53.04636296115851], [6.524126253597242, 53.04585426602722], [6.533690077279834, 53.03816731737668], [6.533690077279834, 53.03816731737668], [6.547291088828439, 53.03505862490772], [6.555208680565668, 53.05859990514998], [6.600323275068389, 53.06083251155951], [6.6081232788095186, 53.04774774234922], [6.60302779897863, 53.03308036606383], [6.631209722043318, 53.02609993842897], [6.648612745465741, 53.026326025153985], [6.642341385673877, 53.0459390485491], [6.666838884860844, 53.05834555758434], [6.6704841127398655, 53.06665424472867], [6.653865009291426, 53.08013466570773], [6.6745604966045775, 53.07883466703889], [6.699018799792847, 53.06518468101606], [6.749816814106945, 53.08160422942033], [6.748758522142067, 53.08683248493632], [6.776509289221065, 53.0947737811525], [6.737470074516712, 53.11947375586047], [6.695373571913826, 53.12116940629809], [6.63575645789242, 53.10669985589708], [6.627682082160394, 53.12266723085131], [6.6000097070787955, 53.14471068654035], [6.587741359485962, 53.14575633764355], [6.581509195692797, 53.16358892807916], [6.563675016284684, 53.15762589070687], [6.54819259679852, 53.18111064926788], [6.534317213259021, 53.18402151585246], [6.5294961054190255, 53.195184547900105], [6.513386549953675, 53.19693672001898]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "iddfeec565-24e6-4230-a096-25205fd6a6c1",
      "Code": "1581",
      "Gemeentenaam": "Utrechtse Heuvelrug",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.332254325153508, 52.08416612033219], [5.320456329545063, 52.07031830842498], [5.290745762531109, 52.08656829178548], [5.247434183968549, 52.05864658124604], [5.25060905986318, 52.03959877466347], [5.27087339119064, 52.027390091512615], [5.263230171444306, 52.02436618156553], [5.279927666890144, 52.010716195542706], [5.291216114515498, 52.00834228493004], [5.31465532173759, 52.02699443974384], [5.346560864678697, 52.019024882687035], [5.381641283514436, 52.00212489999211], [5.39896591493946, 52.002916203529665], [5.415271450398306, 51.99669881859173], [5.39943626692385, 51.987937957997374], [5.378388015622407, 51.986129264197245], [5.390969931204833, 51.97072710605555], [5.413507630456845, 51.975418405599626], [5.4393769895982835, 51.98584665579098], [5.477671480327352, 51.98347274517831], [5.494212191778393, 51.9948901247916], [5.512595115168294, 52.01851618755575], [5.529331806612831, 52.04019225231663], [5.515691599065526, 52.05418136842698], [5.497857419657414, 52.05700745248968], [5.4840996241140125, 52.05596180138648], [5.448548853293884, 52.04313137974184], [5.428676481953415, 52.057318321736574], [5.438318697633406, 52.070431351787484], [5.422561906156348, 52.073031349125166], [5.401905614841896, 52.06429874937143], [5.405903606709209, 52.07520743385344], [5.332254325153508, 52.08416612033219]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id858d4855-5baf-41fe-b2b3-ace0d21db640",
      "Code": "0184",
      "Gemeentenaam": "Urk",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.377251331660132, 52.76480020599204], [5.361141776194781, 52.67572203633584], [5.511301647211222, 52.66356987486625], [5.592280580523665, 52.64929815034963], [5.6072142560280405, 52.64924162866838], [5.627674567348997, 52.63683511963314], [5.648879602645236, 52.64955249791527], [5.642804222846868, 52.66057422575979], [5.655386138429295, 52.665943785478916], [5.643117790836461, 52.68244811640506], [5.609644407947387, 52.68032855335804], [5.594553948448215, 52.68329594162387], [5.590673544576999, 52.67628725314838], [5.377251331660132, 52.76480020599204]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5ab5c16f-7102-493b-bcdd-bf6e12ec76d5",
      "Code": "1876",
      "Gemeentenaam": "Bronckhorst",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.399169409744354, 51.98101405204376], [6.399169409744354, 51.98101405204376], [6.416062885183687, 51.97262058237756], [6.447576468137804, 51.96970971579298], [6.467840799465264, 51.978216228821694], [6.475758391202492, 51.98813578388176], [6.460079991722832, 51.99514447235725], [6.467448839478272, 52.00074011880139], [6.462196575652586, 52.0217096625466], [6.4385221924383, 52.025016180899954], [6.432681988632126, 52.040559643244784], [6.4203744450405935, 52.04646615893582], [6.400541269698824, 52.08379872940404], [6.4239804769209155, 52.096911759454954], [6.39152618999802, 52.11304869945295], [6.398307097772973, 52.11768347731577], [6.392584481962897, 52.13150302838236], [6.368792510752513, 52.123844340572454], [6.357739239119352, 52.13551606775139], [6.328303044096292, 52.137720413320295], [6.277544225780893, 52.12175303836606], [6.270136182026754, 52.111805222465364], [6.235918075162397, 52.113726959627996], [6.217887915760787, 52.09787262803627], [6.210519068005348, 52.09244654663589], [6.177947193086355, 52.09123133048893], [6.168344173405063, 52.07633786747852], [6.137457726430133, 52.059183537217955], [6.12009389900641, 52.051355284364284], [6.111705955284792, 52.03925964457594], [6.12150495495958, 52.034624866713116], [6.149961250015162, 52.04205746779801], [6.175517041167008, 52.039344427097824], [6.176536137133185, 52.01922270857142], [6.16434618153775, 52.016594450393114], [6.164306985539051, 52.016594450393114], [6.16434618153775, 52.016594450393114], [6.164306985539051, 52.016594450393114], [6.159250701706861, 51.99975098937944], [6.161445677634013, 51.989040130781824], [6.161445677634013, 51.989040130781824], [6.160465777666534, 51.98104231288439], [6.205149216183564, 51.98025100934684], [6.229293951382241, 51.97677492594972], [6.228078875422566, 51.987796653794234], [6.2497934587018955, 51.975955361571536], [6.291889961304782, 51.993335778557125], [6.2956527771799005, 51.988446653128655], [6.319052788403292, 51.99418360377593], [6.3356326958530325, 51.98564882990659], [6.327715104115804, 51.97728362108101], [6.370046782710886, 51.97623796997781], [6.365304066868289, 51.96965319411172], [6.390389506035744, 51.96832493460226], [6.399169409744354, 51.98101405204376]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idace3b670-650b-4a89-b839-a35f3c47994e",
      "Code": "0059",
      "Gemeentenaam": "Achtkarspelen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.176732117126681, 53.15949110618825], [6.177829605090258, 53.16799761921697], [6.199544188369586, 53.198264979528446], [6.2190637957217625, 53.205980189019606], [6.229960283360127, 53.217934524604814], [6.215536155838839, 53.23698233118739], [6.231096967322401, 53.24509319244733], [6.232155259287278, 53.25673665878564], [6.217103995786805, 53.265271432654984], [6.192096948616747, 53.26908664613963], [6.192096948616747, 53.26908664613963], [6.180730108993995, 53.261060567401564], [6.141063758310455, 53.26439534659555], [6.0745089525193, 53.24845623248194], [6.0439752695326625, 53.24351058537222], [6.019791338335287, 53.24091058803454], [6.0272385780881255, 53.23014320775567], [6.086306948127744, 53.215023658020236], [6.081172272298155, 53.20289975739127], [6.081172272298155, 53.20289975739127], [6.085287852161565, 53.19422367931879], [6.114606459188529, 53.17596717627377], [6.105003439507238, 53.15180415753771], [6.121622542955677, 53.144993294946616], [6.1481190380763024, 53.15782371659126], [6.151999441947518, 53.150843288956395], [6.176732117126681, 53.15949110618825]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb4f89b16-040b-4dc6-a113-918731ce39bd",
      "Code": "1952",
      "Gemeentenaam": "Midden-Groningen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.9113435247461386, 53.24300189024093], [6.909109352820288, 53.27897794035906], [6.88731637754356, 53.27917576624345], [6.8873947695409585, 53.2978844427385], [6.8458078149211605, 53.29011271156609], [6.814333427965744, 53.297601834332234], [6.772511297353752, 53.28307576224997], [6.698313271816263, 53.25614318113247], [6.717676095173642, 53.241871456615854], [6.708817799467634, 53.235427984952906], [6.6980780958240675, 53.21474104961397], [6.6829092443274964, 53.21106714033246], [6.684006732291072, 53.20219323637559], [6.666878080859544, 53.20202367133183], [6.639793645758433, 53.19029542247164], [6.657235865179553, 53.180771519180354], [6.66201777702085, 53.17161500681722], [6.68827909614928, 53.155167197572325], [6.695373571913826, 53.12116940629809], [6.737470074516712, 53.11947375586047], [6.776509289221065, 53.0947737811525], [6.813941467978752, 53.07097815334459], [6.801673120385919, 53.119162886613566], [6.823113331674353, 53.12622809677031], [6.8659153622538245, 53.12439114212956], [6.8862580855786835, 53.12860200738297], [6.959358623152597, 53.12018027687614], [6.9617495790732455, 53.11003463509106], [6.965277218956168, 53.110825938628615], [6.954655103308699, 53.13665634696166], [6.950382739450491, 53.15889762853509], [6.929256096151651, 53.16904327032017], [6.903308345012813, 53.16647153382311], [6.91220583671752, 53.171954136904745], [6.91683096456402, 53.19558019966888], [6.9294128801464465, 53.21281931245134], [6.92004503645735, 53.22734538453359], [6.9127153847006095, 53.225112778124064], [6.9113435247461386, 53.24300189024093]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id485cac69-9ae8-4d9d-b866-9a2d9f662014",
      "Code": "1911",
      "Gemeentenaam": "Hollands Kroon",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.847674193235924, 52.720261121163944], [4.858100328889898, 52.723341552792284], [4.877267172253782, 52.71217852074463], [4.898668187543517, 52.70683722186613], [4.898824971538314, 52.70680896102551], [4.944409918025425, 52.75360891310376], [4.996854164284887, 52.752054566869276], [5.040675290830535, 52.75245021863806], [5.0697195258666055, 52.768106724345394], [5.093237125086095, 52.769519766376746], [5.112012008462988, 52.77918497387117], [5.1214582441494825, 52.84593707943206], [5.215058289043051, 52.916108746708815], [5.169120578567648, 52.997613011076986], [5.164260274728953, 53.00100431195222], [5.144270315392387, 53.02615646011022], [5.074501437707902, 53.01841298977843], [5.006966731949267, 53.044299919792735], [4.932415942423485, 53.04401731138647], [4.876248076287604, 53.02197385569743], [4.925831014642028, 52.96313478551209], [4.874993804329231, 52.89036312089765], [4.8083214105419785, 52.914356574589945], [4.794916378986869, 52.912576141630446], [4.770928427782989, 52.87863487203746], [4.758856060183652, 52.84867838097288], [4.782569639396637, 52.851447943354316], [4.8096540744977485, 52.83689361043143], [4.8345043376730095, 52.807784944585656], [4.8345043376730095, 52.807784944585656], [4.82897770185643, 52.77531323870527], [4.8069495505875075, 52.77025454823305], [4.848889269195597, 52.72611111517372], [4.847674193235924, 52.720261121163944]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id0584b208-227a-4e5e-ae83-93fbc9e27547",
      "Code": "1598",
      "Gemeentenaam": "Koggenland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.8733867683825665, 52.63443294817985], [4.889300343854421, 52.62553078338235], [4.8840088840300355, 52.613152535187744], [4.923244078727884, 52.611230798025105], [4.9269285026056036, 52.6067090635248], [4.94829032189664, 52.61346340443464], [4.959304397531101, 52.60458950047777], [4.949858161844606, 52.5952916839115], [5.004889344018212, 52.597580812002285], [5.006574771962276, 52.61049601616881], [5.027035083283232, 52.61261557921583], [5.018372767570719, 52.63833294418637], [5.0369516709541164, 52.64743293486825], [5.034756695026964, 52.66656552397271], [5.021273271474456, 52.66441770008506], [5.002341604102767, 52.67493073279829], [4.979215964870269, 52.67967855402362], [4.95287625374444, 52.67213290957622], [4.90497874333408, 52.68713941594914], [4.915875230972444, 52.699348099099986], [4.899844067504492, 52.697595926981116], [4.8763264682850025, 52.68637637325221], [4.863195808720787, 52.65647640386888], [4.875464156313621, 52.64228946187414], [4.8733867683825665, 52.63443294817985]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1828c10f-9430-453a-a0b9-a07b2dddc254",
      "Code": "0228",
      "Gemeentenaam": "Ede",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.589497664616025, 52.009444457714494], [5.605999180068367, 51.9941553429353], [5.683097709509594, 51.993900995369664], [5.724371096139798, 52.00071185796076], [5.745144975450348, 52.019759664543336], [5.813385209185567, 52.02408357315926], [5.837921904371234, 52.04663572397958], [5.850033467969271, 52.05160963192993], [5.899420426330199, 52.04997050317356], [5.898126958373128, 52.063366141630745], [5.909768169986775, 52.06209440380253], [5.946102860780886, 52.07789221371301], [5.951472712602669, 52.099907408561414], [5.911727969921732, 52.10024653864893], [5.883467654859645, 52.10635088022436], [5.864731967481452, 52.125568251850694], [5.859558095653164, 52.14874214116481], [5.809857569302643, 52.15142692102437], [5.774698758469506, 52.15221822456193], [5.762116842887079, 52.14761170753973], [5.720333908273785, 52.14625518718964], [5.7215489842334595, 52.13800302172656], [5.688428365332678, 52.136957370623364], [5.679256501637077, 52.131616071744865], [5.6381790950003685, 52.13076824652606], [5.606900688038447, 52.12488999167565], [5.561394133548735, 52.12042477885659], [5.550340861915575, 52.10541827248367], [5.554926793763375, 52.08659655262611], [5.5627267975045065, 52.078287865481784], [5.55790568966451, 52.04886833038911], [5.567430317348403, 52.040587904085406], [5.590046408597813, 52.0343987799881], [5.589497664616025, 52.009444457714494]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf9fcbc7f-5277-498c-be60-7657e2977c78",
      "Code": "0537",
      "Gemeentenaam": "Katwijk",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.440466962750461, 52.155666047118416], [4.448384554487689, 52.16205299710011], [4.446542342548829, 52.17847254550438], [4.458614710148167, 52.18344645345472], [4.463475013986862, 52.20020513194651], [4.455635814247032, 52.20701599453761], [4.464062953967349, 52.21597468101636], [4.440192590759567, 52.20735512462514], [4.390962416393435, 52.22524423674201], [4.359997577421107, 52.19268774833974], [4.375009644922882, 52.18661166760494], [4.4115795117091885, 52.16346603913146], [4.440466962750461, 52.155666047118416]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idc128a92a-918c-44c5-b4cf-3048d3388af6",
      "Code": "0482",
      "Gemeentenaam": "Alblasserdam",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.672624863045523, 51.838664197805734], [4.683207782694293, 51.84849897034392], [4.681247982759336, 51.8589554813759], [4.700258042128423, 51.87969893839609], [4.664197723325206, 51.87495111717076], [4.626373584580526, 51.880659806977405], [4.635271076285234, 51.86972286165477], [4.648048971861156, 51.8625163472949], [4.672624863045523, 51.838664197805734]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idab832393-8c51-4898-b7b4-cd3fae69fbc0",
      "Code": "0216",
      "Gemeentenaam": "Culemborg",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.270363843207551, 51.96541406801768], [5.256253283675857, 51.97095319278056], [5.243984936083024, 51.978385793865456], [5.229090456577347, 51.97490971046834], [5.217684420955894, 51.96258798395498], [5.194323605731201, 51.96128798528614], [5.1802130461995075, 51.96744884854282], [5.142428103453527, 51.924944544239864], [5.166808014644398, 51.92601845618369], [5.159243186895463, 51.919631506201995], [5.207689441287611, 51.926216282068076], [5.211805021151021, 51.919631506201995], [5.233911564417342, 51.923842371455414], [5.255077403714883, 51.93548583779372], [5.241907548151969, 51.9455184362163], [5.270363843207551, 51.96541406801768]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf2687c1e-1e7e-4856-a89e-885315114f79",
      "Code": "0845",
      "Gemeentenaam": "Sint-Michielsgestel",
      "aantal": 5
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.319045273591895, 51.67037089187215], [5.303954814092722, 51.66553828812494], [5.3191628615879925, 51.64996656493948], [5.317712609636123, 51.634620928479045], [5.343425184782765, 51.61738181569659], [5.332019149161313, 51.60845139005847], [5.342837244802278, 51.60022748543602], [5.38054379555086, 51.602912265295586], [5.3948503350760495, 51.60585139272079], [5.385913647372643, 51.620914420774966], [5.385913647372643, 51.620914420774966], [5.378074447632813, 51.646631785745505], [5.396143803033121, 51.645331787076664], [5.42338502212903, 51.653781778424126], [5.432988041810322, 51.66435133281861], [5.445021213410961, 51.6642382894561], [5.456858405018103, 51.68758174381398], [5.429029245941708, 51.70151433824307], [5.398260386962875, 51.69849042829598], [5.359260368257221, 51.698688254180375], [5.377094547665335, 51.67879262237899], [5.3573397643209635, 51.682014358210466], [5.353694536441942, 51.671077412887826], [5.338878448933664, 51.66398394189046], [5.327472413312211, 51.67336654097861], [5.319045273591895, 51.67037089187215]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id718c0bc5-00f5-44f7-b631-0a51459120d7",
      "Code": "0899",
      "Gemeentenaam": "Brunssum",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.0116777666045635, 50.9264325232079], [6.018184302388622, 50.9347129495116], [6.0168516384328505, 50.9526303224691], [6.006072738790585, 50.95754770873819], [5.965857644125258, 50.96240857332603], [5.9364214491021965, 50.9465542417343], [5.928464661366268, 50.93660642583361], [5.941869692921378, 50.92708252254232], [5.954882764489495, 50.933836863452164], [5.9754998598052484, 50.92900425970495], [6.0116777666045635, 50.9264325232079]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idc29c4757-85de-4a38-a9d0-5c10a31186b8",
      "Code": "0632",
      "Gemeentenaam": "Woerden",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.909643067179279, 52.16188343205635], [4.892161651759459, 52.16179864953447], [4.873621944374761, 52.15608995972782], [4.8745234523448415, 52.138822586104745], [4.855239020984859, 52.13721171818901], [4.83309328171984, 52.14470084095515], [4.813142518381973, 52.14020736729547], [4.8080862345497835, 52.129100856929064], [4.792094267080531, 52.12228999433797], [4.825371669976108, 52.107113922921286], [4.826273177946188, 52.07467047788153], [4.8392470535156065, 52.068763962190495], [4.873190788389071, 52.068735701349866], [4.903058139397822, 52.070600916831246], [4.936139562299904, 52.07992699423814], [4.9567566576156565, 52.0659378781278], [4.99948029619773, 52.06613570401219], [5.00496773601561, 52.088490028948115], [4.98932853253465, 52.10075523378022], [4.975649128988646, 52.0997943651989], [4.979843100849456, 52.10909218176518], [4.9700832971733675, 52.1224312985411], [4.960989825475165, 52.13336824386374], [4.943900370042336, 52.127546510694586], [4.923557646717477, 52.147300838292836], [4.911759651109033, 52.144248667505124], [4.909643067179279, 52.16188343205635]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf10f86b1-b679-49e1-b3a6-91366ce542ae",
      "Code": "0420",
      "Gemeentenaam": "Medemblik",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.25750755563423, 52.71619156011366], [5.254332679739599, 52.74702413723768], [5.274401031073563, 52.75064152483793], [5.211334669166632, 52.80040886518202], [5.281181938848516, 52.84062404139419], [5.238693476258638, 52.87405661585589], [5.215058289043051, 52.916108746708815], [5.1214582441494825, 52.84593707943206], [5.112012008462988, 52.77918497387117], [5.093237125086095, 52.769519766376746], [5.0697195258666055, 52.768106724345394], [5.040675290830535, 52.75245021863806], [4.996854164284887, 52.752054566869276], [4.996383812300497, 52.73863066757147], [5.011160703810076, 52.72291764018288], [4.988270240569773, 52.71339373689159], [4.972003901109626, 52.71217852074463], [4.98607526464262, 52.698924186490586], [4.979215964870269, 52.67967855402362], [5.002341604102767, 52.67493073279829], [5.021273271474456, 52.66441770008506], [5.034756695026964, 52.66656552397271], [5.063448166074741, 52.67315029983879], [5.086730589302036, 52.684369853567695], [5.091747677135527, 52.67891551132669], [5.125456236016795, 52.69115245531817], [5.187033149973159, 52.70745896035993], [5.211413061164031, 52.71695460281059], [5.25750755563423, 52.71619156011366]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id8bc2f996-8142-45ad-b6c6-d9e1b60c5039",
      "Code": "0664",
      "Gemeentenaam": "Goes",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[3.9128888202599104, 51.47912978334948], [3.9258234998306296, 51.49187542247223], [3.965215478523275, 51.506429755395125], [3.9634908545805123, 51.52061669738986], [3.9714476423164395, 51.52844495024353], [3.937974259427366, 51.535764507965915], [3.9224134479438035, 51.54672971412918], [3.8992486127126065, 51.55026231920755], [3.8709491016518207, 51.54192537122259], [3.852487786264521, 51.54319710905081], [3.8344968228616114, 51.55303188158899], [3.7929882602392127, 51.54271667476015], [3.7682947810587484, 51.55277753402335], [3.74379728187178, 51.547690582710494], [3.713616362873435, 51.530366687406165], [3.746932961767712, 51.51685800558647], [3.7452475338236484, 51.512477575289296], [3.7111078189566893, 51.50671236380139], [3.70554198714141, 51.50244497686672], [3.7577902534073764, 51.499166719353994], [3.780837500642476, 51.495521070913114], [3.8155651554899226, 51.48288847515286], [3.8468043664531444, 51.48503629904051], [3.9128888202599104, 51.47912978334948]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd6682c8b-0a79-47bb-bf8c-b828181470b7",
      "Code": "0024",
      "Gemeentenaam": "Loppersum",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.654060989284922, 53.30865182301738], [6.689572564106351, 53.2974605301291], [6.709680111439015, 53.3100366042081], [6.72649519488095, 53.30489313121399], [6.7378228385050045, 53.3129757316333], [6.753070081998974, 53.298845311319816], [6.764632901615222, 53.298138790304144], [6.772511297353752, 53.28307576224997], [6.814333427965744, 53.297601834332234], [6.804456036293558, 53.3237713727528], [6.838909319150111, 53.330582235343904], [6.834284191303611, 53.34329961362604], [6.824955543613214, 53.34705830542942], [6.822407803697769, 53.360482204727234], [6.811628904055503, 53.3600300312772], [6.777175621198951, 53.39795607939859], [6.792462060691619, 53.403608247523984], [6.778625873150819, 53.41078650104323], [6.748523346149872, 53.39515825617652], [6.730258010756069, 53.38145174847244], [6.69701980385919, 53.362912637021154], [6.665192652915481, 53.36692567639018], [6.6309353500524235, 53.36265828945551], [6.6277604741577925, 53.352286560945416], [6.595815735217986, 53.3471430879513], [6.619842882420565, 53.314417034505276], [6.637677061828677, 53.31464312123029], [6.654060989284922, 53.30865182301738]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd0b2545d-320e-4c25-850a-ce722e63f9fd",
      "Code": "0575",
      "Gemeentenaam": "Noordwijk",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.513528304325676, 52.255002901922204], [4.542533343363046, 52.2866550434244], [4.563699182660587, 52.3092919767666], [4.547315255204342, 52.31398327631068], [4.477663965515954, 52.33252238776197], [4.4432890746568, 52.286231130815], [4.390962416393435, 52.22524423674201], [4.440192590759567, 52.20735512462514], [4.464062953967349, 52.21597468101636], [4.466061949901006, 52.22498988917636], [4.513528304325676, 52.255002901922204]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idfae4aca2-2495-4fef-bad4-4849cc44ae30",
      "Code": "0289",
      "Gemeentenaam": "Wageningen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.666008254076765, 51.95280973309805], [5.681921829548619, 51.95916842223912], [5.722607276198336, 51.964057547667586], [5.713709784493629, 51.9679575436741], [5.724371096139798, 52.00071185796076], [5.683097709509594, 51.993900995369664], [5.605999180068367, 51.9941553429353], [5.6261851193984285, 51.97369449432138], [5.619521799619573, 51.96719450097718], [5.627243411363306, 51.95238582048865], [5.605920788070969, 51.943116264763006], [5.629908739274848, 51.93644670637504], [5.639629346952237, 51.938255400175166], [5.648918798643935, 51.95399668840439], [5.666008254076765, 51.95280973309805]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id98879c89-02b7-4028-8491-f8334a072d84",
      "Code": "0984",
      "Gemeentenaam": "Venray",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.8708857392772185, 51.56264056740216], [5.838235472360827, 51.566427520046176], [5.852581207884716, 51.50414062730434], [5.860733975614139, 51.491988465834744], [5.8749621231419304, 51.446545034106585], [5.952962160553238, 51.46352979932339], [5.994353135179539, 51.47525804818358], [6.030217473989261, 51.47983630436515], [6.049462709350543, 51.49040585875964], [6.068080808732639, 51.48837107823449], [6.073764228544016, 51.49518194082559], [6.066238596793779, 51.50795584078898], [6.0667873407755675, 51.5236971290182], [6.107551179422682, 51.521379740086786], [6.12197530694397, 51.51018844719851], [6.1268748067813625, 51.5143710516113], [6.1268748067813625, 51.5143710516113], [6.141102954309154, 51.51951452460541], [6.119466763027224, 51.53203407700315], [6.1106084673212155, 51.54689927917294], [6.078585336384011, 51.54726667010109], [6.048130045394772, 51.558457962989365], [6.031667725941129, 51.55232536057331], [6.004269722850424, 51.57024273353081], [5.976362171776629, 51.56165143798022], [5.935441549134717, 51.55359709840153], [5.906671686089542, 51.55204275216705], [5.8914636385942725, 51.56021013510824], [5.8708857392772185, 51.56264056740216]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id72d68894-149c-47b9-8be4-45e100695f2a",
      "Code": "0668",
      "Gemeentenaam": "West Maas en Waal",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.5979640003350415, 51.828038121729996], [5.609840387940883, 51.83626202635244], [5.609840387940883, 51.83629028719307], [5.585029320764322, 51.83911637125577], [5.585029320764322, 51.85711852673514], [5.57726851302189, 51.864579388660665], [5.553045385825817, 51.86254460813552], [5.5537901098011, 51.87037286098919], [5.568449413314582, 51.876533724245874], [5.576994141030997, 51.89244457751885], [5.545284578083384, 51.887951103859166], [5.531369998545187, 51.89476196645026], [5.507656419332202, 51.88967501513741], [5.46391368478395, 51.88899675496236], [5.440709653554054, 51.882016327327506], [5.426011154041873, 51.87011851342355], [5.415232254399607, 51.85180548869727], [5.400651342883523, 51.837646807543166], [5.414879490411314, 51.82128378082015], [5.4278141699820335, 51.811788138369494], [5.465520720730616, 51.81136422576009], [5.488763947959211, 51.830270728139524], [5.505069483418057, 51.827953339208115], [5.517729790997882, 51.81927726113564], [5.540933822227779, 51.81630987286981], [5.555083577758172, 51.8266816013799], [5.5979640003350415, 51.828038121729996]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id486251a5-8a32-4687-92e7-5c8dfc028781",
      "Code": "1931",
      "Gemeentenaam": "Krimpenerwaard",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.877776720236871, 51.93802931345015], [4.859785756833961, 51.96849449964602], [4.8352098656495945, 51.986129264197245], [4.8178068422271725, 51.99977925022007], [4.8571204289224195, 52.005968374317376], [4.846890273261941, 52.01817705746822], [4.846890273261941, 52.01817705746822], [4.803539498700681, 52.01396619221481], [4.798718390860686, 52.02227487935914], [4.770693251790794, 52.01340097540227], [4.750977664445123, 52.01390967053355], [4.757327416234385, 52.00133359645455], [4.73772941688481, 52.00684446037681], [4.688695222512174, 51.9962466451417], [4.667842951204227, 51.978837967315485], [4.633507256343772, 51.970585801852415], [4.646049975927499, 51.95425103597003], [4.634761528302144, 51.93800105260952], [4.619475088809477, 51.93347931810921], [4.617711268868015, 51.93104888581529], [4.643031884027665, 51.912566296045256], [4.596780605562669, 51.90781847481992], [4.576320294241713, 51.90304239275397], [4.591763517729177, 51.8953271832628], [4.619553480806875, 51.88953371093427], [4.66815651919382, 51.88959023261553], [4.705588697951507, 51.89722065958481], [4.721933429409052, 51.89724892042544], [4.759875156149829, 51.91349890378594], [4.811731462428804, 51.92471845751485], [4.832505341739353, 51.93876409530645], [4.84787017322942, 51.94156191852852], [4.877776720236871, 51.93802931345015]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf1846c59-9a79-4f99-835f-eb9bc6a3f3f8",
      "Code": "1723",
      "Gemeentenaam": "Alphen-Chaam",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.844734493333488, 51.533305814831365], [4.844734493333488, 51.533305814831365], [4.8290952898525275, 51.52906668873732], [4.834621925669107, 51.53861885286924], [4.864254100685664, 51.55207101300768], [4.8629998287272915, 51.557271007683035], [4.830937501791388, 51.55037536257006], [4.770066115811608, 51.527371038299705], [4.747018868576508, 51.515360181033245], [4.760031940144626, 51.50236019434484], [4.7737505396893285, 51.505101495885654], [4.816709354263596, 51.49399498551926], [4.820942522123104, 51.48322760524039], [4.84187318542845, 51.480740651265215], [4.891299339788077, 51.478225436449414], [4.932415942423485, 51.459121108185585], [4.94464509401762, 51.45680371925417], [4.976825008949621, 51.46109936702947], [4.976825008949621, 51.46109936702947], [5.010455175833491, 51.45824502212615], [5.01653055563186, 51.47542761322734], [5.008338591903737, 51.47330805018032], [4.987995868578879, 51.483058040196624], [5.00038180416781, 51.49187542247223], [4.986741596620506, 51.49532324502873], [4.992189840439687, 51.51250583612992], [4.96255766542313, 51.52587321374648], [4.956639069619559, 51.5186666993866], [4.911054123132448, 51.510075403836005], [4.866213900620622, 51.5380536360567], [4.844734493333488, 51.533305814831365]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd50692ba-25cc-43c7-97d1-f2f762844703",
      "Code": "1783",
      "Gemeentenaam": "Westland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.309826699086196, 52.0156335818118], [4.3076317231590435, 52.0181487966276], [4.295520159561007, 52.014842278274244], [4.272668892319403, 52.03592486538196], [4.2482105891311335, 52.02521400678434], [4.23500153756952, 52.03928790541657], [4.212307054322713, 52.0307248707066], [4.19631508685346, 52.05567919298021], [4.184987443229406, 52.06144440446811], [4.143635664601803, 52.0317705218098], [4.1101622817127295, 52.00444228892352], [4.132504000971244, 51.99853577323248], [4.150965316358544, 51.98762708875047], [4.147280892480824, 51.981381442971916], [4.187495987146151, 51.966827110049024], [4.1923954869835445, 51.954816252782564], [4.2195191180833564, 51.94139235348476], [4.228299021791965, 51.94800539019147], [4.240332193392605, 51.94286191719736], [4.233943245604643, 51.95331842822934], [4.276510100191919, 51.96504667708953], [4.3031241833086415, 51.97991187925931], [4.26541763256006, 51.995737950010415], [4.309826699086196, 52.0156335818118]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id18c99ca8-b833-4a40-bb18-104779a1647e",
      "Code": "1950",
      "Gemeentenaam": "Westerwolde",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[7.189243155523108, 53.15488458916605], [7.17395671603044, 53.147932422371824], [7.145304440981361, 53.16076284401646], [7.14165921310234, 53.15553458850047], [7.101992862418801, 53.14321286198712], [7.080513455131667, 53.143693296277775], [7.0511948481047035, 53.13021287529871], [7.0297546368162696, 53.115093325563286], [7.04265012038829, 53.1016976871061], [7.015448097291079, 53.071769456882144], [7.034262176666671, 53.06464772504415], [7.065932543615584, 53.06727598322246], [7.080082299145976, 53.0614542500533], [7.068323499536232, 53.04333905121142], [7.081728531091342, 53.0444694848365], [7.081846119087439, 53.02638254683524], [7.100033062483844, 53.01643473093455], [7.072047119412652, 53.00377387433367], [7.069930535482897, 52.95301740456763], [7.063541587694935, 52.9309739488786], [7.0363003685990275, 52.929278298440984], [7.026854132912533, 52.91904787413402], [7.045589820290726, 52.91591092082443], [7.014781765313193, 52.872982703912065], [7.040259164467641, 52.872897921390184], [7.072164707408749, 52.84514577589451], [7.072047119412652, 52.83847621750654], [7.092742606725802, 52.83819360910027], [7.087255166907921, 52.84989359711984], [7.10438381833945, 52.86393923491144], [7.181521543779375, 52.94157176411372], [7.2129567347360934, 53.010867345331036], [7.199238135191392, 53.081378142695314], [7.2028049710730135, 53.11339767512567], [7.182893403733846, 53.12176288395125], [7.178973803863931, 53.1385780841243], [7.189243155523108, 53.15488458916605]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idfd70d2d6-e565-4f35-bd20-6119c50c0ef9",
      "Code": "0385",
      "Gemeentenaam": "Edam-Volendam",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.997951652248463, 52.49473961296076], [5.02480091135738, 52.48487657958194], [5.058783842229543, 52.49075483443235], [5.061018014155394, 52.48578092648201], [5.112991908430466, 52.49787656627035], [5.100723560837633, 52.50805046889605], [5.060430074174906, 52.578928657188484], [5.027035083283232, 52.61261557921583], [5.006574771962276, 52.61049601616881], [5.004889344018212, 52.597580812002285], [4.949858161844606, 52.5952916839115], [4.954953641675496, 52.58005909081356], [4.980548628826041, 52.58681343172341], [4.997167732274479, 52.57511344370385], [4.976472244961329, 52.56109606675287], [4.973493349060194, 52.54343304136102], [4.956991833607852, 52.52910479516314], [4.992268232437086, 52.519722196074994], [5.009240099873818, 52.52772001397242], [5.024487343367786, 52.52178523744076], [4.997951652248463, 52.49473961296076]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id0c5d4048-ca61-4641-982b-b62f53fb21ee",
      "Code": "0815",
      "Gemeentenaam": "Mill en Sint Hubert",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.79245454588022, 51.72056214482564], [5.768936946660731, 51.72335996804772], [5.748163067350182, 51.71799040832859], [5.713121844513142, 51.72641213883543], [5.699951988950228, 51.71146215414376], [5.734366075808081, 51.677633927913284], [5.7425580395362035, 51.650051347461364], [5.747692715365792, 51.63267093047578], [5.790298765951768, 51.64991004325823], [5.798647513674686, 51.660875249421494], [5.821616368912387, 51.66796872041886], [5.842821404208628, 51.67997957768532], [5.822988228866858, 51.69854694997724], [5.805310833453541, 51.70052520882113], [5.793238465854204, 51.710049112112415], [5.79245454588022, 51.72056214482564]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id6a769551-c21a-4d8a-8ea8-338d93d32826",
      "Code": "0765",
      "Gemeentenaam": "Pekela",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.9076982968671174, 53.038873838392355], [6.933567656008556, 53.020956465434864], [6.955791787270974, 53.013862994437496], [7.010117441467996, 53.073691194044784], [7.015448097291079, 53.071769456882144], [7.04265012038829, 53.1016976871061], [7.0297546368162696, 53.115093325563286], [6.987618938214684, 53.116110715825855], [6.979740542476154, 53.119191147454195], [6.965277218956168, 53.110825938628615], [6.9617495790732455, 53.11003463509106], [6.96061289511097, 53.095791171415065], [6.930588760107421, 53.07284336882597], [6.9244349883116545, 53.0577803407718], [6.933332480016362, 53.049612957830604], [6.905503320939966, 53.043847746342706], [6.9076982968671174, 53.038873838392355]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idfaa9b6f8-45e9-4ff7-a61d-b99476b3475f",
      "Code": "0312",
      "Gemeentenaam": "Bunnik",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.247434183968549, 52.05864658124604], [5.219134672907763, 52.059748754030494], [5.225014072712635, 52.06492048786523], [5.195146721703884, 52.07735525774109], [5.160183890864242, 52.0802943851663], [5.153050219100997, 52.056753104924034], [5.16073263484603, 52.0455052903545], [5.191540689823562, 52.043046597219956], [5.200908533512658, 52.031487913403524], [5.202006021476234, 52.01747053645255], [5.231324628503198, 52.00975532696139], [5.24320101610904, 51.99879012079813], [5.2647196193948735, 52.00319881193593], [5.277536710969495, 52.00009011946697], [5.279927666890144, 52.010716195542706], [5.263230171444306, 52.02436618156553], [5.27087339119064, 52.027390091512615], [5.25060905986318, 52.03959877466347], [5.247434183968549, 52.05864658124604]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id3d5d38cb-7568-414e-8983-5e6ddf610ff3",
      "Code": "0589",
      "Gemeentenaam": "Oudewater",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.868212896554278, 52.063450924152626], [4.829487249839518, 52.0498009381298], [4.8067143745953125, 52.03315530300052], [4.798718390860686, 52.02227487935914], [4.803539498700681, 52.01396619221481], [4.846890273261941, 52.01817705746822], [4.846890273261941, 52.01817705746822], [4.8571204289224195, 52.005968374317376], [4.8178068422271725, 51.99977925022007], [4.8352098656495945, 51.986129264197245], [4.910231007159767, 52.01111184731148], [4.920030006834554, 52.01000967452703], [4.90497874333408, 52.02648574461255], [4.926693326613409, 52.0299900888503], [4.911406887120741, 52.04019225231663], [4.906507387283347, 52.05347484741131], [4.895414919651488, 52.048246591895314], [4.868212896554278, 52.063450924152626]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ide18ed01d-ac52-487e-8ed8-7eb2dbb24203",
      "Code": "0180",
      "Gemeentenaam": "Staphorst",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.303060820934039, 52.59712863855225], [6.327793496113203, 52.658680749437785], [6.326970380140521, 52.66919378215101], [6.291929157303481, 52.66243944124117], [6.265511054180255, 52.66797856600405], [6.251988434629048, 52.66987204232606], [6.219808519697047, 52.685698113077166], [6.201425596307145, 52.684454636089576], [6.183160260913342, 52.67507203700143], [6.1630135175819785, 52.680074205792394], [6.1589763297159665, 52.692141584740114], [6.152391401934509, 52.68453941861146], [6.119584351023321, 52.66795030516343], [6.104297911530653, 52.6571264032033], [6.096850671777815, 52.63561990348618], [6.103945147542361, 52.62555904422298], [6.105865751478619, 52.60368515357771], [6.1205250549921, 52.597072116871], [6.131382346631765, 52.581246046119894], [6.147413510099717, 52.584411260270116], [6.179906993021312, 52.587943865348485], [6.20213112428373, 52.58494821624203], [6.303060820934039, 52.59712863855225]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb679a000-dc85-46e8-afeb-ed2dc2f6fe8f",
      "Code": "1963",
      "Gemeentenaam": "Hoeksche Waard",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.432470979015834, 51.83705332989], [4.422280019354056, 51.83021420645827], [4.397116188189202, 51.8312881184021], [4.3690910491193105, 51.81698813304485], [4.353334257642252, 51.819051174410625], [4.310179463074489, 51.80995118372874], [4.296774431519379, 51.80240553928134], [4.2656136125535555, 51.80398814635645], [4.2466427491831675, 51.78533599154265], [4.213247758291492, 51.7852794698614], [4.251699033015358, 51.75588819560935], [4.272472912325907, 51.735088216907904], [4.31519655090798, 51.71708606142853], [4.3726970809996315, 51.709596938662386], [4.4235342913124285, 51.709483895299876], [4.50043684076016, 51.69289478185185], [4.530421779765009, 51.69343173782376], [4.589294169811131, 51.703323032043194], [4.620415792778256, 51.714118673162695], [4.631508260410115, 51.7439903817054], [4.627745444534996, 51.77807295550152], [4.621238908750938, 51.8007946713656], [4.579534366135043, 51.80800118572548], [4.561112246746443, 51.81800552330743], [4.553625810994905, 51.82990333721138], [4.525483083928916, 51.829846815530125], [4.489109197136106, 51.83538594029301], [4.464376521956942, 51.831712031011506], [4.432470979015834, 51.83705332989]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id25f3f815-9582-4067-83fd-cb9aa62a93f4",
      "Code": "0513",
      "Gemeentenaam": "Gouda",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.750977664445123, 52.01390967053355], [4.7436872086870805, 52.022614009446656], [4.719856041477998, 52.02648574461255], [4.719856041477998, 52.035190083525656], [4.706019853937198, 52.04010746979475], [4.667294207222438, 52.025072702581205], [4.681835922739823, 52.0193074910933], [4.666588679245853, 52.012977062792864], [4.659455007482609, 52.005290114142326], [4.688695222512174, 51.9962466451417], [4.73772941688481, 52.00684446037681], [4.757327416234385, 52.00133359645455], [4.750977664445123, 52.01390967053355]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id7f110c9c-a472-404b-a5a3-f3ae075f687d",
      "Code": "0221",
      "Gemeentenaam": "Doesburg",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.109589371355039, 51.99644447102609], [6.159250701706861, 51.99975098937944], [6.164306985539051, 52.016594450393114], [6.16434618153775, 52.016594450393114], [6.164306985539051, 52.016594450393114], [6.16434618153775, 52.016594450393114], [6.176536137133185, 52.01922270857142], [6.175517041167008, 52.039344427097824], [6.149961250015162, 52.04205746779801], [6.12150495495958, 52.034624866713116], [6.1318526986161555, 52.02235966188102], [6.125032594842503, 52.00916184930822], [6.109589371355039, 51.99644447102609]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5f2683f6-b545-4985-9f7d-e9e5f29cda2b",
      "Code": "0355",
      "Gemeentenaam": "Zeist",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.192755765783235, 52.086087857494825], [5.195146721703884, 52.07735525774109], [5.225014072712635, 52.06492048786523], [5.219134672907763, 52.059748754030494], [5.247434183968549, 52.05864658124604], [5.290745762531109, 52.08656829178548], [5.320456329545063, 52.07031830842498], [5.332254325153508, 52.08416612033219], [5.298310590280044, 52.096431325164296], [5.322455325478721, 52.10191392824593], [5.31093170186117, 52.1083856607495], [5.306463358009467, 52.11027913707151], [5.282122642817296, 52.11205957003101], [5.2719316831555165, 52.1270378155633], [5.264092483415687, 52.125087817560036], [5.243161820110341, 52.17007907583817], [5.225014072712635, 52.165698645540985], [5.230932668516207, 52.11677913041571], [5.218233164937683, 52.113670437946745], [5.222309548802394, 52.10389218708981], [5.210825121183543, 52.10069871209897], [5.205533661359158, 52.084900902188494], [5.192755765783235, 52.086087857494825]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id8e8cab12-094c-49c4-9472-7d24c44c9cb8",
      "Code": "0392",
      "Gemeentenaam": "Haarlem",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.605717293266075, 52.363411486567244], [4.636642936239704, 52.36148974940461], [4.639661028139538, 52.338909337743665], [4.671605767079345, 52.350185413153824], [4.676466070918039, 52.35626149388862], [4.67321280302601, 52.374744083658655], [4.686931402570712, 52.387433201100166], [4.674545466981781, 52.39090928449728], [4.6686660671769085, 52.40139405636989], [4.6824630587190095, 52.41385708708638], [4.665804759271871, 52.42547229258406], [4.650753495771397, 52.428580985053024], [4.631665044404912, 52.41165274151747], [4.62159167273923, 52.387970157072075], [4.610812773096964, 52.38980711171283], [4.599524325471609, 52.37757016772135], [4.605717293266075, 52.363411486567244]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idadc3a7a8-56e5-4a33-b8a0-ba007bf5ec53",
      "Code": "0397",
      "Gemeentenaam": "Heemstede",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.639661028139538, 52.338909337743665], [4.636642936239704, 52.36148974940461], [4.605717293266075, 52.363411486567244], [4.590195677781212, 52.32833978334918], [4.611400713077451, 52.32220718093313], [4.6203374007808575, 52.33382238643081], [4.639661028139538, 52.338909337743665]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id8c5c639a-30f4-4fc6-b35e-cab5599aba6b",
      "Code": "1904",
      "Gemeentenaam": "Stichtse Vecht",
      "aantal": 5
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.107112508625594, 52.13319867881998], [5.120517540180703, 52.14554866617396], [5.094883357031459, 52.15535517787152], [5.118832112236639, 52.17239646476958], [5.115304472353716, 52.1798573266951], [5.0464371026393104, 52.16592473226601], [5.037892374922896, 52.194637746343], [5.036990866952816, 52.22479206329197], [5.036990866952816, 52.22479206329197], [5.057725550264665, 52.23536161768646], [5.034403931038671, 52.25291159971581], [5.023272267408113, 52.27150723284835], [5.0607436421645, 52.28521374055243], [5.06442806604222, 52.280748527733365], [5.059136606217835, 52.28919851908083], [5.042791874760289, 52.282500699852235], [5.030523527167456, 52.288491998065155], [5.021861211454944, 52.282642004055376], [5.01880392355641, 52.273513752532864], [5.01880392355641, 52.273513752532864], [5.007476279932356, 52.23171596924558], [4.980431040829943, 52.226855104657744], [4.966555657290444, 52.20003556690275], [4.9508772578107845, 52.19865078571203], [4.948564693887534, 52.18579210322676], [4.928613930549668, 52.16719647009422], [4.909643067179279, 52.16188343205635], [4.911759651109033, 52.144248667505124], [4.923557646717477, 52.147300838292836], [4.943900370042336, 52.127546510694586], [4.960989825475165, 52.13336824386374], [4.9700832971733675, 52.1224312985411], [4.9739245050458845, 52.1296660737416], [5.00269436809106, 52.14130954007992], [5.015393871669584, 52.12726390228831], [5.0326793070959095, 52.11677913041571], [5.0475737866015855, 52.129976942988506], [5.06121399414889, 52.122572602744235], [5.087161745287727, 52.13565737195452], [5.107112508625594, 52.13319867881998]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id2ba52cdd-3640-43e8-8785-1f23f8f853f1",
      "Code": "0505",
      "Gemeentenaam": "Dordrecht",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.671723355075443, 51.820859868210746], [4.645697211939208, 51.80743596891294], [4.621238908750938, 51.8007946713656], [4.627745444534996, 51.77807295550152], [4.631508260410115, 51.7439903817054], [4.620415792778256, 51.714118673162695], [4.645148467957419, 51.719064320272416], [4.676309286923242, 51.724914314282195], [4.7294590611592895, 51.750716461774616], [4.744784696650656, 51.76349036173801], [4.75525002830333, 51.78160556057989], [4.773554559695833, 51.793333809440085], [4.797189746911419, 51.79977728110303], [4.84598876529186, 51.79875989084046], [4.884636020009221, 51.81647943791357], [4.811417894439211, 51.81865552264185], [4.7674007879000655, 51.81580117773852], [4.748743492519271, 51.822103345198336], [4.729655041152785, 51.82215986687959], [4.671723355075443, 51.820859868210746]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id15902631-54a2-4c44-9260-a6dc1ec3eb70",
      "Code": "0153",
      "Gemeentenaam": "Enschede",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.889746529462908, 52.1612051718813], [6.90805106085541, 52.175957330688576], [6.951245051421873, 52.18104428200143], [6.974096318663477, 52.205405126621876], [6.981112402430625, 52.22075076308232], [6.965904354935355, 52.23041597057674], [6.9730380266986, 52.24853116941863], [6.969000838832588, 52.26740941095744], [6.939172683822535, 52.283857220202336], [6.912127444720122, 52.285496348958695], [6.88320079768015, 52.283178960027286], [6.868345514173171, 52.272948535720325], [6.840477159098077, 52.27631157575493], [6.842554547029131, 52.25390072913775], [6.81954649579273, 52.243670304830786], [6.813745487985257, 52.22948336283605], [6.77443190129001, 52.23847031015543], [6.7558921939053125, 52.21738772304771], [6.766318329559287, 52.20317252021235], [6.766788681543676, 52.191076880424006], [6.7707866734109885, 52.18833557888319], [6.7707866734109885, 52.18833557888319], [6.805592720255834, 52.16660299244105], [6.8279736355130485, 52.171011683578854], [6.889746529462908, 52.1612051718813]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id6ebcb939-b9b8-4700-a061-32b7b8a3e372",
      "Code": "0553",
      "Gemeentenaam": "Lisse",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.57275345836009, 52.271252885282706], [4.542533343363046, 52.2866550434244], [4.513528304325676, 52.255002901922204], [4.5265805718924925, 52.247259431590415], [4.531440875731187, 52.23236596858], [4.531440875731187, 52.23236596858], [4.553939378984499, 52.222192065954296], [4.562954458685303, 52.234768140033296], [4.57275345836009, 52.271252885282706]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id13b8e39d-9e31-459a-a547-04a83104aff2",
      "Code": "0085",
      "Gemeentenaam": "Ooststellingwerf",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.24724571878645, 52.923343521909324], [6.2565743664768485, 52.92763916968462], [6.302982428936641, 52.92498265066568], [6.333280935931084, 52.90635875669251], [6.369027686744708, 52.92198700155922], [6.393446793934277, 52.93283916435998], [6.427625704799937, 52.971810863584565], [6.413279969276047, 52.985517371288644], [6.362521150960649, 53.03395645212326], [6.367812610785034, 53.06736076574434], [6.33206585997141, 53.07527380111989], [6.2814246296521095, 53.06419555159412], [6.2805231216820285, 53.058204253381206], [6.212870827927297, 53.03624558021405], [6.205423588174458, 53.03794123065167], [6.202209516281128, 52.99032171419523], [6.158623565727674, 52.97585216379422], [6.1284818427280285, 52.953836968945815], [6.092970267906599, 52.94230654597001], [6.0848566961758745, 52.93628698691647], [6.110530075323817, 52.913254401805496], [6.14455220219468, 52.928063082294024], [6.2005632843357645, 52.94301306698569], [6.213615551902581, 52.925802215043866], [6.24724571878645, 52.923343521909324]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id020ed3c1-a791-450f-97e0-245e38c2af5a",
      "Code": "0677",
      "Gemeentenaam": "Hulst",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[3.963216482589618, 51.422014624442376], [3.9244908358748587, 51.37804075642682], [3.9425601912751667, 51.36484294385402], [3.957062710793852, 51.3648146830134], [3.9617270346390505, 51.33248428133615], [3.9536526589070258, 51.3076995241063], [3.978894882069278, 51.30080387899332], [3.9822265419587057, 51.2491148014866], [4.005704945179496, 51.2418800262861], [4.036552196155727, 51.24566697893011], [4.04055018802304, 51.24131480947356], [4.061833615316678, 51.244564806145654], [4.0785311107625155, 51.25355175346503], [4.166134167855114, 51.29289084361777], [4.236804553509681, 51.34975165495922], [4.218108062130186, 51.36591685579785], [4.209053786430683, 51.38575596591798], [4.197882926801426, 51.38702770374619], [4.146653756501637, 51.37168206728575], [4.102558257965094, 51.366849463538536], [4.114944193554026, 51.3910124822746], [4.048075819773277, 51.38988204864952], [4.0197763087124905, 51.420177669801625], [3.963216482589618, 51.422014624442376]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idba00f53a-e668-4201-b013-8658b9165718",
      "Code": "0938",
      "Gemeentenaam": "Meerssen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.770935942594388, 50.92793034776113], [5.748555027337174, 50.93589990481793], [5.746007287421729, 50.943417288424705], [5.714846468455905, 50.90845862856915], [5.733386175840602, 50.87474344570118], [5.7626655868688665, 50.86651954107873], [5.777677654370642, 50.88373039302056], [5.799823393635661, 50.88568039102381], [5.7965701257436315, 50.907469499147204], [5.801704801573219, 50.914139057535166], [5.774032426491621, 50.9106064524568], [5.754747995131639, 50.90063037571548], [5.7755218744421875, 50.92631947984539], [5.770935942594388, 50.92793034776113]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id281888a4-54b0-46db-a842-5c685ff8f074",
      "Code": "0299",
      "Gemeentenaam": "Zevenaar",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.063494876884839, 51.8654554747201], [6.089560216019773, 51.852596792234834], [6.108766255382356, 51.84790549269076], [6.13577229848607, 51.847170710834455], [6.166541157464902, 51.84072723917151], [6.167011509449292, 51.861612000394835], [6.14455220219468, 51.8697511224954], [6.13714415844054, 51.88580327997152], [6.103474795557971, 51.89247283835948], [6.117898923079258, 51.901657611563245], [6.12565973082169, 51.898209789006756], [6.157369293769301, 51.90510543411973], [6.167913017419373, 51.90095109054757], [6.091441623957332, 51.938707573625194], [6.090383331992455, 51.9678445003116], [6.122328070932262, 51.97149014875248], [6.144669790190777, 51.98050535691248], [6.160465777666534, 51.98104231288439], [6.161445677634013, 51.989040130781824], [6.161445677634013, 51.989040130781824], [6.159250701706861, 51.99975098937944], [6.109589371355039, 51.99644447102609], [6.083563228218804, 51.99554012412602], [6.076468752454257, 52.010659673861454], [6.064004424867928, 52.01501184331801], [6.048012457398674, 52.00978358780202], [6.033235565889095, 51.99720751372302], [6.011991334594157, 51.995653167488534], [6.0019571589271745, 51.980646661115614], [6.0017219829349795, 51.97753796864665], [6.0218295302676434, 51.978216228821694], [6.034293857853973, 51.97134884454934], [6.046797381439001, 51.98059013943436], [6.068864728706622, 51.98039231354997], [6.060829548973297, 51.97448579785893], [6.06345568088614, 51.94927712801968], [6.037468733748604, 51.91395107723597], [6.0152837984848855, 51.91694672634243], [5.987062679421497, 51.91330107790155], [6.014539074509601, 51.90126195979447], [6.02931596601918, 51.8817054580806], [6.046287833455912, 51.8709098169611], [6.063494876884839, 51.8654554747201]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ideeacc050-610f-4885-8046-3c40c3adcd72",
      "Code": "0798",
      "Gemeentenaam": "Hilvarenbeek",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.224426132732148, 51.517140613992744], [5.190129633870392, 51.50741888481707], [5.171001986505207, 51.51055583812666], [5.130198951859393, 51.53031016572491], [5.117969800265258, 51.54574058470723], [5.109817032535835, 51.539381895566166], [5.100174816855844, 51.53138407766873], [5.096020040993734, 51.50990583879224], [5.088180841253904, 51.511290619982965], [5.062742638098157, 51.49286455189418], [5.068269273914737, 51.485347168287404], [5.051571778468899, 51.487127601246904], [5.049729566530039, 51.471103704611416], [5.078969781559604, 51.47152761722082], [5.104564768710149, 51.43134070184927], [5.102017028794704, 51.42891026955535], [5.154853235041157, 51.42891026955535], [5.154853235041157, 51.42891026955535], [5.191031141840472, 51.430210268224194], [5.191031141840472, 51.43023852906482], [5.209806025217365, 51.46576240573292], [5.220467336863534, 51.47294065925217], [5.22846332059816, 51.498686285063336], [5.247120615978956, 51.49888411094772], [5.251236195842366, 51.50962323038597], [5.224426132732148, 51.517140613992744]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1f57f868-eca4-49b9-956d-74860e49d8e5",
      "Code": "1892",
      "Gemeentenaam": "Zuidplas",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.584002709986746, 51.96535754633643], [4.619475088809477, 51.93347931810921], [4.634761528302144, 51.93800105260952], [4.646049975927499, 51.95425103597003], [4.633507256343772, 51.970585801852415], [4.667842951204227, 51.978837967315485], [4.688695222512174, 51.9962466451417], [4.659455007482609, 52.005290114142326], [4.666588679245853, 52.012977062792864], [4.6673334032211375, 52.02269879196854], [4.648636911841644, 52.02057922892152], [4.636760524235801, 52.01167706412402], [4.624727352635162, 52.014729234911734], [4.591097185751292, 52.03507704016315], [4.610930361093062, 52.04869876534535], [4.6074419172088374, 52.06551396551839], [4.565031846616358, 52.058561798724156], [4.554997670949375, 52.00625098272364], [4.54649213923166, 51.99175317148201], [4.5538609869871, 51.97750970780602], [4.547668019192635, 51.97281840826194], [4.571891146388709, 51.97185753968063], [4.578946426154555, 51.98985969516001], [4.5943504536433215, 51.99426838629781], [4.593723317664136, 51.976096665774676], [4.6017976933961595, 51.9721401480869], [4.584002709986746, 51.96535754633643]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id91f8be77-3331-4b9d-a806-2e7fe4588858",
      "Code": "0096",
      "Gemeentenaam": "Vlieland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.147484387285718, 53.25133883822589], [5.162222082796598, 53.30528878298277], [5.102056224793404, 53.32295180837462], [5.087083353290328, 53.32306485173713], [5.02711347528063, 53.31393660021462], [4.907683267244321, 53.25959100368896], [4.8406189134700774, 53.232347553324566], [4.818394782207659, 53.214288876163934], [5.050944642489712, 53.14326938366837], [5.09578486500154, 53.08711509334259], [5.163241178762775, 53.10757594195651], [5.132825083772236, 53.19738889346901], [5.147484387285718, 53.25133883822589]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id661a468a-7b84-4036-a160-952a5af9a1f5",
      "Code": "1742",
      "Gemeentenaam": "Rijssen-Holten",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.553993604605994, 52.28332026423042], [6.553170488633311, 52.29968329095343], [6.5450961129012875, 52.31836370660786], [6.533141333298047, 52.316639795329614], [6.524870977572526, 52.325683264330245], [6.499981518398566, 52.32356370128322], [6.468193563453556, 52.3264745678678], [6.460903107695515, 52.32005935704548], [6.4217463049950645, 52.325683264330245], [6.356014615176591, 52.31822240240472], [6.32653922415483, 52.301633288956694], [6.32881259207938, 52.281228962024024], [6.376710102489741, 52.25876159372559], [6.38184477831933, 52.246100737124706], [6.416415649171979, 52.24217248027756], [6.4296247007335925, 52.25166812272822], [6.485243822887686, 52.27461592531731], [6.51726695382489, 52.28303765582415], [6.553993604605994, 52.28332026423042]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id24538acd-b7d0-4d3f-8d5e-b0cface17b01",
      "Code": "0168",
      "Gemeentenaam": "Losser",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.981112402430625, 52.22075076308232], [7.003493317687839, 52.228579015935985], [7.019171717167499, 52.225046410857615], [7.061268219770385, 52.23471161835204], [7.065775759620788, 52.241239872536866], [7.042375748397395, 52.25613333554728], [7.032067200739519, 52.27167679789211], [7.026462172925541, 52.29196808146227], [7.047432032229585, 52.31519849245764], [7.056211935938195, 52.33794846916235], [7.07212551141005, 52.35188106359144], [7.072203903407448, 52.37279408565539], [7.007765681546046, 52.363835399176644], [6.970921442768846, 52.37985929581214], [6.9637485750069015, 52.3659832230643], [6.9637485750069015, 52.3659832230643], [6.97025511079096, 52.34877237112247], [6.9592018391578, 52.34569193949414], [6.953596811343822, 52.333963690633944], [6.93752645187717, 52.332833257008865], [6.93431237998384, 52.322715876064414], [6.950147563458296, 52.3193528360298], [6.950382739450491, 52.308218064822775], [6.935684239938311, 52.290809386996564], [6.939172683822535, 52.283857220202336], [6.969000838832588, 52.26740941095744], [6.9730380266986, 52.24853116941863], [6.965904354935355, 52.23041597057674], [6.981112402430625, 52.22075076308232]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id9b27cc4a-78f6-4cd3-8c7c-2d3d64012a46",
      "Code": "0715",
      "Gemeentenaam": "Terneuzen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.005704945179496, 51.2418800262861], [3.9822265419587057, 51.2491148014866], [3.978894882069278, 51.30080387899332], [3.9536526589070258, 51.3076995241063], [3.9617270346390505, 51.33248428133615], [3.957062710793852, 51.3648146830134], [3.9425601912751667, 51.36484294385402], [3.9244908358748587, 51.37804075642682], [3.8082355037331816, 51.35574295317214], [3.775506844819392, 51.3921711767403], [3.738035470063005, 51.39460160903422], [3.6914706236084154, 51.39762551898131], [3.6938223835303647, 51.352464695659414], [3.647257537075775, 51.35006252420612], [3.644161053178542, 51.341838619583676], [3.657958044720643, 51.333360367395585], [3.666189204447464, 51.31982342473527], [3.6841801678503736, 51.32117994508536], [3.7124012869137615, 51.31578212452561], [3.703582187206453, 51.309932130515826], [3.7066394751049865, 51.28918867349564], [3.693939971526462, 51.2760473826041], [3.755712865476321, 51.269349563375506], [3.7954576081572586, 51.256066968280834], [3.7894998163549882, 51.245893065655125], [3.789656600349785, 51.21582353122803], [3.7992988160297756, 51.21087788411831], [3.826931995112676, 51.209351798724455], [3.8362998388017724, 51.21378875070289], [3.8595822620290674, 51.21082136243706], [3.8885481050677386, 51.223030045587905], [3.8901551410144037, 51.21387353322477], [3.877612421430676, 51.20802353921499], [3.8863139331418872, 51.20019528636132], [3.918611436069986, 51.20776919164935], [3.915985304157143, 51.2146365759217], [3.9294295317109516, 51.22026048320647], [3.9359752634937095, 51.211895274380886], [3.957885826766534, 51.21576700954678], [3.9646275385427874, 51.22410395753173], [3.978934078067977, 51.22537569535994], [3.986224533826019, 51.23413655595431], [4.005704945179496, 51.2418800262861]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idfed006fa-646f-48e9-882d-e7b0f8138c07",
      "Code": "1695",
      "Gemeentenaam": "Noord-Beveland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[3.7079721390607574, 51.598729660882796], [3.6895500196721573, 51.601527484104864], [3.6545087968351178, 51.596101402704484], [3.6314615496000178, 51.59646879363264], [3.6338133095219667, 51.58830141069144], [3.6531369368806477, 51.56846230057131], [3.6710887042848577, 51.56382752270849], [3.6946846955017456, 51.550177536685666], [3.696370123445809, 51.535171030312746], [3.6975460034067837, 51.524488432555756], [3.713616362873435, 51.530366687406165], [3.74379728187178, 51.547690582710494], [3.7682947810587484, 51.55277753402335], [3.7929882602392127, 51.54271667476015], [3.8344968228616114, 51.55303188158899], [3.852487786264521, 51.54319710905081], [3.8709491016518207, 51.54192537122259], [3.8992486127126065, 51.55026231920755], [3.9224134479438035, 51.54672971412918], [3.937974259427366, 51.535764507965915], [3.9609431146650675, 51.55147753535451], [3.9368375754650904, 51.55653622582673], [3.924765207865753, 51.60785791240531], [3.8790234773838455, 51.59367097041057], [3.848764166388102, 51.60599269692393], [3.8011410279686357, 51.60664269625835], [3.7694314650210234, 51.60082096308919], [3.722553050576841, 51.59728835801082], [3.7079721390607574, 51.598729660882796]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf596dfe9-0af9-4e60-815c-5143713dc301",
      "Code": "0141",
      "Gemeentenaam": "Almelo",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.698626839805855, 52.39373536855998], [6.6761283365525435, 52.39613754001327], [6.664173556949303, 52.38952450330656], [6.6517484253616725, 52.398709276510324], [6.59883382711782, 52.38364624845615], [6.6155705185623574, 52.362083227057774], [6.5998137270853, 52.33910716362805], [6.619019766447883, 52.32613543778027], [6.6047524229213925, 52.31223110419181], [6.631797662023805, 52.30177459315983], [6.62607504621373, 52.28996156177776], [6.657510237170447, 52.29485068720622], [6.690944424060822, 52.30838762986654], [6.704584631608126, 52.3221789200925], [6.704584631608126, 52.3221789200925], [6.720850971068273, 52.341198465834445], [6.709758503436413, 52.34343107224398], [6.720576599077379, 52.35233323704147], [6.713482123312833, 52.376496255777525], [6.7052901595847105, 52.37813538453389], [6.698626839805855, 52.39373536855998]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id423e4b47-40ea-44d7-bb62-621b5ddd6a81",
      "Code": "1924",
      "Gemeentenaam": "Goeree-Overflakkee",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.039844660046455, 51.84211202036223], [4.035219532199956, 51.858588090447746], [3.9555732628432843, 51.85765548270706], [3.9531431109239366, 51.850025055737774], [3.8603661820030504, 51.82837725181752], [3.7736646328805317, 51.78152077805801], [3.826226467136091, 51.765836011510046], [3.8474315024323307, 51.75340124163418], [3.8758877974879136, 51.747692551827534], [3.8861571491470905, 51.74935994142452], [3.9050496205200806, 51.764620795363086], [3.940326019349315, 51.77380556856685], [3.958944118731411, 51.77213817896986], [3.974504930214973, 51.7638012309849], [4.01334816492583, 51.759025148918944], [4.01887480074241, 51.74271864387719], [4.03502355220646, 51.73019909147944], [4.036708980150523, 51.71103824153436], [4.0478014477823825, 51.694364345564445], [4.098089914113391, 51.69046434955793], [4.123096961283449, 51.68574478917322], [4.151827628329925, 51.68523609404194], [4.202704034641421, 51.66076220605898], [4.242801541310651, 51.647055698354905], [4.275020652241351, 51.64377744084218], [4.33220761434341, 51.653668735061615], [4.361839789359967, 51.66296655162789], [4.379438792775885, 51.683596965285574], [4.4235342913124285, 51.709483895299876], [4.3726970809996315, 51.709596938662386], [4.31519655090798, 51.71708606142853], [4.272472912325907, 51.735088216907904], [4.251699033015358, 51.75588819560935], [4.213247758291492, 51.7852794698614], [4.1926306629757395, 51.79110120303055], [4.175188443554618, 51.79175120236497], [4.141950236657739, 51.807040317144164], [4.121568317334182, 51.8068707521004], [4.106752229825903, 51.81266422442893], [4.070456735030491, 51.81927726113564], [4.049486875726446, 51.83123159672085], [4.039844660046455, 51.84211202036223]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idcb3017cc-526a-4cf7-adad-68e341eee115",
      "Code": "0501",
      "Gemeentenaam": "Brielle",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.144889936560175, 51.93141627674344], [4.152885920294802, 51.92180759093027], [4.135365308876282, 51.906377171947945], [4.1603331600476405, 51.88334458683697], [4.15527687621545, 51.8815924147181], [4.160137180054145, 51.86703808179521], [4.1863201071851766, 51.86245982561364], [4.175619599540308, 51.85547939797878], [4.185261815220299, 51.84971418649088], [4.2393914894238245, 51.872972858326875], [4.2159130862030345, 51.89894457086306], [4.159784416065852, 51.92774236746193], [4.144889936560175, 51.93141627674344]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id27a9dcad-81a5-4130-a080-a85e58f0b09e",
      "Code": "0597",
      "Gemeentenaam": "Ridderkerk",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.619553480806875, 51.88953371093427], [4.591763517729177, 51.8953271832628], [4.576320294241713, 51.90304239275397], [4.568912250487574, 51.87805980963973], [4.5493926431353975, 51.87401850943007], [4.5710680304160265, 51.8471141891532], [4.600151461450796, 51.83872071948699], [4.604894177293392, 51.848385926981415], [4.627314288549306, 51.8546598336006], [4.636525348243606, 51.84965766480963], [4.647029875894978, 51.856722874966366], [4.635271076285234, 51.86972286165477], [4.626373584580526, 51.880659806977405], [4.619553480806875, 51.88953371093427]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id0fe934c5-5f1d-4f33-87a6-d9eaa7f01a0e",
      "Code": "0010",
      "Gemeentenaam": "Delfzijl",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.9113435247461386, 53.24300189024093], [6.928432980178968, 53.23695407034676], [6.9425043437119625, 53.24204102165962], [6.9522249513893515, 53.25651057206063], [6.995458137954513, 53.2669670830926], [7.013213925365228, 53.26685403973009], [7.021837045079041, 53.253232314547894], [7.041591828423412, 53.259308395282694], [7.067539579562249, 53.24238015174714], [7.085295366972964, 53.25489970414489], [7.113477290037652, 53.26286926120169], [7.134878305327388, 53.279684461374735], [7.134251169348201, 53.2878235834753], [7.100425022470835, 53.30998008252684], [7.101248138443518, 53.33027136609701], [7.061738571754775, 53.324053981159075], [7.019250109164897, 53.32430832872472], [6.995340549958415, 53.33182571233149], [6.993694318013052, 53.34875395586704], [6.9520289713958565, 53.39402782255144], [6.93203901205929, 53.43848212485766], [6.911774680731829, 53.45942340776224], [6.890922409423882, 53.4078191127774], [6.872853054023574, 53.407960416980536], [6.843691230991407, 53.42240170654092], [6.792462060691619, 53.403608247523984], [6.777175621198951, 53.39795607939859], [6.811628904055503, 53.3600300312772], [6.822407803697769, 53.360482204727234], [6.824955543613214, 53.34705830542942], [6.834284191303611, 53.34329961362604], [6.866816870223905, 53.34180178907281], [6.885395773607302, 53.34513656826679], [6.8819465257217765, 53.32487354553726], [6.8873947695409585, 53.2978844427385], [6.88731637754356, 53.27917576624345], [6.909109352820288, 53.27897794035906], [6.9113435247461386, 53.24300189024093]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb45d0b09-9c85-4929-b7dc-bb0c38bbff6e",
      "Code": "0512",
      "Gemeentenaam": "Gorinchem",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.998696376223746, 51.85228592298793], [4.959304397531101, 51.86288373822305], [4.938412930224455, 51.86361852007935], [4.942724490081361, 51.844796800221786], [4.924851114674549, 51.83970984890893], [4.926967698604303, 51.82829246929564], [5.00038180416781, 51.82094465073263], [5.026368751305346, 51.81885334852623], [5.031425035137536, 51.841094630099654], [4.999284316204234, 51.8445989743374], [4.998696376223746, 51.85228592298793]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id4d7557f2-fbab-48ec-9d9b-09d68b03ea32",
      "Code": "1966",
      "Gemeentenaam": "Het Hogeland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.5082518741240865, 53.25758448400445], [6.552582548652825, 53.262162740186014], [6.5857423635523045, 53.26154100169222], [6.586330303532792, 53.25583231188558], [6.619294138438777, 53.24944536190388], [6.636030829883314, 53.25139535990714], [6.625839870221535, 53.26620404039567], [6.654060989284922, 53.30865182301738], [6.637677061828677, 53.31464312123029], [6.619842882420565, 53.314417034505276], [6.595815735217986, 53.3471430879513], [6.6277604741577925, 53.352286560945416], [6.6309353500524235, 53.36265828945551], [6.665192652915481, 53.36692567639018], [6.69701980385919, 53.362912637021154], [6.730258010756069, 53.38145174847244], [6.748523346149872, 53.39515825617652], [6.778625873150819, 53.41078650104323], [6.792462060691619, 53.403608247523984], [6.843691230991407, 53.42240170654092], [6.872853054023574, 53.407960416980536], [6.890922409423882, 53.4078191127774], [6.911774680731829, 53.45942340776224], [6.890922409423882, 53.46513209756889], [6.857605810529606, 53.46874948516914], [6.820095239774519, 53.49373206828338], [6.749268070125156, 53.525695079032474], [6.6659765728894635, 53.5612472165412], [6.63712831784689, 53.57642328795788], [6.612591622661222, 53.56429938732891], [6.428605604767415, 53.566023298607156], [6.352526171292366, 53.53971245598345], [6.3521342113053745, 53.5217385613447], [6.382275934305021, 53.52151247461968], [6.3970136298159, 53.507890749437486], [6.381648798325834, 53.49455163266156], [6.351585467323586, 53.497038586636734], [6.350409587362612, 53.4462821168707], [6.194017552553007, 53.413301715859035], [6.167952213418072, 53.39074956503871], [6.178574329065541, 53.364834374183786], [6.217574347771195, 53.35785394654892], [6.232429631278173, 53.34344091782917], [6.2556728585067685, 53.34838656493889], [6.286990461467388, 53.341377876463405], [6.313878916575005, 53.32832136809375], [6.316309068494352, 53.319758333383774], [6.355426675196103, 53.313851817692736], [6.367577434792839, 53.321623548865155], [6.401717149659799, 53.319193116571235], [6.414142281247429, 53.32772789044058], [6.429311132743999, 53.32843441145625], [6.442245812314718, 53.31715833604609], [6.454239787916659, 53.32894310658754], [6.474935275229809, 53.323912676955935], [6.504214686258074, 53.29573661885085], [6.502137298327019, 53.27931707044659], [6.5082518741240865, 53.25758448400445]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id2f1a8454-546a-42d2-b79d-36077766f01f",
      "Code": "1509",
      "Gemeentenaam": "Oude IJsselstreek",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.527261933493174, 51.96603580651147], [6.494807646570278, 51.970585801852415], [6.467840799465264, 51.978216228821694], [6.447576468137804, 51.96970971579298], [6.416062885183687, 51.97262058237756], [6.403559361598658, 51.95741625012025], [6.3613844669983735, 51.923248893802246], [6.333241739932385, 51.92539671768989], [6.320934196340852, 51.935824967881246], [6.30576534484428, 51.938820616987705], [6.28965578937893, 51.92536845684927], [6.311683940647852, 51.92056411394268], [6.316152284499555, 51.91273586108902], [6.3060397168351745, 51.906405432788574], [6.3322618399649055, 51.893264141897035], [6.324226660231581, 51.88891197244048], [6.33163470398572, 51.87480981296763], [6.3245794242198725, 51.8690163406391], [6.299023633068027, 51.86782938533277], [6.306196500829971, 51.84906418715646], [6.34727390746668, 51.850675055072195], [6.358248787102442, 51.847255493356336], [6.363540246926827, 51.83507507104611], [6.382236738306322, 51.83479246263984], [6.407478961468573, 51.82809464341125], [6.402422677636383, 51.84321419314668], [6.407988509451663, 51.854235920991194], [6.386861866152821, 51.86435330193565], [6.392388501969402, 51.87401850943007], [6.412339265307268, 51.871079382004865], [6.432368420642534, 51.8593793939853], [6.451182500018125, 51.865229387995086], [6.464391551579738, 51.85528157209439], [6.464352355581039, 51.855648963022546], [6.464352355581039, 51.855648963022546], [6.484067942926711, 51.87822937468349], [6.472740299302657, 51.907648909776164], [6.488653874774512, 51.91287716529215], [6.5048810182359595, 51.945998870506955], [6.517462933818386, 51.94792060766959], [6.532827765308453, 51.96236189722997], [6.527261933493174, 51.96603580651147]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id793cb0ff-fa22-4e1d-8dbe-fd5df88ae2bb",
      "Code": "0171",
      "Gemeentenaam": "Noordoostpolder",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.795159069790461, 52.806513206757444], [5.7843801701481965, 52.81747841292071], [5.748790203329368, 52.8396914336535], [5.724684664129391, 52.8439870814288], [5.729584163966785, 52.83372839628121], [5.709633400628918, 52.834830569065666], [5.660285638266689, 52.83124144230604], [5.631358991226717, 52.803065384200956], [5.377251331660132, 52.76480020599204], [5.590673544576999, 52.67628725314838], [5.594553948448215, 52.68329594162387], [5.609644407947387, 52.68032855335804], [5.643117790836461, 52.68244811640506], [5.655386138429295, 52.665943785478916], [5.642804222846868, 52.66057422575979], [5.648879602645236, 52.64955249791527], [5.627674567348997, 52.63683511963314], [5.648526838656944, 52.61693948783176], [5.663382122163922, 52.6114286239095], [5.72382235215801, 52.61128731970636], [5.72378315615931, 52.607698192946735], [5.777952026361535, 52.60752862790297], [5.837216376394649, 52.60733080201859], [5.840508840285377, 52.61041123364693], [5.9054566101298684, 52.61922861592254], [5.915647569791647, 52.61351992611589], [5.932697829225777, 52.614932968147244], [5.955274724476487, 52.62485252320731], [5.981026495621828, 52.6283003457638], [6.017282794418541, 52.643222069614836], [5.999527007007827, 52.65463944922813], [5.97079633996135, 52.665180742781985], [5.933089789212769, 52.671256823516785], [5.933873709186752, 52.67552421045146], [5.965152116148673, 52.69358288761209], [5.951159144613076, 52.711924173178986], [5.942536024899264, 52.715004604807326], [5.922585261561396, 52.75069804651918], [5.879665642985827, 52.77325019733951], [5.849680703980979, 52.78475235947468], [5.818794257006049, 52.78469583779343], [5.795159069790461, 52.806513206757444]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5cdccfe9-c6ef-45ea-aefc-0e9c2469248d",
      "Code": "0200",
      "Gemeentenaam": "Apeldoorn",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.049266729357047, 52.211311642312914], [6.049266729357047, 52.211311642312914], [6.0469149694350985, 52.22137250157611], [6.033431545882591, 52.2240855422763], [6.024847622167478, 52.2492376904343], [6.036410441783726, 52.26853984458252], [6.028218478055605, 52.276594184161205], [5.988983283357756, 52.27410723018603], [5.985730015465727, 52.28566591400246], [5.9738928238585824, 52.27320288328597], [5.936225469108701, 52.27441809943293], [5.879587250988429, 52.26497897866352], [5.860890759608935, 52.25579420545976], [5.850817387943254, 52.26870940962628], [5.821420388918892, 52.27266592731405], [5.749221359315059, 52.268285497016876], [5.761450510909194, 52.24830508269361], [5.726370092073455, 52.242511610365085], [5.741656531566123, 52.21987467702288], [5.7274283840383315, 52.21930946021034], [5.730760043927759, 52.20859860161272], [5.750593219269529, 52.19373339944294], [5.788574142009004, 52.19653122266501], [5.811934957233698, 52.184887756326695], [5.801939977565414, 52.17737037271993], [5.8096615893091474, 52.16668777496293], [5.809857569302643, 52.15142692102437], [5.859558095653164, 52.14874214116481], [5.864731967481452, 52.125568251850694], [5.883467654859645, 52.10635088022436], [5.911727969921732, 52.10024653864893], [5.951472712602669, 52.099907408561414], [5.946102860780886, 52.07789221371301], [5.955941056454373, 52.07334221837206], [5.990472731308323, 52.07916395154122], [6.008855654698224, 52.07402047854711], [6.034058681861778, 52.09572480414862], [6.0358225018032385, 52.109459572693325], [6.051108941295907, 52.1242117315006], [6.069648648680605, 52.13130520249797], [6.076076792467266, 52.14393779825822], [6.0645139728510165, 52.15671169822161], [6.059810453007119, 52.17621167825422], [6.0493843173531445, 52.18466166960168], [6.058242613059153, 52.19593774501184], [6.049266729357047, 52.211311642312914]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd33395fe-9145-461e-bce0-50f7ff4e8d0c",
      "Code": "0717",
      "Gemeentenaam": "Veere",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[3.696370123445809, 51.535171030312746], [3.6946846955017456, 51.550177536685666], [3.6710887042848577, 51.56382752270849], [3.6531369368806477, 51.56846230057131], [3.6338133095219667, 51.58830141069144], [3.6314615496000178, 51.59646879363264], [3.6545087968351178, 51.596101402704484], [3.6895500196721573, 51.601527484104864], [3.7079721390607574, 51.598729660882796], [3.7488927617026695, 51.65033395586764], [3.6113540022673543, 51.65036221670826], [3.570903731609832, 51.60474921993634], [3.485926806430076, 51.57363403440605], [3.484554946475606, 51.56419491363664], [3.4346584401315887, 51.54223624046949], [3.432581052200534, 51.52598625710898], [3.4504936236060453, 51.51307105294246], [3.4860443944261736, 51.49732976471324], [3.502428321882418, 51.48642108023123], [3.52539717712012, 51.46225806149518], [3.552755984212126, 51.47096240040828], [3.5645539798205697, 51.470425444436366], [3.5869740910764834, 51.47924282671198], [3.5752936834641367, 51.50662758127951], [3.5788605193457594, 51.512421053608044], [3.5788605193457594, 51.512421053608044], [3.596616306756474, 51.52245365203061], [3.589796202982822, 51.53180799027814], [3.6131570182075152, 51.535142769472124], [3.6171158140761293, 51.52525147525268], [3.658859552690723, 51.51926017703977], [3.680848507960946, 51.53494494358773], [3.696370123445809, 51.535171030312746]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id9fd1332b-a150-44b9-82a5-fdfa16669e4b",
      "Code": "0971",
      "Gemeentenaam": "Stein",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.788103790024615, 50.94861728310007], [5.782145998222344, 50.985412897596376], [5.78924047398689, 51.00081505573807], [5.774816346465603, 51.00414983493206], [5.787241478053234, 51.01915634130498], [5.773405290512434, 51.018986776261215], [5.7676434787036595, 50.999741143794246], [5.749887691292944, 50.98253029185243], [5.736365071741738, 50.97792377483023], [5.72013792828029, 50.96240857332603], [5.734170095814585, 50.955456406531795], [5.746242463413923, 50.9616455306291], [5.758118851019766, 50.95073684614709], [5.746007287421729, 50.943417288424705], [5.748555027337174, 50.93589990481793], [5.770935942594388, 50.92793034776113], [5.779951022295192, 50.94533902558734], [5.788103790024615, 50.94861728310007]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id8b8269ee-45da-4e22-9d4e-e7117c4f2215",
      "Code": "1771",
      "Gemeentenaam": "Geldrop-Mierlo",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.5486946299702105, 51.43467548104326], [5.52521622674942, 51.427977661814666], [5.525804166729907, 51.404690729138046], [5.566724789371819, 51.40559507603811], [5.594044400465126, 51.41723854237642], [5.63900221097305, 51.422466797892405], [5.6440584948052415, 51.44086460514056], [5.6564836263928715, 51.45654937168853], [5.619365015624776, 51.44965372657555], [5.584715752774729, 51.46050588937631], [5.566176045390032, 51.44148634363435], [5.5486946299702105, 51.43467548104326]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idc292b4cc-ad8f-436c-aea0-477e6c0d16ad",
      "Code": "0450",
      "Gemeentenaam": "Uitgeest",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.720365589461087, 52.49496569968577], [4.731536449090345, 52.496322220035864], [4.752780680385284, 52.51059394455248], [4.7525063083943895, 52.52124828146885], [4.782491247399238, 52.519580891871854], [4.777748531556641, 52.53373957302597], [4.755289224302029, 52.53574609271048], [4.718876141510519, 52.55162868514284], [4.694535426318348, 52.544196084057944], [4.695750502278021, 52.52673088455048], [4.694378642323551, 52.50782438217104], [4.720365589461087, 52.49496569968577]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id71955057-661d-4934-9246-c2a6b9e7d815",
      "Code": "0090",
      "Gemeentenaam": "Smallingerland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.943476728868044, 53.121621579748115], [5.949669696662509, 53.10489116209695], [5.9316003412622, 53.1105998519036], [5.882017402907777, 53.10692594262209], [5.882918910877857, 53.089884655724035], [5.882918910877857, 53.089884655724035], [5.8788033310144465, 53.08657813737068], [5.878764135015747, 53.08657813737068], [5.8788033310144465, 53.08657813737068], [5.878764135015747, 53.08657813737068], [5.874648555152337, 53.085080312817446], [5.871512875256405, 53.074199889176064], [5.895422434462886, 53.07886292787951], [5.927563153396188, 53.078382493588855], [5.93254104523098, 53.08120857765155], [5.982907903559387, 53.077308581645035], [6.002466706910263, 53.08064336083901], [6.024416466181787, 53.07335206395726], [6.089521020021074, 53.0710911967071], [6.10488585151114, 53.077732494254434], [6.124640634855512, 53.10093464440918], [6.185708000828786, 53.12922374587677], [6.1752426691761135, 53.135893304264734], [6.176732117126681, 53.15949110618825], [6.151999441947518, 53.150843288956395], [6.1481190380763024, 53.15782371659126], [6.121622542955677, 53.144993294946616], [6.105003439507238, 53.15180415753771], [6.085170264165468, 53.15898241105696], [6.011795354600661, 53.153951981425365], [5.974441567840371, 53.13462156643652], [5.943476728868044, 53.121621579748115]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ide53a7bbe-233c-458d-9bd8-101f7a921403",
      "Code": "0613",
      "Gemeentenaam": "Albrandswaard",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.432470979015834, 51.83705332989], [4.464376521956942, 51.831712031011506], [4.489109197136106, 51.83538594029301], [4.490128293102283, 51.851325054406615], [4.480407685424894, 51.86231852141051], [4.465238833928323, 51.86200765216361], [4.418164439490645, 51.872379380673706], [4.390413672411647, 51.870570686873585], [4.383515176640597, 51.85776852606956], [4.383671960635393, 51.84211202036223], [4.414166447623332, 51.84279028053727], [4.432470979015834, 51.83705332989]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5712d756-36c7-4abc-b041-7a6f1a053720",
      "Code": "0622",
      "Gemeentenaam": "Vlaardingen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.35066892973071, 51.95150973442921], [4.323858866620491, 51.9416467010504], [4.292619655657269, 51.92124237411773], [4.267573412488513, 51.90533152084475], [4.2879553318120704, 51.89854891909428], [4.3237020826256956, 51.8941684887971], [4.370619693068576, 51.89936848347246], [4.3605071254041965, 51.93867931278457], [4.35066892973071, 51.95150973442921]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb0183beb-875b-4f62-8fe1-2567aedba0b4",
      "Code": "1702",
      "Gemeentenaam": "Sint Anthonis",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.838235472360827, 51.566427520046176], [5.8708857392772185, 51.56264056740216], [5.877235491066481, 51.57815576890636], [5.931835517254395, 51.596864445401415], [5.949787284658607, 51.60780139072405], [5.939635520995527, 51.612436168586875], [5.925877725452125, 51.632077452822614], [5.896480726427763, 51.64448396185785], [5.87080734727982, 51.646518742382995], [5.875510867123718, 51.65290569236469], [5.855795279778047, 51.66220350893096], [5.859910859641457, 51.669918718422124], [5.842821404208628, 51.67997957768532], [5.821616368912387, 51.66796872041886], [5.798647513674686, 51.660875249421494], [5.790298765951768, 51.64991004325823], [5.747692715365792, 51.63267093047578], [5.7504756312734315, 51.622694853734465], [5.758628399002855, 51.59395357881684], [5.786692734071446, 51.59822096575151], [5.800568117610945, 51.57860794235639], [5.820205312959218, 51.568660126455704], [5.838235472360827, 51.566427520046176]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf97032f4-8bdf-492d-bbc3-7ca672ee6d7d",
      "Code": "1699",
      "Gemeentenaam": "Noordenveld",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.463450847610959, 53.200045412487945], [6.447694056133901, 53.196428024887695], [6.442872948293905, 53.18775194681522], [6.408145293446459, 53.1781997826833], [6.402697049627277, 53.16700848979502], [6.382628698293313, 53.14957155112818], [6.3444517955603414, 53.08714335418322], [6.315172384532077, 53.094038999296195], [6.305294992859891, 53.08118031681093], [6.33206585997141, 53.07527380111989], [6.367812610785034, 53.06736076574434], [6.362521150960649, 53.03395645212326], [6.413279969276047, 52.985517371288644], [6.488222718788821, 53.005413003090034], [6.513033785965383, 53.01055647608414], [6.495513174546863, 53.03090428133555], [6.505116194228155, 53.04636296115851], [6.513347353954976, 53.07227815201343], [6.490731262705567, 53.09689334419952], [6.480305127051594, 53.1207737545293], [6.512485041983595, 53.125606358276514], [6.510917202035628, 53.13069330958937], [6.539099125100317, 53.13253026423013], [6.533925253272029, 53.15180415753771], [6.537452893154953, 53.16483240506675], [6.513386549953675, 53.19693672001898], [6.482578494976144, 53.203719321769455], [6.463450847610959, 53.200045412487945]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id3e61926f-7075-43bd-ae3c-5ab6c8b7dbb2",
      "Code": "0209",
      "Gemeentenaam": "Beuningen",
      "aantal": 3
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.706654504727783, 51.893292402737664], [5.685018313445852, 51.8956380525097], [5.667850466015625, 51.86593590901076], [5.684822333452356, 51.84878157875019], [5.678119817674801, 51.84315767146543], [5.728721851995404, 51.83860767612448], [5.764742974799923, 51.832277247824045], [5.7750907184564975, 51.844259844249876], [5.787829418033721, 51.841207673462165], [5.8078585733689865, 51.851890271219155], [5.81738320105288, 51.849488099765864], [5.825692752777099, 51.86621851741703], [5.817069633063286, 51.87025981762668], [5.800097765626555, 51.87543155146142], [5.732249491878328, 51.88594458417465], [5.706654504727783, 51.893292402737664]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ida75ecffc-c728-454e-9ef0-351c9b956d7d",
      "Code": "0823",
      "Gemeentenaam": "Oirschot",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.191031141840472, 51.43023852906482], [5.209218085236878, 51.43651243568401], [5.223524624762067, 51.42509505607072], [5.23771357629116, 51.428571139467834], [5.2524904678007385, 51.43801026023724], [5.248414083936027, 51.44564068720652], [5.297291494313867, 51.453101549132036], [5.30309250212134, 51.45914936902621], [5.3338221651014734, 51.46853196811436], [5.356007100365192, 51.46231458317643], [5.369451327919, 51.46531023228289], [5.391205107197028, 51.471753703945836], [5.389950835238656, 51.48752325301568], [5.355889512369094, 51.49611454856628], [5.349382976585035, 51.51643409297707], [5.355693532375599, 51.52898190621544], [5.3686282119463185, 51.53186451195939], [5.356908608335273, 51.544723194444664], [5.332959853130093, 51.55113840526698], [5.308383961945726, 51.54596667143225], [5.273264347111288, 51.5528340557046], [5.253313583773421, 51.54031450330685], [5.243945740084325, 51.5257884312246], [5.234773876388723, 51.530988425899956], [5.224426132732148, 51.517140613992744], [5.251236195842366, 51.50962323038597], [5.247120615978956, 51.49888411094772], [5.22846332059816, 51.498686285063336], [5.220467336863534, 51.47294065925217], [5.209806025217365, 51.46576240573292], [5.191031141840472, 51.43023852906482]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id2f31a077-192d-46f8-9908-b5650de61b0c",
      "Code": "0173",
      "Gemeentenaam": "Oldenzaal",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.93752645187717, 52.332833257008865], [6.9309807200944125, 52.32947021697426], [6.900643017101271, 52.333454995502656], [6.877321397875277, 52.31223110419181], [6.861368626404723, 52.3063528493414], [6.859800786456757, 52.298637639850234], [6.912127444720122, 52.285496348958695], [6.939172683822535, 52.283857220202336], [6.935684239938311, 52.290809386996564], [6.950382739450491, 52.308218064822775], [6.950147563458296, 52.3193528360298], [6.93431237998384, 52.322715876064414], [6.93752645187717, 52.332833257008865]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id68824276-8b71-4fcd-81ab-5bc5bf23e02d",
      "Code": "0785",
      "Gemeentenaam": "Goirle",
      "aantal": 4
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.01653055563186, 51.47542761322734], [5.033149659080299, 51.48718412292816], [5.049729566530039, 51.471103704611416], [5.051571778468899, 51.487127601246904], [5.068269273914737, 51.485347168287404], [5.062742638098157, 51.49286455189418], [5.088180841253904, 51.511290619982965], [5.096020040993734, 51.50990583879224], [5.100174816855844, 51.53138407766873], [5.109817032535835, 51.539381895566166], [5.09206124512512, 51.53494494358773], [5.060312486178809, 51.53785581017231], [5.052277306445484, 51.529773209752996], [5.030484331168757, 51.52954712302798], [5.030484331168757, 51.52954712302798], [5.020606939496571, 51.53895798295676], [4.975453148995151, 51.5401449382631], [4.96255766542313, 51.52587321374648], [4.992189840439687, 51.51250583612992], [4.986741596620506, 51.49532324502873], [5.00038180416781, 51.49187542247223], [4.987995868578879, 51.483058040196624], [5.008338591903737, 51.47330805018032], [5.01653055563186, 51.47542761322734]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ide77d922d-7dfe-4a54-8255-0dd786e6a6c7",
      "Code": "0479",
      "Gemeentenaam": "Zaanstad",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.862686260737698, 52.42993750540312], [4.842931477393327, 52.45226356949843], [4.852495301075919, 52.47037876834031], [4.837091273587154, 52.47987441079097], [4.816826942259693, 52.482559190650534], [4.798757586859385, 52.4911222253605], [4.789860095154679, 52.519241761784336], [4.782491247399238, 52.519580891871854], [4.7525063083943895, 52.52124828146885], [4.752780680385284, 52.51059394455248], [4.731536449090345, 52.496322220035864], [4.720365589461087, 52.49496569968577], [4.7079796538721554, 52.48634614329455], [4.695240954294932, 52.46854181369956], [4.674859034971375, 52.455513566170524], [4.721972625407751, 52.433328806278354], [4.739218864835378, 52.431067939028196], [4.856062136957542, 52.416654910308445], [4.862686260737698, 52.42993750540312]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1cb1100c-ee43-463c-a5be-2d1cd66270de",
      "Code": "0502",
      "Gemeentenaam": "Capelle aan den IJssel",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.584002709986746, 51.96535754633643], [4.561543402732133, 51.95665320742332], [4.572792654358789, 51.943455394850524], [4.560602698763354, 51.9409119191941], [4.566246922576031, 51.92590541282118], [4.556918274885634, 51.91991411460826], [4.537555451528254, 51.91977281040513], [4.542141383376054, 51.90620760690418], [4.549902191118486, 51.90671630203547], [4.567657978529201, 51.90979673366381], [4.5815333620687, 51.92014020133328], [4.617711268868015, 51.93104888581529], [4.619475088809477, 51.93347931810921], [4.584002709986746, 51.96535754633643]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ida1dcf2d1-ca7e-4c4e-a5fd-fe55ed4dda5c",
      "Code": "0356",
      "Gemeentenaam": "Nieuwegein",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.077519529607736, 51.997461861288656], [5.100174816855844, 52.00302924689217], [5.119576836211923, 51.999920554423205], [5.128395935919231, 52.02479009417493], [5.121771812139076, 52.030442262300326], [5.126828095971266, 52.05491615028328], [5.111267284487703, 52.05833571199914], [5.104407984715352, 52.04994224233293], [5.097352704949506, 52.05949440646485], [5.070307465847092, 52.06178353455564], [5.064153694051326, 52.05146832772679], [5.062781834096856, 52.026824874700075], [5.077519529607736, 51.997461861288656]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id684e1f63-8c9d-4c9e-b60c-48f0a6589dd3",
      "Code": "1859",
      "Gemeentenaam": "Berkelland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.645045909584118, 52.174205158569706], [6.612160466675531, 52.16315516988456], [6.6063202628693585, 52.17307472494463], [6.589936335413114, 52.182485584873405], [6.555365464560464, 52.17725732935742], [6.5132297659588785, 52.18124210788582], [6.49241669064963, 52.17737037271993], [6.483754374937118, 52.15716387167164], [6.461451851677302, 52.15216170288067], [6.481049851026877, 52.142553017067506], [6.492181514657435, 52.12426825318185], [6.478541307110131, 52.10069871209897], [6.455219687884138, 52.10799000898072], [6.4239804769209155, 52.096911759454954], [6.400541269698824, 52.08379872940404], [6.4203744450405935, 52.04646615893582], [6.432681988632126, 52.040559643244784], [6.4385221924383, 52.025016180899954], [6.462196575652586, 52.0217096625466], [6.480069951059399, 52.03295747711613], [6.51730614982359, 52.042424858726164], [6.53898153710422, 52.025185745943716], [6.574297131932154, 52.03194008685356], [6.605497146896676, 52.05186397949557], [6.606124282875863, 52.065118313749615], [6.658960489122316, 52.06305527238385], [6.661782601028655, 52.05160963192993], [6.687965528159687, 52.04437485672942], [6.6946680439372415, 52.06980961329369], [6.735471078583055, 52.0746422170409], [6.7509143020705205, 52.08504220639163], [6.760556517750511, 52.11878565010022], [6.716265039220472, 52.11827695496894], [6.662409737007842, 52.13017476887289], [6.674403712609781, 52.14277910379252], [6.671268032713849, 52.165698645540985], [6.645045909584118, 52.174205158569706]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id156ce591-63e0-4af1-a44f-39537ca474c3",
      "Code": "1684",
      "Gemeentenaam": "Cuijk",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.864457595490558, 51.75766862856885], [5.849249547995289, 51.75933601816584], [5.790533941943963, 51.75351428499669], [5.786104794090958, 51.7443012509523], [5.796530929744932, 51.74017516822076], [5.798098769692898, 51.721325187522574], [5.79245454588022, 51.72056214482564], [5.793238465854204, 51.710049112112415], [5.805310833453541, 51.70052520882113], [5.822988228866858, 51.69854694997724], [5.842821404208628, 51.67997957768532], [5.859910859641457, 51.669918718422124], [5.899538014326296, 51.684925224795045], [5.8947952984837, 51.688457829873414], [5.933795317189354, 51.71615345368784], [5.919488777664164, 51.71767953908169], [5.892051578574759, 51.7228230120758], [5.885388258795904, 51.72830561515743], [5.880331974963713, 51.74854037704634], [5.864457595490558, 51.75766862856885]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5375a0fa-ec62-4450-80a1-9a2d6b8f63bc",
      "Code": "0687",
      "Gemeentenaam": "Middelburg",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[3.5788605193457594, 51.512421053608044], [3.5788605193457594, 51.512421053608044], [3.5752936834641367, 51.50662758127951], [3.5869740910764834, 51.47924282671198], [3.6216625499252304, 51.4754841349086], [3.6292273776741664, 51.48091021630897], [3.646238441109597, 51.47084935704577], [3.6668947324240486, 51.46960588005819], [3.703660579203851, 51.48226673665907], [3.6990354513573513, 51.49232759592227], [3.70554198714141, 51.50244497686672], [3.7111078189566893, 51.50671236380139], [3.7452475338236484, 51.512477575289296], [3.746932961767712, 51.51685800558647], [3.713616362873435, 51.530366687406165], [3.6975460034067837, 51.524488432555756], [3.696370123445809, 51.535171030312746], [3.680848507960946, 51.53494494358773], [3.658859552690723, 51.51926017703977], [3.6171158140761293, 51.52525147525268], [3.6131570182075152, 51.535142769472124], [3.589796202982822, 51.53180799027814], [3.596616306756474, 51.52245365203061], [3.5788605193457594, 51.512421053608044]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id78258fd3-8efc-4e2c-8c40-d37a3592b10b",
      "Code": "0331",
      "Gemeentenaam": "Lopik",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.062625050102059, 51.99124447635073], [5.042439110771998, 52.0056857659111], [5.03405116705038, 52.00384881127035], [5.020293371506978, 52.025637919393745], [4.995207932339522, 52.0217096625466], [4.954875249678097, 52.017329232249416], [4.920030006834554, 52.01000967452703], [4.910231007159767, 52.01111184731148], [4.8352098656495945, 51.986129264197245], [4.859785756833961, 51.96849449964602], [4.877776720236871, 51.93802931345015], [4.913523471050495, 51.942353222066075], [4.926301366626418, 51.95091625677605], [4.941548610120387, 51.96383146094257], [4.968397869229304, 51.95942276980476], [4.985957676646523, 51.9725640606963], [5.003007936080653, 51.97813144629981], [5.022370759438033, 51.9697379766336], [5.036128554981434, 51.97132058370872], [5.062625050102059, 51.99124447635073]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id7d501fbb-c0e4-4594-a480-7429a998baeb",
      "Code": "0415",
      "Gemeentenaam": "Landsmeer",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.898746579540916, 52.424483163162115], [4.931200866463811, 52.41170926319873], [4.947780773913552, 52.42157229657754], [4.9508772578107845, 52.437144019763], [4.948329517895339, 52.48400049352251], [4.92065714281374, 52.490443965185456], [4.906468191284648, 52.47981788910972], [4.893337531720433, 52.45732225997065], [4.898746579540916, 52.424483163162115]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id95c69a44-6cba-4e33-9bd8-f11f9d871eb3",
      "Code": "0873",
      "Gemeentenaam": "Woensdrecht",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.391080004389533, 51.4514906812163], [4.366974465189556, 51.456718936732294], [4.336519174200317, 51.45979936836063], [4.3279744464839025, 51.46423632033906], [4.311159363041967, 51.46016675928878], [4.2976759394894595, 51.46621457918295], [4.297715135488159, 51.457340675226085], [4.297715135488159, 51.457340675226085], [4.283173419970774, 51.43967764983423], [4.26541763256006, 51.43967764983423], [4.275843768214034, 51.425038534389465], [4.263732204615996, 51.41644723883886], [4.268396528461195, 51.383551620349074], [4.277411608162, 51.3760342367423], [4.3345201782666605, 51.377645104658036], [4.341340282040312, 51.35755164697227], [4.384534272606775, 51.35435817198142], [4.421848863368365, 51.3652385956228], [4.431687059041852, 51.37504510732036], [4.391628748371321, 51.408166812535164], [4.383671960635393, 51.42108201670169], [4.395195584252944, 51.42690374987084], [4.3966458362048115, 51.44202329960627], [4.379321204779788, 51.44679938167223], [4.391080004389533, 51.4514906812163]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id57401b90-4943-46e3-8e49-48b358ee0624",
      "Code": "0893",
      "Gemeentenaam": "Bergen (L)",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.048130045394772, 51.558457962989365], [6.078585336384011, 51.54726667010109], [6.1106084673212155, 51.54689927917294], [6.119466763027224, 51.53203407700315], [6.141102954309154, 51.51951452460541], [6.157643665760196, 51.513664530595626], [6.169206485376444, 51.50309497620114], [6.204051728219988, 51.5043101923481], [6.213380375910386, 51.50781453658585], [6.199936148356578, 51.527371038299705], [6.176888901121478, 51.53856233118798], [6.157016529781009, 51.56656882424931], [6.130559230659083, 51.58109489633157], [6.12150495495958, 51.59273836266988], [6.091441623957332, 51.60585139272079], [6.109393391361543, 51.64685787247052], [6.118094903072754, 51.65598612399303], [6.087874788075709, 51.659857859158926], [6.036645617775921, 51.672773063325444], [6.031942097932023, 51.67616436420068], [6.031746117938527, 51.66305133414977], [6.015362190482283, 51.66223176977159], [5.976597347768824, 51.64377744084218], [5.996195347118399, 51.63679701320732], [6.0202224943209774, 51.62170572431252], [6.026297874119345, 51.595564446732574], [6.03715516575901, 51.5862666301663], [6.037586321744701, 51.57018621184956], [6.048130045394772, 51.558457962989365]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ided8f08d0-c617-4e54-8495-24f4dbf99c4b",
      "Code": "0277",
      "Gemeentenaam": "Rozendaal",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.951511908601368, 51.99963794601693], [5.9698556359925705, 52.00192707410772], [5.9698556359925705, 52.00192707410772], [5.980869711627031, 52.01879879596202], [5.995803387131408, 52.026231397046914], [5.977969207723294, 52.054379194311366], [5.998351127046853, 52.05404006422385], [6.006072738790585, 52.066361790737204], [6.008855654698224, 52.07402047854711], [5.990472731308323, 52.07916395154122], [5.955941056454373, 52.07334221837206], [5.943280748874548, 52.06246179473068], [5.937087781080082, 52.04852920030159], [5.941399340936988, 52.01147923823964], [5.951511908601368, 51.99963794601693]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id138dd6be-4825-43a9-a920-6eef68f17e28",
      "Code": "0244",
      "Gemeentenaam": "Hattem",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.022652646240324, 52.44409618655723], [6.063338092890042, 52.45116139671397], [6.103553187555369, 52.45395921993604], [6.098653687717976, 52.47083094179034], [6.064474776852317, 52.48688309926646], [6.056243617125496, 52.49844178308289], [6.027865714067312, 52.50960481513054], [6.000781278966199, 52.50013743352051], [6.0279441060647105, 52.482417886447394], [6.0369591857655145, 52.47023746413718], [6.022652646240324, 52.44409618655723]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idbd8c721a-7589-49f4-aec4-9baac6229ca7",
      "Code": "0293",
      "Gemeentenaam": "Westervoort",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.0017219829349795, 51.97753796864665], [6.0019571589271745, 51.980646661115614], [5.990355143312225, 51.97440101533706], [5.965152116148673, 51.97154667043373], [5.951237536610474, 51.9632379832894], [5.955235528477788, 51.94874017204777], [5.965779252127859, 51.93876409530645], [5.9843189595125565, 51.943031482241125], [5.987768207398082, 51.96306841824564], [5.984005391522963, 51.97242275649317], [6.0017219829349795, 51.97753796864665]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1f1b043a-2676-4e5d-8594-b9f80fbde586",
      "Code": "0826",
      "Gemeentenaam": "Oosterhout",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.864254100685664, 51.57908837664705], [4.918501362885287, 51.6013579190611], [4.911877239105131, 51.615403556852705], [4.912857139072609, 51.63368832073835], [4.9328079024104765, 51.650701346795785], [4.925047094668045, 51.67299915005046], [4.91281794307391, 51.67658827681009], [4.880481244147112, 51.67421436619742], [4.843401829377717, 51.686027397579494], [4.842382733411538, 51.6796404475978], [4.781080191446069, 51.663899159368576], [4.794289243007682, 51.641742660317036], [4.7875083352327295, 51.63705136077296], [4.821334482110096, 51.62939267296305], [4.821334482110096, 51.62939267296305], [4.842696301401132, 51.61698616392781], [4.842617909403733, 51.5858427175569], [4.864254100685664, 51.57908837664705]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id07cc15cf-81e3-41c0-9d5c-ccd61d74204f",
      "Code": "0376",
      "Gemeentenaam": "Blaricum",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.335468397046839, 52.2902159093434], [5.315164869720679, 52.302396331653625], [5.30544426204329, 52.30762458716961], [5.280946762856321, 52.293805036103024], [5.227718596622877, 52.277131140133115], [5.210903513180941, 52.27735722685813], [5.203809037416395, 52.26712680255117], [5.225523620695724, 52.272920274879695], [5.244063328080422, 52.25466377183468], [5.265973891353246, 52.281935483039696], [5.3058362220302815, 52.27732896601751], [5.335468397046839, 52.2902159093434]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id728b5f4d-d610-48d6-8494-955161c5c43d",
      "Code": "0610",
      "Gemeentenaam": "Sliedrecht",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.803382714705885, 51.84635114645627], [4.756073144276012, 51.84496636526555], [4.742746504718301, 51.84100984757777], [4.729655041152785, 51.82215986687959], [4.748743492519271, 51.822103345198336], [4.7674007879000655, 51.81580117773852], [4.811417894439211, 51.81865552264185], [4.805068142649949, 51.8219620409952], [4.803382714705885, 51.84635114645627]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ide530f7de-887a-4b18-a75d-397afab91cce",
      "Code": "1674",
      "Gemeentenaam": "Roosendaal",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.317979466815619, 51.551223187788864], [4.307082979177256, 51.54345145661645], [4.342790533992181, 51.52638190887776], [4.352471945670871, 51.51428626908942], [4.349532245768435, 51.50349062796992], [4.358429737473141, 51.4924689001254], [4.372814668995729, 51.48772107890007], [4.361643809366472, 51.47636022096803], [4.366974465189556, 51.456718936732294], [4.391080004389533, 51.4514906812163], [4.442661938677613, 51.468701533158125], [4.486679045216758, 51.47734935038998], [4.5021614647029224, 51.51671670138334], [4.5143514202983575, 51.51790365668967], [4.523209716004366, 51.54254710971639], [4.498829804813495, 51.544779716125916], [4.500201664767965, 51.55854274551125], [4.457517222184591, 51.561453612095825], [4.443994602633385, 51.56908403906511], [4.441094098729647, 51.558486223829995], [4.375362408911174, 51.54373406502272], [4.317979466815619, 51.551223187788864]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idedc2842f-90e4-44e3-b2bb-f5242b56a6ee",
      "Code": "0983",
      "Gemeentenaam": "Venlo",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.213380375910386, 51.50781453658585], [6.204051728219988, 51.5043101923481], [6.169206485376444, 51.50309497620114], [6.1670899014466904, 51.48579934173744], [6.17814317307985, 51.464462407064076], [6.1574476857667, 51.44555590468464], [6.158349193736781, 51.42478418682382], [6.148981350047683, 51.40777116076639], [6.153057733912394, 51.39592986854369], [6.140789386319561, 51.39485595659986], [6.1352627505029815, 51.41610810875134], [6.116448671127389, 51.42099723417981], [6.077683828413931, 51.420177669801625], [6.07313709256483, 51.3957320426593], [6.090383331992455, 51.38911900595259], [6.077605436416532, 51.37818206062995], [6.09104966397034, 51.371597284763865], [6.099711979682853, 51.35709947352223], [6.1232687749010415, 51.34336470497753], [6.116213495135194, 51.323214725610505], [6.101946151608704, 51.30806691503445], [6.084699912181078, 51.29744083895871], [6.093558207887086, 51.295519101796074], [6.093558207887086, 51.295519101796074], [6.120054703007711, 51.28511911244535], [6.124758222851609, 51.277545207157324], [6.145140142175167, 51.29811909913376], [6.169363269371241, 51.32934732802656], [6.194252728545201, 51.33488645278944], [6.189901972689595, 51.33946470897101], [6.226393447478504, 51.360349470194336], [6.214438667875263, 51.389627701083874], [6.226667819469398, 51.40028203800024], [6.2052668041796615, 51.39954725614394], [6.220592439671029, 51.44665807746909], [6.2235713355721645, 51.47497543977731], [6.2127532399311995, 51.491310205659694], [6.213380375910386, 51.50781453658585]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id9d402ab6-3ba7-4456-874d-48007337f874",
      "Code": "0050",
      "Gemeentenaam": "Zeewolde",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.545166990087287, 52.29329634097174], [5.565862477400438, 52.332381083558836], [5.575661477075226, 52.350807151647615], [5.591143896561389, 52.36290279143596], [5.611643403881045, 52.35951149056072], [5.620736875579247, 52.36411800758292], [5.611917775871939, 52.3749984312243], [5.623010243503797, 52.40888317913603], [5.589066508630335, 52.41120056806744], [5.57726851302189, 52.40956143931108], [5.533016230490551, 52.384381030312454], [5.509498631271061, 52.39735275616023], [5.438789049617796, 52.44265488368526], [5.386188019363537, 52.41459186894268], [5.350754836539506, 52.40020710106355], [5.346364884685201, 52.39610927917264], [5.30125029018248, 52.381978858859156], [5.379211131595088, 52.31398327631068], [5.354008104431536, 52.30940502012911], [5.33350859711188, 52.314265884716946], [5.315164869720679, 52.302396331653625], [5.335468397046839, 52.2902159093434], [5.33954478091155, 52.28772895536823], [5.404649334750837, 52.249633342203076], [5.4768483643546695, 52.26240724216647], [5.533290602481445, 52.27275070983593], [5.545166990087287, 52.29329634097174]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id92095f0c-9baf-40d9-bf4a-67d6c9b75af1",
      "Code": "0757",
      "Gemeentenaam": "Boxtel",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.356908608335273, 51.544723194444664], [5.382660379480614, 51.54379058670397], [5.404218178765146, 51.54828406036366], [5.399789030912142, 51.572362296577836], [5.38144530352094, 51.58759488967577], [5.38054379555086, 51.602912265295586], [5.342837244802278, 51.60022748543602], [5.332019149161313, 51.60845139005847], [5.343425184782765, 51.61738181569659], [5.317712609636123, 51.634620928479045], [5.310970897859869, 51.63366005989773], [5.31649753367645, 51.61735355485597], [5.300466370208498, 51.60630356617082], [5.263661327429997, 51.60025574627665], [5.247238203975053, 51.58702967286323], [5.2461799120101755, 51.579512289256456], [5.273264347111288, 51.5528340557046], [5.308383961945726, 51.54596667143225], [5.332959853130093, 51.55113840526698], [5.356908608335273, 51.544723194444664]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idbc58956b-dd8f-4c5c-abdc-9aa3c673d627",
      "Code": "0603",
      "Gemeentenaam": "Rijswijk",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.3076317231590435, 52.0181487966276], [4.309826699086196, 52.0156335818118], [4.325975450550246, 52.01277923690847], [4.357802601493955, 52.026853135540705], [4.3460438018842105, 52.04400746580127], [4.352628729665668, 52.04909441711413], [4.34004681408324, 52.06181179539626], [4.2909342277132065, 52.04157703350735], [4.3076317231590435, 52.0181487966276]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id9c168d8f-077b-44f7-8edb-73ac1ed86664",
      "Code": "0388",
      "Gemeentenaam": "Enkhuizen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.25750755563423, 52.71619156011366], [5.259192983578293, 52.68629159073033], [5.268952787254381, 52.680272031676786], [5.287610082635177, 52.691661150449455], [5.301642250169472, 52.69242419314638], [5.361141776194781, 52.67572203633584], [5.377251331660132, 52.76480020599204], [5.337859352967486, 52.79594365236296], [5.281181938848516, 52.84062404139419], [5.211334669166632, 52.80040886518202], [5.274401031073563, 52.75064152483793], [5.254332679739599, 52.74702413723768], [5.25750755563423, 52.71619156011366]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf6e09409-dd19-411e-9522-727e42704761",
      "Code": "0384",
      "Gemeentenaam": "Diemen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.949858161844606, 52.33854194681551], [4.944723486015018, 52.32712456720222], [4.952680273750945, 52.32263109354253], [4.9752963650003545, 52.33057238975871], [4.989093356542455, 52.327972392421024], [4.9978732602510645, 52.31398327631068], [5.016138595644868, 52.324524569864536], [5.013042111747636, 52.330487607236826], [5.039969762853951, 52.341254987515704], [5.039068254883871, 52.354565843451], [4.998030044245861, 52.34215933441576], [4.973885309047185, 52.35496149521978], [4.949858161844606, 52.33854194681551]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idc5761d3f-ab6e-4e13-9049-2de9bf0cab1f",
      "Code": "0339",
      "Gemeentenaam": "Renswoude",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.550340861915575, 52.10541827248367], [5.5315267825399825, 52.102253058333446], [5.539170002286317, 52.09781610635502], [5.522668486833975, 52.07755308362548], [5.509694611264557, 52.07896612565683], [5.496132795714651, 52.07167482877507], [5.497857419657414, 52.05700745248968], [5.515691599065526, 52.05418136842698], [5.529331806612831, 52.04019225231663], [5.544657442104198, 52.04937702552039], [5.55790568966451, 52.04886833038911], [5.5627267975045065, 52.078287865481784], [5.554926793763375, 52.08659655262611], [5.550340861915575, 52.10541827248367]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id89abcc7e-3ae6-4f49-befd-ebf530d5fdf8",
      "Code": "0281",
      "Gemeentenaam": "Tiel",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.415232254399607, 51.85180548869727], [5.426011154041873, 51.87011851342355], [5.440709653554054, 51.882016327327506], [5.46391368478395, 51.88899675496236], [5.455525741062333, 51.90281630602895], [5.472458412500365, 51.90807282238556], [5.469675496592726, 51.91988585376764], [5.4533699611338795, 51.92276845951159], [5.435104625740076, 51.92067715730519], [5.411351850528391, 51.91205760091397], [5.399475462922549, 51.89837935405052], [5.353772928439341, 51.87805980963973], [5.3390352329284605, 51.874046770270695], [5.328295529284894, 51.85697722253201], [5.360083484229904, 51.85836200372273], [5.378427211621106, 51.863392433354335], [5.39524229506304, 51.85293592232235], [5.415232254399607, 51.85180548869727]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id3b23f38d-dab8-4330-ad84-97fd154b868e",
      "Code": "0626",
      "Gemeentenaam": "Voorschoten",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.4429755066672065, 52.145350840289574], [4.401153376055214, 52.111861744146616], [4.427885047168034, 52.10146175479589], [4.46449410995304, 52.12732042396957], [4.46539561792312, 52.14944866218048], [4.449599630447363, 52.14097040999239], [4.4429755066672065, 52.145350840289574]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id7ef37918-bb87-45c5-9f1d-8b422f6bbee3",
      "Code": "0400",
      "Gemeentenaam": "Den Helder",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.876248076287604, 53.02197385569743], [4.79166311109484, 52.98051520249767], [4.741021880775539, 52.980232594091405], [4.646206759922296, 52.94106306898243], [4.62947006847776, 52.88971312156323], [4.6939866823365595, 52.884484866047245], [4.770928427782989, 52.87863487203746], [4.794916378986869, 52.912576141630446], [4.8083214105419785, 52.914356574589945], [4.874993804329231, 52.89036312089765], [4.925831014642028, 52.96313478551209], [4.876248076287604, 53.02197385569743]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id87db6a6c-4461-47bd-b2b5-d2f104c4bc25",
      "Code": "0770",
      "Gemeentenaam": "Eersel",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.369451327919, 51.46531023228289], [5.356007100365192, 51.46231458317643], [5.3338221651014734, 51.46853196811436], [5.30309250212134, 51.45914936902621], [5.297291494313867, 51.453101549132036], [5.248414083936027, 51.44564068720652], [5.2524904678007385, 51.43801026023724], [5.23771357629116, 51.428571139467834], [5.281887466825101, 51.40437985989115], [5.307090493988654, 51.40630159705378], [5.310853309863772, 51.390701613027694], [5.289256314580541, 51.3889211800682], [5.275302539043643, 51.362723380807005], [5.285963850689813, 51.336327755661415], [5.263426151437802, 51.31928646876335], [5.292156818484278, 51.318240817660154], [5.316654317671246, 51.32338429065427], [5.324023165426686, 51.33290819394555], [5.347109608660485, 51.337458189286494], [5.342602068810083, 51.3526625215438], [5.3523618724861715, 51.36176251222568], [5.388892543273778, 51.376458149351706], [5.370979971868268, 51.39785160570632], [5.354360868419828, 51.408788551028955], [5.3236704014383935, 51.40618855369127], [5.319358841581487, 51.423795057401875], [5.339858348901142, 51.425547229520745], [5.356908608335273, 51.43820808612163], [5.356712628341777, 51.453610244263324], [5.369451327919, 51.46531023228289]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1b10c955-f73a-477b-9589-34000d99a496",
      "Code": "0840",
      "Gemeentenaam": "Rucphen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.591763517729177, 51.561029699486426], [4.533361479667445, 51.54924492894498], [4.536614747559474, 51.565777520711755], [4.509451920460964, 51.56857534393382], [4.500201664767965, 51.55854274551125], [4.498829804813495, 51.544779716125916], [4.523209716004366, 51.54254710971639], [4.5143514202983575, 51.51790365668967], [4.5021614647029224, 51.51671670138334], [4.486679045216758, 51.47734935038998], [4.538182587507441, 51.482408040862204], [4.548177567175724, 51.47330805018032], [4.556055962914252, 51.485544994171796], [4.5722831063757, 51.48266238842785], [4.576202706245615, 51.492553682647284], [4.589725325796822, 51.496736287060074], [4.579338386141547, 51.510725403170426], [4.616378604912244, 51.508097144992114], [4.625001724626056, 51.52109713168052], [4.638720324170759, 51.524403650033875], [4.640092184125229, 51.54342319577582], [4.62480574463256, 51.55226883889206], [4.591763517729177, 51.561029699486426]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf6bd4256-700f-45ce-b088-3a6e8e4be256",
      "Code": "0294",
      "Gemeentenaam": "Winterswijk",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.687847940163589, 52.03985312222911], [6.6835755763053815, 52.0282096558908], [6.655628829232889, 52.01407923557731], [6.6526499333317535, 51.99754664381054], [6.6560599852185796, 51.97847057638734], [6.6560599852185796, 51.97847057638734], [6.638931333787051, 51.96255972311435], [6.629053942114865, 51.950096692397864], [6.632659973995187, 51.937605400840745], [6.632659973995187, 51.937605400840745], [6.658960489122316, 51.92904236613077], [6.668720292798405, 51.91386629471409], [6.684006732291072, 51.91756846483623], [6.7219876550305475, 51.8960619651191], [6.754010785967753, 51.91262281772651], [6.770041949435705, 51.91621194448613], [6.793990704640885, 51.935288011909336], [6.79889020447828, 51.95874450962972], [6.828522379494836, 51.96411406934884], [6.832441979364751, 51.9700488458805], [6.8266017755585775, 51.99353360444151], [6.811393728063308, 51.998083599782454], [6.752991690001576, 52.02840748177519], [6.714148455290719, 52.040050948113496], [6.687847940163589, 52.03985312222911]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id9785b05d-c390-455b-9f1e-7c15dec2a307",
      "Code": "0437",
      "Gemeentenaam": "Ouder-Amstel",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.909133519196191, 52.31825066324535], [4.907526483249525, 52.30629632766014], [4.878913404199146, 52.27925070318014], [4.879579736177032, 52.2668441941449], [4.870133500490537, 52.253278990643956], [4.91007422316497, 52.25243116542514], [4.92939785052365, 52.26834201869813], [4.926458150621214, 52.27978765915205], [4.95522801366639, 52.278318095439445], [4.929476242521049, 52.30742676128522], [4.944723486015018, 52.32712456720222], [4.949858161844606, 52.33854194681551], [4.912935531070008, 52.330515868077455], [4.909133519196191, 52.31825066324535]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id9c596c36-93f5-4071-bbb4-0711883b1e86",
      "Code": "0297",
      "Gemeentenaam": "Zaltbommel",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.12804317193094, 51.737603431723706], [5.165671330682123, 51.742916469761575], [5.185700486017389, 51.74192734033963], [5.184838174046007, 51.75388167592484], [5.1736673144167495, 51.76402731770992], [5.20772863728631, 51.769283834066535], [5.269932687221861, 51.77431426369814], [5.2665226353350345, 51.793192505236945], [5.28102515485372, 51.80189684415005], [5.281730682830304, 51.82119899829827], [5.212863313115899, 51.810035966250624], [5.176097466336096, 51.81647943791357], [5.1408994595042605, 51.8141055273009], [5.122242164123465, 51.81642291623231], [5.093197929087395, 51.8262576887705], [5.07410947772091, 51.8258337761611], [5.042635090765493, 51.81738378481363], [5.026368751305346, 51.81885334852623], [5.00038180416781, 51.82094465073263], [5.014492363699504, 51.80901857598805], [5.052355698442882, 51.79570772005275], [5.066975805957664, 51.78055990947669], [5.079988877525782, 51.7799381709829], [5.09943009288056, 51.78731425038654], [5.135098451696786, 51.77383382940748], [5.1427024754444215, 51.75520993543431], [5.126318547988177, 51.74500777196797], [5.12804317193094, 51.737603431723706]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id3f53690a-1798-4f39-ad2c-11bb184ecc38",
      "Code": "0060",
      "Gemeentenaam": "Ameland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.552849405832321, 53.47157556923184], [5.582912736834568, 53.458066887412144], [5.612819283842018, 53.42206257645339], [5.612270539860231, 53.318740943121206], [5.627243411363306, 53.32317789509964], [5.702695708859169, 53.36797132749338], [5.702891688852665, 53.39490390861088], [5.747967087356686, 53.39479086524837], [5.777873634364138, 53.376732188087736], [5.792885701865911, 53.376675666406484], [5.823145012861655, 53.394536517682724], [5.958763168360711, 53.42093214282831], [5.958998344352906, 53.43890603746706], [6.0044265068452205, 53.4566538453808], [6.00493605482831, 53.49257337381767], [5.959625480332093, 53.48381251322331], [5.83901939233481, 53.47533426103522], [5.703440432834452, 53.471292960825565], [5.61321124382901, 53.49395815500839], [5.552849405832321, 53.47157556923184]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idc6f95ca6-09ba-4d00-8916-b4642027c10e",
      "Code": "0383",
      "Gemeentenaam": "Castricum",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.672585667046824, 52.59091125361432], [4.655182643624402, 52.58291343571689], [4.6103816171112735, 52.5737004016725], [4.594076081652427, 52.575480834631996], [4.583336378008861, 52.5338808772291], [4.598662013500228, 52.531083054007034], [4.660003751464397, 52.53176131418208], [4.695750502278021, 52.52673088455048], [4.694535426318348, 52.544196084057944], [4.718876141510519, 52.55162868514284], [4.755289224302029, 52.53574609271048], [4.777748531556641, 52.53373957302597], [4.781628935427857, 52.55711128822447], [4.74509826464025, 52.56686127824077], [4.756465104263003, 52.591561252948736], [4.752153544406097, 52.59190038303626], [4.740002784809361, 52.578928657188484], [4.698337438192165, 52.58186778461369], [4.672585667046824, 52.59091125361432]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id49859ea6-ff21-43f2-b1e1-ef1fbbd2d797",
      "Code": "0865",
      "Gemeentenaam": "Vught",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.310970897859869, 51.63366005989773], [5.317712609636123, 51.634620928479045], [5.3191628615879925, 51.64996656493948], [5.303954814092722, 51.66553828812494], [5.319045273591895, 51.67037089187215], [5.298937726259231, 51.66712089520005], [5.288785962596151, 51.68164696728231], [5.246885439986761, 51.68317305267617], [5.22615075667491, 51.69004043694852], [5.223211056772474, 51.67379045358802], [5.204788937383874, 51.66983393590024], [5.242534684131154, 51.6494578698082], [5.246493479999769, 51.632755712997664], [5.277693494964292, 51.61919050949672], [5.304346774079713, 51.624927460143994], [5.310970897859869, 51.63366005989773]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id77936f3b-59ef-4e58-97ac-eac46dbc3b6f",
      "Code": "0222",
      "Gemeentenaam": "Doetinchem",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.30576534484428, 51.938820616987705], [6.320934196340852, 51.935824967881246], [6.333241739932385, 51.92539671768989], [6.3613844669983735, 51.923248893802246], [6.403559361598658, 51.95741625012025], [6.416062885183687, 51.97262058237756], [6.399169409744354, 51.98101405204376], [6.399169409744354, 51.98101405204376], [6.390389506035744, 51.96832493460226], [6.365304066868289, 51.96965319411172], [6.370046782710886, 51.97623796997781], [6.327715104115804, 51.97728362108101], [6.3356326958530325, 51.98564882990659], [6.319052788403292, 51.99418360377593], [6.2956527771799005, 51.988446653128655], [6.291889961304782, 51.993335778557125], [6.2497934587018955, 51.975955361571536], [6.228078875422566, 51.987796653794234], [6.229293951382241, 51.97677492594972], [6.205149216183564, 51.98025100934684], [6.160465777666534, 51.98104231288439], [6.144669790190777, 51.98050535691248], [6.163052713580678, 51.95535320875448], [6.204718060197874, 51.93667279310006], [6.20307182825251, 51.94215539618169], [6.226707015468097, 51.94464235015686], [6.259906026366276, 51.942974960559866], [6.302080920966561, 51.944133655025574], [6.30576534484428, 51.938820616987705]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id8bcff914-dc56-49d3-8eec-41858726618e",
      "Code": "1525",
      "Gemeentenaam": "Teylingen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.497575532855121, 52.18398340942664], [4.518349412165671, 52.18211819394526], [4.538143391508742, 52.180083413420114], [4.546766511222554, 52.19896165495893], [4.557153450877829, 52.19774643881197], [4.558446918834901, 52.21880076507906], [4.553939378984499, 52.222192065954296], [4.531440875731187, 52.23236596858], [4.531440875731187, 52.23236596858], [4.5265805718924925, 52.247259431590415], [4.513528304325676, 52.255002901922204], [4.466061949901006, 52.22498988917636], [4.464062953967349, 52.21597468101636], [4.455635814247032, 52.20701599453761], [4.463475013986862, 52.20020513194651], [4.491460957058054, 52.20368121534363], [4.489540353121797, 52.18169428133585], [4.497575532855121, 52.18398340942664]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id6131e4fb-f10e-4907-80e7-eff93ce45f25",
      "Code": "0786",
      "Gemeentenaam": "Grave",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.79245454588022, 51.72056214482564], [5.798098769692898, 51.721325187522574], [5.796530929744932, 51.74017516822076], [5.786104794090958, 51.7443012509523], [5.790533941943963, 51.75351428499669], [5.763723878833744, 51.7530055898654], [5.745223367447746, 51.759138192281455], [5.729740947961582, 51.772844699985534], [5.711240436575583, 51.77502078471381], [5.690858517252026, 51.759138192281455], [5.701911788885186, 51.755520804681204], [5.698109777011368, 51.73850777862377], [5.713121844513142, 51.72641213883543], [5.748163067350182, 51.71799040832859], [5.768936946660731, 51.72335996804772], [5.79245454588022, 51.72056214482564]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id68fdc661-c7b6-4884-a943-136f4c75abc4",
      "Code": "0273",
      "Gemeentenaam": "Putten",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.571114741226124, 52.28399852440547], [5.571114741226124, 52.28399852440547], [5.545166990087287, 52.29329634097174], [5.533290602481445, 52.27275070983593], [5.4768483643546695, 52.26240724216647], [5.483707664127021, 52.23923335285235], [5.506441343372527, 52.231602925883074], [5.51553481507073, 52.23417466238013], [5.549909705929885, 52.202324694993536], [5.605803200074871, 52.20483990980934], [5.633279595162975, 52.208174689003314], [5.6654987060936755, 52.22270076108558], [5.681255497570733, 52.22532901926389], [5.683646453491382, 52.240618134043075], [5.6765911737255355, 52.25039638490001], [5.6370424110380934, 52.272496362270296], [5.596513748383173, 52.27851592132384], [5.596513748383173, 52.27851592132384], [5.571114741226124, 52.28399852440547]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb445686c-6e06-4db4-9800-93e9d3cf77a8",
      "Code": "0928",
      "Gemeentenaam": "Kerkrade",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.017126010423745, 50.870476058766506], [6.0005852989727035, 50.857702158803114], [6.017949126396427, 50.84379782521465], [6.053891857203547, 50.85688259442494], [6.074156188531007, 50.84653912675547], [6.07725267242824, 50.860697807909574], [6.088070768069205, 50.872284752566635], [6.0753712644906805, 50.89054125561165], [6.079800412343685, 50.905773848709586], [6.042877781569086, 50.900404288990465], [6.031158177958041, 50.871578231550956], [6.017126010423745, 50.870476058766506]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id594a3079-3336-483e-96b4-b0190bff80bf",
      "Code": "1621",
      "Gemeentenaam": "Lansingerland",
      "aantal": 3
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.547668019192635, 51.97281840826194], [4.5538609869871, 51.97750970780602], [4.54649213923166, 51.99175317148201], [4.554997670949375, 52.00625098272364], [4.565031846616358, 52.058561798724156], [4.557192646876528, 52.06124657858372], [4.54512027927719, 52.04886833038911], [4.53500771161281, 52.04963137308604], [4.504709204618367, 52.03194008685356], [4.476723261547174, 52.031629217606664], [4.457164458196298, 52.022133575156], [4.461554410050604, 52.01263793270534], [4.447247870525414, 51.99240317081643], [4.4242398192890136, 51.97926187992489], [4.427885047168034, 51.976464056702824], [4.446699126543626, 51.962785809839374], [4.469001649803442, 51.98056187859373], [4.495262968931872, 51.967392326861564], [4.49581171291366, 51.97185753968063], [4.518584588157866, 51.960298855864195], [4.547668019192635, 51.97281840826194]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ideda38b09-5a58-42db-8a9a-e945a36c3cbe",
      "Code": "1883",
      "Gemeentenaam": "Sittard-Geleen",
      "aantal": 8
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.8770003150742856, 51.03204328463087], [5.8526204038834155, 51.02933024393068], [5.848622412016102, 51.04625848746623], [5.827338984722464, 51.047671529497585], [5.8196173729787315, 51.07259759093057], [5.809348021319554, 51.059145430792135], [5.799353041651271, 51.06007803853282], [5.774659562470807, 51.0629889051174], [5.770739962600892, 51.04919761489144], [5.758001263023669, 51.03365415254661], [5.772856546530646, 51.02743676760868], [5.773405290512434, 51.018986776261215], [5.787241478053234, 51.01915634130498], [5.774816346465603, 51.00414983493206], [5.78924047398689, 51.00081505573807], [5.782145998222344, 50.985412897596376], [5.788103790024615, 50.94861728310007], [5.802723897539398, 50.947599892837495], [5.811895761234998, 50.9551455372849], [5.837804316375136, 50.946384676690535], [5.839881704306191, 50.95019989017518], [5.852189247897725, 50.968032480610795], [5.873511871190061, 50.96280422509481], [5.89706866640825, 50.97487160404252], [5.905535002127267, 51.002171576088166], [5.878920919010544, 51.01782808179551], [5.8770003150742856, 51.03204328463087]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id6df2b7b2-3d1c-49c8-b333-9d5f3a636824",
      "Code": "1891",
      "Gemeentenaam": "Dantumadiel",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.019791338335287, 53.24091058803454], [6.0439752695326625, 53.24351058537222], [6.051853665271191, 53.26628882291755], [6.0543622091879365, 53.29087575426301], [6.073685836546618, 53.29240183965687], [6.073450660554423, 53.32487354553726], [6.022456666246829, 53.324025720318446], [6.021124002291058, 53.30884964890176], [5.990511927307022, 53.31012138672998], [5.975852623793541, 53.30692791173913], [5.972168199915821, 53.32108659289324], [5.963858648191601, 53.32286702585274], [5.922350085569201, 53.312636601545776], [5.897225450403047, 53.301247482773114], [5.906632490090843, 53.28785184431593], [5.882252578899972, 53.27677359479016], [5.92564254945993, 53.252214924285326], [5.943006376883654, 53.25043449132583], [5.955980252453072, 53.22805190554927], [5.983339059545078, 53.22983233850877], [6.019791338335287, 53.24091058803454]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "iddcfbb860-aeea-4297-bbe9-d46dee592cb1",
      "Code": "0772",
      "Gemeentenaam": "Eindhoven",
      "aantal": 7
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.5486946299702105, 51.43467548104326], [5.53258507450486, 51.45708632766044], [5.509028279286671, 51.469295010811294], [5.505461443405049, 51.48348195280603], [5.5114192352073195, 51.496934112944466], [5.46391368478395, 51.49699063462572], [5.442551865492915, 51.493938463838006], [5.414801098413916, 51.48529064660615], [5.401592046852302, 51.4859689067812], [5.391205107197028, 51.471753703945836], [5.369451327919, 51.46531023228289], [5.356712628341777, 51.453610244263324], [5.356908608335273, 51.43820808612163], [5.387363899324512, 51.43781243435285], [5.426677486019758, 51.43015374654294], [5.427265426000246, 51.4026559486129], [5.4362021137036525, 51.40497333754431], [5.497818223658715, 51.40426681652864], [5.5048735034245615, 51.4001407337971], [5.525804166729907, 51.404690729138046], [5.52521622674942, 51.427977661814666], [5.5486946299702105, 51.43467548104326]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb314d8bc-5c6b-4813-945c-4314fb6c8982",
      "Code": "0177",
      "Gemeentenaam": "Raalte",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.235369331180609, 52.31983327032046], [6.235134155188414, 52.31446371060134], [6.267235678123017, 52.30081372457851], [6.32653922415483, 52.301633288956694], [6.356014615176591, 52.31822240240472], [6.342374407629286, 52.33317238709639], [6.333516111923279, 52.351372368460154], [6.343079935605871, 52.370024523273955], [6.357033711142768, 52.37700495090881], [6.388390510102088, 52.37977451329026], [6.405166397545324, 52.415496215842744], [6.3903111140383455, 52.428157072443625], [6.3805905063609565, 52.429824462040614], [6.334417619893359, 52.42442664148086], [6.3144276605567935, 52.43301793703146], [6.2918115693073835, 52.434713587469076], [6.289930161369824, 52.44644183632927], [6.27864171374447, 52.44734618322933], [6.278249753757478, 52.45703965156438], [6.236153251154592, 52.46563094711498], [6.169951209351728, 52.468937465468336], [6.16250396959889, 52.47439180770934], [6.144160242207688, 52.46766572764012], [6.152469793931908, 52.46113747345529], [6.152469793931908, 52.46113747345529], [6.154899945851255, 52.453196177239114], [6.177437645103266, 52.43115272155008], [6.230940183327604, 52.42349403374017], [6.222199475617694, 52.40877013577352], [6.229842695364029, 52.389778850872204], [6.203973336222591, 52.38689624512825], [6.201347204309747, 52.37138104362405], [6.1894708167039045, 52.3757332130806], [6.196996448454142, 52.352107150316456], [6.222944199592979, 52.347246285728616], [6.235682899170202, 52.339898467165604], [6.235369331180609, 52.31983327032046]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd64d3c4e-e0b4-4e64-be0f-99639019bc72",
      "Code": "0917",
      "Gemeentenaam": "Heerlen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.923408377534079, 50.90441732835949], [5.969346088009482, 50.86007606941578], [5.9802425756478454, 50.84868695064311], [6.004230526851725, 50.83760870111735], [6.023710938205202, 50.81839132949101], [6.017949126396427, 50.84379782521465], [6.0005852989727035, 50.857702158803114], [6.017126010423745, 50.870476058766506], [6.0082677147177375, 50.88556734766131], [5.99662650310409, 50.89251951445554], [5.993412431210759, 50.91004123564426], [6.0116777666045635, 50.9264325232079], [5.9754998598052484, 50.92900425970495], [5.954882764489495, 50.933836863452164], [5.941869692921378, 50.92708252254232], [5.928464661366268, 50.93660642583361], [5.895500826460284, 50.920130355748086], [5.923408377534079, 50.90441732835949]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1485c41c-c39a-4733-ad12-917acb24a96d",
      "Code": "0748",
      "Gemeentenaam": "Bergen op Zoom",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.317979466815619, 51.551223187788864], [4.296225687537591, 51.553851445967176], [4.29861664345824, 51.55885361475815], [4.251777425012756, 51.570468820255826], [4.251777425012756, 51.570468820255826], [4.236138221531795, 51.55037536257006], [4.218931178102869, 51.50484714832001], [4.230337213724321, 51.4889080342064], [4.26541763256006, 51.43967764983423], [4.283173419970774, 51.43967764983423], [4.297715135488159, 51.457340675226085], [4.297715135488159, 51.457340675226085], [4.2976759394894595, 51.46621457918295], [4.311159363041967, 51.46016675928878], [4.3279744464839025, 51.46423632033906], [4.336519174200317, 51.45979936836063], [4.366974465189556, 51.456718936732294], [4.361643809366472, 51.47636022096803], [4.372814668995729, 51.48772107890007], [4.358429737473141, 51.4924689001254], [4.349532245768435, 51.50349062796992], [4.352471945670871, 51.51428626908942], [4.342790533992181, 51.52638190887776], [4.307082979177256, 51.54345145661645], [4.317979466815619, 51.551223187788864]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd6dfb43a-7a94-4d6b-a8bb-9e107ab03100",
      "Code": "0225",
      "Gemeentenaam": "Druten",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.609840387940883, 51.83629028719307], [5.609840387940883, 51.83626202635244], [5.609840387940883, 51.83629028719307], [5.64319618283386, 51.84499462610618], [5.636219295065411, 51.86737721188273], [5.667850466015625, 51.86593590901076], [5.685018313445852, 51.8956380525097], [5.628105723334688, 51.89939674431309], [5.5539076977971975, 51.90078152550381], [5.531369998545187, 51.89476196645026], [5.545284578083384, 51.887951103859166], [5.576994141030997, 51.89244457751885], [5.568449413314582, 51.876533724245874], [5.5537901098011, 51.87037286098919], [5.553045385825817, 51.86254460813552], [5.57726851302189, 51.864579388660665], [5.585029320764322, 51.85711852673514], [5.585029320764322, 51.83911637125577], [5.609840387940883, 51.83629028719307]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id749ef31f-500f-4b8c-93d5-451765d647a4",
      "Code": "0907",
      "Gemeentenaam": "Gennep",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.953275728542831, 51.74803168191506], [5.938302857039755, 51.74158821025211], [5.919488777664164, 51.71767953908169], [5.933795317189354, 51.71615345368784], [5.956176232446568, 51.70725128889035], [5.963741060195503, 51.68057305533849], [5.963466688204609, 51.657314383502495], [5.976597347768824, 51.64377744084218], [6.015362190482283, 51.66223176977159], [6.031746117938527, 51.66305133414977], [6.031942097932023, 51.67616436420068], [6.02606269812715, 51.70852302671856], [6.044955169500141, 51.71691649638477], [6.028963202030888, 51.72576213950101], [5.994196351184742, 51.73830995273938], [5.9551571364803895, 51.73811212685499], [5.953275728542831, 51.74803168191506]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id547c907f-a6e9-4922-ad5f-5c6ceec856d2",
      "Code": "1903",
      "Gemeentenaam": "Eijsden-Margraten",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.693798217154462, 50.81045003327483], [5.698305757004864, 50.77746963226316], [5.682078613543416, 50.75754573962115], [5.69940324496844, 50.755397915733504], [5.720255516276387, 50.7647239931404], [5.739187183648077, 50.75706530533049], [5.744909799458153, 50.76882181503131], [5.765801266764798, 50.78255658357602], [5.776658558404463, 50.78224571432912], [5.784458562145594, 50.76721094711557], [5.793238465854204, 50.77020659622203], [5.807466613381995, 50.75607617590855], [5.830670644611891, 50.758534869043096], [5.845055576134479, 50.76537399247482], [5.8358837124388785, 50.786682666307556], [5.821812348905883, 50.79623483043947], [5.819421392985236, 50.80525003859947], [5.839254568327005, 50.80759568837151], [5.864144027500965, 50.82333697660073], [5.859479703655766, 50.83368044427019], [5.836079692432374, 50.83594131152035], [5.823615364846044, 50.830345665076216], [5.821224408925396, 50.83876739558305], [5.801626409575821, 50.84987390594945], [5.780421374279582, 50.849449993340045], [5.757334931045783, 50.855299987349824], [5.746320855411321, 50.83732609271107], [5.7434595475062835, 50.821330456916215], [5.717315816373951, 50.81449133348449], [5.716963052385658, 50.80380873572749], [5.693798217154462, 50.81045003327483]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id556b0e7b-bb67-40bf-8031-20ebf1610948",
      "Code": "0313",
      "Gemeentenaam": "Bunschoten",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.33954478091155, 52.28772895536823], [5.3139497937610045, 52.251865948612604], [5.312264365816942, 52.232818142030034], [5.335468397046839, 52.22846597257348], [5.330529701210745, 52.21473120402877], [5.392733751146295, 52.20551816998438], [5.3955166670539345, 52.21913989516658], [5.404649334750837, 52.249633342203076], [5.33954478091155, 52.28772895536823]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5f75b91f-a991-40c3-92dd-25b5f7721dd0",
      "Code": "0335",
      "Gemeentenaam": "Montfoort",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.920030006834554, 52.01000967452703], [4.954875249678097, 52.017329232249416], [4.995207932339522, 52.0217096625466], [4.979960688845553, 52.0354444310913], [4.979960688845553, 52.0354444310913], [4.990308432502129, 52.05242919630811], [5.0102983918386945, 52.053729194976945], [5.0170792996136475, 52.06113353522122], [4.99948029619773, 52.06613570401219], [4.9567566576156565, 52.0659378781278], [4.936139562299904, 52.07992699423814], [4.903058139397822, 52.070600916831246], [4.873190788389071, 52.068735701349866], [4.868212896554278, 52.063450924152626], [4.895414919651488, 52.048246591895314], [4.906507387283347, 52.05347484741131], [4.911406887120741, 52.04019225231663], [4.926693326613409, 52.0299900888503], [4.90497874333408, 52.02648574461255], [4.920030006834554, 52.01000967452703]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id7e06da11-460d-4dbe-8e51-fbcf9f9d25fc",
      "Code": "0986",
      "Gemeentenaam": "Voerendaal",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.969346088009482, 50.86007606941578], [5.923408377534079, 50.90441732835949], [5.901537010259953, 50.89576951112764], [5.880567150955908, 50.88248691603297], [5.8616354835842195, 50.882430394351715], [5.8742957911640445, 50.857249985353086], [5.887975194710048, 50.847047821886754], [5.891267658600777, 50.84275217411145], [5.925015413480744, 50.848828254846254], [5.933168181210167, 50.83967174248311], [5.954804372492097, 50.845917388261675], [5.969346088009482, 50.86007606941578]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id528f0485-cce4-4295-9051-651fea4e2034",
      "Code": "0847",
      "Gemeentenaam": "Someren",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.65471980645141, 51.35387773769076], [5.672122829873832, 51.31510386435056], [5.770465590609998, 51.333812540845614], [5.74545854343994, 51.37111685047321], [5.740206279614254, 51.36978859096374], [5.7337389398288945, 51.3918603074934], [5.705557016764207, 51.40941028952275], [5.6939941971479575, 51.439253737224824], [5.672162025872531, 51.45776458783549], [5.6564836263928715, 51.45654937168853], [5.6440584948052415, 51.44086460514056], [5.63900221097305, 51.422466797892405], [5.638923818975652, 51.38917552763384], [5.65471980645141, 51.35387773769076]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id7510ff52-ac52-437c-8fc4-9e6e03f425a0",
      "Code": "0252",
      "Gemeentenaam": "Heumen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.790533941943963, 51.75351428499669], [5.849249547995289, 51.75933601816584], [5.864457595490558, 51.75766862856885], [5.867906843376083, 51.7755294798451], [5.893423438529229, 51.77784686877651], [5.87911689900404, 51.809527271119336], [5.840939996271068, 51.80720988218793], [5.810210333290936, 51.79059250789927], [5.800960077597936, 51.79514250324021], [5.780656550271777, 51.78420555791757], [5.745262563446445, 51.77863817231406], [5.729740947961582, 51.772844699985534], [5.745223367447746, 51.759138192281455], [5.763723878833744, 51.7530055898654], [5.790533941943963, 51.75351428499669]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id38240f72-d170-495f-8be5-3c8938c1470b",
      "Code": "0946",
      "Gemeentenaam": "Nederweert",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.7917882139023344, 51.237527856829544], [5.853443519856097, 51.24448002362377], [5.833806324507823, 51.274775644775886], [5.850660603948457, 51.291534323267676], [5.860733975614139, 51.31080821657527], [5.877823431046968, 51.316573428063165], [5.8521500518990255, 51.320699510794704], [5.832081700565061, 51.33805166693966], [5.840195272295785, 51.34686904921527], [5.770465590609998, 51.333812540845614], [5.672122829873832, 51.31510386435056], [5.643980102807843, 51.29057345468636], [5.6569539783772615, 51.2797212918856], [5.67451378579448, 51.277036512026044], [5.714023352483222, 51.283508244529614], [5.730328887942068, 51.28096476887319], [5.750201259282537, 51.261323484637444], [5.776776146400561, 51.25098001696798], [5.7917882139023344, 51.237527856829544]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ide6870e21-aabf-46b9-a229-5cfdb30c50fa",
      "Code": "0880",
      "Gemeentenaam": "Wormerland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.852495301075919, 52.47037876834031], [4.861627968772821, 52.46845703117768], [4.890515419814094, 52.478970063890905], [4.906468191284648, 52.47981788910972], [4.92065714281374, 52.490443965185456], [4.9251254866654435, 52.50553525408026], [4.934336546359743, 52.51163959565568], [4.874680236339637, 52.52003306532189], [4.843401829377717, 52.52673088455048], [4.833916397692523, 52.538967828541956], [4.824470162006028, 52.54269825950472], [4.811182718447016, 52.52998088122258], [4.789860095154679, 52.519241761784336], [4.798757586859385, 52.4911222253605], [4.816826942259693, 52.482559190650534], [4.837091273587154, 52.47987441079097], [4.852495301075919, 52.47037876834031]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idec71c934-fd56-4433-add5-752c5d484221",
      "Code": "0716",
      "Gemeentenaam": "Tholen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[3.924765207865753, 51.60785791240531], [3.9368375754650904, 51.55653622582673], [3.9609431146650675, 51.55147753535451], [3.998532077417552, 51.54429928183526], [4.013073792934936, 51.53825146194109], [4.067517035128055, 51.52646669139964], [4.060383363364809, 51.50962323038597], [4.1122004736450855, 51.50620366867011], [4.133915056924414, 51.47955369595888], [4.230337213724321, 51.4889080342064], [4.218931178102869, 51.50484714832001], [4.236138221531795, 51.55037536257006], [4.231277917693101, 51.56054926519576], [4.198902022767603, 51.585984021760034], [4.191415587016066, 51.595620968413826], [4.191885939000455, 51.60983617124919], [4.21195429033442, 51.626792675625374], [4.238176413464151, 51.63431005923214], [4.242801541310651, 51.647055698354905], [4.202704034641421, 51.66076220605898], [4.195883930867769, 51.639425271385626], [4.188632671108426, 51.638803532891835], [4.126898973157266, 51.65802090451817], [4.094836646221362, 51.64095135677948], [4.08985875438657, 51.63060788911001], [4.070417539031792, 51.617240511493456], [4.05575823551831, 51.61269051615252], [4.052936123611971, 51.62099920329685], [4.031221540332642, 51.60915791107414], [4.014916004873796, 51.60686878298336], [3.9800707620302527, 51.613736167255716], [3.948753159069632, 51.615290513490194], [3.924765207865753, 51.60785791240531]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id20b3855b-df5d-4c8a-82b8-89dfe1d6d5f3",
      "Code": "0148",
      "Gemeentenaam": "Dalfsen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.323403544258898, 52.59252212153006], [6.319679924382479, 52.59916341907739], [6.303060820934039, 52.59712863855225], [6.20213112428373, 52.58494821624203], [6.210793439996242, 52.56779388598146], [6.189627600698701, 52.53617000531989], [6.182572320932854, 52.5195243701906], [6.173322065239855, 52.51881784917493], [6.188138152748134, 52.49954395586734], [6.199936148356578, 52.49493743884514], [6.189510012702604, 52.48069397516915], [6.16250396959889, 52.47439180770934], [6.169951209351728, 52.468937465468336], [6.236153251154592, 52.46563094711498], [6.278249753757478, 52.45703965156438], [6.27864171374447, 52.44734618322933], [6.289930161369824, 52.44644183632927], [6.2918115693073835, 52.434713587469076], [6.3144276605567935, 52.43301793703146], [6.334417619893359, 52.42442664148086], [6.3805905063609565, 52.429824462040614], [6.384157342242579, 52.439433147853784], [6.371065878677063, 52.44969183300137], [6.378513118429902, 52.45641791307059], [6.342609583621481, 52.456898347361246], [6.34405983557335, 52.48171136543172], [6.331517115989622, 52.52206784584703], [6.360718135020488, 52.52415914805343], [6.33622063583352, 52.56960257978159], [6.33622063583352, 52.56960257978159], [6.323403544258898, 52.59252212153006]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id98cd079e-cad8-477f-a828-cc9cce713076",
      "Code": "1735",
      "Gemeentenaam": "Hof van Twente",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.712384635349256, 52.20633773436256], [6.702036891692681, 52.21682250623517], [6.712149459357062, 52.22603554027956], [6.724182630957701, 52.25271377383142], [6.7529524940028764, 52.25237464374389], [6.742879122337195, 52.283122438346034], [6.703800711634143, 52.30734197876334], [6.690944424060822, 52.30838762986654], [6.657510237170447, 52.29485068720622], [6.62607504621373, 52.28996156177776], [6.605379558900578, 52.27068766847017], [6.568182556135087, 52.27015071249826], [6.553993604605994, 52.28332026423042], [6.51726695382489, 52.28303765582415], [6.485243822887686, 52.27461592531731], [6.4296247007335925, 52.25166812272822], [6.416415649171979, 52.24217248027756], [6.431937264656843, 52.220948588966706], [6.454906119894544, 52.202352955834165], [6.4703101473833105, 52.199385567568335], [6.479168443089318, 52.18225949814839], [6.49241669064963, 52.17737037271993], [6.5132297659588785, 52.18124210788582], [6.555365464560464, 52.17725732935742], [6.589936335413114, 52.182485584873405], [6.6063202628693585, 52.17307472494463], [6.612160466675531, 52.16315516988456], [6.645045909584118, 52.174205158569706], [6.624350422270967, 52.18892905653635], [6.672051952687832, 52.198198612262], [6.69749015584358, 52.196248614258735], [6.712384635349256, 52.20633773436256]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id3ecb9c31-a346-4307-bb27-8b123bb9c6b9",
      "Code": "0214",
      "Gemeentenaam": "Buren",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.586597160712288, 51.950831474254166], [5.561237349553938, 51.95450538353567], [5.537523770340953, 51.96829667376163], [5.517494615005688, 51.97182927884], [5.486216208043766, 51.98384013610646], [5.477671480327352, 51.98347274517831], [5.4393769895982835, 51.98584665579098], [5.413507630456845, 51.975418405599626], [5.390969931204833, 51.97072710605555], [5.352322676487472, 51.969483629067966], [5.333116637124888, 51.95719016339523], [5.314851301731085, 51.955607556320125], [5.298310590280044, 51.961994506301814], [5.270363843207551, 51.96541406801768], [5.241907548151969, 51.9455184362163], [5.255077403714883, 51.93548583779372], [5.2809859588550205, 51.93316844886231], [5.285179930715829, 51.9225706336272], [5.27361711109958, 51.92008367965202], [5.294900538393218, 51.90004674364751], [5.323317637450102, 51.889053276643615], [5.317438237645229, 51.88029241604926], [5.335507593045538, 51.88164893639935], [5.3390352329284605, 51.874046770270695], [5.353772928439341, 51.87805980963973], [5.399475462922549, 51.89837935405052], [5.411351850528391, 51.91205760091397], [5.435104625740076, 51.92067715730519], [5.4533699611338795, 51.92276845951159], [5.547832317998829, 51.92163802588651], [5.5541428737893925, 51.93427062164676], [5.533447386476242, 51.94322930812551], [5.575857457068722, 51.94255104795047], [5.586597160712288, 51.950831474254166]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id24c5879c-b624-4345-af4f-e8a60f2f37dd",
      "Code": "1734",
      "Gemeentenaam": "Overbetuwe",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.817069633063286, 51.87025981762668], [5.837804316375136, 51.88342936935885], [5.830239488626201, 51.893857619550204], [5.857127943733817, 51.89462066224713], [5.874726947149735, 51.897559789672336], [5.873668655184858, 51.90841195247309], [5.891189266603378, 51.90728151884801], [5.897930978379632, 51.93435540416864], [5.874766143148435, 51.94079887583159], [5.829925920636608, 51.94523582781002], [5.83533496845709, 51.973553190118245], [5.81601134109841, 51.97120754034621], [5.785791226101365, 51.95981842157354], [5.747888695359288, 51.96959667243047], [5.722607276198336, 51.964057547667586], [5.681921829548619, 51.95916842223912], [5.666008254076765, 51.95280973309805], [5.6469981947076775, 51.94031844154093], [5.66114795023807, 51.943596699053664], [5.660364030264088, 51.92960758294331], [5.6887811293209705, 51.935146707706195], [5.675807253751552, 51.926159760386824], [5.706184152743393, 51.90793151818243], [5.706654504727783, 51.893292402737664], [5.732249491878328, 51.88594458417465], [5.800097765626555, 51.87543155146142], [5.817069633063286, 51.87025981762668]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idc7500bf4-27fd-4727-afc4-bbfa27b511fe",
      "Code": "1960",
      "Gemeentenaam": "West Betuwe",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.281730682830304, 51.82119899829827], [5.304581950071908, 51.82396856067972], [5.319789997567178, 51.82054899896385], [5.3390352329284605, 51.80658814369413], [5.365806100039979, 51.80794466404422], [5.384385003423376, 51.827303339873694], [5.400651342883523, 51.837646807543166], [5.415232254399607, 51.85180548869727], [5.39524229506304, 51.85293592232235], [5.378427211621106, 51.863392433354335], [5.360083484229904, 51.85836200372273], [5.328295529284894, 51.85697722253201], [5.3390352329284605, 51.874046770270695], [5.335507593045538, 51.88164893639935], [5.317438237645229, 51.88029241604926], [5.323317637450102, 51.889053276643615], [5.294900538393218, 51.90004674364751], [5.27361711109958, 51.92008367965202], [5.285179930715829, 51.9225706336272], [5.2809859588550205, 51.93316844886231], [5.255077403714883, 51.93548583779372], [5.233911564417342, 51.923842371455414], [5.211805021151021, 51.919631506201995], [5.207689441287611, 51.926216282068076], [5.159243186895463, 51.919631506201995], [5.166808014644398, 51.92601845618369], [5.142428103453527, 51.924944544239864], [5.112717536439572, 51.8877815388154], [5.089043153225286, 51.8880924080623], [5.081086365489359, 51.875827203230195], [5.055726554331009, 51.87319894505189], [5.05380595039475, 51.857372874300786], [5.026917495287134, 51.858616351288376], [4.993836072385052, 51.86070765349477], [4.998696376223746, 51.85228592298793], [4.999284316204234, 51.8445989743374], [5.031425035137536, 51.841094630099654], [5.026368751305346, 51.81885334852623], [5.042635090765493, 51.81738378481363], [5.07410947772091, 51.8258337761611], [5.093197929087395, 51.8262576887705], [5.122242164123465, 51.81642291623231], [5.1408994595042605, 51.8141055273009], [5.176097466336096, 51.81647943791357], [5.212863313115899, 51.810035966250624], [5.281730682830304, 51.82119899829827]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id9280b559-7e40-4861-a58b-8ab0d518b1ea",
      "Code": "0736",
      "Gemeentenaam": "De Ronde Venen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.01880392355641, 52.273513752532864], [5.01880392355641, 52.273513752532864], [5.021861211454944, 52.282642004055376], [5.02154764346535, 52.30245285333488], [5.011709447791864, 52.303385461075564], [4.997481300264073, 52.289113736558946], [4.983488328728477, 52.290357213546535], [4.96769234125272, 52.279589833267664], [4.95522801366639, 52.278318095439445], [4.926458150621214, 52.27978765915205], [4.92939785052365, 52.26834201869813], [4.91007422316497, 52.25243116542514], [4.870133500490537, 52.253278990643956], [4.852064145090228, 52.2420029152338], [4.842853085395928, 52.235333356845835], [4.814435986339046, 52.22722249558589], [4.794563614998577, 52.226742061295234], [4.802128442747512, 52.21767033145398], [4.802912362721496, 52.201024696324694], [4.813612870366363, 52.20184426070288], [4.843911377360806, 52.18011167426074], [4.8555133929757535, 52.178952979795035], [4.892161651759459, 52.16179864953447], [4.909643067179279, 52.16188343205635], [4.928613930549668, 52.16719647009422], [4.948564693887534, 52.18579210322676], [4.9508772578107845, 52.19865078571203], [4.966555657290444, 52.20003556690275], [4.980431040829943, 52.226855104657744], [5.007476279932356, 52.23171596924558], [5.01880392355641, 52.273513752532864]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id2be39771-13d4-491a-945f-87c75ece928e",
      "Code": "0994",
      "Gemeentenaam": "Valkenburg aan de Geul",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.859479703655766, 50.83368044427019], [5.887975194710048, 50.847047821886754], [5.8742957911640445, 50.857249985353086], [5.8616354835842195, 50.882430394351715], [5.835295772458391, 50.881299960726636], [5.833100796531239, 50.89220864520864], [5.81922541299174, 50.88384343638306], [5.799823393635661, 50.88568039102381], [5.777677654370642, 50.88373039302056], [5.7626655868688665, 50.86651954107873], [5.757334931045783, 50.855299987349824], [5.780421374279582, 50.849449993340045], [5.801626409575821, 50.84987390594945], [5.821224408925396, 50.83876739558305], [5.823615364846044, 50.830345665076216], [5.836079692432374, 50.83594131152035], [5.859479703655766, 50.83368044427019]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ida494bb5e-51d7-491e-bd9b-a18b6ec99adf",
      "Code": "1900",
      "Gemeentenaam": "Súdwest-Fryslân",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.771014334591786, 53.04695643881167], [5.761842470896185, 53.06083251155951], [5.775051522457798, 53.06628685380051], [5.7642726228155325, 53.080275969910865], [5.787359066049332, 53.09850421211526], [5.75745251904188, 53.11271941495062], [5.75149472723961, 53.12651070517658], [5.703401236835753, 53.117438975335325], [5.703401236835753, 53.117438975335325], [5.685959017414632, 53.12987374521119], [5.6567188023850665, 53.11235202402247], [5.637355979027687, 53.12413679456392], [5.624342907459569, 53.12831939897671], [5.622226323529815, 53.13823895403677], [5.596317768389677, 53.12597374920467], [5.581736856873594, 53.13374548037709], [5.570957957231327, 53.12981722352993], [5.5507328219025664, 53.134112871305234], [5.53121321455039, 53.147875900690565], [5.511693607198214, 53.14578459848417], [5.504991091420659, 53.134734609799025], [5.472184040509471, 53.14660416286235], [5.434791057750482, 53.15347154713471], [5.406648330684494, 53.152708504437776], [5.402140790834091, 53.125775923320276], [5.372273439825339, 53.107802028681526], [5.372273439825339, 53.09378465173055], [5.348403076617558, 53.079654231417074], [5.292470386473871, 53.06806728676001], [5.164260274728953, 53.00100431195222], [5.169120578567648, 52.997613011076986], [5.215058289043051, 52.916108746708815], [5.238693476258638, 52.87405661585589], [5.281181938848516, 52.84062404139419], [5.337859352967486, 52.79594365236296], [5.441180005538444, 52.8500631621636], [5.432517689825932, 52.87465009350906], [5.4770835403468645, 52.86877183865865], [5.501855411524727, 52.88007617490943], [5.476965952350767, 52.90223267396098], [5.515495619072031, 52.928684820787815], [5.564764989436862, 52.94747827980475], [5.594240380458622, 52.91540222569314], [5.6399821109405295, 52.92246743584988], [5.6424514588585755, 52.93617394355396], [5.679178109639679, 52.93295220772249], [5.688153993341784, 52.936004378510205], [5.691211281240317, 52.98865432459824], [5.705165056777215, 52.98424563346043], [5.716845464389562, 52.99569127391435], [5.748633419334571, 53.00815430463085], [5.733229391845805, 53.0154456015126], [5.73671783573003, 53.03014123863863], [5.755414327109524, 53.046843395449166], [5.771014334591786, 53.04695643881167]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1dfb68cc-331a-47d9-a547-29fdc56af962",
      "Code": "0851",
      "Gemeentenaam": "Steenbergen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.317979466815619, 51.551223187788864], [4.375362408911174, 51.54373406502272], [4.441094098729647, 51.558486223829995], [4.443994602633385, 51.56908403906511], [4.431687059041852, 51.584881848975584], [4.42666997120836, 51.6117296475712], [4.437840830837618, 51.61712746813095], [4.424984543264297, 51.62947745548493], [4.408796595801548, 51.63286875636017], [4.397155384187901, 51.64304265898588], [4.361839789359967, 51.66296655162789], [4.33220761434341, 51.653668735061615], [4.275020652241351, 51.64377744084218], [4.242801541310651, 51.647055698354905], [4.238176413464151, 51.63431005923214], [4.21195429033442, 51.626792675625374], [4.191885939000455, 51.60983617124919], [4.191415587016066, 51.595620968413826], [4.198902022767603, 51.585984021760034], [4.231277917693101, 51.56054926519576], [4.236138221531795, 51.55037536257006], [4.251777425012756, 51.570468820255826], [4.251777425012756, 51.570468820255826], [4.29861664345824, 51.55885361475815], [4.296225687537591, 51.553851445967176], [4.317979466815619, 51.551223187788864]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb40c1ab9-fe6c-46b3-8dc5-3b9e6c7ba5a4",
      "Code": "0523",
      "Gemeentenaam": "Hardinxveld-Giessendam",
      "aantal": 4
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.884636020009221, 51.81647943791357], [4.926967698604303, 51.82829246929564], [4.924851114674549, 51.83970984890893], [4.87965812817443, 51.83267289959282], [4.847948565226818, 51.83261637791156], [4.838071173554632, 51.8607359143354], [4.803382714705885, 51.84635114645627], [4.805068142649949, 51.8219620409952], [4.811417894439211, 51.81865552264185], [4.884636020009221, 51.81647943791357]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd6f6a540-0b97-40c0-8519-5352208d6ab6",
      "Code": "0362",
      "Gemeentenaam": "Amstelveen",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.852064145090228, 52.2420029152338], [4.870133500490537, 52.253278990643956], [4.879579736177032, 52.2668441941449], [4.878913404199146, 52.27925070318014], [4.907526483249525, 52.30629632766014], [4.909133519196191, 52.31825066324535], [4.896277231622869, 52.32243326765814], [4.856336508948436, 52.32175500748309], [4.855905352962745, 52.33031804219306], [4.818747546195952, 52.325570220967734], [4.8098892504899435, 52.30578763252886], [4.823843026026841, 52.2905267785903], [4.794681202994674, 52.26068333088822], [4.834817905662603, 52.24994421144997], [4.852064145090228, 52.2420029152338]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id2dde58ed-11e2-4223-a7d7-a0f1783063f2",
      "Code": "0275",
      "Gemeentenaam": "Rheden",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.9698556359925705, 52.00192707410772], [5.9698556359925705, 52.00192707410772], [5.951511908601368, 51.99963794601693], [5.960801360293067, 51.988559696491166], [5.990355143312225, 51.97440101533706], [6.0019571589271745, 51.980646661115614], [6.011991334594157, 51.995653167488534], [6.033235565889095, 51.99720751372302], [6.048012457398674, 52.00978358780202], [6.064004424867928, 52.01501184331801], [6.076468752454257, 52.010659673861454], [6.083563228218804, 51.99554012412602], [6.109589371355039, 51.99644447102609], [6.125032594842503, 52.00916184930822], [6.1318526986161555, 52.02235966188102], [6.12150495495958, 52.034624866713116], [6.111705955284792, 52.03925964457594], [6.12009389900641, 52.051355284364284], [6.137457726430133, 52.059183537217955], [6.103435599559272, 52.07814656127865], [6.0683551807235325, 52.08823568138247], [6.044915973501442, 52.07964438583188], [6.023750134203901, 52.06729439847789], [6.006072738790585, 52.066361790737204], [5.998351127046853, 52.05404006422385], [5.977969207723294, 52.054379194311366], [5.995803387131408, 52.026231397046914], [5.980869711627031, 52.01879879596202], [5.9698556359925705, 52.00192707410772]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb8414070-35c6-42c4-9726-c8b839832fc9",
      "Code": "0614",
      "Gemeentenaam": "Westvoorne",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[3.9726235222774138, 51.91095542812952], [3.9555732628432843, 51.85765548270706], [4.035219532199956, 51.858588090447746], [4.039844660046455, 51.84211202036223], [4.082725082623325, 51.847255493356336], [4.0891532264099855, 51.8528794006411], [4.117256757477275, 51.857966351953955], [4.130113045050596, 51.87588372491145], [4.15527687621545, 51.8815924147181], [4.1603331600476405, 51.88334458683697], [4.135365308876282, 51.906377171947945], [4.152885920294802, 51.92180759093027], [4.144889936560175, 51.93141627674344], [4.107732129793382, 51.93613583712814], [4.102009513983306, 51.92353150220852], [4.092876846286404, 51.93251844952789], [4.065831607183991, 51.9326314928904], [3.9726235222774138, 51.91095542812952]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1ab6ce5e-e1c0-475b-9d2f-26b2721c51cb",
      "Code": "0394",
      "Gemeentenaam": "Haarlemmermeer",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.639661028139538, 52.338909337743665], [4.6203374007808575, 52.33382238643081], [4.611400713077451, 52.32220718093313], [4.611675085068345, 52.31355936370127], [4.58796150585536, 52.280098528398945], [4.57275345836009, 52.271252885282706], [4.562954458685303, 52.234768140033296], [4.553939378984499, 52.222192065954296], [4.558446918834901, 52.21880076507906], [4.601719301398761, 52.21464642150689], [4.632644944372391, 52.21617250690075], [4.670351495120972, 52.23075510066426], [4.680816826773645, 52.23889422276483], [4.705157541965817, 52.246637693096616], [4.713035937704346, 52.25525724948784], [4.746352536598623, 52.27210071050151], [4.764853047984621, 52.276678966683086], [4.788331451205412, 52.288520258905784], [4.8098892504899435, 52.30578763252886], [4.818747546195952, 52.325570220967734], [4.790173663144271, 52.34201803021263], [4.7556811842890205, 52.35614845052611], [4.757876160216172, 52.3965897134633], [4.728753533182704, 52.40071579619484], [4.739218864835378, 52.431067939028196], [4.721972625407751, 52.433328806278354], [4.700532414119317, 52.42550055342468], [4.6824630587190095, 52.41385708708638], [4.6686660671769085, 52.40139405636989], [4.674545466981781, 52.39090928449728], [4.686931402570712, 52.387433201100166], [4.67321280302601, 52.374744083658655], [4.676466070918039, 52.35626149388862], [4.671605767079345, 52.350185413153824], [4.639661028139538, 52.338909337743665]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ideb6d19df-6e55-48eb-ad5b-9c78552d3f21",
      "Code": "0756",
      "Gemeentenaam": "Boxmeer",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.8708857392772185, 51.56264056740216], [5.8914636385942725, 51.56021013510824], [5.906671686089542, 51.55204275216705], [5.935441549134717, 51.55359709840153], [5.976362171776629, 51.56165143798022], [6.004269722850424, 51.57024273353081], [6.031667725941129, 51.55232536057331], [6.048130045394772, 51.558457962989365], [6.037586321744701, 51.57018621184956], [6.03715516575901, 51.5862666301663], [6.026297874119345, 51.595564446732574], [6.0202224943209774, 51.62170572431252], [5.996195347118399, 51.63679701320732], [5.976597347768824, 51.64377744084218], [5.963466688204609, 51.657314383502495], [5.963741060195503, 51.68057305533849], [5.956176232446568, 51.70725128889035], [5.933795317189354, 51.71615345368784], [5.8947952984837, 51.688457829873414], [5.899538014326296, 51.684925224795045], [5.859910859641457, 51.669918718422124], [5.855795279778047, 51.66220350893096], [5.875510867123718, 51.65290569236469], [5.87080734727982, 51.646518742382995], [5.896480726427763, 51.64448396185785], [5.925877725452125, 51.632077452822614], [5.939635520995527, 51.612436168586875], [5.949787284658607, 51.60780139072405], [5.931835517254395, 51.596864445401415], [5.877235491066481, 51.57815576890636], [5.8708857392772185, 51.56264056740216]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id9c1948dd-8449-4570-94e0-b6ec3d5ab84e",
      "Code": "0202",
      "Gemeentenaam": "Arnhem",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.83533496845709, 51.973553190118245], [5.829925920636608, 51.94523582781002], [5.874766143148435, 51.94079887583159], [5.897930978379632, 51.93435540416864], [5.91690184175002, 51.95052060500727], [5.929444561333748, 51.95060538752915], [5.931835517254395, 51.95947929148602], [5.955235528477788, 51.94874017204777], [5.951237536610474, 51.9632379832894], [5.965152116148673, 51.97154667043373], [5.990355143312225, 51.97440101533706], [5.960801360293067, 51.988559696491166], [5.951511908601368, 51.99963794601693], [5.941399340936988, 52.01147923823964], [5.937087781080082, 52.04852920030159], [5.943280748874548, 52.06246179473068], [5.955941056454373, 52.07334221837206], [5.946102860780886, 52.07789221371301], [5.909768169986775, 52.06209440380253], [5.898126958373128, 52.063366141630745], [5.899420426330199, 52.04997050317356], [5.850033467969271, 52.05160963192993], [5.837921904371234, 52.04663572397958], [5.813385209185567, 52.02408357315926], [5.802959073531593, 52.004046637154744], [5.863752067513973, 51.99587925421355], [5.870846543278519, 51.97510753635273], [5.863046539537389, 51.97013362840238], [5.83533496845709, 51.973553190118245]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id0918c299-4a57-47fd-bc2b-4c7b0c2d6856",
      "Code": "0375",
      "Gemeentenaam": "Beverwijk",
      "aantal": 4
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.674859034971375, 52.455513566170524], [4.695240954294932, 52.46854181369956], [4.7079796538721554, 52.48634614329455], [4.672428883052027, 52.4971983060953], [4.672428883052027, 52.4971983060953], [4.6652952112887816, 52.50152221471122], [4.6652952112887816, 52.50152221471122], [4.655339427619198, 52.4979330879516], [4.621395692745734, 52.49784830542972], [4.604306237312906, 52.49440048287323], [4.571499186401717, 52.50203090984251], [4.5663253145734295, 52.492733093276236], [4.596035881587385, 52.48600701320702], [4.653340431685542, 52.47716137009078], [4.667607775212032, 52.46842877033705], [4.6619243554006555, 52.46175921194909], [4.674859034971375, 52.455513566170524]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd8e20872-ce3e-4b01-86eb-3226c6ab2933",
      "Code": "0439",
      "Gemeentenaam": "Purmerend",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.956991833607852, 52.52910479516314], [4.954169721701513, 52.51641567772164], [4.934336546359743, 52.51163959565568], [4.9251254866654435, 52.50553525408026], [4.92065714281374, 52.490443965185456], [4.948329517895339, 52.48400049352251], [4.95801092957403, 52.471226593559116], [4.974238073035478, 52.47043529002156], [4.997951652248463, 52.49473961296076], [5.024487343367786, 52.52178523744076], [5.009240099873818, 52.52772001397242], [4.992268232437086, 52.519722196074994], [4.956991833607852, 52.52910479516314]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5a7c7a1a-cb77-489c-b38d-f408860256b8",
      "Code": "0358",
      "Gemeentenaam": "Aalsmeer",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.794681202994674, 52.26068333088822], [4.823843026026841, 52.2905267785903], [4.8098892504899435, 52.30578763252886], [4.788331451205412, 52.288520258905784], [4.764853047984621, 52.276678966683086], [4.746352536598623, 52.27210071050151], [4.713035937704346, 52.25525724948784], [4.705157541965817, 52.246637693096616], [4.680816826773645, 52.23889422276483], [4.670351495120972, 52.23075510066426], [4.6860690905993305, 52.22657249625147], [4.704060054002241, 52.2338355322926], [4.724324385329701, 52.23197031681122], [4.723775641347913, 52.216568158669524], [4.7732801877049384, 52.24104204665248], [4.770850035785591, 52.24991595060935], [4.794681202994674, 52.26068333088822]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf5b66105-03ae-4159-bbb8-b1966e3fb7ff",
      "Code": "0158",
      "Gemeentenaam": "Haaksbergen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.760556517750511, 52.11878565010022], [6.820134435773218, 52.118418259172074], [6.85548922659985, 52.12045303969722], [6.87304903401707, 52.13198346267302], [6.8819465257217765, 52.15597691636531], [6.889746529462908, 52.1612051718813], [6.8279736355130485, 52.171011683578854], [6.805592720255834, 52.16660299244105], [6.7707866734109885, 52.18833557888319], [6.7707866734109885, 52.18833557888319], [6.766788681543676, 52.191076880424006], [6.712384635349256, 52.20633773436256], [6.69749015584358, 52.196248614258735], [6.672051952687832, 52.198198612262], [6.624350422270967, 52.18892905653635], [6.645045909584118, 52.174205158569706], [6.671268032713849, 52.165698645540985], [6.674403712609781, 52.14277910379252], [6.662409737007842, 52.13017476887289], [6.716265039220472, 52.11827695496894], [6.760556517750511, 52.11878565010022]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5ca8b077-7e8c-485a-99ec-94b72f6eceba",
      "Code": "0106",
      "Gemeentenaam": "Assen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.631209722043318, 53.02609993842897], [6.60302779897863, 53.03308036606383], [6.6081232788095186, 53.04774774234922], [6.600323275068389, 53.06083251155951], [6.555208680565668, 53.05859990514998], [6.547291088828439, 53.03505862490772], [6.533690077279834, 53.03816731737668], [6.533690077279834, 53.03816731737668], [6.524126253597242, 53.04585426602722], [6.505116194228155, 53.04636296115851], [6.495513174546863, 53.03090428133555], [6.513033785965383, 53.01055647608414], [6.488222718788821, 53.005413003090034], [6.49661066251044, 52.983228243197864], [6.48551819487858, 52.9729978188909], [6.495748350539058, 52.96898477952187], [6.483950354930614, 52.95016305966431], [6.4969634264987315, 52.95157610169566], [6.535924249205686, 52.93258481679434], [6.542979528971533, 52.95533479349905], [6.561519236356231, 52.946658715426565], [6.5812740197006026, 52.96745869412801], [6.596050911210181, 52.97265868880338], [6.615962478549349, 53.0082108263121], [6.62975947009145, 53.015530384034484], [6.631209722043318, 53.02609993842897]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "iddc7c4304-7059-4e98-bdca-cd8c7e325bf3",
      "Code": "0451",
      "Gemeentenaam": "Uithoorn",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.794563614998577, 52.226742061295234], [4.814435986339046, 52.22722249558589], [4.842853085395928, 52.235333356845835], [4.852064145090228, 52.2420029152338], [4.834817905662603, 52.24994421144997], [4.794681202994674, 52.26068333088822], [4.770850035785591, 52.24991595060935], [4.7732801877049384, 52.24104204665248], [4.723775641347913, 52.216568158669524], [4.728753533182704, 52.20981381775968], [4.7631284240418585, 52.21860293919467], [4.784019891348505, 52.22874858097975], [4.794563614998577, 52.226742061295234]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idc9ab716c-d11c-473c-be44-89ff5ac9d643",
      "Code": "0193",
      "Gemeentenaam": "Zwolle",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.103553187555369, 52.45395921993604], [6.109589371355039, 52.44053532063823], [6.139613506358587, 52.44158097174143], [6.154899945851255, 52.453196177239114], [6.152469793931908, 52.46113747345529], [6.152469793931908, 52.46113747345529], [6.144160242207688, 52.46766572764012], [6.16250396959889, 52.47439180770934], [6.189510012702604, 52.48069397516915], [6.199936148356578, 52.49493743884514], [6.188138152748134, 52.49954395586734], [6.173322065239855, 52.51881784917493], [6.182572320932854, 52.5195243701906], [6.189627600698701, 52.53617000531989], [6.210793439996242, 52.56779388598146], [6.20213112428373, 52.58494821624203], [6.179906993021312, 52.587943865348485], [6.147413510099717, 52.584411260270116], [6.155056729846052, 52.5827156098325], [6.166815529455796, 52.565250410325035], [6.140515014328667, 52.552109119433496], [6.109746155349835, 52.56129389263726], [6.103318011563174, 52.56739823421268], [6.089403432024977, 52.55185477186785], [6.070158196663694, 52.55821346100892], [6.063142112896546, 52.56728519085018], [6.033039585895599, 52.55940041631525], [6.003603390872538, 52.55038520815525], [6.030452649981456, 52.53806348164189], [6.0301782779905615, 52.526759145391104], [6.01551897447708, 52.522774366862706], [6.027865714067312, 52.50960481513054], [6.056243617125496, 52.49844178308289], [6.064474776852317, 52.48688309926646], [6.098653687717976, 52.47083094179034], [6.103553187555369, 52.45395921993604]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idd5530145-a437-4989-9b81-0addc8799d8e",
      "Code": "0098",
      "Gemeentenaam": "Weststellingwerf",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.0848566961758745, 52.93628698691647], [6.043308937554777, 52.91811526639333], [6.003799370866034, 52.93368698957879], [5.952335024574051, 52.92464352057816], [5.937832505055366, 52.91172831641164], [5.911453597930838, 52.89790876534505], [5.885937002777692, 52.89417833438229], [5.856775179745524, 52.870778358343166], [5.83996009630359, 52.84291316948497], [5.818127925028163, 52.8216610173335], [5.819734960974829, 52.817280587036315], [5.844154068164398, 52.80543929481362], [5.8765299630898955, 52.8008045169508], [5.898636506356216, 52.808463204760706], [5.923957121515867, 52.82341318945237], [5.9271711934091975, 52.83386970048435], [5.946612408763976, 52.83734578388146], [5.956293820442665, 52.83336100535306], [5.969973223988668, 52.84237621351306], [5.98647473944101, 52.82168927817413], [5.996469719109293, 52.816771891905034], [6.024573250176584, 52.82253710339293], [6.031158177958041, 52.814991458945535], [6.059928041003216, 52.82612623015256], [6.052598389246475, 52.83734578388146], [6.0810154883033585, 52.83873056507218], [6.119819527015516, 52.85421750573576], [6.165992413483114, 52.87501748443721], [6.206913036125027, 52.8907305118258], [6.24724571878645, 52.923343521909324], [6.213615551902581, 52.925802215043866], [6.2005632843357645, 52.94301306698569], [6.14455220219468, 52.928063082294024], [6.110530075323817, 52.913254401805496], [6.0848566961758745, 52.93628698691647]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idcd106117-1a79-4b5b-83f2-6cd4aa91decd",
      "Code": "0498",
      "Gemeentenaam": "Drechterland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.135294431690282, 52.60393950114335], [5.257193987644637, 52.64446554660242], [5.262250271476827, 52.6768242091203], [5.24598393201668, 52.68660245997722], [5.209649241222569, 52.68394594095829], [5.204592957390378, 52.67761551265785], [5.187033149973159, 52.70745896035993], [5.125456236016795, 52.69115245531817], [5.091747677135527, 52.67891551132669], [5.09621602098723, 52.66981552064481], [5.1194200522171265, 52.65116336583101], [5.101938636797306, 52.64717858730261], [5.105975824663318, 52.63607207693621], [5.09484416103276, 52.632313385132825], [5.1252210600246, 52.61518731571288], [5.135294431690282, 52.60393950114335]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id69244d21-1448-4d59-b5b5-00e14835c191",
      "Code": "1586",
      "Gemeentenaam": "Oost Gelre",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.462196575652586, 52.0217096625466], [6.467448839478272, 52.00074011880139], [6.460079991722832, 51.99514447235725], [6.475758391202492, 51.98813578388176], [6.467840799465264, 51.978216228821694], [6.494807646570278, 51.970585801852415], [6.527261933493174, 51.96603580651147], [6.5468991288414475, 51.97270536489944], [6.591817743350673, 51.9721401480869], [6.628740374125272, 51.96727928349906], [6.638931333787051, 51.96255972311435], [6.6560599852185796, 51.97847057638734], [6.6560599852185796, 51.97847057638734], [6.6526499333317535, 51.99754664381054], [6.655628829232889, 52.01407923557731], [6.6835755763053815, 52.0282096558908], [6.687847940163589, 52.03985312222911], [6.687965528159687, 52.04437485672942], [6.661782601028655, 52.05160963192993], [6.658960489122316, 52.06305527238385], [6.606124282875863, 52.065118313749615], [6.605497146896676, 52.05186397949557], [6.574297131932154, 52.03194008685356], [6.53898153710422, 52.025185745943716], [6.51730614982359, 52.042424858726164], [6.480069951059399, 52.03295747711613], [6.462196575652586, 52.0217096625466]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idf2b5fb33-1335-4c66-b752-9e0c4999fe5a",
      "Code": "1978",
      "Gemeentenaam": "Molenlanden",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.998696376223746, 51.85228592298793], [4.993836072385052, 51.86070765349477], [5.026917495287134, 51.858616351288376], [5.0218220154562445, 51.86862068887032], [5.026956691285833, 51.881931544805624], [4.9962270283057, 51.87311416253001], [4.99944110019903, 51.884418498780796], [4.994972756347328, 51.902279350057036], [4.973414957062795, 51.89724892042544], [4.973767721051088, 51.907620648935534], [4.956168717635169, 51.91559020599234], [4.947702381916153, 51.93373366567485], [4.939236046197137, 51.92892932276827], [4.926301366626418, 51.95091625677605], [4.913523471050495, 51.942353222066075], [4.877776720236871, 51.93802931345015], [4.84787017322942, 51.94156191852852], [4.832505341739353, 51.93876409530645], [4.811731462428804, 51.92471845751485], [4.759875156149829, 51.91349890378594], [4.721933429409052, 51.89724892042544], [4.705588697951507, 51.89722065958481], [4.66815651919382, 51.88959023261553], [4.619553480806875, 51.88953371093427], [4.626373584580526, 51.880659806977405], [4.664197723325206, 51.87495111717076], [4.700258042128423, 51.87969893839609], [4.681247982759336, 51.8589554813759], [4.683207782694293, 51.84849897034392], [4.705431913956711, 51.84126419514342], [4.73725906490042, 51.84646418981878], [4.742746504718301, 51.84100984757777], [4.756073144276012, 51.84496636526555], [4.803382714705885, 51.84635114645627], [4.838071173554632, 51.8607359143354], [4.847948565226818, 51.83261637791156], [4.87965812817443, 51.83267289959282], [4.924851114674549, 51.83970984890893], [4.942724490081361, 51.844796800221786], [4.938412930224455, 51.86361852007935], [4.959304397531101, 51.86288373822305], [4.998696376223746, 51.85228592298793]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id4d91567c-8ada-453c-aa29-ddceffe85d29",
      "Code": "0888",
      "Gemeentenaam": "Beek",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.839881704306191, 50.95019989017518], [5.837804316375136, 50.946384676690535], [5.811895761234998, 50.9551455372849], [5.802723897539398, 50.947599892837495], [5.788103790024615, 50.94861728310007], [5.779951022295192, 50.94533902558734], [5.770935942594388, 50.92793034776113], [5.7755218744421875, 50.92631947984539], [5.754747995131639, 50.90063037571548], [5.774032426491621, 50.9106064524568], [5.801704801573219, 50.914139057535166], [5.841488740252856, 50.919593399776176], [5.856931963740321, 50.944010766077874], [5.839881704306191, 50.95019989017518]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ida699000d-1edb-4ba4-8204-e89111149e60",
      "Code": "0981",
      "Gemeentenaam": "Vaals",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.976675739766223, 50.803356562277465], [5.95100236061828, 50.794397875798715], [5.95100236061828, 50.794397875798715], [5.942026476916174, 50.79052614063282], [5.943594316864141, 50.77325876700974], [5.92383953351977, 50.77523702585363], [5.920547069629041, 50.7693305101626], [5.935755117124311, 50.75698052280861], [5.957979248386728, 50.76212399580272], [5.9741279998507775, 50.75520008984911], [6.021006414294961, 50.75429574294905], [6.018380282382118, 50.76336747279031], [6.0279441060647105, 50.77351311457539], [6.006543090774974, 50.7819065842416], [5.976675739766223, 50.803356562277465]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ide6738362-40c1-4062-899a-0aa6edaa92e4",
      "Code": "0744",
      "Gemeentenaam": "Baarle-Nassau",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.010455175833491, 51.45824502212615], [4.976825008949621, 51.46109936702947], [4.976825008949621, 51.46109936702947], [4.94464509401762, 51.45680371925417], [4.932415942423485, 51.459121108185585], [4.891299339788077, 51.478225436449414], [4.84187318542845, 51.480740651265215], [4.835249061648294, 51.45872545641681], [4.823372674042451, 51.44849503210985], [4.828624937868137, 51.423738535720624], [4.836503333606666, 51.417266803217046], [4.78656763126395, 51.43252765715561], [4.769047019845431, 51.42998418149918], [4.768890235850634, 51.41870810608902], [4.78935054717159, 51.40898637691335], [4.839325445513005, 51.41461028419811], [4.868722444537367, 51.412886372919864], [4.882950592065159, 51.41647549967949], [4.909799851174076, 51.40743203067886], [4.928692322547066, 51.39590160770306], [4.963223997401016, 51.42229723284865], [5.0044189920338225, 51.44459503610332], [5.010455175833491, 51.45824502212615]], [[4.93998077017242, 51.43611678391523], [4.939706398181527, 51.43074722419611], [4.917991814902198, 51.43521243701517], [4.922342570757803, 51.44261677725943], [4.93998077017242, 51.43611678391523]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1cec64ce-f88e-4a87-b77c-088c4306cba3",
      "Code": "0606",
      "Gemeentenaam": "Schiedam",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.379321204779788, 51.963407548333166], [4.35066892973071, 51.95150973442921], [4.3605071254041965, 51.93867931278457], [4.370619693068576, 51.89936848347246], [4.388336284480593, 51.89676848613478], [4.413696095638942, 51.90075326466318], [4.4090709677924425, 51.91205760091397], [4.417066951527069, 51.91997063628952], [4.409227751787239, 51.93596627208438], [4.388924224461079, 51.94554669705692], [4.379321204779788, 51.963407548333166]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idccfabbec-7e82-4d94-a8b5-f571454da2db",
      "Code": "1696",
      "Gemeentenaam": "Wijdemeren",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.036990866952816, 52.22479206329197], [5.036990866952816, 52.22479206329197], [5.037892374922896, 52.194637746343], [5.0464371026393104, 52.16592473226601], [5.115304472353716, 52.1798573266951], [5.124123572061024, 52.180818195276416], [5.145563783349459, 52.20062904455592], [5.122516536114359, 52.21882902591968], [5.141800967474341, 52.22549858430765], [5.139605991547189, 52.25401377250026], [5.125652216010291, 52.26014637491631], [5.119380856218427, 52.27340070917035], [5.102056224793404, 52.27990070251456], [5.1013506968168185, 52.27998548503644], [5.1013506968168185, 52.27998548503644], [5.063918518059131, 52.280098528398945], [5.063918518059131, 52.280098528398945], [5.06442806604222, 52.280748527733365], [5.0607436421645, 52.28521374055243], [5.023272267408113, 52.27150723284835], [5.034403931038671, 52.25291159971581], [5.057725550264665, 52.23536161768646], [5.036990866952816, 52.22479206329197]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idbb94f821-8b64-4252-a025-cd2d1ed28bba",
      "Code": "0345",
      "Gemeentenaam": "Veenendaal",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.529331806612831, 52.04019225231663], [5.512595115168294, 52.01851618755575], [5.5532413658193125, 51.99904446836377], [5.570487605246938, 51.996953166157375], [5.589497664616025, 52.009444457714494], [5.590046408597813, 52.0343987799881], [5.567430317348403, 52.040587904085406], [5.55790568966451, 52.04886833038911], [5.544657442104198, 52.04937702552039], [5.529331806612831, 52.04019225231663]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5714ce55-e189-46f5-8606-397d799de11c",
      "Code": "1896",
      "Gemeentenaam": "Zwartewaterland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.033039585895599, 52.55940041631525], [6.063142112896546, 52.56728519085018], [6.070158196663694, 52.55821346100892], [6.089403432024977, 52.55185477186785], [6.103318011563174, 52.56739823421268], [6.109746155349835, 52.56129389263726], [6.140515014328667, 52.552109119433496], [6.166815529455796, 52.565250410325035], [6.155056729846052, 52.5827156098325], [6.147413510099717, 52.584411260270116], [6.131382346631765, 52.581246046119894], [6.1205250549921, 52.597072116871], [6.105865751478619, 52.60368515357771], [6.103945147542361, 52.62555904422298], [6.096850671777815, 52.63561990348618], [6.104297911530653, 52.6571264032033], [6.119584351023321, 52.66795030516343], [6.08556222415246, 52.66328726645998], [6.054871757171026, 52.65023075809032], [6.017282794418541, 52.643222069614836], [5.981026495621828, 52.6283003457638], [5.991256651282306, 52.61419818629094], [5.971345083943138, 52.59416125028642], [5.9829470995580865, 52.57751561515714], [6.012853646565538, 52.58593734566397], [6.033039585895599, 52.55940041631525]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1f679e01-9bf1-4746-a950-c2803ad153d3",
      "Code": "0370",
      "Gemeentenaam": "Beemster",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.934336546359743, 52.51163959565568], [4.954169721701513, 52.51641567772164], [4.956991833607852, 52.52910479516314], [4.973493349060194, 52.54343304136102], [4.976472244961329, 52.56109606675287], [4.997167732274479, 52.57511344370385], [4.980548628826041, 52.58681343172341], [4.954953641675496, 52.58005909081356], [4.949858161844606, 52.5952916839115], [4.959304397531101, 52.60458950047777], [4.94829032189664, 52.61346340443464], [4.9269285026056036, 52.6067090635248], [4.9154048789880544, 52.60865906152805], [4.898903363535712, 52.601678633893194], [4.880402852149714, 52.5805112642636], [4.865429980646638, 52.57350257578811], [4.862215908753308, 52.563469977365536], [4.833916397692523, 52.538967828541956], [4.843401829377717, 52.52673088455048], [4.874680236339637, 52.52003306532189], [4.934336546359743, 52.51163959565568]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ida7927dad-bb05-416a-b98e-501b41214994",
      "Code": "0301",
      "Gemeentenaam": "Zutphen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.192802476593332, 52.1697964674319], [6.184688904862608, 52.16123343272193], [6.181631616964075, 52.152698658852586], [6.159525073697754, 52.1576443059623], [6.142435618264925, 52.155609525437164], [6.149608486026869, 52.14399431993948], [6.1732044772437575, 52.14501171020205], [6.183630612897732, 52.13421606908255], [6.1903723246739855, 52.11454652400618], [6.208833640061284, 52.11304869945295], [6.217887915760787, 52.09787262803627], [6.235918075162397, 52.113726959627996], [6.270136182026754, 52.111805222465364], [6.277544225780893, 52.12175303836606], [6.328303044096292, 52.137720413320295], [6.324030680238085, 52.15275518053384], [6.283541213581863, 52.14820518519289], [6.237995463093451, 52.14602910046462], [6.2357612911676, 52.15478996105898], [6.223492943574767, 52.15385735331829], [6.20722660411462, 52.16663125328168], [6.192802476593332, 52.1697964674319]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idcf22b5f3-d153-4ea8-978b-4fe9e8dc2786",
      "Code": "0302",
      "Gemeentenaam": "Nunspeet",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.876020415106807, 52.357872361804354], [5.8648103594788505, 52.35968105560448], [5.820754056941007, 52.391587544672326], [5.811660585242803, 52.40280709840123], [5.770739962600892, 52.39551580151947], [5.756276639080905, 52.40741361542343], [5.698776108989254, 52.382007119699786], [5.678903737648785, 52.378841905549564], [5.700618320928114, 52.357307144991815], [5.706184152743393, 52.3283680441898], [5.750750003264326, 52.31706370793902], [5.744674623465958, 52.28832243302139], [5.755414327109524, 52.2776398352644], [5.749221359315059, 52.268285497016876], [5.821420388918892, 52.27266592731405], [5.850817387943254, 52.26870940962628], [5.8521500518990255, 52.280098528398945], [5.8408224082749705, 52.30440285133814], [5.870258603298032, 52.323139788673814], [5.8809591109429, 52.335178906780904], [5.8648103594788505, 52.3513158467789], [5.876020415106807, 52.357872361804354]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id3c9f8495-f973-464c-9a40-e70bcd35d413",
      "Code": "0858",
      "Gemeentenaam": "Valkenswaard",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.417427230326759, 51.26228435321877], [5.441767945518931, 51.28209520249827], [5.46485438875273, 51.28455389563281], [5.484844348089297, 51.30001257545577], [5.491390079872055, 51.31422777829113], [5.47359509646264, 51.33395384504875], [5.496093599715952, 51.34661470164963], [5.493781035792702, 51.355403823084615], [5.527176026684378, 51.36693424606042], [5.516436323040811, 51.378323364833086], [5.43631970169975, 51.366227725044745], [5.423189042135535, 51.3748755422766], [5.41973979425001, 51.360716861122484], [5.42428653009911, 51.3307603700579], [5.433928745779101, 51.324316898394954], [5.4258151740483775, 51.3119951718816], [5.4109598905414, 51.320021250619654], [5.397672446982388, 51.31431256081301], [5.387795055310202, 51.28523215580786], [5.417427230326759, 51.26228435321877]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idcdbfaa38-94b8-4c96-aac4-31f630aa5b94",
      "Code": "0189",
      "Gemeentenaam": "Wierden",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.553993604605994, 52.28332026423042], [6.568182556135087, 52.27015071249826], [6.605379558900578, 52.27068766847017], [6.62607504621373, 52.28996156177776], [6.631797662023805, 52.30177459315983], [6.6047524229213925, 52.31223110419181], [6.619019766447883, 52.32613543778027], [6.5998137270853, 52.33910716362805], [6.6155705185623574, 52.362083227057774], [6.59883382711782, 52.38364624845615], [6.575943363877517, 52.41750273552726], [6.5159734858678195, 52.40611361675459], [6.508526246114981, 52.392152761484866], [6.514092077930259, 52.38166798961226], [6.495552370545562, 52.37618538653063], [6.499040814429787, 52.36355279077038], [6.520794593707814, 52.36140496688273], [6.518873989771556, 52.35515932110417], [6.490888046700364, 52.34939410961627], [6.468193563453556, 52.3264745678678], [6.499981518398566, 52.32356370128322], [6.524870977572526, 52.325683264330245], [6.533141333298047, 52.316639795329614], [6.5450961129012875, 52.31836370660786], [6.553170488633311, 52.29968329095343], [6.553993604605994, 52.28332026423042]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id895b374b-a0ab-4df5-ae0d-698b7d427b71",
      "Code": "0164",
      "Gemeentenaam": "Hengelo (O)",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.840477159098077, 52.27631157575493], [6.852471134700016, 52.284874610464904], [6.846356558902949, 52.29140286464973], [6.8191545358057395, 52.30084198541914], [6.823348507666548, 52.30875502079469], [6.802025884374212, 52.3135876245419], [6.775529389253586, 52.2931550367686], [6.742879122337195, 52.283122438346034], [6.7529524940028764, 52.25237464374389], [6.724182630957701, 52.25271377383142], [6.712149459357062, 52.22603554027956], [6.702036891692681, 52.21682250623517], [6.712384635349256, 52.20633773436256], [6.766788681543676, 52.191076880424006], [6.766318329559287, 52.20317252021235], [6.7558921939053125, 52.21738772304771], [6.77443190129001, 52.23847031015543], [6.813745487985257, 52.22948336283605], [6.81954649579273, 52.243670304830786], [6.842554547029131, 52.25390072913775], [6.840477159098077, 52.27631157575493]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id428a7a17-9adc-454a-b68a-5241aa5b3fd0",
      "Code": "0274",
      "Gemeentenaam": "Renkum",
      "aantal": 5
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.83533496845709, 51.973553190118245], [5.863046539537389, 51.97013362840238], [5.870846543278519, 51.97510753635273], [5.863752067513973, 51.99587925421355], [5.802959073531593, 52.004046637154744], [5.813385209185567, 52.02408357315926], [5.745144975450348, 52.019759664543336], [5.724371096139798, 52.00071185796076], [5.713709784493629, 51.9679575436741], [5.722607276198336, 51.964057547667586], [5.747888695359288, 51.96959667243047], [5.785791226101365, 51.95981842157354], [5.81601134109841, 51.97120754034621], [5.83533496845709, 51.973553190118245]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id54b88ad3-3ef1-4169-bf59-c3e155272397",
      "Code": "0743",
      "Gemeentenaam": "Asten",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.718256520342731, 51.43874504209354], [5.6939941971479575, 51.439253737224824], [5.705557016764207, 51.40941028952275], [5.7337389398288945, 51.3918603074934], [5.740206279614254, 51.36978859096374], [5.74545854343994, 51.37111685047321], [5.770465590609998, 51.333812540845614], [5.840195272295785, 51.34686904921527], [5.870376191294129, 51.352521217340666], [5.856579199752029, 51.353764694328255], [5.854109851833982, 51.37642988851108], [5.8318073285741665, 51.39960377782519], [5.787633438040226, 51.41277332955736], [5.756629403069198, 51.433855916665074], [5.718256520342731, 51.43874504209354]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id01ae0e57-814f-4060-a829-2b5f5935fb05",
      "Code": "0166",
      "Gemeentenaam": "Kampen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.000781278966199, 52.50013743352051], [6.027865714067312, 52.50960481513054], [6.01551897447708, 52.522774366862706], [6.0301782779905615, 52.526759145391104], [6.030452649981456, 52.53806348164189], [6.003603390872538, 52.55038520815525], [6.033039585895599, 52.55940041631525], [6.012853646565538, 52.58593734566397], [5.9829470995580865, 52.57751561515714], [5.971345083943138, 52.59416125028642], [5.991256651282306, 52.61419818629094], [5.981026495621828, 52.6283003457638], [5.955274724476487, 52.62485252320731], [5.932697829225777, 52.614932968147244], [5.915647569791647, 52.61351992611589], [5.9054566101298684, 52.61922861592254], [5.840508840285377, 52.61041123364693], [5.837216376394649, 52.60733080201859], [5.777952026361535, 52.60752862790297], [5.777912830362836, 52.58085039435112], [5.815345009120524, 52.57745909347588], [5.8550897518014615, 52.550837381605284], [5.864300811495761, 52.51816784984051], [5.876216395100303, 52.522011324165774], [5.903104850207919, 52.50440482045518], [5.925603353461231, 52.47408093846244], [5.958136032381525, 52.48408527604439], [5.96526970414477, 52.476454849075104], [6.000781278966199, 52.50013743352051]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id599cda4b-4795-4c72-b864-7fc3232f5c33",
      "Code": "1655",
      "Gemeentenaam": "Halderberge",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.591763517729177, 51.561029699486426], [4.59674140956397, 51.59030793037596], [4.613909256994197, 51.60802747744906], [4.601248949414372, 51.62523832939089], [4.570676070429036, 51.630410063225625], [4.5193293121331495, 51.60794269492719], [4.499574528788778, 51.61028834469922], [4.480838841410585, 51.61981224799051], [4.456850890206706, 51.614160079865115], [4.437840830837618, 51.61712746813095], [4.42666997120836, 51.6117296475712], [4.431687059041852, 51.584881848975584], [4.443994602633385, 51.56908403906511], [4.457517222184591, 51.561453612095825], [4.500201664767965, 51.55854274551125], [4.509451920460964, 51.56857534393382], [4.536614747559474, 51.565777520711755], [4.533361479667445, 51.54924492894498], [4.591763517729177, 51.561029699486426]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id768f13b9-3898-4a8b-8b99-d56c027fe079",
      "Code": "1676",
      "Gemeentenaam": "Schouwen-Duiveland",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.202704034641421, 51.66076220605898], [4.151827628329925, 51.68523609404194], [4.123096961283449, 51.68574478917322], [4.098089914113391, 51.69046434955793], [4.0478014477823825, 51.694364345564445], [4.036708980150523, 51.71103824153436], [4.03502355220646, 51.73019909147944], [4.01887480074241, 51.74271864387719], [4.01334816492583, 51.759025148918944], [3.974504930214973, 51.7638012309849], [3.958944118731411, 51.77213817896986], [3.940326019349315, 51.77380556856685], [3.9050496205200806, 51.764620795363086], [3.8861571491470905, 51.74935994142452], [3.8758877974879136, 51.747692551827534], [3.8474315024323307, 51.75340124163418], [3.826226467136091, 51.765836011510046], [3.7736646328805317, 51.78152077805801], [3.6853560478113483, 51.73364691403593], [3.6113540022673543, 51.65036221670826], [3.7488927617026695, 51.65033395586764], [3.7079721390607574, 51.598729660882796], [3.722553050576841, 51.59728835801082], [3.7694314650210234, 51.60082096308919], [3.8011410279686357, 51.60664269625835], [3.848764166388102, 51.60599269692393], [3.8790234773838455, 51.59367097041057], [3.924765207865753, 51.60785791240531], [3.948753159069632, 51.615290513490194], [3.9800707620302527, 51.613736167255716], [4.014916004873796, 51.60686878298336], [4.031221540332642, 51.60915791107414], [4.052936123611971, 51.62099920329685], [4.05575823551831, 51.61269051615252], [4.070417539031792, 51.617240511493456], [4.08985875438657, 51.63060788911001], [4.094836646221362, 51.64095135677948], [4.126898973157266, 51.65802090451817], [4.188632671108426, 51.638803532891835], [4.195883930867769, 51.639425271385626], [4.202704034641421, 51.66076220605898]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id936c1c76-c3e7-4799-a4e6-223f387c6f55",
      "Code": "0342",
      "Gemeentenaam": "Soest",
      "aantal": 7
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.314263361750598, 52.20303121600921], [5.281534702836808, 52.19248992245535], [5.281534702836808, 52.19248992245535], [5.243161820110341, 52.17007907583817], [5.264092483415687, 52.125087817560036], [5.2719316831555165, 52.1270378155633], [5.282122642817296, 52.11205957003101], [5.306463358009467, 52.11027913707151], [5.331274425186029, 52.12664216379452], [5.338721664938868, 52.1600464774156], [5.349892524568125, 52.17561820060105], [5.326335729349936, 52.18180732469836], [5.310304565881984, 52.19183992312093], [5.314263361750598, 52.20303121600921]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id501b40b1-e50b-4b49-8872-a9aec2b2c9c3",
      "Code": "0638",
      "Gemeentenaam": "Zoeterwoude",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.547236863206944, 52.13466824253258], [4.547236863206944, 52.13466824253258], [4.550725307091168, 52.13837041265471], [4.524032831977047, 52.14738562081472], [4.516036848242421, 52.14470084095515], [4.516036848242421, 52.14470084095515], [4.513136344338684, 52.139924758889194], [4.472960445672056, 52.118955215143984], [4.492205681033338, 52.09001611434197], [4.504434832627473, 52.093294371854704], [4.530539367761106, 52.08052047189131], [4.537124295542563, 52.08394003360718], [4.535321279602402, 52.12042477885659], [4.547236863206944, 52.13466824253258]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ide602212c-e174-453e-bb88-fb0116dcfccb",
      "Code": "0431",
      "Gemeentenaam": "Oostzaan",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.898746579540916, 52.424483163162115], [4.893337531720433, 52.45732225997065], [4.906468191284648, 52.47981788910972], [4.890515419814094, 52.478970063890905], [4.861627968772821, 52.46845703117768], [4.852495301075919, 52.47037876834031], [4.842931477393327, 52.45226356949843], [4.862686260737698, 52.42993750540312], [4.898746579540916, 52.424483163162115]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ide16f5322-12a3-4353-9ca8-1636249e2217",
      "Code": "0737",
      "Gemeentenaam": "Tytsjerksteradiel",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.943476728868044, 53.121621579748115], [5.974441567840371, 53.13462156643652], [6.011795354600661, 53.153951981425365], [6.085170264165468, 53.15898241105696], [6.105003439507238, 53.15180415753771], [6.114606459188529, 53.17596717627377], [6.085287852161565, 53.19422367931879], [6.081172272298155, 53.20289975739127], [6.081172272298155, 53.20289975739127], [6.086306948127744, 53.215023658020236], [6.0272385780881255, 53.23014320775567], [6.019791338335287, 53.24091058803454], [5.983339059545078, 53.22983233850877], [5.955980252453072, 53.22805190554927], [5.943006376883654, 53.25043449132583], [5.92564254945993, 53.252214924285326], [5.882252578899972, 53.27677359479016], [5.861165131599829, 53.288643147853485], [5.838666628346518, 53.274936640149406], [5.8322776805585566, 53.267673604108275], [5.832160092562459, 53.2428605860378], [5.859244527663571, 53.243284498647206], [5.852542011886017, 53.230482337843185], [5.879900818978022, 53.23333668274651], [5.897734998386136, 53.20866496887917], [5.857715883714304, 53.20405845185697], [5.86206663956991, 53.19374324502813], [5.85097417193805, 53.191708464502995], [5.861949051573813, 53.17153022429534], [5.922114909577006, 53.168365010145116], [5.931953105250493, 53.161130234944615], [5.9086314860244995, 53.1447672082216], [5.9228596335522905, 53.13128678724254], [5.943476728868044, 53.121621579748115]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "ideb1f9865-fcdd-49ab-b767-6cf3e9514af7",
      "Code": "1705",
      "Gemeentenaam": "Lingewaard",
      "aantal": 2
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.897930978379632, 51.93435540416864], [5.891189266603378, 51.90728151884801], [5.873668655184858, 51.90841195247309], [5.874726947149735, 51.897559789672336], [5.857127943733817, 51.89462066224713], [5.872845539212176, 51.88738588704663], [5.886760118750374, 51.86520112715446], [5.8959711784446736, 51.870542426032955], [5.923643553526274, 51.874611987083235], [5.9373229570722765, 51.87141851209239], [5.95605864445047, 51.85646852740072], [5.981065691620527, 51.859831567435336], [5.989571223338243, 51.87243590235496], [6.012187314587652, 51.88167719723998], [6.046287833455912, 51.8709098169611], [6.02931596601918, 51.8817054580806], [6.014539074509601, 51.90126195979447], [5.987062679421497, 51.91330107790155], [5.968601364034198, 51.92822280175259], [5.965779252127859, 51.93876409530645], [5.955235528477788, 51.94874017204777], [5.931835517254395, 51.95947929148602], [5.929444561333748, 51.95060538752915], [5.91690184175002, 51.95052060500727], [5.897930978379632, 51.93435540416864]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id502b89e8-959f-46d7-9faf-9f9ecf41b3b7",
      "Code": "0353",
      "Gemeentenaam": "IJsselstein",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.062625050102059, 51.99124447635073], [5.077519529607736, 51.997461861288656], [5.062781834096856, 52.026824874700075], [5.055608966334911, 52.028605307659575], [5.055608966334911, 52.028605307659575], [5.0170792996136475, 52.06113353522122], [5.0102983918386945, 52.053729194976945], [4.990308432502129, 52.05242919630811], [4.979960688845553, 52.0354444310913], [4.979960688845553, 52.0354444310913], [4.995207932339522, 52.0217096625466], [5.020293371506978, 52.025637919393745], [5.03405116705038, 52.00384881127035], [5.042439110771998, 52.0056857659111], [5.062625050102059, 51.99124447635073]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb43c1cd2-95eb-4210-a80c-fe5a53503bdb",
      "Code": "0824",
      "Gemeentenaam": "Oisterwijk",
      "aantal": 3
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.224426132732148, 51.517140613992744], [5.234773876388723, 51.530988425899956], [5.243945740084325, 51.5257884312246], [5.253313583773421, 51.54031450330685], [5.273264347111288, 51.5528340557046], [5.2461799120101755, 51.579512289256456], [5.247238203975053, 51.58702967286323], [5.214156781072971, 51.58556010915063], [5.186876365978363, 51.60175357082988], [5.179546714221622, 51.59765574893897], [5.150776851176446, 51.580105766909625], [5.137371819621337, 51.562584045720904], [5.14783715127401, 51.547125365897955], [5.130198951859393, 51.53031016572491], [5.171001986505207, 51.51055583812666], [5.190129633870392, 51.50741888481707], [5.224426132732148, 51.517140613992744]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id653e161f-4236-43ba-8a70-bff886a2d85a",
      "Code": "0230",
      "Gemeentenaam": "Elburg",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.756276639080905, 52.40741361542343], [5.770739962600892, 52.39551580151947], [5.811660585242803, 52.40280709840123], [5.820754056941007, 52.391587544672326], [5.8648103594788505, 52.35968105560448], [5.876020415106807, 52.357872361804354], [5.911688773923033, 52.386783201765745], [5.924349081502858, 52.39138971878794], [5.906005354111656, 52.40860057072976], [5.916274705770833, 52.41295274018631], [5.899969170311987, 52.41982012445867], [5.868729959348766, 52.444774446732275], [5.877627451053472, 52.45311139471723], [5.840273664293183, 52.471057028515354], [5.831376172588476, 52.47340267828739], [5.815619381111418, 52.45520269692363], [5.822400288886371, 52.44969183300137], [5.8114646052493075, 52.43691793303798], [5.756276639080905, 52.40741361542343]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id048540d1-a819-4734-ad91-e0d234de35f6",
      "Code": "0279",
      "Gemeentenaam": "Scherpenzeel",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.5315267825399825, 52.102253058333446], [5.519376022943247, 52.100500886214576], [5.493859427790101, 52.11109870144969], [5.484295604107508, 52.10553131584618], [5.4860986200476685, 52.09366176278285], [5.459249360938752, 52.080237863485046], [5.484060428115313, 52.0696117874093], [5.496132795714651, 52.07167482877507], [5.509694611264557, 52.07896612565683], [5.522668486833975, 52.07755308362548], [5.539170002286317, 52.09781610635502], [5.5315267825399825, 52.102253058333446]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id483b21a6-f7a3-4340-9a9e-7ac350867e9e",
      "Code": "1955",
      "Gemeentenaam": "Montferland",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.299023633068027, 51.86782938533277], [6.3245794242198725, 51.8690163406391], [6.33163470398572, 51.87480981296763], [6.324226660231581, 51.88891197244048], [6.3322618399649055, 51.893264141897035], [6.3060397168351745, 51.906405432788574], [6.316152284499555, 51.91273586108902], [6.311683940647852, 51.92056411394268], [6.28965578937893, 51.92536845684927], [6.30576534484428, 51.938820616987705], [6.302080920966561, 51.944133655025574], [6.259906026366276, 51.942974960559866], [6.226707015468097, 51.94464235015686], [6.20307182825251, 51.94215539618169], [6.204718060197874, 51.93667279310006], [6.163052713580678, 51.95535320875448], [6.144669790190777, 51.98050535691248], [6.122328070932262, 51.97149014875248], [6.090383331992455, 51.9678445003116], [6.091441623957332, 51.938707573625194], [6.167913017419373, 51.90095109054757], [6.19107785265057, 51.8916532739813], [6.1820235769510665, 51.88577501913089], [6.19064669666488, 51.87766415787095], [6.215104999853148, 51.86763155944838], [6.233840687231342, 51.87020329594543], [6.262218590289526, 51.86825329794217], [6.279895985702842, 51.874075031111325], [6.299023633068027, 51.86782938533277]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id3dda084a-fc74-4618-ba00-17b521070692",
      "Code": "1709",
      "Gemeentenaam": "Moerdijk",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.4235342913124285, 51.709483895299876], [4.379438792775885, 51.683596965285574], [4.361839789359967, 51.66296655162789], [4.397155384187901, 51.64304265898588], [4.408796595801548, 51.63286875636017], [4.424984543264297, 51.62947745548493], [4.437840830837618, 51.61712746813095], [4.456850890206706, 51.614160079865115], [4.480838841410585, 51.61981224799051], [4.499574528788778, 51.61028834469922], [4.5193293121331495, 51.60794269492719], [4.570676070429036, 51.630410063225625], [4.601248949414372, 51.62523832939089], [4.612733377033223, 51.62846006522236], [4.631508260410115, 51.62447528669396], [4.644286155986038, 51.63247310459139], [4.665060035296587, 51.63431005923214], [4.699042966168749, 51.63806875103553], [4.689204770495263, 51.6523969972334], [4.696769598244199, 51.65462960364293], [4.6849324066370555, 51.66644263502501], [4.709861061809715, 51.67328175845673], [4.697318342225987, 51.68772304801711], [4.666941443234146, 51.68650783187015], [4.656515307580173, 51.7073078105716], [4.645148467957419, 51.719064320272416], [4.620415792778256, 51.714118673162695], [4.589294169811131, 51.703323032043194], [4.530421779765009, 51.69343173782376], [4.50043684076016, 51.69289478185185], [4.4235342913124285, 51.709483895299876]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id83f16e90-eae1-47cc-a34e-021add3f7dbe",
      "Code": "0114",
      "Gemeentenaam": "Emmen",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.861878174387812, 52.649693802118406], [6.873754561993655, 52.6531416246749], [6.913224932683698, 52.64689597889634], [6.918712372501579, 52.64000033378336], [6.939721427804323, 52.63793729241759], [6.9761737065945315, 52.64624597956192], [7.013096337369131, 52.63666555458938], [7.041905396413005, 52.63279381942348], [7.054761683986326, 52.64440902492117], [7.064952643648105, 52.7300676328615], [7.0715375714295625, 52.81041320276397], [7.092742606725802, 52.83819360910027], [7.072047119412652, 52.83847621750654], [7.072164707408749, 52.84514577589451], [7.040259164467641, 52.872897921390184], [7.014781765313193, 52.872982703912065], [6.957594803211135, 52.86187619354567], [6.9499515834648005, 52.84881968517601], [6.907659100868418, 52.83420883057187], [6.858507318499686, 52.813691460276694], [6.849805806788474, 52.80464799127606], [6.831383687399875, 52.77881758294302], [6.839693239124093, 52.7609849925074], [6.830560571427192, 52.74227631601235], [6.837498263196942, 52.73450458483993], [6.8263665995663825, 52.73088719723968], [6.840869119085069, 52.69957418582501], [6.84953143479758, 52.699348099099986], [6.861878174387812, 52.649693802118406]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idce4f0f9f-6598-46da-863f-49bda2163702",
      "Code": "0373",
      "Gemeentenaam": "Bergen (NH)",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.594076081652427, 52.575480834631996], [4.6103816171112735, 52.5737004016725], [4.655182643624402, 52.58291343571689], [4.672585667046824, 52.59091125361432], [4.674427878985684, 52.60376993609959], [4.689988690469246, 52.62375035042285], [4.714603777652312, 52.62479600152605], [4.710057041803211, 52.642487287758534], [4.72573544128287, 52.65729596824706], [4.742589720723505, 52.66116770341296], [4.752427916396991, 52.67145464940117], [4.741727408752123, 52.680808987648696], [4.728871121178802, 52.69140680288381], [4.715818853611985, 52.71005895769761], [4.689831906474449, 52.73297849944608], [4.671057023097557, 52.740637187255984], [4.651027867762291, 52.7558415195133], [4.63448715631125, 52.75832847348847], [4.623747452667684, 52.725771985086205], [4.616966544892731, 52.68230681220193], [4.594076081652427, 52.575480834631996]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5e58cea8-bb6c-4ce4-9c39-4835c27b134a",
      "Code": "1884",
      "Gemeentenaam": "Kaag en Braassem",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.558446918834901, 52.21880076507906], [4.557153450877829, 52.19774643881197], [4.546766511222554, 52.19896165495893], [4.538143391508742, 52.180083413420114], [4.5527634990235235, 52.16309864820331], [4.559622798795875, 52.16592473226601], [4.571499186401717, 52.153122571461985], [4.642679120039372, 52.16196821457823], [4.679876122804865, 52.162787778956414], [4.681208786760637, 52.167507339341114], [4.688930398504369, 52.19192470564281], [4.69531934629233, 52.18915514326137], [4.707666085882562, 52.20506599653435], [4.720757549448078, 52.20127904389034], [4.728753533182704, 52.20981381775968], [4.723775641347913, 52.216568158669524], [4.724324385329701, 52.23197031681122], [4.704060054002241, 52.2338355322926], [4.6860690905993305, 52.22657249625147], [4.670351495120972, 52.23075510066426], [4.632644944372391, 52.21617250690075], [4.601719301398761, 52.21464642150689], [4.558446918834901, 52.21880076507906]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb756bac8-4c5f-41e6-9695-66e49adf247a",
      "Code": "0361",
      "Gemeentenaam": "Alkmaar",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.9269285026056036, 52.6067090635248], [4.923244078727884, 52.611230798025105], [4.8840088840300355, 52.613152535187744], [4.889300343854421, 52.62553078338235], [4.8733867683825665, 52.63443294817985], [4.838541525539022, 52.64613293619941], [4.8302319738148025, 52.63268077606097], [4.785587731296472, 52.63915250856455], [4.800521406800847, 52.66023509567227], [4.7976992948945085, 52.65899161868468], [4.7976992948945085, 52.65899161868468], [4.77367214769193, 52.64836554260894], [4.779041999513714, 52.67648507903277], [4.741727408752123, 52.680808987648696], [4.752427916396991, 52.67145464940117], [4.742589720723505, 52.66116770341296], [4.72573544128287, 52.65729596824706], [4.710057041803211, 52.642487287758534], [4.714603777652312, 52.62479600152605], [4.739454040827573, 52.61385905620342], [4.733339465030506, 52.6075568887436], [4.737455044893916, 52.59385038103952], [4.752153544406097, 52.59190038303626], [4.756465104263003, 52.591561252948736], [4.74509826464025, 52.56686127824077], [4.781628935427857, 52.55711128822447], [4.777748531556641, 52.53373957302597], [4.782491247399238, 52.519580891871854], [4.789860095154679, 52.519241761784336], [4.811182718447016, 52.52998088122258], [4.824470162006028, 52.54269825950472], [4.833916397692523, 52.538967828541956], [4.862215908753308, 52.563469977365536], [4.865429980646638, 52.57350257578811], [4.880402852149714, 52.5805112642636], [4.898903363535712, 52.601678633893194], [4.9154048789880544, 52.60865906152805], [4.9269285026056036, 52.6067090635248]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id2b4e9a61-014c-4ee6-81dc-c8dc62562dc3",
      "Code": "0879",
      "Gemeentenaam": "Zundert",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.638720324170759, 51.524403650033875], [4.625001724626056, 51.52109713168052], [4.616378604912244, 51.508097144992114], [4.579338386141547, 51.510725403170426], [4.589725325796822, 51.496736287060074], [4.576202706245615, 51.492553682647284], [4.5722831063757, 51.48266238842785], [4.556055962914252, 51.485544994171796], [4.548177567175724, 51.47330805018032], [4.529912231781919, 51.449512422372415], [4.535399671599801, 51.423032014704944], [4.574713258295048, 51.432838526402506], [4.630097204456946, 51.4259146204489], [4.637466052212385, 51.42300375386432], [4.669685163143087, 51.42636679389893], [4.666588679245853, 51.44439721021893], [4.6930851743664785, 51.45171676794132], [4.704060054002241, 51.46545153648602], [4.716916341575562, 51.46889935904251], [4.734005797008391, 51.485544994171796], [4.74372640468578, 51.51250583612992], [4.738278160866598, 51.53110146926247], [4.738278160866598, 51.53110146926247], [4.703981662004843, 51.54981014575752], [4.694182662330055, 51.54483623780717], [4.681208786760637, 51.54079493759752], [4.659102243494316, 51.525505822818324], [4.6381715801889705, 51.517197135673996], [4.638720324170759, 51.524403650033875]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id60edc2e2-7157-4d4f-928e-379a08fde6a3",
      "Code": "0627",
      "Gemeentenaam": "Waddinxveen",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.706019853937198, 52.04010746979475], [4.677328382889421, 52.04397920496064], [4.659964555465698, 52.06410092348705], [4.63821077618767, 52.06483570534335], [4.6368389162331995, 52.07373787014084], [4.606893173227049, 52.077044388494194], [4.6074419172088374, 52.06551396551839], [4.610930361093062, 52.04869876534535], [4.591097185751292, 52.03507704016315], [4.624727352635162, 52.014729234911734], [4.636760524235801, 52.01167706412402], [4.648636911841644, 52.02057922892152], [4.6673334032211375, 52.02269879196854], [4.666588679245853, 52.012977062792864], [4.681835922739823, 52.0193074910933], [4.667294207222438, 52.025072702581205], [4.706019853937198, 52.04010746979475]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id5c90b0ee-1b88-4eab-a578-c74a4d43cbc4",
      "Code": "0758",
      "Gemeentenaam": "Breda",
      "aantal": 19
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.821334482110096, 51.62939267296305], [4.821334482110096, 51.62939267296305], [4.7875083352327295, 51.63705136077296], [4.768184707874049, 51.62885571699114], [4.762658072057469, 51.635044841088444], [4.7369063009121275, 51.643070919826506], [4.699042966168749, 51.63806875103553], [4.665060035296587, 51.63431005923214], [4.657965559532041, 51.62046224732493], [4.663884155335612, 51.604070959761295], [4.682110294730717, 51.59889922592656], [4.693673114346966, 51.568123170483794], [4.694182662330055, 51.54483623780717], [4.703981662004843, 51.54981014575752], [4.738278160866598, 51.53110146926247], [4.738278160866598, 51.53110146926247], [4.74372640468578, 51.51250583612992], [4.734005797008391, 51.485544994171796], [4.746548516592119, 51.48950151185957], [4.760031940144626, 51.50236019434484], [4.747018868576508, 51.515360181033245], [4.770066115811608, 51.527371038299705], [4.830937501791388, 51.55037536257006], [4.8629998287272915, 51.557271007683035], [4.870094304491838, 51.57080795034335], [4.864254100685664, 51.57908837664705], [4.842617909403733, 51.5858427175569], [4.842696301401132, 51.61698616392781], [4.821334482110096, 51.62939267296305]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idb3152fda-0aa6-4b87-833d-ba4c2621f050",
      "Code": "0534",
      "Gemeentenaam": "Hillegom",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.611675085068345, 52.31355936370127], [4.601640909401363, 52.31644196944522], [4.601484125406566, 52.31649849112648], [4.568990642484971, 52.31649849112648], [4.563699182660587, 52.3092919767666], [4.542533343363046, 52.2866550434244], [4.57275345836009, 52.271252885282706], [4.58796150585536, 52.280098528398945], [4.611675085068345, 52.31355936370127]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id64105763-de2e-4bd7-879b-839235408748",
      "Code": "0377",
      "Gemeentenaam": "Bloemendaal",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[4.601484125406566, 52.31649849112648], [4.601640909401363, 52.31644196944522], [4.611675085068345, 52.31355936370127], [4.611400713077451, 52.32220718093313], [4.590195677781212, 52.32833978334918], [4.605717293266075, 52.363411486567244], [4.599524325471609, 52.37757016772135], [4.610812773096964, 52.38980711171283], [4.62159167273923, 52.387970157072075], [4.631665044404912, 52.41165274151747], [4.625001724626056, 52.42349403374017], [4.5878047218605635, 52.43443097906281], [4.544061987312313, 52.43929184365064], [4.526031827910704, 52.4051810090139], [4.5916459297330805, 52.39172884887546], [4.547315255204342, 52.31398327631068], [4.563699182660587, 52.3092919767666], [4.568990642484971, 52.31649849112648], [4.601484125406566, 52.31649849112648]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idfc5aebe3-86ca-4003-97b2-00394d3315ad",
      "Code": "0352",
      "Gemeentenaam": "Wijk bij Duurstede",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.256253283675857, 51.97095319278056], [5.270363843207551, 51.96541406801768], [5.298310590280044, 51.961994506301814], [5.314851301731085, 51.955607556320125], [5.333116637124888, 51.95719016339523], [5.352322676487472, 51.969483629067966], [5.390969931204833, 51.97072710605555], [5.378388015622407, 51.986129264197245], [5.39943626692385, 51.987937957997374], [5.415271450398306, 51.99669881859173], [5.39896591493946, 52.002916203529665], [5.381641283514436, 52.00212489999211], [5.346560864678697, 52.019024882687035], [5.31465532173759, 52.02699443974384], [5.291216114515498, 52.00834228493004], [5.279927666890144, 52.010716195542706], [5.277536710969495, 52.00009011946697], [5.2647196193948735, 52.00319881193593], [5.24320101610904, 51.99879012079813], [5.256214087677158, 51.99370316948527], [5.254136699746103, 51.986072742515994], [5.271461331171127, 51.98112709540627], [5.256253283675857, 51.97095319278056]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "id1ad8021d-f858-45d1-acec-45081a3e1530",
      "Code": "0262",
      "Gemeentenaam": "Lochem",
      "aantal": 0
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[6.49241669064963, 52.17737037271993], [6.479168443089318, 52.18225949814839], [6.4703101473833105, 52.199385567568335], [6.454906119894544, 52.202352955834165], [6.431937264656843, 52.220948588966706], [6.416415649171979, 52.24217248027756], [6.38184477831933, 52.246100737124706], [6.350879939347002, 52.2416920459869], [6.338023651773681, 52.23620944290527], [6.338689983751566, 52.22716597390464], [6.2979261451044515, 52.22552684514827], [6.292791469274862, 52.23086814402677], [6.2712728659890296, 52.22640293120771], [6.259984418363675, 52.229144232748524], [6.189157248714311, 52.229172493589154], [6.166266785474008, 52.231009448229905], [6.189392424706506, 52.217133375482064], [6.189588404700002, 52.207722515553286], [6.156781353788814, 52.19831165562451], [6.193939160555608, 52.175872548166694], [6.192802476593332, 52.1697964674319], [6.20722660411462, 52.16663125328168], [6.223492943574767, 52.15385735331829], [6.2357612911676, 52.15478996105898], [6.237995463093451, 52.14602910046462], [6.283541213581863, 52.14820518519289], [6.324030680238085, 52.15275518053384], [6.328303044096292, 52.137720413320295], [6.357739239119352, 52.13551606775139], [6.368792510752513, 52.123844340572454], [6.392584481962897, 52.13150302838236], [6.398307097772973, 52.11768347731577], [6.39152618999802, 52.11304869945295], [6.4239804769209155, 52.096911759454954], [6.455219687884138, 52.10799000898072], [6.478541307110131, 52.10069871209897], [6.492181514657435, 52.12426825318185], [6.481049851026877, 52.142553017067506], [6.461451851677302, 52.15216170288067], [6.483754374937118, 52.15716387167164], [6.49241669064963, 52.17737037271993]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idc6dc4d9a-bb5a-453f-a896-1b8f2ccb1843",
      "Code": "0034",
      "Gemeentenaam": "Almere",
      "aantal": 1
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.30544426204329, 52.30762458716961], [5.315164869720679, 52.302396331653625], [5.33350859711188, 52.314265884716946], [5.354008104431536, 52.30940502012911], [5.379211131595088, 52.31398327631068], [5.30125029018248, 52.381978858859156], [5.346364884685201, 52.39610927917264], [5.350754836539506, 52.40020710106355], [5.279339726909656, 52.422137513390076], [5.254293483740899, 52.43898097440375], [5.074619025703999, 52.583676478413814], [5.060430074174906, 52.578928657188484], [5.100723560837633, 52.50805046889605], [5.112991908430466, 52.49787656627035], [5.151012027168641, 52.46636572897128], [5.185504506023893, 52.41563752004588], [5.137332623622638, 52.415552737523996], [5.0791657615531, 52.388648417247126], [5.079283349549198, 52.37042017504273], [5.146151723329947, 52.319663705276696], [5.151129615164739, 52.31864631501413], [5.224582916726945, 52.325768046852126], [5.281142742849817, 52.31678109953275], [5.30544426204329, 52.30762458716961]]]]
    }
  }, {
    "type": "Feature",
    "properties": {
      "gml_id": "idfb1af852-995c-419e-b530-1e45d1caa28b",
      "Code": "0268",
      "Gemeentenaam": "Nijmegen",
      "aantal": 3
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[[5.886760118750374, 51.86520112715446], [5.872845539212176, 51.88738588704663], [5.857127943733817, 51.89462066224713], [5.830239488626201, 51.893857619550204], [5.837804316375136, 51.88342936935885], [5.817069633063286, 51.87025981762668], [5.825692752777099, 51.86621851741703], [5.81738320105288, 51.849488099765864], [5.8078585733689865, 51.851890271219155], [5.787829418033721, 51.841207673462165], [5.7750907184564975, 51.844259844249876], [5.764742974799923, 51.832277247824045], [5.757687695034075, 51.82402508236097], [5.77132790258138, 51.82306421377965], [5.800960077597936, 51.79514250324021], [5.810210333290936, 51.79059250789927], [5.840939996271068, 51.80720988218793], [5.87911689900404, 51.809527271119336], [5.88048875895851, 51.82032291223884], [5.908357114033605, 51.82930985955821], [5.89706866640825, 51.832135943620905], [5.885858610780294, 51.84799027521264], [5.886760118750374, 51.86520112715446]]]]
    }
  }]
};
},{}],"data/gemeenten_borders_simplified.json":[function(require,module,exports) {
module.exports = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [[[4.220224646059941, 51.82580551532047], [4.220224646059941, 51.82580551532047]], [[5.515769991062925, 51.29520823254918], [5.565823281401739, 51.32044516322906], [5.605332848090482, 51.3318060211611], [5.631280599229319, 51.32753863422643], [5.644097690803941, 51.33347341075809], [5.63994291494183, 51.34672774501214], [5.65471980645141, 51.35387773769076], [5.638923818975652, 51.38917552763384], [5.63900221097305, 51.422466797892405], [5.594044400465126, 51.41723854237642], [5.566724789371819, 51.40559507603811], [5.525804166729907, 51.404690729138046], [5.5048735034245615, 51.4001407337971], [5.516436323040811, 51.378323364833086], [5.527176026684378, 51.36693424606042], [5.493781035792702, 51.355403823084615], [5.496093599715952, 51.34661470164963], [5.47359509646264, 51.33395384504875], [5.491390079872055, 51.31422777829113], [5.484844348089297, 51.30001257545577]], [[6.776509289221065, 53.0947737811525], [6.737470074516712, 53.11947375586047], [6.695373571913826, 53.12116940629809], [6.68827909614928, 53.155167197572325], [6.66201777702085, 53.17161500681722], [6.657235865179553, 53.180771519180354], [6.639793645758433, 53.19029542247164], [6.666878080859544, 53.20202367133183], [6.684006732291072, 53.20219323637559], [6.6829092443274964, 53.21106714033246], [6.6980780958240675, 53.21474104961397], [6.708817799467634, 53.235427984952906], [6.717676095173642, 53.241871456615854], [6.698313271816263, 53.25614318113247], [6.772511297353752, 53.28307576224997], [6.764632901615222, 53.298138790304144], [6.753070081998974, 53.298845311319816], [6.7378228385050045, 53.3129757316333], [6.72649519488095, 53.30489313121399], [6.709680111439015, 53.3100366042081], [6.689572564106351, 53.2974605301291], [6.654060989284922, 53.30865182301738], [6.625839870221535, 53.26620404039567], [6.636030829883314, 53.25139535990714], [6.619294138438777, 53.24944536190388], [6.586330303532792, 53.25583231188558], [6.5857423635523045, 53.26154100169222], [6.552582548652825, 53.262162740186014], [6.5082518741240865, 53.25758448400445], [6.495865938535156, 53.24582797430363], [6.4809322630307795, 53.25018014376018], [6.463450847610959, 53.200045412487945], [6.482578494976144, 53.203719321769455], [6.513386549953675, 53.19693672001898], [6.5294961054190255, 53.195184547900105], [6.534317213259021, 53.18402151585246], [6.54819259679852, 53.18111064926788], [6.563675016284684, 53.15762589070687], [6.581509195692797, 53.16358892807916], [6.587741359485962, 53.14575633764355], [6.6000097070787955, 53.14471068654035], [6.627682082160394, 53.12266723085131], [6.63575645789242, 53.10669985589708], [6.695373571913826, 53.12116940629809]], [[5.153050219100997, 52.056753104924034], [5.160183890864242, 52.0802943851663], [5.195146721703884, 52.07735525774109], [5.192755765783235, 52.086087857494825], [5.205533661359158, 52.084900902188494], [5.210825121183543, 52.10069871209897], [5.222309548802394, 52.10389218708981], [5.218233164937683, 52.113670437946745], [5.230932668516207, 52.11677913041571], [5.225014072712635, 52.165698645540985], [5.220976884846623, 52.17824645877936], [5.212079393141916, 52.17638124329798], [5.215489445028742, 52.2042746929968], [5.192598981788438, 52.177822546169956], [5.124123572061024, 52.180818195276416], [5.115304472353716, 52.1798573266951], [5.118832112236639, 52.17239646476958], [5.094883357031459, 52.15535517787152], [5.120517540180703, 52.14554866617396], [5.107112508625594, 52.13319867881998], [5.14689644730523, 52.12039651801596], [5.1619085148070045, 52.1072269662838], [5.160889418840827, 52.094566109682916], [5.186170838001778, 52.09292698092655], [5.192755765783235, 52.086087857494825]], [[6.109589371355039, 51.99644447102609], [6.083563228218804, 51.99554012412602], [6.076468752454257, 52.010659673861454], [6.064004424867928, 52.01501184331801], [6.048012457398674, 52.00978358780202], [6.033235565889095, 51.99720751372302], [6.011991334594157, 51.995653167488534], [6.0019571589271745, 51.980646661115614], [6.0017219829349795, 51.97753796864665], [5.984005391522963, 51.97242275649317], [5.987768207398082, 51.96306841824564], [5.9843189595125565, 51.943031482241125], [5.965779252127859, 51.93876409530645], [5.968601364034198, 51.92822280175259], [5.987062679421497, 51.91330107790155], [6.0152837984848855, 51.91694672634243], [6.037468733748604, 51.91395107723597], [6.06345568088614, 51.94927712801968], [6.060829548973297, 51.97448579785893], [6.068864728706622, 51.98039231354997], [6.046797381439001, 51.98059013943436], [6.034293857853973, 51.97134884454934], [6.0218295302676434, 51.978216228821694], [6.0017219829349795, 51.97753796864665]], [[6.07313709256483, 51.18281486937573], [6.055185325160618, 51.18456704149461], [6.063573268882237, 51.16551923491203], [6.029511946012676, 51.16096923957109], [6.013715958536919, 51.16664966853711], [5.999958162993517, 51.16221271655868], [5.983574235537273, 51.17623009350965], [5.955470704469983, 51.159047502408455], [5.913883749850186, 51.13318883323478], [5.926740037423507, 51.11377363572406], [5.9721290039171215, 51.114706243464745], [5.984789311496947, 51.12064101999641], [6.000781278966199, 51.114141026652206], [6.013951134529114, 51.11792797929622], [6.036449637782425, 51.09653452294161]], [[4.646206759922296, 52.94106306898243], [4.741021880775539, 52.980232594091405], [4.79166311109484, 52.98051520249767], [4.876248076287604, 53.02197385569743], [4.932415942423485, 53.04401731138647], [5.006966731949267, 53.044299919792735], [5.074501437707902, 53.01841298977843], [5.144270315392387, 53.02615646011022], [5.09578486500154, 53.08711509334259], [5.050944642489712, 53.14326938366837], [4.818394782207659, 53.214288876163934]], [[5.5308604505620975, 51.525053649368296], [5.500248375578062, 51.521408000927416], [5.487156912012546, 51.541840588700715], [5.437456385662024, 51.533984075006416], [5.42385537411342, 51.5340688575283], [5.4474905613290066, 51.51208192352052], [5.442551865492915, 51.493938463838006], [5.46391368478395, 51.49699063462572], [5.5114192352073195, 51.496934112944466]], [[6.861878174387812, 52.649693802118406], [6.84953143479758, 52.699348099099986], [6.840869119085069, 52.69957418582501], [6.8263665995663825, 52.73088719723968], [6.837498263196942, 52.73450458483993], [6.830560571427192, 52.74227631601235], [6.839693239124093, 52.7609849925074], [6.831383687399875, 52.77881758294302], [6.849805806788474, 52.80464799127606], [6.858507318499686, 52.813691460276694], [6.907659100868418, 52.83420883057187], [6.9499515834648005, 52.84881968517601], [6.957594803211135, 52.86187619354567], [7.014781765313193, 52.872982703912065], [7.045589820290726, 52.91591092082443], [7.026854132912533, 52.91904787413402], [7.0159576452741685, 52.924586998896906], [6.935684239938311, 52.993345624142314], [6.837772635187836, 52.977886944319366], [6.788777636813899, 52.96276739458394], [6.727710270840624, 52.95471305500526], [6.731433890717043, 52.93755872474468], [6.7258288629030645, 52.92961742852851], [6.7258288629030645, 52.92961742852851], [6.728219818823713, 52.90706527770819], [6.736333390554437, 52.87869139371872], [6.7656128015827015, 52.84992185796046], [6.8163324238994, 52.825702317543154], [6.849805806788474, 52.80464799127606]], [[6.710072071426007, 52.62781991147314], [6.701997695693982, 52.6272546946606], [6.70854342747674, 52.64870467269647], [6.682517284340505, 52.6541872757781], [6.629445902101857, 52.66967421644167], [6.614512226597481, 52.67405464673885], [6.55281772464502, 52.66560465539139], [6.529378517422928, 52.654498145024995], [6.530554397383902, 52.672472039663745], [6.499550362412876, 52.673545951607565], [6.48598854686297, 52.69363940929334], [6.44867395610138, 52.69378071349647], [6.451143304019427, 52.70697852606927], [6.419943289054903, 52.701722009712654], [6.40716539347898, 52.70680896102551], [6.414377457239624, 52.717265472057484], [6.4068126294906875, 52.72840024326451], [6.421315149009374, 52.73142415321159], [6.415396553205802, 52.740863273981], [6.426293040844165, 52.751432828375485], [6.410144289380115, 52.76488498851392], [6.446165412184634, 52.77610454224283], [6.446910136159918, 52.78588279309976], [6.436993548489033, 52.79198713467518], [6.416650825164174, 52.78172844952759], [6.412888009289056, 52.78831322539368], [6.394034733914765, 52.77746106259292], [6.377925178449415, 52.78520453292471], [6.355505067193501, 52.77952410395869], [6.342962347609774, 52.7896980065844], [6.353662855254641, 52.79891104062879], [6.309763336711594, 52.79543495723167], [6.293026645267057, 52.778421931174236], [6.298514085084938, 52.76629803054527], [6.269117086060576, 52.75855456021348], [6.252027630627747, 52.75830021264784], [6.231449731310693, 52.74171109919981], [6.216320075812822, 52.718593731566955], [6.21690801579331, 52.70316331258463], [6.248382402748726, 52.70819374221623], [6.274290957888864, 52.70618722253171], [6.286637697479096, 52.69917853405622], [6.283462821584465, 52.68225029052067], [6.269822614037161, 52.68222202968005], [6.265511054180255, 52.66797856600405], [6.291929157303481, 52.66243944124117], [6.326970380140521, 52.66919378215101], [6.327793496113203, 52.658680749437785], [6.364441754896907, 52.64316554793358], [6.384039754246482, 52.61221992744705], [6.406303081507599, 52.62055687543201], [6.4162980611758815, 52.618635138269376], [6.433034752620419, 52.62773512895126], [6.441697068332931, 52.61566775000354], [6.4608247156981164, 52.61626122765671], [6.463921199595349, 52.623919915466615], [6.478266935119237, 52.618635138269376], [6.518599617780662, 52.61408514292843], [6.513856901938064, 52.64630250124317], [6.529378517422928, 52.654498145024995]], [[4.63448715631125, 52.75832847348847], [4.651027867762291, 52.7558415195133], [4.671057023097557, 52.740637187255984], [4.689831906474449, 52.73297849944608], [4.715818853611985, 52.71005895769761], [4.728871121178802, 52.69140680288381], [4.769634959825917, 52.698782882287446], [4.778806823521519, 52.73133937068971], [4.786489239266552, 52.72108068554213], [4.80502894665125, 52.71421330126977], [4.826233981947489, 52.71743503710125], [4.847674193235924, 52.720261121163944], [4.848889269195597, 52.72611111517372], [4.8069495505875075, 52.77025454823305], [4.82897770185643, 52.77531323870527], [4.8345043376730095, 52.807784944585656], [4.8345043376730095, 52.807784944585656], [4.8096540744977485, 52.83689361043143], [4.782569639396637, 52.851447943354316], [4.758856060183652, 52.84867838097288], [4.770928427782989, 52.87863487203746], [4.6939866823365595, 52.884484866047245]], [[6.327793496113203, 52.658680749437785], [6.303060820934039, 52.59712863855225], [6.319679924382479, 52.59916341907739], [6.323403544258898, 52.59252212153006], [6.402657853628578, 52.59139168790498], [6.415004593218811, 52.569998231550365], [6.488340306784918, 52.56900910212842], [6.504920214234659, 52.57587648640077], [6.521813689673992, 52.56058737162159], [6.534121233265525, 52.52834175246622], [6.5412549050287705, 52.51929828346559], [6.609651922758786, 52.49250700655122], [6.595188599238799, 52.480298323400376], [6.612278054671629, 52.46591355552125], [6.626819770189014, 52.4738265908968], [6.649553449434521, 52.4730918090405], [6.65366902929793, 52.48784396784777], [6.669308232778891, 52.49499396052639], [6.697568547840978, 52.48628962161329]], [[4.544061987312313, 52.43929184365064], [4.5878047218605635, 52.43443097906281], [4.625001724626056, 52.42349403374017], [4.631665044404912, 52.41165274151747], [4.650753495771397, 52.428580985053024], [4.665804759271871, 52.42547229258406], [4.6824630587190095, 52.41385708708638], [4.700532414119317, 52.42550055342468], [4.721972625407751, 52.433328806278354], [4.674859034971375, 52.455513566170524], [4.6619243554006555, 52.46175921194909], [4.667607775212032, 52.46842877033705], [4.653340431685542, 52.47716137009078], [4.596035881587385, 52.48600701320702], [4.5663253145734295, 52.492733093276236]], [[5.570291625253442, 51.65143612865209], [5.588321784655051, 51.64270352889835], [5.602275560191948, 51.62942093380368], [5.607488628018935, 51.63377310326023], [5.62657707938542, 51.62340137475014], [5.664910766113188, 51.62834702185985], [5.7504756312734315, 51.622694853734465], [5.747692715365792, 51.63267093047578], [5.7425580395362035, 51.650051347461364], [5.734013311819789, 51.652029606305256], [5.731347983908247, 51.67393175779115], [5.67866856165659, 51.66494481047177], [5.6729851418452135, 51.666244809140615], [5.6225790875181065, 51.69908390594915], [5.6239509474725775, 51.703520857927586], [5.597023296366261, 51.70199477253373]], [[5.935755117124311, 50.75698052280861], [5.920547069629041, 50.7693305101626], [5.92383953351977, 50.77523702585363], [5.943594316864141, 50.77325876700974], [5.942026476916174, 50.79052614063282], [5.95100236061828, 50.794397875798715], [5.95100236061828, 50.794397875798715], [5.976675739766223, 50.803356562277465]], [[5.983535039538574, 50.80974351225915], [5.959547088334695, 50.8283391453917], [5.954804372492097, 50.845917388261675], [5.933168181210167, 50.83967174248311], [5.925015413480744, 50.848828254846254], [5.891267658600777, 50.84275217411145], [5.887975194710048, 50.847047821886754], [5.859479703655766, 50.83368044427019], [5.864144027500965, 50.82333697660073], [5.839254568327005, 50.80759568837151], [5.819421392985236, 50.80525003859947], [5.821812348905883, 50.79623483043947], [5.8358837124388785, 50.786682666307556], [5.845055576134479, 50.76537399247482]], [[5.693798217154462, 50.81045003327483], [5.716963052385658, 50.80380873572749], [5.717315816373951, 50.81449133348449], [5.7434595475062835, 50.821330456916215], [5.746320855411321, 50.83732609271107], [5.757334931045783, 50.855299987349824], [5.7626655868688665, 50.86651954107873], [5.733386175840602, 50.87474344570118], [5.714846468455905, 50.90845862856915]], [[4.388336284480593, 52.007664024754995], [4.388336284480593, 52.007664024754995], [4.394529252275058, 52.011253151514616], [4.379752360765479, 52.026740092178194], [4.373481000973615, 52.03259008618798], [4.357802601493955, 52.026853135540705], [4.325975450550246, 52.01277923690847], [4.341065910049418, 52.00269011680465], [4.324094042612686, 51.98985969516001], [4.338243798143079, 51.97417492861204], [4.35662672153298, 51.97728362108101], [4.359527225436718, 51.97013362840238], [4.386298092548237, 51.97222493060878], [4.393823724298473, 51.97750970780602], [4.402917195996676, 51.966318414917744], [4.407895087831468, 51.96821189123975], [4.397037796191803, 51.978979271518625], [4.388336284480593, 52.007664024754995]], [[5.946102860780886, 52.07789221371301], [5.955941056454373, 52.07334221837206], [5.990472731308323, 52.07916395154122], [6.008855654698224, 52.07402047854711], [6.006072738790585, 52.066361790737204], [6.023750134203901, 52.06729439847789], [6.044915973501442, 52.07964438583188], [6.0683551807235325, 52.08823568138247], [6.103435599559272, 52.07814656127865], [6.137457726430133, 52.059183537217955], [6.168344173405063, 52.07633786747852], [6.177947193086355, 52.09123133048893], [6.210519068005348, 52.09244654663589], [6.217887915760787, 52.09787262803627], [6.208833640061284, 52.11304869945295], [6.1903723246739855, 52.11454652400618], [6.183630612897732, 52.13421606908255], [6.1732044772437575, 52.14501171020205], [6.149608486026869, 52.14399431993948], [6.142435618264925, 52.155609525437164], [6.159525073697754, 52.1576443059623], [6.181631616964075, 52.152698658852586], [6.184688904862608, 52.16123343272193], [6.160622561661331, 52.16188343205635], [6.108413491394064, 52.152698658852586], [6.076076792467266, 52.14393779825822], [6.069648648680605, 52.13130520249797], [6.051108941295907, 52.1242117315006], [6.0358225018032385, 52.109459572693325], [6.034058681861778, 52.09572480414862], [6.008855654698224, 52.07402047854711]], [[3.9726235222774138, 51.91095542812952], [4.065831607183991, 51.9326314928904], [4.092876846286404, 51.93251844952789], [4.102009513983306, 51.92353150220852], [4.107732129793382, 51.93613583712814], [4.144889936560175, 51.93141627674344], [4.159784416065852, 51.92774236746193], [4.2159130862030345, 51.89894457086306], [4.2393914894238245, 51.872972858326875], [4.185261815220299, 51.84971418649088], [4.1982748867884165, 51.84988375153464], [4.1971382028261415, 51.83493376684298], [4.207289966489221, 51.8355837661774], [4.221988466001402, 51.825014211782914], [4.212228662325314, 51.81396422309777], [4.194590462910697, 51.807096838825416], [4.1926306629757395, 51.79110120303055], [4.213247758291492, 51.7852794698614], [4.2466427491831675, 51.78533599154265], [4.2656136125535555, 51.80398814635645], [4.296774431519379, 51.80240553928134], [4.310179463074489, 51.80995118372874], [4.353334257642252, 51.819051174410625], [4.3690910491193105, 51.81698813304485], [4.397116188189202, 51.8312881184021], [4.422280019354056, 51.83021420645827], [4.432470979015834, 51.83705332989], [4.414166447623332, 51.84279028053727], [4.383671960635393, 51.84211202036223], [4.352589533666968, 51.84951636060649], [4.335539274232838, 51.86429678025439], [4.268396528461195, 51.864522866979414], [4.2393914894238245, 51.872972858326875]], [[6.231449731310693, 52.74171109919981], [6.218554247738673, 52.74829587506589], [6.201856752292835, 52.729304590164574], [6.172890909254164, 52.773052371455115], [6.156781353788814, 52.762708903785644], [6.1327542065862355, 52.758724125257245], [6.120054703007711, 52.750895872403575], [6.1589763297159665, 52.692141584740114], [6.1630135175819785, 52.680074205792394], [6.183160260913342, 52.67507203700143], [6.201425596307145, 52.684454636089576], [6.219808519697047, 52.685698113077166], [6.251988434629048, 52.66987204232606], [6.265511054180255, 52.66797856600405]], [[5.42385537411342, 51.5340688575283], [5.404218178765146, 51.54828406036366], [5.382660379480614, 51.54379058670397], [5.356908608335273, 51.544723194444664], [5.3686282119463185, 51.53186451195939], [5.355693532375599, 51.52898190621544], [5.349382976585035, 51.51643409297707], [5.355889512369094, 51.49611454856628], [5.389950835238656, 51.48752325301568], [5.391205107197028, 51.471753703945836], [5.401592046852302, 51.4859689067812], [5.414801098413916, 51.48529064660615], [5.442551865492915, 51.493938463838006]], [[3.3630473505082428, 51.372869022592084], [3.4224684845361533, 51.391408134043374], [3.448102667685397, 51.391945090015284], [3.515010237464845, 51.40901463775397], [3.6914706236084154, 51.39762551898131], [3.738035470063005, 51.39460160903422], [3.7365852181111365, 51.411105939960365], [3.710441486978804, 51.42393636160501], [3.718045510726439, 51.42763853172714], [3.6964093194445082, 51.445838513090905], [3.7098535469983167, 51.453242853335176], [3.7174183747472522, 51.46960588005819], [3.6956645954692244, 51.471103704611416], [3.703660579203851, 51.48226673665907], [3.6668947324240486, 51.46960588005819], [3.646238441109597, 51.47084935704577], [3.6292273776741664, 51.48091021630897], [3.6216625499252304, 51.4754841349086], [3.5869740910764834, 51.47924282671198], [3.5645539798205697, 51.470425444436366], [3.552755984212126, 51.47096240040828], [3.52539717712012, 51.46225806149518], [3.502428321882418, 51.48642108023123], [3.4860443944261736, 51.49732976471324], [3.4504936236060453, 51.51307105294246], [3.432581052200534, 51.52598625710898], [3.4346584401315887, 51.54223624046949], [3.484554946475606, 51.56419491363664], [3.485926806430076, 51.57363403440605]], [[5.330529701210745, 52.21473120402877], [5.335468397046839, 52.22846597257348], [5.312264365816942, 52.232818142030034], [5.3139497937610045, 52.251865948612604], [5.33954478091155, 52.28772895536823], [5.335468397046839, 52.2902159093434], [5.3058362220302815, 52.27732896601751], [5.265973891353246, 52.281935483039696], [5.244063328080422, 52.25466377183468], [5.2247397007217415, 52.22518771506075], [5.314772909733687, 52.22419858563881], [5.312264365816942, 52.232818142030034]], [[4.600151461450796, 51.83872071948699], [4.5710680304160265, 51.8471141891532], [4.553625810994905, 51.82990333721138], [4.561112246746443, 51.81800552330743], [4.579534366135043, 51.80800118572548], [4.621238908750938, 51.8007946713656], [4.645697211939208, 51.80743596891294], [4.671723355075443, 51.820859868210746], [4.67042988711837, 51.82360116975156], [4.672624863045523, 51.838664197805734], [4.648048971861156, 51.8625163472949], [4.635271076285234, 51.86972286165477], [4.647029875894978, 51.856722874966366], [4.636525348243606, 51.84965766480963], [4.627314288549306, 51.8546598336006], [4.604894177293392, 51.848385926981415], [4.600151461450796, 51.83872071948699], [4.637191680221492, 51.82535334187044], [4.661885159401956, 51.831598987648995], [4.67042988711837, 51.82360116975156]], [[4.826233981947489, 52.71743503710125], [4.827096293918871, 52.6765133398734], [4.811417894439211, 52.67337638656381], [4.800521406800847, 52.66023509567227], [4.785587731296472, 52.63915250856455], [4.8302319738148025, 52.63268077606097], [4.838541525539022, 52.64613293619941], [4.8733867683825665, 52.63443294817985], [4.875464156313621, 52.64228946187414], [4.863195808720787, 52.65647640386888], [4.8763264682850025, 52.68637637325221], [4.899844067504492, 52.697595926981116], [4.898824971538314, 52.70680896102551], [4.898668187543517, 52.70683722186613], [4.877267172253782, 52.71217852074463], [4.858100328889898, 52.723341552792284], [4.847674193235924, 52.720261121163944]], [[3.738035470063005, 51.39460160903422], [3.775506844819392, 51.3921711767403], [3.8082355037331816, 51.35574295317214], [3.9244908358748587, 51.37804075642682], [3.963216482589618, 51.422014624442376], [3.935348127514523, 51.44702546839724], [3.928528023740871, 51.45878197809806], [3.908890828392597, 51.46799501214245], [3.9128888202599104, 51.47912978334948], [3.8468043664531444, 51.48503629904051], [3.8155651554899226, 51.48288847515286], [3.780837500642476, 51.495521070913114], [3.7577902534073764, 51.499166719353994], [3.70554198714141, 51.50244497686672], [3.6990354513573513, 51.49232759592227], [3.703660579203851, 51.48226673665907]], [[5.1802130461995075, 51.96744884854282], [5.194323605731201, 51.96128798528614], [5.217684420955894, 51.96258798395498], [5.229090456577347, 51.97490971046834], [5.243984936083024, 51.978385793865456], [5.256253283675857, 51.97095319278056], [5.271461331171127, 51.98112709540627], [5.254136699746103, 51.986072742515994], [5.256214087677158, 51.99370316948527], [5.24320101610904, 51.99879012079813], [5.231324628503198, 52.00975532696139], [5.202006021476234, 52.01747053645255], [5.200908533512658, 52.031487913403524], [5.191540689823562, 52.043046597219956], [5.16073263484603, 52.0455052903545], [5.153050219100997, 52.056753104924034], [5.126828095971266, 52.05491615028328], [5.121771812139076, 52.030442262300326], [5.128395935919231, 52.02479009417493], [5.119576836211923, 51.999920554423205]], [[5.481355904205072, 52.15049431328368], [5.479905652253203, 52.165811688903496], [5.485471484068483, 52.1816377596546], [5.50083631555855, 52.18858992644883], [5.530821254563398, 52.191529053874035], [5.542423270178347, 52.17768124196682], [5.565156949423853, 52.17810515457623], [5.577934844999776, 52.18618775499554], [5.577699669007581, 52.19480731138676], [5.6001981722608924, 52.19766165629009], [5.625636375416641, 52.192716009180366], [5.633279595162975, 52.208174689003314], [5.605803200074871, 52.20483990980934], [5.549909705929885, 52.202324694993536], [5.51553481507073, 52.23417466238013], [5.506441343372527, 52.231602925883074], [5.483707664127021, 52.23923335285235], [5.4768483643546695, 52.26240724216647], [5.404649334750837, 52.249633342203076], [5.3955166670539345, 52.21913989516658], [5.392733751146295, 52.20551816998438], [5.330529701210745, 52.21473120402877], [5.330686485205542, 52.20339860693736], [5.314263361750598, 52.20303121600921], [5.310304565881984, 52.19183992312093], [5.326335729349936, 52.18180732469836], [5.349892524568125, 52.17561820060105], [5.338721664938868, 52.1600464774156], [5.331274425186029, 52.12664216379452], [5.306463358009467, 52.11027913707151], [5.31093170186117, 52.1083856607495], [5.322455325478721, 52.10191392824593], [5.340563876877727, 52.095018283132944], [5.401317674861409, 52.08933785416693], [5.404531746754739, 52.10411827381483], [5.432400101829835, 52.09682697693307], [5.443806137451286, 52.107085662080664], [5.472536804497763, 52.10180088488342], [5.479082536280521, 52.11742912975013], [5.486451384035961, 52.11536608838436], [5.504167975447977, 52.113726959627996], [5.4978966156561135, 52.1302878122354], [5.514084563118862, 52.135911719520166], [5.497308675675626, 52.14145084428305], [5.4989941036196885, 52.14738562081472], [5.481355904205072, 52.15049431328368], [5.459092576943956, 52.15298126725885], [5.442199101504622, 52.161516041128195], [5.423620198121225, 52.1576443059623], [5.3971237030006005, 52.133961721516904], [5.370470423885179, 52.13155955006361], [5.355615140378201, 52.13681606642023], [5.334018145094969, 52.12042477885659], [5.31093170186117, 52.1083856607495]], [[6.668720292798405, 51.91386629471409], [6.658960489122316, 51.92904236613077], [6.632659973995187, 51.937605400840745], [6.632659973995187, 51.937605400840745], [6.629053942114865, 51.950096692397864], [6.638931333787051, 51.96255972311435], [6.628740374125272, 51.96727928349906], [6.591817743350673, 51.9721401480869], [6.5468991288414475, 51.97270536489944], [6.527261933493174, 51.96603580651147], [6.532827765308453, 51.96236189722997], [6.517462933818386, 51.94792060766959], [6.5048810182359595, 51.945998870506955], [6.488653874774512, 51.91287716529215], [6.472740299302657, 51.907648909776164], [6.484067942926711, 51.87822937468349], [6.464352355581039, 51.855648963022546], [6.464352355581039, 51.855648963022546], [6.464391551579738, 51.85528157209439]], [[4.277411608162, 51.3760342367423], [4.268396528461195, 51.383551620349074], [4.263732204615996, 51.41644723883886], [4.275843768214034, 51.425038534389465], [4.26541763256006, 51.43967764983423], [4.230337213724321, 51.4889080342064], [4.133915056924414, 51.47955369595888], [4.1122004736450855, 51.50620366867011], [4.060383363364809, 51.50962323038597], [4.067517035128055, 51.52646669139964], [4.013073792934936, 51.53825146194109], [4.017385352791843, 51.512477575289296], [4.004725045212018, 51.50484714832001], [4.007311981126161, 51.45864067389493], [3.991437601653006, 51.44979503077868], [3.969213470390588, 51.45635154580414], [3.935348127514523, 51.44702546839724]], [[3.963216482589618, 51.422014624442376], [4.0197763087124905, 51.420177669801625], [4.048075819773277, 51.38988204864952], [4.114944193554026, 51.3910124822746], [4.102558257965094, 51.366849463538536], [4.146653756501637, 51.37168206728575], [4.197882926801426, 51.38702770374619], [4.209053786430683, 51.38575596591798], [4.218108062130186, 51.36591685579785], [4.236804553509681, 51.34975165495922]], [[6.356014615176591, 52.31822240240472], [6.32653922415483, 52.301633288956694], [6.267235678123017, 52.30081372457851], [6.235134155188414, 52.31446371060134], [6.235369331180609, 52.31983327032046], [6.206599468135433, 52.32110500814868], [6.168736133392055, 52.308302847344656], [6.10860947138756, 52.297620249587666], [6.101319015629517, 52.30123763718792], [6.112960227243165, 52.27752679190189], [6.130049682675994, 52.26068333088822], [6.123543146891935, 52.253081164759564], [6.153645673892882, 52.24403769575894], [6.1422396382714295, 52.2384420493148], [6.147727078089311, 52.22767466903593], [6.162190401609297, 52.22417032479818], [6.166266785474008, 52.231009448229905], [6.189157248714311, 52.229172493589154], [6.259984418363675, 52.229144232748524], [6.2712728659890296, 52.22640293120771], [6.292791469274862, 52.23086814402677], [6.2979261451044515, 52.22552684514827], [6.338689983751566, 52.22716597390464], [6.338023651773681, 52.23620944290527], [6.350879939347002, 52.2416920459869], [6.38184477831933, 52.246100737124706], [6.376710102489741, 52.25876159372559], [6.32881259207938, 52.281228962024024], [6.32653922415483, 52.301633288956694]], [[5.322455325478721, 52.10191392824593], [5.298310590280044, 52.096431325164296], [5.332254325153508, 52.08416612033219], [5.405903606709209, 52.07520743385344], [5.401905614841896, 52.06429874937143], [5.422561906156348, 52.073031349125166], [5.438318697633406, 52.070431351787484], [5.428676481953415, 52.057318321736574], [5.448548853293884, 52.04313137974184], [5.4840996241140125, 52.05596180138648], [5.497857419657414, 52.05700745248968], [5.496132795714651, 52.07167482877507], [5.484060428115313, 52.0696117874093], [5.459249360938752, 52.080237863485046], [5.4860986200476685, 52.09366176278285], [5.484295604107508, 52.10553131584618], [5.493859427790101, 52.11109870144969], [5.486451384035961, 52.11536608838436]], [[6.018184302388622, 50.9347129495116], [6.0116777666045635, 50.9264325232079], [5.993412431210759, 50.91004123564426], [5.99662650310409, 50.89251951445554], [6.0082677147177375, 50.88556734766131], [6.017126010423745, 50.870476058766506], [6.031158177958041, 50.871578231550956], [6.042877781569086, 50.900404288990465], [6.079800412343685, 50.905773848709586]], [[6.5082518741240865, 53.25758448400445], [6.502137298327019, 53.27931707044659], [6.504214686258074, 53.29573661885085], [6.474935275229809, 53.323912676955935], [6.454239787916659, 53.32894310658754], [6.442245812314718, 53.31715833604609], [6.429311132743999, 53.32843441145625], [6.414142281247429, 53.32772789044058], [6.401717149659799, 53.319193116571235], [6.367577434792839, 53.321623548865155], [6.355426675196103, 53.313851817692736], [6.316309068494352, 53.319758333383774], [6.313878916575005, 53.32832136809375], [6.286990461467388, 53.341377876463405], [6.2805231216820285, 53.312608340705154], [6.292477901285269, 53.31029095177374], [6.268293970087894, 53.28980184231919], [6.253203510588722, 53.28790836599718], [6.254222606554899, 53.2680127341958], [6.232155259287278, 53.25673665878564], [6.231096967322401, 53.24509319244733], [6.215536155838839, 53.23698233118739], [6.229960283360127, 53.217934524604814], [6.2190637957217625, 53.205980189019606], [6.199544188369586, 53.198264979528446], [6.177829605090258, 53.16799761921697], [6.176732117126681, 53.15949110618825], [6.1752426691761135, 53.135893304264734], [6.185708000828786, 53.12922374587677], [6.124640634855512, 53.10093464440918], [6.10488585151114, 53.077732494254434], [6.089521020021074, 53.0710911967071], [6.024416466181787, 53.07335206395726], [6.002466706910263, 53.08064336083901], [5.982907903559387, 53.077308581645035], [5.93254104523098, 53.08120857765155], [5.927563153396188, 53.078382493588855], [5.94731793674056, 53.06247164031588], [5.942653612895361, 53.0534846929965], [5.9576264843984355, 53.05362599719963], [5.937989289050162, 53.04427165895211], [5.984554135504752, 53.02544993909455], [5.971933023923626, 53.009680390024705], [5.979654635667358, 52.997839097802], [5.9580968363828255, 52.972941297209644], [6.019085810358702, 52.96604565209667], [6.044719993507946, 52.966328260502934], [6.069766236676703, 52.974184774197234], [6.099711979682853, 52.98950214981705], [6.096419515792125, 52.992893450692286], [6.1311863666382695, 53.011884735593604], [6.1768105091240795, 53.021041247956745], [6.205423588174458, 53.03794123065167], [6.212870827927297, 53.03624558021405], [6.2805231216820285, 53.058204253381206], [6.2814246296521095, 53.06419555159412], [6.33206585997141, 53.07527380111989], [6.305294992859891, 53.08118031681093], [6.315172384532077, 53.094038999296195], [6.290557297349011, 53.09983247162472], [6.261669846307738, 53.11430202202573], [6.2050316281874665, 53.11548897733206], [6.185708000828786, 53.12922374587677]], [[3.693939971526462, 51.2760473826041], [3.7066394751049865, 51.28918867349564], [3.703582187206453, 51.309932130515826], [3.7124012869137615, 51.31578212452561], [3.6841801678503736, 51.32117994508536], [3.666189204447464, 51.31982342473527], [3.657958044720643, 51.333360367395585], [3.644161053178542, 51.341838619583676], [3.647257537075775, 51.35006252420612], [3.6938223835303647, 51.352464695659414], [3.6914706236084154, 51.39762551898131]], [[4.909133519196191, 52.31825066324535], [4.907526483249525, 52.30629632766014], [4.878913404199146, 52.27925070318014], [4.879579736177032, 52.2668441941449], [4.870133500490537, 52.253278990643956], [4.91007422316497, 52.25243116542514], [4.92939785052365, 52.26834201869813], [4.926458150621214, 52.27978765915205], [4.95522801366639, 52.278318095439445], [4.96769234125272, 52.279589833267664], [4.983488328728477, 52.290357213546535], [4.997481300264073, 52.289113736558946], [5.011709447791864, 52.303385461075564], [5.02154764346535, 52.30245285333488], [5.017941611585028, 52.32319631035507], [5.016138595644868, 52.324524569864536], [4.9978732602510645, 52.31398327631068], [4.989093356542455, 52.327972392421024], [4.9752963650003545, 52.33057238975871], [4.952680273750945, 52.32263109354253], [4.944723486015018, 52.32712456720222], [4.929476242521049, 52.30742676128522], [4.95522801366639, 52.278318095439445]], [[6.629445902101857, 52.66967421644167], [6.632424798002992, 52.68674376418036], [6.629955450084946, 52.71271547671655], [6.595776539219287, 52.71322417184783], [6.596795635185465, 52.72353937867667], [6.576413715861907, 52.72427416053297], [6.587466987495068, 52.73569154014626], [6.55740365649282, 52.74535674764069], [6.566379540194925, 52.7655915095296], [6.51272021797579, 52.76208716529185], [6.5076247381449, 52.76909585376734], [6.4906528707081685, 52.77087628672684], [6.491789554670444, 52.79311756830026], [6.455454863876332, 52.800550169385154], [6.446910136159918, 52.78588279309976]], [[5.185700486017389, 51.74192734033963], [5.165671330682123, 51.742916469761575], [5.12804317193094, 51.737603431723706], [5.101468284812916, 51.73118822090139], [5.081752697467244, 51.72234257778514]], [[5.101507480811615, 51.67684262437573], [5.106132608658115, 51.63594918798851], [5.1449366473702725, 51.64049918332945]], [[5.566058457393934, 51.22091048254089], [5.61877707564429, 51.2294169955696], [5.625989139404933, 51.27358868946955], [5.643980102807843, 51.29057345468636], [5.672122829873832, 51.31510386435056], [5.65471980645141, 51.35387773769076]], [[6.947286255553259, 52.43663532463171], [6.949206859489517, 52.432876632828325], [6.8971153772183476, 52.43282011114707], [6.853411838668796, 52.42705489965917], [6.851491234732538, 52.41459186894268], [6.862348526372202, 52.40780926719221], [6.863602798330575, 52.36372235581414], [6.817704283853871, 52.36507887616423], [6.783407784992115, 52.36010496821389], [6.7739615493056204, 52.34656802555357], [6.762633905681566, 52.34343107224398], [6.759027873801244, 52.33207021431194], [6.773843961309523, 52.31890066257977], [6.802025884374212, 52.3135876245419], [6.823348507666548, 52.30875502079469], [6.8191545358057395, 52.30084198541914], [6.846356558902949, 52.29140286464973], [6.852471134700016, 52.284874610464904], [6.840477159098077, 52.27631157575493], [6.868345514173171, 52.272948535720325], [6.88320079768015, 52.283178960027286], [6.912127444720122, 52.285496348958695], [6.859800786456757, 52.298637639850234], [6.861368626404723, 52.3063528493414], [6.877321397875277, 52.31223110419181], [6.900643017101271, 52.333454995502656], [6.9309807200944125, 52.32947021697426], [6.93752645187717, 52.332833257008865], [6.953596811343822, 52.333963690633944], [6.9592018391578, 52.34569193949414], [6.97025511079096, 52.34877237112247], [6.9637485750069015, 52.3659832230643], [6.9637485750069015, 52.3659832230643], [6.970921442768846, 52.37985929581214], [7.007765681546046, 52.363835399176644], [7.072203903407448, 52.37279408565539]], [[5.5048735034245615, 51.4001407337971], [5.497818223658715, 51.40426681652864], [5.4362021137036525, 51.40497333754431], [5.427265426000246, 51.4026559486129], [5.41781919031375, 51.390136396215155], [5.421817182181064, 51.38341031614594], [5.423189042135535, 51.3748755422766], [5.43631970169975, 51.366227725044745], [5.516436323040811, 51.378323364833086]], [[4.571499186401717, 52.153122571461985], [4.559622798795875, 52.16592473226601], [4.5527634990235235, 52.16309864820331], [4.538143391508742, 52.180083413420114], [4.518349412165671, 52.18211819394526], [4.51470418428665, 52.160950824315655], [4.524032831977047, 52.14738562081472], [4.550725307091168, 52.13837041265471]], [[5.200242201534772, 51.322649508797966], [5.204710545386476, 51.32544733202003], [5.193853253746811, 51.34522992045891], [5.188522597923727, 51.377616843817414], [5.200947729511357, 51.39010813537453], [5.194754761716892, 51.399858125390836], [5.191031141840472, 51.430210268224194], [5.154853235041157, 51.42891026955535], [5.154853235041157, 51.42891026955535], [5.102017028794704, 51.42891026955535]], [[5.427265426000246, 51.4026559486129], [5.426677486019758, 51.43015374654294], [5.387363899324512, 51.43781243435285], [5.356908608335273, 51.43820808612163], [5.339858348901142, 51.425547229520745], [5.319358841581487, 51.423795057401875], [5.3236704014383935, 51.40618855369127], [5.354360868419828, 51.408788551028955], [5.370979971868268, 51.39785160570632], [5.388892543273778, 51.376458149351706], [5.421817182181064, 51.38341031614594]], [[5.106132608658115, 51.63594918798851], [5.098215016920887, 51.62891223867239], [5.102957732763484, 51.61690138140593], [5.093746673069184, 51.611249213280544], [5.045026046686141, 51.611107909077404], [5.042909462756387, 51.60604921860518], [5.004497384031221, 51.60788617324593], [4.986310440634815, 51.60791443408656], [4.95291544974314, 51.614725296677655], [4.94785916591095, 51.61116443075866], [4.968750633217597, 51.602064440076774], [4.973414957062795, 51.59197531997295], [4.968985809209792, 51.57131664547464], [4.951151629801679, 51.560916656123915], [4.953464193724928, 51.55051666677319], [4.9795687288585615, 51.54421449931338], [4.975453148995151, 51.5401449382631], [5.020606939496571, 51.53895798295676], [5.030484331168757, 51.52954712302798], [5.030484331168757, 51.52954712302798], [5.052277306445484, 51.529773209752996], [5.060312486178809, 51.53785581017231], [5.09206124512512, 51.53494494358773], [5.109817032535835, 51.539381895566166], [5.117969800265258, 51.54574058470723], [5.130198951859393, 51.53031016572491], [5.14783715127401, 51.547125365897955], [5.137371819621337, 51.562584045720904], [5.150776851176446, 51.580105766909625], [5.179546714221622, 51.59765574893897]], [[4.463475013986862, 52.20020513194651], [4.458614710148167, 52.18344645345472], [4.446542342548829, 52.17847254550438], [4.448384554487689, 52.16205299710011], [4.440466962750461, 52.155666047118416], [4.4429755066672065, 52.145350840289574], [4.449599630447363, 52.14097040999239], [4.46539561792312, 52.14944866218048], [4.46449410995304, 52.12732042396957], [4.472960445672056, 52.118955215143984], [4.513136344338684, 52.139924758889194], [4.516036848242421, 52.14470084095515], [4.516036848242421, 52.14470084095515], [4.524032831977047, 52.14738562081472]], [[4.933160666398769, 51.67675784185385], [4.917991814902198, 51.71996866717248], [4.873073200392973, 51.7199969280131], [4.836895293593658, 51.71262084860947], [4.823607850034646, 51.7112925891], [4.831133481784883, 51.69292304269247], [4.842382733411538, 51.6796404475978], [4.843401829377717, 51.686027397579494], [4.880481244147112, 51.67421436619742], [4.91281794307391, 51.67658827681009], [4.925047094668045, 51.67299915005046], [4.933160666398769, 51.67675784185385], [4.944253134030628, 51.678905665741496], [4.953738565715822, 51.67076654364093], [4.9578933415779325, 51.65152091117397], [4.987251144603595, 51.65460134280231], [4.992229036438387, 51.67624914672256], [5.049180822548251, 51.661610031277796], [5.060626054168402, 51.671105673728455], [5.101507480811615, 51.67684262437573], [5.106485372646407, 51.67732305866639], [5.103036124760882, 51.70247520682439], [5.1068381366347, 51.7108686764906], [5.081752697467244, 51.72234257778514], [5.0545898703687335, 51.71197084927505], [5.006026027980488, 51.71329910878452], [4.960911433477767, 51.72242736030702], [4.917991814902198, 51.71996866717248]], [[5.42338502212903, 51.653781778424126], [5.396143803033121, 51.645331787076664], [5.378074447632813, 51.646631785745505], [5.385913647372643, 51.620914420774966], [5.385913647372643, 51.620914420774966], [5.3948503350760495, 51.60585139272079], [5.38054379555086, 51.602912265295586], [5.38144530352094, 51.58759488967577], [5.399789030912142, 51.572362296577836], [5.404218178765146, 51.54828406036366]], [[5.547440358011838, 51.5377427668098], [5.533094622487949, 51.557807963654945], [5.584245400790339, 51.56272534992404], [5.627204215364607, 51.55526448799852], [5.652485634525558, 51.56967751671827], [5.651348950563283, 51.58236663415978], [5.642961006841665, 51.60619052280831], [5.62657707938542, 51.62340137475014]], [[5.745654523433436, 51.189512688604324], [5.7522786472135925, 51.21398657658728], [5.774306798482515, 51.21559744450302], [5.7917882139023344, 51.237527856829544], [5.776776146400561, 51.25098001696798], [5.750201259282537, 51.261323484637444], [5.730328887942068, 51.28096476887319], [5.714023352483222, 51.283508244529614], [5.67451378579448, 51.277036512026044], [5.6569539783772615, 51.2797212918856], [5.643980102807843, 51.29057345468636]], [[5.017941611585028, 52.32319631035507], [5.03079789915835, 52.33057238975871], [5.06952354587311, 52.32178326832372], [5.100566776842836, 52.31030936702918], [5.096882352965116, 52.30030502944723], [5.107700448606081, 52.29728111950014], [5.104643160707547, 52.28538330559619], [5.134392923720202, 52.277809400308165], [5.141644183479544, 52.2823593956491], [5.137606995613532, 52.25960941894439], [5.1621436907991995, 52.25579420545976], [5.201104513506154, 52.26814419281374], [5.1847205860499095, 52.27800722619255], [5.195029133707786, 52.28091809277713], [5.187268325965354, 52.29258981995606], [5.197812049615425, 52.30033329028785], [5.229560808561736, 52.301718071478575], [5.224582916726945, 52.325768046852126], [5.151129615164739, 52.31864631501413], [5.146151723329947, 52.319663705276696], [5.079283349549198, 52.37042017504273], [5.0791657615531, 52.388648417247126], [5.137332623622638, 52.415552737523996], [5.185504506023893, 52.41563752004588], [5.151012027168641, 52.46636572897128], [5.112991908430466, 52.49787656627035], [5.061018014155394, 52.48578092648201], [5.058783842229543, 52.49075483443235], [5.02480091135738, 52.48487657958194], [4.997951652248463, 52.49473961296076], [4.974238073035478, 52.47043529002156], [4.95801092957403, 52.471226593559116], [4.948329517895339, 52.48400049352251], [4.9508772578107845, 52.437144019763], [4.947780773913552, 52.42157229657754], [4.931200866463811, 52.41170926319873], [4.898746579540916, 52.424483163162115], [4.862686260737698, 52.42993750540312], [4.856062136957542, 52.416654910308445], [4.739218864835378, 52.431067939028196], [4.728753533182704, 52.40071579619484], [4.757876160216172, 52.3965897134633], [4.7556811842890205, 52.35614845052611], [4.790173663144271, 52.34201803021263], [4.818747546195952, 52.325570220967734], [4.855905352962745, 52.33031804219306], [4.856336508948436, 52.32175500748309], [4.896277231622869, 52.32243326765814], [4.909133519196191, 52.31825066324535], [4.912935531070008, 52.330515868077455], [4.949858161844606, 52.33854194681551], [4.973885309047185, 52.35496149521978], [4.998030044245861, 52.34215933441576], [5.039068254883871, 52.354565843451], [5.039969762853951, 52.341254987515704], [5.013042111747636, 52.330487607236826], [5.016138595644868, 52.324524569864536]], [[4.734005797008391, 51.485544994171796], [4.74372640468578, 51.51250583612992], [4.738278160866598, 51.53110146926247], [4.738278160866598, 51.53110146926247], [4.703981662004843, 51.54981014575752], [4.694182662330055, 51.54483623780717], [4.693673114346966, 51.568123170483794], [4.682110294730717, 51.59889922592656], [4.663884155335612, 51.604070959761295], [4.657965559532041, 51.62046224732493], [4.665060035296587, 51.63431005923214], [4.644286155986038, 51.63247310459139], [4.631508260410115, 51.62447528669396], [4.612733377033223, 51.62846006522236], [4.601248949414372, 51.62523832939089], [4.613909256994197, 51.60802747744906], [4.59674140956397, 51.59030793037596], [4.591763517729177, 51.561029699486426], [4.62480574463256, 51.55226883889206], [4.640092184125229, 51.54342319577582], [4.638720324170759, 51.524403650033875], [4.6381715801889705, 51.517197135673996], [4.659102243494316, 51.525505822818324], [4.681208786760637, 51.54079493759752], [4.694182662330055, 51.54483623780717]], [[5.651348950563283, 51.58236663415978], [5.69944244096714, 51.58414706711928], [5.758628399002855, 51.59395357881684], [5.7504756312734315, 51.622694853734465]], [[4.94785916591095, 51.61116443075866], [4.911877239105131, 51.615403556852705], [4.918501362885287, 51.6013579190611], [4.864254100685664, 51.57908837664705], [4.870094304491838, 51.57080795034335], [4.8629998287272915, 51.557271007683035], [4.864254100685664, 51.55207101300768], [4.834621925669107, 51.53861885286924], [4.8290952898525275, 51.52906668873732], [4.844734493333488, 51.533305814831365], [4.844734493333488, 51.533305814831365], [4.866213900620622, 51.5380536360567], [4.911054123132448, 51.510075403836005], [4.956639069619559, 51.5186666993866], [4.96255766542313, 51.52587321374648], [4.975453148995151, 51.5401449382631]], [[6.736333390554437, 52.87869139371872], [6.71457961127641, 52.868150100164854], [6.728611778810704, 52.85396315817012], [6.704035887626338, 52.84698273053526], [6.707602723507961, 52.836384915300144], [6.690199700085538, 52.822678407596065], [6.694001711959356, 52.81451102465488], [6.675148436585065, 52.79713060766929], [6.660881093058574, 52.8012284295602], [6.616354438536341, 52.76310455555442], [6.587466987495068, 52.73569154014626]], [[6.023710938205202, 50.81839132949101], [6.004230526851725, 50.83760870111735], [5.9802425756478454, 50.84868695064311], [5.969346088009482, 50.86007606941578], [5.954804372492097, 50.845917388261675]], [[6.7177152911723415, 52.4781222386721], [6.692081108023097, 52.44734618322933], [6.676324316546039, 52.44409618655723], [6.677892156494005, 52.4278179423561], [6.669660996767184, 52.41736143132412], [6.698626839805855, 52.39373536855998], [6.7052901595847105, 52.37813538453389], [6.713482123312833, 52.376496255777525], [6.720576599077379, 52.35233323704147], [6.709758503436413, 52.34343107224398], [6.720850971068273, 52.341198465834445], [6.759027873801244, 52.33207021431194]], [[5.927563153396188, 53.078382493588855], [5.895422434462886, 53.07886292787951], [5.871512875256405, 53.074199889176064], [5.874648555152337, 53.085080312817446], [5.830161096628802, 53.079597709735815], [5.796374145750136, 53.058825991875], [5.797941985698102, 53.049810783714996], [5.823850540838239, 53.038223839057935], [5.857598295718207, 53.01699994774709], [5.867318903395596, 52.99848909713642], [5.887269666733463, 52.981504331919616], [5.867201315399498, 52.97862172617567], [5.870964131274617, 52.96446304502156], [5.897421430396543, 52.96307826383084], [5.912982241880105, 52.94058263469177], [5.937832505055366, 52.91172831641164], [5.952335024574051, 52.92464352057816], [6.003799370866034, 52.93368698957879], [6.043308937554777, 52.91811526639333], [6.0848566961758745, 52.93628698691647], [6.092970267906599, 52.94230654597001], [6.1284818427280285, 52.953836968945815], [6.158623565727674, 52.97585216379422], [6.202209516281128, 52.99032171419523], [6.205423588174458, 53.03794123065167]], [[5.215489445028742, 52.2042746929968], [5.218977888912966, 52.21213120669109], [5.1989487335777005, 52.24084422076809], [5.188836165913321, 52.24765508335919], [5.203809037416395, 52.26712680255117], [5.201104513506154, 52.26814419281374]], [[5.104643160707547, 52.28538330559619], [5.102056224793404, 52.27990070251456], [5.119380856218427, 52.27340070917035], [5.125652216010291, 52.26014637491631], [5.139605991547189, 52.25401377250026], [5.141800967474341, 52.22549858430765], [5.122516536114359, 52.21882902591968], [5.145563783349459, 52.20062904455592], [5.124123572061024, 52.180818195276416]], [[5.12804317193094, 51.737603431723706], [5.126318547988177, 51.74500777196797], [5.1427024754444215, 51.75520993543431], [5.135098451696786, 51.77383382940748], [5.09943009288056, 51.78731425038654], [5.079988877525782, 51.7799381709829], [5.066975805957664, 51.78055990947669], [5.052355698442882, 51.79570772005275], [5.014492363699504, 51.80901857598805], [5.00038180416781, 51.82094465073263], [4.926967698604303, 51.82829246929564], [4.884636020009221, 51.81647943791357], [4.84598876529186, 51.79875989084046], [4.797189746911419, 51.79977728110303], [4.773554559695833, 51.793333809440085], [4.75525002830333, 51.78160556057989], [4.744784696650656, 51.76349036173801], [4.7294590611592895, 51.750716461774616], [4.676309286923242, 51.724914314282195], [4.69857261418436, 51.722003447697624], [4.733653033020098, 51.736501258939256], [4.750742488452928, 51.75229906884973], [4.782452051400539, 51.76657079336635], [4.785391751302976, 51.75594471729061], [4.822275186078875, 51.75385341508421], [4.851946557094131, 51.75588819560935], [4.84692946926064, 51.72553605277599], [4.836895293593658, 51.71262084860947]], [[5.5767197690401025, 51.49944932776026], [5.609644407947387, 51.50922757861719], [5.618267527661201, 51.49874280674459], [5.634769043113543, 51.49487107157869], [5.656405234395473, 51.50730584145456], [5.684156001474471, 51.50770149322334], [5.674670569789276, 51.5259014745871], [5.6822353975382125, 51.5276819075466], [5.666909762046846, 51.540568850872496], [5.652485634525558, 51.56967751671827]], [[4.777748531556641, 52.53373957302597], [4.781628935427857, 52.55711128822447], [4.74509826464025, 52.56686127824077], [4.756465104263003, 52.591561252948736], [4.752153544406097, 52.59190038303626], [4.737455044893916, 52.59385038103952], [4.733339465030506, 52.6075568887436], [4.739454040827573, 52.61385905620342], [4.714603777652312, 52.62479600152605], [4.689988690469246, 52.62375035042285], [4.674427878985684, 52.60376993609959], [4.672585667046824, 52.59091125361432], [4.698337438192165, 52.58186778461369], [4.740002784809361, 52.578928657188484], [4.752153544406097, 52.59190038303626]], [[5.584715752774729, 51.46050588937631], [5.619365015624776, 51.44965372657555], [5.6564836263928715, 51.45654937168853], [5.672162025872531, 51.45776458783549], [5.6939941971479575, 51.439253737224824], [5.718256520342731, 51.43874504209354]], [[5.721705768228256, 51.48512108156239], [5.708183148677049, 51.50204932509794], [5.684156001474471, 51.50770149322334]], [[5.087083353290328, 53.32306485173713], [5.102056224793404, 53.32295180837462], [5.162222082796598, 53.30528878298277], [5.147484387285718, 53.25133883822589], [5.387207115329716, 53.215617135673405], [5.4321257298389405, 53.215617135673405]], [[5.612270539860231, 53.318740943121206], [5.612819283842018, 53.42206257645339], [5.582912736834568, 53.458066887412144], [5.552849405832321, 53.47157556923184]], [[6.595188599238799, 52.480298323400376], [6.554307172595587, 52.48761788112276], [6.505468958216447, 52.490952660316744], [6.503783530272384, 52.48171136543172], [6.467017683492582, 52.47552224133442], [6.450085012054549, 52.4612505168178], [6.475601607207695, 52.44084618988513], [6.510917202035628, 52.437172280603626], [6.5299664574034155, 52.44197662351021], [6.540549377052185, 52.450878788307705], [6.5628910963107, 52.44576357615422], [6.596403675198474, 52.45480704515485], [6.598128299141236, 52.43903749608501], [6.585507187560109, 52.432226633493904], [6.585507187560109, 52.432226633493904], [6.575943363877517, 52.41750273552726], [6.59883382711782, 52.38364624845615], [6.6517484253616725, 52.398709276510324], [6.664173556949303, 52.38952450330656], [6.6761283365525435, 52.39613754001327], [6.698626839805855, 52.39373536855998]], [[5.852581207884716, 51.50414062730434], [5.838235472360827, 51.566427520046176], [5.820205312959218, 51.568660126455704], [5.800568117610945, 51.57860794235639], [5.786692734071446, 51.59822096575151], [5.758628399002855, 51.59395357881684]], [[4.530539367761106, 52.08052047189131], [4.504434832627473, 52.093294371854704], [4.492205681033338, 52.09001611434197], [4.475664969582297, 52.08128351458824], [4.456733302210608, 52.07882482145369], [4.4208297674021875, 52.06257483809319], [4.42208403936056, 52.05166615361118], [4.450579530414842, 52.04920746047664], [4.457634810180688, 52.03860964524152], [4.470726273746204, 52.0404748607229], [4.476723261547174, 52.031629217606664], [4.504709204618367, 52.03194008685356], [4.53500771161281, 52.04963137308604], [4.54512027927719, 52.04886833038911], [4.557192646876528, 52.06124657858372]], [[5.913883749850186, 51.13318883323478], [5.872296795230388, 51.135110570397416], [5.851326935926343, 51.10911059702061], [5.83349275651823, 51.09955843288869]], [[5.799353041651271, 51.06007803853282], [5.809348021319554, 51.059145430792135], [5.8196173729787315, 51.07259759093057], [5.827338984722464, 51.047671529497585], [5.848622412016102, 51.04625848746623], [5.8526204038834155, 51.02933024393068], [5.8770003150742856, 51.03204328463087]], [[5.147484387285718, 53.25133883822589], [5.132825083772236, 53.19738889346901], [5.163241178762775, 53.10757594195651], [5.09578486500154, 53.08711509334259]], [[5.144270315392387, 53.02615646011022], [5.164260274728953, 53.00100431195222], [5.292470386473871, 53.06806728676001], [5.348403076617558, 53.079654231417074], [5.372273439825339, 53.09378465173055], [5.372273439825339, 53.107802028681526], [5.402140790834091, 53.125775923320276], [5.406648330684494, 53.152708504437776], [5.434791057750482, 53.15347154713471], [5.472184040509471, 53.14660416286235]], [[4.899844067504492, 52.697595926981116], [4.915875230972444, 52.699348099099986], [4.90497874333408, 52.68713941594914], [4.95287625374444, 52.67213290957622], [4.979215964870269, 52.67967855402362], [4.98607526464262, 52.698924186490586], [4.972003901109626, 52.71217852074463], [4.988270240569773, 52.71339373689159], [5.011160703810076, 52.72291764018288], [4.996383812300497, 52.73863066757147], [4.996854164284887, 52.752054566869276], [4.944409918025425, 52.75360891310376], [4.898824971538314, 52.70680896102551]], [[4.492205681033338, 52.09001611434197], [4.472960445672056, 52.118955215143984]], [[4.46449410995304, 52.12732042396957], [4.427885047168034, 52.10146175479589], [4.401153376055214, 52.111861744146616], [4.3726970809996315, 52.0947639355673], [4.373520196972314, 52.09230524243276], [4.335225706243245, 52.07500960796905], [4.354510137603226, 52.067661789406046], [4.354470941604527, 52.067661789406046], [4.354510137603226, 52.067661789406046]], [[4.354470941604527, 52.067661789406046], [4.342986513985677, 52.06152918698999], [4.342986513985677, 52.06152918698999], [4.348003601819167, 52.05649875735839], [4.379987536757674, 52.074755260403414], [4.403936291962854, 52.07783569203175], [4.4208297674021875, 52.06257483809319]], [[5.637355979027687, 53.12413679456392], [5.631986127205903, 53.133010698520785], [5.6402172869327245, 53.14326938366837], [5.663303730166524, 53.14982589869383], [5.656875586379863, 53.154488937397275], [5.656875586379863, 53.154488937397275], [5.65283839851385, 53.16624544709809], [5.684783137453657, 53.18187369196481], [5.69987359695283, 53.173593265661104], [5.71323943250924, 53.17523239441747], [5.733307783843204, 53.169467182929566], [5.745419347441241, 53.18523673199942], [5.74455703546986, 53.19775628439716], [5.734797231793772, 53.21123670537622], [5.729780143960281, 53.235258419909144], [5.743890703491974, 53.24110841391893], [5.733621351832797, 53.248512754163194], [5.73538517177426, 53.264706215842445], [5.72013792828029, 53.27519098771505], [5.73538517177426, 53.294719228588285], [5.749299751312457, 53.31356920928647], [5.727898736022722, 53.31746920529299], [5.702695708859169, 53.36797132749338], [5.627243411363306, 53.32317789509964], [5.612270539860231, 53.318740943121206], [5.5672343373549085, 53.30534530466402], [5.537092614355263, 53.269454037067774], [5.4770835403468645, 53.242549716790904], [5.4321257298389405, 53.215617135673405], [5.436907641680237, 53.210191054273025], [5.466853384686386, 53.19933889147227], [5.489547867933194, 53.20075193350362], [5.480219220242796, 53.17596717627377], [5.496367971706846, 53.17836934772706], [5.472184040509471, 53.14660416286235], [5.504991091420659, 53.134734609799025], [5.511693607198214, 53.14578459848417], [5.53121321455039, 53.147875900690565], [5.5507328219025664, 53.134112871305234], [5.570957957231327, 53.12981722352993], [5.581736856873594, 53.13374548037709], [5.596317768389677, 53.12597374920467], [5.622226323529815, 53.13823895403677], [5.624342907459569, 53.12831939897671], [5.637355979027687, 53.12413679456392], [5.6567188023850665, 53.11235202402247], [5.685959017414632, 53.12987374521119], [5.703401236835753, 53.117438975335325], [5.703401236835753, 53.117438975335325], [5.75149472723961, 53.12651070517658], [5.75745251904188, 53.11271941495062], [5.787359066049332, 53.09850421211526], [5.7642726228155325, 53.080275969910865], [5.775051522457798, 53.06628685380051], [5.761842470896185, 53.06083251155951], [5.771014334591786, 53.04695643881167], [5.796374145750136, 53.058825991875]], [[5.878764135015747, 53.08657813737068], [5.8788033310144465, 53.08657813737068], [5.882918910877857, 53.089884655724035], [5.882918910877857, 53.089884655724035], [5.882017402907777, 53.10692594262209], [5.9316003412622, 53.1105998519036], [5.949669696662509, 53.10489116209695], [5.943476728868044, 53.121621579748115], [5.9228596335522905, 53.13128678724254], [5.9086314860244995, 53.1447672082216], [5.931953105250493, 53.161130234944615], [5.922114909577006, 53.168365010145116], [5.861949051573813, 53.17153022429534], [5.85097417193805, 53.191708464502995], [5.86206663956991, 53.19374324502813], [5.857715883714304, 53.20405845185697], [5.897734998386136, 53.20866496887917], [5.879900818978022, 53.23333668274651], [5.852542011886017, 53.230482337843185], [5.859244527663571, 53.243284498647206], [5.832160092562459, 53.2428605860378], [5.8322776805585566, 53.267673604108275], [5.838666628346518, 53.274936640149406], [5.810523901280528, 53.27742359412458], [5.763214330850655, 53.29449314186326], [5.73538517177426, 53.294719228588285]], [[4.571499186401717, 52.50203090984251], [4.604306237312906, 52.49440048287323], [4.621395692745734, 52.49784830542972], [4.655339427619198, 52.4979330879516], [4.6652952112887816, 52.50152221471122], [4.6652952112887816, 52.50152221471122], [4.672428883052027, 52.4971983060953], [4.672428883052027, 52.4971983060953], [4.7079796538721554, 52.48634614329455], [4.720365589461087, 52.49496569968577], [4.694378642323551, 52.50782438217104], [4.695750502278021, 52.52673088455048], [4.660003751464397, 52.53176131418208], [4.598662013500228, 52.531083054007034], [4.583336378008861, 52.5338808772291]], [[6.720850971068273, 52.341198465834445], [6.704584631608126, 52.3221789200925], [6.704584631608126, 52.3221789200925], [6.690944424060822, 52.30838762986654], [6.703800711634143, 52.30734197876334], [6.742879122337195, 52.283122438346034], [6.775529389253586, 52.2931550367686], [6.802025884374212, 52.3135876245419]], [[6.323403544258898, 52.59252212153006], [6.33622063583352, 52.56960257978159], [6.33622063583352, 52.56960257978159], [6.360718135020488, 52.52415914805343], [6.331517115989622, 52.52206784584703], [6.34405983557335, 52.48171136543172], [6.342609583621481, 52.456898347361246], [6.378513118429902, 52.45641791307059], [6.371065878677063, 52.44969183300137], [6.384157342242579, 52.439433147853784], [6.3805905063609565, 52.429824462040614], [6.3903111140383455, 52.428157072443625], [6.428488016771317, 52.4386135834756], [6.450085012054549, 52.4612505168178]], [[5.864300811495761, 52.51816784984051], [5.8550897518014615, 52.550837381605284], [5.815345009120524, 52.57745909347588], [5.777912830362836, 52.58085039435112], [5.777952026361535, 52.60752862790297], [5.72378315615931, 52.607698192946735], [5.72382235215801, 52.61128731970636], [5.663382122163922, 52.6114286239095], [5.648526838656944, 52.61693948783176], [5.627674567348997, 52.63683511963314], [5.6072142560280405, 52.64924162866838], [5.592280580523665, 52.64929815034963], [5.511301647211222, 52.66356987486625], [5.564490617445967, 52.615017750669125], [5.587381080686271, 52.563469977365536], [5.591261484557487, 52.50013743352051], [5.6058815920722695, 52.48450918865379], [5.5654313214147475, 52.47029398581843], [5.586401180718792, 52.44771357415748], [5.566646397374421, 52.435872281934785], [5.589066508630335, 52.41120056806744], [5.623010243503797, 52.40888317913603], [5.611917775871939, 52.3749984312243], [5.620736875579247, 52.36411800758292], [5.644881610777923, 52.37087234849276], [5.652564026522956, 52.36541800625176], [5.678903737648785, 52.378841905549564], [5.698776108989254, 52.382007119699786], [5.756276639080905, 52.40741361542343], [5.8114646052493075, 52.43691793303798], [5.822400288886371, 52.44969183300137], [5.815619381111418, 52.45520269692363], [5.831376172588476, 52.47340267828739], [5.840273664293183, 52.471057028515354]], [[4.549902191118486, 51.90671630203547], [4.576320294241713, 51.90304239275397], [4.596780605562669, 51.90781847481992], [4.643031884027665, 51.912566296045256], [4.617711268868015, 51.93104888581529], [4.5815333620687, 51.92014020133328], [4.567657978529201, 51.90979673366381], [4.549902191118486, 51.90671630203547], [4.542141383376054, 51.90620760690418], [4.537555451528254, 51.91977281040513], [4.556918274885634, 51.91991411460826], [4.566246922576031, 51.92590541282118], [4.560602698763354, 51.9409119191941], [4.572792654358789, 51.943455394850524], [4.561543402732133, 51.95665320742332], [4.584002709986746, 51.96535754633643], [4.6017976933961595, 51.9721401480869], [4.593723317664136, 51.976096665774676], [4.5943504536433215, 51.99426838629781], [4.578946426154555, 51.98985969516001], [4.571891146388709, 51.97185753968063], [4.547668019192635, 51.97281840826194], [4.518584588157866, 51.960298855864195], [4.49581171291366, 51.97185753968063], [4.495262968931872, 51.967392326861564], [4.469001649803442, 51.98056187859373], [4.446699126543626, 51.962785809839374], [4.427885047168034, 51.976464056702824], [4.407895087831468, 51.96821189123975]], [[4.402917195996676, 51.966318414917744], [4.379321204779788, 51.963407548333166], [4.388924224461079, 51.94554669705692], [4.409227751787239, 51.93596627208438], [4.417066951527069, 51.91997063628952], [4.4090709677924425, 51.91205760091397], [4.413696095638942, 51.90075326466318], [4.388336284480593, 51.89676848613478], [4.370619693068576, 51.89936848347246], [4.3237020826256956, 51.8941684887971], [4.2879553318120704, 51.89854891909428], [4.267573412488513, 51.90533152084475], [4.238881941440736, 51.91590107523923], [4.212699014309704, 51.93373366567485], [4.2195191180833564, 51.94139235348476], [4.1923954869835445, 51.954816252782564], [4.187495987146151, 51.966827110049024], [4.147280892480824, 51.981381442971916], [4.150965316358544, 51.98762708875047], [4.132504000971244, 51.99853577323248], [4.1101622817127295, 52.00444228892352]], [[5.8263982807536845, 51.166847494421496], [5.826947024735472, 51.17057792538426], [5.873668655184858, 51.19089746979505], [5.868102823369579, 51.19553224765787], [5.879469662992332, 51.21084962327769], [5.8948736904810985, 51.215993096271795], [5.9248978254846465, 51.20389745648345], [5.9513159286078725, 51.20115615494264], [5.98000739965565, 51.22334091483481], [6.000546102974004, 51.232751774763585], [6.009090830690419, 51.24945393157412], [6.005876758797089, 51.25869522645914], [6.009600378673508, 51.26576043661588], [6.0237893302026, 51.26612782754403], [6.046405421452009, 51.28559954673601], [6.084699912181078, 51.29744083895871], [6.101946151608704, 51.30806691503445], [6.116213495135194, 51.323214725610505], [6.1232687749010415, 51.34336470497753], [6.099711979682853, 51.35709947352223], [6.09104966397034, 51.371597284763865], [6.077605436416532, 51.37818206062995], [6.090383331992455, 51.38911900595259], [6.07313709256483, 51.3957320426593], [6.077683828413931, 51.420177669801625], [6.116448671127389, 51.42099723417981], [6.1352627505029815, 51.41610810875134], [6.140789386319561, 51.39485595659986], [6.153057733912394, 51.39592986854369], [6.148981350047683, 51.40777116076639], [6.158349193736781, 51.42478418682382], [6.1574476857667, 51.44555590468464], [6.17814317307985, 51.464462407064076], [6.1670899014466904, 51.48579934173744], [6.169206485376444, 51.50309497620114], [6.157643665760196, 51.513664530595626], [6.141102954309154, 51.51951452460541], [6.1268748067813625, 51.5143710516113], [6.1268748067813625, 51.5143710516113], [6.12197530694397, 51.51018844719851], [6.107551179422682, 51.521379740086786], [6.0667873407755675, 51.5236971290182], [6.066238596793779, 51.50795584078898], [6.073764228544016, 51.49518194082559], [6.068080808732639, 51.48837107823449], [6.049462709350543, 51.49040585875964], [6.030217473989261, 51.47983630436515], [5.994353135179539, 51.47525804818358], [5.952962160553238, 51.46352979932339], [5.8749621231419304, 51.446545034106585]], [[5.7425580395362035, 51.650051347461364], [5.734366075808081, 51.677633927913284], [5.699951988950228, 51.71146215414376], [5.713121844513142, 51.72641213883543], [5.698109777011368, 51.73850777862377], [5.701911788885186, 51.755520804681204], [5.690858517252026, 51.759138192281455], [5.673690669821799, 51.76770122699143], [5.667262526035138, 51.75221428632785], [5.648644426653041, 51.76433818695681], [5.63578813907972, 51.75831862790327], [5.576288613054412, 51.74486646776484], [5.580874544902212, 51.731442568467024]], [[5.511301647211222, 52.66356987486625], [5.361141776194781, 52.67572203633584], [5.301642250169472, 52.69242419314638], [5.287610082635177, 52.691661150449455], [5.268952787254381, 52.680272031676786]], [[5.262250271476827, 52.6768242091203], [5.257193987644637, 52.64446554660242], [5.135294431690282, 52.60393950114335], [5.074619025703999, 52.583676478413814], [5.254293483740899, 52.43898097440375], [5.279339726909656, 52.422137513390076], [5.350754836539506, 52.40020710106355], [5.386188019363537, 52.41459186894268], [5.438789049617796, 52.44265488368526], [5.509498631271061, 52.39735275616023], [5.533016230490551, 52.384381030312454], [5.57726851302189, 52.40956143931108], [5.589066508630335, 52.41120056806744]], [[4.987251144603595, 51.65460134280231], [5.004497384031221, 51.60788617324593]], [[5.493859427790101, 52.11109870144969], [5.519376022943247, 52.100500886214576], [5.5315267825399825, 52.102253058333446], [5.550340861915575, 52.10541827248367], [5.561394133548735, 52.12042477885659], [5.606900688038447, 52.12488999167565], [5.6381790950003685, 52.13076824652606], [5.679256501637077, 52.131616071744865], [5.688428365332678, 52.136957370623364], [5.7215489842334595, 52.13800302172656], [5.720333908273785, 52.14625518718964], [5.762116842887079, 52.14761170753973], [5.774698758469506, 52.15221822456193], [5.809857569302643, 52.15142692102437], [5.8096615893091474, 52.16668777496293], [5.801939977565414, 52.17737037271993], [5.811934957233698, 52.184887756326695], [5.788574142009004, 52.19653122266501], [5.750593219269529, 52.19373339944294], [5.730760043927759, 52.20859860161272], [5.7274283840383315, 52.21930946021034], [5.741656531566123, 52.21987467702288], [5.726370092073455, 52.242511610365085]], [[4.671723355075443, 51.820859868210746], [4.729655041152785, 51.82215986687959], [4.742746504718301, 51.84100984757777], [4.73725906490042, 51.84646418981878], [4.705431913956711, 51.84126419514342], [4.683207782694293, 51.84849897034392], [4.672624863045523, 51.838664197805734]], [[4.440466962750461, 52.155666047118416], [4.4115795117091885, 52.16346603913146], [4.375009644922882, 52.18661166760494], [4.359997577421107, 52.19268774833974]], [[4.290071915741825, 52.13503563346073], [4.329895050420161, 52.10852696495264], [4.3275040944995125, 52.09555523910486], [4.35850812947054, 52.10575740257119], [4.3726970809996315, 52.0947639355673]], [[4.401153376055214, 52.111861744146616], [4.4429755066672065, 52.145350840289574]], [[7.101248138443518, 53.33027136609701], [7.100425022470835, 53.30998008252684], [7.134251169348201, 53.2878235834753], [7.134878305327388, 53.279684461374735], [7.113477290037652, 53.26286926120169], [7.085295366972964, 53.25489970414489], [7.067539579562249, 53.24238015174714], [7.041591828423412, 53.259308395282694], [7.021837045079041, 53.253232314547894], [7.013213925365228, 53.26685403973009], [6.995458137954513, 53.2669670830926], [6.9522249513893515, 53.25651057206063], [6.9425043437119625, 53.24204102165962], [6.928432980178968, 53.23695407034676], [6.9113435247461386, 53.24300189024093], [6.9127153847006095, 53.225112778124064], [6.92004503645735, 53.22734538453359], [6.9294128801464465, 53.21281931245134], [6.91683096456402, 53.19558019966888], [6.91220583671752, 53.171954136904745], [6.903308345012813, 53.16647153382311], [6.929256096151651, 53.16904327032017], [6.950382739450491, 53.15889762853509], [6.954655103308699, 53.13665634696166], [6.965277218956168, 53.110825938628615], [6.979740542476154, 53.119191147454195], [6.987618938214684, 53.116110715825855], [7.0297546368162696, 53.115093325563286], [7.0511948481047035, 53.13021287529871], [7.080513455131667, 53.143693296277775], [7.101992862418801, 53.14321286198712], [7.14165921310234, 53.15553458850047], [7.145304440981361, 53.16076284401646], [7.17395671603044, 53.147932422371824], [7.189243155523108, 53.15488458916605]], [[5.690858517252026, 51.759138192281455], [5.711240436575583, 51.77502078471381], [5.693249473172674, 51.78804903224284], [5.664048454141807, 51.79418163465889], [5.636650451051102, 51.81933378281689], [5.620697679580548, 51.81936204365752], [5.5979640003350415, 51.828038121729996], [5.555083577758172, 51.8266816013799], [5.540933822227779, 51.81630987286981], [5.517729790997882, 51.81927726113564], [5.505069483418057, 51.827953339208115], [5.488763947959211, 51.830270728139524], [5.465520720730616, 51.81136422576009], [5.4278141699820335, 51.811788138369494], [5.414879490411314, 51.82128378082015]], [[5.241123628177985, 51.305664743581154], [5.259428159570488, 51.31148647675031], [5.263426151437802, 51.31928646876335], [5.285963850689813, 51.336327755661415], [5.275302539043643, 51.362723380807005], [5.289256314580541, 51.3889211800682], [5.310853309863772, 51.390701613027694], [5.307090493988654, 51.40630159705378], [5.281887466825101, 51.40437985989115], [5.23771357629116, 51.428571139467834], [5.223524624762067, 51.42509505607072], [5.209218085236878, 51.43651243568401], [5.191031141840472, 51.43023852906482], [5.191031141840472, 51.430210268224194]], [[6.315172384532077, 53.094038999296195], [6.3444517955603414, 53.08714335418322], [6.382628698293313, 53.14957155112818], [6.402697049627277, 53.16700848979502], [6.408145293446459, 53.1781997826833], [6.442872948293905, 53.18775194681522], [6.447694056133901, 53.196428024887695], [6.463450847610959, 53.200045412487945]], [[5.2247397007217415, 52.22518771506075], [5.218977888912966, 52.21213120669109]], [[5.225014072712635, 52.165698645540985], [5.243161820110341, 52.17007907583817], [5.281534702836808, 52.19248992245535], [5.281534702836808, 52.19248992245535], [5.314263361750598, 52.20303121600921]], [[4.728871121178802, 52.69140680288381], [4.741727408752123, 52.680808987648696], [4.779041999513714, 52.67648507903277], [4.77367214769193, 52.64836554260894], [4.7976992948945085, 52.65899161868468], [4.7976992948945085, 52.65899161868468], [4.800521406800847, 52.66023509567227]], [[4.013073792934936, 51.53825146194109], [3.998532077417552, 51.54429928183526], [3.9609431146650675, 51.55147753535451], [3.937974259427366, 51.535764507965915], [3.9714476423164395, 51.52844495024353], [3.9634908545805123, 51.52061669738986], [3.965215478523275, 51.506429755395125], [3.9258234998306296, 51.49187542247223], [3.9128888202599104, 51.47912978334948]], [[5.924349081502858, 52.39138971878794], [5.951041556616979, 52.39842666810405], [5.975578251802647, 52.41100274218305], [6.0177531464029315, 52.444209229919736], [6.022652646240324, 52.44409618655723], [6.0369591857655145, 52.47023746413718], [6.0279441060647105, 52.482417886447394], [6.000781278966199, 52.50013743352051], [5.96526970414477, 52.476454849075104], [5.958136032381525, 52.48408527604439], [5.925603353461231, 52.47408093846244], [5.903104850207919, 52.50440482045518], [5.876216395100303, 52.522011324165774], [5.864300811495761, 52.51816784984051], [5.840273664293183, 52.471057028515354], [5.877627451053472, 52.45311139471723], [5.868729959348766, 52.444774446732275], [5.899969170311987, 52.41982012445867], [5.916274705770833, 52.41295274018631], [5.906005354111656, 52.40860057072976], [5.924349081502858, 52.39138971878794], [5.911688773923033, 52.386783201765745], [5.876020415106807, 52.357872361804354], [5.8648103594788505, 52.3513158467789], [5.8809591109429, 52.335178906780904], [5.870258603298032, 52.323139788673814], [5.8408224082749705, 52.30440285133814], [5.8521500518990255, 52.280098528398945], [5.850817387943254, 52.26870940962628], [5.860890759608935, 52.25579420545976], [5.879587250988429, 52.26497897866352], [5.936225469108701, 52.27441809943293], [5.9738928238585824, 52.27320288328597], [5.985730015465727, 52.28566591400246], [5.988983283357756, 52.27410723018603], [6.028218478055605, 52.276594184161205], [6.036410441783726, 52.26853984458252], [6.043387329552175, 52.27865722552697], [6.034764209838363, 52.29485068720622], [6.052951153234767, 52.33091151984623], [6.073685836546618, 52.33057238975871], [6.076076792467266, 52.3505810649226], [6.094851675844158, 52.3569680149043], [6.077840612408727, 52.36428757262668], [6.052402409252979, 52.361009315113954], [5.991335043279705, 52.37858755798392], [5.951041556616979, 52.39842666810405]], [[4.325975450550246, 52.01277923690847], [4.309826699086196, 52.0156335818118], [4.26541763256006, 51.995737950010415], [4.3031241833086415, 51.97991187925931], [4.276510100191919, 51.96504667708953], [4.233943245604643, 51.95331842822934], [4.240332193392605, 51.94286191719736], [4.270395524394852, 51.92358802388977], [4.292619655657269, 51.92124237411773], [4.323858866620491, 51.9416467010504], [4.35066892973071, 51.95150973442921], [4.379321204779788, 51.963407548333166]], [[7.026854132912533, 52.91904787413402], [7.0363003685990275, 52.929278298440984], [7.063541587694935, 52.9309739488786], [7.069930535482897, 52.95301740456763], [7.072047119412652, 53.00377387433367], [7.100033062483844, 53.01643473093455], [7.081846119087439, 53.02638254683524], [7.081728531091342, 53.0444694848365], [7.068323499536232, 53.04333905121142], [7.080082299145976, 53.0614542500533], [7.065932543615584, 53.06727598322246], [7.034262176666671, 53.06464772504415], [7.015448097291079, 53.071769456882144], [7.010117441467996, 53.073691194044784], [6.955791787270974, 53.013862994437496], [6.933567656008556, 53.020956465434864], [6.9076982968671174, 53.038873838392355]], [[6.861290234407325, 53.040880358076876], [6.935684239938311, 52.993345624142314]], [[5.89706866640825, 50.97487160404252], [5.873511871190061, 50.96280422509481], [5.852189247897725, 50.968032480610795], [5.839881704306191, 50.95019989017518], [5.856931963740321, 50.944010766077874], [5.841488740252856, 50.919593399776176], [5.801704801573219, 50.914139057535166], [5.7965701257436315, 50.907469499147204], [5.799823393635661, 50.88568039102381], [5.81922541299174, 50.88384343638306], [5.833100796531239, 50.89220864520864], [5.835295772458391, 50.881299960726636], [5.8616354835842195, 50.882430394351715], [5.880567150955908, 50.88248691603297], [5.901537010259953, 50.89576951112764], [5.923408377534079, 50.90441732835949], [5.895500826460284, 50.920130355748086], [5.928464661366268, 50.93660642583361], [5.9364214491021965, 50.9465542417343], [5.965857644125258, 50.96240857332603], [6.006072738790585, 50.95754770873819]], [[6.172890909254164, 52.773052371455115], [6.201739164296738, 52.79371104595343], [6.130324054666888, 52.84393055974755], [6.119819527015516, 52.85421750573576], [6.0810154883033585, 52.83873056507218], [6.052598389246475, 52.83734578388146], [6.059928041003216, 52.82612623015256], [6.031158177958041, 52.814991458945535], [6.024573250176584, 52.82253710339293], [5.996469719109293, 52.816771891905034], [5.98647473944101, 52.82168927817413], [5.969973223988668, 52.84237621351306], [5.956293820442665, 52.83336100535306], [5.946612408763976, 52.83734578388146], [5.9271711934091975, 52.83386970048435], [5.923957121515867, 52.82341318945237], [5.898636506356216, 52.808463204760706], [5.8765299630898955, 52.8008045169508], [5.844154068164398, 52.80543929481362], [5.819734960974829, 52.817280587036315], [5.795159069790461, 52.806513206757444], [5.818794257006049, 52.78469583779343], [5.849680703980979, 52.78475235947468], [5.879665642985827, 52.77325019733951], [5.922585261561396, 52.75069804651918], [5.942536024899264, 52.715004604807326], [5.951159144613076, 52.711924173178986], [5.965152116148673, 52.69358288761209], [5.933873709186752, 52.67552421045146], [5.933089789212769, 52.671256823516785], [5.97079633996135, 52.665180742781985], [5.999527007007827, 52.65463944922813], [6.017282794418541, 52.643222069614836], [6.054871757171026, 52.65023075809032], [6.08556222415246, 52.66328726645998], [6.119584351023321, 52.66795030516343], [6.152391401934509, 52.68453941861146], [6.1589763297159665, 52.692141584740114]], [[4.477663965515954, 52.33252238776197], [4.547315255204342, 52.31398327631068], [4.5916459297330805, 52.39172884887546], [4.526031827910704, 52.4051810090139]], [[5.02154764346535, 52.30245285333488], [5.021861211454944, 52.282642004055376], [5.030523527167456, 52.288491998065155], [5.042791874760289, 52.282500699852235], [5.059136606217835, 52.28919851908083], [5.06442806604222, 52.280748527733365], [5.063918518059131, 52.280098528398945], [5.063918518059131, 52.280098528398945], [5.1013506968168185, 52.27998548503644], [5.1013506968168185, 52.27998548503644], [5.102056224793404, 52.27990070251456]], [[6.813941467978752, 53.07097815334459], [6.861290234407325, 53.040880358076876], [6.881436977738687, 53.046617308724144], [6.8989183931585085, 53.032402105888785], [6.9076982968671174, 53.038873838392355], [6.905503320939966, 53.043847746342706], [6.933332480016362, 53.049612957830604], [6.9244349883116545, 53.0577803407718], [6.930588760107421, 53.07284336882597], [6.96061289511097, 53.095791171415065], [6.9617495790732455, 53.11003463509106], [6.959358623152597, 53.12018027687614], [6.8862580855786835, 53.12860200738297], [6.8659153622538245, 53.12439114212956], [6.823113331674353, 53.12622809677031], [6.801673120385919, 53.119162886613566], [6.813941467978752, 53.07097815334459], [6.776509289221065, 53.0947737811525], [6.748758522142067, 53.08683248493632], [6.749816814106945, 53.08160422942033], [6.699018799792847, 53.06518468101606], [6.6745604966045775, 53.07883466703889], [6.653865009291426, 53.08013466570773], [6.6704841127398655, 53.06665424472867], [6.666838884860844, 53.05834555758434], [6.642341385673877, 53.0459390485491], [6.648612745465741, 53.026326025153985], [6.631209722043318, 53.02609993842897], [6.62975947009145, 53.015530384034484], [6.615962478549349, 53.0082108263121], [6.596050911210181, 52.97265868880338], [6.5812740197006026, 52.96745869412801], [6.561519236356231, 52.946658715426565], [6.585820755549703, 52.9194435259028], [6.614943382583171, 52.91828483143709], [6.625447910234543, 52.91280222835546], [6.666721296864747, 52.90943918832085], [6.674991652590268, 52.90503049718305], [6.686358492213021, 52.875328353684104], [6.71457961127641, 52.868150100164854]], [[5.711240436575583, 51.77502078471381], [5.729740947961582, 51.772844699985534], [5.745262563446445, 51.77863817231406], [5.780656550271777, 51.78420555791757], [5.800960077597936, 51.79514250324021], [5.77132790258138, 51.82306421377965], [5.757687695034075, 51.82402508236097], [5.764742974799923, 51.832277247824045], [5.728721851995404, 51.83860767612448], [5.678119817674801, 51.84315767146543], [5.684822333452356, 51.84878157875019], [5.667850466015625, 51.86593590901076], [5.636219295065411, 51.86737721188273], [5.64319618283386, 51.84499462610618], [5.609840387940883, 51.83629028719307], [5.609840387940883, 51.83626202635244], [5.5979640003350415, 51.828038121729996]], [[5.931286773272608, 51.384738575655405], [5.870376191294129, 51.352521217340666], [5.840195272295785, 51.34686904921527], [5.832081700565061, 51.33805166693966], [5.8521500518990255, 51.320699510794704], [5.877823431046968, 51.316573428063165], [5.860733975614139, 51.31080821657527], [5.850660603948457, 51.291534323267676], [5.833806324507823, 51.274775644775886], [5.853443519856097, 51.24448002362377], [5.7917882139023344, 51.237527856829544]], [[5.706184152743393, 52.3283680441898], [5.700618320928114, 52.357307144991815], [5.678903737648785, 52.378841905549564]], [[5.620736875579247, 52.36411800758292], [5.611643403881045, 52.35951149056072], [5.591143896561389, 52.36290279143596], [5.575661477075226, 52.350807151647615], [5.565862477400438, 52.332381083558836]], [[5.955470704469983, 51.159047502408455], [5.916666665757825, 51.168627927380996], [5.921252597605625, 51.178914873369216], [5.9513159286078725, 51.20115615494264]], [[5.586597160712288, 51.950831474254166], [5.605920788070969, 51.943116264763006], [5.627243411363306, 51.95238582048865], [5.619521799619573, 51.96719450097718], [5.6261851193984285, 51.97369449432138], [5.605999180068367, 51.9941553429353], [5.589497664616025, 52.009444457714494], [5.570487605246938, 51.996953166157375], [5.5532413658193125, 51.99904446836377], [5.512595115168294, 52.01851618755575], [5.494212191778393, 51.9948901247916], [5.477671480327352, 51.98347274517831], [5.486216208043766, 51.98384013610646], [5.517494615005688, 51.97182927884], [5.537523770340953, 51.96829667376163], [5.561237349553938, 51.95450538353567], [5.586597160712288, 51.950831474254166], [5.575857457068722, 51.94255104795047], [5.533447386476242, 51.94322930812551], [5.5541428737893925, 51.93427062164676], [5.547832317998829, 51.92163802588651], [5.4533699611338795, 51.92276845951159], [5.469675496592726, 51.91988585376764], [5.472458412500365, 51.90807282238556], [5.455525741062333, 51.90281630602895], [5.46391368478395, 51.88899675496236], [5.507656419332202, 51.88967501513741], [5.531369998545187, 51.89476196645026], [5.5539076977971975, 51.90078152550381], [5.628105723334688, 51.89939674431309], [5.685018313445852, 51.8956380525097], [5.706654504727783, 51.893292402737664], [5.706184152743393, 51.90793151818243], [5.675807253751552, 51.926159760386824], [5.6887811293209705, 51.935146707706195], [5.660364030264088, 51.92960758294331], [5.66114795023807, 51.943596699053664], [5.6469981947076775, 51.94031844154093], [5.666008254076765, 51.95280973309805], [5.648918798643935, 51.95399668840439], [5.639629346952237, 51.938255400175166], [5.629908739274848, 51.93644670637504], [5.605920788070969, 51.943116264763006]], [[5.135294431690282, 52.60393950114335], [5.1252210600246, 52.61518731571288], [5.09484416103276, 52.632313385132825], [5.105975824663318, 52.63607207693621], [5.101938636797306, 52.64717858730261], [5.1194200522171265, 52.65116336583101], [5.09621602098723, 52.66981552064481], [5.091747677135527, 52.67891551132669], [5.086730589302036, 52.684369853567695], [5.063448166074741, 52.67315029983879], [5.034756695026964, 52.66656552397271], [5.0369516709541164, 52.64743293486825], [5.018372767570719, 52.63833294418637], [5.027035083283232, 52.61261557921583], [5.060430074174906, 52.578928657188484], [5.074619025703999, 52.583676478413814]], [[4.925047094668045, 51.67299915005046], [4.9328079024104765, 51.650701346795785], [4.912857139072609, 51.63368832073835], [4.911877239105131, 51.615403556852705]], [[4.185261815220299, 51.84971418649088], [4.175619599540308, 51.85547939797878], [4.1863201071851766, 51.86245982561364], [4.160137180054145, 51.86703808179521], [4.15527687621545, 51.8815924147181], [4.130113045050596, 51.87588372491145], [4.117256757477275, 51.857966351953955], [4.0891532264099855, 51.8528794006411], [4.082725082623325, 51.847255493356336], [4.039844660046455, 51.84211202036223], [4.049486875726446, 51.83123159672085], [4.070456735030491, 51.81927726113564], [4.106752229825903, 51.81266422442893], [4.121568317334182, 51.8068707521004], [4.141950236657739, 51.807040317144164], [4.175188443554618, 51.79175120236497], [4.1926306629757395, 51.79110120303055]], [[6.455454863876332, 52.800550169385154], [6.4599232077280355, 52.813861025320456], [6.4800307550606995, 52.83695013211268], [6.462666927636976, 52.83867404339093], [6.460707127702019, 52.85305881127006], [6.430878972691966, 52.850374031410496], [6.430761384695868, 52.871852270286986], [6.419982485053602, 52.88230878131897], [6.359542255059514, 52.894517464469814], [6.385568398195749, 52.915543529896276], [6.369027686744708, 52.92198700155922], [6.333280935931084, 52.90635875669251], [6.302982428936641, 52.92498265066568], [6.2565743664768485, 52.92763916968462], [6.24724571878645, 52.923343521909324], [6.206913036125027, 52.8907305118258], [6.165992413483114, 52.87501748443721], [6.119819527015516, 52.85421750573576]], [[5.244063328080422, 52.25466377183468], [5.225523620695724, 52.272920274879695], [5.203809037416395, 52.26712680255117], [5.210903513180941, 52.27735722685813], [5.227718596622877, 52.277131140133115], [5.280946762856321, 52.293805036103024], [5.30544426204329, 52.30762458716961], [5.281142742849817, 52.31678109953275], [5.224582916726945, 52.325768046852126]], [[6.561519236356231, 52.946658715426565], [6.542979528971533, 52.95533479349905], [6.535924249205686, 52.93258481679434], [6.4969634264987315, 52.95157610169566], [6.483950354930614, 52.95016305966431], [6.495748350539058, 52.96898477952187], [6.48551819487858, 52.9729978188909], [6.49661066251044, 52.983228243197864], [6.488222718788821, 53.005413003090034], [6.413279969276047, 52.985517371288644], [6.427625704799937, 52.971810863584565], [6.393446793934277, 52.93283916435998], [6.369027686744708, 52.92198700155922]], [[5.417427230326759, 51.26228435321877], [5.387795055310202, 51.28523215580786], [5.397672446982388, 51.31431256081301], [5.4109598905414, 51.320021250619654], [5.4258151740483775, 51.3119951718816], [5.433928745779101, 51.324316898394954], [5.42428653009911, 51.3307603700579], [5.41973979425001, 51.360716861122484], [5.423189042135535, 51.3748755422766]], [[5.388892543273778, 51.376458149351706], [5.3523618724861715, 51.36176251222568], [5.342602068810083, 51.3526625215438], [5.347109608660485, 51.337458189286494], [5.324023165426686, 51.33290819394555], [5.316654317671246, 51.32338429065427], [5.292156818484278, 51.318240817660154], [5.263426151437802, 51.31928646876335]], [[6.101319015629517, 52.30123763718792], [6.084111972200591, 52.30157676727544], [6.079839608342384, 52.31760066391093], [6.066512968784673, 52.31779848979532], [6.073685836546618, 52.33057238975871]], [[6.036410441783726, 52.26853984458252], [6.024847622167478, 52.2492376904343], [6.033431545882591, 52.2240855422763], [6.0469149694350985, 52.22137250157611], [6.049266729357047, 52.211311642312914], [6.049266729357047, 52.211311642312914], [6.058242613059153, 52.19593774501184], [6.0493843173531445, 52.18466166960168], [6.059810453007119, 52.17621167825422], [6.0645139728510165, 52.15671169822161], [6.076076792467266, 52.14393779825822]], [[6.184688904862608, 52.16123343272193], [6.192802476593332, 52.1697964674319], [6.193939160555608, 52.175872548166694], [6.156781353788814, 52.19831165562451], [6.189588404700002, 52.207722515553286], [6.189392424706506, 52.217133375482064], [6.166266785474008, 52.231009448229905]], [[5.107112508625594, 52.13319867881998], [5.087161745287727, 52.13565737195452], [5.06121399414889, 52.122572602744235], [5.0475737866015855, 52.129976942988506], [5.0326793070959095, 52.11677913041571], [5.015393871669584, 52.12726390228831], [5.00269436809106, 52.14130954007992], [4.9739245050458845, 52.1296660737416], [4.9700832971733675, 52.1224312985411], [4.979843100849456, 52.10909218176518], [4.975649128988646, 52.0997943651989], [4.98932853253465, 52.10075523378022], [5.00496773601561, 52.088490028948115], [4.99948029619773, 52.06613570401219], [5.0170792996136475, 52.06113353522122], [5.055608966334911, 52.028605307659575], [5.055608966334911, 52.028605307659575], [5.062781834096856, 52.026824874700075], [5.064153694051326, 52.05146832772679], [5.070307465847092, 52.06178353455564], [5.097352704949506, 52.05949440646485], [5.104407984715352, 52.04994224233293], [5.111267284487703, 52.05833571199914], [5.126828095971266, 52.05491615028328]], [[6.077840612408727, 52.36428757262668], [6.082896896240918, 52.37220060800223], [6.124562242858113, 52.38217668474355], [6.130559230659083, 52.399981014338536], [6.110765251316012, 52.407752745510955], [6.119466763027224, 52.432904893668955], [6.109589371355039, 52.44053532063823], [6.103553187555369, 52.45395921993604], [6.063338092890042, 52.45116139671397], [6.022652646240324, 52.44409618655723]], [[4.676309286923242, 51.724914314282195], [4.645148467957419, 51.719064320272416], [4.656515307580173, 51.7073078105716], [4.666941443234146, 51.68650783187015], [4.697318342225987, 51.68772304801711], [4.709861061809715, 51.67328175845673], [4.6849324066370555, 51.66644263502501], [4.696769598244199, 51.65462960364293], [4.689204770495263, 51.6523969972334], [4.699042966168749, 51.63806875103553], [4.7369063009121275, 51.643070919826506], [4.762658072057469, 51.635044841088444], [4.768184707874049, 51.62885571699114], [4.7875083352327295, 51.63705136077296], [4.794289243007682, 51.641742660317036], [4.781080191446069, 51.663899159368576], [4.842382733411538, 51.6796404475978]], [[6.063494876884839, 51.8654554747201], [6.046287833455912, 51.8709098169611], [6.012187314587652, 51.88167719723998], [5.989571223338243, 51.87243590235496], [5.981065691620527, 51.859831567435336], [5.95605864445047, 51.85646852740072], [5.9373229570722765, 51.87141851209239], [5.923643553526274, 51.874611987083235], [5.8959711784446736, 51.870542426032955], [5.886760118750374, 51.86520112715446], [5.885858610780294, 51.84799027521264], [5.89706866640825, 51.832135943620905], [5.908357114033605, 51.82930985955821], [5.88048875895851, 51.82032291223884], [5.87911689900404, 51.809527271119336], [5.893423438529229, 51.77784686877651]], [[5.938302857039755, 51.74158821025211], [5.915294805803355, 51.75229906884973], [5.911100833942546, 51.76241644979418], [5.893423438529229, 51.77784686877651], [5.867906843376083, 51.7755294798451], [5.864457595490558, 51.75766862856885], [5.880331974963713, 51.74854037704634], [5.885388258795904, 51.72830561515743], [5.892051578574759, 51.7228230120758], [5.919488777664164, 51.71767953908169], [5.938302857039755, 51.74158821025211], [5.953275728542831, 51.74803168191506]], [[5.771014334591786, 53.04695643881167], [5.755414327109524, 53.046843395449166], [5.73671783573003, 53.03014123863863], [5.733229391845805, 53.0154456015126], [5.748633419334571, 53.00815430463085], [5.716845464389562, 52.99569127391435], [5.705165056777215, 52.98424563346043], [5.691211281240317, 52.98865432459824], [5.688153993341784, 52.936004378510205], [5.679178109639679, 52.93295220772249], [5.6424514588585755, 52.93617394355396], [5.6399821109405295, 52.92246743584988], [5.594240380458622, 52.91540222569314], [5.564764989436862, 52.94747827980475], [5.515495619072031, 52.928684820787815], [5.476965952350767, 52.90223267396098], [5.501855411524727, 52.88007617490943], [5.4770835403468645, 52.86877183865865], [5.432517689825932, 52.87465009350906], [5.441180005538444, 52.8500631621636], [5.337859352967486, 52.79594365236296], [5.377251331660132, 52.76480020599204], [5.631358991226717, 52.803065384200956], [5.660285638266689, 52.83124144230604], [5.709633400628918, 52.834830569065666], [5.729584163966785, 52.83372839628121], [5.724684664129391, 52.8439870814288], [5.748790203329368, 52.8396914336535], [5.7843801701481965, 52.81747841292071], [5.795159069790461, 52.806513206757444]], [[5.819734960974829, 52.817280587036315], [5.818127925028163, 52.8216610173335], [5.83996009630359, 52.84291316948497], [5.856775179745524, 52.870778358343166], [5.885937002777692, 52.89417833438229], [5.911453597930838, 52.89790876534505], [5.937832505055366, 52.91172831641164]], [[6.050129041328429, 53.492347287092656], [6.079251668361897, 53.429269090813264], [6.194017552553007, 53.413301715859035], [6.350409587362612, 53.4462821168707], [6.351585467323586, 53.497038586636734], [6.381648798325834, 53.49455163266156], [6.3970136298159, 53.507890749437486], [6.382275934305021, 53.52151247461968], [6.3521342113053745, 53.5217385613447], [6.352526171292366, 53.53971245598345]], [[5.039068254883871, 52.354565843451], [5.0376963949294, 52.375394082993076], [5.0791657615531, 52.388648417247126]], [[5.838666628346518, 53.274936640149406], [5.861165131599829, 53.288643147853485], [5.882252578899972, 53.27677359479016], [5.906632490090843, 53.28785184431593], [5.897225450403047, 53.301247482773114], [5.922350085569201, 53.312636601545776], [5.963858648191601, 53.32286702585274], [5.972168199915821, 53.32108659289324], [5.975852623793541, 53.30692791173913], [5.990511927307022, 53.31012138672998], [6.021124002291058, 53.30884964890176], [6.022456666246829, 53.324025720318446], [6.073450660554423, 53.32487354553726], [6.073685836546618, 53.29240183965687], [6.0543622091879365, 53.29087575426301], [6.051853665271191, 53.26628882291755], [6.0439752695326625, 53.24351058537222], [6.0745089525193, 53.24845623248194], [6.141063758310455, 53.26439534659555], [6.180730108993995, 53.261060567401564], [6.192096948616747, 53.26908664613963], [6.192096948616747, 53.26908664613963], [6.217103995786805, 53.265271432654984], [6.232155259287278, 53.25673665878564]], [[6.286990461467388, 53.341377876463405], [6.2556728585067685, 53.34838656493889], [6.232429631278173, 53.34344091782917], [6.217574347771195, 53.35785394654892], [6.178574329065541, 53.364834374183786], [6.167952213418072, 53.39074956503871], [6.194017552553007, 53.413301715859035]], [[6.00493605482831, 53.49257337381767], [6.0044265068452205, 53.4566538453808], [5.958998344352906, 53.43890603746706], [5.958763168360711, 53.42093214282831], [5.823145012861655, 53.394536517682724], [5.792885701865911, 53.376675666406484], [5.777873634364138, 53.376732188087736], [5.747967087356686, 53.39479086524837], [5.702891688852665, 53.39490390861088], [5.702695708859169, 53.36797132749338]], [[6.235369331180609, 52.31983327032046], [6.235682899170202, 52.339898467165604], [6.222944199592979, 52.347246285728616], [6.196996448454142, 52.352107150316456], [6.1894708167039045, 52.3757332130806], [6.201347204309747, 52.37138104362405], [6.203973336222591, 52.38689624512825], [6.229842695364029, 52.389778850872204], [6.222199475617694, 52.40877013577352], [6.230940183327604, 52.42349403374017], [6.177437645103266, 52.43115272155008], [6.154899945851255, 52.453196177239114], [6.139613506358587, 52.44158097174143], [6.109589371355039, 52.44053532063823]], [[4.240332193392605, 51.94286191719736], [4.228299021791965, 51.94800539019147], [4.2195191180833564, 51.94139235348476]], [[4.267573412488513, 51.90533152084475], [4.292619655657269, 51.92124237411773]], [[6.3903111140383455, 52.428157072443625], [6.405166397545324, 52.415496215842744], [6.388390510102088, 52.37977451329026], [6.357033711142768, 52.37700495090881], [6.343079935605871, 52.370024523273955], [6.333516111923279, 52.351372368460154], [6.342374407629286, 52.33317238709639], [6.356014615176591, 52.31822240240472], [6.4217463049950645, 52.325683264330245], [6.460903107695515, 52.32005935704548], [6.468193563453556, 52.3264745678678], [6.490888046700364, 52.34939410961627], [6.518873989771556, 52.35515932110417], [6.520794593707814, 52.36140496688273], [6.499040814429787, 52.36355279077038], [6.495552370545562, 52.37618538653063], [6.514092077930259, 52.38166798961226], [6.508526246114981, 52.392152761484866], [6.5159734858678195, 52.40611361675459], [6.575943363877517, 52.41750273552726]], [[4.184987443229406, 52.06144440446811], [4.19631508685346, 52.05567919298021], [4.212307054322713, 52.0307248707066], [4.23500153756952, 52.03928790541657], [4.2482105891311335, 52.02521400678434], [4.272668892319403, 52.03592486538196], [4.295520159561007, 52.014842278274244], [4.3076317231590435, 52.0181487966276], [4.2909342277132065, 52.04157703350735], [4.34004681408324, 52.06181179539626], [4.352628729665668, 52.04909441711413], [4.3460438018842105, 52.04400746580127], [4.357802601493955, 52.026853135540705]], [[4.379752360765479, 52.026740092178194], [4.3939413122945705, 52.03295747711613], [4.372657885000932, 52.04092703417293], [4.39445086027766, 52.05404006422385], [4.42208403936056, 52.05166615361118]], [[4.480407685424894, 51.86231852141051], [4.490128293102283, 51.851325054406615], [4.489109197136106, 51.83538594029301], [4.525483083928916, 51.829846815530125], [4.553625810994905, 51.82990333721138]], [[4.5710680304160265, 51.8471141891532], [4.5493926431353975, 51.87401850943007]], [[4.427885047168034, 51.976464056702824], [4.4242398192890136, 51.97926187992489], [4.447247870525414, 51.99240317081643], [4.461554410050604, 52.01263793270534], [4.457164458196298, 52.022133575156], [4.476723261547174, 52.031629217606664]], [[6.0726667405804395, 51.24255828646114], [6.051383313286801, 51.252506102361835], [6.027865714067312, 51.2455539355676], [6.005876758797089, 51.25869522645914]], [[5.456858405018103, 51.68758174381398], [5.4698322805875215, 51.68913609004846], [5.47825942030784, 51.70140129488056], [5.499033299618388, 51.707025202165326], [5.484609172097102, 51.71352519550953], [5.474261428440526, 51.72895561449185], [5.463168960808667, 51.72587518286352], [5.4481568933068925, 51.744131685908535], [5.4481568933068925, 51.744131685908535], [5.438828245616495, 51.76501644713186], [5.392772947144994, 51.760268625906534], [5.374037259766801, 51.75323167659042], [5.3534985564484465, 51.75546428299995], [5.294547774404926, 51.73678386734552], [5.267032183318123, 51.739468647205086], [5.2496683558944, 51.73359039235468], [5.225053268711334, 51.74297299144283], [5.206513561326636, 51.7414751668896], [5.21000200521086, 51.733957783282825], [5.230932668516207, 51.7241795324259], [5.229991964547427, 51.7105578072437], [5.251588959830658, 51.69936651435542], [5.22615075667491, 51.69004043694852], [5.246885439986761, 51.68317305267617], [5.288785962596151, 51.68164696728231], [5.298937726259231, 51.66712089520005], [5.319045273591895, 51.67037089187215], [5.327472413312211, 51.67336654097861], [5.338878448933664, 51.66398394189046], [5.353694536441942, 51.671077412887826], [5.3573397643209635, 51.682014358210466], [5.377094547665335, 51.67879262237899], [5.359260368257221, 51.698688254180375], [5.398260386962875, 51.69849042829598], [5.429029245941708, 51.70151433824307], [5.456858405018103, 51.68758174381398], [5.445021213410961, 51.6642382894561], [5.432988041810322, 51.66435133281861], [5.42338502212903, 51.653781778424126], [5.467794088655166, 51.64227961628895], [5.4971910876795285, 51.626679632262864], [5.5048735034245615, 51.63606223135102], [5.524393110776738, 51.63043832406625], [5.570291625253442, 51.65143612865209], [5.562256445520116, 51.663164377512274], [5.576602181044005, 51.6803752294541], [5.5968273163727655, 51.69091652300796], [5.597023296366261, 51.70199477253373], [5.600158976262193, 51.7083534616748], [5.580874544902212, 51.731442568467024], [5.560179057589061, 51.73234691536709], [5.53395693445933, 51.74037299410515], [5.507695615330901, 51.73782951844872], [5.474261428440526, 51.72895561449185]], [[6.513386549953675, 53.19693672001898], [6.537452893154953, 53.16483240506675], [6.533925253272029, 53.15180415753771], [6.539099125100317, 53.13253026423013], [6.510917202035628, 53.13069330958937], [6.512485041983595, 53.125606358276514], [6.480305127051594, 53.1207737545293], [6.490731262705567, 53.09689334419952], [6.513347353954976, 53.07227815201343], [6.505116194228155, 53.04636296115851], [6.524126253597242, 53.04585426602722], [6.533690077279834, 53.03816731737668], [6.533690077279834, 53.03816731737668], [6.547291088828439, 53.03505862490772], [6.555208680565668, 53.05859990514998], [6.600323275068389, 53.06083251155951], [6.6081232788095186, 53.04774774234922], [6.60302779897863, 53.03308036606383], [6.631209722043318, 53.02609993842897]], [[5.332254325153508, 52.08416612033219], [5.320456329545063, 52.07031830842498], [5.290745762531109, 52.08656829178548], [5.247434183968549, 52.05864658124604], [5.25060905986318, 52.03959877466347], [5.27087339119064, 52.027390091512615], [5.263230171444306, 52.02436618156553], [5.279927666890144, 52.010716195542706], [5.291216114515498, 52.00834228493004], [5.31465532173759, 52.02699443974384], [5.346560864678697, 52.019024882687035], [5.381641283514436, 52.00212489999211], [5.39896591493946, 52.002916203529665], [5.415271450398306, 51.99669881859173], [5.39943626692385, 51.987937957997374], [5.378388015622407, 51.986129264197245], [5.390969931204833, 51.97072710605555], [5.413507630456845, 51.975418405599626], [5.4393769895982835, 51.98584665579098], [5.477671480327352, 51.98347274517831]], [[5.512595115168294, 52.01851618755575], [5.529331806612831, 52.04019225231663], [5.515691599065526, 52.05418136842698], [5.497857419657414, 52.05700745248968]], [[5.627674567348997, 52.63683511963314], [5.648879602645236, 52.64955249791527], [5.642804222846868, 52.66057422575979], [5.655386138429295, 52.665943785478916], [5.643117790836461, 52.68244811640506], [5.609644407947387, 52.68032855335804], [5.594553948448215, 52.68329594162387], [5.590673544576999, 52.67628725314838], [5.377251331660132, 52.76480020599204], [5.361141776194781, 52.67572203633584]], [[6.137457726430133, 52.059183537217955], [6.12009389900641, 52.051355284364284], [6.111705955284792, 52.03925964457594], [6.12150495495958, 52.034624866713116], [6.149961250015162, 52.04205746779801], [6.175517041167008, 52.039344427097824], [6.176536137133185, 52.01922270857142], [6.16434618153775, 52.016594450393114], [6.164306985539051, 52.016594450393114], [6.159250701706861, 51.99975098937944], [6.161445677634013, 51.989040130781824], [6.161445677634013, 51.989040130781824], [6.160465777666534, 51.98104231288439], [6.205149216183564, 51.98025100934684], [6.229293951382241, 51.97677492594972], [6.228078875422566, 51.987796653794234], [6.2497934587018955, 51.975955361571536], [6.291889961304782, 51.993335778557125], [6.2956527771799005, 51.988446653128655], [6.319052788403292, 51.99418360377593], [6.3356326958530325, 51.98564882990659], [6.327715104115804, 51.97728362108101], [6.370046782710886, 51.97623796997781], [6.365304066868289, 51.96965319411172], [6.390389506035744, 51.96832493460226], [6.399169409744354, 51.98101405204376], [6.399169409744354, 51.98101405204376], [6.416062885183687, 51.97262058237756], [6.447576468137804, 51.96970971579298], [6.467840799465264, 51.978216228821694], [6.475758391202492, 51.98813578388176], [6.460079991722832, 51.99514447235725], [6.467448839478272, 52.00074011880139], [6.462196575652586, 52.0217096625466], [6.4385221924383, 52.025016180899954], [6.432681988632126, 52.040559643244784], [6.4203744450405935, 52.04646615893582], [6.400541269698824, 52.08379872940404], [6.4239804769209155, 52.096911759454954], [6.39152618999802, 52.11304869945295], [6.398307097772973, 52.11768347731577], [6.392584481962897, 52.13150302838236], [6.368792510752513, 52.123844340572454], [6.357739239119352, 52.13551606775139], [6.328303044096292, 52.137720413320295], [6.277544225780893, 52.12175303836606], [6.270136182026754, 52.111805222465364], [6.235918075162397, 52.113726959627996], [6.217887915760787, 52.09787262803627]], [[6.0439752695326625, 53.24351058537222], [6.019791338335287, 53.24091058803454], [6.0272385780881255, 53.23014320775567], [6.086306948127744, 53.215023658020236], [6.081172272298155, 53.20289975739127], [6.081172272298155, 53.20289975739127], [6.085287852161565, 53.19422367931879], [6.114606459188529, 53.17596717627377], [6.105003439507238, 53.15180415753771], [6.121622542955677, 53.144993294946616], [6.1481190380763024, 53.15782371659126], [6.151999441947518, 53.150843288956395], [6.176732117126681, 53.15949110618825]], [[6.9113435247461386, 53.24300189024093], [6.909109352820288, 53.27897794035906], [6.88731637754356, 53.27917576624345], [6.8873947695409585, 53.2978844427385]], [[6.814333427965744, 53.297601834332234], [6.8458078149211605, 53.29011271156609], [6.8873947695409585, 53.2978844427385], [6.8819465257217765, 53.32487354553726], [6.885395773607302, 53.34513656826679], [6.866816870223905, 53.34180178907281], [6.834284191303611, 53.34329961362604], [6.838909319150111, 53.330582235343904], [6.804456036293558, 53.3237713727528], [6.814333427965744, 53.297601834332234], [6.772511297353752, 53.28307576224997]], [[6.9617495790732455, 53.11003463509106], [6.965277218956168, 53.110825938628615]], [[4.996854164284887, 52.752054566869276], [5.040675290830535, 52.75245021863806], [5.0697195258666055, 52.768106724345394], [5.093237125086095, 52.769519766376746], [5.112012008462988, 52.77918497387117], [5.1214582441494825, 52.84593707943206], [5.215058289043051, 52.916108746708815], [5.169120578567648, 52.997613011076986], [5.164260274728953, 53.00100431195222]], [[4.876248076287604, 53.02197385569743], [4.925831014642028, 52.96313478551209], [4.874993804329231, 52.89036312089765], [4.8083214105419785, 52.914356574589945], [4.794916378986869, 52.912576141630446], [4.770928427782989, 52.87863487203746]], [[4.8733867683825665, 52.63443294817985], [4.889300343854421, 52.62553078338235], [4.8840088840300355, 52.613152535187744], [4.923244078727884, 52.611230798025105], [4.9269285026056036, 52.6067090635248], [4.94829032189664, 52.61346340443464], [4.959304397531101, 52.60458950047777], [4.949858161844606, 52.5952916839115], [5.004889344018212, 52.597580812002285], [5.006574771962276, 52.61049601616881], [5.027035083283232, 52.61261557921583]], [[5.034756695026964, 52.66656552397271], [5.021273271474456, 52.66441770008506], [5.002341604102767, 52.67493073279829], [4.979215964870269, 52.67967855402362]], [[5.605999180068367, 51.9941553429353], [5.683097709509594, 51.993900995369664], [5.724371096139798, 52.00071185796076], [5.745144975450348, 52.019759664543336], [5.813385209185567, 52.02408357315926], [5.837921904371234, 52.04663572397958], [5.850033467969271, 52.05160963192993], [5.899420426330199, 52.04997050317356], [5.898126958373128, 52.063366141630745], [5.909768169986775, 52.06209440380253], [5.946102860780886, 52.07789221371301], [5.951472712602669, 52.099907408561414], [5.911727969921732, 52.10024653864893], [5.883467654859645, 52.10635088022436], [5.864731967481452, 52.125568251850694], [5.859558095653164, 52.14874214116481], [5.809857569302643, 52.15142692102437]], [[5.550340861915575, 52.10541827248367], [5.554926793763375, 52.08659655262611], [5.5627267975045065, 52.078287865481784], [5.55790568966451, 52.04886833038911], [5.567430317348403, 52.040587904085406], [5.590046408597813, 52.0343987799881], [5.589497664616025, 52.009444457714494]], [[4.518349412165671, 52.18211819394526], [4.497575532855121, 52.18398340942664], [4.489540353121797, 52.18169428133585], [4.491460957058054, 52.20368121534363], [4.463475013986862, 52.20020513194651], [4.455635814247032, 52.20701599453761], [4.464062953967349, 52.21597468101636], [4.440192590759567, 52.20735512462514], [4.390962416393435, 52.22524423674201]], [[4.683207782694293, 51.84849897034392], [4.681247982759336, 51.8589554813759], [4.700258042128423, 51.87969893839609], [4.664197723325206, 51.87495111717076], [4.626373584580526, 51.880659806977405], [4.635271076285234, 51.86972286165477]], [[5.142428103453527, 51.924944544239864], [5.1802130461995075, 51.96744884854282], [5.155088411033352, 51.97157493127436], [5.13678387964085, 51.99568142832916], [5.119576836211923, 51.999920554423205], [5.100174816855844, 52.00302924689217], [5.077519529607736, 51.997461861288656], [5.062625050102059, 51.99124447635073], [5.036128554981434, 51.97132058370872], [5.022370759438033, 51.9697379766336], [5.003007936080653, 51.97813144629981], [4.985957676646523, 51.9725640606963], [4.968397869229304, 51.95942276980476], [4.941548610120387, 51.96383146094257], [4.926301366626418, 51.95091625677605], [4.939236046197137, 51.92892932276827], [4.947702381916153, 51.93373366567485], [4.956168717635169, 51.91559020599234], [4.973767721051088, 51.907620648935534], [4.973414957062795, 51.89724892042544], [4.994972756347328, 51.902279350057036], [4.99944110019903, 51.884418498780796], [4.9962270283057, 51.87311416253001], [5.026956691285833, 51.881931544805624], [5.0218220154562445, 51.86862068887032], [5.026917495287134, 51.858616351288376], [5.05380595039475, 51.857372874300786], [5.055726554331009, 51.87319894505189], [5.081086365489359, 51.875827203230195], [5.089043153225286, 51.8880924080623], [5.112717536439572, 51.8877815388154], [5.142428103453527, 51.924944544239864], [5.166808014644398, 51.92601845618369], [5.159243186895463, 51.919631506201995], [5.207689441287611, 51.926216282068076], [5.211805021151021, 51.919631506201995], [5.233911564417342, 51.923842371455414], [5.255077403714883, 51.93548583779372], [5.241907548151969, 51.9455184362163], [5.270363843207551, 51.96541406801768], [5.256253283675857, 51.97095319278056]], [[5.319045273591895, 51.67037089187215], [5.303954814092722, 51.66553828812494], [5.3191628615879925, 51.64996656493948], [5.317712609636123, 51.634620928479045], [5.343425184782765, 51.61738181569659], [5.332019149161313, 51.60845139005847], [5.342837244802278, 51.60022748543602], [5.38054379555086, 51.602912265295586]], [[5.928464661366268, 50.93660642583361], [5.941869692921378, 50.92708252254232], [5.954882764489495, 50.933836863452164], [5.9754998598052484, 50.92900425970495], [6.0116777666045635, 50.9264325232079]], [[4.9700832971733675, 52.1224312985411], [4.960989825475165, 52.13336824386374], [4.943900370042336, 52.127546510694586], [4.923557646717477, 52.147300838292836], [4.911759651109033, 52.144248667505124], [4.909643067179279, 52.16188343205635], [4.892161651759459, 52.16179864953447]], [[4.8352098656495945, 51.986129264197245], [4.910231007159767, 52.01111184731148], [4.920030006834554, 52.01000967452703], [4.90497874333408, 52.02648574461255], [4.926693326613409, 52.0299900888503], [4.911406887120741, 52.04019225231663], [4.906507387283347, 52.05347484741131], [4.895414919651488, 52.048246591895314], [4.868212896554278, 52.063450924152626], [4.873190788389071, 52.068735701349866], [4.903058139397822, 52.070600916831246], [4.936139562299904, 52.07992699423814], [4.9567566576156565, 52.0659378781278], [4.99948029619773, 52.06613570401219]], [[5.25750755563423, 52.71619156011366], [5.211413061164031, 52.71695460281059], [5.187033149973159, 52.70745896035993], [5.204592957390378, 52.67761551265785], [5.209649241222569, 52.68394594095829], [5.24598393201668, 52.68660245997722], [5.262250271476827, 52.6768242091203], [5.268952787254381, 52.680272031676786], [5.259192983578293, 52.68629159073033], [5.25750755563423, 52.71619156011366], [5.254332679739599, 52.74702413723768], [5.274401031073563, 52.75064152483793], [5.211334669166632, 52.80040886518202], [5.281181938848516, 52.84062404139419], [5.238693476258638, 52.87405661585589], [5.215058289043051, 52.916108746708815]], [[5.091747677135527, 52.67891551132669], [5.125456236016795, 52.69115245531817], [5.187033149973159, 52.70745896035993]], [[3.937974259427366, 51.535764507965915], [3.9224134479438035, 51.54672971412918], [3.8992486127126065, 51.55026231920755], [3.8709491016518207, 51.54192537122259], [3.852487786264521, 51.54319710905081], [3.8344968228616114, 51.55303188158899], [3.7929882602392127, 51.54271667476015], [3.7682947810587484, 51.55277753402335], [3.74379728187178, 51.547690582710494], [3.713616362873435, 51.530366687406165], [3.746932961767712, 51.51685800558647], [3.7452475338236484, 51.512477575289296], [3.7111078189566893, 51.50671236380139], [3.70554198714141, 51.50244497686672]], [[6.834284191303611, 53.34329961362604], [6.824955543613214, 53.34705830542942], [6.822407803697769, 53.360482204727234], [6.811628904055503, 53.3600300312772], [6.777175621198951, 53.39795607939859], [6.792462060691619, 53.403608247523984], [6.778625873150819, 53.41078650104323], [6.748523346149872, 53.39515825617652], [6.730258010756069, 53.38145174847244], [6.69701980385919, 53.362912637021154], [6.665192652915481, 53.36692567639018], [6.6309353500524235, 53.36265828945551], [6.6277604741577925, 53.352286560945416], [6.595815735217986, 53.3471430879513], [6.619842882420565, 53.314417034505276], [6.637677061828677, 53.31464312123029], [6.654060989284922, 53.30865182301738]], [[4.464062953967349, 52.21597468101636], [4.466061949901006, 52.22498988917636], [4.513528304325676, 52.255002901922204], [4.542533343363046, 52.2866550434244], [4.563699182660587, 52.3092919767666], [4.547315255204342, 52.31398327631068]], [[5.666008254076765, 51.95280973309805], [5.681921829548619, 51.95916842223912], [5.722607276198336, 51.964057547667586], [5.713709784493629, 51.9679575436741], [5.724371096139798, 52.00071185796076]], [[6.141102954309154, 51.51951452460541], [6.119466763027224, 51.53203407700315], [6.1106084673212155, 51.54689927917294], [6.078585336384011, 51.54726667010109], [6.048130045394772, 51.558457962989365], [6.031667725941129, 51.55232536057331], [6.004269722850424, 51.57024273353081], [5.976362171776629, 51.56165143798022], [5.935441549134717, 51.55359709840153], [5.906671686089542, 51.55204275216705], [5.8914636385942725, 51.56021013510824], [5.8708857392772185, 51.56264056740216], [5.838235472360827, 51.566427520046176]], [[5.609840387940883, 51.83629028719307], [5.585029320764322, 51.83911637125577], [5.585029320764322, 51.85711852673514], [5.57726851302189, 51.864579388660665], [5.553045385825817, 51.86254460813552], [5.5537901098011, 51.87037286098919], [5.568449413314582, 51.876533724245874], [5.576994141030997, 51.89244457751885], [5.545284578083384, 51.887951103859166], [5.531369998545187, 51.89476196645026]], [[5.46391368478395, 51.88899675496236], [5.440709653554054, 51.882016327327506], [5.426011154041873, 51.87011851342355], [5.415232254399607, 51.85180548869727], [5.400651342883523, 51.837646807543166]], [[4.383671960635393, 51.84211202036223], [4.383515176640597, 51.85776852606956], [4.390413672411647, 51.870570686873585], [4.418164439490645, 51.872379380673706], [4.465238833928323, 51.86200765216361], [4.480407685424894, 51.86231852141051], [4.494008696973499, 51.86895981895785], [4.532969519680454, 51.86890329727659], [4.5493926431353975, 51.87401850943007], [4.568912250487574, 51.87805980963973], [4.576320294241713, 51.90304239275397], [4.591763517729177, 51.8953271832628], [4.619553480806875, 51.88953371093427], [4.66815651919382, 51.88959023261553], [4.705588697951507, 51.89722065958481], [4.721933429409052, 51.89724892042544], [4.759875156149829, 51.91349890378594], [4.811731462428804, 51.92471845751485], [4.832505341739353, 51.93876409530645], [4.84787017322942, 51.94156191852852], [4.877776720236871, 51.93802931345015], [4.859785756833961, 51.96849449964602], [4.8352098656495945, 51.986129264197245], [4.8178068422271725, 51.99977925022007], [4.8571204289224195, 52.005968374317376], [4.846890273261941, 52.01817705746822], [4.846890273261941, 52.01817705746822], [4.803539498700681, 52.01396619221481], [4.798718390860686, 52.02227487935914]], [[4.750977664445123, 52.01390967053355], [4.757327416234385, 52.00133359645455], [4.73772941688481, 52.00684446037681], [4.688695222512174, 51.9962466451417], [4.667842951204227, 51.978837967315485], [4.633507256343772, 51.970585801852415], [4.646049975927499, 51.95425103597003], [4.634761528302144, 51.93800105260952], [4.619475088809477, 51.93347931810921], [4.617711268868015, 51.93104888581529]], [[4.8629998287272915, 51.557271007683035], [4.830937501791388, 51.55037536257006], [4.770066115811608, 51.527371038299705], [4.747018868576508, 51.515360181033245], [4.760031940144626, 51.50236019434484]], [[4.84187318542845, 51.480740651265215], [4.891299339788077, 51.478225436449414], [4.932415942423485, 51.459121108185585], [4.94464509401762, 51.45680371925417], [4.976825008949621, 51.46109936702947], [4.976825008949621, 51.46109936702947], [5.010455175833491, 51.45824502212615]], [[5.01653055563186, 51.47542761322734], [5.008338591903737, 51.47330805018032], [4.987995868578879, 51.483058040196624], [5.00038180416781, 51.49187542247223], [4.986741596620506, 51.49532324502873], [4.992189840439687, 51.51250583612992], [4.96255766542313, 51.52587321374648]], [[4.309826699086196, 52.0156335818118], [4.3076317231590435, 52.0181487966276]], [[7.0297546368162696, 53.115093325563286], [7.04265012038829, 53.1016976871061], [7.015448097291079, 53.071769456882144]], [[7.014781765313193, 52.872982703912065], [7.040259164467641, 52.872897921390184], [7.072164707408749, 52.84514577589451], [7.072047119412652, 52.83847621750654], [7.092742606725802, 52.83819360910027]], [[5.112991908430466, 52.49787656627035], [5.100723560837633, 52.50805046889605], [5.060430074174906, 52.578928657188484]], [[4.949858161844606, 52.5952916839115], [4.954953641675496, 52.58005909081356], [4.980548628826041, 52.58681343172341], [4.997167732274479, 52.57511344370385], [4.976472244961329, 52.56109606675287], [4.973493349060194, 52.54343304136102], [4.956991833607852, 52.52910479516314], [4.992268232437086, 52.519722196074994], [5.009240099873818, 52.52772001397242], [5.024487343367786, 52.52178523744076], [4.997951652248463, 52.49473961296076]], [[5.747692715365792, 51.63267093047578], [5.790298765951768, 51.64991004325823], [5.798647513674686, 51.660875249421494], [5.821616368912387, 51.66796872041886], [5.842821404208628, 51.67997957768532], [5.822988228866858, 51.69854694997724], [5.805310833453541, 51.70052520882113], [5.793238465854204, 51.710049112112415], [5.79245454588022, 51.72056214482564], [5.768936946660731, 51.72335996804772], [5.748163067350182, 51.71799040832859], [5.713121844513142, 51.72641213883543]], [[5.247434183968549, 52.05864658124604], [5.219134672907763, 52.059748754030494], [5.225014072712635, 52.06492048786523], [5.195146721703884, 52.07735525774109]], [[5.24320101610904, 51.99879012079813], [5.2647196193948735, 52.00319881193593], [5.277536710969495, 52.00009011946697], [5.279927666890144, 52.010716195542706]], [[6.119584351023321, 52.66795030516343], [6.104297911530653, 52.6571264032033], [6.096850671777815, 52.63561990348618], [6.103945147542361, 52.62555904422298], [6.105865751478619, 52.60368515357771], [6.1205250549921, 52.597072116871], [6.131382346631765, 52.581246046119894], [6.147413510099717, 52.584411260270116], [6.179906993021312, 52.587943865348485], [6.20213112428373, 52.58494821624203], [6.303060820934039, 52.59712863855225]], [[4.213247758291492, 51.7852794698614], [4.251699033015358, 51.75588819560935], [4.272472912325907, 51.735088216907904], [4.31519655090798, 51.71708606142853], [4.3726970809996315, 51.709596938662386], [4.4235342913124285, 51.709483895299876], [4.50043684076016, 51.69289478185185], [4.530421779765009, 51.69343173782376], [4.589294169811131, 51.703323032043194], [4.620415792778256, 51.714118673162695], [4.631508260410115, 51.7439903817054], [4.627745444534996, 51.77807295550152], [4.621238908750938, 51.8007946713656]], [[4.489109197136106, 51.83538594029301], [4.464376521956942, 51.831712031011506], [4.432470979015834, 51.83705332989]], [[4.706019853937198, 52.04010746979475], [4.667294207222438, 52.025072702581205], [4.681835922739823, 52.0193074910933], [4.666588679245853, 52.012977062792864], [4.659455007482609, 52.005290114142326], [4.688695222512174, 51.9962466451417]], [[6.12150495495958, 52.034624866713116], [6.1318526986161555, 52.02235966188102], [6.125032594842503, 52.00916184930822], [6.109589371355039, 51.99644447102609], [6.159250701706861, 51.99975098937944]], [[5.306463358009467, 52.11027913707151], [5.282122642817296, 52.11205957003101], [5.2719316831555165, 52.1270378155633], [5.264092483415687, 52.125087817560036], [5.243161820110341, 52.17007907583817]], [[4.631665044404912, 52.41165274151747], [4.62159167273923, 52.387970157072075], [4.610812773096964, 52.38980711171283], [4.599524325471609, 52.37757016772135], [4.605717293266075, 52.363411486567244], [4.636642936239704, 52.36148974940461], [4.639661028139538, 52.338909337743665], [4.671605767079345, 52.350185413153824], [4.676466070918039, 52.35626149388862], [4.67321280302601, 52.374744083658655], [4.686931402570712, 52.387433201100166], [4.674545466981781, 52.39090928449728], [4.6686660671769085, 52.40139405636989], [4.6824630587190095, 52.41385708708638]], [[4.605717293266075, 52.363411486567244], [4.590195677781212, 52.32833978334918], [4.611400713077451, 52.32220718093313], [4.6203374007808575, 52.33382238643081], [4.639661028139538, 52.338909337743665]], [[5.877823431046968, 51.316573428063165], [5.9106696779568555, 51.3076995241063], [5.907494802062224, 51.31323864886918], [5.954686784495999, 51.300266923021404], [6.0082677147177375, 51.277545207157324], [6.009600378673508, 51.26576043661588]], [[5.115304472353716, 52.1798573266951], [5.0464371026393104, 52.16592473226601], [5.037892374922896, 52.194637746343], [5.036990866952816, 52.22479206329197], [5.036990866952816, 52.22479206329197], [5.057725550264665, 52.23536161768646], [5.034403931038671, 52.25291159971581], [5.023272267408113, 52.27150723284835], [5.0607436421645, 52.28521374055243], [5.06442806604222, 52.280748527733365]], [[5.021861211454944, 52.282642004055376], [5.01880392355641, 52.273513752532864], [5.01880392355641, 52.273513752532864], [5.007476279932356, 52.23171596924558], [4.980431040829943, 52.226855104657744], [4.966555657290444, 52.20003556690275], [4.9508772578107845, 52.19865078571203], [4.948564693887534, 52.18579210322676], [4.928613930549668, 52.16719647009422], [4.909643067179279, 52.16188343205635]], [[4.620415792778256, 51.714118673162695], [4.645148467957419, 51.719064320272416]], [[4.884636020009221, 51.81647943791357], [4.811417894439211, 51.81865552264185], [4.7674007879000655, 51.81580117773852], [4.748743492519271, 51.822103345198336], [4.729655041152785, 51.82215986687959]], [[6.981112402430625, 52.22075076308232], [6.965904354935355, 52.23041597057674], [6.9730380266986, 52.24853116941863], [6.969000838832588, 52.26740941095744], [6.939172683822535, 52.283857220202336], [6.912127444720122, 52.285496348958695]], [[6.840477159098077, 52.27631157575493], [6.842554547029131, 52.25390072913775], [6.81954649579273, 52.243670304830786], [6.813745487985257, 52.22948336283605], [6.77443190129001, 52.23847031015543], [6.7558921939053125, 52.21738772304771], [6.766318329559287, 52.20317252021235], [6.766788681543676, 52.191076880424006], [6.7707866734109885, 52.18833557888319], [6.7707866734109885, 52.18833557888319], [6.805592720255834, 52.16660299244105], [6.8279736355130485, 52.171011683578854], [6.889746529462908, 52.1612051718813]], [[4.513528304325676, 52.255002901922204], [4.5265805718924925, 52.247259431590415], [4.531440875731187, 52.23236596858], [4.531440875731187, 52.23236596858], [4.553939378984499, 52.222192065954296], [4.562954458685303, 52.234768140033296], [4.57275345836009, 52.271252885282706], [4.542533343363046, 52.2866550434244]], [[4.448384554487689, 52.16205299710011], [4.454185562295163, 52.171152987781994], [4.466689085880192, 52.169937771635034], [4.478604669484733, 52.179574718288826], [4.491931309042444, 52.175420374716666], [4.497575532855121, 52.18398340942664]], [[6.413279969276047, 52.985517371288644], [6.362521150960649, 53.03395645212326], [6.367812610785034, 53.06736076574434], [6.33206585997141, 53.07527380111989]], [[6.0848566961758745, 52.93628698691647], [6.110530075323817, 52.913254401805496], [6.14455220219468, 52.928063082294024], [6.2005632843357645, 52.94301306698569], [6.213615551902581, 52.925802215043866], [6.24724571878645, 52.923343521909324]], [[3.9244908358748587, 51.37804075642682], [3.9425601912751667, 51.36484294385402], [3.957062710793852, 51.3648146830134], [3.9617270346390505, 51.33248428133615], [3.9536526589070258, 51.3076995241063], [3.978894882069278, 51.30080387899332], [3.9822265419587057, 51.2491148014866], [4.005704945179496, 51.2418800262861]], [[5.801704801573219, 50.914139057535166], [5.774032426491621, 50.9106064524568], [5.754747995131639, 50.90063037571548], [5.7755218744421875, 50.92631947984539], [5.770935942594388, 50.92793034776113], [5.748555027337174, 50.93589990481793], [5.746007287421729, 50.943417288424705]], [[5.7626655868688665, 50.86651954107873], [5.777677654370642, 50.88373039302056], [5.799823393635661, 50.88568039102381]], [[6.167913017419373, 51.90095109054757], [6.091441623957332, 51.938707573625194], [6.090383331992455, 51.9678445003116], [6.122328070932262, 51.97149014875248], [6.144669790190777, 51.98050535691248], [6.160465777666534, 51.98104231288439]], [[5.987062679421497, 51.91330107790155], [6.014539074509601, 51.90126195979447], [6.02931596601918, 51.8817054580806], [6.046287833455912, 51.8709098169611]], [[5.191031141840472, 51.43023852906482], [5.209806025217365, 51.46576240573292], [5.220467336863534, 51.47294065925217], [5.22846332059816, 51.498686285063336], [5.247120615978956, 51.49888411094772], [5.251236195842366, 51.50962323038597], [5.224426132732148, 51.517140613992744], [5.190129633870392, 51.50741888481707], [5.171001986505207, 51.51055583812666], [5.130198951859393, 51.53031016572491]], [[5.109817032535835, 51.539381895566166], [5.100174816855844, 51.53138407766873], [5.096020040993734, 51.50990583879224], [5.088180841253904, 51.511290619982965], [5.062742638098157, 51.49286455189418], [5.068269273914737, 51.485347168287404], [5.051571778468899, 51.487127601246904], [5.049729566530039, 51.471103704611416]], [[4.584002709986746, 51.96535754633643], [4.619475088809477, 51.93347931810921]], [[4.666588679245853, 52.012977062792864], [4.6673334032211375, 52.02269879196854], [4.648636911841644, 52.02057922892152], [4.636760524235801, 52.01167706412402], [4.624727352635162, 52.014729234911734], [4.591097185751292, 52.03507704016315], [4.610930361093062, 52.04869876534535], [4.6074419172088374, 52.06551396551839]], [[4.565031846616358, 52.058561798724156], [4.554997670949375, 52.00625098272364], [4.54649213923166, 51.99175317148201], [4.5538609869871, 51.97750970780602], [4.547668019192635, 51.97281840826194]], [[6.38184477831933, 52.246100737124706], [6.416415649171979, 52.24217248027756], [6.4296247007335925, 52.25166812272822], [6.485243822887686, 52.27461592531731], [6.51726695382489, 52.28303765582415], [6.553993604605994, 52.28332026423042], [6.553170488633311, 52.29968329095343], [6.5450961129012875, 52.31836370660786], [6.533141333298047, 52.316639795329614], [6.524870977572526, 52.325683264330245], [6.499981518398566, 52.32356370128322], [6.468193563453556, 52.3264745678678]], [[6.93752645187717, 52.332833257008865], [6.93431237998384, 52.322715876064414], [6.950147563458296, 52.3193528360298], [6.950382739450491, 52.308218064822775], [6.935684239938311, 52.290809386996564], [6.939172683822535, 52.283857220202336]], [[3.9609431146650675, 51.55147753535451], [3.9368375754650904, 51.55653622582673], [3.924765207865753, 51.60785791240531], [3.8790234773838455, 51.59367097041057], [3.848764166388102, 51.60599269692393], [3.8011410279686357, 51.60664269625835], [3.7694314650210234, 51.60082096308919], [3.722553050576841, 51.59728835801082], [3.7079721390607574, 51.598729660882796], [3.6895500196721573, 51.601527484104864], [3.6545087968351178, 51.596101402704484], [3.6314615496000178, 51.59646879363264], [3.6338133095219667, 51.58830141069144], [3.6531369368806477, 51.56846230057131], [3.6710887042848577, 51.56382752270849], [3.6946846955017456, 51.550177536685666], [3.696370123445809, 51.535171030312746], [3.6975460034067837, 51.524488432555756], [3.713616362873435, 51.530366687406165]], [[6.59883382711782, 52.38364624845615], [6.6155705185623574, 52.362083227057774], [6.5998137270853, 52.33910716362805], [6.619019766447883, 52.32613543778027], [6.6047524229213925, 52.31223110419181], [6.631797662023805, 52.30177459315983], [6.62607504621373, 52.28996156177776], [6.657510237170447, 52.29485068720622], [6.690944424060822, 52.30838762986654]], [[4.039844660046455, 51.84211202036223], [4.035219532199956, 51.858588090447746], [3.9555732628432843, 51.85765548270706]], [[3.7736646328805317, 51.78152077805801], [3.826226467136091, 51.765836011510046], [3.8474315024323307, 51.75340124163418], [3.8758877974879136, 51.747692551827534], [3.8861571491470905, 51.74935994142452], [3.9050496205200806, 51.764620795363086], [3.940326019349315, 51.77380556856685], [3.958944118731411, 51.77213817896986], [3.974504930214973, 51.7638012309849], [4.01334816492583, 51.759025148918944], [4.01887480074241, 51.74271864387719], [4.03502355220646, 51.73019909147944], [4.036708980150523, 51.71103824153436], [4.0478014477823825, 51.694364345564445], [4.098089914113391, 51.69046434955793], [4.123096961283449, 51.68574478917322], [4.151827628329925, 51.68523609404194], [4.202704034641421, 51.66076220605898], [4.242801541310651, 51.647055698354905], [4.275020652241351, 51.64377744084218], [4.33220761434341, 51.653668735061615], [4.361839789359967, 51.66296655162789], [4.379438792775885, 51.683596965285574], [4.4235342913124285, 51.709483895299876]], [[4.144889936560175, 51.93141627674344], [4.152885920294802, 51.92180759093027], [4.135365308876282, 51.906377171947945], [4.1603331600476405, 51.88334458683697], [4.15527687621545, 51.8815924147181]], [[4.626373584580526, 51.880659806977405], [4.619553480806875, 51.88953371093427]], [[6.911774680731829, 53.45942340776224], [6.890922409423882, 53.4078191127774], [6.872853054023574, 53.407960416980536], [6.843691230991407, 53.42240170654092], [6.792462060691619, 53.403608247523984]], [[5.00038180416781, 51.82094465073263], [5.026368751305346, 51.81885334852623], [5.031425035137536, 51.841094630099654], [4.999284316204234, 51.8445989743374], [4.998696376223746, 51.85228592298793], [4.959304397531101, 51.86288373822305], [4.938412930224455, 51.86361852007935], [4.942724490081361, 51.844796800221786], [4.924851114674549, 51.83970984890893], [4.926967698604303, 51.82829246929564]], [[6.527261933493174, 51.96603580651147], [6.494807646570278, 51.970585801852415], [6.467840799465264, 51.978216228821694]], [[6.416062885183687, 51.97262058237756], [6.403559361598658, 51.95741625012025], [6.3613844669983735, 51.923248893802246], [6.333241739932385, 51.92539671768989], [6.320934196340852, 51.935824967881246], [6.30576534484428, 51.938820616987705], [6.28965578937893, 51.92536845684927], [6.311683940647852, 51.92056411394268], [6.316152284499555, 51.91273586108902], [6.3060397168351745, 51.906405432788574], [6.3322618399649055, 51.893264141897035], [6.324226660231581, 51.88891197244048], [6.33163470398572, 51.87480981296763], [6.3245794242198725, 51.8690163406391], [6.299023633068027, 51.86782938533277]], [[5.777952026361535, 52.60752862790297], [5.837216376394649, 52.60733080201859], [5.840508840285377, 52.61041123364693], [5.9054566101298684, 52.61922861592254], [5.915647569791647, 52.61351992611589], [5.932697829225777, 52.614932968147244], [5.955274724476487, 52.62485252320731], [5.981026495621828, 52.6283003457638], [6.017282794418541, 52.643222069614836]], [[5.850817387943254, 52.26870940962628], [5.821420388918892, 52.27266592731405], [5.749221359315059, 52.268285497016876]], [[3.7079721390607574, 51.598729660882796], [3.7488927617026695, 51.65033395586764], [3.6113540022673543, 51.65036221670826]], [[3.5869740910764834, 51.47924282671198], [3.5752936834641367, 51.50662758127951], [3.5788605193457594, 51.512421053608044], [3.5788605193457594, 51.512421053608044], [3.596616306756474, 51.52245365203061], [3.589796202982822, 51.53180799027814], [3.6131570182075152, 51.535142769472124], [3.6171158140761293, 51.52525147525268], [3.658859552690723, 51.51926017703977], [3.680848507960946, 51.53494494358773], [3.696370123445809, 51.535171030312746]], [[5.770935942594388, 50.92793034776113], [5.779951022295192, 50.94533902558734], [5.788103790024615, 50.94861728310007], [5.782145998222344, 50.985412897596376], [5.78924047398689, 51.00081505573807], [5.774816346465603, 51.00414983493206], [5.787241478053234, 51.01915634130498], [5.773405290512434, 51.018986776261215]], [[5.5486946299702105, 51.43467548104326], [5.566176045390032, 51.44148634363435], [5.584715752774729, 51.46050588937631], [5.582991128831966, 51.4655363190079], [5.6052152600943845, 51.47096240040828], [5.585930828734403, 51.4791580441901], [5.5701740372573445, 51.496934112944466], [5.5767197690401025, 51.49944932776026], [5.557670513672315, 51.509368882820326], [5.547440358011838, 51.5377427668098], [5.5308604505620975, 51.525053649368296], [5.540189098252496, 51.52601451794961], [5.546264478050864, 51.51270366201431], [5.5114192352073195, 51.496934112944466], [5.505461443405049, 51.48348195280603], [5.509028279286671, 51.469295010811294], [5.53258507450486, 51.45708632766044], [5.5486946299702105, 51.43467548104326], [5.52521622674942, 51.427977661814666], [5.525804166729907, 51.404690729138046]], [[5.63900221097305, 51.422466797892405], [5.6440584948052415, 51.44086460514056], [5.6564836263928715, 51.45654937168853]], [[4.720365589461087, 52.49496569968577], [4.731536449090345, 52.496322220035864], [4.752780680385284, 52.51059394455248], [4.7525063083943895, 52.52124828146885], [4.782491247399238, 52.519580891871854], [4.777748531556641, 52.53373957302597], [4.755289224302029, 52.53574609271048], [4.718876141510519, 52.55162868514284], [4.694535426318348, 52.544196084057944], [4.695750502278021, 52.52673088455048]], [[6.105003439507238, 53.15180415753771], [6.085170264165468, 53.15898241105696], [6.011795354600661, 53.153951981425365], [5.974441567840371, 53.13462156643652], [5.943476728868044, 53.121621579748115]], [[4.370619693068576, 51.89936848347246], [4.3605071254041965, 51.93867931278457], [4.35066892973071, 51.95150973442921]], [[5.8708857392772185, 51.56264056740216], [5.877235491066481, 51.57815576890636], [5.931835517254395, 51.596864445401415], [5.949787284658607, 51.60780139072405], [5.939635520995527, 51.612436168586875], [5.925877725452125, 51.632077452822614], [5.896480726427763, 51.64448396185785], [5.87080734727982, 51.646518742382995], [5.875510867123718, 51.65290569236469], [5.855795279778047, 51.66220350893096], [5.859910859641457, 51.669918718422124], [5.842821404208628, 51.67997957768532]], [[6.488222718788821, 53.005413003090034], [6.513033785965383, 53.01055647608414], [6.495513174546863, 53.03090428133555], [6.505116194228155, 53.04636296115851]], [[5.685018313445852, 51.8956380525097], [5.667850466015625, 51.86593590901076]], [[5.764742974799923, 51.832277247824045], [5.7750907184564975, 51.844259844249876], [5.787829418033721, 51.841207673462165], [5.8078585733689865, 51.851890271219155], [5.81738320105288, 51.849488099765864], [5.825692752777099, 51.86621851741703], [5.817069633063286, 51.87025981762668], [5.800097765626555, 51.87543155146142], [5.732249491878328, 51.88594458417465], [5.706654504727783, 51.893292402737664]], [[5.23771357629116, 51.428571139467834], [5.2524904678007385, 51.43801026023724], [5.248414083936027, 51.44564068720652], [5.297291494313867, 51.453101549132036], [5.30309250212134, 51.45914936902621], [5.3338221651014734, 51.46853196811436], [5.356007100365192, 51.46231458317643], [5.369451327919, 51.46531023228289], [5.391205107197028, 51.471753703945836]], [[5.356908608335273, 51.544723194444664], [5.332959853130093, 51.55113840526698], [5.308383961945726, 51.54596667143225], [5.273264347111288, 51.5528340557046], [5.253313583773421, 51.54031450330685], [5.243945740084325, 51.5257884312246], [5.234773876388723, 51.530988425899956], [5.224426132732148, 51.517140613992744]], [[4.862686260737698, 52.42993750540312], [4.842931477393327, 52.45226356949843], [4.852495301075919, 52.47037876834031], [4.837091273587154, 52.47987441079097], [4.816826942259693, 52.482559190650534], [4.798757586859385, 52.4911222253605], [4.789860095154679, 52.519241761784336], [4.782491247399238, 52.519580891871854]], [[4.7079796538721554, 52.48634614329455], [4.695240954294932, 52.46854181369956], [4.674859034971375, 52.455513566170524]], [[4.721972625407751, 52.433328806278354], [4.739218864835378, 52.431067939028196]], [[5.062781834096856, 52.026824874700075], [5.077519529607736, 51.997461861288656]], [[6.760556517750511, 52.11878565010022], [6.716265039220472, 52.11827695496894], [6.662409737007842, 52.13017476887289], [6.674403712609781, 52.14277910379252], [6.671268032713849, 52.165698645540985], [6.645045909584118, 52.174205158569706], [6.612160466675531, 52.16315516988456], [6.6063202628693585, 52.17307472494463], [6.589936335413114, 52.182485584873405], [6.555365464560464, 52.17725732935742], [6.5132297659588785, 52.18124210788582], [6.49241669064963, 52.17737037271993], [6.483754374937118, 52.15716387167164], [6.461451851677302, 52.15216170288067], [6.481049851026877, 52.142553017067506], [6.492181514657435, 52.12426825318185], [6.478541307110131, 52.10069871209897], [6.455219687884138, 52.10799000898072], [6.4239804769209155, 52.096911759454954]], [[6.462196575652586, 52.0217096625466], [6.480069951059399, 52.03295747711613], [6.51730614982359, 52.042424858726164], [6.53898153710422, 52.025185745943716], [6.574297131932154, 52.03194008685356], [6.605497146896676, 52.05186397949557], [6.606124282875863, 52.065118313749615], [6.658960489122316, 52.06305527238385], [6.661782601028655, 52.05160963192993], [6.687965528159687, 52.04437485672942]], [[5.864457595490558, 51.75766862856885], [5.849249547995289, 51.75933601816584], [5.790533941943963, 51.75351428499669], [5.786104794090958, 51.7443012509523], [5.796530929744932, 51.74017516822076], [5.798098769692898, 51.721325187522574], [5.79245454588022, 51.72056214482564]], [[5.859910859641457, 51.669918718422124], [5.899538014326296, 51.684925224795045], [5.8947952984837, 51.688457829873414], [5.933795317189354, 51.71615345368784], [5.919488777664164, 51.71767953908169]], [[5.062625050102059, 51.99124447635073], [5.042439110771998, 52.0056857659111], [5.03405116705038, 52.00384881127035], [5.020293371506978, 52.025637919393745], [4.995207932339522, 52.0217096625466], [4.954875249678097, 52.017329232249416], [4.920030006834554, 52.01000967452703]], [[4.877776720236871, 51.93802931345015], [4.913523471050495, 51.942353222066075], [4.926301366626418, 51.95091625677605]], [[4.948329517895339, 52.48400049352251], [4.92065714281374, 52.490443965185456], [4.906468191284648, 52.47981788910972], [4.893337531720433, 52.45732225997065], [4.898746579540916, 52.424483163162115]], [[4.391080004389533, 51.4514906812163], [4.366974465189556, 51.456718936732294], [4.336519174200317, 51.45979936836063], [4.3279744464839025, 51.46423632033906], [4.311159363041967, 51.46016675928878], [4.2976759394894595, 51.46621457918295], [4.297715135488159, 51.457340675226085], [4.297715135488159, 51.457340675226085], [4.283173419970774, 51.43967764983423], [4.26541763256006, 51.43967764983423]], [[6.169206485376444, 51.50309497620114], [6.204051728219988, 51.5043101923481], [6.213380375910386, 51.50781453658585]], [[6.031942097932023, 51.67616436420068], [6.031746117938527, 51.66305133414977], [6.015362190482283, 51.66223176977159], [5.976597347768824, 51.64377744084218], [5.996195347118399, 51.63679701320732], [6.0202224943209774, 51.62170572431252], [6.026297874119345, 51.595564446732574], [6.03715516575901, 51.5862666301663], [6.037586321744701, 51.57018621184956], [6.048130045394772, 51.558457962989365]], [[5.955941056454373, 52.07334221837206], [5.943280748874548, 52.06246179473068], [5.937087781080082, 52.04852920030159], [5.941399340936988, 52.01147923823964], [5.951511908601368, 51.99963794601693], [5.9698556359925705, 52.00192707410772], [5.9698556359925705, 52.00192707410772], [5.980869711627031, 52.01879879596202], [5.995803387131408, 52.026231397046914], [5.977969207723294, 52.054379194311366], [5.998351127046853, 52.05404006422385], [6.006072738790585, 52.066361790737204]], [[6.103553187555369, 52.45395921993604], [6.098653687717976, 52.47083094179034], [6.064474776852317, 52.48688309926646], [6.056243617125496, 52.49844178308289], [6.027865714067312, 52.50960481513054], [6.000781278966199, 52.50013743352051]], [[6.0019571589271745, 51.980646661115614], [5.990355143312225, 51.97440101533706], [5.965152116148673, 51.97154667043373], [5.951237536610474, 51.9632379832894], [5.955235528477788, 51.94874017204777], [5.965779252127859, 51.93876409530645]], [[4.7875083352327295, 51.63705136077296], [4.821334482110096, 51.62939267296305], [4.821334482110096, 51.62939267296305], [4.842696301401132, 51.61698616392781], [4.842617909403733, 51.5858427175569], [4.864254100685664, 51.57908837664705]], [[5.335468397046839, 52.2902159093434], [5.315164869720679, 52.302396331653625], [5.30544426204329, 52.30762458716961]], [[4.811417894439211, 51.81865552264185], [4.805068142649949, 51.8219620409952], [4.803382714705885, 51.84635114645627], [4.756073144276012, 51.84496636526555], [4.742746504718301, 51.84100984757777]], [[4.486679045216758, 51.47734935038998], [4.5021614647029224, 51.51671670138334], [4.5143514202983575, 51.51790365668967], [4.523209716004366, 51.54254710971639], [4.498829804813495, 51.544779716125916], [4.500201664767965, 51.55854274551125], [4.457517222184591, 51.561453612095825], [4.443994602633385, 51.56908403906511], [4.441094098729647, 51.558486223829995], [4.375362408911174, 51.54373406502272], [4.317979466815619, 51.551223187788864], [4.307082979177256, 51.54345145661645], [4.342790533992181, 51.52638190887776], [4.352471945670871, 51.51428626908942], [4.349532245768435, 51.50349062796992], [4.358429737473141, 51.4924689001254], [4.372814668995729, 51.48772107890007], [4.361643809366472, 51.47636022096803], [4.366974465189556, 51.456718936732294]], [[5.350754836539506, 52.40020710106355], [5.346364884685201, 52.39610927917264], [5.30125029018248, 52.381978858859156], [5.379211131595088, 52.31398327631068], [5.354008104431536, 52.30940502012911], [5.33350859711188, 52.314265884716946], [5.315164869720679, 52.302396331653625]], [[5.33954478091155, 52.28772895536823], [5.404649334750837, 52.249633342203076]], [[5.4768483643546695, 52.26240724216647], [5.533290602481445, 52.27275070983593], [5.545166990087287, 52.29329634097174]], [[5.317712609636123, 51.634620928479045], [5.310970897859869, 51.63366005989773]], [[5.247238203975053, 51.58702967286323], [5.2461799120101755, 51.579512289256456], [5.273264347111288, 51.5528340557046]], [[5.337859352967486, 52.79594365236296], [5.281181938848516, 52.84062404139419]], [[4.949858161844606, 52.33854194681551], [4.944723486015018, 52.32712456720222]], [[5.5315267825399825, 52.102253058333446], [5.539170002286317, 52.09781610635502], [5.522668486833975, 52.07755308362548], [5.509694611264557, 52.07896612565683], [5.496132795714651, 52.07167482877507]], [[5.529331806612831, 52.04019225231663], [5.544657442104198, 52.04937702552039], [5.55790568966451, 52.04886833038911]], [[5.4533699611338795, 51.92276845951159], [5.435104625740076, 51.92067715730519], [5.411351850528391, 51.91205760091397], [5.399475462922549, 51.89837935405052], [5.353772928439341, 51.87805980963973], [5.3390352329284605, 51.874046770270695], [5.328295529284894, 51.85697722253201], [5.360083484229904, 51.85836200372273], [5.378427211621106, 51.863392433354335], [5.39524229506304, 51.85293592232235], [5.415232254399607, 51.85180548869727]], [[5.356908608335273, 51.43820808612163], [5.356712628341777, 51.453610244263324], [5.369451327919, 51.46531023228289]], [[4.591763517729177, 51.561029699486426], [4.533361479667445, 51.54924492894498], [4.536614747559474, 51.565777520711755], [4.509451920460964, 51.56857534393382], [4.500201664767965, 51.55854274551125]], [[4.548177567175724, 51.47330805018032], [4.556055962914252, 51.485544994171796], [4.5722831063757, 51.48266238842785], [4.576202706245615, 51.492553682647284], [4.589725325796822, 51.496736287060074], [4.579338386141547, 51.510725403170426], [4.616378604912244, 51.508097144992114], [4.625001724626056, 51.52109713168052], [4.638720324170759, 51.524403650033875]], [[5.3955166670539345, 52.21913989516658], [5.409666422584328, 52.21857467835404], [5.439337793599584, 52.20068556623717], [5.439886537581372, 52.171209509463246], [5.479905652253203, 52.165811688903496]], [[6.687847940163589, 52.03985312222911], [6.6835755763053815, 52.0282096558908], [6.655628829232889, 52.01407923557731], [6.6526499333317535, 51.99754664381054], [6.6560599852185796, 51.97847057638734], [6.6560599852185796, 51.97847057638734], [6.638931333787051, 51.96255972311435]], [[5.281730682830304, 51.82119899829827], [5.212863313115899, 51.810035966250624], [5.176097466336096, 51.81647943791357], [5.1408994595042605, 51.8141055273009], [5.122242164123465, 51.81642291623231], [5.093197929087395, 51.8262576887705], [5.07410947772091, 51.8258337761611], [5.042635090765493, 51.81738378481363], [5.026368751305346, 51.81885334852623]], [[4.672585667046824, 52.59091125361432], [4.655182643624402, 52.58291343571689], [4.6103816171112735, 52.5737004016725], [4.594076081652427, 52.575480834631996]], [[6.144669790190777, 51.98050535691248], [6.163052713580678, 51.95535320875448], [6.204718060197874, 51.93667279310006], [6.20307182825251, 51.94215539618169], [6.226707015468097, 51.94464235015686], [6.259906026366276, 51.942974960559866], [6.302080920966561, 51.944133655025574], [6.30576534484428, 51.938820616987705]], [[4.538143391508742, 52.180083413420114], [4.546766511222554, 52.19896165495893], [4.557153450877829, 52.19774643881197], [4.558446918834901, 52.21880076507906], [4.553939378984499, 52.222192065954296]], [[5.790533941943963, 51.75351428499669], [5.763723878833744, 51.7530055898654], [5.745223367447746, 51.759138192281455], [5.729740947961582, 51.772844699985534]], [[6.017126010423745, 50.870476058766506], [6.0005852989727035, 50.857702158803114], [6.017949126396427, 50.84379782521465]], [[5.788103790024615, 50.94861728310007], [5.802723897539398, 50.947599892837495], [5.811895761234998, 50.9551455372849], [5.837804316375136, 50.946384676690535], [5.839881704306191, 50.95019989017518]], [[5.882252578899972, 53.27677359479016], [5.92564254945993, 53.252214924285326], [5.943006376883654, 53.25043449132583], [5.955980252453072, 53.22805190554927], [5.983339059545078, 53.22983233850877], [6.019791338335287, 53.24091058803454]], [[6.3805905063609565, 52.429824462040614], [6.334417619893359, 52.42442664148086], [6.3144276605567935, 52.43301793703146], [6.2918115693073835, 52.434713587469076], [6.289930161369824, 52.44644183632927], [6.27864171374447, 52.44734618322933], [6.278249753757478, 52.45703965156438], [6.236153251154592, 52.46563094711498], [6.169951209351728, 52.468937465468336], [6.16250396959889, 52.47439180770934], [6.144160242207688, 52.46766572764012], [6.152469793931908, 52.46113747345529], [6.152469793931908, 52.46113747345529], [6.154899945851255, 52.453196177239114]], [[5.923408377534079, 50.90441732835949], [5.969346088009482, 50.86007606941578]], [[4.317979466815619, 51.551223187788864], [4.296225687537591, 51.553851445967176], [4.29861664345824, 51.55885361475815], [4.251777425012756, 51.570468820255826], [4.251777425012756, 51.570468820255826], [4.236138221531795, 51.55037536257006], [4.218931178102869, 51.50484714832001], [4.230337213724321, 51.4889080342064]], [[5.933795317189354, 51.71615345368784], [5.956176232446568, 51.70725128889035], [5.963741060195503, 51.68057305533849], [5.963466688204609, 51.657314383502495], [5.976597347768824, 51.64377744084218]], [[5.859479703655766, 50.83368044427019], [5.836079692432374, 50.83594131152035], [5.823615364846044, 50.830345665076216], [5.821224408925396, 50.83876739558305], [5.801626409575821, 50.84987390594945], [5.780421374279582, 50.849449993340045], [5.757334931045783, 50.855299987349824]], [[4.995207932339522, 52.0217096625466], [4.979960688845553, 52.0354444310913], [4.979960688845553, 52.0354444310913], [4.990308432502129, 52.05242919630811], [5.0102983918386945, 52.053729194976945], [5.0170792996136475, 52.06113353522122]], [[5.8616354835842195, 50.882430394351715], [5.8742957911640445, 50.857249985353086], [5.887975194710048, 50.847047821886754]], [[5.672122829873832, 51.31510386435056], [5.770465590609998, 51.333812540845614], [5.74545854343994, 51.37111685047321], [5.740206279614254, 51.36978859096374], [5.7337389398288945, 51.3918603074934], [5.705557016764207, 51.40941028952275], [5.6939941971479575, 51.439253737224824]], [[5.87911689900404, 51.809527271119336], [5.840939996271068, 51.80720988218793], [5.810210333290936, 51.79059250789927], [5.800960077597936, 51.79514250324021]], [[5.840195272295785, 51.34686904921527], [5.770465590609998, 51.333812540845614]], [[4.852495301075919, 52.47037876834031], [4.861627968772821, 52.46845703117768], [4.890515419814094, 52.478970063890905], [4.906468191284648, 52.47981788910972]], [[4.92065714281374, 52.490443965185456], [4.9251254866654435, 52.50553525408026], [4.934336546359743, 52.51163959565568], [4.874680236339637, 52.52003306532189], [4.843401829377717, 52.52673088455048], [4.833916397692523, 52.538967828541956], [4.824470162006028, 52.54269825950472], [4.811182718447016, 52.52998088122258], [4.789860095154679, 52.519241761784336]], [[4.236138221531795, 51.55037536257006], [4.231277917693101, 51.56054926519576], [4.198902022767603, 51.585984021760034], [4.191415587016066, 51.595620968413826], [4.191885939000455, 51.60983617124919], [4.21195429033442, 51.626792675625374], [4.238176413464151, 51.63431005923214], [4.242801541310651, 51.647055698354905]], [[4.202704034641421, 51.66076220605898], [4.195883930867769, 51.639425271385626], [4.188632671108426, 51.638803532891835], [4.126898973157266, 51.65802090451817], [4.094836646221362, 51.64095135677948], [4.08985875438657, 51.63060788911001], [4.070417539031792, 51.617240511493456], [4.05575823551831, 51.61269051615252], [4.052936123611971, 51.62099920329685], [4.031221540332642, 51.60915791107414], [4.014916004873796, 51.60686878298336], [3.9800707620302527, 51.613736167255716], [3.948753159069632, 51.615290513490194], [3.924765207865753, 51.60785791240531]], [[6.20213112428373, 52.58494821624203], [6.210793439996242, 52.56779388598146], [6.189627600698701, 52.53617000531989], [6.182572320932854, 52.5195243701906], [6.173322065239855, 52.51881784917493], [6.188138152748134, 52.49954395586734], [6.199936148356578, 52.49493743884514], [6.189510012702604, 52.48069397516915], [6.16250396959889, 52.47439180770934]], [[6.645045909584118, 52.174205158569706], [6.624350422270967, 52.18892905653635], [6.672051952687832, 52.198198612262], [6.69749015584358, 52.196248614258735], [6.712384635349256, 52.20633773436256], [6.702036891692681, 52.21682250623517], [6.712149459357062, 52.22603554027956], [6.724182630957701, 52.25271377383142], [6.7529524940028764, 52.25237464374389], [6.742879122337195, 52.283122438346034]], [[6.62607504621373, 52.28996156177776], [6.605379558900578, 52.27068766847017], [6.568182556135087, 52.27015071249826], [6.553993604605994, 52.28332026423042]], [[6.416415649171979, 52.24217248027756], [6.431937264656843, 52.220948588966706], [6.454906119894544, 52.202352955834165], [6.4703101473833105, 52.199385567568335], [6.479168443089318, 52.18225949814839], [6.49241669064963, 52.17737037271993]], [[5.390969931204833, 51.97072710605555], [5.352322676487472, 51.969483629067966], [5.333116637124888, 51.95719016339523], [5.314851301731085, 51.955607556320125], [5.298310590280044, 51.961994506301814], [5.270363843207551, 51.96541406801768]], [[5.255077403714883, 51.93548583779372], [5.2809859588550205, 51.93316844886231], [5.285179930715829, 51.9225706336272], [5.27361711109958, 51.92008367965202], [5.294900538393218, 51.90004674364751], [5.323317637450102, 51.889053276643615], [5.317438237645229, 51.88029241604926], [5.335507593045538, 51.88164893639935], [5.3390352329284605, 51.874046770270695]], [[5.817069633063286, 51.87025981762668], [5.837804316375136, 51.88342936935885], [5.830239488626201, 51.893857619550204], [5.857127943733817, 51.89462066224713], [5.874726947149735, 51.897559789672336], [5.873668655184858, 51.90841195247309], [5.891189266603378, 51.90728151884801], [5.897930978379632, 51.93435540416864], [5.874766143148435, 51.94079887583159], [5.829925920636608, 51.94523582781002], [5.83533496845709, 51.973553190118245], [5.81601134109841, 51.97120754034621], [5.785791226101365, 51.95981842157354], [5.747888695359288, 51.96959667243047], [5.722607276198336, 51.964057547667586]], [[5.026917495287134, 51.858616351288376], [4.993836072385052, 51.86070765349477], [4.998696376223746, 51.85228592298793]], [[4.870133500490537, 52.253278990643956], [4.852064145090228, 52.2420029152338], [4.842853085395928, 52.235333356845835], [4.814435986339046, 52.22722249558589], [4.794563614998577, 52.226742061295234]], [[4.443994602633385, 51.56908403906511], [4.431687059041852, 51.584881848975584], [4.42666997120836, 51.6117296475712], [4.437840830837618, 51.61712746813095], [4.424984543264297, 51.62947745548493], [4.408796595801548, 51.63286875636017], [4.397155384187901, 51.64304265898588], [4.361839789359967, 51.66296655162789]], [[4.924851114674549, 51.83970984890893], [4.87965812817443, 51.83267289959282], [4.847948565226818, 51.83261637791156], [4.838071173554632, 51.8607359143354], [4.803382714705885, 51.84635114645627]], [[4.818747546195952, 52.325570220967734], [4.8098892504899435, 52.30578763252886], [4.823843026026841, 52.2905267785903], [4.794681202994674, 52.26068333088822], [4.834817905662603, 52.24994421144997], [4.852064145090228, 52.2420029152338]], [[5.951511908601368, 51.99963794601693], [5.960801360293067, 51.988559696491166], [5.990355143312225, 51.97440101533706]], [[4.611400713077451, 52.32220718093313], [4.611675085068345, 52.31355936370127], [4.58796150585536, 52.280098528398945], [4.57275345836009, 52.271252885282706]], [[4.558446918834901, 52.21880076507906], [4.601719301398761, 52.21464642150689], [4.632644944372391, 52.21617250690075], [4.670351495120972, 52.23075510066426], [4.680816826773645, 52.23889422276483], [4.705157541965817, 52.246637693096616], [4.713035937704346, 52.25525724948784], [4.746352536598623, 52.27210071050151], [4.764853047984621, 52.276678966683086], [4.788331451205412, 52.288520258905784], [4.8098892504899435, 52.30578763252886]], [[5.897930978379632, 51.93435540416864], [5.91690184175002, 51.95052060500727], [5.929444561333748, 51.95060538752915], [5.931835517254395, 51.95947929148602], [5.955235528477788, 51.94874017204777]], [[5.813385209185567, 52.02408357315926], [5.802959073531593, 52.004046637154744], [5.863752067513973, 51.99587925421355], [5.870846543278519, 51.97510753635273], [5.863046539537389, 51.97013362840238], [5.83533496845709, 51.973553190118245]], [[4.956991833607852, 52.52910479516314], [4.954169721701513, 52.51641567772164], [4.934336546359743, 52.51163959565568]], [[4.670351495120972, 52.23075510066426], [4.6860690905993305, 52.22657249625147], [4.704060054002241, 52.2338355322926], [4.724324385329701, 52.23197031681122], [4.723775641347913, 52.216568158669524], [4.7732801877049384, 52.24104204665248], [4.770850035785591, 52.24991595060935], [4.794681202994674, 52.26068333088822]], [[6.766788681543676, 52.191076880424006], [6.712384635349256, 52.20633773436256]], [[4.723775641347913, 52.216568158669524], [4.728753533182704, 52.20981381775968]], [[6.147413510099717, 52.584411260270116], [6.155056729846052, 52.5827156098325], [6.166815529455796, 52.565250410325035], [6.140515014328667, 52.552109119433496], [6.109746155349835, 52.56129389263726], [6.103318011563174, 52.56739823421268], [6.089403432024977, 52.55185477186785], [6.070158196663694, 52.55821346100892], [6.063142112896546, 52.56728519085018], [6.033039585895599, 52.55940041631525], [6.003603390872538, 52.55038520815525], [6.030452649981456, 52.53806348164189], [6.0301782779905615, 52.526759145391104], [6.01551897447708, 52.522774366862706], [6.027865714067312, 52.50960481513054]], [[5.981026495621828, 52.6283003457638], [5.991256651282306, 52.61419818629094], [5.971345083943138, 52.59416125028642], [5.9829470995580865, 52.57751561515714], [6.012853646565538, 52.58593734566397], [6.033039585895599, 52.55940041631525]], [[4.9269285026056036, 52.6067090635248], [4.9154048789880544, 52.60865906152805], [4.898903363535712, 52.601678633893194], [4.880402852149714, 52.5805112642636], [4.865429980646638, 52.57350257578811], [4.862215908753308, 52.563469977365536], [4.833916397692523, 52.538967828541956]], [[6.328303044096292, 52.137720413320295], [6.324030680238085, 52.15275518053384], [6.283541213581863, 52.14820518519289], [6.237995463093451, 52.14602910046462], [6.2357612911676, 52.15478996105898], [6.223492943574767, 52.15385735331829], [6.20722660411462, 52.16663125328168], [6.192802476593332, 52.1697964674319]], [[5.876020415106807, 52.357872361804354], [5.8648103594788505, 52.35968105560448], [5.820754056941007, 52.391587544672326], [5.811660585242803, 52.40280709840123], [5.770739962600892, 52.39551580151947], [5.756276639080905, 52.40741361542343]], [[4.601248949414372, 51.62523832939089], [4.570676070429036, 51.630410063225625], [4.5193293121331495, 51.60794269492719], [4.499574528788778, 51.61028834469922], [4.480838841410585, 51.61981224799051], [4.456850890206706, 51.614160079865115], [4.437840830837618, 51.61712746813095]], [[5.857127943733817, 51.89462066224713], [5.872845539212176, 51.88738588704663], [5.886760118750374, 51.86520112715446]], [[4.665060035296587, 51.63431005923214], [4.699042966168749, 51.63806875103553]], [[4.714603777652312, 52.62479600152605], [4.710057041803211, 52.642487287758534], [4.72573544128287, 52.65729596824706], [4.742589720723505, 52.66116770341296], [4.752427916396991, 52.67145464940117], [4.741727408752123, 52.680808987648696]], [[4.792094267080531, 52.12228999433797], [4.754583696325444, 52.108809573358904], [4.738866100847085, 52.106520445268124], [4.7348681089797715, 52.1018856674053], [4.704726385980126, 52.09524436985796], [4.713035937704346, 52.07693134513169], [4.677249990892022, 52.06551396551839], [4.659964555465698, 52.06410092348705]], [[4.611675085068345, 52.31355936370127], [4.601640909401363, 52.31644196944522]], [[4.601484125406566, 52.31649849112648], [4.568990642484971, 52.31649849112648], [4.563699182660587, 52.3092919767666]], [[5.204788937383874, 51.66983393590024], [5.166808014644398, 51.66904263236269], [5.154461275054166, 51.654912212049204], [5.160066302868144, 51.63953831474814], [5.1449366473702725, 51.64049918332945], [5.169198970565047, 51.61868181436543], [5.16947334255594, 51.603590525470636], [5.179546714221622, 51.59765574893897], [5.186876365978363, 51.60175357082988], [5.214156781072971, 51.58556010915063], [5.247238203975053, 51.58702967286323], [5.263661327429997, 51.60025574627665], [5.300466370208498, 51.60630356617082], [5.31649753367645, 51.61735355485597], [5.310970897859869, 51.63366005989773], [5.304346774079713, 51.624927460143994], [5.277693494964292, 51.61919050949672], [5.246493479999769, 51.632755712997664], [5.242534684131154, 51.6494578698082], [5.204788937383874, 51.66983393590024], [5.223211056772474, 51.67379045358802], [5.22615075667491, 51.69004043694852]], [[5.683646453491382, 52.240618134043075], [5.726370092073455, 52.242511610365085], [5.761450510909194, 52.24830508269361], [5.749221359315059, 52.268285497016876], [5.755414327109524, 52.2776398352644], [5.744674623465958, 52.28832243302139], [5.750750003264326, 52.31706370793902], [5.706184152743393, 52.3283680441898], [5.678119817674801, 52.30149198475356], [5.6302615032631405, 52.326841958795946], [5.6020403841997535, 52.31799631567971], [5.581384092885301, 52.32263109354253], [5.565862477400438, 52.332381083558836], [5.545166990087287, 52.29329634097174], [5.571114741226124, 52.28399852440547], [5.571114741226124, 52.28399852440547], [5.596513748383173, 52.27851592132384], [5.596513748383173, 52.27851592132384], [5.6370424110380934, 52.272496362270296], [5.6765911737255355, 52.25039638490001], [5.683646453491382, 52.240618134043075], [5.681255497570733, 52.22532901926389], [5.6654987060936755, 52.22270076108558], [5.633279595162975, 52.208174689003314]], [[4.681208786760637, 52.167507339341114], [4.679876122804865, 52.162787778956414], [4.642679120039372, 52.16196821457823], [4.571499186401717, 52.153122571461985], [4.560132346778964, 52.13189868015114], [4.550725307091168, 52.13837041265471], [4.547236863206944, 52.13466824253258], [4.547236863206944, 52.13466824253258], [4.535321279602402, 52.12042477885659], [4.537124295542563, 52.08394003360718], [4.530539367761106, 52.08052047189131], [4.533714243655737, 52.073059609965796], [4.557192646876528, 52.06124657858372], [4.565031846616358, 52.058561798724156], [4.6074419172088374, 52.06551396551839], [4.606893173227049, 52.077044388494194], [4.6368389162331995, 52.07373787014084], [4.63821077618767, 52.06483570534335], [4.659964555465698, 52.06410092348705], [4.677328382889421, 52.04397920496064], [4.706019853937198, 52.04010746979475], [4.719856041477998, 52.035190083525656], [4.719856041477998, 52.02648574461255], [4.7436872086870805, 52.022614009446656], [4.750977664445123, 52.01390967053355], [4.770693251790794, 52.01340097540227], [4.798718390860686, 52.02227487935914], [4.8067143745953125, 52.03315530300052], [4.829487249839518, 52.0498009381298], [4.868212896554278, 52.063450924152626]], [[5.874648555152337, 53.085080312817446], [5.878764135015747, 53.08657813737068], [5.8788033310144465, 53.08657813737068]], [[6.124758222851609, 51.277545207157324], [6.120054703007711, 51.28511911244535], [6.093558207887086, 51.295519101796074], [6.093558207887086, 51.295519101796074], [6.084699912181078, 51.29744083895871]], [[6.07313709256483, 51.3957320426593], [6.018772242369109, 51.38225162168023], [5.989845595329137, 51.378210321470576], [5.95790085638933, 51.37804075642682], [5.931286773272608, 51.384738575655405], [5.8749621231419304, 51.446545034106585], [5.860733975614139, 51.491988465834744], [5.852581207884716, 51.50414062730434], [5.773954034494222, 51.48865368664076], [5.721705768228256, 51.48512108156239], [5.735032407785967, 51.46918196744878], [5.717198228377853, 51.46824935970809], [5.730015319952475, 51.44436894937831], [5.718256520342731, 51.43874504209354], [5.756629403069198, 51.433855916665074], [5.787633438040226, 51.41277332955736], [5.8318073285741665, 51.39960377782519], [5.854109851833982, 51.37642988851108], [5.856579199752029, 51.353764694328255], [5.870376191294129, 51.352521217340666]], [[4.873190788389071, 52.068735701349866], [4.8392470535156065, 52.068763962190495], [4.826273177946188, 52.07467047788153], [4.825371669976108, 52.107113922921286], [4.792094267080531, 52.12228999433797], [4.8080862345497835, 52.129100856929064], [4.813142518381973, 52.14020736729547], [4.83309328171984, 52.14470084095515], [4.855239020984859, 52.13721171818901], [4.8745234523448415, 52.138822586104745], [4.873621944374761, 52.15608995972782], [4.892161651759459, 52.16179864953447], [4.8555133929757535, 52.178952979795035], [4.843911377360806, 52.18011167426074], [4.813612870366363, 52.20184426070288], [4.802912362721496, 52.201024696324694], [4.802128442747512, 52.21767033145398], [4.794563614998577, 52.226742061295234], [4.784019891348505, 52.22874858097975], [4.7631284240418585, 52.21860293919467], [4.728753533182704, 52.20981381775968], [4.720757549448078, 52.20127904389034], [4.707666085882562, 52.20506599653435], [4.69531934629233, 52.18915514326137], [4.688930398504369, 52.19192470564281], [4.681208786760637, 52.167507339341114], [4.7059414619397995, 52.15168126859001], [4.70500075797102, 52.144757362636405], [4.726793733247748, 52.15900082631239], [4.74184499674822, 52.1626747355939], [4.7590520401771474, 52.13509215514198], [4.756896260248694, 52.124381296544364], [4.738866100847085, 52.106520445268124]], [[5.0791657615531, 52.388648417247126], [5.074266261715707, 52.41382882624575], [5.049180822548251, 52.41512882491459], [5.000225020173014, 52.42541577090281], [4.947780773913552, 52.42157229657754]], [[5.185700486017389, 51.74192734033963], [5.206513561326636, 51.7414751668896]], [[5.3534985564484465, 51.75546428299995], [5.359926700235107, 51.76057949515343], [5.363767908107624, 51.78217077739243], [5.4017096348484, 51.820888129051376], [5.414879490411314, 51.82128378082015]], [[5.414879490411314, 51.82128378082015], [5.400651342883523, 51.837646807543166]], [[5.400651342883523, 51.837646807543166], [5.384385003423376, 51.827303339873694], [5.365806100039979, 51.80794466404422], [5.3390352329284605, 51.80658814369413], [5.319789997567178, 51.82054899896385], [5.304581950071908, 51.82396856067972], [5.281730682830304, 51.82119899829827]], [[5.281730682830304, 51.82119899829827], [5.28102515485372, 51.80189684415005], [5.2665226353350345, 51.793192505236945], [5.269932687221861, 51.77431426369814], [5.20772863728631, 51.769283834066535], [5.1736673144167495, 51.76402731770992], [5.184838174046007, 51.75388167592484], [5.185700486017389, 51.74192734033963]]]
    }
  }]
};
},{}],"data/gemeenten_borders_outside.json":[function(require,module,exports) {
module.exports = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [[[4.93998077017242, 51.43611678391523], [4.939706398181527, 51.43074722419611], [4.917991814902198, 51.43521243701517], [4.922342570757803, 51.44261677725943], [4.93998077017242, 51.43611678391523]], [[4.601640909401363, 52.31644196944522], [4.601484125406566, 52.31649849112648], [4.601640909401363, 52.31644196944522]], [[4.526031827910704, 52.4051810090139], [4.477663965515954, 52.33252238776197], [4.4432890746568, 52.286231130815], [4.390962416393435, 52.22524423674201], [4.359997577421107, 52.19268774833974], [4.332638770329101, 52.1684399470818], [4.290071915741825, 52.13503563346073], [4.255265868896981, 52.11279435188731], [4.243154305298943, 52.11061826715903], [4.2387251574459395, 52.099992191083295], [4.184987443229406, 52.06144440446811], [4.143635664601803, 52.0317705218098], [4.1101622817127295, 52.00444228892352], [4.032789380280608, 52.003566202864086], [3.9531431109239366, 51.989153174144334], [3.9407571753350057, 51.92158150420526], [3.9726235222774138, 51.91095542812952], [3.9555732628432843, 51.85765548270706], [3.9531431109239366, 51.850025055737774], [3.8603661820030504, 51.82837725181752], [3.7736646328805317, 51.78152077805801], [3.6853560478113483, 51.73364691403593], [3.6113540022673543, 51.65036221670826], [3.570903731609832, 51.60474921993634], [3.485926806430076, 51.57363403440605], [3.4525710115371, 51.61642094711527], [3.387309673703016, 51.59251227594486], [3.307937776337239, 51.433375482374416], [3.3525428228568708, 51.37860597323936], [3.3630473505082428, 51.372869022592084], [3.3750021301114836, 51.35887990648173], [3.374061426142704, 51.34850817797164], [3.385349873768059, 51.33412341009251], [3.358383026663044, 51.31499082098806], [3.3768443420503433, 51.30244300774968], [3.367280518367751, 51.29958866284636], [3.3808031379189574, 51.2869560670861], [3.378255398003513, 51.27508651402278], [3.3884071616665925, 51.272825646772624], [3.4062805370734046, 51.25776261871845], [3.4167458687260774, 51.26005174680923], [3.4275247683683436, 51.244677849508165], [3.4469659837231217, 51.241597417879824], [3.527592153047272, 51.24603436985826], [3.5154021974518366, 51.287153892970494], [3.538057484699945, 51.28364954873275], [3.5597720679792735, 51.29546258011482], [3.5818002192481955, 51.28689954540485], [3.581094691271611, 51.29831692501815], [3.590815298949, 51.30442126659357], [3.6408293932891147, 51.28808650071118], [3.6582324167115368, 51.29014954207695], [3.6899419796591486, 51.280597377945035], [3.693939971526462, 51.2760473826041], [3.755712865476321, 51.269349563375506], [3.7954576081572586, 51.256066968280834], [3.7894998163549882, 51.245893065655125], [3.789656600349785, 51.21582353122803], [3.7992988160297756, 51.21087788411831], [3.826931995112676, 51.209351798724455], [3.8362998388017724, 51.21378875070289], [3.8595822620290674, 51.21082136243706], [3.8885481050677386, 51.223030045587905], [3.8901551410144037, 51.21387353322477], [3.877612421430676, 51.20802353921499], [3.8863139331418872, 51.20019528636132], [3.918611436069986, 51.20776919164935], [3.915985304157143, 51.2146365759217], [3.9294295317109516, 51.22026048320647], [3.9359752634937095, 51.211895274380886], [3.957885826766534, 51.21576700954678], [3.9646275385427874, 51.22410395753173], [3.978934078067977, 51.22537569535994], [3.986224533826019, 51.23413655595431], [4.005704945179496, 51.2418800262861], [4.036552196155727, 51.24566697893011], [4.04055018802304, 51.24131480947356], [4.061833615316678, 51.244564806145654], [4.0785311107625155, 51.25355175346503], [4.166134167855114, 51.29289084361777], [4.236804553509681, 51.34975165495922], [4.217559318148399, 51.37388641285465], [4.277411608162, 51.3760342367423], [4.3345201782666605, 51.377645104658036], [4.341340282040312, 51.35755164697227], [4.384534272606775, 51.35435817198142], [4.421848863368365, 51.3652385956228], [4.431687059041852, 51.37504510732036], [4.391628748371321, 51.408166812535164], [4.383671960635393, 51.42108201670169], [4.395195584252944, 51.42690374987084], [4.3966458362048115, 51.44202329960627], [4.379321204779788, 51.44679938167223], [4.391080004389533, 51.4514906812163], [4.442661938677613, 51.468701533158125], [4.486679045216758, 51.47734935038998], [4.538182587507441, 51.482408040862204], [4.548177567175724, 51.47330805018032], [4.529912231781919, 51.449512422372415], [4.535399671599801, 51.423032014704944], [4.574713258295048, 51.432838526402506], [4.630097204456946, 51.4259146204489], [4.637466052212385, 51.42300375386432], [4.669685163143087, 51.42636679389893], [4.666588679245853, 51.44439721021893], [4.6930851743664785, 51.45171676794132], [4.704060054002241, 51.46545153648602], [4.716916341575562, 51.46889935904251], [4.734005797008391, 51.485544994171796], [4.746548516592119, 51.48950151185957], [4.760031940144626, 51.50236019434484], [4.7737505396893285, 51.505101495885654], [4.816709354263596, 51.49399498551926], [4.820942522123104, 51.48322760524039], [4.84187318542845, 51.480740651265215], [4.835249061648294, 51.45872545641681], [4.823372674042451, 51.44849503210985], [4.828624937868137, 51.423738535720624], [4.836503333606666, 51.417266803217046], [4.78656763126395, 51.43252765715561], [4.769047019845431, 51.42998418149918], [4.768890235850634, 51.41870810608902], [4.78935054717159, 51.40898637691335], [4.839325445513005, 51.41461028419811], [4.868722444537367, 51.412886372919864], [4.882950592065159, 51.41647549967949], [4.909799851174076, 51.40743203067886], [4.928692322547066, 51.39590160770306], [4.963223997401016, 51.42229723284865], [5.0044189920338225, 51.44459503610332], [5.010455175833491, 51.45824502212615], [5.01653055563186, 51.47542761322734], [5.033149659080299, 51.48718412292816], [5.049729566530039, 51.471103704611416], [5.078969781559604, 51.47152761722082], [5.104564768710149, 51.43134070184927], [5.102017028794704, 51.42891026955535], [5.071169777818474, 51.39349943624977], [5.116558744312089, 51.36114077373189], [5.13168839980996, 51.347038614259034], [5.134353727721503, 51.31549951611934], [5.162653238782289, 51.31032778228461], [5.200242201534772, 51.322649508797966], [5.241123628177985, 51.305664743581154], [5.225954776681415, 51.26824739059106], [5.237909556284655, 51.26135174547807], [5.263112583448208, 51.266806087719075], [5.296154810351592, 51.26149304968121], [5.336487493013015, 51.26307565675632], [5.346129708693006, 51.275764774197825], [5.417427230326759, 51.26228435321877], [5.441767945518931, 51.28209520249827], [5.46485438875273, 51.28455389563281], [5.484844348089297, 51.30001257545577], [5.515769991062925, 51.29520823254918], [5.544461462110703, 51.27129956137877], [5.556455437712643, 51.266382175109676], [5.555201165754269, 51.24439524110189], [5.5604534295799555, 51.22232352457223], [5.566058457393934, 51.22091048254089], [5.652720810517753, 51.19765181070489], [5.658012270342138, 51.184793128219624], [5.689525853296255, 51.185414866713415], [5.7079871686835535, 51.18205182667881], [5.745654523433436, 51.189512688604324], [5.776736950401862, 51.17849096075981], [5.770191218619104, 51.16421923624319], [5.779402278313404, 51.16331488934313], [5.777638458371943, 51.151304032076666], [5.806251537422321, 51.16283445505247], [5.813855561169956, 51.15873663316156], [5.8263982807536845, 51.166847494421496], [5.8363540644232685, 51.153677942689335], [5.855756083779347, 51.144634473688704], [5.842938992204726, 51.13290622482852], [5.828789236674332, 51.13033448833146], [5.809857569302643, 51.11840841358688], [5.814639481143939, 51.107443207423614], [5.83349275651823, 51.09955843288869], [5.822674660877265, 51.09232365768819], [5.808250533355977, 51.09633669705722], [5.795119873791762, 51.089610616988004], [5.804174149491266, 51.07692149954649], [5.799353041651271, 51.06007803853282], [5.774659562470807, 51.0629889051174], [5.770739962600892, 51.04919761489144], [5.758001263023669, 51.03365415254661], [5.772856546530646, 51.02743676760868], [5.773405290512434, 51.018986776261215], [5.7676434787036595, 50.999741143794246], [5.749887691292944, 50.98253029185243], [5.736365071741738, 50.97792377483023], [5.72013792828029, 50.96240857332603], [5.734170095814585, 50.955456406531795], [5.746242463413923, 50.9616455306291], [5.758118851019766, 50.95073684614709], [5.746007287421729, 50.943417288424705], [5.714846468455905, 50.90845862856915], [5.696541937063403, 50.90859993277228], [5.692347965202593, 50.893706469761874], [5.679334893634476, 50.88048039634845], [5.669653481955786, 50.88180865585792], [5.644176082801339, 50.87138040566657], [5.64272583084947, 50.850071731833836], [5.653975082476126, 50.820086979928625], [5.693798217154462, 50.81045003327483], [5.698305757004864, 50.77746963226316], [5.682078613543416, 50.75754573962115], [5.69940324496844, 50.755397915733504], [5.720255516276387, 50.7647239931404], [5.739187183648077, 50.75706530533049], [5.744909799458153, 50.76882181503131], [5.765801266764798, 50.78255658357602], [5.776658558404463, 50.78224571432912], [5.784458562145594, 50.76721094711557], [5.793238465854204, 50.77020659622203], [5.807466613381995, 50.75607617590855], [5.830670644611891, 50.758534869043096], [5.845055576134479, 50.76537399247482], [5.848935980005695, 50.75341965688961], [5.86343849952438, 50.76350877699344], [5.8864857467594796, 50.77015007454078], [5.889739014651509, 50.75633052347419], [5.9151772178072575, 50.7503674861019], [5.935755117124311, 50.75698052280861], [5.957979248386728, 50.76212399580272], [5.9741279998507775, 50.75520008984911], [6.021006414294961, 50.75429574294905], [6.018380282382118, 50.76336747279031], [6.0279441060647105, 50.77351311457539], [6.006543090774974, 50.7819065842416], [5.976675739766223, 50.803356562277465], [5.983535039538574, 50.80974351225915], [6.003564194873839, 50.801463085955454], [6.025043602160974, 50.814123942556336], [6.023710938205202, 50.81839132949101], [6.017949126396427, 50.84379782521465], [6.053891857203547, 50.85688259442494], [6.074156188531007, 50.84653912675547], [6.07725267242824, 50.860697807909574], [6.088070768069205, 50.872284752566635], [6.0753712644906805, 50.89054125561165], [6.079800412343685, 50.905773848709586], [6.091559211953429, 50.917078184960374], [6.0561652251280975, 50.92713904422357], [6.018184302388622, 50.9347129495116], [6.0168516384328505, 50.9526303224691], [6.006072738790585, 50.95754770873819], [6.015205406487487, 50.96235205164477], [6.026493854112841, 50.98326507370873], [5.968287796044605, 50.979393338542835], [5.955196332479089, 50.988408546702836], [5.89706866640825, 50.97487160404252], [5.905535002127267, 51.002171576088166], [5.878920919010544, 51.01782808179551], [5.8770003150742856, 51.03204328463087], [5.866299807429418, 51.05109109121344], [5.887544038724357, 51.05222152483852], [5.9132174178723, 51.06688890112392], [5.938146073044958, 51.035123716259214], [5.9576264843984355, 51.03472806449043], [5.967856640058914, 51.044760662913006], [5.970953123956146, 51.06163238476731], [6.00952198667611, 51.09085409397559], [6.036449637782425, 51.09653452294161], [6.088423532057497, 51.12762144763127], [6.091755191946925, 51.13491274451303], [6.125032594842503, 51.14432360444181], [6.163444673567669, 51.14876055642024], [6.175438649169609, 51.158454024755294], [6.138790390385905, 51.1733474877657], [6.180730108993995, 51.18634747445411], [6.165169297510432, 51.194401814032794], [6.129618526690304, 51.18374747711643], [6.099672783684154, 51.169843143527956], [6.082191368264333, 51.171623576487455], [6.07313709256483, 51.18281486937573], [6.068002416735241, 51.22054309161273], [6.08603257613685, 51.22266265465976], [6.0726667405804395, 51.24255828646114], [6.085601420151159, 51.247616976933365], [6.124758222851609, 51.277545207157324], [6.145140142175167, 51.29811909913376], [6.169363269371241, 51.32934732802656], [6.194252728545201, 51.33488645278944], [6.189901972689595, 51.33946470897101], [6.226393447478504, 51.360349470194336], [6.214438667875263, 51.389627701083874], [6.226667819469398, 51.40028203800024], [6.2052668041796615, 51.39954725614394], [6.220592439671029, 51.44665807746909], [6.2235713355721645, 51.47497543977731], [6.2127532399311995, 51.491310205659694], [6.213380375910386, 51.50781453658585], [6.199936148356578, 51.527371038299705], [6.176888901121478, 51.53856233118798], [6.157016529781009, 51.56656882424931], [6.130559230659083, 51.58109489633157], [6.12150495495958, 51.59273836266988], [6.091441623957332, 51.60585139272079], [6.109393391361543, 51.64685787247052], [6.118094903072754, 51.65598612399303], [6.087874788075709, 51.659857859158926], [6.036645617775921, 51.672773063325444], [6.031942097932023, 51.67616436420068], [6.02606269812715, 51.70852302671856], [6.044955169500141, 51.71691649638477], [6.028963202030888, 51.72576213950101], [5.994196351184742, 51.73830995273938], [5.9551571364803895, 51.73811212685499], [5.953275728542831, 51.74803168191506], [5.990472731308323, 51.76625992411945], [5.9823591595776, 51.77369252520434], [5.990433535309624, 51.783188167655005], [5.974559155836468, 51.78505338313638], [5.979066695686871, 51.79765771805601], [5.94594607678609, 51.81509465672285], [5.945044568816009, 51.82354464807031], [5.96299633622022, 51.836912025686864], [5.994549115173035, 51.830920727473945], [6.029159182024383, 51.84513593030931], [6.035665717808442, 51.84264897633414], [6.055381305154114, 51.852568531394205], [6.063494876884839, 51.8654554747201], [6.089560216019773, 51.852596792234834], [6.108766255382356, 51.84790549269076], [6.13577229848607, 51.847170710834455], [6.166541157464902, 51.84072723917151], [6.167011509449292, 51.861612000394835], [6.14455220219468, 51.8697511224954], [6.13714415844054, 51.88580327997152], [6.103474795557971, 51.89247283835948], [6.117898923079258, 51.901657611563245], [6.12565973082169, 51.898209789006756], [6.157369293769301, 51.90510543411973], [6.167913017419373, 51.90095109054757], [6.19107785265057, 51.8916532739813], [6.1820235769510665, 51.88577501913089], [6.19064669666488, 51.87766415787095], [6.215104999853148, 51.86763155944838], [6.233840687231342, 51.87020329594543], [6.262218590289526, 51.86825329794217], [6.279895985702842, 51.874075031111325], [6.299023633068027, 51.86782938533277], [6.306196500829971, 51.84906418715646], [6.34727390746668, 51.850675055072195], [6.358248787102442, 51.847255493356336], [6.363540246926827, 51.83507507104611], [6.382236738306322, 51.83479246263984], [6.407478961468573, 51.82809464341125], [6.402422677636383, 51.84321419314668], [6.407988509451663, 51.854235920991194], [6.386861866152821, 51.86435330193565], [6.392388501969402, 51.87401850943007], [6.412339265307268, 51.871079382004865], [6.432368420642534, 51.8593793939853], [6.451182500018125, 51.865229387995086], [6.464391551579738, 51.85528157209439], [6.498844834436291, 51.86166852207609], [6.501079006362142, 51.86805547205778], [6.524635801580331, 51.87370764018318], [6.552425764658028, 51.886198931740296], [6.5561493845344465, 51.8817054580806], [6.585781559551004, 51.89408370627522], [6.6377162578273765, 51.90445543478531], [6.668720292798405, 51.91386629471409], [6.684006732291072, 51.91756846483623], [6.7219876550305475, 51.8960619651191], [6.754010785967753, 51.91262281772651], [6.770041949435705, 51.91621194448613], [6.793990704640885, 51.935288011909336], [6.79889020447828, 51.95874450962972], [6.828522379494836, 51.96411406934884], [6.832441979364751, 51.9700488458805], [6.8266017755585775, 51.99353360444151], [6.811393728063308, 51.998083599782454], [6.752991690001576, 52.02840748177519], [6.714148455290719, 52.040050948113496], [6.687847940163589, 52.03985312222911], [6.687965528159687, 52.04437485672942], [6.6946680439372415, 52.06980961329369], [6.735471078583055, 52.0746422170409], [6.7509143020705205, 52.08504220639163], [6.760556517750511, 52.11878565010022], [6.820134435773218, 52.118418259172074], [6.85548922659985, 52.12045303969722], [6.87304903401707, 52.13198346267302], [6.8819465257217765, 52.15597691636531], [6.889746529462908, 52.1612051718813], [6.90805106085541, 52.175957330688576], [6.951245051421873, 52.18104428200143], [6.974096318663477, 52.205405126621876], [6.981112402430625, 52.22075076308232], [7.003493317687839, 52.228579015935985], [7.019171717167499, 52.225046410857615], [7.061268219770385, 52.23471161835204], [7.065775759620788, 52.241239872536866], [7.042375748397395, 52.25613333554728], [7.032067200739519, 52.27167679789211], [7.026462172925541, 52.29196808146227], [7.047432032229585, 52.31519849245764], [7.056211935938195, 52.33794846916235], [7.07212551141005, 52.35188106359144], [7.072203903407448, 52.37279408565539], [7.058720479854941, 52.399415797526], [7.0349285086445565, 52.403541880257535], [7.021993829073837, 52.42298533860889], [7.010783773445881, 52.42917446270619], [6.993890298006548, 52.46548964291184], [6.9775455665490025, 52.46568746879623], [6.9610440510966605, 52.44398314319472], [6.947286255553259, 52.43663532463171], [6.941642031740582, 52.43542010848475], [6.861799782390414, 52.45135922259836], [6.854313346638877, 52.459696170583314], [6.774588685284806, 52.45961138806143], [6.752717318010681, 52.464104861721125], [6.7177152911723415, 52.4781222386721], [6.697568547840978, 52.48628962161329], [6.70532935558341, 52.520993933903206], [6.6808710523951405, 52.553324335580456], [6.716265039220472, 52.54851999267387], [6.725985646897861, 52.56324389064052], [6.751619830047105, 52.55906128622773], [6.766671093547579, 52.56352649904679], [6.718773583137217, 52.588622125523536], [6.727279114854934, 52.614932968147244], [6.710072071426007, 52.62781991147314], [6.726416802883552, 52.63321773203289], [6.741977614367114, 52.645341632661854], [6.767886169507252, 52.64683945721509], [6.783838940977805, 52.65254814702173], [6.821859059715981, 52.64768728243389], [6.83894851514881, 52.65181336516543], [6.861878174387812, 52.649693802118406], [6.873754561993655, 52.6531416246749], [6.913224932683698, 52.64689597889634], [6.918712372501579, 52.64000033378336], [6.939721427804323, 52.63793729241759], [6.9761737065945315, 52.64624597956192], [7.013096337369131, 52.63666555458938], [7.041905396413005, 52.63279381942348], [7.054761683986326, 52.64440902492117], [7.064952643648105, 52.7300676328615], [7.0715375714295625, 52.81041320276397], [7.092742606725802, 52.83819360910027], [7.087255166907921, 52.84989359711984], [7.10438381833945, 52.86393923491144], [7.181521543779375, 52.94157176411372], [7.2129567347360934, 53.010867345331036], [7.199238135191392, 53.081378142695314], [7.2028049710730135, 53.11339767512567], [7.182893403733846, 53.12176288395125], [7.178973803863931, 53.1385780841243], [7.189243155523108, 53.15488458916605], [7.203667283044394, 53.176560653926934], [7.227498450253478, 53.180291084889696], [7.2080572348987, 53.18848672867151], [7.217621058581292, 53.19781280607842], [7.212486382751703, 53.228193209752405], [7.187596923577743, 53.33219310325964], [7.171722544104588, 53.33321049352221], [7.101248138443518, 53.33027136609701], [7.061738571754775, 53.324053981159075], [7.019250109164897, 53.32430832872472], [6.995340549958415, 53.33182571233149], [6.993694318013052, 53.34875395586704], [6.9520289713958565, 53.39402782255144], [6.93203901205929, 53.43848212485766], [6.911774680731829, 53.45942340776224], [6.890922409423882, 53.46513209756889], [6.857605810529606, 53.46874948516914], [6.820095239774519, 53.49373206828338], [6.749268070125156, 53.525695079032474], [6.6659765728894635, 53.5612472165412], [6.63712831784689, 53.57642328795788], [6.612591622661222, 53.56429938732891], [6.428605604767415, 53.566023298607156], [6.352526171292366, 53.53971245598345], [6.3220708803031265, 53.52648638257003], [6.186139156814477, 53.513966830172286], [6.1259732988112825, 53.523349429260435], [6.11045168332642, 53.496473369824194], [6.050129041328429, 53.492347287092656], [6.00493605482831, 53.49257337381767], [5.959625480332093, 53.48381251322331], [5.83901939233481, 53.47533426103522], [5.703440432834452, 53.471292960825565], [5.61321124382901, 53.49395815500839], [5.552849405832321, 53.47157556923184], [5.492605155831727, 53.458179930774655], [5.3571045883287685, 53.431275610497785], [5.176685406316584, 53.40861041631496], [5.161790926810907, 53.38614304801652], [5.101781852802509, 53.36802784917463], [5.087083353290328, 53.32306485173713], [5.02711347528063, 53.31393660021462], [4.907683267244321, 53.25959100368896], [4.8406189134700774, 53.232347553324566], [4.818394782207659, 53.214288876163934], [4.818786742194651, 53.18283456054613], [4.715544481621091, 53.08793465772077], [4.686343462590225, 53.047323829739824], [4.687088186565509, 53.002417353983574], [4.613007749024117, 52.97946955139447], [4.6133213170137095, 52.96098696162444], [4.646206759922296, 52.94106306898243], [4.62947006847776, 52.88971312156323], [4.6939866823365595, 52.884484866047245], [4.656358523585376, 52.797017564306785], [4.63448715631125, 52.75832847348847], [4.623747452667684, 52.725771985086205], [4.616966544892731, 52.68230681220193], [4.594076081652427, 52.575480834631996], [4.583336378008861, 52.5338808772291], [4.571499186401717, 52.50203090984251], [4.5663253145734295, 52.492733093276236], [4.554684102959783, 52.47806571699084], [4.52066197608892, 52.46924833471523], [4.519917252113637, 52.457463564173786], [4.543317263337029, 52.44912661618883], [4.544061987312313, 52.43929184365064], [4.526031827910704, 52.4051810090139]]]
    }
  }]
};
},{}],"updated.json":[function(require,module,exports) {
module.exports = {
  "date_data": "09-03-2020",
  "url": "https://www.volksgezondheidenzorg.info/sites/default/files/map/detail_data/klik_corona09032020.csv"
};
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("leaflet/dist/leaflet");

require("leaflet.control.layers.tree");

require("leaflet.control.layers.tree/L.Control.Layers.Tree.css");

require("leaflet.markercluster/dist/leaflet.markercluster");

require("./node_modules/leaflet/dist/leaflet.css");

require("./node_modules/leaflet.markercluster/dist/MarkerCluster.css");

require("./node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css");

require("./index.css");

var _corona_markers = _interopRequireDefault(require("./data/corona_markers.json"));

var _gemeenten_simplified = _interopRequireDefault(require("./data/gemeenten_simplified.json"));

var _gemeenten_borders_simplified = _interopRequireDefault(require("./data/gemeenten_borders_simplified.json"));

var _gemeenten_borders_outside = _interopRequireDefault(require("./data/gemeenten_borders_outside.json"));

var _updated = _interopRequireDefault(require("./updated.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global L */
var map = L.map('mapid', {
  crs: L.CRS.EPSG3857,
  maxZoom: 18,
  minZoom: 5,
  maxBounds: [[43.934028, -4.262695], [58.378797, 13.886719]]
}).setView([52.505, 5], 8);
var backgroundLayer = L.tileLayer('https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaart/EPSG:3857/{z}/{x}/{y}.png', {
  wmts: true,
  attribution: 'BRT-Achtergrondkaart: © <a href="http://www.kadaster.nl">Kadaster</a> (<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>)</span>'
});
var gemBordersLayer = L.geoJSON(_gemeenten_borders_simplified.default, {
  style: function style(feature) {
    return {
      fillColor: null,
      weight: 0.5,
      opacity: 1,
      color: '#454f4e',
      dashArray: '4',
      fillOpacity: 0
    };
  }
});
var gemLayer = L.geoJSON(_gemeenten_simplified.default, {
  style: function style(feature) {
    return {
      fillColor: null,
      color: null,
      fillOpacity: 0
    };
  }
}).bindPopup(function (layer) {
  console.log(layer.feature);
  return '<p><b>Gemeente: </b>' + layer.feature.properties.Gemeentenaam + '</p>' + '<p><b>Aantal gevallen: </b>' + layer.feature.properties.aantal + '</p>';
});
var gemBordersLayerOutside = L.geoJSON(_gemeenten_borders_outside.default, {
  style: function style(feature) {
    return {
      fillColor: null,
      weight: 1,
      opacity: 1,
      color: 'darkgray',
      dashArray: '4',
      fillOpacity: 0
    };
  }
}); // markers layer

var markers = L.markerClusterGroup({
  polygonOptions: {
    fillColor: '#e7e1ef',
    weight: 1,
    opacity: 1,
    color: '#dd1c77',
    fillOpacity: 0.5
  },
  singleMarkerMode: true,
  attribution: "<a href=\"".concat(_updated.default.url, "\">Data coronavirus besmettingen - ").concat(_updated.default.date_data, "</a>: <a href=\"https://www.volksgezondheidenzorg.info/onderwerp/infectieziekten/regionaal-internationaal/coronavirus-covid-19\">RIVM</a>")
});
var geojsonMarkers = L.geoJSON(_corona_markers.default);
markers.addLayers(geojsonMarkers);
map.addLayer(markers);
markers.refreshClusters(geojsonMarkers);
backgroundLayer.addTo(map);
gemBordersLayer.addTo(map);
gemBordersLayerOutside.addTo(map);
gemLayer.addTo(map); // events

markers.on('click', function (a) {
  L.popup().setLatLng([a.layer._latlng.lat, a.layer._latlng.lng]).setContent('<p><b>Gemeente: </b>' + a.layer.feature.properties.gemeentenaam + '</p>').openOn(map);
});
},{"leaflet/dist/leaflet":"node_modules/leaflet/dist/leaflet.js","leaflet.control.layers.tree":"node_modules/leaflet.control.layers.tree/L.Control.Layers.Tree.js","leaflet.control.layers.tree/L.Control.Layers.Tree.css":"node_modules/leaflet.control.layers.tree/L.Control.Layers.Tree.css","leaflet.markercluster/dist/leaflet.markercluster":"node_modules/leaflet.markercluster/dist/leaflet.markercluster.js","./node_modules/leaflet/dist/leaflet.css":"node_modules/leaflet/dist/leaflet.css","./node_modules/leaflet.markercluster/dist/MarkerCluster.css":"node_modules/leaflet.markercluster/dist/MarkerCluster.css","./node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css":"node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css","./index.css":"index.css","./data/corona_markers.json":"data/corona_markers.json","./data/gemeenten_simplified.json":"data/gemeenten_simplified.json","./data/gemeenten_borders_simplified.json":"data/gemeenten_borders_simplified.json","./data/gemeenten_borders_outside.json":"data/gemeenten_borders_outside.json","./updated.json":"updated.json"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "38311" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/webapp.e31bb0bc.js.map