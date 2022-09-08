const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider(process.env.FULL_NODE_SHASTA);
const solidityNode = new HttpProvider(process.env.FULL_NODE_SHASTA);
const eventServer = new HttpProvider(process.env.FULL_NODE_SHASTA);
const privateKey = process.env.OWNER_PRIVATE_KEY;
module.exports.tronWeb = new TronWeb(fullNode,solidityNode,eventServer, privateKey);