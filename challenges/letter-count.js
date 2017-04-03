/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```
  psudocode:
  function LetterCount(phrase) }
  var objResult {}
  loop through letters of phrase
  if letter not key in obj, add key/value of letter: 1
  if letter already key in obj, take value, add 1
  after all loops, return obj */

function LetterCount(phrase) {
  var objResult = {};
  for (i = 0; i < phrase.length; i ++ ) {
    if ( !( objResult[phrase[i]]) ) {
      // console.log( i + ": " + phrase[i] + "isn't in object");
      objResult[phrase[i]] = 1;
      console.log(objResult);
    } //  if loop
  }   // for loop
}    //   function
LetterCount("apple");
/*
  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE
