// 用流的方式读写文件
const fs=require("fs");
let readFile=fs.createReadStream("event.js");
let writeFile=fs.createWriteStream("2.js");
readFile.pipe(writeFile);