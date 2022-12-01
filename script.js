// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];




// password option list
var passOptions = {
  len: 0,
  charSpec: false,
  charNum: false,
  charLow: false,
  charUp: false,
  types:0
}

//functions to populate option list
function userLength() {
  var userLenOption = 0;
  userLenOption = Number(prompt("how long should your pasword be?(10-64)"));
  if(userLenOption >= 10 && userLenOption <= 64){
    passOptions.len = userLenOption;
  } else {
    alert ("please make sure you enter a number between 10 and 64")
    userLength()
  }
  return userLenOption
 }

function userCharUp() {
  var userCharUpOption = false;userCharUpOption = prompt("do you want uppercase characters in your password? [y/n]")
  if(userCharUpOption == "y" || userCharUpOption == "Y"){
    passOptions.charUp = true
    passOptions.types = +1
  } else if(userCharUpOption == "n" || userCharUpOption == "N") {
    delete passOptions.charUp
  } else {
    alert ("please us y or n only to indicate your choice")
    userCharUp()
  }
  return userCharUpOption
  }


function userCharLow() {
  var userCharLowOption = false;
  userCharLowOption = prompt("do you want lowercase characters in your password? [y/n]")
  if(userCharLowOption == "y" || userCharLowOption == "Y"){
    passOptions.charLow = true
    passOptions.types = +1
    } else if(userCharLowOption == "n" || userCharLowOption == "N") {
      delete passOptions.charLow
    } else {
      alert ("please us y or n only to indicate your choice")
      userCharLow()
    }
    return userCharLowOption
    }
  
  
 function userCharNum() {
  var userCharNumOption = false;
  userCharNumOption = prompt("do you want numeric characters in your password? [y/n]")
  if(userCharNumOption == "y" || userCharNumOption == "Y"){
    passOptions.charNum = true
    passOptions.types = +1
  } else if(userCharNumOption == "n" || userCharNumOption == "N") {
    delete passOptions.charNum
  } else {
    alert ("please us y or n only to indicate your choice")
    userCharUp()
  }
  return userCharNumOption
  }


  function userCharSpec() {
    var userCharSpecOption = false;
    userCharSpecOption = prompt("do you want uppercase characters in your password? [y/n]")
    if(userCharSpecOption == "y" || userCharSpecOption == "Y"){
      passOptions.charSpec = true
      passOptions.types = +1
    } else if(userCharSpecOption == "n" || userCharSpecOption == "N") {
      delete passOptions.charSpec
    } else {
      alert ("please us y or n only to indicate your choice")
      userCharUp()
    }
    return userCharSpecOption
    }
   
 

// Function to prompt user for password options
function getPasswordOptions() {
  userLength()
  userCharUp()
  userCharLow()
  userCharNum()
  userCharSpec()
  if (passOptions.types===0){
    alert("you have to pick at least one character type")
    getPasswordOptions
  } else
  alert("thanks, your password will now be randomly generated")
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// // function for selecting random component
// function getRandomProperty(obj) {
//   var keys = Object.keys(obj);
//   return keys[Math.floor(Math.random() * keys.length)];
// }


// Function to generate password with user input
function generatePassword() {
  var finalPassword = ""
  getPasswordOptions()
  var userOptions = Object.keys(passOptions).filter(key => passOptions[key] === true)
  var charList = []
  if (Object.values(userOptions).includes('charSpec')){
    charList = charList.concat(specialCharacters)
    if (Object.values(userOptions).includes('charNum')){
      charList = charList.concat(numericCharacters)
      if(Object.values(userOptions).includes('charUp')){
        charList = charList.concat(upperCasedCharacters)
        if(Object.values(userOptions).includes('charLow')){
          charList = charList.concat(lowerCasedCharacters)
      }
    }
  }}
  for (var i =0; i<= passOptions.len;i++){
    var newChar = getRandom(charList)
    finalPassword= finalPassword.concat(newChar)
  }
  alert( "here is your final password \n\n"+ finalPassword)
  return finalPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



console.log(generatePassword())