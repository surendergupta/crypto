const tronWeb = require('./index.js');
const TronWeb = tronWeb.tronWeb;
var response = {};

module.exports.fromDecimal_to_hex = async function (req,res) {
    try 
    {
        console.log("*** Converts a number, or a string of numbers, into a hexadecimal string. ***");
        let input = req.body.input; //Number|String - number
        response.id = req.id;
        response.data = await TronWeb.fromDecimal(input);
        // return string
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.fromSun = async function (req,res) {
    try 
    {
        console.log("*** Helper function that will convert a value in SUN to TRX. (1 SUN = 0.000001 TRX) ***");
        let input = req.body.input; //String or Number
        response.id = req.id;
        response.data = await TronWeb.fromSun(input);
        // return string
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.fromAscii = async function (req,res) {
    try 
    {
        console.log("*** Helper function that will convert ASCII to HEX ***");
        let input = req.body.input; //Number|String - number
        response.id = req.id;
        response.data = await TronWeb.fromAscii(input);
        // return string
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.fromUtf8 = async function (req,res) {
    try 
    {
        console.log("*** Helper function that will convert UTF8 to HEX ***");
        let input = req.body.input; //String
        response.id = req.id;
        response.data = await TronWeb.fromUtf8(input);
        // return string
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.isAddress = async function (req,res) {
    try 
    {
        console.log("*** Helper function that will check if a given address is valid. ***");
        let input = req.body.input; //String
        response.id = req.id;
        response.data = await TronWeb.isAddress(input);
        // return Boolean
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.sha3 = async function (req,res) {
    try 
    {
        console.log("*** Helper function that will sha3 any value using keccak256. ***");
        let input = req.body.input; //String
        response.id = req.id;
        let hash = await TronWeb.sha3(input);
        response.data = await TronWeb.sha3(hash,{encoding:'hex'});
        // return Boolean
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.toAscii = async function (req,res) {
    try 
    {
        console.log("*** Convert HEX string to ASCII3 string. ***");
        let input = req.body.input; // hexString-a hexadecimal string.
        response.id = req.id;
        response.data = await TronWeb.toAscii(input);
        // return String-The ASCII value corresponding to the given hexadecimal string.
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.toBigNumber = async function (req,res) {
    try 
    {
        console.log("*** Convert a given number or hexadecimal string to a BigNumber. ***");
        let input = req.body.input; // Number | String-number in hexadecimal format
        response.id = req.id;
        response.data.number = await TronWeb.toBigNumber(input).toNumber();
        response.data.string = await TronWeb.toBigNumber(input).toString(10);
        // return BigNumber-BigNumber instance
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.toDecimal = async function (req,res) {
    try 
    {
        console.log("*** Convert a hexadecimal to a decimal number. ***");
        let input = req.body.input; // String-Hex string
        response.id = req.id;
        response.data = await TronWeb.toDecimal(input);
        // return Number-The hexadecimal value represented by the passed in string.
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.toHex = async function (req,res) {
    try 
    {
        console.log("*** Convert any value to HEX. ***");
        let input = req.body.input; // String | Number | Object | Array | BigNumber-The value to be converted to HEX.
        response.id = req.id;
        response.data = await TronWeb.toHex(input);
        // return string
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.toSun = async function (req,res) {
    try 
    {
        console.log("*** Helper function that will convert a value in TRX to SUN. (1 SUN = 0.000001 TRX) ***");
        let input = req.body.input; // Number.
        response.id = req.id;
        response.data = await TronWeb.toSun(input);
        // return string
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.toUtf8 = async function (req,res) {
    try 
    {
        console.log("*** Helper function that will convert HEX to UTF8 ***");
        let input = req.body.input; // Number.
        response.id = req.id;
        response.data = await TronWeb.toUtf8(input);
        // return string
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};