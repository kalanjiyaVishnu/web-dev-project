
const http = require('http');
// const dat = require('./feature');
const express = require('express');
const path = require('path');
// var url = require('url');
// const fs = require('fs');
// const server = http.createServer((req,res)=>
// {
//     fs.appendFile('./form.html',`
    
//     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gamepad" class="svg-inline--fa fa-gamepad fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"></path></svg>
    
//     `,(err)=>
//     {
//         if(err)
//         {
//             return res.end('error');
//         }
//         else
//         {
//             console.log('file updated');
//         }
//     })
//     const form = fs.readFile('./form.html',(err,data)=>{
//         if(err)
//         {
//             res.write('Unable to open the file');
            
//         }
//         else
//         {
            
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.write(data);
//                 res.end();
            
//         }
//     });
//     // res.write('hello fromt the app.js'+ `${req.url} ${txt}`);
// });

// const server = http.createServer(function(req,res)
// {
//     res.write("hello");
//     res.end();
//     console.log('server runnin.....');
// });

// server.listen(3000);

const app = express();
// app.get('/',(req,res)=>
// {
//     res.sendFile(path.join(__dirname,'public','form.html'));
// });
app.use(express.static(path.join(__dirname,'public')));

const port = process.env.port || 3000;
app.listen(port ,() =>
{console.log(port+"hello");
});
// const person1 = new dat('dsaf',56);
// person1.hello();