const tronWeb = require('./index.js');
const TronWeb = tronWeb.tronWeb;
var response = {};
module.exports.base58_to_hex = async function (req,res) {
    try 
    {
        console.log("*** TRON ADDRESS TO HEX ***");
        let address = req.body.address;
        response.id = req.id;
        response.data = await TronWeb.address.toHex(address);
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.hex_to_base58 = async function (req,res) {
    try 
    {
        console.log("*** TRON ADDRESS FROM HEX ***");
        let address = req.body.address;
        response.id = req.id;
        response.data = await TronWeb.address.fromHex(address);
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.privatekey_to_base58 = async function (req,res) {
    try 
    {
        console.log("*** TRON ADDRESS FROM HEX ***");
        let privatekey = req.body.privatekey;        
        response.id = req.id;
        response.data = await TronWeb.address.fromPrivateKey(privatekey);
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message;
        res.send(response);
    }
};