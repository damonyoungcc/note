// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
// 从一个类型中挑选出若干属性，一旦被挑选，则新类型就必须包含这些属性

/*
源码
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
*/

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  a?: string;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Study Rust',
  completed: true,
};

// 如果挑选的是一个可选属性，则新的类型也是必填
type TodoPreview1 = Pick<Todo, 'a'>;
const todo1: TodoPreview1 = {
  a: '1', // 此处必有a, 否则就报错
};
console.log(todo1);
export default todo;
