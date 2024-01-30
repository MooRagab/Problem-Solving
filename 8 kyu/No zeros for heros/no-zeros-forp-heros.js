/**Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.**/
//---------------------------------------------------------------------------------------------

function noBoringZeros(n) {
  let z = String(n);
  while (z.endsWith(0)) {
    z = z.slice(0, z.length - 1);
  }
  return Number(z);
}
// console.log(noBoringZeros(9060000));


//**Another Solution
//---------------------------------------------------------------------------------------------

function noBoringZeros(n) {
  while (n % 10 === 0 && n!== 0) {
    n = n / 10
  }
  return n
}
console.log(noBoringZeros(9060000));
