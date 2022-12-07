function solve() {
  const fileio = require('/Users/vicky/Documents/Projects/AdventOfCode2022/src/common/fileio');

  let input = fileio.readInput('src/7/input.txt');
  let commands = input.split("$ ");
  commands.shift();

  const MAX_SIZE = 100000;

  function getDirectorySize(node) {
    let totalSize = 0;
    Object.values(node.children).forEach((child) => {
      totalSize += child.size;
    });
    node.size = totalSize;
    return totalSize;
   }
   
   function formTree() {
    let root = {
      name: '/',
      size: 0,
      parent: null,
      children: {}
    }

    let node = root;

    commands.forEach((command) => {
      let inputOutput = command.split('\n');
      console.log(`formTree: ${node.name}: ${inputOutput[0]}`);

      if (inputOutput[0].startsWith('cd')) {
        let toDir = inputOutput[0].split(' ')[1];
        if (toDir === '..') {
          getDirectorySize(node);
          node = node.parent;
        } else {
          if (!(toDir in node.children)) {
            node.children[toDir] = {
              name: toDir,
              size: 0,
              parent: node,
              children: {}
            }
          }
          node = node.children[toDir]
        }
    
      } else if (inputOutput[0] === 'ls') {
        for (let i = 1; i < inputOutput.length; i++) {
          if (inputOutput[i].length === 0) continue;
          let output = inputOutput[i].split(' ');
          if (output[0] === 'dir') {
            if (!(output[1] in node.children)) {
              node.children[output[1]] = {
                name: output[1],
                size: 0,
                parent: node,
                children: {}
              }
            }
          } else {
            node.children[output[1]] = {
              name: output[1],
              size: parseInt(output[0]),
              parent: node,
              children: null
            }
          }
        }
        getDirectorySize(node);
      }
    });
    return root;
   }


  let root = formTree();

  function getTreeSize(node) {
    if (node.children !== null) {
      Object.keys(node.children).forEach(childKey => {
        getTreeSize(node.children[childKey]);
      });
      getDirectorySize(node);
    }
  }

  getTreeSize(root);
  console.log(root)


  const TOTAL_DISK = 70000000;
  const freeDisk = TOTAL_DISK - root.size;
  const REQUIRED_DISK = 30000000;
  const deleteSize = REQUIRED_DISK - freeDisk;

  console.log(`deleteSize: ${deleteSize}`);

  let minDirectorySize = root.size;
  function dfs(node) {
    if (node.children !== null) {
      if (node.size > deleteSize) {
        Object.keys(node.children).forEach(childKey => {
          dfs(node.children[childKey]);
        });
        minDirectorySize = Math.min(minDirectorySize, node.size);
      }
    }
  }

  dfs(root);
  console.log(`minDirectorySize: ${minDirectorySize}`);

}

solve();