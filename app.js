// 1 Exercise 'Array Length':
// Create a function that counts the number of countries in the array and returns the count.
// Define the variable inside the function.
function countCountries() {
   let exerciseArray = ["Spain", "France", "Italy", "Germany", "Portugal"];
   let countNum = 0; 
   for (let i = 0; exerciseArray[i] !== undefined; i++) {
      countNum++;
   }
   return countNum;
}
// Define the variable outside the function. Call the function, initialize reterned value to our variable
//  and log the result to the console.
let resultNum = 0;
console.log(countCountries(resultNum)); 
// Output: 5


// ******************
// 2 Exercise 'Print Elements with Index':
// Create a function that prints the array items with their corresponding index number.
function nameP() {
    let newArray = ["John", "Jane", "Doe", "Mary", "Smith"];
    let index = 0;
    while (newArray[index] !== undefined) {
        console.log(index + "." + newArray[index]);
        index++;
    }
}
nameP(); 
// Output: 0.John 1.Jane 2.Doe 3.Mary 4.Smith      


// ******************
// 3 Exercise 'Sum of Numbers':
// Create a function that sums all the numbers in an array and returns the result.
let numArray = [1, 2, 3, 4, 5];
let count = 0;

function countNum() {
    let i = 0;
    do {
        count += numArray[i];
        i ++;   

    } while (i < numArray.length);

    return count;
}
console.log(countNum()); 
// Output: 15


// 4 Exercise 'Find the Largest Number':
// Create a function that finds the largest number in an array and returns it.
let mountArray = [
    ["Makalu", 8485],
    ["Mount Everest", 8849],
    ["K2", 8611],
    ["Kangchenjunga", 8586],
    ["Lhotse", 8516],
    ["Cho Oyu", 8188],
    ["Dhaulagiri", 8167],
    ["Manaslu", 8163],
    ["Nanga Parbat", 8126],
];

let largestMount = []; 
let mountCount = mountArray.length;

function compareMount() {
    let index = 0;
    let num1 = 0;
    let num2 = 0;
    while (index < mountCount) {
       num1 = mountArray[index][1]; 
       index++;
       num2 = mountArray[index][1];
       
          if (num1 < num2) {
             return largestMount = num2;
          } else {
              return largestMount = num1;
         }
        }
}
console.log("The largest mount height is " + compareMount() + " meters."); 
// Output: The largest mount height is 8849 meters.


// 5 Exercise 'Reverse an Array':
// Create a function that reverses an array and returns the reversed array.
function reverseArray() {
    let array1 = ["a", "b", "c", "d", "e"];
    let reversedArray = [];
    for (let i = array1.length - 1; i >= 0; i--) {
        reversedArray[reversedArray.length] = array1[i];
    }
    return reversedArray;
}
console.log(reverseArray()); 
// Output: ["e", "d", "c", "b", "a"]


// 6 Exercise:

// 7 Exercise:

// 8 Exercise:

// Bonus Exercise: