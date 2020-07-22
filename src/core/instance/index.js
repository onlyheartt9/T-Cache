import {getCacheDataFn} from "./cacheData"
const MOUDULE_NAME = "cacheModelName";
const fn = getCacheDataFn();
class TCache {
  constructor() {
    this._moduleName = MOUDULE_NAME + this._index++;
  }
}

TCache.prototype._index = 0;