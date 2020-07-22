// import {getCacheDataFn} from "./cacheData.js";
// const fn = getCacheDataFn();
const MOUDULE_NAME = "cacheModelName";
class BaseCache {
  constructor() {
    console.log("111")
  }

  set(name, value) {
    fn(cache=>{
      cache[this._moduleName+"/"+name] = value;
    })
  }

  add(name, value) {
  }

  get(name) {
  }

  remove(name) {
  }

  reset() {
  }
}

BaseCache.prototype._index = 0;
export default BaseCache;