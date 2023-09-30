const express = require('express')
const mongoose = require('mongoose')
const chalk = require('chalk')
const bodyParser = require('body-parser')

const routes = require('./routes/workflowRoute')
require('dotenv').config()
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cors());


mongoose
  .connect          (                process.env.MONGO_URI)
  .then(() => console.log(chalk.green('MongoDB Connect')))
  .catch((err) => console.log(chalk.red('❌❌❌ MongoDB Connection Error ❌❌❌ ---> ' + err)))

app.get('/', (_req, res) => {
  res.send('Thanks for the opportunity')
})

app.use(routes)


module.exports = app;