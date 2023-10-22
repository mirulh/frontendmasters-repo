### Reference link >> https://frontendmasters.com/courses/javascript-first-steps/functions-parameters-arguments/

## how to use a function in javascript

# When and how function are needed: Eureka!

Problem statement:

- I want to create a function that takes a number and return a division of 2 of the number of my choosing

Hypothesis:

- I can create a variable named 'half' that takes a value and divide it by 2, eg:

        let half = myValue / 2; , myValue will be whatever number I typed in eg. 2, 3, 50


        //

- Another way I could do is by creating a function and whatever number I typed in the function will return the results and it is done separately, eg:

        function calculateHalf(anyNumber) {
            return anyNumber / 2;
        }

         let half = calculateHalf(10); , it could be any number in the bracket 10, 50, 77


        //

It is fairly determined that method 2 is the most feasible way to do this as compare to method 1 for a couple reasons:

1. Readability and Maintainability:

   Using a named function like calculateHalf makes the code more readable. It clearly indicates the purpose of the calculation.
   When someone reads the code, they immediately understand what calculateHalf(10) does, without needing to look into the function.

2. Reusability:

   By encapsulating the logic within a function, you can reuse it across different parts of your codebase. If you need to calculate half of a number in multiple places, you can call the calculateHalf function, making your code more DRY (Don't Repeat Yourself).

3. Abstraction:

   Using a function abstracts away the complexity of the calculation. If the calculation logic changes in the future, you only need to update the function in one place, providing a centralized and easier way to manage changes.

4. Testing and Debugging:

   Functions are easier to test because you can isolate the logic and test it independently. This is particularly useful in larger applications where automated testing is essential for ensuring code quality.
   If there are issues with the calculation, having a dedicated function allows for easier debugging. You can add logging or use debugging tools specifically for that function.

//

5. Code Organization:

   Functions provide a clear structure to your code. They allow you to organize related operations into named blocks, improving the overall organization and readability of your codebase.

6. Parameterization:

   Using a function allows you to parameterize the calculation. In your direct calculation approach, the division is always by 2. But with a function, you can pass any number, making the code more flexible and adaptable to different scenarios.

7. Documentation:

   Functions can be documented, describing their purpose, expected input, and return values. Proper documentation serves as a reference for other developers, making it easier for them to understand and use the code.

//

In summary, using a separate function not only enhances readability and maintainability but also promotes reusability, abstraction, easier testing, and better code organization. These factors contribute to writing cleaner, more understandable, and maintainable code, which is crucial for the long-term success of any software project.
