'use strict';

// Complete this algo
const minJumps = arr => {
    console.log('ARRAY',arr)
 if(arr.length<2){
     return 0
 } else {
     let resultArray = []

 for(let i =arr[0]; i>0;i--){
     console.log('In the for loop', i)
  resultArray.push(1+ minJumps(arr.slice(i)))
 }
 console.log('after result array', resultArray)
return Math.min(...resultArray)
 }

};

module.exports = minJumps
