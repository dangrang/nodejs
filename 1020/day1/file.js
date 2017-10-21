// / let fs=require("fs");
// let path=require("path");
// function getfiles(dir,callback){
//     fs.readdirSync(dir).forEach((file)=>{
//         let pathname=path.join(dir,file);
//         if(fs.statSync(pathname).isDirectory()){
//             getfiles(path,callback);
//         }else{
//             callback(pathname);
//         }
//     })
// }
// getfiles(__dirname,(file)=>{
//     console.log(file);
// })

let fs=require("fs");
fs.writeFile("1.js");
fs.readFile("1.js","utf-8",(error,data)=>{
    fs.writeFile("2.js",data,(error)=>{
        if(error==null){
            console.log("复制成功");
            fs.unlink("1.js");
        }
    })
})