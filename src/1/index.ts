const fileio = require('/Users/vicky/Documents/Projects/AdventOfCode2022/src/common/fileio');

let input = fileio.readLines('src/1/input.txt');
console.log(input);

let elfCalories = new Array();
let localSum = 0;

input.forEach(calories => {
  if (calories === '') {
    elfCalories.push(localSum);
    localSum = 0;
  } else {
    localSum += parseInt(calories);
  }
});

elfCalories = elfCalories.sort((a, b) => b - a);

console.log(elfCalories[0] + elfCalories[1] + elfCalories[2]);