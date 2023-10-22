// what is the difference between return value and console.log a value

// ___________________________RETURN VALUES VS CONSOLE.LOG_______________________________________________

// a return statement specifies the function's output value

function square(x) {
  return x * x;
}

const valueSquareWithReturn = square(3);

valueSquareWithReturn; // will log out nothing in vscode

// 1) LOGS OUT - YES, RETURN VALUE - YES
console.log(
  "Logging out the variable that used return function gives:",
  valueSquareWithReturn
);
// output: 9

//___________________

/* as compared to logging out the value to the console does not equates 
return the value to the intended variable, for example: */

// WILL LOGS OUT THE VALUE BUT DOES NOT RETURN IT!

// LOGS OUT DEFINED
function logSquare(x) {
  console.log("This is console.log inside a function:", x * x); // because the function has used the console.log
}

// 2) LOGS OUT - YES, RETURN VALUE - NO
const valueSquareNoReturn = logSquare(3); // calling the function will log out the output
// output: 9

// 2.1) LOGS OUT - NO, RETURN VALUE - NO
valueSquareNoReturn;

// 3) LOGS OUT - YES, RETURN VALUE - NO
logSquare(3); // calling the function will log out the output
// output: 9

// 4) LOGS OUT - NO, RETURN VALUE - NO
console.log(
  "Logging out the variable that does not used return function gives:",
  valueSquareNoReturn
);
// output: undefined

console.log("-----------------separator-------------------------");

//
// ________________USING LOG AND RETURN IN A FUNCTION TO SOLVE THE PROBLEM________________

function logAndReturnSquare(x) {
  console.log(x * x);
  return x * x;
}

const value_Square_With_Log_And_Return = logAndReturnSquare(3);

value_Square_With_Log_And_Return;
console.log(
  "With console.log (the other one is without obv): ",
  value_Square_With_Log_And_Return
);
