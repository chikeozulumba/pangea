const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, './.env') });

const app = express();
const port = process.env.PORT;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xss());

app.use(cors());
app.options('*', cors());

app.post('/', (req, res, next) => {
  console.log(JSON.stringify(req.body));
  res.sendStatus(200);
});

app.listen(port, () => {
  console.info(`Listening to port ${port}`);
});