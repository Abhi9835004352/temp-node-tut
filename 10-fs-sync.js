const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log('start')

writeFileSync(
    './content/result-sync.txt',
    `here is the result : ${first}, ${second}`,
    {flag: 'a'}
);
console.log('done with the task!');

console.log('starting new task!');


