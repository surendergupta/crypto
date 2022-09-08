const web3Avax = require('./index.js');
const Web3 = web3Avax.web3Avax;
var response = {};

module.exports.withdraw_avax = async function (req,res) {    
    try 
    {
        console.log("*** WITHDRAW AVALANCHE AVAX COIN ***");
        let owner_pk = process.env.OWNER_AVAX_PRIVATE_KEY;
        let owner_address = await Web3.eth.accounts.privateKeyToAccount(owner_pk);
        owner_address = owner_address.address;
        let nonce = await Web3.eth.getTransactionCount(owner_address, 'latest');
        let address = req.body.address;
        let amount = req.body.amount;
        let maxPriorityFeePerGas = await Web3.utils.toWei('25', 'Gwei');
        let withdraw_amount = await Web3.utils.toWei(String(amount), 'ether');
        const transaction = {
            'to': address, // faucet address to return eth
            'value': withdraw_amount,
            'gasLimit': 100000,
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