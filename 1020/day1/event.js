let events=require("events");
//用class继承写一个类的事件绑定
class cat extends events{
    eat(food){
        console.log(`this a cat eating ${food}`);
    }
}
let smallcat = new cat();
smallcat.on("mimi",function(fish){
    smallcat.eat("fish");
})
smallcat.emit("mimi");
let fs=require("fs");
