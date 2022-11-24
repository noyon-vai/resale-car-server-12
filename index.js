const express = require('express');
const cors = require('cors');
require('dotenv').config();


const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors())
app.use(express.json())


app.get('/', async(req, res) => {
    res.send('resale server was running')
})

app.listen(port, () => console.log(`server running port : ${port}`))