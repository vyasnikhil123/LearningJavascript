/* recusive funtion */

function loop(x){
   // "x >= 10" is the exit condtion or "!(x < 10)"
   
   if(x >= 10){
      return;
   }
   
   //do stuff;
   loop(x+1); // recusive call
}

loop(0);

//Or

function walkTree(node){
     if(node === null){
        return;
     }
     
     //do something with node
     for(let i = 0; i < node.childNodes.length; i++){
        walkTree(node.childNodes[i]);
     }
}


// recursion uses stack

function foo(i){
   if(i < 0){
      return;
   }
   console.log('begin: ' + i);
   foo(i - 1);
   console.log('end: ' + i);
}

 foo(3);
 o/p -  begin: 3 begin: 2 begin: 1 begin: 0
        end: 0 end: 1 end: 2 end: 3



