const names = require("./name");
const sayHi = require("./utils");

const { john, peter } = names;

sayHi("susan");
sayHi(john);
sayHi(peter);
