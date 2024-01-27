/**Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.**/
//---------------------------------------------------------------------------------------------

function sumArray(array) {
  if (array == null) return 0; //Check if array is Empty
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));
