const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
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
    version: 'v4.1.0',
  },
  {
    uuid: 'a1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Datei2.scl',
    author: 'Martin Kurz',
    type: 'SCL',
    changedAt: '2024-09-28T12:34:56Z',
    version: 'v4.0.0',
  },
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
    available: true,
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
    available: true,
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
    available: true,
  },
];

const mockLocations = [
  {
    uuid: 'z1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Wien',
    key: 'vienna',
    description: 'Aktenschrank im Wiener Office',
  },
  {
    uuid: 'c1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Uwe',
    key: 'uwe',
    description: 'USB-Stick von Uwe',
  },
  {
    uuid: 'e1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Cloud',
    key: 'cloud',
    description: 'Computer von jemand anderen',
  },
];

const mockArchivedResources = [
  {
    uuid: 'e1c0c857-3e9c-4cde-8b56-20e203e0ed8a',
    location: 'z1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Document A',
    note: 'Initial version',
    author: 'Alice Smith',
    approver: 'Bob Johnson',
    type: 'Report',
    contentType: 'application/pdf',
    voltage: '230V',
    version: 'v1.0',
    modifiedAt: '2024-01-15T10:00:00Z',
    archivedAt: '2024-10-05T14:30:00Z',
  },
  {
    uuid: 'b4c0b7cd-2f1e-47cd-b3b6-4d59f3fcd945',
    location: 'z1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Document B',
    note: 'Updated figures',
    author: 'Alice Smith',
    approver: 'Bob Johnson',
    type: 'Report',
    contentType: 'application/pdf',
    voltage: '230V',
    version: 'v1.1',
    modifiedAt: '2024-02-10T11:15:00Z',
    archivedAt: '2024-10-05T14:30:00Z',
  },
  {
    uuid: 'f1e6c7bd-4e6d-439b-b789-3c2c7b610af6',
    location: 'z1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Document C',
    note: 'Finalized version',
    author: 'John Doe',
    approver: 'Jane Doe',
    type: 'Specification',
    contentType:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    voltage: '400V',
    version: 'v2.0',
    modifiedAt: '2024-03-12T09:20:00Z',
    archivedAt: '2024-10-05T14:30:00Z',
  },
  {
    uuid: 'c8dce728-9f54-4b0e-b3b5-96fabe4e8c63',
    location: 'z1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Document D',
    note: 'Minor corrections',
    author: 'Jane Doe',
    approver: 'Alice Smith',
    type: 'Manual',
    contentType: 'application/pdf',
    voltage: '110V',
    version: 'v1.2',
    modifiedAt: '2024-04-01T15:30:00Z',
    archivedAt: '2024-10-05T14:30:00Z',
  },
  {
    uuid: 'a5d5e2e1-9355-4e6b-8ef5-c2bc67b3c75e',
    location: 'z1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Document E',
    note: 'Updated layout',
    author: 'Michael Brown',
    approver: 'Sarah White',
    type: 'Report',
    contentType:
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    voltage: '380V',
    version: 'v1.3',
    modifiedAt: '2024-05-20T16:45:00Z',
    archivedAt: '2024-10-05T14:30:00Z',
  },
  {
    uuid: 'a1e7b3fd-3e8e-4b92-a39c-2b4a205cfa8d',
    location: 'e1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Document F',
    note: 'Preliminary draft',
    author: 'Sarah White',
    approver: 'Michael Brown',
    type: 'Draft',
    contentType: 'text/plain',
    voltage: '220V',
    version: 'v0.1',
    modifiedAt: '2024-06-01T12:00:00Z',
    archivedAt: '2024-10-05T14:30:00Z',
  },
  {
    uuid: '2f1cbe7c-7f6c-4599-b9b5-fbdc78a52ef9',
    location: 'e1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Document G',
    note: 'Revised',
    author: 'Alice Smith',
    approver: 'John Doe',
    type: 'Report',
    contentType: 'application/pdf',
    voltage: '240V',
    version: 'v1.1',
    modifiedAt: '2024-07-10T08:30:00Z',
    archivedAt: '2024-10-05T14:30:00Z',
  },
  {
    uuid: '5f3e7b4c-6b8e-42b0-b0ec-66cd19bdb295',
    location: 'e1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Document H',
    note: 'Final approval',
    author: 'Jane Doe',
    approver: 'Bob Johnson',
    type: 'Report',
    contentType:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    voltage: '360V',
    version: 'v2.0',
    modifiedAt: '2024-08-15T14:00:00Z',
    archivedAt: '2024-10-05T14:30:00Z',
  },
  {
    uuid: '3c4b2a7e-4c8b-49da-9627-5b783d85745f',
    location: 'e1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Document I',
    note: 'Updated charts',
    author: 'Alice Smith',
    approver: 'Michael Brown',
    type: 'Presentation',
    contentType: 'application/vnd.ms-powerpoint',
    voltage: '380V',
    version: 'v1.5',
    modifiedAt: '2024-09-01T11:30:00Z',
    archivedAt: '2024-10-05T14:30:00Z',
  },
  {
    uuid: '5a1f9e9e-2980-45c8-aaa2-d97a9f0b87f3',
    location: 'c1b2c3d4-e5f6-7890-1234-56789abcdef1',
    name: 'Document J',
    note: 'Final edits',
    author: 'John Doe',
    approver: 'Sarah White',
    type: 'Specification',
    contentType: 'application/pdf',
    voltage: '220V',
    version: 'v3.0',
    modifiedAt: '2024-09-15T16:20:00Z',
    archivedAt: '2024-10-05T14:30:00Z',
  },
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
      message: 'At least one search parameter is required',
    });
  }

  // Filtering logic for the search (optional)
  if (uuid) {
    console.log('Filtering by UUID:', uuid);
    results = results.filter(
      (resource) =>
        resource.uuid.toLowerCase() === uuid.toLowerCase() &&
        resource.type.toLowerCase() === type.toLowerCase()
    );
  }
  // if (type) {
  //   console.log('Filtering by type:', type);
  //   results = results.filter(resource => resource.type === type);
  // }
  if (name) {
    console.log('Filtering by name:', name);
    results = results.filter(
      (resource) =>
        resource.name.toLowerCase() === name.toLowerCase() &&
        resource.type.toLowerCase() === type.toLowerCase()
    );
  }
  if (author) {
    console.log('Filtering by author:', author);
    results = results.filter(
      (resource) =>
        resource.author.toLowerCase() === author.toLowerCase() &&
        resource.type.toLowerCase() === type.toLowerCase()
    );
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
      message: 'Type query parameter is required',
    });
  }

  // Mocking resource history response
  const history = mockResourceHistory.filter(
    (resource) => resource.uuid === id && resource.type === type
  );

  if (history.length === 0) {
    return res.status(404).json({
      timestamp: new Date().toISOString(),
      code: 'RESOURCE_NOT_FOUND',
      message: `No resource found for ID ${id} and type ${type}`,
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
      message: 'Type query parameter is required',
    });
  }

  const resourceVersion = mockResourceHistory.find(
    (resource) =>
      resource.uuid === id &&
      resource.version === version &&
      resource.type === type
  );

  if (!resourceVersion) {
    return res.status(404).json({
      timestamp: new Date().toISOString(),
      code: 'VERSION_NOT_FOUND',
      message: `No resource found for ID ${id}, version ${version}, and type ${type}`,
    });
  }

  res.setHeader('Content-Type', 'application/octet-stream');
  res.send(Buffer.from('Mocked binary content for the resource'));
});

