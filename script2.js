// 2.Do the below programs in arrow functions.

    // a.Print odd numbers in an array



let aa = [2,1,3,5,4,6,7,9];

let rn = [];

let bz = aa.filter(a=>{

  if(a%2!==0){
    return rn.push(a);
  }

})
console.log(rn);



  // b.Convert all the strings to title caps in a string array:




let stg = "convert all the string to title caps";

let next = (stg)=>{

  stg = stg.toLowerCase().split(' ');
  for(var i=0;i<stg.length;i++){
    stg[i]=stg[i].charAt(0).toUpperCase()+stg[i].slice(1);
   }
   return stg.join(' ');
}
console.log(next(stg));


/*

var str="my name is ayesha";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));

*/





  // c.Sum of all numbers in an array


const sumal = [23,45,34,21,78];
let sum1 = 0;

let sumfinal = sumal.map(suma=>{

    sum1 = sum1+suma;

  return sum1;

})
console.log(sum1);


/*
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let ghi=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(ghi(a));

 */


// d.Return all the prime numbers in an array:


let prm = (primenum)=>{

  {
    if (primenum <= 1) {
      return false;
    } else {
      for (let i = 2; i < primenum; i++) {
        if (primenum % i == 0) {
          return false;
        }
      }
      return true;
    }
  }

}
console.log("prime or not");
console.log(prm([5]))





// e.Return all the palindromes in an array:



// function palin(arr){
//   var res = [];
//    for(var i=0;i<arr.length;i++){
//      var fin = arr[i].split('').reverse().join('');
//      if(fin===arr[i]){
//        res.push(arr[i])
//      }
//    }
//    return res;
//   }

//  console.log(palin(["madam","world"]));



// function palinrome(names)=>{

//   var finals = [];
//   for(var i=0;i<names.length;i++){
    
 
//     let main = names[i].split('').reverse().join('');
//     if(main === names[i]){
//       finals.push(names[i]);
//     }

//   }
// return finals;
// }
// console.log(palinrome['mom','viiv','dad']);



const arr = ['mom', 'dad', 'abcde', 'momom','class','world'];

function namePalindrome(arr) {
  return arr.filter((curr) => {
    const splitArr = curr.split('');
    const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
    if (curr === reversedString) return curr;
  })
}

console.log(namePalindrome(arr));