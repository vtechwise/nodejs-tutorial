const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with an id:${id}`);
});

customEmitter.emit("response", "john", 35);
