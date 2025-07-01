// can be declare using literals and constructors
//object.create
//singleton-- when ever u make obj from constructor thrn its is singleton. i.e aapni trah ek hi h
//if we decalare as literals then singleton will not form
// inserting symbol in object key with brac syntax
// freeze to make it fixed
// u can acces obj ke mostly by dot and rest by bracket

//onject literals define, {} is obj in keys and values

const mysym=Symbol("key1")

const jsuser={
    name:"apoorva",
    age: 21,
    "full addres":"hamirpur",
    location:"noida",
    email:"apoorva@microsoft.com",
    hobby:"reading people",
    aboveinfo:"false",
    // one way is to write it in brackets---imp interview
   // mysym:"mykey1" // since here data type is not symbol thus cant use like this
    [mysym]:"mykey1"
}

                      // how to access obj info
     console.log(jsuser.email); // not good
     console.log(jsuser["email"]); // correct
     console.log(jsuser["full addres"]);// correctness counterexample
     console.log(jsuser[mysym]);

jsuser.email="apoorvasingh0304@gmail.com"
console.log(jsuser["email"]);
//Object.freeze(jsuser)
jsuser.age=29
console.log(jsuser["age"]); // cant modify after freeze
console.log(jsuser);

/*
{
  name: 'apoorva',
  age: 21,
  'full addres': 'hamirpur',
  location: 'noida',
  email: 'apoorvasingh0304@gmail.com',
  hobby: 'reading people',
  aboveinfo: 'false',
  [Symbol(key1)]: 'mykey1'
}
*/


// interview take symbol and print it in objects key, so first declare outside
// u cant
// adding fun
jsuser.greeting= function(){
    console.log("hi people");  
}
    // console.log(jsuser.greeting); // undefine
    // console.log(jsuser.greeting());//not a function bcz of freezing so unfreeze 
/*
[Function (anonymous)]
hi people
undefined
*/

jsuser.greeting2=function(){
    console.log(`hi people,${this.name}`);// when refering same object use this
    
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());

/*
1--> hi people
undefined
2--> hi people,apoorva
undefined
*/


