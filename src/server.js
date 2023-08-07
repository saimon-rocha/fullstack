require('dotenv').config()
require('./database/index')
const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const app = express();
const { PORT } = process.env;

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando no http://localhost:${PORT}/`);
});
