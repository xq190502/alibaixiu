//引入userdb
const userdb = require('../model/userdb.js')
//处理所有与用户相关的逻辑
module.exports = {
    //得到用户的基本信息,并渲染到页面上
    getUsers: (req,res) =>{
        //在服务器中通过 ejs 结合 mysql 提供的数据进行渲染
        //将用户的所有信息查询出来
        userdb.query('SELECT * FROM users', result =>{
            res.render('users',{ result: result})
        })
    },
    //添加用户信息
    addUser: (req,res) =>{
        //接收用户参数
        var params = req.body
        //将数据提交到数据库
        let addSql = 'INSERT INTO users (slug, email, password, nickname, status) VALUES('${params.slug}','${params.email}','${params.password}','${params.nickname}','activated')'
        //3. 执行sql语句
        userdb.query(addSql, result =>{
            res.send({
                status: 200,
                msg: '新增用户成功'
            })
        })
    },
    // 动态获取所有用户信息
    getAllUsers: (req, res) => {
        // 1.0 去数据库中得到所有数据
        let selSql = `SELECT * FROM users`
        // 2.0 将结果响应回浏览器
        userdb.query(selSql, result => {
            res.send({
                data: result,
                status: 200,
                msg: '数据获取成功'
            })
        })
    },
    // 根据用户 id 删除用户
    delUser: (req, res) => {
        // 接收 id
        let id = req.query.id
        // 执行 sql
        let delSql = `DELETE FROM users WHERE id = ${id}`
        userdb.query(delSql, result => {
            res.send({
                status: 200,
                msg: '删除成功'
            })
        })
    }
}