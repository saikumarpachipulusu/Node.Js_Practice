// const http = require("http");
// const fs=require("fs");
//create server

// const server=http.createServer(function(req,res){
    
// });

//listen to the server
// server.listen(9000,()=>{
//     console.log("server is run up");
// });

// server.on("request",(req,res)=>{
//get the url
//     const url=req.url;
//     if(url==='/login'){
//read content on login html page
//         fs.readFile("login.html",(err,data)=>{
//             if(err){
//                 console.log(err);
//             }
//             else
//             {
//                 res.writeHead(200,{"content-type":"text/html"});
//                 res.write(data);
//                 res.end();
//             }
//         });
//     }
// })

// server.on("request", (req, res) => {
     //get the url
//   const url = req.url;
//   if (url === "/") {
        //read content on login html page
//     fs.readFile("home.html", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.writeHead(200, { "content-type": "text/html" });
//         res.write(data);
//         res.end();
//       }
//     });
     
//   }
// });

//   server.on("request",(req,res)=>{
//       const url=req.url;

    //parse incoming data(payload)
//       if(url==='/create-post' && req.method==='POST')
//       { 
    //Recieve the incoming data
//         const post=[]
//         req.on('data',(chunk)=>{
//            post.push(chunk); 
//         }).on("end",function(){
    //pass the buffer data into string
//             const paredData=Buffer.concat(post).toString();
//             res.writeHead(200,{"content-Type":"text/json"});
//             res.write("Post Created");
//             res.end();
//         })
//       }
//   })


//listen to event

// server.on("request",(req,res){
//     console.log("Event has been fired");
// });


 //create login  html file

// fs.writeFile("login.html",
// `
// <div>
//     <h1> This is login page</h1>
//     <p>Please provide your valid login credentials</p>
// </div>
// `,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File has been created");
//     }
// });

//create register html file

// fs.writeFile("register.html",
// `
// <div>
//     <h1> This is register page</h1>
//     <p>Please provide your valid login credentials</p>
// </div>
// `,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File has been created");
//     }
// });

//------
//Coding challenge
//------

//create a server to render two html pages with different content
//Use the fs module to create a main folder(public) and two subfolders(pages and css)
//Create 3 files,two in the pages folder: home.html,and about.html
//create a file in the folder: style.css
//Create a server to server the files

//-----Solution-----

const http = require("http");
const fs=require("fs");


// fs.mkdir("public/css",err=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Folder has been created");
//     }
// })

//create files()

// fs.writeFile("public/css/style.css",`

// h1{
//     color:red;
// }

// `,function(err){
//    if(err)
//    {
//     console.log(err);
//    }
//    else{
//     console.log("file has been created")
//    }
// })

const server = http.createServer();

//Listen to the server
server.listen(8000,console.log("Server is running"));

//listen to an event

server.on("request",(req,res)=>{
    //get the url
    const url=req.url;
    if(url==='/')
    {
        fs.readFile("public/pages/home.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
    }

})