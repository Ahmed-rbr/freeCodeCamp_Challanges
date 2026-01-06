// Given a string, return a new string where all vowels
// are converted to uppercase and all other alphabetical characters
//  are converted to lowercase.

// Vowels are "a", "e", "i", "o", and "u" in any case.
// Non-alphabetical characters should remain unchanged.

///Tests////////////
// 1. vowelCase("vowelcase") should return "vOwElcAsE".
// Waiting:2. vowelCase("coding is fun") should return "cOdIng Is fUn".
// Waiting:3. vowelCase("HELLO, world!") should return "hEllO, wOrld!".
// Waiting:4. vowelCase("git cherry-pick") should return "gIt chErry-pIck".
// Waiting:5. vowelCase("HEAD~1") should return "hEAd~1".
function vowelCase(str) {
  str = str
    .split("")
    .map((char) => {
      if (!/[a-z]/i.test(char)) return char;

      return "auieoAUIOE".includes(char)
        ? char.toUpperCase()
        : char.toLowerCase();
    })
    .join("");

  return str;
}
