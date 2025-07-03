// ways of passing project
// eg shopping cart

// function calculateCartPrice(num1){
//  return 1
// }
// console.log(calculateCartPrice(300));//1
//console.log(calculateCartPrice(3,4,5));// it will first value not all o use spread operator i.e ...

function calculateCartPrice(...num1){ // rest operator used to give mltiple values
 return num1
}
console.log(calculateCartPrice(300,56,45)); //[ 300, 56, 45 ]

// interview point
function calculateCartPrice1(val1, val2 ,...num1){ // num1 will contain all values except no.of values = no. of variables from starting
 return num1
}
console.log(calculateCartPrice1(300,56,45,56,78)); //[ 300, 56, 45 ]

// passing obj in function
const user ={
    username:"apoorva"
}
function workingObject(anyobject){
    console.log(`username is ${anyobject.username} `);
    
}
workingObject(user) // username is apoorva , in this type u have to take care of type testing otherwise it will give undefine, we prefere typescript

// passing array to array

const myarr=[3,5,7,9]
function returnsecondvalue(myarr){
    return myarr[3]
}
console.log(returnsecondvalue(myarr));//9


