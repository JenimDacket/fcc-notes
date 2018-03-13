/*This is a tutorial for various things learned on the FCC front end dev class*/

//ARRAY.MAP: make an instance of original array and apply an anonymous function across all elements in array
var arr = [1,2,3,4,5];
var new_arr = arr.map(function(val){return val*3;});
new_arr;
>>>[3,6,9,12,15];


//ARRAY.REDUCE: reduce an array down to one value by applying an anonymous function across each value of original array
var arr = [1,2,3,4,5];
var singleVal = arr.reduce(function(currentVal, previousVal){return currentVal + previousVal;});
singleVal;
>>>15;

//ARRAY.FILTER: filter the values in an array that do not pass a conditional logic statement
var arr = [1,2,3,4,5,6,7,8];
var new_arr = arr.filter(function(val){return val <= 5;});
new_arr;
>>>[1,2,3,4,5];

