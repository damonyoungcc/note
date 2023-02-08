/* eslint-disable */
// 接口继承
interface T1 {
  name: string;
}

interface T2 {
  gender: number;
}

interface T3 extends T1, T2 {
  age: number;
}

const t3: T3 = {
  name: 'xiaoming',
  gender: 1,
  age: 18,
};
console.log(t3);

// 条件判断, extends理解为是都包含
interface Animal {
  eat: () => void;
}

interface Dog extends Animal {
  bite: () => void;
}

type A = Dog extends Animal ? string : number;

const a: A = 'hello TS';
console.log(a);

// 泛型用法
type A1 = 'x' extends 'x' ? string : number; // string
type A2 = 'x' | 'y11' extends 'x' ? string : number; // number

type P<T> = T extends 'x' ? string : number;
type A3 = P<'x' | 'y'>; // string | number

/**
 * 对于使用extends关键字的条件类型（即上面的三元表达式类型），如果extends前面的参数是一个泛型类型，当传入该参数的是联合类型，则使用分配律计算最终的结果。
 * 分配律是指，将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，得到最终的判断结果。
 */

// 上面例子中，extends的前参为T，T是一个泛型参数，在A3定义中，给T传入了 'x' | 'y'的联合类型，满足分配率，于是 'x' | 'y'被拆开
// P<'x' | 'y'> => P<'x'> | P<'y'>
// 'x'代入得到 'x' extends 'x' ? string : number => string
// 'y'代入得到 'y' extends 'x' ? string : number => number

// ------------------------------------------------------------
// 满足分配率的条件，参数是泛型类型 代入参数的是联合类型
//-------------------------------------------------------------

// 特殊的never
// never被认为是空的联合类型
type A11 = never extends 'x' ? string : number; // string

type P1<T> = T extends 'x' ? string : number;
// never是空的联合类型，没有联合项可以分配，所以P<T>没有执行，因此返回的就是never
type A22 = P1<never>; // never

// 防止条件分配
// 将泛型参数使用[]括起来，即可阻断条件判断类型的分配
type P444<T> = [T] extends ['x'] ? string : number;
type A333 = P444<'x' | 'y'>; // number

export default 1;
