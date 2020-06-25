// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
} 



function generatePassword() {

// get password length
let passwordLength = prompt("enter a length for password between 8 and 128");

if(passwordLength < 8 ) {
    alert("Password length must be greater than or equal to 8");

}

if(passwordLength > 128 ) {
    alert("Password length must be less than or equal to 128");
    
}

console.log(passwordLength);

let choices = "";


// get uppercase, 
let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let useUppercase = prompt("do you want to use uppercase characters");
console.log(useUppercase);
if(useUppercase === 'yes'){
    choices = choices + uppercaseChars[Math.floor(Math.random()*uppercaseChars.passwordLength)]
}

// get lowercase, 
let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let useLowercase = prompt("do you want to use lowercase characters");
console.log(useLowercase);
if(useLowercase === 'yes'){
    choices = choices + lowercaseChars[Math.floor(Math.random()*lowercaseChars.passwordLength)]
}

// get number, 
let numbers = "0123456789";
let useNumbers = prompt("do you want to use numbers");
console.log(useNumbers);
if(useNumbers === 'yes'){
    choices = choices + numbers[Math.floor(Math.random()*numbers.passwordLength)]
}
    
// get special
let specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let useSpecial = prompt("do you want to use special characters");
console.log(useSpecial);
if(useSpecial === 'yes'){
    choices = choices + specialChars[Math.floor(Math.random()*specialChars.passwordLength)]
}


for(var i = 0; i < parseInt(passwordLength); i++); 

return choices;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


// validate input

// conditional - if (choicesmake){generatepassword} or else {console.log(please select some character sets to use)}

// generate password

// get the character sets

// randomly select characters to make a password of x length
    //Math.random

// display the password



// an alert or prompt that you have met the qualifications

