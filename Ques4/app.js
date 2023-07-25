const websocket = require('ws');
const http = require('http');
const url = require('url');

const st = require('node-static');

const fileserver = new st.Server('./public');

const httpserver = http.createServer((req,res)=>{
    req.on('end',()=>{
        var get  = url.parse(req.url,true).query;
        fileserver.serve(req,res);
    }).resume();
}).listen(8080,()=>{
    console.log("http://localhost:8080");
})

const wss = new websocket.Server({server:httpserver});

wss.on('connection',(ws)=>{
    ws.send("hello client..!!");

    ws.on('message',messgae=>{
        ws.send('I recieved : ' + messgae)
    })
})