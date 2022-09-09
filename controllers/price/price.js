const axios = require('axios').default;
var response = {};

module.exports.price_list_usd = async function (req,res) {
    try
    {
        let result = await axios.get('https://api.nomics.com/v1/currencies/ticker?key=01a5cd0fa643d83afd0b5deb36099370&ids=BTC,ETH,USDT,BNB,BUSD,USDC,XRP,LUNA,ADA,SOL,AVAX,DOGE,SHIB,MATIC,CRO,DAI,LTC,BCH,TRX,ETC,WIN&interval=1h,1d&convert=USD&per-page=100&page=1')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
        const myCoin = {
            "id" : "TRENDZ",
            "currency" : "TRENDZ",
            "symbol" : "TRENDZ",
            "name" : "TRENDZ COIN",
            "logo_url" : "https://static.tronscan.org/production/upload/logo/TYh53tuVvTPuuw5agQV8dK1ALqtcQZxa2W.png",
            "status" : "active",
            "platform_currency" : "TRX",
            "price" : "0.00000125",
            "max_supply" : "990000000000000",
            "1h": {
                "volume" : "0",
                "price_change" : "0",
                "price_change_pct" : "0",
                "volume_change" : "0",
                "volume_change_pct" : "0"
            }
        };
        result.push(myCoin);
        response.data = result;
        response.id = req.id;
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.json(response);
    }
}

module.exports.price_list_trx = async function (req,res) {
    try
    {
        let result = await axios.get('https://api.nomics.com/v1/currencies/ticker?key=01a5cd0fa643d83afd0b5deb36099370&ids=BTC,ETH,USDT,BNB,BUSD,USDC,XRP,LUNA,ADA,SOL,AVAX,DOGE,SHIB,MATIC,CRO,DAI,LTC,BCH,TRX,ETC,WIN&interval=1h,1d&convert=TRX&per-page=100&page=1')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
        const myCoin = {
            "id" : "TRENDZ",
            "currency" : "TRENDZ",
            "symbol" : "TRENDZ",
            "name" : "TRENDZ COIN",
            "logo_url" : "https://static.tronscan.org/production/upload/logo/TYh53tuVvTPuuw5agQV8dK1ALqtcQZxa2W.png",
            "status" : "active",
            "platform_currency" : "TRX",
            "price" : ( result[2].price/ 800000).toFixed(18),
            "max_supply" : "990000000000000",
            "1h": {
                "volume" : "0",
                "price_change" : "0",
                "price_change_pct" : "0",
                "volume_change" : "0",
                "volume_change_pct" : "0"
            }
        };
        result.push(myCoin);
        response.data = result;
        response.id = req.id;
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.json(response);
    }
}