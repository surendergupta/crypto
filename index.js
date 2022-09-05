const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const uuid = require('node-uuid');

const dotenv = require('dotenv');
const app = express();
dotenv.config();
const PORT = process.env.PORT | 5000;

app.use(assignId);
// adding Helmet to enhance your Rest API's security
app.use(helmet());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));
//app.use(morgan(':id :method :url :response-time', { stream: accessLogStream }));

// defining an array to work as the database (temporary solution)
const ads = [
    {title: 'Hello, world (again)!'}
];

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send(ads);
});

const tronAccountRoute = require('./routes/tron/account.js');
const etherAccountRoute = require('./routes/ethereum/account.js');

app.use('/api/tron/account', tronAccountRoute);
// http://localhost:5000/api/tron/account/create-account
app.use('/api/ethereum/account', etherAccountRoute);
// http://localhost:5000/api/ethereum/account/create-account


function assignId (req, res, next) {
    req.id = uuid.v4()
    next()
}

app.listen(PORT, () => console.log(`CRYPTO API App listening on port http://localhost:${PORT}`));