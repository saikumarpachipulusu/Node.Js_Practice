// const fs=require("fs");
//--------
//Create file
//-------
// console.log(fs);

// fs.writeFile("index.html","Hello,welcome",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File Created");
//     }
// })

//create a file using async await

// const fs = require("fs/promises");

// const createFile = async () =>{
//     try{
//         await fs.writeFile("login.html","welcome to your login page");
//     }
//     catch(error)
//     {
//          console.log(error);
//     }
// }

// createFile();

// const fs = require("fs/promises");

// const createFile = async (fileToCreate,content) =>{
//     try{
//         await fs.writeFile(fileToCreate,content);
//         console.log("File Created");
//     }
//     catch(error)
//     {
//          console.log(error);
//     }
// }

// createFile("aboutUs.docx","This is my first pdf file created");

//const fs = require("fs");
//Read from a file

// const result = fs.readFileSync("aboutUs.pdf");

// console.log(result.toString());

// fs.readFile("aboutUs.pdf",function(err,data){
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

//rename a file

// fs.rename("aboutUs.pdf","contactUs.pdf",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("File renamed successfully");
// })

//copy File

// fs.copyFile("aboutUs.docx", "contactUs.pdf", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File created");
//   }
// });

// fs.writeFile("index.html", "Home page", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File created");
//   }
// });

//append File
const fs = require("fs");
// fs.appendFile("index.html","This is another content",function(err){
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log("File appended successfully");
// })

//Truncate a file
// fs.truncate("index.html",10,function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("File Truncated");
// });

//stats of a file

// fs.stat("index.html",function(err,stats){
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log(stats);
// })

//delete a file

// fs.unlink("login.html" ,err=>console.log(err));

