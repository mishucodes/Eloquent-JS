//01. Some: returns true if any element passes the given test (function), i.e., return true:
let employees = ['john', 'adam', 'bob', 'henry', 'harry'];
console.log(employees.some((element) => element == 'henry'));
console.log(employees.some((element) => element == 'george'));

//02. Find: finds & returns the element in the array that passes the given test (function), i.e., return true:
console.log(employees.find((el) => el == 'adam'));
console.log(employees.find((el) => el == 'adolf')); //undefined...

//03. findIndex: ibid, but returns the index of the element:
console.log(employees.findIndex((el) => el == 'adam'));
console.log(employees.findIndex((el) => el == 'adolf')); //-1...