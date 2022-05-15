const fs = require('fs');
fs.readFile('./data/db.json',(err,result) => {
    if(err){
        throw err;
    }else {
        console.log(JSON.parse(result))
    }
})