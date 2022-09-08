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
const ethereumAccountRoute = require('./routes/ethereum/account.js');
const binanceAccountRoute = require('./routes/binance/account.js');
const polygonAccountRoute = require('./routes/polygon/account.js');
const avalancheAccountRoute = require('./routes/avalanche/account.js');
//const bitcoinAccountRoute = require('./routes/bitcoin/account.js');

app.use('/api/tron/account', tronAccountRoute);
// http://localhost:5000/api/tron/account/create-account
// http://localhost:5000/api/tron/account/tohex
// http://localhost:5000/api/tron/account/fromhex
// http://localhost:5000/api/tron/account/from-private-key-address
// http://localhost:5000/api/tron/account/from-decimal-to-hex

// http://localhost:5000/api/tron/account/balance-trx
// http://localhost:5000/api/tron/account/balance-usdt
// http://localhost:5000/api/tron/account/balance-usdc
// http://localhost:5000/api/tron/account/balance-win
// http://localhost:5000/api/tron/account/balance-trendz
// http://localhost:5000/api/tron/account/balance-btt

// http://localhost:5000/api/tron/account/withdraw-tron
// http://localhost:5000/api/tron/account/withdraw-usdt
// http://localhost:5000/api/tron/account/withdraw-usdc
// http://localhost:5000/api/tron/account/withdraw-win
// http://localhost:5000/api/tron/account/withdraw-trendz
// http://localhost:5000/api/tron/account/withdraw-btt

app.use('/api/binance/account', binanceAccountRoute);
// http://localhost:5000/api/binance/account/create-account

// http://localhost:5000/api/binance/account/convert-towei

// http://localhost:5000/api/binance/account/withdraw-bnb
// http://localhost:5000/api/binance/account/withdraw-busd

app.use('/api/polygon/account', polygonAccountRoute);
// http://localhost:5000/api/polygon/account/create-account

// http://localhost:5000/api/polygon/account/convert-towei

// http://localhost:5000/api/polygon/account/withdraw-matic

app.use('/api/avalanche/account', avalancheAccountRoute);
// http://localhost:5000/api/avalanche/account/create-account

// http://localhost:5000/api/avalanche/account/convert-towei

// http://localhost:5000/api/avalanche/account/withdraw-avax

app.use('/api/ethereum/account', ethereumAccountRoute);
// http://localhost:5000/api/ethereum/account/create-account

// http://localhost:5000/api/ethereum/account/convert-towei

// http://localhost:5000/api/ethereum/account/withdraw-eth

//app.use('/api/bitcoin/account', bitcoinAccountRoute);
// http://localhost:5000/api/bitcoin/account/create-account


function assignId (req, res, next) {
    req.id = uuid.v4()
    next()
}

app.listen(PORT, () => console.log(`CRYPTO API App listening on port http://localhost:${PORT}`));