Function.prototype.customApply = function (context,arr) {
  const ctx = Object(context) || window;
  ctx.fn = this;

  let result;
  if (!arr) {
    result = context.fn();
  } else {
    const args = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('context.fn(' + args + ')')
  }

  delete context.fn;
  return result;
};
