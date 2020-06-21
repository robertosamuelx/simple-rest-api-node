const express = require('express');
const server = express();
const {json} = require('express');

server.use(json());

const client_list = [
    {
        name: 'João',
        age: 20,
        email: 'joao@mail.com'
    },
    {
        name: 'Maria',
        age: 27,
        email: 'maria@mail.com'
    },
    {
        name: 'José',
        age: 16,
        email: 'jose@mail.com'
    }
];

server.get('/clients', (req, res) => {
    return res.json(client_list);
});

server.post('/clients', (req, res) => {
    const client =  req.body;
    client_list.push(client);
    return res.json(client_list);
});

server.listen(3000, () => { 
    console.log('Servidor rodando!');
});