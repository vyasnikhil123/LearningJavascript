/* Find second lowest and second largest in an array */

function Second_Greatest_Lowest(arr_num)
{
   arr_num.sort(function(x, y){
        return x-y;
   });
   var uniqa = [arr_num[0]];
   var result = [];
   
   for(var j = 1; j < arr_num.length; j++)
   {
      if(arr_num[j-1] !== arr_num[j])
      {
         uniqa.push(arr_num[j]);
      }
   }
     result.push(uniqa[1], uniqa[uniqa.length - 2]);
    return result.join(',');
}

 console.log(Second_Greatest_Lowest([1,2,3,4,5]));
 
           //Or
  
 const secondLowest = arr => arr.sort((a,b) => a-b)[1];
 const secondLargest = arr => arr.sort((a,b) => b-a)[1];
  
 let arr = [1, 2, 3, 4, 5];
 
 console.log('second lowest', secondLowest(arr));
 console.log('second greatest', secondLargest(arr));
  //Or
 console.log(`second lowest: ${secondLowest(arr)}\n Second largest: ${secondLargest(arr)}`)
 
 
 
 
