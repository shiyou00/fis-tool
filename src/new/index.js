export function objectFactory(){
  var Constructor = [].shift.call(arguments);
  var obj = Object.create(Constructor.prototype); // 通过 Constructor 原型对象创建一个新对象
  var res = Constructor.apply(obj,arguments); // 用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
  // 构造函数返回了一个对象，在实例 person 中只能访问返回的对象中的属性。
  // 构造函数返回了基本类型，则相当于没有返回值处理
  // res || obj 意思是如果如果返回了一个null typeof 也是object 但是不做处理还是返回obj;
  return typeof res === 'object' ? res || obj: obj;
}
