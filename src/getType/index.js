export function getType(target) {
  return Object.prototype.toString.call(target);
}

export const mapTag = '[object Map]';
export const setTag = '[object Set]';
export const arrayTag = '[object Array]';
export const objectTag = '[object Object]';
export const argsTag = '[object Arguments]';

export const boolTag = '[object Boolean]';
export const dateTag = '[object Date]';
export const errorTag = '[object Error]';
export const numberTag = '[object Number]';
export const regexpTag = '[object RegExp]';
export const stringTag = '[object String]';
export const symbolTag = '[object Symbol]';
export const funcTag = '[object Function]';

export const deepTag = [mapTag,setTag,arrayTag,objectTag,argsTag];
