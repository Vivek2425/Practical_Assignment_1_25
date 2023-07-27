const http = require('http');
const url = require('url');
const fs = require('fs');
const static = require('node-static');
var fileserver = new static.Server('files');
const server = http.createServer((req,res)=>{
    var url1 = url.parse(req.url, true);
    if(url1.pathname=="/file.html"){
        // res.end("hello nworld");
        // fs.readFile('./files/index.html',(err,data)=>{
        //     if(err){
        //         res.end(err);
        //     }else{
        //         res.write(data);
        //         res.end();  
        //     }
        // })
        fileserver.serve(req,res);
    }else if(url1.pathname=="/index.html"){
        fileserver.serve(req,res);
    }else if(url1.pathname=="/processData" && req.method=="GET"){
        res.write("Name : " + url1.query.name + " Email : " + url1.query.email + " Passowrd : " + url1.query.password);
        res.end()
    }else if(url1.pathname=="/processData" && req.method=="POST"){
        let body = '';
        req.on("data" ,chunk=>{
            body += chunk.toString();
        })
        req.on("end" ,()=>{
            res.end('ok => '+ body)
        })
    }else{
        res.end("get lost");
    }
    
    // req.on("/",()=>{
    //     console.log("hello world")
    // })
})
server.listen(8080,()=>{
    console.log("Server starts on port 8080 port: http://localhost:8080")
})
