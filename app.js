// 1 Exercise 'Array Length':
// Create a function that counts the number of countries in the array and returns the count.
function countCountries(exerciseArray) {
   
   let countNum = 0; 
   for (let i = 0; exerciseArray[i] !== undefined; i++) {
      countNum++;
   }
   return countNum;
}

console.log(countCountries(["Spain", "France", "Italy", "Germany", "Portugal"]));
// Output: 5

// ******************
// 2 Exercise 'Print Elements with Index':
// Create a function that prints the array items with their corresponding index number.
function nameP(newArray) {
    
    let index = 0;
    while (newArray[index] !== undefined) {
        console.log(index + "." + newArray[index]);
        index++;
    }
}
let newArray = ["John", "Jane", "Doe", "Mary", "Smith"];
nameP(newArray); 
// Output: 0.John 1.Jane 2.Doe 3.Mary 4.Smith      


// ******************
// 3 Exercise 'Sum of Numbers':
// Create a function that sums all the numbers in an array and returns the result.

function sumArray(array) {
    let sum = 0;
    let i = 0;
    do {
        sum += array[i];
        i ++;   

    } while (i < array.length);

    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); 
// Output: 15




// 4 Exercise 'Find the Largest Number':
// Create a function that finds the largest number in an array and returns it.

function compareMount(mountArray) {
    let largest = mountArray[0][1];
    let num = 0;
    for (i = 1; i < mountArray.length; i++) {
       num = mountArray[i][1];  
          if (num > largest) {
                largest = num;
          }
    }
    // Return the final result after loop finished
    return largest;
}
let mountArray = [
    ["Makalu", 8485],
    ["K2", 8611],
    ["Kangchenjunga", 8586],
    ["Lhotse", 8516],
    ["Cho Oyu", 8188],
    ["Mount Everest", 8849],
    ["Dhaulagiri", 8167],
    ["Manaslu", 8163],
    ["Nanga Parbat", 8126],
];

console.log("The largest mount height is " + compareMount(mountArray) + " meters."); 
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


// 6 Exercise 'Count a Value':
// Create a function that counts the number of times a value appears in an array and returns the count.
function x(valueX, arrayX) {
    let item = "";
    let countX = 0;
    for (let j = 0; j < arrayX.length; j++ ) {
        item = arrayX[j];
        if (item === valueX) {
            countX++;
        } else {
            continue;
        }
    }
    return countX;
}
let valueX = "blue";
let arrayX = ["blue", "red", "green", "blue", "yellow", "blue", "red"];
console.log(x(valueX, arrayX)); 
// Output: 3


// 7 Exercise 'String Loop':
// Create a function that prints each character of a string on a new line.
function strPrint(str) {

    let index = 0;
    while (index < str.length) {
        console.log(str[index]);
        index++;
    }
}
let str = "This string was printed using a loop.";
strPrint(str);
// Output: T h i s   s t r i n g   w a s   p r i n t e d   u s i n g   a   l o o p .


// 8 Exercise 'Pattern Printing':
// Create a function that prints a pattern of asterisks. 
// The function should take a number as an argument and print that many lines of asterisks, 
// with each line having one more asterisk than the previous one.
function pattPr(n) {
    let patt = "*";
    for (let i = 1; i <= n; i++) {
        console.log(patt);
        patt += "*";   
    }
}
let n = 4;
pattPr(n);
// Output: * ** *** ****

// Bonus Exercise:
// Exercise 8 with While loop:
function pattPr(y) {
    let patt = "*";
    let i = 1;
    while (i <= y) {
        console.log(patt);
        i++;
        patt = "*".repeat(i); 
    }
}
let y = 3;
pattPr(y);
// Output: * ** ***