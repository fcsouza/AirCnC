const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors') ;
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

const connectUsers = {};

mongoose.connect('mongodb+srv://gostack:gostack@gostack-m9tll.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology :true,
});

app.use((req, res, next) => {
    req.io = io;
    req.connectUsers = connectUsers;

    return next();
})

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    connectUsers[user_id] = socket.id;
});
//GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisação( para criação, edição)
app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);