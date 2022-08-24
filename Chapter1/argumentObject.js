/* argument object */

function myConcat(separator){
   let result = ''; // intialize list
     // iterate through arguments
    for(let i = 1; i < arguments.length; i++){
       result += arguments[i] + separator;
    }
    return result;
}

//return "red, orange, blue, "
myConcat(', ', 'red', 'orange', 'blue');

//returns "elephant; giraffe; lion; cheetah; "
myConcat('; ',  'elephant', 'giraffe', 'lion', 'cheetah');

//returns "sage. basil. oregano. pepper. parsley."
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');

