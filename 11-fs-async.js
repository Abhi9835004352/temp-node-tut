const {readFile,writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile('./content/result-async.txt',`Here is my first text: ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
    console.log('task completed!');
})

console.log('starting new task!');