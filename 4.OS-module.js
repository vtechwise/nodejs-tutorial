const os = require("os");

console.log(os.userInfo());

const currentOS = {
  name: os.type(),
  relaase: os.release(),
  totalMem: os.totalmem(),
  frreMem: os.freemem(),
};

console.log(currentOS);
