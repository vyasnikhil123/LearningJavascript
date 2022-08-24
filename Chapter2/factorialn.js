/* Factorial of n */

function fact(n){
   if(n === 0)
       return 1;
   else    
       return n * fact(n - 1);
}

  let num = 5;
  let result = fact(num);
  console.log(result);
  
  // Or
  
const factorial = (n) => {
   if(n === 0)
      return 1;
   else
      return n * factorial(n -1);
} 
console.log(factorial(10));
