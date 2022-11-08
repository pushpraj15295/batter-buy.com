const express = require('express')
const dotenv  = require('dotenv')

dotenv.config();
const app = express()

app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.get('/' ,(req, res) => res.send('wellcome to home'))

const port = process.env.PORT || 8080
app.listen(port ,()=>{ console.log('server running on port : http://localhost:8080') })