const express = require('express')
const dotenv  = require('dotenv')
const connectDB = require('./config/db.js')

dotenv.config();
const app = express()

app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.get('/' ,(req, res) => res.send('wellcome to home'))


connectDB();
const port = process.env.PORT || 8080
app.listen(port ,()=>{ console.log('server running on port : http://localhost:8080') })