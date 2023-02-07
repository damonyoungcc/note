// Constructs an object type whose property keys are Keys and whose property values are Type.
// 生成的类型是第一个参数的属性，值是第二个参数type
// 经常用于一个类型的属性到另一个对象的映射

/*
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
*/
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

export default cats;
