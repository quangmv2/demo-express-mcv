require('dotenv').config();
require('express-group-routes');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const routers = require('./route/route'); 
const path = require('path');
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(routers);

http.listen(port, console.log('Ok Server'));