const fs =require("fs");
const path=require("path");

const filename ="fsasync.txt";
const filepath=path.join(__dirname,filename);

// fs.writeFile(filepath, "this is the initial data","utf-8",
//     (err) =>{
//         if(err) console.err(err);
//         else console.log(" file has  been saved ");
//     }
// );
// fs.readFile(filepath,"utf-8",
//     (err,data) =>{
//         if(err) console.error(err);
//         else console.log(data);
//     }
// );

// fs.appendFile(filepath,"\n this is the updated data","utf-8",(err)=>{
//     if(err) console.errror(err);
//     else console.log(" file has been appended successfully");
// })

fs.unlink(filepath, (err)=>{
    if(err) console.error(err);
    else console.log(" file has been successfully deleted");
} )