const http = require('http');
const url = require('url');
const static = require('node-static')
// var fileserver = static.Server('static')
// const server = http.createServer((req,res)=>{
//     var url2 = url.parse(req.url,true);
//     if(url2.pathname=="/"){
//         fileserver.serve(req,res);
//     }else if(url2.pathname == "/getHello"){
//         res.end("Hello Node js..!!");
//     }else{
//         res.end("Do nothing")
//     }
// })
// server.listen(8080,()=>{
//     console.log("http://localhost:8080");
// })

var fileserver =new static.Server('static');

const server = http.createServer((req, res) => {
   var url2 = url.parse(req.url, true);
   if (url2.pathname == "/") {
      fileserver.serve(req, res);
   } else if (url2.pathname == "/getHello" && req.method=="GET") {
      res.end("Hello Node js..!!");
      // res.end();
   } else {
      res.end("Do nothing");
   }
});

server.listen(8080, () => {
    console.log("http://localhost:8080");
 });
 
