//Exercises 1:Array initialisation and property Acess
const productCategories = [ "Books","Electronics", "Clothing", "home & Kitchen", "Toys & Games"];
//a
console.log(productCategories[0]);
//b
console.log(productCategories[productCategories.length - 1]);
//c
console.log(productCategories.length);
//d
productCategories[1] = "pen";
//e
console.log(productCategories);

//exercise 2 :  Mutator Methods (push, pop, shift, unshift, splice)
let inventory = [10, 20, 30];
//a
inventory.push(40);
console.log(inventory);
//b
inventory.pop();
console.log(inventory);
//c
inventory.unshift(0);
console.log(inventory);
//d
inventory.shift();
console.log(inventory);
//e
inventory.splice(1, 1, 25, 35);
console.log(inventory);
//Exercise 3 : shallow copying and reference types
//a
const originalScores = [90, 85, 78];
//b
const referenceCopy = originalScores;
console.log(referenceCopy);
//c
referenceCopy[0] = 100;
console.log(originalScores);
console.log(referenceCopy);
//d
const spreadCopy = [...originalScores];
//e
spreadCopy[spreadCopy.length - 1] = 50;
console.log(originalScores);
console.log(spreadCopy);
// section B searching &checking
//exercises 4 :Finding Elements by Value and Index
const studentNames = ["Alice", "Bob", "Charlie", "Alice", "David"];
//a
console.log(studentNames.indexOf("Alice"));
//b
console.log(studentNames.lastIndexOf("Alice"));
//c
console.log(studentNames.includes("Charlie"));
//d
console.log(studentNames.includes("Eve"));
//Exercises 5 : Advanced Search with Conditionals (find, findIndex)
const products = [
  { id: 1, name: "Laptop", price: 999},
  { id: 2, name: "smartphone", price: 499 },
  { id: 3, name: "tablet", price: 299 },
  { id: 4, name: "Headphones", price: 199 }
];
//a
let foundproduct = products.find(product => product.id === 2);
console.log(foundproduct);
//b
 let foundindex = products.findIndex(product => product.price > 1000)
console.log(foundindex);
//Exercise 6  Checking Array Integrity (some, every)
const userAges = [18, 24, 33, 16, 40];
//a
console.log(userAges.some(age => age < 18));
//b
console.log(userAges.every(age => age >= 18));
//c
console.log(userAges.some(age => age % 5 === 0));
//Exercises 7 : Sorting and Reversing

let dataPoints = [42, 10, 500, 2, 77];
//a
let ascending = [...dataPoints].sort((a, b) => a - b);
console.log(ascending);
//b
let descending = [...dataPoints].sort((a, b) => b - a);
console.log(descending);
//c
dataPoints.reverse();
console.log(dataPoints);
//Exercises 8: Concatenation, Joining, and Slicing
const arr1 = ["A", "B"];
const arr2 = ["C", "D"];
const sentenceParts = ["Hello", "world", "this", "is", "great"];
//a
console.log(arr1.concat(arr2));
//b
console.log(sentenceParts.join(" "));
//c
console.log(sentenceParts.slice(1, 4));
