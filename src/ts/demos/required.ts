// Constructs a type consisting of all properties of Type set to required
// 这个类型的每一个属性不管是可选还是必选都会变成必选，与Partial是相反的

/*
源码
type Required<T> = {
    [P in keyof T]-?: T[P];
};
*/

interface Props {
  a?: number;
  b?: number;
}

const obj: Props = { a: 5 };
// 少任何一个属性 a, b都会报错，尽管在Props中是可选
const obj2: Required<Props> = { a: 5, b: 3 };

console.log(obj);
export default obj2;
