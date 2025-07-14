//  While for...in iterates over property names, for...of iterates over property values:
// learn about map
// The Map object holds key-value pairs and remembers the original insertion order of the keys.
//  Any value (both objects and primitive values) may be used as either a key or a value.
// obj we preferably use for in and for of in array
/*
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7

*/
const arr=[1,2,3,4]
for(const num of arr){
    console.log(num);
    
}
const chararr=['a','b','c']
for(const cher of chararr){
    console.log(`each char is ${cher}`);
    
}

/*

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// Expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete("b");

console.log(map1.size);
// Expected output: 2*/

// maps for of loop not applicable we get uisng objec keys or entries
// map for in is not iteratable, so it wont give error rather
// The for...in statement allows you to iterate over the enumerable
//  properties of an object.

//     --- foreach  return type is same as map that is undefine

const coding =["js","ruby","java","cpp"]
// when using with foreach and it is callback thus omit fun name
// inside for each we are passing a callbackfun
// one way
coding.forEach( function (element){// here element is parameter , there can be multiple parameters
    console.log(element);
})
// way 2
coding.forEach((element)=> console.log(element)
)

//  we can pass a fun to foreach methode
const coding1=[
    {
        langname:"python",
        langfile:"py"
    },
    {
        langname:"javascript",
        langfile:"js"
    },
    {
        langname:"ruby",
        langfile:"rb"
    }
]
//  to access each language how to implement loop
coding1.forEach((item)=>{
    console.log(`i am learning ${item.langname}`);
    
})
/*
i am learning python
i am learning javascript
i am learning ruby
 */
