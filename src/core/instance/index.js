import {initMixin} from "./init";
import { initApi } from "./api";
export const MODULE_NAME = "defaultCache";

function TCache(moduleName=MODULE_NAME) {
    this._init(moduleName);
};

initMixin(TCache);
initApi(TCache)

TCache._index = 0;
TCache._moduleNames =[]; 




export default TCache;