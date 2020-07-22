import store from "store";
import Vue from "vue";

const MOUDULE_NAME = "cacheModelName";
window.store = store;
window.Vue = Vue;
let mutations = {
  setProperty(state, { name, value }) {
    if (state.hasOwnProperty(name)) {
      state[name] = value;
    } else {
      this.addProperty(state, { name, value });
    }
  },
  addProperty(state, { name, value }) {
    Vue.set(state, name, value);
  }
};

let getters = {
  getProperty(state, name) {
    return state[name];
  }
};

function createStore(moduleName) {
  store.registerModule(moduleName, {
    state: {},
    getters,
    mutations,
    actions: {},
    namespaced: true
  });
}

class BaseCache {
  constructor() {
    this._moduleName = MOUDULE_NAME + this._index++;
    createStore(this._moduleName);
  }

  set(name, value) {
    store.commit(`${this._moduleName}/setProperty`, {
      name,
      value
    });
  }

  add(name, value) {
    store.commit(`${this._moduleName}/addProperty`, {
      name,
      value
    });
  }

  get(name) {
    store.getters(`${this._moduleName}/getProperty`, name);
  }

  remove(name) {
    store.commit(`${this._moduleName}/removeProperty`, name);
  }

  removeAll() {
    store.commit(`${this._moduleName}/removeAllProperty`);
  }
}

BaseCache.prototype._index = 0;

window.BaseCache = BaseCache;
//export default BaseCache;
