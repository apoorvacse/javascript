// function funname(){

// }
function fname(){

    console.log("a");
    console.log("a");
    console.log("a");
    console.log("a");

}
        // fname -- reference
        // fname()-- execution
//fname()

// way-01

    // function multipy(num1, num2){  // parameter
    //     console.log(num1*num2);
        
    // }
    //multipy(2,6) // arguments or passing values
    // const ans=multipy(2,5)
    // console.log("result",ans);// 10 result undefine

function multipy(num1, num2){  // parameter
    // either this or below
    //   let ans=num1 *num2
    //   return ans  // return k baad kuch execute nhi hoga
    //   console.log("apoorva");
    return num1*num2 // answer:27
    
}
// const ans=multipy(3,9)
// console.log("answer:",ans); // answer:27

function messageuser(username){
    if(username==undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just llogged in` //10 more days just llogged in
}
    console.log(messageuser("10 more days"))// return nothing so wrap it

// if we dont pass anything then its undefine 


