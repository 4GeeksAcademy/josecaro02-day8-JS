//                0          1        2
//let myArray = ["Apple", "Orange", "Donkey"];
// Modificar elmentos del arreglo
//myArray[1] = "Banana";
//console.log(myArray);

// Agregar elementos al arreglo
//myArray.push("Dog");
//console.log(myArray);

//Eliminar elementos del array
//myArray.pop();
//myArray.pop();
//console.log(myArray);

//Añadir elementos al inicio del array
//myArray.unshift("Banana");
//console.log(myArray);

//Eliminar elementos al inicio del array
/*
console.log(myArray);
myArray.shift();
console.log(myArray);
*/

//Iteracion arrray
//for (let i = 0; i < myArray.length; i++)console.log(myArray[i]);

//Iteracion con for in
//for (let index in myArray) console.log(myArray[index]);

//Slice
//        0  1    2    3    4   5   6   7   8   9     length=10
//let y = [14, 3, 3245, 234, 52, 345, 3, 45, 23, 77];
//let new_y = y.slice(2, 7);   => return [3245, 234, 52, 345, 3]
//console.log(y);
//console.log(new_y);

//Splice
//        0  1    2    3    4   5   6   7   8   9     length=10
/*
let y = [14, 3, 3245, 234, 52, 345, 3, 45, 23, 77];
y.splice(6, 1);
console.log(y);
*/

//Sort
/* let myArray = [100, 50, 25];
console.log(myArray.sort()); */

//While
/* let i = 0;
let myArray = ["Apple", "Orange", "Donkey"];
while (i < myArray.length) {
  console.log(myArray[i]);
  i++;
}
 */

//do while
/* 
let myArray = ["Apple", "Orange", "Donkey"];
let i = 0;
do {
  console.log(myArray[i]);
  i++;
} while (i < myArray.length);
 */

// for inside for
//                   0        1          2      length = 3
let firstArray = ["Apple", "Orange", "Donkey"];
//                 0   1   2      length = 3
let secondArray = [2, 85, 96];

for (let i = 0; i < firstArray.length; i++) {
  for (let j = 0; j < secondArray.length; j++) {
    console.log(
      "i " + i + ", j " + j + ": " + firstArray[i] + " - " + secondArray[j]
    );
  }
}
console.log("Fin de los ciclos anidados");
// primer for se termina cuando i >= 3
//segundo for se termina cuando j >= 3
/* i = 0 j = 0
i = 0 j = 1
i = 0 j = 2
//i = 0 j = 3
i = 1 j = 0 */
