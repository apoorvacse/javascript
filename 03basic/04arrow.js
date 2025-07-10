/*
An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions.
*/

//this means current context(values-kiske bare m baat ho rhi)
const user={
    username:"apoorva",
    price:9,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to my channel`);
        console.log(this);// print the object
        
        
    }
}
//user.welcomeMessage()
            /*
            apoorva, welcome to my channel
            {
            username: 'apoorva',
            price: 9,
            welcomeMessage: [Function: welcomeMessage]
            }
            */
//user.username="appu don"
//user.welcomeMessage()

            /* when all 3 runs
            apoorva, welcome to my channel
            {
            username: 'apoorva',
            price: 9,
            welcomeMessage: [Function: welcomeMessage]
            }
            appu don, welcome to my channel
            {
            username: 'appu don',
            price: 9,
            welcomeMessage: [Function: welcomeMessage]
            }
            */

//console.log(this)     // {}       
//--- in browser global obj is WINDOW object


// function learningThis(){
     let username="apoorva singh"
//     console.log(this)
//     //console.log(this.username);//undefine- u can use this in function but can in objects
    
// }
// learningThis()

// ARROW FUNCTIONS

const name=function(){
    let username="appu"
   // console.log(this.username); undefine
    
}
name()

// fun using arrow i.e remove function keyword and add arrow between parenthesis and curly bracs
const name1=()=>{
    let username="appu"
   console.log(this.username);// undefine
    console.log(this); // {}
    
}
name1()

           // ---more about arrow functions----

//syntax
//------------------()=>{}---------

        // Traditional anonymous function
            // (function (a) {
            //   return a + 100;
            // });

        // 1. Remove the word "function" and place arrow between the argument and opening body brace
            // (a) => {
            //   return a + 100;
            // };

        // 2. Remove the body braces and word "return" — the return is implied.
            // (a) => a + 100;

        // 3. Remove the parameter parentheses
            // a => a + 100;


// case1 - explicit return
        const mul1=(num1,num2)=>{
            return num1 *num2
        }
        // console.log(mul1(3,4))

// case 2 
    const mul2=(num1,num2)=>
        num1 *num2

    // console.log(mul2(3,4))// 12

// case 3-- implicit return
const mul3=(num1,num2)=>
    (num1 *num2)  // curl bracs m wrap krna h then u have to use return keyword

console.log(mul3(3,4))// 12