function solve() {
  const fileio = require('/Users/vicky/Documents/Projects/AdventOfCode2022/src/common/fileio');

  let input = fileio.readLines('src/6/input.txt');
  input.pop();
  console.log(input);

  const stream = input[0];
  console.log(stream.length);

  let queue = [];
  let unique = new Set();

  let i;
  for(i = 0; i < 14; i++) {
    queue.push(stream.charAt(i));
    unique.add(stream.charAt(i))
  }

  


  for(i = 14; i < stream.length; i++) {
    console.log(`${i}: ${queue}, ${Array.from(unique.values())}`);

    if (queue.length === unique.size) {
      break;
    }
    let removed = queue.shift();
    queue.push(stream.charAt(i));

    let queueContains = false
    queue.forEach(letter => {
      if (letter === removed) {
        queueContains = true;
      }
    })
    if (!queueContains) {
      unique.delete(removed);
    }
    unique.add(stream.charAt(i));
  }

  console.log(i);

}

solve();