import express, { Application } from 'express';
import { Socket, Server } from 'socket.io';
import socketio from 'socket.io';
import http from 'http';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import * as dotenv from 'dotenv';

const app: Application = express();
const server = http.createServer(app);
const io: Server = socketio(server);
const port = process.env.PORT || 8000;
const users = require('./routes/api/users');

import { key } from './config/keys';
dotenv.config();
app.use(cors())
app.use(express.static(path.resolve('./client/build')))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(passport.initialize());
require("./server/config/passport")(passport);

mongoose.connect(key.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Successful connection to db yippie'))
  .catch(err => console.log(err)
);

app.get('/', (req, res) => {
	res.send('hello')
})

app.use("/api/users", users);

server.listen(port, () => console.log(`Server running on port ${port}`))
