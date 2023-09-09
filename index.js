const {dept, Department } = require('./company');

console.log("I am working!");


console.log(dept);

let department = new Department("hr", 200, "proton");
console.log(department);
console.log(JSON.stringify(department))
department.display();




