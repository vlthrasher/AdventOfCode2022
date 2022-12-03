function solve() {
  const fileio = require('/Users/vicky/Documents/Projects/AdventOfCode2022/src/common/fileio');

  let input = fileio.readLines('src/2/input.txt');
  input.pop();
  console.log(input);

  const choicePoints = {
    'X': {
      'A': 3,
      'B': 1,
      'C': 2
    },
    'Y': {
      'A': 1,
      'B': 2,
      'C': 3
    },
    'Z': {
      'A': 2,
      'B': 3,
      'C': 1
    }
  }

  const battlePoints = {
    'X': 0,
    'Y': 3,
    'Z': 6
  }

  let points = 0;

  input.forEach(round => {
    let choices = round.split(' ');
    points += choicePoints[choices[1]][choices[0]];
    points += battlePoints[choices[1]];
  });

  console.log(points);

}

solve();