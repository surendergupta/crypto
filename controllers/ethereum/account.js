const webEth3 = require('./index.js');
const Web3 = webEth3.webEth3;
var response = {};
module.exports.create_account = async function (req,res) {
    try 
    {
        console.log("*** ETH GET NEW ADDRESS ***");
        response = await Web3.eth.accounts.create();
        res.json(response);
    }
    catch (error) 
    {
        response = error.message
        res.send(response);
    }
};

module.exports.privatekey_account = async function (req,res) {
    try 
    {
        console.log("*** ETH GET ADDRESS FROM PRIVATE KEY ***");
        let pk = req.body.private_key;
        response = await Web3.eth.accounts.privateKeyToAccount(pk);
        res.json(response);
    }
    catch (error) 
    {
        response = error.message
        res.send(response);
    }
};