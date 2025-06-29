// this we learn
//math function: random,floor,ceil,round
//  imp formula to mult with what weneeed, if for dice mul by 6 and add 1 to avoid getting 0

const score=3 
  //console.log(score); //3
        // u can explecitily give return type anum
const amount=new Number(140.547683)
// console.log(amount); //[Number: 140.547683]
  //prottpes /* 
        // constructor: ƒ Number()
        // toExponential: ƒ toExponential()
        // toFixed: ƒ toFixed()
        // toLocaleString: ƒ toLocaleString()
        // toPrecision: ƒ toPrecision()
        // toString: ƒ toString()
        // valueOf: ƒ valueOf()  

//    console.log(amount.toString());//140.547683
//    console.log(amount.toFixed(4)); // 140.5477 fixed after decimal 100.0000
//    console.log(amount.toPrecision(4));//140.5 rst give to exponential
//    console.log(amount.toExponential(3));//1.405e+2
//    console.log(amount.valueOf()); // return primitve values

   let num=10000000
//    console.log(num.toLocaleString());//10,000,000
//    console.log(num.toLocaleString('en-IN'));//1,00,00,000
   

   //-------------------MATHS-----------
        //    console.log(Math);
        //    console.log(Math.abs(-3)); // makes poitive
        //    console.log(Math.round(3.69));//mostly use
        //    console.log(Math.ceil(3.69));
        //    console.log(Math.floor(3.69));
        //    console.log(Math.sqrt(25));
        //    console.log(Math.min(25,54,23,12,43,65));
        //    console.log(Math.max(25,56,43,12,65,76));

    // Math.random 0-1
    console.log(Math.random());
     // for particular range
    console.log(Math.random()*10); // but it wil 0 also like 0.014 so add 1
    console.log((Math.random()*10)+1);// ensures that value come in rangr 1-10
    
    //   trick or formula ul max-min+1
    
    const min=10
    const max=20
        console.log(Math.floor(Math.random()*(max-min+1)));
        //  important
        console.log(Math.floor(Math.random()*(max-min+1))+min); //add restriction to get at leat a certain value
        

    

   

   



   
   
   
   
   
 