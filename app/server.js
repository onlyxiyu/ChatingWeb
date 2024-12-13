// 引入必要的库
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// 创建数据库连接
const db = mysql.createConnection({
    host: 'localhost',
    user: 'xing',
    password: '999999',
    database: 'chating',
    port: 3306
});

// 连接到数据库
db.connect(err => {
    if (err) {
        console.error('数据库连接失败: ' + err.stack);
        return;
    }
    console.log('已连接到数据库');
});

// 注册端点
app.post('/注册', (req, res) => {
    const { 用户名, 密码 } = req.body;
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [用户名, 密码], (err, result) => {
        if (err) {
            res.status(500).send('注册失败');
        } else {
            res.status(200).send('注册成功');
        }
    });
});

// 登录端点
app.post('/登录', (req, res) => {
    const { 用户名, 密码 } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [用户名, 密码], (err, results) => {
        if (err) {
            res.status(500).send('登录失败');
        } else if (results.length > 0) {
            res.status(200).send('登录成功');
        } else {
            res.status(401).send('用户名或密码错误');
        }
    });
});

// 启动服务器
app.listen(3000, () => {
    console.log('服务器正在运行在端口 3000');
}); 