const webBnb3 = require('./index.js');
const constants = require('../../lib/constants');
const Web3 = webBnb3.webBnb3;
var response = {};

module.exports.withdraw_bnb = async function (req,res) {    
    try 
    {
        console.log("*** WITHDRAW BNB COIN ***");
        let owner_pk = process.env.OWNER_BNB_PRIVATE_KEY;
        let owner_address = await Web3.eth.accounts.privateKeyToAccount(owner_pk);
        owner_address = owner_address.address;
        let nonce = await Web3.eth.getTransactionCount(owner_address, 'latest');
        
        let address = req.body.address;
        let amount = req.body.amount;

        let withdraw_amount = await Web3.utils.toWei(amount, 'ether');
        let maxPriorityFeePerGas = await Web3.utils.toWei('10', 'Gwei');
        const transaction = {
            'to': address, // faucet address to return eth
            'value': withdraw_amount,
            'gasLimit': 21000,
            'gasPrice': maxPriorityFeePerGas,
            'nonce': nonce
        };
        const signedTx = await Web3.eth.accounts.signTransaction(transaction, owner_pk);
        let result = await Web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) { if (!error) { return hash; } else { return error; } });
        response.data = result;
        response.id = req.id;
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.withdraw_busd_bep20 = async function (req,res) {
    try
    {
        console.log("*** WITHDRAW BUSD COIN ***");
        let BUSD_CONTRACT_ADDRESS_DEMO = process.env.BUSD_CONTRACT_ADDRESS_DEMO
        let owner_pk = process.env.OWNER_BNB_PRIVATE_KEY
        let owner_address = await Web3.eth.accounts.privateKeyToAccount(owner_pk);
        owner_address = owner_address.address;
        console.log(owner_address);

        let address = req.body.address;
        let amount = req.body.amount;
        var gasLimit = await Web3.utils.toHex(Web3.utils.toWei('0.000083026', 'gwei'));
        var estimateGas = await Web3.utils.toHex(Web3.utils.toWei('10', 'gwei'));
        amount = await Web3.utils.BN(Web3.utils.toWei(amount, 'ether')).toString();
        await Web3.eth.accounts.wallet.add(owner_pk);
        BUSD_Contract = new Web3.eth.Contract(constants.ABI_OF_BUSD_DEMO, BUSD_CONTRACT_ADDRESS_DEMO);
        let result = await BUSD_Contract.methods.transfer(address, amount).send({ from: owner_address, gasPrice: estimateGas, gas: gasLimit }).then(output => {return output;});
        console.log(result);
        response.data = result;
        response.id = req.id;
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
}

module.exports.withdraw_eth_bep20 = async function (req,res) {
}

module.exports.withdraw_usdt_bep20 = async function (req,res) {
}

module.exports.withdraw_usdc_bep20 = async function (req,res) {
}

module.exports.withdraw_doge_bep20 = async function (req,res) {
}

module.exports.withdraw_shib_bep20 = async function (req,res) {
}

module.exports.withdraw_trx_bep20 = async function (req,res) {
}

module.exports.withdraw_avax_bep20 = async function (req,res) {
}

module.exports.withdraw_etc_bep20 = async function (req,res) {
}

module.exports.withdraw_ltc_bep20 = async function (req,res) {
}