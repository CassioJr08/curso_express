const express = require('express');

const app = express();
const port = 3000

app.get('/projects', function(req, res) {
    const {title, owner, page} = req.query //consulta de parametros
    console.log(title, owner, page)

    return res.json([
        'Projeto 1', 
        'Projeto 2'
    ]);
});

app.post('/projects', function(req, res) {
    return res.json([
        'Projeto 1', 
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.put('/projects/:id/:name', function(req, res) { // parametros de rota
    const {id, name} = req.params
    console.log(id, name)
    return res.json([
        'Projeto 4', 
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.delete('/projects/:id', function(req, res) {
    return res.json([
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.listen(port, () => console.log('Server started port ' + port));