const express = require('express');
const routes = require('./routes');

const app = express();
//GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisação( para criação, edição)
app.use(express.json());
app.use(routes);

app.listen(3333);