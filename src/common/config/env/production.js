'use strict';

export default { // 开启cluster利用多核cpu 提高并发处理能力
  cluster_on: true,
  db: { // 线上环境启动的数据库配置
    type: "mysql",
    adapter: {
      mysql: {
        host: "",
        port: "",
        database: '',
        user: '',
        password: '',
        prefix: 'think_',
        encoding: 'utf8'
      }
    }
  }
};