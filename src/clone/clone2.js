export const clone2 = (target)=>{
  if(typeof target === "object"){
    let cloneTarget = {};
    for (const key in target) {
      cloneTarget[key] = clone2(target[key]);
    }
    return cloneTarget;
  }else{
    return target
  }
};
