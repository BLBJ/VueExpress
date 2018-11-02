/**
 * @author wbding
 * @date 2018/11/2.
 * @description
 */
const path = require("path");
module.exports = {
    "postgres": {
        "host": "127.0.0.1",
        "port": 5432,
        "user": "postgres",
        "password": 123456,
        "database": "SYLVAN",
        "schema": "warlock",
        "dialect": "postgres"
    },
    "redis": [
        //     {
        //     "host": "127.0.0.1",
        //     "port": "6379",
        //     "db": 2,
        // },
        {
            host: '172.25.8.10',
            port: 6379,
            // pass: 33210460,
            db: 2,
        }
    ],
    "logger": {
        "filename": path.join(__dirname, "../log/access.log"),
        "level": 3
    },
    "session_prefix": "user:",
    "maxAge": 15 * 24 * 60 * 60 * 1000  //session有效期15天
};