/*

  Create a function `parseQueryString` that accepts a query string parameter as an argument, and
  converts it into an object, using the following rules:

    * An equals sign (`=`) separates a *key* on the left from a *value* on the right.
    * An ampersand (`&`) separates key-value pairs from each other.
    * All keys and values should be parsed as Strings.
    * The query string will not contain spaces.

  Here are some example inputs and outputs (mind the edge cases!):

  ```javascript
  parseQueryString("");
  //=> {}

  parseQueryString("a=1");
  //=> {
  //    "a": "1",
  //   }

  parseQueryString("first=alpha&last=omega");
  //=> {
  //    "first": "alpha",
  //    "last": "omega"
  //   }

  parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10");
  //=> {
  //    "a": "apple",
  //    "b": "blueberry",   // "blueberry" overwrites "beet"!
  //    "c": "",            // empty string (missing value)
  //    "d": "10"           // "10" is a String!
  //   }
  ```

  Mega Bonus
  - Can you create the reverse function? Given an object, output a Query Parameter String:

    ``` javascript
    var o = {first: "alpha", last: "omega"};
    convertToQueryParameter(o); // "first=alpha&last=omega";
    ```

*/

// YOUR CODE HERE
// psudocode
// function parseQueryString
// Input: pairs are connected by '=', diff pairs connected by '&'
// output: one object of pairs
// define two variables key and value, define object
// all left of '=' is key, between '=' and '&' is value
// slice letter, if not = or &, apend to key
// after = apend to value
// when '&' push pair into object, next loop apend to key

// when input is empty, return object

function parseQueryString (phrase) {
  // var key = "";
  // var value = "";
  // var letter = "";
  // var keyOrValue = "key";
  var pairObject = {};
  var arrPairs = phrase.split('&'); // splits one text into array of key/value pairs
  var arrKeyValue = [];
  // console.log(arrPairs);
  for (i = 0; i < arrPairs.length; i ++ ) {
    var arrKeyValue = arrPairs[i].split("="); // split key/value into two words
    // console.log(arrKeyValue);
    // console.log(arrPairs);
    pairObject[arrKeyValue[0]] = arrKeyValue[1];
    console.log(pairObject);
  }   // for loop

}   // function

var testString = "fruit=apple&tool=hammer&food=lemons";
parseQueryString(testString);
