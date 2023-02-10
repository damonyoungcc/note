function Student(props) {
  this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
  alert('Hello, ' + this.name + '!');
};

function PrimaryStudent(props) {
  // 调用Student构造函数，绑定this变量:
  Student.call(this, props);
  this.grade = props.grade || 1;
}

function F() {}

F.prototype = Student.prototype;
PrimaryStudent.prototype = new F();
PrimaryStudent.prototype.construct = PrimaryStudent;

PrimaryStudent.prototype.getGrade = function () {
  return this.grade;
};

let xiaoming = new PrimaryStudent({
  name: '小明',
  grade: 2,
});
console.log(xiaoming.name);
console.log(xiaoming.grade);
console.log(xiaoming.__proto__ === PrimaryStudent.prototype);
console.log(PrimaryStudent.prototype.__proto__ === Student.prototype);

console.log(xiaoming instanceof PrimaryStudent);
console.log(xiaoming instanceof Student);
console.log(PrimaryStudent.prototype.isPrototypeOf(xiaoming));
