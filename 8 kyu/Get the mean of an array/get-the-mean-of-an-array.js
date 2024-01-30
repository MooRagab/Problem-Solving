/**It's the academic year's end, fateful moment of your school report. The averages must be calculated.
All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.**/
//---------------------------------------------------------------------------------------------

function getAverage(marks) {
  let sum = 0;
  let average;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  average = sum / marks.length;
  return Math.floor(average);
}
console.log(getAverage([35.4, 24.8, 12.6, 15.9, 60.7]));

/**Another Solution 
   -------------------------------------------------------------------------------------**/

function getAverage(marks) {
  return Math.floor(marks.reduce((acc, num) => acc + num, 0) / marks.length);
}
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
