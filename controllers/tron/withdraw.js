const tronWeb = require('./index.js');
const TronWeb = tronWeb.tronWeb;
var response = {};

module.exports.balance_tron = async function (req,res) {
    console.log("*** BALANCE OF TRON TRX ***");
    try
    {
        let owner_pk = process.env.OWNER_TRON_PRIVATE_KEY;
        let owner_address = await TronWeb.address.fromPrivateKey(owner_pk);
        var result = await TronWeb.trx.getAccount( owner_address, ).then(output => {return output; });
        response.data = await TronWeb.fromSun(result.balance);
        response.id = req.id;
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.balance_usdt = async function (req,res) {
    
    const trc20ContractAddress = process.env.USDT_TRC_20_CONTRACT_ADDRESS_DEMO;
    try 
    {
        console.log("*** BALANCE OF TRC20 USDT TOKEN ***");
        let address = req.body.address;
        let contract = await TronWeb.contract().at(trc20ContractAddress);
        let balance = await contract.balanceOf(address).call();
        let balance_inSun = await TronWeb.toDecimal(balance._hex);
        response.balance = await TronWeb.fromSun(balance_inSun);
        response.id = req.id;
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.balance_usdc = async function (req,res) {
    const trc20ContractAddress = process.env.USDC_TRC_20_CONTRACT_ADDRESS_LIVE;
    try 
    {
        console.log("*** BALANCE OF TRC20 USDC TOKEN ***");
        let address = req.body.address;
        let contract = await TronWeb.contract().at(trc20ContractAddress);
        let balance = await contract.balanceOf(address).call();
        let balance_inSun = await TronWeb.toDecimal(balance._hex);
        response.balance = await TronWeb.fromSun(balance_inSun);
        response.id = req.id;
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.balance_wink = async function (req,res) {
    const trc20ContractAddress = process.env.WIN_TRC_20_CONTRACT_ADDRESS_DEMO;
    try 
    {
        console.log("*** BALANCE OF TRC20 WINK TOKEN ***");
        let address = req.body.address;
        let contract = await TronWeb.contract().at(trc20ContractAddress);
        let balance = await contract.balanceOf(address).call();
        let balance_inSun = await TronWeb.toDecimal(balance._hex);
        response.balance = await TronWeb.fromSun(balance_inSun);
        response.id = req.id;
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.balance_trendz = async function (req,res) {
    const trc20ContractAddress = process.env.TRENDZ_TRC_20_CONTRACT_ADDRESS_DEMO;
    try 
    {
        console.log("*** BALANCE OF TRC20 TRENDZCOIN TOKEN ***");
        let address = req.body.address;
        let contract = await TronWeb.contract().at(trc20ContractAddress);
        let balance = await contract.balanceOf(address).call();
        let balance_inSun = await TronWeb.toDecimal(balance._hex);
        response.balance = (balance_inSun) / 1000000000000000000;
        response.id = req.id;
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.balance_btt = async function (req,res) {
    const trc20ContractAddress = process.env.BTT_TRC_20_CONTRACT_ADDRESS_LIVE;
    try 
    {
        console.log("*** BALANCE OF TRC20 BTT TOKEN ***");
        let address = req.body.address;
        let contract = await TronWeb.contract().at(trc20ContractAddress);
        let balance = await contract.balanceOf(address).call();
        let balance_inSun = await TronWeb.toDecimal(balance._hex);
        response.balance = (balance_inSun) / 1000000000000000000;
        response.id = req.id;
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.withdraw_tron = async function (req,res) {
    try 
    {
        console.log("*** WITHDRAW TRON TRX ***");
        let owner_pk = process.env.OWNER_TRON_PRIVATE_KEY;
        let owner_address = await TronWeb.address.fromPrivateKey(owner_pk);
        
        let toAddress = req.body.address;
        let amount = req.body.amount;
        
        var balance_inSun = await TronWeb.trx.getAccount( owner_address, ).then(output => {return output; });
        var balance = await TronWeb.fromSun(balance_inSun.balance);
        
        if(balance < amount)
        {
            response.data = 'Insufficient balance.';
            response.id = req.id;
            res.json(response);
        }
        else
        {
            let amount_inSun = await TronWeb.toSun(amount);
            const tradeobj = await TronWeb.transactionBuilder.sendTrx(toAddress,amount_inSun,owner_address);
            const signedtxn = await TronWeb.trx.sign( tradeobj, owner_pk);
            const result = await TronWeb.trx.sendRawTransaction(signedtxn).then(output => { return output; });
            response.data = result;
            response.id = req.id;
            res.json(response);
        }
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.withdraw_usdt = async function (req,res) {
    const trc20ContractAddress = process.env.USDT_TRC_20_CONTRACT_ADDRESS_DEMO;
    try 
    {
        console.log("*** WITHDRAW TRC20 USDT TOKEN ***");
        let owner_pk = process.env.OWNER_TRON_PRIVATE_KEY;
        let owner_address = await TronWeb.address.fromPrivateKey(owner_pk);
        
        let address = req.body.address;
        let amount = req.body.amount;

        let contract = await TronWeb.contract().at(trc20ContractAddress);
        let balance = await contract.balanceOf(owner_address).call();
        let balance_inSun = await TronWeb.toDecimal(balance._hex);
        
        balance = await TronWeb.fromSun(balance_inSun);
        if(balance < amount)
        {
            response.data = 'Insufficient balance.';
            response.id = req.id;
            res.json(response);
        }
        else
        {
            let amount_inSun = await TronWeb.toSun(amount);
            let result = await contract.transfer(address, amount_inSun).send({ from: owner_address, feeLimit: 1000000 }).then(output => {return output;});
            response.data = result;
            response.id = req.id;
            res.json(response);
        }
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.withdraw_usdc = async function (req,res) {
    const trc20ContractAddress = process.env.USDC_TRC_20_CONTRACT_ADDRESS_LIVE;
    try 
    {
        console.log("*** WITHDRAW TRC20 USDC TOKEN ***");
        let owner_pk = process.env.OWNER_TRON_PRIVATE_KEY;
        let owner_address = await TronWeb.address.fromPrivateKey(owner_pk);
        let address = req.body.address;
        let amount = req.body.amount;
        
        let contract = await TronWeb.contract().at(trc20ContractAddress);
        let balance = await contract.balanceOf(owner_address).call();
        let balance_inSun = await TronWeb.toDecimal(balance._hex);
        
        balance = await TronWeb.fromSun(balance_inSun);
        
        if(balance < amount)
        {
            response.data = 'Insufficient balance.';
            response.id = req.id;
            res.json(response);
        }
        else
        {
            let amount_inSun = await TronWeb.toSun(amount);
            let result = await contract.transfer(address, amount_inSun).send({ from: owner_address, feeLimit: 1000000 }).then(output => {return output;});
            response.data = result;
            response.id = req.id;
            res.json(response);
        }
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.withdraw_wink = async function (req,res) {
    const trc20ContractAddress = process.env.WIN_TRC_20_CONTRACT_ADDRESS_DEMO;
    try 
    {
        console.log("*** WITHDRAW TRC20 WINK TOKEN ***");
        let owner_pk = process.env.OWNER_TRON_PRIVATE_KEY;
        let owner_address = await TronWeb.address.fromPrivateKey(owner_pk);
        
        let address = req.body.address;
        let amount = req.body.amount;
        
        let contract = await TronWeb.contract().at(trc20ContractAddress);
        let balance = await contract.balanceOf(owner_address).call();
        let balance_inSun = await TronWeb.toDecimal(balance._hex);
        
        balance = await TronWeb.fromSun(balance_inSun);
        
        if(balance < amount)
        {
            response.data = 'Insufficient balance.';
            response.id = req.id;
            res.json(response);
        }
        else
        {
            let amount_inSun = await TronWeb.toSun(amount);
            let result = await contract.transfer(address, amount_inSun).send({ from: owner_address, feeLimit: 1000000 }).then(output => {return output;});
            response.data = result;
            response.id = req.id;
            res.json(response);
        }
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.withdraw_trendz = async function (req,res) {
    const trc20ContractAddress = process.env.TRENDZ_TRC_20_CONTRACT_ADDRESS_DEMO;
    try 
    {
        console.log("*** WITHDRAW TRC20 TRENDZ TOKEN ***");
        let owner_pk = process.env.OWNER_TRON_PRIVATE_KEY;
        let owner_address = await TronWeb.address.fromPrivateKey(owner_pk);
        let baseMul = 1000000000000000000;
        let address = req.body.address;
        let amount = req.body.amount;
        
        let contract = await TronWeb.contract().at(trc20ContractAddress);
        let balance = await contract.balanceOf(owner_address).call();
        let balance_inSun = await TronWeb.toDecimal(balance._hex);
        
        balance = (balance_inSun / baseMul);
        
        if(balance < amount)
        {
            response.data = 'Insufficient balance.';
            response.id = req.id;
            res.json(response);
        }
        else
        {
            let amount_inSun = await TronWeb.toBigNumber((amount * baseMul)).toString(10);
            let result = await contract.transfer(address, amount_inSun).send({ from: owner_address, feeLimit: 1000000 }).then(output => {return output;});
            response.data = result;
            response.id = req.id;
            res.json(response);
        }
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.withdraw_btt = async function (req,res) {
    const trc20ContractAddress = process.env.BTT_TRC_20_CONTRACT_ADDRESS_LIVE;
    try 
    {
        console.log("*** WITHDRAW TRC20 BTT NEW TOKEN ***");
        let owner_pk = process.env.OWNER_TRON_PRIVATE_KEY;
        let owner_address = await TronWeb.address.fromPrivateKey(owner_pk);
        let baseMul = 1000000000000000000;
        let address = req.body.address;
        let amount = req.body.amount;
        
        let contract = await TronWeb.contract().at(trc20ContractAddress);
        let balance = await contract.balanceOf(owner_address).call();
        let balance_inSun = await TronWeb.toDecimal(balance._hex);
        
        balance = (balance_inSun / baseMul);
        
        if(balance < amount)
        {
            response.data = 'Insufficient balance.';
            response.id = req.id;
            res.json(response);
        }
        else
        {
            let amount_inSun = await TronWeb.toBigNumber((amount * baseMul)).toString(10);
            let result = await contract.transfer(address, amount_inSun).send({ from: owner_address, feeLimit: 1000000 }).then(output => {return output;});
            response.data = result;
            response.id = req.id;
            res.json(response);
        }
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};