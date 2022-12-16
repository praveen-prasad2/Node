// const http=require("http")
// let server=http.createServer((req,res)=> {
//     console.log(req.url)
// })
// server.listen(4000);


const http=require("http")
let fs=require("fs")

let server=http.createServer((req,res)=> {
    if(req.url=='/'){
    // console.log("request from base url")
    res.writeHead(200)
    res.write("<h1>Hello World</h1>")
    res.end()
}

if(req.url=='/Praveen'){
    res.write('<h1>Hello Praveen</h1>' )
    res.end()
}

if(req.url=='/mypage'){
    fs.promises.readFile("index.html", 'utf-8').then((data) =>{
        res.writeHead(200)
        res.write(data)
        res.end()
    })
    .catch((err) => {
        res.writeHead(500)
          res.write("Page can't be reached")
          res.end()
      })}

if(req.url=="/style.css"){
    fs.promises.readFile("style.css", 'utf-8').then((data) =>{
        res.writeHead(200)
        res.write(data)
        res.end()
})
} 
    
})
server.listen(4000,(err)=>{
    if(err){
        console.log("Poyi matte terminal off cheyy")
    }else{
        console.log("Success")
    }
});
