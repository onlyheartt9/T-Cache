let cache = Object.create(null);

export function getCacheData(){
    return (callback)=>{
        callback(cache);
    }
}