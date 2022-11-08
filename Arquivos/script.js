// IMPORTAR MODULOS 

let fs = require('fs');

//fs.writeFile('teste.txt','Hello World', function (error) ---   CRIA E SUBSTITUI ARQUIVO // sobresescrever


/*
fs.readFile('NovoNome.txt','UTF8', function (error, data){    // CRIA E CONCATENA ARQUIVO

    if(error) {throw error};

    console.log(data)

});*/


let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName, 'UTF8', (error, data)=>{

    if(error) throw error;

    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error)=>{
        if(error) throw error;

        console.log("Arquivo gerado com sucesso")
    })
})