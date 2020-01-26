export const clone5 = (target, map = new WeakMap()) =>{
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = clone5(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
};
