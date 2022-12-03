function solve() {
  const fileio = require('/Users/vicky/Documents/Projects/AdventOfCode2022/src/common/fileio');

  let input = fileio.readLines('src/2/input.txt');
  input.pop();
  console.log(input);

  const choicePoints = {
    'X': 1,
    'Y': 2,
    'Z': 3
  }

  const battlePoints = {
    'X': {
      'A': 3,
      'B': 0,
      'C': 6
    },
    'Y': {
      'A': 6,
      'B': 3,
      'C': 0
    },
    'Z': {
      'A': 0,
      'B': 6,
      'C': 3
    },
  }

  let points = 0;

  input.forEach(round => {
    let choices = round.split(' ');
    points += choicePoints[choices[1]];
    points += battlePoints[choices[1]][choices[0]];
  });

  console.log(points);

}

solve();