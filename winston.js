const winston = require('winston');
const path = require('path');
const date = new Date();

const day = date.getDay()>9?date.getDay():"0"+date.getDay();
const month = date.getMonth()>8?date.getMonth()+1:"0" + (date.getMonth() + 1);
const newDate = day + "-" + month + "-" + date.getFullYear();


module.exports = winston.createLogger({
  // format của log được kết hợp thông qua format.combine
  format: winston.format.combine(
    winston.format.json(),
    // Định dạng time cho log
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    // thêm màu sắc
    winston.format.colorize(),
    // thiết lập định dạng của log
    winston.format.printf(
      log => {
        // nếu log là error hiển thị stack trace còn không hiển thị message của log 
        if(log.stack) return `[${log.timestamp}] [${log.level}] ${log.stack}`;
        return  `[${log.timestamp}] [${log.level}] ${log.message}`;
      },
    ),
  ),
  transports: [
    
    new winston.transports.Console(),
    
    new winston.transports.File({ level: 'error', filename: path.join(__dirname, `system_logs/${newDate}-error.log`) }),
    new winston.transports.File({ filename: path.join(__dirname, `system_logs/${newDate}.log`) }),
    // new winston.transports.File({
    //     level: 'info',
    //     filename: path.join(__dirname, `log/${newDate}.log`)
    // }),
    // new winston.transports.File({
    //     level: 'verbose',
    //     filename: path.join(__dirname, `log/${newDate}.log`)
    // }),
    // new winston.transports.File({
    //     level: 'debug',
    //     filename: path.join(__dirname, `log/${newDate}.log`)
    // }),
    // new winston.transports.File({
    //     level: 'silly',
    //     filename: path.join(__dirname, `log/${newDate}.log`)
    // })
  ],
})