Function.prototype.customBind = function (context) {
  /**
   *  var foo = {
   *    value: 1
   *  };
   *  function bar(name, age) {
   *    this.habit = 'shopping';
   *    console.log(this.value);
   *    console.log(name);
   *    console.log(age);
   *  }
   *  bar.prototype.friend = 'jack';
   *  const bindA = bar.bind(foo,1);
   *
   */
  //  bar 如果不是函数则直接报错。
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  var self = this;// 存储 this
  var args = Array.prototype.slice.call(arguments, 1); // 获取参数 1
  // 两种调用方式：bindA(2) | const obj = new bindA(2);
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments); // 获取参数 2
    // 如果是第一种调用方式 this instanceof fBound === false 则 self.apply(context,args.concat(bindArgs))
    // 如果是第二种调用方式 this instanceof fBound === true 则 self.apply(this,args.concat(bindArgs)) this 指向对象实例 obj
    return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
  };
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值，例如friend属性值
  fBound.prototype = Object.create(this.prototype);

  return fBound;
};
