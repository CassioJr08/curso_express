const express = require('express');

const app = express();
const port = 3000

app.get('/', function(req, res) {
    return res.json({
        message: 'Olá Dev! Bem vindo ao curso!'
    });
});

app.listen(port, () => console.log('Server started port ' + port));