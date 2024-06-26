// index.js
import express from 'express';

import backendroute from './backend.js';

import dashbackendroute from './dashbackend.js';

import stripeServiceroute from './stripeService.js';

import cors from 'cors';

import { dirname } from 'path';

import path from 'path';

import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const PORT = process.env.PORT || 3300;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

//serve static files
const staticPath = path.join(__dirname,  'auction');
console.log('staticPath:', staticPath);
app.use(express.static(staticPath));


app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});



// backend.js
app.use('', backendroute);

// dashbackend.js
app.use('', dashbackendroute);

app.use('', stripeServiceroute);




// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`You can access the server at http://localhost:${PORT}`);
});
