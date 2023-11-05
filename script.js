// 1. Do the below programs in anonymous function & IIFE


      // a.Print odd numbers in an array in anonymous function:

 
  
  let b = [];
  
  var first = function (array) {

 for(var i=0;i<array.length;i++)
 {
  if(array[i]%2!==0){

    b.push(array[i]);
    
  }
 }
 return b;
  }; console.log(first([2,3,5,7,8,6,9,23]));

  

      //  a.Print odd numbers in an array in IIFE function:



  let b1 = [];
  
  (function (array) {

 for(var i=0;i<array.length;i++)
 {
  if(array[i]%2!==0){

    b1.push(array[i]);
    
  }
 }
 console.log(b1);
  })([2,3,6,7,8,9,12,13,79])



// --------------------------------------------------------------------------


      // b.Convert all the strings to title caps in a string array in anonymous function.

    

     let strings = function(str){
     str = str.toLowerCase().split(' ');
     for(var i=0;i<str.length;i++){
      str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
     }
     return str.join(' ');
      
     } 
     console.log(strings("convert all the string to title caps"));




     function titl(name){

    var stringto = name.toString();
    var next = stringto.toLowerCase().split(' ');
    for(var i=0;i<next.length;i++){
      next[i]=next[i].charAt(0).toUpperCase()+next[i].slice(1);
     }
     return next.join(' ');


     }
     console.log(titl(["SRF hk FhjhTYvbN Gijhj UHJBJ"]));





       // b.Convert all the strings to title caps in a string array in IIFE function.


    (function(str){
      str1 = str1.toLowerCase().split(' ');
      for(var i=0;i<str.length;i++){
       str1[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
      }
      return str1.join(' ');
       
      } )
      console.log(("convert all the string to title caps"));


 // -----------------------------------------------------------------------------


      // c.Sum of all numbers in an array in anonymous function.

        var sumallnum = [2,3,4,5,6,7,8,9,1];
        
        let sum = function(sumallnum) 
       {
            let sum1 = 0;
          for(var i=0;i<sumallnum.length;i++) {
         
         sum1 = sum1 + sumallnum[i];

        }
         return sum1;
        }
        console.log((sum(sumallnum)));


       // c.Sum of all numbers in an array in IIFE function.

        
       let sum4 = [2,34,5,43,2,62,12];
       (function(sum4){
            let value = 0;
          for(var i=0;i<sum4.length;i++) {
         
         value = value + sum4[i];

        }
        console.log(value);
        })(sum4);

// ---------------------------------------------------------------------------


      // d.Return all the prime numbers in an array using anonymous function:



      function checkPrime(number) {
        if (number <= 1) {
          return false;
        } else {
          for (let i = 2; i < number; i++) {
            if (number % i == 0) {
              return false;
            }
          }
          return true;
        }
      }
      console.log(checkPrime(5));




      // d.Return all the prime numbers in an array using IIFE function:



     
      (function(number) {
        if (number <= 1) {
          return false;
        } else {
          for (let i = 2; i < number; i++) {
            if (number % i == 0) {
              return false;
            }
          }
          console.log(true);
        }
      })
      (5);



  //-----------------------------------------------------------------------------
  
  
  // e.Return all the palindromes in an array using anonymous function:

      let x = "madam";

      let isPal = function(x) {
     return x === x.split('').reverse().join('')
       } 
       console.log(isPal(x));




       function palin(arr){
       var res = [];
        for(var i=0;i<arr.length;i++){
          var fin = arr[i].split('').reverse().join('');
          if(fin===arr[i]){
            res.push(arr[i])
          }
        }
        return res;
       }

      console.log(palin(["madam","world"]));

    
 // e.Return all the palindromes in an array using IIFE function:


      let xx = "madu";

      (function(x) {
        console.log(xx === xx.split('').reverse().join(''));
       } )(xx);




// --------------------------------------------------------------------------------------



    //  a.Return median of two sorted arrays of the same size using anonymous function:


    

    // let midval =  function(arr1,arr2){

    //  let arr3=[...arr1,...arr2];
    //  arr3.sort((a,b)=>{
  

    // })

    // }
    // console.log(midval())



    // h. Rotate an array by k times using anonymous function:


    

    










   // h. Rotate an array by k times using IIFE function:



    let arrr=[1,2,3,4,5];
    let k = 3;

    (function(arrr,k){
         for(var i=0;i<k.length;i++){
          arrr.push(arrr[i])

         }
         for(var i=0;i<k.length;i++){
      arrr.shift()

         }
   console.log(arrr);
    })("rotate arry" +" "+ arrr,k);