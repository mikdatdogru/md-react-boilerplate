const packageJson = require('./package');
const fs = require('fs');
// console.log(`${process.env.CONFIG}`);
// eslint-disable-next-line
const configSetter = require(`./config/${process.env.CONFIG}.json`);
configSetter.version = packageJson.version;
console.log(configSetter);
const fileData = `window.env = ${JSON.stringify(configSetter, null, 2)};`;
// console.log(fileData);
fs.writeFile('./public/config.js', fileData,()=>{
  console.log("done!");
});