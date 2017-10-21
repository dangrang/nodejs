let util=require("util");
let events=require("events");
// util.inherits//原型
function cat(){

}
util.inherits(cat,events.EventEmitter);
let smallcat =new cat();
smallcat.on("mimi",function(food,r){
    console.log(`this a smallcat is eating ${food}`);
});
smallcat.emit("mimi","fish");

