// 1. Write a function to add two numbers together, using ES5 syntax (functional
// declaration, the main way we have shown to write functions so far).

function addTwoNumbers(number1, number2) {
  const add = number1 + number2;
  console.log(add);
}

addTwoNumbers(7, 17);

// 2. Create a function that takes in a number as a parameter and prints the
// square of that number.
function squareNumber(number1) {
  const double = number1 * number1;
  console.log(double);
}
squareNumber(6);

// 3. Write a function to divide two numbers.
function divideTwoNumbers(number1, number2) {
  const halve = number1 / number2;
  console.log(halve);
}
divideTwoNumbers(12, 6);

// 4. Write a function that multiplies two numbers. Invoke the function.
function multiplyTwoNumbers(number1, number2) {
  const times = number1 * number2;
  console.log(times);
}
multiplyTwoNumbers(10, 12);

// 5. Write a function that converts weeks into hours. Return the result.
// Invoke the function.
// function turnWeeksintoHours (weeks, days, hours) {
//     const result = weeks * days * hours
//     return result;
// }

// const result = turnWeeksintoHours (10, 7, 24)
// console.log (result);

// console.log("There are " + hoursInYear + " hours in a year.")

//
// function turnAnotherWeekIntoHours (weeks) {
//     const days = weeks * 7
//     const hours = days * 24
// }

// 6. Write a function that takes two parameters, a total price and a tax rate,
// and calculates the cost of tax.

 function costOfTax (totalPrice, taxRate) {
    let firstNumber = totalPrice * taxRate
       console.log (firstNumber );
    return (firstNumber);
 }

 costOfTax(30, .07)

// 7. Write a function that takes a person’s name as a parameter and prints the
// message “Hello ___!”, including that person’s name, to the console. (Example:
// “Hello Amanda!“)

// function printName (firstName) {
//     console.log ("Hello " + firstName)
// }
// printName ("Meghann")

// 8. Write a function that checks if someone is of drinking age, and outputs
// true if they are, and false if they are not.

function drinkingAge(age) {
  if (age >= 21) {
    console.log(true);
  } else {
    console.log(false);
  }
}

let age = 25;
drinkingAge (age)



// 9. Write a function that takes two parameters, a persons name and a color, and
// prints the message “___ s favorite color is ____”, including that persons name
// and the color. Example: Cassandra’s favorite color is yellow.”)

// 10. Create a function that takes in two numbers and prints which number is larger.

// 11. Write a function named assignGrade, that takes one argument,
// a number score (example: 90).
// Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.”
// Invoke that function for a few different scores and log the result
// to make sure it works for each case.

// 12. Write a function to get the first element in an array.
// Invoke the function.

// 13. Write a function to add two numbers together using arrow notation (ES6).

// 14. Write a function that takes a “person” object as a parameter (including 3
// properties: firstName, lastName, and age), and outputs the person’s full name.

// 15. Create a function which returns the number of true values there are in an array.

// 16. Write a function that uses a “for” loop to print out “I can do this!” 5 times.

// 17. You are given a “car” object that includes three properties: year, model, and
// color. Write a “for” loop to console log each property of the object.

// 18. Create a function that removes the first element of the array below
// and adds “kiwi” to the end of the array. let favoriteFruits
// = [“mango”, “lychee”, “strawberry”, “papaya”]

// 19. Write a function that takes an array of numbers and returns an array of only
// the even numbers.
