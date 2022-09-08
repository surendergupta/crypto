const webBnb3 = require('./index.js');
const Web3 = webBnb3.webBnb3;
var response = {};

module.exports.randomHex = async function (req,res) {
    try 
    {
        console.log("*** Converts any length number max 64 byte into random hexadecimal string. ***");
        let input = req.body.input; //Number
        response.id = req.id;
        response.data = await Web3.utils.randomHex(input); // return string
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.BN = async function (req,res) {
    try 
    {
        console.log("*** A number, number string or HEX string to convert to a BN object. ***");
        let input = req.body.input; //String|Number
        var BN = await Web3.utils.BN;
        response.id = req.id;
        response.data = await new BN(input).toString(); // return Object
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.isBN = async function (req,res) {
    try 
    {
        console.log("*** A number, number string or HEX string to convert to a BN object. ***");
        let bn = req.body.input; // Object
        response.id = req.id;
        response.data = await Web3.utils.isBN(bn); // return Boolean
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.isHex = async function (req,res) {
    try 
    {
        console.log("*** Checks if a given string is a HEX string. ***");
        let hex = req.body.input; // String|HEX
        response.id = req.id;
        response.data = await Web3.utils.isHex(hex); // return Boolean
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
        console.log("*** Checks if a given string is a valid Ethereum address. It will also check the checksum, if the address has upper and lowercase letters. ***");
        let address = req.body.address; // String| An address string.
        response.id = req.id;
        response.data = await Web3.utils.isAddress(address); // return Boolean
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.toChecksumAddress = async function (req,res) {
    try 
    {
        console.log("*** Will convert an upper or lowercase Ethereum address to a checksum address. ***");
        let address = req.body.address; // String| An address string.
        response.id = req.id;
        response.data = await Web3.utils.toChecksumAddress(address); // return String
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.checkAddressChecksum = async function (req,res) {
    try 
    {
        console.log("*** Checks the checksum of a given address. Will also return false on non-checksum addresses. ***");
        let address = req.body.address; // String| An address string.
        response.id = req.id;
        response.data = await Web3.utils.checkAddressChecksum(address); // return Boolean
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
        console.log("*** Will auto convert any given value to HEX. Number strings will be interpreted as numbers. Text strings will be interpreted as UTF-8 strings. ***");
        let input = req.body.input; // String|Number|BN|BigNumber
        response.id = req.id;
        response.data = await Web3.utils.toHex(input); // return String
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.toBN = async function (req,res) {
    try 
    {
        console.log("*** Number to convert to a big number. ***");
        let input = req.body.input; // String|Number|HEX
        response.id = req.id;
        response.data = await Web3.utils.toBN(input).toString(); // return Object
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.hexToNumberString = async function (req,res) {
    try 
    {
        console.log("*** Number to convert to a big number. ***");
        let hex = req.body.input; // String|HEX
        response.id = req.id;
        response.data = await Web3.utils.hexToNumberString(hex); // return String
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

// toDecimal
module.exports.hexToNumber = async function (req,res) {
    try 
    {
        console.log("*** Returns the number representation of a given HEX value. ***");
        let hex = req.body.input; // String|HEX A string to hash.
        response.id = req.id;
        response.data = await Web3.utils.hexToNumber(hex); // return Number
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

// fromDecimal
module.exports.numberToHex = async function (req,res) {
    try 
    {
        console.log("*** Returns the HEX representation of a given number value.. ***");
        let number = req.body.input; // String|Number|BN|BigNumber.
        response.id = req.id;
        response.data = await Web3.utils.numberToHex(number); // return String
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

// toUtf8
module.exports.hexToUtf8 = async function (req,res) {
    try 
    {
        console.log("*** Returns the UTF-8 string representation of a given HEX value. ***");
        let hex = req.body.input; // String: A HEX string to convert to a UTF-8 string.
        response.id = req.id;
        response.data = await Web3.utils.hexToUtf8(hex); // return String
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.toWei = async function (req,res) {
    try 
    {
        console.log("*** Converts any ether value value into wei. ***");
        let number = req.body.input; // String|BN: The value.
        response.id = req.id;
        response.data = await Web3.utils.toWei(number, 'ether'); // return String|BN
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};

module.exports.fromWei = async function (req,res) {
    try 
    {
        console.log("*** Converts any wei value into an ether value. ***");
        let number = req.body.input; // String|BN: The value.
        response.id = req.id;
        response.data = await Web3.utils.fromWei(number, 'ether'); // return String|BN
        res.json(response);
    }
    catch (error) 
    {
        response.error = error.message
        res.send(response);
    }
};