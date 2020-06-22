// Assignment Code
var generateBtn = document.querySelector("#generate")


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatepassword() {
    return "Hello";
}

// Write password to the #password input
function writePassword() {
    var password = generatPassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// get password length
let passwordLength = prompt("enter a length for password");
console.log(passwordLength)

// get uppercase, 
let upperCaseChars = "abc..z";
let useUppercase = prompt("do you want to use uppercase characters")
console.log(useUppercase);
if(useUppercase === 'yes'){
    choices = choices + useuppercaseChar}

// get lowercase, 
let lowerCaseChars = "abc..z";
let useLowercase = prompt("do you want to use lowercase characters")
console.log(useLowercase);
if(useLowercase === 'yes'){
    choices = choices + uselowercaseChar}

// get number, 
let numbers = "012..9";
let useNumbers = prompt("do you want to use numbers")
console.log(useNumbers);
if(useNumbers === 'yes'){
    choices = choices + useNumbers}
    
// get special
let specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let useSpecial = prompt("do you want to use special characters")
console.log(useSpecial);
if(useSpecialcase === 'yes'){
    choices = choices + usespecialChar}

// validate input

// conditional - if (choicesmake){generatepassword} or else {console.log(please select some character sets to use)}

// generate password

// get the character sets

// randomly select characters to make a password of x length
    //Math.random

// display the password

// an alert or prompt that you have met the qualifications

