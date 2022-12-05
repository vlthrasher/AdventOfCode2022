function solve() {
  const fileio = require('/Users/vicky/Documents/Projects/AdventOfCode2022/src/common/fileio');

  let input = fileio.readLines('src/5/input.txt');
  input.pop();
  console.log(input);

  let stacks  = [];
  stacks[0] = ['H', 'B', 'V', 'W', 'N', 'M', 'L', 'P'];
  stacks[1] = ['M', 'Q', 'H'];
  stacks[2] = ['N', 'D', 'B', 'G', 'F', 'Q', 'M', 'L'];
  stacks[3] = ['Z', 'T', 'F', 'Q', 'M', 'W', 'G'];
  stacks[4] = ['M', 'T', 'H', 'P'];
  stacks[5] = ['C', 'B', 'M', 'J', 'D', 'H', 'G', 'T'];
  stacks[6] = ['M', 'N', 'B', 'F', 'V', 'R'];
  stacks[7] = ['P', 'L', 'H', 'M', 'R', 'G', 'S'];
  stacks[8] = ['P', 'D', 'B', 'C', 'N'];

  console.log(stacks);

  input.forEach(direction => {
    direction = direction.split("move ")[1];
    let directionPieces = direction.split(" from ");
    let stackDirections = directionPieces[1].split(" to ");

    let count = parseInt(directionPieces[0]);
    let from = parseInt(stackDirections[0]) - 1;
    let to = parseInt(stackDirections[1]) - 1;

    console.log(direction);
    // console.log(stacks[from]);
    // console.log(stacks[to]);
    for (let i = 0; i < count; i++) {
      let crate = stacks[from].pop();
      stacks[to].push(crate);
    }

    // console.log(stacks[from]);
    // console.log(stacks[to]);

    
  });

  stacks.forEach(stack => {
    console.log(stack);
  })

  let result = '';
  stacks.forEach(stack => {
    result += stack.pop();
  })
  console.log(result);
}

solve();