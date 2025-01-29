const { readFileSync, writeFileSync } = require("fs");

const firstText = readFileSync("./content/subfolder/text.txt", "utf8");

console.log(firstText);

writeFileSync(
  "./content/result-syc.txt",
  `hello herer is the result ${firstText}`
);
