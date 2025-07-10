//  we start with an empty Call Stack. Whenever we invoke a function, 
// it is automatically added to the Call Stack. Once the function has executed all of its code,
//  it is automatically removed from the Call Stack. Ultimately, the Stack is empty again.
// 

function greeting() {
  // [1] Some code here
  sayHi();
  // [2] Some code here
}
function sayHi() {
  return "Hi!";
}

// Invoke the `greeting` function
greeting();

// [3] Some code here

//--------interview--------

// 1--global execution to hoga hi and window m window global hoga
// js is single threaded
// we have global execution context and function execution context and eval execution context
// memory creation phase and execution phase
// 2--memory phase - keek variable values with undefine and funtion ki definition
// 3--execution phase m variable m values store hogi