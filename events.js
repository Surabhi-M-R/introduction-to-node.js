// import eventEmitter class
const EventEmitter=  require('events');
const emitter=new EventEmitter();

// emitter.on(" greet",()=>{
//     console.log(" hello");
// });

emitter.emit("greet");

emitter.on(" greet",(userName)=>{
    console.log(" hello ${userName} ");
});

emitter.emit("greet", 'sush');