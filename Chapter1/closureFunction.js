/* Closure Example */
const pet = function(name){
   //the outer funtion defines a vairable called "name"
   
   const getName = function(){
       //The inner function has access to the "name" variable of the outer function
       return name;
   }     
   return getName; // Return the inner function, thereby exposing it to outer scopes
}

const myPet = pet('Vive');

  myPet(); //Return "Vive"
  
 
  //Or
  
  const getCode = (function() {
      const apiCode = '0]Eal(eh&2';
      // A code we do not want outsiders to be able to modify
      
      return function() {
        return apiCode;
      };
  })();
  
  getCode(); //Returns the apiCode
  
  
  // Example name conflict
  
  const createPet = function(name){
     //The outer function defines a variable called "name".
     
     return {
        setName(name){
           //The enclosed function also defines a variable called "name".
           
           name = name;
        // "name" defined by the outer function.
        }
     }
  }
