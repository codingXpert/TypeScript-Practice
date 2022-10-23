// export{}; // export is used to solve duplicate identifier issue
import sLogin from './Student';
import tLogin from './Teacher';

let teacher = new tLogin();
console.log(teacher.data);

let student = new sLogin();
console.log(student.data)