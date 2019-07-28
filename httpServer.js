const http = require('http');
const city  = require('./find');

const server = http.createServer((req, res) =>{

});

const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log('listening on port 3000');
});