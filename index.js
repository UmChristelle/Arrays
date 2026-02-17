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
