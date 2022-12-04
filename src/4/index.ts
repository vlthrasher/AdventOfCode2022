function solve() {
  const fileio = require('/Users/vicky/Documents/Projects/AdventOfCode2022/src/common/fileio');

  let input = fileio.readLines('src/4/input.txt');
  input.pop();
  console.log(input);

  let containCount = 0;

  input.forEach(pairing => {
    let pair = pairing.split(',');
    let elf1 = pair[0].split('-');
    let elf2 = pair[1].split('-');

    let elf1Min = parseInt(elf1[0]);
    let elf1Max = parseInt(elf1[1]);
    let elf2Min = parseInt(elf2[0]);
    let elf2Max = parseInt(elf2[1]);

    if ((elf1Min <= elf2Max && elf1Max >= elf2Min) || 
        (elf2Min <= elf1Max && elf2Max >= elf1Min)) {
      containCount++;
    }

  });

  console.log(containCount);

}

solve();