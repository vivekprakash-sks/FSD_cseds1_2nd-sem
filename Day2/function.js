function add(a, b) { //1.with function key word
    return (a + b);
}
console.log(add(3, 4));
//2. arrow function
const addFun = (a, b) => {
    return (a + b)
}
console.log(addFun(7, 5));
//3.anonymous function
(() => console.log("hey"))();
(function greet() {
    console.log("hello");
})();