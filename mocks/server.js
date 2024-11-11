const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};


app.use(bodyParser.json());
app.use(cors(corsOptions));

// Mock data for demonstration purposes
const mockDataResources = [
  {
    uuid: 'a1b2c3d4-e5f6-7890-1234-56789abcdef0',
    name: 'Datei1.scl',
    author: 'John Doe',
    type: 'SCL',
    changedAt: '2024-09-30T12:34:56Z',
    version: 'v4.1.0'
  },
  {
    uuid: 'a1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Datei2.scl',
    author: 'Martin Kurz',
    type: 'SCL',
    changedAt: '2024-09-28T12:34:56Z',
    version: 'v4.0.0'
  }
];

const mockResourceHistory = [
  {
    uuid: 'a1b2c3d4-e5f6-7890-1234-56789abcdef0',
    name: 'Datei1.scl',
    author: 'John Doe',
    type: 'SCL',
    changedAt: '2024-09-30T12:34:56Z',
    version: 'v4.0.0',
    comment: 'Initial upload',
    archived: false,
    available: true
  },
  {
    uuid: 'a1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Datei1.scl',
    author: 'John Doe',
    type: 'SCL',
    changedAt: '2024-10-01T08:00:00Z',
    version: 'v3.9.0',
    comment: 'Minor update',
    archived: false,
    available: true
  },
  {
    uuid: 'a1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Datei1.scl',
    author: 'Martin Kurz',
    type: 'SCL',
    changedAt: '2024-10-01T08:00:00Z',
    version: 'v3.4.0',
    comment: 'Minor update',
    archived: false,
    available: true
  }
];

// API Endpoints

// POST /api/scl/search
app.post('/api/scl/search', (req, res) => {
  const { uuid, type, name, author } = req.body;

  console.log('Search query:', req.body);

  let results = mockDataResources;

  if (!uuid && !name && !author) {
    return res.status(400).json({
      timestamp: new Date().toISOString(),
      code: 'INVALID_QUERY',
      message: 'At least one search parameter is required'
    });
  }

  // Filtering logic for the search (optional)
  if (uuid) {
    console.log('Filtering by UUID:', uuid);
    results = results.filter(resource => resource.uuid.toLowerCase() === uuid.toLowerCase()
      && resource.type.toLowerCase() === type.toLowerCase());
  }
  // if (type) {
  //   console.log('Filtering by type:', type);
  //   results = results.filter(resource => resource.type === type);
  // }
  if (name) {
    console.log('Filtering by name:', name);
    results = results.filter(resource => resource.name.toLowerCase() === name.toLowerCase()
      && resource.type.toLowerCase() === type.toLowerCase());
  }
  if (author) {
    console.log('Filtering by author:', author);
    results = results.filter(resource => resource.author.toLowerCase() === author.toLowerCase()
      && resource.type.toLowerCase() === type.toLowerCase());
  }

  console.log('Search results:', results);
  res.json({ results });
});

// GET /api/scl/:id/versions
app.get('/api/scl/:id/versions', (req, res) => {
  const { id } = req.params;
  const { type } = req.query;

  if (!type) {
    return res.status(400).json({
      timestamp: new Date().toISOString(),
      code: 'INVALID_TYPE',
      message: 'Type query parameter is required'
    });
  }

  // Mocking resource history response
  const history = mockResourceHistory.filter(resource => resource.uuid === id && resource.type === type);

  if (history.length === 0) {
    return res.status(404).json({
      timestamp: new Date().toISOString(),
      code: 'RESOURCE_NOT_FOUND',
      message: `No resource found for ID ${id} and type ${type}`
    });
  }

  res.json({ versions: history });
});

// GET /api/scl/:id/version/:version
app.get('/api/scl/:id/version/:version', (req, res) => {
  const { id, version } = req.params;
  const { type } = req.query;

  if (!type) {
    return res.status(400).json({
      timestamp: new Date().toISOString(),
      code: 'INVALID_TYPE',
      message: 'Type query parameter is required'
    });
  }

  const resourceVersion = mockResourceHistory.find(resource => resource.uuid === id && resource.version === version && resource.type === type);

  if (!resourceVersion) {
    return res.status(404).json({
      timestamp: new Date().toISOString(),
      code: 'VERSION_NOT_FOUND',
      message: `No resource found for ID ${id}, version ${version}, and type ${type}`
    });
  }

  res.setHeader('Content-Type', 'application/octet-stream');
  res.send(Buffer.from('Mocked binary content for the resource'));
});

// Error handling for unsupported endpoints
app.use((req, res) => {
  res.status(404).json({
    timestamp: new Date().toISOString(),
    code: 'NOT_FOUND',
    message: 'The requested resource was not found'
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Mocking server running on port ${port}`);
});
