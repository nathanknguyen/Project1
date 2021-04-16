# PRE CLASS DRILL

```
	Write a function that takes in a single word as a string and returns true if it’s a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

	Ex:
	Input: "noon"
	Output: true

	Input: "horse"
	Output: false

	Input: "racecar"
	Output: true
```

```javascript
function isPalindrome(word) {
  var wordArray = word.split("");
  var reversed = wordArray.reverse();
  var reversedWord = reversed.join("");

  return word === reversedWord;
}

function isPalindrome(word) {
  return word.split("").reverse().join("") === word;
}

var isPalindrome = function (str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - (i + 1)]) {
      return false;
    }
  }
  return true;
};
```
