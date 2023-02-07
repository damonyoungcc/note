declare function f1(arg: { a: number; b: string }): void;
declare function f2(arg1: { a: number; b: string }, arg2: string): void;

type T0 = Parameters<() => string>;
const t0: T0 = [];
console.log(t0);

type T1 = Parameters<(s: string) => void>;
const t1: T1 = ['hello'];
console.log(t1);

type T2 = Parameters<<T>(arg: T) => T>;
const t2: T2 = [1];
console.log(t2);

type T3 = Parameters<typeof f1>;
const t3: T3 = [{ a: 1, b: '2' }];
console.log(t3);

type T31 = Parameters<typeof f2>;
const t31: T31 = [{ a: 1, b: '2' }, '1'];
console.log(t31);

const T4 = (a: Parameters<typeof f1>) => a;
console.log(T4([{ a: 1, b: '1' }]));

// 冒号后面的参数类型是 [{ a: number; b: string }]
// [a]整体看做一个参数arg的变量，则想要类型是[{ a: number; b: string }]，传的参数必须是 { a: 1, b: '1' }，被套一个数组对应着arg
// 此时再计算a的类型，[a] = [{ a: 1, b: '1' }]
const T5 = (...[a]: Parameters<typeof f1>) => a;
console.log(T5({ a: 1, b: '1' }));

// 冒号后面的参数类型是 [{ a: number; b: string }]
// a 整体看做一个参数arg的变量，则想要类型是[{ a: number; b: string }]，传的参数类型必须是 { a: 1, b: '1' }，被套一个数组对应着arg
// 此时计算a的值，为[{ a: 1, b: 2 }]
const T6 = (...a: Parameters<typeof f1>) => a;
console.log(T6({ a: 1, b: '1' }));

const a = [1, 2, 3];
const fnn = (a: number[]) => a;
const fnn1 = (...a: number[]) => a;
const fnn2 = (...[a]: number[]) => a;
fnn(a);
fnn1(1);
fnn2(1);

export default T6;
