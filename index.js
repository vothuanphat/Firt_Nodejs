const sql = require('mysql')
const Pool = require('mysql/lib/Pool')
const config = {
    user: 'sa',
    password: '12345',
    server: 'localhost',
    database: 'Firt_DBMS',
    options: {
        enableArithAbort: true
    }
}
sql.connect(config).then(Pool => {
    return Pool.request()
        .input('input_parameter', sql.int, 1)
        .query('select * from [User]')
}).then(result => {
    console.dir(result.recordset[1].user)
}).catch(err => {
    console.log(err);
});