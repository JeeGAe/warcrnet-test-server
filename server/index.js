const express = require('express');
// import express from 'express';
const app = express();
const scheduleRoute = require('./routes/schedule');
const todoRoute = require('./routes/todo');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const dbURL = process.env.MONGODB_URL;

mongoose.connect(dbURL)
.catch(e => console.log(e))
.then(res => console.log('mongodb is conneted!'))

app.use(cors({
  origin : '*'
}))

app.use(express.json());

app.use('/api/schedule', scheduleRoute);
app.use('/api/todo', todoRoute)

app.listen(4000, () => {
  console.log('listen...');
})
