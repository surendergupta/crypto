const tronWeb = require('./index.js');
const TronWeb = tronWeb.tronWeb;
var response = {};
module.exports.create_account = async function (req,res) {
    try 
    {
        console.log("*** TRON GET NEW ADDRESS ***");
        response.id = req.id;
        response.data = await TronWeb.createAccount();
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};