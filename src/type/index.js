/**
 * @使用方法
 *
 * const isString = isType('String');
 * isString("abc"); => true
 * isString(123); => false
 *
 */
export function isType( type ){
  return function( obj ){
    return Object.prototype.toString.call( obj ) === '[object '+ type +']';
  }
}
