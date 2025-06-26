// data types are of 2 types: preMItive and non premitive(referenced type)
// on the basic of how data stored and acced from memory data type divided into 2
// PREMITIVE(CALL BY VALUE) 1. string, 2, number, 3. boolean, 4. null, 5. undefine, 6.symbol,7.bigint
// REFERENCED TYPE: array, objects,functions
// JS is DYNAMICALL typed bcz: A variable name can hold any type of information
// Note that dynamically typed languages are easier to program, but slower. TypeScript is a variation of JavaScript that is statically typed.
 const a=1
 const aa=1.5

 const login=false
 const indoortemp=null
 let email;
//  symbol
const id=Symbol('123')
const secondid=Symbol('123')

console.log(id===secondid); // false

const bignumber1=789876354637283989087676786
const bignumber=789876354637283989087676786n // n convert it to int
console.log(bignumber);

// reference type
// ara,objects, functions

const heros=["netaji","bhakt singh"];
let myobj={
    name:"apuu",
    age:21,
}
// console.log(myobj);

// function declaration
const myfunction=function(){
    console.log("learning javascript");
}

//  to find datetype rather than hovering
console.log(typeof bignumber1); //number

console.log(typeof bignumber);// bigint

console.log(typeof indoortemp); // object

console.log(typeof login); // object

console.log(typeof myfunction); // function

console.log(typeof id);




             // type of operation result -- interview
// type of val                        result
// undefine                          "undefine"
// null                              "object"
// boolean                          "boolean"
// number                          "number"
// string                          "object"
// boolean                          "string"
// bigint                            "object"
// function                          "function" but we call object function
//  non premtivie return type is FUNCTION 







