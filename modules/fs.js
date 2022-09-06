const fs =require('fs');
const path  =require('path');

//Criar uma paste
fs.mkdir(path.join(__dirname, "/test"), (error) => {
    if(error){
        return console.log("Erro: ", error);
    }

    console.log("Pasta criada com sucesso!");

});

//criar um arquivo
fs.writeFile(path.join(__dirname, "/test", "/test.txt"),  
    "Hello node",
    (error) =>{
        if(error){
            return console.log("Error: ", error);
        }
    console.log("Arquivo criado com sucesso!");
});

//Adicionar a um arquivo
fs.appendFile(path.join(__dirname), "/test", "/test.txt"), (error) => {
    if(error){
        return console.log("Error: ", error);
    }

    console.log("Arquivo modificado com sucesso!")
}

//Ler arquivo
fs.readFile(path.join(__dirname, "/test", "/test.txt"), utf8, (error) => {
    if(error){
        return console.log("Error: ", error);
    }
    console.log("Arquivo realizado leitura com sucesso!");
});




