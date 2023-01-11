// A for loop is typically used when the number 
// of iterations that a loop needs to perform is 
// known before the loop starts, while a while loop 
// is used when the number of iterations is not 
// known before the loop begins, or when you need 
// to repeatedly execute a block of code as long as
// a certain condition is true.So, you would use a 
// for loop when you have a fixed number of 
// iterations and a while loop when you have a 
// variable number of iterations or a condition - 
// controlled loop.

// ARRAYS and LOOPS

// Array example - types of cars
let cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
console.log("length of array -", cars.length); // 4
console.log("first car in array", cars[0]); // Ford

// loop through array and log each car
for (let i = 0; i < cars.length + 1; i++) {
    console.log(cars[i]);
}

console.log("last car in array", cars[cars.length - 1]); // Toyota

// while loop for dynamic data

let professions = ["doctor", "lawyer", "teacher", 
"programmer", "nurse", "firefighter", "police officer"];

let i = 0;

while (i < professions.length) {
    console.log(professions[i]);
    i++;
}

// list every 3rd number between 1-20 and log to console
for (let i = 1; i < 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}