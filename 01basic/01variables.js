const accountId=144553
let accountEmail="apoor@google.com"
// we dont use var
// because it was unaware of scope, 
// let resolve scope value
var accountPass="123"
// worst possibilty
accountCity="jaipur"
let accountstate;
// accountId=2
console.log(accountId); /*it will run*/

accountEmail="sdhgdhdghdghdgfg"
accountPass="354467654"
accountCity="delhi"
console.table([accountId,accountEmail,accountPass,accountCity,accountstate])
/*
prefer not to use var bcz of issue in block and functional scope
*/
