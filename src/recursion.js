// #1. Factorial:
function factorial(number) {
  if (number === 1 || number === 0) {
    return 1
  } else if (number < 0) {
        return null
  } else {
      return number * factorial(number - 1)
  }
}

// #2. Sum of Integers:
var sum = function(array) {
  if (!Array.isArray(array)) {
    return null;
  } else if (array.length === 0) {
    return 0;
  } else if (typeof array[0] !== 'number') {
    return null;
  }
  return array[0] + sum(array.slice(1));  // slices array from 1 to the end of the array.
};

// #3. Sum Integers in Array
var arraySum = function(nestedArray) {
  let output = 0;
  for (var i = 0; i < nestedArray.length; i++) {
    if (!Array.isArray(nestedArray[i])) {
      output += nestedArray[i];
    } else {
      output += arraySum(nestedArray[i])
    }
  }
  return output;  
};

// 4. Check if a number is even.
var isEven = function (n) {
  if (n < 0) {
    n = Math.abs(n);
  }
  if (n === 1) return false;
  if (n === 0) return true;
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
  let output = 0;
  if (n === 1 || n === 0) {
    return 0;
  } else if (n > 0) {
    return n - 1 + sumBelow(n - 1);
  } else if (n < 0) {
    return n + 1 + sumBelow(n + 1);
  }
};

er