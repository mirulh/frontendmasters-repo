/* Exercise

In the console, declare the following functions using arrow functions:

    divide: given 2 numbers, return the first divided by the second
    whisper: given an uppercase string, log it in all lowercase to the console
    shorterThan: given 2 arrays, return whether the first is shorter than the second

 */

// divide
const divide = (first, second) => first / second;
console.log(divide(50, 5));

console.log("-------------------SEPARATOR-----------------------");

// whisper
const whisper = (ucString) => console.log(ucString.toLowerCase());

whisper("SPEAK SOFTLY!");

const getWhisper = whisper("OMG");

console.log(getWhisper); // have log but not return value

// whisper2

const whisperWithReturn = (ucString) => {
  console.log(ucString.toLowerCase());
  return ucString.toLowerCase();
};

whisperWithReturn("RETURN AND LOG THIS!");

const getWhisperAndReturn = whisperWithReturn("OMG2");
console.log(getWhisperAndReturn);

console.log("-------------------SEPARATOR-----------------------");

// shorterThan
const shorterThan = (arr1, arr2) => arr1.length < arr2.length;

console.log(shorterThan([1, 1, 1, 1, 2], [1, 2, 3, 4]));
