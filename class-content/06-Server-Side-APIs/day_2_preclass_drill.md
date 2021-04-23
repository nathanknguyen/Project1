# PRE CLASS DRILL

```
Write a function that takes in an array of numbers and outputs the average of all the numbers.

Ex:
Input: [ 1 , 4 , 7 ]
Output: 4

Input: [ 10, 5 ]
Output: 7.5

Input: [ 1.5, 3, 2.5, 1 ]
Output: 2
```

```javascript
var average = function (numArr) {
  var sum = 0;
  for (var i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum / numArr.length;
};
```
