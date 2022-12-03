function solve() {
  const fileio = require('/Users/vicky/Documents/Projects/AdventOfCode2022/src/common/fileio');

  let input = fileio.readLines('src/3/input.txt');
  input.pop();
  console.log(input);

  const misplaced = new Array();

  input.forEach(rucksack => {
     let compartmentSet = new Set(rucksack.substring(0, rucksack.length / 2).split(''));
     for (let i = rucksack.length / 2; i < rucksack.length; i++) {
      if (compartmentSet.has(rucksack.charAt(i))) {
        misplaced.push(rucksack.charAt(i));
        break;
      }
     }
  });

  console.log(misplaced);

  let sumPriorities = 0;

  misplaced.forEach(char => {
    if (char.charCodeAt(0) > 90) {
      sumPriorities += char.charCodeAt(0) - ('a'.charCodeAt(0) - 1);
    } else {
      sumPriorities += char.charCodeAt(0) - ('A'.charCodeAt(0) - 1) + 26;
    }
  });

  console.log(sumPriorities);

}

solve();