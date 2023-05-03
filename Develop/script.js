// Assignment Code
var generateBtn = document.querySelector("#generate");

//Commenting out starter code and set it where needed within 'writePassword' function full code
    // Write password to the #password input
    // function writePassword() {
    //   var password = generatePassword();
    //   var passwordText = document.querySelector("#password");

    //   passwordText.value = password;

    // }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//criteria code

var genArray = [];

const lowerArray = Array.from('abcdefghijklmnopqrstuvwxyz');
const upperArray = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const numArray = Array.from('0123456789');
const specialArray = Array.from('~!@#$%^&*()_-+<>.?/');

function writePassword() { 

    //declare variable to store value of password length for generator
    var userNum = '';

    function chooseLength() { 
        userNum = window.prompt('Choose 8 to 128');
        console.log(userNum);
    }

    chooseLength();

    //choose password length (!! issue: can't get validation to 'cancel' due to while loop conditions!!)
    function lengthVal() {

        while (isNaN(userNum) || userNum < 8 || userNum > 128) {
            window.alert('Invalid entry');
            chooseLength();
        }

    }

    lengthVal();

    //character selection loop
    function charSelector() {
        userInput = '';

        function locasePrompt () {
            userInput = window.prompt('Lowercase? Y or N:');
            userInput = userInput.toUpperCase();
        }

        function lowChar() {
            while (userInput != 'Y' && userInput != 'N') {
            window.alert('Invalid');
            locasePrompt();
            }
            if (userInput === 'Y') {
                genArray.push(lowerArray);
            } else if (userInput == null) {
                return;
            }
        }

        function upcasePrompt () {
            userInput = window.prompt('Uppercase? Y or N:');
            userInput = userInput.toUpperCase();
        }

        function upChar() {
            while (userInput != 'Y' && userInput != 'N') {
            window.alert('Invalid');
            upcasePrompt();
            }
            if (userInput === 'Y') {
                genArray.push(upperArray);
            } else if (userInput == null) {
                return;
            }
        }

        function numPrompt () {
            userInput = window.prompt('Numbers? Y or N:');
            userInput = userInput.toUpperCase();

        }

        function numChar() {
            while (userInput != 'Y' && userInput != 'N') {
            window.alert('Invalid');
            numPrompt();
            }
            if (userInput === 'Y') {
                genArray.push(numArray);
            } else if (userInput == null) {
                return;
            } 
        }

        function specPrompt () {
            userInput = window.prompt('Special characters? Y or N:');
            userInput = userInput.toUpperCase();

        }

        function specChar() {
            while (userInput != 'Y' && userInput != 'N') {
            window.alert('Invalid');
            specPrompt();
            }
            if (userInput === 'Y') {
                genArray.push(specialArray);
            } else if (userInput == null) {
                return;
            } 
        }

        locasePrompt();
        lowChar();
        upcasePrompt();
        upChar();
        numPrompt();
        numChar();
        specPrompt();
        specChar();

        //validate user character choice
        while (genArray.length === 0) {
            window.alert('Must choose at least 1 character set')
            charSelector();
        }

    }

    charSelector();
    console.log(userInput);
    console.log(genArray);

    // array manipulation to get string
    var stringArray = genArray.toString();
    let cleanArray = stringArray.replaceAll(',','');
    var newArray = Array.from(cleanArray);

    console.log(newArray)

    // randomize array and generate password
    const password = [];

    for (let i = 0; i < userNum; i++) {
        const pickRand = newArray[Math.floor(Math.random() * newArray.length)];
        password.push(pickRand);
    } 

    console.log(password);

    var passwordText = document.querySelector("#password");

    passwordText.value = password.join("");
}
