const express = require('express');
const {v4: uuidv4} = require("uuid");

const app = express();
const port = 3000;
app.use(express.json());


const projects = [];


app.get('/projects', function(req, res) {
    return res.json(projects);
});

app.post('/projects', function(req, res) {
    const {name, owner} = req.body;
    const project = {
        id: uuidv4(),
        name,
        owner
    };

    projects.push(project);

    return res.status(201).json(project);
    
});

app.put('/projects/:id', function(req, res) { // parametros de rota
    const {id} = req.params
    const {name, owner} = req.body;
    
    const projectIndex = projects.findIndex((p) => p.id ===  id);

    if(projectIndex < 0) {
        return res.status(404).json({error: 'Project not found'});
    };
    
    if(!name || !owner) {
        return res.status(400).json({error: 'Name and owner are required'});
    };

    const project = {
        id,
        name,
        owner
    };

    projects[projectIndex] = project;

  
    return res.status(200).json(project);
});

app.delete('/projects/:id', function(req, res) {
    const {id} = req.params;

    const projectIndex = projects.findIndex((p) => p.id ===  id);

    if(projectIndex < 0) {
        return res.status(404).json({error: 'Project not found'});
    };
    
    projects.splice(projectIndex, 1);

    return res.status(204).send();
});

app.listen(port, () => console.log('Server started port ' + port));