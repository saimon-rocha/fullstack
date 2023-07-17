require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const app = express();
const { PORT } = process.env

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`server is on in port ${PORT}`);
});
