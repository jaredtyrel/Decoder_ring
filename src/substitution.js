// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //check if there are 26 charecters and not empty
    if (!alphabet || alphabet.length != 26) {
      return false;
    }
    // all char are unique
    for (let char of alphabet) {
      let double = alphabet.split("").filter((chars) => {
        return chars === char;
      }).length;
      if (double > 1) {
        return false;
      }
    }
    // alphabet.set()

    //correct Alphabet
    let cAlphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    //user Alphabet as an array
    let uAlphabet = alphabet.toLowerCase().split("");
    //new Alphabet to hold the "cAlphabet[x]:uAlphabet[x]" as objects
    let nAlphabet = {};
    //phrase is input turned into an array of lower case charecters
    let phrase = input.toLowerCase().split("");
    let message = [];

    // create an objects were each key is (a-z) corresponds with the user inputted new key i.e
    // nAlphabet = {a:q, b:e, c:., etc}

    if (encode === true) {

      for (let index in cAlphabet) {
        nAlphabet[cAlphabet[index]] = uAlphabet[index];
      }

      for (let letter of phrase) {
        if (letter === " ") {
          message.push(" ");
        } else {
          message.push(nAlphabet[letter]);
        }
      }
      return message.join("");
    }
    //compair the keys in nAlphabet with the keys in the phrase then return the value that is contained within the matching key in nAlphabet.

    if (encode === false) {

      for (let index in uAlphabet) {
        nAlphabet[uAlphabet[index]] = cAlphabet[index];
      }

      for (let letter of phrase) {
        if (letter === " ") {
          message.push(" ");
        } else {
          message.push(nAlphabet[letter]);
        }
      }
      return message.join("");

    }
    return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
