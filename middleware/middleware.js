const logger = require('../winston');
const requestIp = require('request-ip');
let middleware = (req, res, next) => {
    console.log(req.query)
    if (Object.entries(req.query).length === 0) {
        res.send('No Login');
        logger.info('NO LOGIN\n Url ' + req.originalUrl);
        console.log(req.originalUrl);
        return;
    }
    next();
}
module.exports = middleware;