//interview point
//  in code environment, when we run example then global scope is diifrernt as we run in browser
                    // Global scope: The default scope for all code running in script mode.
                    // Module scope: The scope for code running in module mode.
                    // Function scope: The scope created with a function.
                    // Block scope: The scope created with a pair of curly braces (a block).
let a=789 // global

// curly braces are SCOPE, dont confuse with object
// block scope, available only within block
if(true){
    let a=6
    const k=7
    var b=78 // or b=78
    //console.log("inner block ",a);// inner block 6
    
}
// console.log(a); // it is showing not define that is its scope is within if conditional
// console.log(k);

console.log(b); // but this doesnot follow scope and gives 78, ISSUE
console.log(a); //789 global will intitiate

// nestesd scope, closure, child can acces parent variables 

function one(){
    const username="apoorva"
    function two(){
        const socialid="github"
        console.log(username);
        
    }
     // case 1
    //two() // execute and print apoorva
    //console.log(socialid);// socialid not define since no scope

    // case 2
    //console.log(socialid);// socialid not define since no scope
    //two() // never execute
    
}
one()

// --------------------intresting(HOISTING)------------
// 2 techniques of defining fun

    //console.log(addbyone(5))  it will work
function addbyone(num){
    
    return num +1
}
console.log(addbyone(5))


        // if u call func before intialization when stored in variable it gives error
        //console.log(addtwo(5))  ---- Cannot access 'addtwo' before initialization
    const addtwo=function(num){
    return num+2
}
console.log(addtwo(5))


 



