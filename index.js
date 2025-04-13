const express = require('express');
const cors = require('cors');
const { projects } = require('./data');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Get all video projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Add new project
app.post('/api/projects', (req, res) => {
  const { title, description } = req.body;
  const newProject = {
    id: Date.now(),
    title,
    description,
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

// Delete a project
app.delete('/api/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = projects.findIndex((p) => p.id === id);
  if (index > -1) {
    projects.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: 'Project not found' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});