const express = require('espress');

const app= express();

app.get('/home', (req,res) => {
    res.contentType('aplication/html');
    res.status(200).send('<h1>Hello World<h1>')
})

app.get('/users', (req, res) => {
    const users = [ 
        {
            name:'Arley',
            email:'arley@gmail.com' 
        },
        {
            name: 'Priscila',
            email: 'Priscila@gmail.com'
        },
    ]
});

const port = 8080;

app.listen(port, () =>  console.log(`Rodando com express ${port}!`));


