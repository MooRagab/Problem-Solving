/**GCreate a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ).**/
//---------------------------------------------------------------------------------------------

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
// console.log(countBy(1, 10));


/**Another Solution 
 -------------------------------------------------------------------------------------**/

 function countBy(x, n) {
  return Array.from(Array(n + 1).keys())
  .slice(1)
  .map((number) => number * x);
}
// console.log(countBy(1, 10));