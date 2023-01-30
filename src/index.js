const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const router = require('./routes/router');

const app = express();

app.use(express.urlencoded({ 
    extended: true 
}));
app.use(express.json());

app.use(cors({ 
    origin: true,
    credentials: true
}));

app.use('/', router);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening port ${process.env.SERVER_PORT}`)
});
