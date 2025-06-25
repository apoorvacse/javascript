// problem comes when comparing diff data types
// console.log("2">3);
// console.log(1>9.6)

console.log(null>0); //f
console.log(null==0); //f
console.log(null>=0); //t due to value conversion
//  equality and comparison work differentl,latter convert NULL to a NUMBER, treating it as 0, that why null>=0 is true rest is false

console.log(undefined==0);// always false

// thus avoid doing above for clean code.

// sSTRICT CHECK(===) checks both value and data type
console.log("2"==2); // conversion so true
console.log("2"===2);// false