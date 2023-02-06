// 从某一个类型中排除掉某个属性
// 源码
// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
  a?: string;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};

// 排除description元素，并且把所有的属性都必填
type RequiredTodoPreview = Omit<Required<Todo>, 'description'>;
const todo1: RequiredTodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
  a: '必填',
};

console.log(todo1);
export default todo;
