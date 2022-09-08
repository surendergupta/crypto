const tronWeb = require('./index.js');
const TronWeb = tronWeb.tronWeb;
var response = {};

module.exports.contract_instance = async function (req,res) {
    try 
    {
        console.log("*** Create Contract instance ***");
        const CONTRACT_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}];
        const CONTRACT_ADDRESS = 'TREwN2qRkME9TyQUz8dG6HfjEyKGMPHAS5';
        response.id = req.id;
        response.instance = await TronWeb.contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};