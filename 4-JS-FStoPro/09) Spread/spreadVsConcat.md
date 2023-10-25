### Link for reference: https://www.educative.io/answers/spread-operator-vs-arrayprototypeconcat-in-javascript

### Spread operator(...) vs Array.prototype.concat() in JavaScript

## Array.prototype.concat()

Array.prototype.concat() is used to merge two or more arrays. This method does not mutate the original array, but instead returns a new array populated with elements of all the arrays that were merged.

array 3 = array1.concat(array2);

## Spread operator

The spread operator is denoted by three dots (...). It unpacks elements of iterable objects such as arrays, sets, etc., and maps them into a list. We can use this operator to merge many iterable objects into one.

array3 = [...array1, ...array2];
