// Constructs a type with all properties of Type set to readonly
/*
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
*/

interface Todo {
  title: string;
  name?: string;
}

// 此时todo的类型只能有title
const todo: Readonly<Todo> = {
  title: 'hello TS',
};

// todo.title = "hello RUST"  重新对title赋值会报错

export default todo;
