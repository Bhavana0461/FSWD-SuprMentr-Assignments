import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME || 'portfolio';
const collectionName = 'projects';

const client = new MongoClient(uri, { serverApi: { version: '1' } });
let projectCollection;

const seedProjects = [
  {
    title: 'MongoDB Portfolio Demo',
    description: 'This project uses MongoDB to store and display portfolio data in a React app.',
    tech: ['MongoDB', 'Express', 'React', 'Vite'],
  },
  {
    title: 'Live Collection Fetch',
    description: 'The app retrieves project records from a cloud or local MongoDB database through an API.',
    tech: ['API', 'Database', 'JavaScript'],
  },
];

async function createCollectionIfNeeded() {
  if (!uri) {
    console.warn('MONGODB_URI is not configured. The backend will not connect to MongoDB.');
    return;
  }

  await client.connect();
  const db = client.db(dbName);
  projectCollection = db.collection(collectionName);

  const count = await projectCollection.countDocuments();
  if (count === 0) {
    await projectCollection.insertMany(seedProjects);
    console.log('Seeded MongoDB project data to the collection.');
  }
}

app.use(cors());
app.use(express.json());

app.get('/api/projects', async (req, res) => {
  if (!projectCollection) {
    return res.status(500).json({ error: 'MongoDB connection not established.' });
  }

  const projects = await projectCollection.find({}).toArray();
  res.json(projects);
});

app.post('/api/projects', async (req, res) => {
  if (!projectCollection) {
    return res.status(500).json({ error: 'MongoDB connection not established.' });
  }

  const project = req.body;
  const result = await projectCollection.insertOne(project);
  res.status(201).json({ insertedId: result.insertedId });
});

app.listen(port, async () => {
  console.log(`Backend server listening on http://localhost:${port}`);
  try {
    await createCollectionIfNeeded();
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
  }
});
