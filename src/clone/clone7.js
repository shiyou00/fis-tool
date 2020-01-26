import { forEach } from "../forEach";
import { isObject } from "../isObject";

export const clone7 = (target, map = new WeakMap()) =>{
  if(!isObject(target)){
    return target;
  }
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
    cloneTarget[key] = clone7(target[key], map);
  });

  return cloneTarget;
};
