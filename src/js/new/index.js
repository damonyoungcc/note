/* eslint-disable */
/*
  构造函数
  new可以执行构造函数,所以后面的构造函数可以带括号,也可以不带括号
*/
var Vehicle = function () {
  this.price = 1000;
};

var v = new Vehicle();
console.log(v.price); // 1000

/*
  忘记了 new 命令,构造函数就变成了普通的函数,
  函数return undefined,因此 v1是undefined
  this变成全局对象,因此 price值为10000
*/
var v1 = Vehicle();
console.log(v1); // undefined
console.log(price); // 1000

/*
  为了保证构造函数必须与new命令一起使用,构造函数内部使用严格模式
  另一个解决办法,构造函数内部判断是否使用 new 命令,如果没有使用,则直接返回一个实例对象
 */

function Fubar(foo, bar) {
  // 外部调用new 的话,this就指向
  if (!(this instanceof Fubar)) {
    return new Fubar(foo, bar);
  }
  this._foo = foo;
  this._bar = bar;
}

Fubar(1, 2)._foo; // 1
new Fubar(1, 2)._foo; // 1
