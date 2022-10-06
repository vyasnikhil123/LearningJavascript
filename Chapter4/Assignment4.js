function lcm_more_than_two_numbers(input_array){
      if(toString.call(input_array) !== "[object Array]")
           return false;
      var r1 = 0, r2 = 0;
      var l = input_array.length;
      for(var i = 0; i < l; i++){
         r1= input_array[i] % input_array[i + 1];
         if(r1 === 0){
              input_array[i + 1] = (input_array[i] * input_array[i+1] / input_array[i + 1]);
         }
         else {
            r2 = input_array[i + 1] % r1;
            if(r2 === 0){
                input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r1;
            }
            else {
                input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r2;
            }
         }
      }
      return input_array[l - 1];   
}

console.log(lcm_more_than_two_numbers([100, 90, 80, 7]));
console.log(lcm_more_than_two_numbers([5, 10, 15, 25]));



/*
function lcm_two_numbers(x, y){
   if((typeof x !== 'number') || (typeof y !== 'number'))
     return false;
   return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x,y));  
}

function gcd_two_numbers(x, y){
    x = Math.abs(x);
    y = Math.abs(y);
    while(y){
       var t = y;
       y = x % y;
       x = t;
    }
    return x;
}
console.log(lcm_two_numbers(100, 90, 80, 7));
console.log(lcm_two_numbers(5, 10,15, 25));
*/

