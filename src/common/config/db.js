'use strict';
/**
 * db config
 * @type {Object}
 */

// 本地mysql配置
// export default {
//   type: "mysql", //数据库类型
//   log_sql: true, //是否记录 sql 语句
//   log_connect: true, // 是否记录连接数据库的信息
//   adapter: {
//     mysql: {
//       host: "127.0.0.1", //数据库 host
//       port: "3307", //端口
//       database: "h5db", //数据库名称
//       user: "root", //账号
//       password: "usbw", //密码
//       prefix: "think_", //数据表前缀
//       encoding: "utf8", //数据库编码
//       nums_per_page: 10, //一页默认条数
//     },
//     mongo: {

//     }
//   },
//   cache: {
//     on: true,
//     type: "file",
//     timeout: 3600
//   }
// };

// mlab.org mongodb配置
// export default {
//   type: 'mongo',
//   log_sql: true,
//   log_connect: true,
//   adapter: {
//     mongo: {
//       host: "ds011923.mlab.com",
//       port: "11923",
//       database: 'ts_mdb',
//       user: 'root',
//       password: '123456',
//       prefix: 'think_',
//       encoding: 'utf8'
//     }
//   }
// }

// mongo本地配置
export default {
  type: 'mongo',
  log_sql: true,
  log_connect: true,
  adapter: {
    mongo: {
      host: "127.0.0.1",
      port: "27017",
      database: 'ts_mdb',
      user: '',
      password: '',
      prefix: 'think_',
      encoding: 'utf8'
    }
  }
}