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
console.log(countCountries(resultNum)); // Output: 5



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
console.log(countNum()); // Output: 15


// 4 Exercise:

// 5 Exercise:

// 6 Exercise:

// 7 Exercise:

// 8 Exercise:

// Bonus Exercise: