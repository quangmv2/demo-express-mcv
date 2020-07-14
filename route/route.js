const express = require('express');
const routers = express.Router();
const api = require('./api');
const middleware = require('../middleware/middleware');
const controller = require('../controller/controllerßßßßßß')

let wait = () => {
    return new Promise((rel, rej)=>{
        setTimeout(() => {
            rel(1);
        }, 10000);
    });
}

routers.use('/api', api);

routers.get('/nav', middleware,  function (req, res) {
    res.render('index');
});

routers.group('/home', (route) => {
    route.use(middleware);
    route.get('/', async (req, res)=>{
        await wait();
        res.send("HAHAH");
    });
});

module.exports = routers;