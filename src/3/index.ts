function solvept1() {
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

function solvept2() {
  const fileio = require('/Users/vicky/Documents/Projects/AdventOfCode2022/src/common/fileio');

  let input = fileio.readLines('src/3/input.txt');
  input.pop();
  console.log(input);

  const badgeItems = new Array();

  for (let i = 0; i < input.length; i += 3) {
    let elf1 = new Set(input[i].split(''));
    let elf12 = new Set(input[i+1].split('').filter(item => elf1.has(item)));
    let elf123 = new Set(input[i+2].split('').filter(item => elf12.has(item)));
    if (elf123.size !== 1) {
      throw new Error('Every elf group must have exactly one item in common');
    } else {
      let elf123keys = elf123.keys()
      badgeItems.push(elf123keys.next().value);
    }
  }

  console.log(badgeItems);

  let sumPriorities = 0;

  badgeItems.forEach(char => {
    if (char.charCodeAt(0) > 90) {
      sumPriorities += char.charCodeAt(0) - ('a'.charCodeAt(0) - 1);
    } else {
      sumPriorities += char.charCodeAt(0) - ('A'.charCodeAt(0) - 1) + 26;
    }
  });

  console.log(sumPriorities);

}

solvept2();