
export interface TCache {
  add: (name:string,val:any)=>void
  set: (name:string,val:any)=>void;
  get: (name:string)=>any;
  remove: (name:string)=>void;
  reset: ()=>void;
  getKeys: ()=>string[];
}
