//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//-------------------------------------------------------------------------------

function positiveSum(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
}

console.log(positiveSum([2, 7, 6, -8]));

//Another Solution

function positiveSum(arr) {
  let initValue = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      initValue += arr[i];
    }
  }
  return initValue;
}
console.log(positiveSum([2, 7, 6, -8]));
