//nested functions

function addSquares(a, b){
  function square(x){
    return x * x;
  }
  
   return square(a) + square(b);
}

const a = addSquare(2, 3); // returns 13
const b = addSquare(3, 4); // returns 25
const c = addSquare(4, 5); // returns 41

//inner function forms a closure

//
function outside(x){
  function inside(y){
     return x + y;
  }
  return inside;

}

const fnInside = outside(3); // give me a function that adds 3 to whatever you give it
const result = fnInside(5); // return 8
const result1 = outside(3)(5); // return 8
