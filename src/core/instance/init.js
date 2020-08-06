import {getCacheData} from "./cacheData";
export function initMixin(TCache){
    TCache.prototype._init=function(moduleName){
        //设置模块名
        this._moduleName = moduleName;
        TCache._moduleNames.push(moduleName);

        //获取模块对应缓存对象
        this.cacheData = getCacheData(moduleName);
    }
}