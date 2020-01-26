export function initObject(target) {
  const Ctor = target.constructor;
  return new Ctor();
}
