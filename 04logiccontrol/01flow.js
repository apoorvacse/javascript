// nullish coalescing operator (??) : null undefined
// assign first value but if null then assign second value
let val1;
val1=5 ?? 10
val2= null ?? 10
val3= null ?? null
val4=null??null??45?? 15
console.log(val1);//5
console.log(val2);//10
console.log(val3);//null
console.log(val4);//45

//    terniary operator
//condition ? true:false

const age=45
age <50 ? console.log("less than 50"):console.log("more than 50");
;

// fals value
// false, 0, nan, null, undefine



