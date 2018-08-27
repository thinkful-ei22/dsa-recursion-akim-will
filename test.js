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

//Triangles

function findTriangle(num, increment = 1, results= []){

  if(increment === num){
    return 0;
  }
  if(results.length === 0){
    increment++;
    return results.push(1);
  }
  else {
      increment++;
    results.push(results.length);
  }

}


//SPLIT 
// if (str === char) {
//     return "";
//   }
//   if (str.length === 0) {
//     results.push(newString);
//     return results;
//   }
//   if (str[0] === char) {
//     results.push(newString);
//     newString = "";
//     return splitString(str.slice(1), char, newString, results);
//   } else {
//     newString += str[0];
//     return splitString(str.slice(1), char, newString, results);
//   }
// }

//console.log(splitString("Welcome to Jumanji World", "o"));```
//   if(i === num)
//     return 0;

//   else{
//     let input = 1;
//     let increment = 1;
     
//     increment = increment + 1;
     
//     return  increment + findTriangle( input + increment, i + 1);
//   }
// }
//console.log(findTriangle(17));




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


//Split and Separate


// function splitAndSeparate(str, char){
//   if(str){
   
//   } else{
    
//     return newArr;
//   }

// }
// //let newArr =  [str.charAt(0), ...splitAndSeparate(str.slice(1), char)];

// console.log(splitAndSeparate('Jumanji', '&'));


//FACTORIAL

// function factorial(num){
//   if(num === 1){
//     return 1;
    
//   }
//   else{
//     return num * factorial(num - 1);
//   }
// }

// console.log(factorial(4));

//FIBONACCI

function fibonacciGo(num, results){

  if(num === 0){
    return;
  }

  if(num === 1){ 
    return [0,1]; 
  }

  //let start = [ 1, 1, 2];
  else {
    results = fibonacciGo(num - 1);
    let newNum = ((results[results.length -1] + results[results.length -2])); 
    results.push(newNum);
    return results;
  }

}


// console.log(fibonacciGo(8));






//ANAGRAM

// function anagram(word){
// if(word.length === 0)
// return ""
// let permutations = [];
// else
// permutations.push(word[-1])
// }

