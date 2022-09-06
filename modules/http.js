const http = require(http);

const port = 8000;

const server = http.createServer((req, res) =>{
    if( req === '/home'){
        res.whiteHead(200, {'Content-Type' : "text/html"})
        res.end("<h1> Home page <h1>") 
    }

    if(req.url === '/users'){
        const users = [
            {
                name:'Arley',
                email:'arley@gmail.com' 
            },
            {
                name: 'Priscila',
                email: 'Priscila@gmail.com'
            },
        ];
        res.whiteHead(200, {'Content-Type': "aplication/jason"});
        res.end(JSON.stringify(users));
    }
})

server.listen(port, () => console.log(`Rodando na porta ${port}!`));

JSON.stringify();


