let date=prompt("Enter Your date of Birth:")
let month=prompt("Enter Your Month of Birth:")
let yrs=prompt("Enter your Year Of Birth:")
let data= new Date();
let yar=data.getFullYear();
console.log(yar)
document.write(`your Age is: ${yar-yrs}`)
