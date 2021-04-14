# PRE CLASS DRILL

```
	Write a function that takes in a string and outputs the number of vowels (not counting y).

	Ex:
	Input: "hello"
	Output: 2

	Input: "you are great!"
	Output: 6

	Input: "why?"
	Output: 0
```

```javascript
function countVowels(str) {
  var count = 0;

  var input = str.toLowerCase();
  var vowelArr = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < input.length; i++) {
    if (vowelArr.includes(input[i])) {
      count++;
    }
  }

  return count;
}
```
