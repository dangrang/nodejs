let path=require("path");
//对指定的路径进行格式化，输出合法的路径
console.log(path.normalize("a//\d"));
//合并路径
console.log(path.join("c/","a/c/d"));
//用巡航的方式合并路径 找出所有路径
console.log(path.resolve("d/","a/s/d"));
//输入一个文件名，输出当前文件的路径
console.log(path.dirname(__dirname));
//输入一个文件，输出文件名
console.log(path.basename(__filename));
//输出文件名，返回其文件名的后缀
console.log(path.extname(__filename));
//把一个指定的路径转化成对象
console.log(path.parse(__dirname));