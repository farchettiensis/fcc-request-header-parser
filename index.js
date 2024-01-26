// index.js

// init project
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// cors 
import cors from 'cors';
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// root
app.get('/',  (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// api
app.get('/api/whoami', (req, res) => {
  const ip = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  res.json({ 
    ipaddress: ip,
    language: language,
    software: software
  });
});

// listener
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
