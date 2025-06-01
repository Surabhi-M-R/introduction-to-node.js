const fs=require("fs");
const path=require("path");
const filename=" test.txt";
const filepath=path.join(__dirname,filename);

// const writefile= fs.writeFileSync(filepath,"This is the initial Data","utf-8");
// console.log(writefile);

const readfile=fs.readFileSync(filepath,'utf-8');
console.log(readfile);

const appendFile=fs.appendFileSync( filepath,"\n THis is the initial data ","utf-8");

