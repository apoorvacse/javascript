//Immediately Invoked Function Expressions
// An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined. 
// It is also known as a self-executing anonymous function. 
// ---USE CASES:
     // Avoiding polluting the global namespace by creating a new scope.
// Creating a new async context to use await in a non-async context.
// Computing values with complex logic, such as using multiple statements as a single expression.

/*
It contains two major parts:
1.)  A function expression. This usually needs to be enclosed in parentheses in order to be parsed correctly.
2.)  Immediately calling the function expression. Arguments may be provided, though IIFEs without arguments are more common.
*/

            // standard IIFE or named iife
            (function name () {
            // statements…
            })();

            // arrow function variant
            (() => {
            // statements…
            })();

            // async IIFE
            (async () => {
            // statements…
            })();

(function (){
    console.log("hi")// hi
})();
// iife doesnot know when to stop so use semicolon

//arrow function
( ()=>{
    console.log("hello")// hello
})();

// parameter iife
( (name)=>{
    console.log(`hello,${name}`)// hello, apoorva
})("apoorva");