const express = require('express');
const cors = require('cors');
const connectDb = require('./server/database/connection');

require('dotenv').config();

const app = express();

connectDb();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./server/routes/taskRouter'));

const port = process.env.port || 8080;

app.listen(`${port}`, () => {
    console.log(`Server is running on ${port}`);
});