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
// Exercises 9 : Flattening Arrays (flat)
const nestedList = [1, [2, 3], [4, [5, 6]], 7];
//a
console.log(nestedList.flat());
//b
console.log(nestedList.flat(Infinity));
//section D
// Exercises 10: Mapping Data (map)
const pricesUSDs = [10.50, 20.00, 5.25];
const exchangeRate = 1.3;
//a
const localPrices = pricesUSDs.map(price => price * exchangeRate);
console.log(localPrices);
//b
const priceStrings = pricesUSDs.map(price => `Item price: $${price.toFixed(2)}`);
console.log(priceStrings);
// Exercises 11 : Filtering Data (filter)
const testScores = [45, 78, 92, 30, 65, 88];
//a
const passing = testScores.filter(score => score >= 70);
console.log(passing);
//b
const average = testScores.reduce((sum, score) => sum + score, 0) / testScores.length;
const belowAverage = testScores.filter(score => score < average);
console.log(belowAverage);
//Exercises 12 : Aggregating Data (reduce)
let pricesUSD = [10.50, 20.00, 5.25];
// a
const totalCost = pricesUSD.reduce((total, price) => {
  return total + price;
}, 0);
console.log("Total Cost:", totalCost);
// b
const maxPrice = pricesUSD.reduce((max, price) => {
  return price > max ? price : max;
}, pricesUSD[0]);
console.log("Maximum Price:", maxPrice);
// c
const countGreaterThan15 = pricesUSD.reduce((count, price) => {
  return price > 15 ? count + 1 : count;
}, 0);
console.log("Prices greater than $15:", countGreaterThan15);
//Section E
//Exercises 13 : sorting objects
let users = [
  { name: "Zoe", age: 30 },
  { name: "Adam", age: 25 },
  { name: "Charlie", age: 30 }
];
//a
let sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log(sortedByAge);
//b
let sortedByAgeThenName = [...users].sort((a, b) => a.age - b.age || a.name.localeCompare(b.name));
console.log(sortedByAgeThenName);
//Exercises 14 : mapping and filtering objects
const userss = [
  { name: "Zoe", age: 30 },
  { name: "Adam", age: 25 },
  { name: "Charlie", age: 30 }
];
//a 
const names = userss.map(user => user.name);
console.log(names);
//b
const olderThan28 = userss.filter(user => user.age > 28);
console.log(olderThan28);
// Exercises 15 : creating  and Acessing a matrix
//a
let gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
//b
gameBoard[1][1] = 1;
//c
console.log(gameBoard[0][2]);
// Exercises 16 Looping Through a Matrix
let sum = 0;

for (let a = 0; a < gameBoard.length; a++) { //a
  for (let b = 0; b < gameBoard[a].length; b++) { //b
    console.log(gameBoard[a][b]);
    sum += gameBoard[a][b];
  }
}

console.log("Sum of all elements:", sum);

//project 1 : Student Result System
const students = [
  { name: "A", score: 85 },
  { name: "B", score: 45 },
  { name: "C", score: 92 },
  { name: "D", score: 68 }
];
//a
const passed = students.filter(s => s.score >= 70);
console.log(passed);
//b
const aver = students.reduce((sum, s) => sum + s.score, 0) / students.length;
console.log(aver);
//c
const topScorer = students.reduce((top, s) => s.score > top.score ? s : top, students[0]);
console.log(topScorer);
// project 2 : Shopping Cart Management
let cart = [
  { id: 1, name: "Shirt", price: 20, quantity: 2 },
  { id: 2, name: "Pants", price: 50, quantity: 1 }
];
//a
const totalCosts = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log(totalCosts);
//b
cart = cart.map(item => item.id === 1 ? { ...item, quantity: 3 } : item);
console.log(cart);
//c
cart = cart.filter(item => item.id !== 2);
console.log(cart);
