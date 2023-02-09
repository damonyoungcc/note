/* eslint-disable */

/*
  1、创建一个空对象，作为将要返回的对象实例
  2、将这个空对象的原型，指向构造函数的 prototype 属性
  3、将这个空对象赋值给函数内部的 this 关键字
  4、开始执行构造函数内部的代码
*/

// 构造函数内部有 return一个数值，new 命令就会忽略这个 return，返回构造后的 this 对象

var Vehicle = function () {
  this.price = 1000;
  return 1000;
};
console.log(new Vehicle() === 1000);

// return 语句返回一个跟this 无关的新对象，new 命令会返回这个新对象，而不是this 对象
var Vehicle1 = function () {
  this.price = 1000;
  return { price: 2000 };
};
console.log(new Vehicle1().price);

// 对普通函数，内部没有 this 关键字的函数，使用 new 命令，会返回一个空对象
function getMessage() {
  return 'this is a message';
}

var msg = new getMessage();
console.log(msg); // {}
console.log(typeof msg); // 'object'

// new 可以用下面代码表示
function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
  // 将 arguments 对象转为数组
  var args = [].slice.call(arguments);
  // 取出构造函数
  var constructor = args.shift();
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype);
  // 执行构造函数
  var result = constructor.apply(context, args);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return typeof result === 'object' && result != null ? result : context;
}

// 实例
var actor = _new(Person, '张三', 28);

function Human(name) {
  this.name = name;
}
Human.prototype.run = function () {
  console.log(`我叫${this.name},我在跑`);
  return undefined;
};

function Man(name) {
  Human.call(this, name);
  this.gender = '男';
}

var f = function () {};
f.prototype = Human.prototype;
Man.prototype = new f();
