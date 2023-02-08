/* eslint-disable */
// interface 接口，TS用来定义对象类型，可以对对象的形状进行描述
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'lin',
  age: 18,
};
console.log(person);

// type是类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
function getName(arg: NameOrResolver): Name {
  return typeof arg === 'string' ? arg : arg();
}
console.log(getName('1'));

/**
 * 相同点
 * 1、都可以定义一个对象和函数
 * 2、都允许继承
 */
// 定义函数
type addType = (num: number) => number; // type定义函数，只能用箭头表示返回值类型
interface addType1 {
  (num: number): number;
}

// 都允许继承
// 1、 interface继承 interface
interface Father {
  name: string;
}

interface Child extends Father {
  gender: string;
}
// 继承后，初始化这个类型赋值，就必须把父类型的属性也加上
const c: Child = { gender: '111', name: '222' };

// 2、 type 继承 type
type Person1 = {
  name: string;
};
type Student1 = Person1 & { grade: number };
// 继承后，初始化这个类型赋值，就必须把两个类型的交叉类型全部初始化
const s1: Student1 = { name: '111', grade: 2 };

// 3、interface 继承 type

type Person11 = {
  name: string;
};

interface Student extends Person11 {
  grade: number;
}

const sss: Student = {
  name: '111',
  grade: 2,
};
console.log(sss);

// 4、type 继承 interface
interface Person222 {
  name: string;
}

type Student222 = Person222 & { grade: number }; // 交叉类型

/**
 * 不同点
 * 1、type 可以声明基本类型、联合类型、交叉类型、元组， interface 不可以
 * 2、interface 可以合并重复声明
 */

type Name1 = string; // 基本类型
type arrItem = number | string; // 联合类型
const arr: arrItem[] = [1, '2', 3];

type Person333 = {
  name: Name;
};

type Student333 = Person333 & { grade: number }; // 交叉类型

type Teacher333 = Person333 & { major: string };

type StudentAndTeacherList = [Student333, Teacher333]; // 元组类型

const list: StudentAndTeacherList = [
  { name: 'lin', grade: 100 },
  { name: 'liu', major: 'Chinese' },
];

interface Person444 {
  name: string;
}

interface Person444 {
  // 重复声明 interface，就合并了
  age: number;
}

const person444: Person444 = {
  name: 'lin',
  age: 18,
};
console.log(person444);

export default 1;
