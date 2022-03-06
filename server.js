const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('Кип алив работает')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Работает")});
}
module.exports = keepAlive;
