console.log("Hello World"); 

const os=require('os'); 
const free = os.freemem(); 
const hostname = os.hostname(); 
const total = os.totalmem(); 
username = os.userInfo(); 
console.log("The free memory available: " + free); 
console.log("The total memory available: " + total); 
console.log(hostname); 
console.log(username); 