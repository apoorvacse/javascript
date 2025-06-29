// denote using both " ", ' ':
// things learnt :
 //1.interpolation,func of strings like: toupper,charat,indexof,substring,slice,trim,replace,include,split
const namee="apoorva"
const surname="singh"
// old and outdated way
console.log(namee,surname);

// modern way--string intepolation: create placeholders and directly inject into that
// readable,reliable, u can do things on the way
console.log(`my name is ${namee} and surname is ${surname}`);

// another way of declaring strings , it gives key and value pair along with many function(prototypes
//  studying those fun is what is called tring study)

const subname= new String('apoorva-rani')

console.log(subname[6]); // a
console.log(subname[4]); // r
console.log(subname.__ptoto__); //undefined

console.log(subname.length);//7
console.log(subname.toUpperCase());// APOORVA

console.log(subname.charAt(3)); // pass position
console.log(subname.indexOf('r')); //4

const newname=subname.substring(0,4) //[0,4) u cant give negative values
    console.log(newname);

// can give negative values it starts from end
const newname1=subname.slice(-2,0)
  console.log(newname1);

//   to remove unwanted space just trim
const newname2="        poorvs          "
   console.log(newname2);
   console.log(newname2.trim());

// to replace, if there is space then it will directly change to %20
const url="https://app.com//ap%20singh"
// what to search and with what to replace

console.log(url.replace('%20','-'))  // https://app.com//ap-singh

// u can a questions from sstring
console.log(url.includes('ap')); // true
console.log(url.includes('aloo')); // false

//convert string to array , by splitting based on array
console.log(subname.split('-')); //(separator, limit) [ 'apoorva', 'rani' ]




   
   
  
    







