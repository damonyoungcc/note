// return a type that represents all subsets of a given type.
// 返回一个类型的子集，除了这个类型的各个属性外，不可有其他属性，属性可以缺失
/*
源码
type Partial<T> = {
    [P in keyof T]?: T[P];
};
*/

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  // 这里是Todo类型的子集
  description: 'throw out trash',
});

export default todo2;