app.get('/compas-scl-data-service/api/locations', (req, res) => {
  return res.json(mockLocations);
});

app.post('/compas-scl-data-service/api/locations', (req, res) => {
  return res.json({
    uuid: 'f1b2c3d4-e5f6-7890-1234-56789abcdff1',
    ...req.body,
  });
});

app.put('/compas-scl-data-service/api/locations/:locationId', (req, res) => {
  return res.json(req.body);
});

app.delete('/compas-scl-data-service/api/locations/:locationId', (req, res) => {
  return res.json();
});

app.post(
  '/compas-scl-data-service/api/archive/resources/search',
  (req, res) => {
    const {
      uuid,
      location,
      name,
      approver,
      contentType,
      type,
      voltage,
      modifiedAt,
      archivedAt,
    } = req.body;

    // Filter the resources based on the provided search parameters
    const filteredResources = mockArchivedResources.filter((item) => {
      let filter = true;

      if (uuid && item.uuid !== uuid) {
        filter = false;
      }
      if (location && item.location !== location) {
        filter = false;
      }
      if (name && item.name !== name) {
        filter = false;
      }
      if (approver && item.approver !== approver) {
        filter = false;
      }
      if (contentType && item.contentType !== contentType) {
        filter = false;
      }
      if (type && item.type !== type) {
        filter = false;
      }
      if (voltage && item.voltage !== voltage) {
        filter = false;
      }
      if (modifiedAt && item.modifiedAt !== modifiedAt) {
        filter = false;
      }
      if (archivedAt && item.archivedAt !== archivedAt) {
        filter = false;
      }

      return filter;
    });
    console.log(filteredResources);
    return res.json({
      results: filteredResources,
    });
  }
);

// Error handling for unsupported endpoints
app.use((req, res) => {
  res.status(404).json({
    timestamp: new Date().toISOString(),
    code: 'NOT_FOUND',
    message: 'The requested resource was not found',
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Mocking server running on port ${port}`);
});
