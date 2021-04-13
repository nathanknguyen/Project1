# PRE CLASS DRILL

```
Write a function that takes in an array of numbers and outputs the maximum number.

Ex:
Input: [ 1, 2, 3 ]
Output: 3

Input: [ 3, 6, 4, 5, 2, 1 ]
Output: 6

Input: [ 3, 3, 3 ]
Output: 3

```

```javascript
function findMax(arr) {
  var maxNum = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }

  return maxNum;
}
```
