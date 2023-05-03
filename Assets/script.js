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

var genArray = [];

const lowerArray = Array.from('abcdefghijklmnopqrstuvwxyz');
const upperArray = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const numArray = Array.from('0123456789');
const specialArray = Array.from('~!@#$%^&*()_-+<>.?/');

function writePassword() { 

    //declare variable to store value of password length for generator
    var userNum = '';

    function chooseLength() { 
        userNum = window.prompt("Please enter the amount of CHARACTERS you would like in your password (Minimum of 8 up to 128 characters allowed):");
        console.log(userNum);
    }

    chooseLength();

    //choose password length (!! issue: can't get validation to 'cancel' due to while loop conditions!!)
    function lengthVal() {

        while (isNaN(userNum) || userNum < 8 || userNum > 128) {
            window.alert("Invalid entry! Please enter a NUMBER between 8 and 128.");
            chooseLength();
        }
    }

    lengthVal();

    //character selection loop
    function charSelector() {
        userInput = '';

        function locasePrompt () {
            userInput = window.prompt("Do you want LOWERCASE LETTERS in your password? 'Y' (yes) or 'N' (no):");
            userInput = userInput.toUpperCase();
        }

        function lowChar() {
            while (userInput != 'Y' && userInput != 'N') {
            window.alert("Invalid entry! Only 'Y' or 'N' responses please.");
            locasePrompt();
            }
            if (userInput === 'Y') {
                genArray.push(lowerArray);
            } else if (userInput == null) {
                return;
            }
        }

        function upcasePrompt () {
            userInput = window.prompt("Do you want UPPERCASE LETTERS in your password? 'Y' or 'N':");
            userInput = userInput.toUpperCase();
        }

        function upChar() {
            while (userInput != 'Y' && userInput != 'N') {
            window.alert("Invalid entry! Only 'Y' or 'N' responses please.");
            upcasePrompt();
            }
            if (userInput === 'Y') {
                genArray.push(upperArray);
            } else if (userInput == null) {
                return;
            }
        }

        function numPrompt () {
            userInput = window.prompt("Do you want to include NUMBERS in your password? 'Y' or 'N':");
            userInput = userInput.toUpperCase();
        }

        function numChar() {
            while (userInput != 'Y' && userInput != 'N') {
            window.alert("Invalid entry! Only 'Y' or 'N' responses please.");
            numPrompt();
            }
            if (userInput === 'Y') {
                genArray.push(numArray);
            } else if (userInput == null) {
                return;
            } 
        }

        function specPrompt () {
            userInput = window.prompt("Add some SPECIAL characters (#, @, !, &, *, %) to strengthen your password. 'Y' or 'N':");
            userInput = userInput.toUpperCase();
        }

        function specChar() {
            while (userInput != 'Y' && userInput != 'N') {
            window.alert("Invalid entry! Only 'Y' or 'N' responses please.");
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
        console.log(userInput)
        upcasePrompt();
        upChar();
        console.log(userInput)
        numPrompt();
        numChar();
        console.log(userInput)
        specPrompt();
        specChar();
        console.log(userInput)

        //validate user character choice
        while (genArray.length === 0) {
            window.alert("You must select at least 1 set of characters to generate a password.")
            charSelector();
        }
    }

    charSelector();
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
