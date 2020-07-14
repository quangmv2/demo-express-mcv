const db = require('../database/connect_db');
const logger = require('../winston');

function getDate1() { 
    return new Promise((rel, rej)=>{
        db.query('SELECT * FROM attendance', (err, result, filed) => {
            if (!err) {
                rel(result);
                return;
            }
            logger.error(err);
            rej(err);
            
        });
    });
}
function getDate2() { 
    return new Promise((rel, rej)=>{
        db.query('SELECT * FROM attendance', (err, result, filed) => {
            if (!err) {
                rel(result);
                return;
            }
            logger.error(err);
            rej(err);
        });
    });
}

const index = async (req, res) => {
    let begin = Date.now();
    let data = [];
    let k = getDate1();
    let b = getDate2();
    let t = await k;
    let tt = await b;
    console.log(2);
    // if (typeof data === "object") data.sort((a, b) => a.id_action>b.id_action?1:-1);
    res.send(t.length + " record\nTime: " + (Date.now() - begin) + "ms")
    console.log(data.length)
}
exports.index = index;
exports.getDate1 = getDate1;