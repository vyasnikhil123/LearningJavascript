/* Fibonacci series */

const num = 200;

let x = 0;
let y = 1;

let fn = x + y;
console.log(x);

while(fn < num){
    debugger
    console.log(fn);
    fn = x + y;
    x = y;
    y = fn;
}
