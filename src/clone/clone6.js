import { forEach } from "../forEach";

export const clone6 = (target, map = new WeakMap()) =>{
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);

    const keys = Array.isArray(target) ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
      if (keys) {
        key = value;
      }
      cloneTarget[key] = clone6(target[key], map);
    });

    return cloneTarget;
  } else {
    return target;
  }
};
