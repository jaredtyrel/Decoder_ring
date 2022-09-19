// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//a - z === asciivalue: 97 - 122

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let phrase = input.toLowerCase().split("");
    let message = "";
    // return false if the shift is out of bounds
    if (!shift || shift <= -25 || shift >= 25) {
      return false;
    }
    // turn shift negative so it will decode instead
    if (encode === false) {
      shift = 0 - shift;
    }
    message = phrase.map((letter) => {
      let charCode = letter.charCodeAt(0) - 97;

      if (charCode < 0 || charCode > 26) { 
        // console.log(letter)
        return letter;
      }
        charCode += shift;
      if (charCode < 0) {
        charCode += 26;
      } 
      charCode = charCode % 26;
      charCode += 97;
      // console.log(charCode)
      return String.fromCharCode(charCode);
    });

    message = message.join("");
    //         console.log(message)
    return message;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
