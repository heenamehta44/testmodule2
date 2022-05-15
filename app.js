const fs = require('fs');
const express = require('express');
// create obj and add port
const app = express();
const port = 6500;
// Read Data From File
// fs.readFile('./data/db.json',(err,result) => {
//     if(err){
//         throw err;
//     }else {
//         console.log(JSON.parse(result))
//     }
// })
// Write data in text file
// fs.appendFile('./data/mytext.txt','My test read file\n',(err) => {
//     if(err) throw err;
//     else{
//         console.log('Data written successfully')
//     }
// })
//Define default route with express
app.get('/',(req,res) => {
    res.send('<h1>Welcome to express server</h1>')
})
//New Route file
app.get('/getMovies',(req,res) =>{
    fs.readFile('./data/db.json',(err,result) => {
        if(err){
            throw err;
        }else {
            res.send(JSON.parse(result))
        }
    })
})
//create server to listen on port
app.listen(port,(err) => {
    console.log('server is running on port'+port);
})