
const http = require('http');
const url = require('url');
const fd = require('fs');


http.createServer((req, res, callback) =>{
    let path = url.parse(request.url).pathname;


function handleFile(req){

let fileName = "." + path;

fs.readFile(fileName, (err, data)=>{
    if(err){
        if(callback){
          if( !callback(req,res)){

            res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
            res.end("<h1>Página Não encontrada</h1>");

          };
        }    
       
    }else{
        res.writeHead(200,{"Content-Type": "text/html"});
        res.write(data);
        res.end();
    }
})


}

function  handleRequest(req,res){
    let path = url.parse(req.url).pathname;

    let method = req.method;
    console.log(mathod);
    if(method == 'PUT'){
        res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
    }

    if(path =="/teste"){
        res.end("Teste");
        return true;
    }
    return false;
}
http.createServer((request,response) =>{
    let path = url.parse(request.url).pathname;

    let method = req.method;
            console.log(method); 


    handleFile(request,response, handleRequest);

}).listen(3000, err =>{
    if(err){
    console.log(err)
    }else{
        console.log("Servidor Rodando na Porta 3000")
    }
})
})
