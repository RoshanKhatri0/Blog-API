const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
require('dotenv').config()
const morgan = require('morgan')
require('./model/connection')

app.use(morgan('dev'))

const BolgRoutes = require('./routes/BlogRoutes')

app.use('/api',BolgRoutes)

const port=process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
