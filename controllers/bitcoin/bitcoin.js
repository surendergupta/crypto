const axios = require('axios').default;
var response = {};
// const guid = '';
// const instance = axios.create({
//     baseURL: 'https://blockchain.info/merchant/'+guid+'/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
// });

module.exports.wallet_create = async function (req,res) {    
    try 
    {
        console.log("*** Bitcoin Wallet Create BTC ***");
        let result = await axios.get('https://api.blockchain.info/v2/create')
        .then(function (response) {
            // handle success
            console.log(response);
            return response;
        })
        .catch(function (error) {
            // handle error
            //console.log(error);
            return error;
        })
        .then(function () {
            // always executed
        });
        response.data = result;
        response.id = req.id;
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.json(response);
    }
};

