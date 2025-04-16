const express = require('express');
const dbCoonect = require('./Config/db');
const router = require('./Routes/router');
const cors=require('cors')

const app = express()
app.use(express.json())
app.use(cors())
dbCoonect()
app.use(router)
app.listen(8000, () => {
    console.log("server Is running on port 8000");
})