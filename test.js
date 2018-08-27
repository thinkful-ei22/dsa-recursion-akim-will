'use strict';
// function iceCream(){ 
//   console.log('Jerry');
// }

// iceCream();

//Counting Sheep

// function sheepCount(number){

//     if(number === 0){
//         return;
//     }
//     console.log(` ${number} - Another sheep jump over the fence`);
//     sheepCount(number-1);
// }

// sheepCount(3);

//Array Double

// function arrayDoubler(arr){

//   if(arr.length === 0)
//     return [];
    
//   else{ 
//       let newArr = [];
//     newArr = [2 * arr[0], ...arrayDoubler(arr.slice(1))];
//     return newArr;
//   }
// }

//console.log(arrayDoubler([2, 18, 52, 31]));


//REVERSE STRING

// function stringReverser(str){
//   if(str=== ''){ 
//     return '';
//   }
//   else{ 
//     let newStr = '';
//     newStr = newStr + str.charAt(str.length - 1);

//     return newStr + stringReverser(str.slice(0, str.length-1));
//     //return str.charAt(str.length-1) + stringReverser(arr.pop());
//   }
// }
// console.log(stringReverser('Caterpiller'));


// const str = 'Caterpiller';
// console.log(str.slice(0, str.length-1));

// function reverseString(str) {
//     if (str === "") // This is the terminal case that will end the recursion
//       return "";
    
//     else
//       return reverseString(str.substr(1)) + str.charAt(0);
// }
// console.log(reverseString('Caterpiller'));

// const str = 'Hello';
// const new1 = str.split('');
// console.log(new1[new1.length-1]);









//ANAGRAM

// function anagram(word){
// if(word.length === 0)
// return ""
// let permutations = [];
// else
// permutations.push(word[-1])
// }

