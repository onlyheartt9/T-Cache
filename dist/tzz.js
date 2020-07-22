/*!
 * Vue.js v1.0.0
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, (function () { 'use strict';

  // import {getCacheDataFn} from "./cacheData.js";
  var BaseCache = function BaseCache() {
    console.log("111");
  };

  BaseCache.prototype.set = function set (name, value) {
      var this$1 = this;

    fn(function (cache){
      cache[this$1._moduleName+"/"+name] = value;
    });
  };

  BaseCache.prototype.add = function add (name, value) {
  };

  BaseCache.prototype.get = function get (name) {
  };

  BaseCache.prototype.remove = function remove (name) {
  };

  BaseCache.prototype.reset = function reset () {
  };

  BaseCache.prototype._index = 0;

  return BaseCache;

})));
