const accountId=144 //it cannot be changed
let accountEmail="abc@gmail.com"//can be changed
var accountPassword="123"//can be changed
accountCity="Jaipur"//can be changed
let accountState;
// prefer not to use var because of issue in block scope and functional scope
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
