const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];

const queue = [];

rl.on('line', function (line) {
  inputs.push(line);
}).on('close', function () {
  const parsedInputs = parseInputs(inputs);
  parsedInputs.forEach((command) => {
    excuteCommand(command);
  });
  process.exit();
});

const parseInputs = (inputs) => {
  const slicedInputs = inputs.slice(1);

  return slicedInputs.map((command) => {
    const splitedCommand = command.split(' ');
    if (splitedCommand.length > 1) {
      return {
        type: 'push',
        num: splitedCommand[1],
      };
    }
    return {
      type: splitedCommand[0],
    };
  });
};

const excuteCommand = (command) => {
  switch (command.type) {
    case 'push':
      queue.push(command.num);
      break;
    case 'pop':
      if (queue.length > 0) {
        const firstItem = queue.shift();
        console.log(firstItem);
      } else {
        console.log(-1);
      }
      break;
    case 'size':
      console.log(queue.length);
      break;
    case 'empty':
      console.log(queue.length === 0 ? 1 : 0);
      break;
    case 'front':
      console.log(queue[0] ?? -1);
      break;
    case 'back':
      console.log(queue[queue.length - 1] ?? -1);
      break;
    default:
      break;
  }
};
