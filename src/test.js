/* function showFruits(value, indice, array) {
  return value * 2;
} */

//               0        1           2        3      length = 4
let fruits = ["Apple", "Banana", "Coconut", "Orange"];

//let resultForEach = fruits.forEach(showFruits);
// Arrow function ()=>{}
/* fruits.forEach((element, index, array) => {
  console.log(element + ", " + index);
  console.log(array);
}); */

//let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Map senciollo
//let mapResult = nums.map((n) => n * 2);

// Map con ternario
//                              condition      true    false
//let mapResult = nums.map((n) => (n % 2 == 0 ? n * 2 : n * 5));
//console.log(mapResult);

//              0   1   2   3   4    5     6    length = 7
let bigNums = [10, 20, 35, 75, 100, 150, 235];

/* //                                valores  indices arrayCompleto
let resultFilter = bigNums.filter((value, index) => index > 3); // [100, 150, 235]

let resultFilterValues = bigNums.filter((value) => {
  return value < 100; // [10, 20, 35, 75]
}); */

let resultFind = bigNums.find((value) => value > 75);

console.log(resultFind);

/*
//Ternary
if (5 > 4){
  alert('hola')
} else{
  alert('Chao')
}

5>4 ? alert('hola'): alert('Chao')
*/
