/**Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
 * y is not considered a vowel for this kata
 **/
//---------------------------------------------------------------------------------------------

function shortcut(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      result.push(string[i]);
    }
  }
  return result.join("");
}
// console.log(shortcut("Mohmded"));

/**Another Solution 
 -------------------------------------------------------------------------------------**/

function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}
// console.log(shortcut("Mohmded"));

/**Another Solution 
 -------------------------------------------------------------------------------------**/

function shortcut(string) {
  return string
    .split("")
    .filter((str) => !"aeiou".includes(str))
    .join("");
}
// console.log(shortcut("Mohmded"));
