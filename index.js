const express = require('express');
const dbCoonect = require('./Config/db');
const router = require('./Routes/router');
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
dbCoonect()
app.use(router)
const PORT = process.env.PORT || 8000;
app.listen(8000, () => {
    console.log("server Is running on port 8000");
})