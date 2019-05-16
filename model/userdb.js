//执行所有与用户表相关的数据库操作
const mysql = require('mysql')
//创建一个链接对象
module.exports.query = (sql, callback) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'baixiu'
    })
    //用户链接
    connection.connect()
    //执行sql语句
    connection.query(sql, (err, result) => {
        if (err) {
            return console.log(err.message);
        }
        //执行回调函数
        callback(result)
    })
    //关闭链接
    connection.end()
}