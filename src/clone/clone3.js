export const clone3 = (target)=>{
  if(typeof target === "object"){
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = clone3(target[key]);
    }
    return cloneTarget;
  }else{
    return target
  }
};
