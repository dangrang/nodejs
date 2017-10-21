const http=require("http");
var server=http.createServer((request,response)=>{
    response.end("helloword333");
}).listen(3000,"10.35.164.84");
console.log("server is ready on pout 3000" );

//客户端
// const http=require("http");
//创建客户端

//向服务器发送请求
// 方式：get |post (method);

// http.request(总的访问方式)==http.get||http.post

// var obj={
//     host:"www.imooc.com",
//     path:"/",
//     method:"GET"
// }
// var client =http.request(obj,(response)=>{
//     var bigbuffer="";
//     response.on("data",(chunk)=>{
//         bigbuffer+=chunk;
//     })
//     response.on("end",()=>{
//         console.log(bigbuffer.toString());
//     })
// })
// client.end();
//创建web服务端
//接受客户的请求
//引用http这个模块
// let http=require("http");
// // 创建一个web服务器得类http.server()
// var server=new http.Server();
// // request用来接受客户端的数据流、这个对象里包含了所有客户端输入的信息
// //response用来给客户端返回信息
// server.on("request",(request,response)=>{
//     console.log(request.url);;
//     response.write("helloword!");
//     response.end();
// })
// server.listen(3000,"10.35.164.84");
// console.log("server is ready on port 3000");

